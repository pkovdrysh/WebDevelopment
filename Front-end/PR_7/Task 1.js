function main(callback1, callback2) {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback1());
        }, 1000);
    }).then(value => {
        console.log(value);
    });

    let counter = 0;
    const interval = setInterval(() => {
        new Promise((resolve) => {
            resolve(callback2());
        }).then(value => {
            console.log(value);
        });
        counter++;
        if (counter === 3) {
            clearInterval(interval);
        }
    }, 1000);
}

module.exports = main;
