const generateNumberSeries = (lb, ub) => {
    let n = lb;
    let handler = setInterval(() => {
        console.log(n);
        n++;
        if (n > ub) {
            clearInterval(handler);
        }
    }, 500);
};

generateNumberSeries(10,20);
generateNumberSeries(110,120);

