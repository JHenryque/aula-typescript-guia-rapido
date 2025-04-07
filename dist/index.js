let massagen = "hello!";
console.log(massagen);
let newStudent = {
    name: "John",
    notes: ["8", "9", "10", "2"],
};
function mediaNota(notes) {
    let sum = 0;
    notes.forEach((note) => {
        sum += parseInt(note);
    });
    return sum / 4;
}
function printStudent(student) {
    console.log(`${student.name} has \n${mediaNota(student.notes)}  notes, \nand is: ${student.isAproved ? "aprovado" : "reprovado"}`);
}
//printStudent(newStudent);
let students = [
    {
        name: "John",
        notes: ["8", "9", "10", "2"],
        isAproved: true,
    },
    {
        name: "Ana",
        notes: ["8", "9"],
        isAproved: false,
    },
    {
        name: "mazar",
        notes: ["6", "5", "5", "2"],
        isAproved: false,
    },
];
students.forEach((student) => {
    printStudent(student);
});
let size;
let id;
function buttonStyle(size) {
    let style;
    if (size == "small") {
        style = {
            with: "100px",
            height: "60px",
        };
    }
    else {
        style = {
            with: "80px",
            height: "140px",
        };
    }
    return style;
}
console.log(buttonStyle("small"));
//HTML Elements
function getName(input) {
    let name = input === null || input === void 0 ? void 0 : input.value;
    console.log(name);
}
let input = document.querySelector("input#firstName");
getName(input);
