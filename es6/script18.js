const factors = async n => {
    let results =[1];

    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            results.push(i);
        }
    }

    results.push(n);
    return results;
}

let p1 = factors(1000000024);

p1.then(data => console.log(`factors of 1000000024: ${data}`)).catch(err => console.log(err));

let p2 = factors(1024);
p2.then(data => console.log(`factors of 1024: ${data}`)).catch(err => console.log(err));

let p3 = factors(169);
p3.then(data => console.log(`factors of 169: ${data}`)).catch(err => console.log(err));
