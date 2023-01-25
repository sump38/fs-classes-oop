class Person {
    constructor(firstName, lastName = 'israeli', children = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.children = children;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    addChild(child) {
        this.children.push(child);
    }

    removeChild(child) {
        //code
    }

    renderFamilyTree() {
        //returns HTML of full family tree.
    }
}

const grandpa = new Person('moshe', 'ben');
const papa = new Person('yaron', 'david');
const grandson = new Person('nir', 'avraham');

grandpa.addChild(papa);
papa.addChild(grandson);
papa.addChild(new Person('yotam'));

document.getElementById('familyTree').innerHTML = grandpa.renderFamilyTree();