class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    public getSignature(): number {
        return this.signature;
    }
}


class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    private tenants: Person[] = [];
    protected door: boolean = false;

    constructor(protected key: Key) {}

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}
const key1 = new Key();

const house1 = new MyHouse(key1);
const person1 = new Person(key1);

house1.openDoor(person1.getKey());

house1.comeIn(person1);

const key2  = new Key();
const person2 = new Person(key2);
const house2 = new MyHouse(key2);

house2.comeIn(person2);
house2.comeIn(person1);

console.log(house2); // tenants still empty


house2.openDoor(person1.getKey()); // shouldn't be open
house2.openDoor(person2.getKey()); // now the door is open

house2.comeIn(person2);
house2.comeIn(person1);

console.log(house2); // tenants.length === 2





export {};
