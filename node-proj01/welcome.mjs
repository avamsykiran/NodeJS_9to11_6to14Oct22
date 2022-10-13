
export const greetUser = userName => `Hello ${userName}`;

export const greetUserByTime = userName => {
    let greeting="";
    let h = new Date().getHours();

    if(h>=9 && h<=11) greeting="Good Morning ";
    else if(h>=12 && h<=16) greeting="Good Noon ";
    else greeting="Good Evening "

    return `${greeting} ${userName}`;
};