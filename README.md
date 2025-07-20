# 🧠 Vanilla JS Algorithms — From Simple to Advanced

Welcome to **Vanilla JS Algorithms** — a growing collection of hand-written algorithms using only **pure JavaScript**, ordered from **beginner-friendly** to **mind-bendingly hard**.

Each algorithm is fully self-contained in its own file and includes:
- 📝 **Top-of-file summary**: what the algorithm is and where it's used.
- 💻 **Executable code** with dummy data (for use in terminal or browser console).
- 🔍 **Step-by-step data flow explanation** in a long, detailed comment to help you **understand the logic** behind each step.

---

## 📚 What You’ll Find Here

| Level        | Topics Covered                       |
|--------------|---------------------------------------|
| 🟢 Easy       | Sorting, searching, math, arrays      |
| 🟡 Medium     | Recursion, hash maps, greedy logic    |
| 🔴 Hard       | Dynamic programming, graphs, trees    |
| 🧠 Advanced   | Backtracking, memoization, algorithms used in compilers, etc. |

---

## 🛠 Example File Structure

Each `.js` file follows this consistent pattern:

```js
/*
 * 📌 Algorithm: Binary Search
 * ✅ Description: Efficiently finds an item in a sorted array
 * 🧠 Use cases: Searching in large datasets, autocomplete, etc.
 */

// Dummy data
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

// The algorithm
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch(sortedArray, target)); // Output: 3

/*
 * 🔍 Step-by-step:
 * - Initial left = 0, right = 5
 * - mid = 2 → arr[2] = 5 < target → left = 3
 * - mid = 4 → arr[4] = 9 > target → right = 3
 * - mid = 3 → arr[3] = 7 === target → return 3
 */
