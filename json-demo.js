
let course = {
    title: "JavaScript",
    duration: 10,
    instructor: "John Doe",
    level: "Beginner",
    isFree: true,
    tags: ["javascript", "programming", "frontend"]
};


 let json = JSON.stringify(course);

// console.log(json);

// console.log(typeof(json));


let jsonObject = JSON.parse(json);

console.log(jsonObject);
console.log(typeof(jsonObject));