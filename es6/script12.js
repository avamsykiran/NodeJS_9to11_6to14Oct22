
s1 = "Malayalam";
s2 = "Vamsy";

const isPallendrome = str => {
    let rev = "";
    for(let i=str.length-1;i>=0;i--){
        rev =`${rev}${str.charAt(i)}`;
    }
    console.log(rev);
    return rev.toLowerCase()===str.toLowerCase();
}

const printTirangle1 = str =>{
    str = str.toUpperCase();
    for(i=1;i<=str.length;i++){
        console.log(str.substring(0,i));
    }
}

const printTirangle2 = str =>{
    str = str.toUpperCase();
    for(i=0;i<str.length;i++){
        console.log(str.charAt(i).repeat(i+1));
    }
}

console.log(isPallendrome(s1));
console.log(isPallendrome(s2));

printTirangle1(s2);
printTirangle2(s2);
