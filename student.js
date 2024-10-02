let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modifier age et ajouter grade
student.age = 21;
student.grade = "A";

// Ajouter des cours au tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Trouver l'index de "Physics"
let physicsIndex = student.courses.indexOf("Physics");

// Créer un nouveau tableau contenant les deux premiers éléments de courses
let firstTwoCourses = student.courses.slice(0, 2);

// Afficher les résultats
console.log(" student  :", student);
console.log("Index 'Physics' :", physicsIndex);
console.log("2 premiers cours :", firstTwoCourses);
