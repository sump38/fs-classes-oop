class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak() {
        console.log('hello world');
    }


}

class Student extends Human {

    constructor(firstName, lastName, topics) {
        super(firstName, lastName);
        this.topics = topics;
    }

    speak() {
        super.speak();
        console.log(`I'm a student`);
    }
}

class Teacher extends Human {
    constructor(firstName, lastName, topic) {
        super(firstName, lastName);
        this.topic = topic;
    }
}

class Classroom {
    constructor(name, teacher, students = []) {
        this.name = name;
        this.teacher = teacher;
        this.students = students;
    }
}

 const student = new Student('Moshe', 'Ben' , []);