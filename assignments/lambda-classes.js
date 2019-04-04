// CODE here for your Lambda Classes
class Person {
    constructor (personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    phrase() {
        return `Hello my name is ${this.name} from ${this.location}.`
    }
}
class Instructor extends Person {
    constructor (instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}.`
    }
}
class Student extends Person {
    constructor (studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.name} loves the subject(s) ${this.favSubjects}.`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has submitted a sprint challenge on ${subject}.`
    }
}
class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}

//Instructor objects
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const bob = new Instructor({
    name: 'Bob',
    location: 'Los Angeles',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't repeat yourself`
  });

  //Student objects
  const jane = new Student({
    name: 'Jane',
    location: 'New York',
    age: 28,
    gender: 'female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Practice makes perfect`,
    previousBackground: 'No coding experience',
    className: 'WEB19',
    favSubjects: 'HTML and CSS'
  });

  const mike = new Student({
    name: 'Mike',
    location: 'Seattle',
    age: 24,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Never give up`,
    previousBackground: 'Recreational coding',
    className: 'WEB18',
    favSubjects: 'Classes and prototypes'
  });
  const julie = new Student({
    name: 'Julie',
    location: 'Montreal',
    age: 36,
    gender: 'female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Here we go again`,
    previousBackground: 'No coding experience',
    className: 'WEB19',
    favSubjects: 'Responsive design'
  });

  //ProjectManagers objects
  const molly = new ProjectManagers({
    name: 'Molly',
    location: 'Oakland',
    age: 35,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Change your life today`,
    previousBackground: 'Full-stack web engineering',
    gradClassName: 'WEB2',
    favInstructor: 'Josh'
  });

  const benny = new ProjectManagers({
    name: 'Benny',
    location: 'Detroit',
    age: 42,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `The past can't be changed`,
    previousBackground: 'Back-end engineering',
    gradClassName: 'CS1',
    favInstructor: 'Dan'
  });

console.log(fred.demo('CS101'));
console.log(bob.grade('Mike', 'Javascript-I'));
console.log(jane.sprintChallenge('Intro to JavaScript'));
console.log(mike.PRAssignment('Introduction to Git'));
console.log(julie.listsSubjects());
console.log(molly.debugsCode('Chris', 'JavaScript-IV'));
console.log(benny.standUp('#web19'));