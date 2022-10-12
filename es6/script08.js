//call-backs is a fucntion that accepts and executes another fucntion.

const greetUser = (userName,greetingProvider) => console.log(`${greetingProvider()} ${userName}!`);

const greetInEnglish = () => "Hello ";
const greetInTelugu = () => "Namaskaram ";
const greetInHindi = () => "Namaskar ";

const greetByTime = () => {
    let greeting="";
    let h = new Date().getHours();

    if(h>=9 && h<=11) greeting="Good Morning ";
    else if(h>=12 && h<=16) greeting="Good Noon ";
    else greeting="Good Evening "

    return greeting;
};

greetUser("Vamsy Kiran",greetInTelugu);
greetUser("Vamsy Kiran",greetInHindi);
greetUser("Vamsy Kiran",greetInEnglish);
greetUser("Vamsy Kiran",greetByTime);