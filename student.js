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

// Trouver l'index de "Physics"
const physicsIndex = student.courses.indexOf("Physics");

// Créer un nouveau tableau contenant les deux premiers éléments de courses
const firstTwoCourses = student.courses.slice(0, 2);

// Afficher les résultats
console.log(student);
console.log(physicsIndex);
console.log(firstTwoCourses);
