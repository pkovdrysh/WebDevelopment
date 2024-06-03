function createPromise(parameter) {
    return new Promise((resolve, reject) => {
        if (parameter === "error") {
            reject('error');
        } else {
            const delay = parameter === "even" ? 2000 : 1000;
            setTimeout(() => {
                resolve(() => parameter);
            }, delay);
        }
    });
}

function promise(parameter) {
    try {
        return createPromise(parameter);
    } catch (e) {
        console.error(e);
    }
}

function main(data) {
    if (typeof data !== "number") {
        return promise("error");
    } else if (data % 2 === 0) {
        return promise("even");
    } else {
        return promise("odd");
    }
}

module.exports = main;
