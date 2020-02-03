class Product {
    constructor(Id, description, price, is_sold, categoryId, categoryName) {
        this.Id = Id;
        this.description = description;
        this.price = price;
        this.is_sold = is_sold;
        this.categoryId = categoryId;
        this.categoryName = categoryName
    }
}

class User {
    constructor(Id, First_Name, Last_Name, Email, Is_admin) {
        this.Id = Id;
        this.First_Name = First_Name;
        this.Last_Name = Last_Name;
        this.Email = Email;
        this.Is_admin = Is_admin
    }
}

module.exports = { Product, User }