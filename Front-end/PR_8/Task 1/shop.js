const stock = require('Practice 8/Task 1/stock.js');
const event = new stock();
const Item = require('itemObject');

class Shop {
    static #Card = 5158123456789012;

    static getCard() {
        return Shop.#Card;
    }

    static changeCard(card) {
        try {
            if (typeof card === "number" && card.toString().length === 16 && Number.isInteger(card)) {
                Shop.#Card = card;
            } else {
                throw new TypeError("Wrong parameter`s type! (MessageStorage.js, 9)");
            }
        } catch (error) {
            console.error(error);
        }
    }

    static catalog = [
        new Item("Gaming Laptop", 1200, "High-performance laptop for gaming", 1),
        new Item("Mechanical Keyboard", 150, "RGB mechanical keyboard with custom switches", 2),
        new Item("Gaming Mouse", 80, "Ergonomic mouse with customizable buttons", 3),
        new Item("Gaming Chair", 350, "Comfortable chair with lumbar support", 4)
    ];

    static printItem(id) {
        const item = Shop.findItem(id);
        if (item) {
            console.log("id: " + id);
            console.log(item.name + " -> " + item.price);
            console.log(item.about);
            console.log("");
        } else {
            console.log("Item not found");
        }
    }

    static printCatalog() {
        console.clear();
        Shop.catalog.forEach(item => Shop.printItem(item.id));
    }

    basket = [];

    addToBasket(item) {
        try {
            if (item instanceof Item) {
                console.clear();
                const newItem = Shop.findItem(item.id);
                if (newItem) {
                    this.basket.push(newItem.id);
                    Shop.printItem(newItem.id);
                    console.log("Added");
                } else {
                    console.log("Not found!");
                }
            } else {
                throw new TypeError("Wrong parameter`s type! (shop, 54)");
            }
        } catch (e) {
            console.error(e);
        }
    }

    clearBasket() {
        console.clear();
        this.showBasket();
        this.basket.length = 0;
        console.log("Basket is empty");
    }

    removeFromBasket(item) {
        try {
            if (item instanceof Item) {
                const myItem = Shop.findItem(item.id);
                const index = this.basket.indexOf(myItem.id);
                if (myItem && index !== -1) {
                    this.basket.splice(index, 1);
                    this.showBasket();
                } else {
                    console.log("Not found!");
                }
            } else {
                throw new TypeError("Wrong parameter`s type! (shop, 54)");
            }
        } catch (e) {
            console.error(e);
        }
    }

    showBasket() {
        console.clear();
        this.basket.forEach(itemId => Shop.printItem(itemId));
    }

    buy() {
        console.clear();
        this.showBasket();
        console.log("Bought! " + Shop.#Card + " was used");
        this.clearBasket();
    }

    quickBuy(item) {
        try {
            if (item instanceof Item) {
                const myItem = Shop.findItem(item.id);
                if (myItem) {
                    this.addToBasket(item);
                    this.buy();
                } else {
                    console.log("Not found!");
                }
            } else {
                throw new TypeError("Wrong parameter`s type! (shop, 54)");
            }
        } catch (e) {
            console.error(e);
        }
    }

    static findItem(itemId) {
        try {
            if (typeof itemId === "number") {
                return Shop.catalog.find(value => value.id === itemId);
            } else if (typeof itemId === "string") {
                return Shop.catalog.find(value => value.name === itemId);
            } else {
                throw new TypeError("Wrong parameter`s type! (shop.js)");
            }
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = Shop;
