class Key {
    private signature: string;

    constructor() {
        this.signature = Math.random().toString(10);
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean;
    public key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (key === this.key) {
            this.door = true;
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};