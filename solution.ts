
// Problem 1:

export function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
    
    return value.toUpperCase();
    }

    if (typeof value === "number") {
    
    return value * 10;
    }

    if (typeof value === "boolean") {
    
    return !value;
    } 

    throw new Error("Unsupported type");
}


// Problem 2:

export function getLength(value: string | any[]): number {
    if (typeof value === "string") {
    return value.length;
    }

    if (Array.isArray(value)) {
    return value.length;
    }


    throw new Error("Unsupported type");
}


// Problem 3:

export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


// Problem 4:

export function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {

  const result: { title: string; rating: number }[] = [];

  for (let i = 0; i < items.length; i++) {
    const current = items[i];

    if (current.rating >= 4) {
      result[result.length] = current; 
    }
  }

  return result;
}


// Problem 5:

export function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  
  const result: { id: number; name: string; email: string; isActive: boolean }[] = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user.isActive === true) {
      
      result[result.length] = user;
    }
  }

  return result;
}
