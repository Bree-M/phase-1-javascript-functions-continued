const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
};

console.log(saturdayFun());
console.log(saturdayFun("got to the beach"));


const mondayWork = (task = "go to the office") => {
    return `This Monday, I will ${task}.`;

};

console.log(mondayWork());
console.log(mondayWork("work from home"));



const wrapAdjective = (flair = "*") => {
    return (adjective = "special") => {
        return `You are ${flair}${adjective}${flair}!`;

    };
};

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing"));
console.log(encouragingPromptFunction());