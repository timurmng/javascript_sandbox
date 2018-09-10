class Person {

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const timur = new Person('Timur', 'Mengazi', '11-19-1997');
timur.getsMarried('Sefu la bani');
console.log(Person.addNumbers(1,2));