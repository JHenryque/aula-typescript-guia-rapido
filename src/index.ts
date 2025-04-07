let massagen = "hello!";
console.log(massagen);

let newStudent = {
  name: "John",
  notes: ["8", "9", "10", "2"],
};

//objetos
//type alias for student
// type Student = {
//   name: string;
//   notes: string[];
//   isAproved?: boolean;
// };

// interface Student
interface Person {
  name: string;
}

interface Student extends Person {
  notes: string[];
  // use ? to difine an optional property fot the object
  isAproved?: boolean;
}

function mediaNota(notes: string[]): number {
  let sum = 0;
  notes.forEach((note) => {
    sum += parseInt(note);
  });
  return sum / 4;
}

function printStudent(student: Student): any {
  console.log(
    `${student.name} has \n${mediaNota(student.notes)}  notes, \nand is: ${
      student.isAproved ? "aprovado" : "reprovado"
    }`
  );
}

//printStudent(newStudent);

let students: Student[] = [
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

let size: "small";

let id: number | string;

function buttonStyle(size: "small" | "large"): any {
  let style: { with: string; height: string };

  if (size == "small") {
    style = {
      with: "100px",
      height: "60px",
    };
  } else {
    style = {
      with: "80px",
      height: "140px",
    };
  }
  return style;
}

console.log(buttonStyle("small"));

//HTML Elements

function getName(input: HTMLInputElement | null) {
  let name = input?.value;
  console.log(name);
}

let input = document.querySelector("input#firstName") as HTMLInputElement;

getName(input);
