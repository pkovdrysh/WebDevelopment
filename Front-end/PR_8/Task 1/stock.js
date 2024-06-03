const event = require('events');
const Shop = require('shop');
const account = new Shop();
const Item = require('itemObject');

class Stock extends event {
    constructor(){
        super();
        this.on("add to basket", (item) => {
            try{
                if(item instanceof Item){
                    account.addToBasket(item);
                }
                else{
                    throw new TypeError("Wrong parameter`s type! (stock, 11)");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        this.on("remove from basket", (item) => {
            try{
                if(item instanceof Item){
                    account.removeFromBasket(item);
                }
                else{
                    throw new TypeError("Wrong parameter`s type! (stock, 24)");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        this.on("clear basket", () => {
            account.clearBasket();
        });
        this.on("make order", () => {
            account.buy();
        });
        this.on("quick buy", (item) => {
            try{
                if(item instanceof Item){
                    account.quickBuy(item);
                }
                else{
                    throw new TypeError("Wrong parameter`s type! (stock, 41)");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        this.on("show basket", () => {
            account.showBasket();
        });
        this.on("change card", (card) => {
            try{
                if(typeof card === 'number'){
                    Shop.changeCard(card);
                }
                else{
                    throw new TypeError("Wrong parameter`s type! (shop, 59)");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        this.on("print card", () => {
            console.clear();
            console.log("Payment card: " + Shop.getCard());
        });
        this.on("show catalog", () => {
            Shop.printCatalog();
        });
    }
}
module.exports = Stock;
