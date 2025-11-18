# TypeScript Interview Questions

# 1) TypeScript-এ `interface` এবং `type` এর পার্থক্য

* **interface** object structure ও class contract define করতে ব্যবহৃত হয়।
* **type** বেশি flexible — union, tuple, primitive alias করা যায়।
* **interface** সহজে extend হয়; **type**-এ extend করার জন্য intersection (`&`) লাগে।
* **interface** declaration merging সমর্থন করে; **type** সমর্থন করে না।

# উদাহরণ:

```ts
// interface extend
interface A { x: number; }
interface B extends A { y: number; }

// type extend
type A1 = { x: number };
type B1 = A1 & { y: number };
```

---

# 2) `keyof` কী এবং এর ব্যবহার কী?

`keyof` কোনো object type-এর keys গুলোর union তৈরি করে। এটি dynamic property access-কে type-safe করে।

# উদাহরণ:

```ts
type User = { name: string; age: number };
type Keys = keyof User; // "name" | "age"

function GetValue<T>(obj: T, key: keyof T) {
  return obj[key];
}
```
