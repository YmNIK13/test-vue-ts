// Об'єкт з інтерфейсом
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // ? означає, що поле необов'язкове
    tags?: string[];
}

// Функція з типами параметрів та повернення
function greet(user: User): string {
    let message: string = "";
    message += `Hello, ${user.name}!`;
    if (user.isAdmin) {
        message += " You are an admin!";
    }
    if (user.tags) {
        message += ` Tags: ${user.tags.join(", ")}`;
    }
    return message;
}

const user1: User = {name: "Anna", age: 50};
console.log(greet(user1));


// Типізація змінних
let username: string = "Mik";
let age: number = 25;
let isAdmin: boolean = true;

// Масив з типами
let tags: string[] = ["vue", "typescript", "vite"];

const user2: User = {name: username, age, isAdmin, tags};


console.log(greet(user2));
