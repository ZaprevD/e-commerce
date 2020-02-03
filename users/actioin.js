const user = require("../dbModels/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require("dotenv").config();
const { User } = require("../models");
getAllUsers = async (req, res) => {
    try {
        let rawData = await user.findAll({
            attributes: ["First_Name", "Last_Name", "Email"]
        });
        let str = JSON.stringify(rawData);
        return str;
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getUserByEmail = async (email) => {
    try {
        const dbUser = await user.findAll({
            where: {
                Email: email
            }
        });
        return JSON.stringify(dbUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

registerUser = async (req, res) => {
    try {
        let allUsers = await getAllUsers();
        let clearData = JSON.parse(allUsers);
        let found = clearData.some(user => user.Email === req.body.Email);
        if (!found) {
            let hash = bcrypt.hashSync(req.body.password, 10);
            await user.create({
                First_Name: req.body.firstName,
                Last_Name: req.body.lastName,
                Email: req.body.email,
                Password: hash
            }).then(() => res.status(200).send("User Registered!"));
        } else {
            res.status(412).send("User alredy exists");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


loginUser = async (req, res) => {
    try {
        const clearData = await getUserByEmail(req.body.email);
        const dbUser = JSON.parse(clearData)[0];
        if (dbUser !== undefined) {
            let match = bcrypt.compareSync(req.body.password, dbUser.Password);
            if (match) {
                const currentUser = new User(dbUser.Id, dbUser.First_Name, dbUser.Last_Name, dbUser.Email,
                    dbUser.Is_admin)
                let token = jwt.sign({ currentUser }, process.env.SECRET, { expiresIn: "2h" });
                res.status(200).send(token);
            } else {
                res.status(403).send("Invalid Password");
            }
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllUsers, registerUser, loginUser }