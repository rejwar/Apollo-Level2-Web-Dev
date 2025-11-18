


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




export function getLength(value: string | any[]): number {
    if (typeof value === "string") {
    return value.length;
    }

    if (Array.isArray(value)) {
    return value.length;
    }


    throw new Error("Unsupported type");
}




export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return ` 'Name: ${this.name}, Age: ${this.age } '`;
  }
}




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





export interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

export function printBookDetails(book: Book): void {
  let availability = book.isAvailable ? "Yes" : "No";

  const output =
    "Title: " +
    book.title +
    ", Author: " +
    book.author +
    ", Published: " +
    book.publishedYear +
    ", Available: " +
    availability;

  console.log(output);
}





export function getUniqueValues(
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] {
  let result: (number | string)[] = [];
  let rIndex = 0;

  
  function exists(arr: (number | string)[], length: number, value: number | string): boolean {
    for (let i = 0; i < length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  
  for (let i = 0; i < array1.length; i++) {
    if (!exists(result, rIndex, array1[i])) {
      result[rIndex] = array1[i];
      rIndex++;
    }
  }

  
  for (let i = 0; i < array2.length; i++) {
    if (!exists(result, rIndex, array2[i])) {
      result[rIndex] = array2[i];
      rIndex++;
    }
  }

  return result;
}






export function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  let total = 0;


  if (products.length === 0) {
    return 0;
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    
    const baseTotal = product.price * product.quantity;

  
    let finalTotalForProduct = baseTotal;
    if (product.discount !== undefined && product.discount !== null) {
      finalTotalForProduct = baseTotal - (baseTotal * product.discount) / 100;
    }

    total = total + finalTotalForProduct;
  }

  return total;
}
