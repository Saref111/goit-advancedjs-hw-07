interface IKey {
    isKey: boolean;
}

interface IHouse {
    openDoor(key: IKey): void;
    comeIn(person: IPerson): void;
}

interface IPerson {
    getKey(): IKey;
}

class Key {
    private _isKey: boolean = true;

    public get isKey(): boolean {
        return this._isKey;
    }
}

class MyHouse implements IHouse {
    constructor(private key: IKey) {}

    public openDoor(key: IKey): void {
        if (key.isKey) {
            console.log('Open door');
        } else {
            console.log('You can not open door');
        }
    }

    public comeIn(person: IPerson): void {
        this.openDoor(person.getKey());
    }
}

class Person implements IPerson {
    constructor(private key: IKey) {}

    public getKey(): IKey {
        return this.key;
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
