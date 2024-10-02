const student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modif age et ajout grade
student.age = 21;
student.grade = "A";

// Ajouter des cours au tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// index de "Physics"
const physicsIndex = student.courses.indexOf("Physics");

// Tableau 2 premiers cours
const firstTwoCourses = student.courses.slice(0, 2);

// Affiche  résultats
console.log(student);
console.log(physicsIndex);
console.log(firstTwoCourses);
