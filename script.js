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
    },
    addChild: function(childName){

    },
    removeChild: function(childName){

    },
    renderChildren: function(){
        //returns list of children
    }

}

Person.setFirstName('Yaron');
console.log(Person.fullName());