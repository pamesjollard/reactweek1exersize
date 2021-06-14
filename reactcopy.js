class Student {
    constructor(nameParam, emailParam, communityParam) {
        this.name = nameParam;
        this.email = emailParam;
        this.community = communityParam;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student) {
        if (this.students.filter(s => s.email === student.email.length)) {
            console.log(`the student ${student.email} already exits`
            )
        }
    
    registerStudent(student) {
        this.students.filter((currentStudent) => {
           if (this.students.filter(s => s.email === student.email).length {
               console.log(`the student ${student.email}`);

               return studentToRegister;
           }

           this.students.push(...newStudents);

        });

           return newStudents;
    }

}

 //write some code that can add a student to our students 
    //but only if the student doesnt exist in the array

// write the method - params: student that we're adding
//test that the function and parameter are actually working.
//access the array
//filter the array - creates a new array and adds items into it, if a boolean value is true
//if the student that was passed into the function has the same email as a student in our array
//DON'T ADD THEM
//else add them
//return array



const Pames = new Student("Pames", "P@gmail.com", "bootstrap")
const Aaron = new Student("Aaron", "A@gmail.com", "react")
//console.log("Pames");
const bootstrap = new Bootcamp("bootsrap", "Intermediate")
const react = new Bootcamp("bootstrap", "Beginner")
//console.log('my bootcamp', nucamp);
//console.log(nucamp.registerStudent(Pames));

bootstrap.registerStudent(Pames);
react.registerStudent(Aaron);

console.log()