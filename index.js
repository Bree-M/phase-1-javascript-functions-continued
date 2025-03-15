const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
};

console.log(saturdayFun());
console.log(saturdayFun("got to the beach"));


const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}!`;

};

console.log(mondayWork());
console.log(mondayWork("workout when i wake up"));

const wrapAdjective = (flair = "*") => {
    return (adjective = "special") => {
        return `You are ${flair}${adjective}${flair}!`;

    };
};

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing"));
console.log(encouragingPromptFunction());