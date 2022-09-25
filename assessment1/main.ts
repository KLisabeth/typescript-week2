// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: number = 5;
const aString: string = 'Hello';
const aBigInt: bigint = BigInt(100);
const anArray: (string | number)[] = ['hello', 1]
const anUnknown: unknown = null;
const anObject: object = { name: 'Katie', age: 39 };
const aTuple: [string, number] = ['Bye', 2];
enum AnEnum {
    first,
    second,
    third
}

// Implement this function any type accordingly
function isEven(number: number): boolean {
    return number % 2 === 0;
}

// Type the following following function and variable
type Person = {
    name: string
}

type Developer = {
    role: string
}

const jane: Person = {
    name: 'Jane'
}

const joe: Developer = {
    role: 'Devops'
}

const people: [Person, Developer] = [
    jane, joe
]

type People = (Person | Developer)[]

function printPeople(people: People): void {
    // Print the name of person or the role in this function
    people.forEach(person => {
        for (const key in person) {
            console.log(`${key}: ${person[key]}`)
        }
    });
}

// Type the encrpyt function correctly
const encryptText = (plainText: string, shift: number) => {
    let cipherArr: string[] = []
    let cipherLetter: string;

    plainText.split("").map(letter => {
        let code = letter.charCodeAt(0)
        if (letter === " ") {
            return cipherArr.push(letter)
        }
        // Uppercase letters
        if (code >= 65 && code <= 90) {
            cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
            cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
        }
        return cipherArr.push(cipherLetter)
    })
    return cipherArr.join("")
}


// Solve using a literal union type

type Vegetable = "Cucumber" | "Eggplant" | "Cabbage";
let vegetable: Vegetable = "Cucumber"; 



// Solve the following exercise with an intersection type
type Complainer = {
    complains: () => void
}

type Beerdrinker = {
    drinkBeer: () => void
}

type ChocolateLover = {
    eatChocolate: () => void
}

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void {
    belgian.complains();
    belgian.drinkBeer();
    belgian.eatChocolate();
}

const me: Belgian = {
    complains: (): void => {
        console.log('Belgians like to complain about Belgium weather')
    },
    drinkBeer: (): void => {
        console.log('Belgians drink about 11 milion litters of beer a year')
    },
    eatChocolate: (): void => {
        console.log('Belgians produce and eat a lot of chocolate')
    }
}

doBelgianThings(me)

export {
    isEven,
    printPeople,
    encryptText
};

