console.log('example object');

const Person = {
    firstName: 'Moshe',
    lastName: 'Ben',
    age: 99,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    setFirstName: function(newFirstName){
      this.firstName = newFirstName;  
    }
}

Person.setFirstName('Yaron');
console.log(Person.fullName());