class student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'S.C Girls High school';
    }
}
const student1 = new student(12, 'Riya');
const student2 = new student(18, 'Diya');
const student3 = new student(14, 'Jhon')
console.log(student1, student2, student3);
console.log(student1.name, student2.name);