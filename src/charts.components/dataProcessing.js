// import React from "react";
// import data from "./data";
let overallItem = [],
    featureOne = [],
    featureTwo = [],
    featureThree = [];

let dataProcessing = () => {
    overallItem = [
        { name: "negative", y: 60 },
        { name: "positive", y: 40 }
    ];

    featureOne = [
        { name: "negative", y: 20 },
        { name: "positive", y: 80 }
    ];

    featureTwo = [
        { name: "negative", y: 45 },
        { name: "positive", y: 55 }
    ];

    featureThree = [
        { name: "negative", y: 90 },
        { name: "positive", y: 10 }
    ];
};

export default dataProcessing;
export { overallItem, featureOne, featureTwo, featureThree };
