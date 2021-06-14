class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    };

    registerStudent(student) {
        if(this.students.filter(student => student.email === student.email.length)) 
        console.log(`The student ${student.email} is already registered.`);

        return; 
    };  
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



