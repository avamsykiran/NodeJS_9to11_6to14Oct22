//let and var

function f1(){
    x = 100;
    console.log(x);
    var y = 101;
    console.log(y);
    if(true){
        var a = 200;
        let b = 201;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    //console.log(b);
}

f1();
console.log(x);
//console.log(y);