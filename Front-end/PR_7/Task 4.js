const Supply = require('./Supply');

function moduleCallBack(){
    return new Promise((resolve) => {
        resolve("Завтрак готов");
    });
}

function ifSupply(supply){
    if (!(supply instanceof Supply)) {
        throw new Error("Параметр должен быть объектом класса Supply");
    }
}

function boilWater(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifWaterAtHome && supply.ifElectricityAtHome) {
                setTimeout(() => {
                    console.log("Вода закипела!");
                    resolve();
                }, 20000);
            } else {
                reject("Вода или электричество отсутствуют");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function addTeaPack(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifTeaAtHome) {
                setTimeout(() => {
                    console.log("Чайный пакетик готов!");
                    resolve();
                }, 5000);
            } else {
                reject("Чайный пакетик отсутствует");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function addSugar(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifSugarAtHome) {
                setTimeout(() => {
                    console.log("Сахар добавлен!");
                    resolve();
                }, 2000);
            } else {
                reject("Сахар отсутствует");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function sliceBread(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifBreadAtHome) {
                setTimeout(() => {
                    console.log("Хлеб нарезан!");
                    resolve();
                }, 10000);
            } else {
                reject("Хлеб отсутствует");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function makeToasts(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifElectricityAtHome) {
                setTimeout(() => {
                    console.log("Тосты готовы!");
                    resolve();
                }, 10000);
            } else {
                reject("Электричество отсутствует");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function spreadButter(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifButterAtHome) {
                setTimeout(() => {
                    console.log("Масло намазано!");
                    resolve();
                }, 5000);
            } else {
                reject("Масло отсутствует");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function sliceSausages(supply){
    try {
        ifSupply(supply);
        return new Promise((resolve, reject) => {
            if (supply.ifSausagesAtHome) {
                setTimeout(() => {
                    console.log("Сосиски нарезаны!");
                    resolve();
                }, 10000);
            } else {
                reject("Сосиски отсутствуют");
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function makeBreakfast(supply){
    boilWater(supply)
        .then(() => addTeaPack(supply))
        .then(() => addSugar(supply))
        .then(() => {
            console.log("Чай готов");
            return sliceBread(supply);
        })
        .then(() => makeToasts(supply))
        .then(() => spreadButter(supply))
        .then(() => sliceSausages(supply))
        .then(() => {
            console.log("Сэндвич готов");
            return moduleCallBack();
        })
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = makeBreakfast;
