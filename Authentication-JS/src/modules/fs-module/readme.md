# FS Module Notes

## What You Can Do With `fs`

- Create
- Read (read me encoding dena hota hai)
- Update
- Delete
- Directory/Folder operations

## Sync vs Async

### 1) Sync

- Blocking code
- Main thread ko block kar deta hai

### 2) Async (Callback Based)

- Non-blocking code
- Main thread ko block nahi karta
- Callback pattern use hota hai

#### Problem: Callback Hell

Code samajhna aur maintain karna mushkil ho jata hai.

Example: `a.txt` se read karo -> `b.txt` me write karo -> `a.txt` delete karo

```js
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  fs.writeFile("b.txt", data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    fs.unlink("a.txt", (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return;
      }

      console.log("File operations completed successfully!");
    });
  });
});
```

#### Solution

- Promises
- `async/await`

### 3) Async (Promise Based)

- Non-blocking code
- Main thread ko block nahi karta
- Promise-based APIs use hoti hain

Example: `a.txt` se read karo -> `b.txt` me write karo -> `a.txt` delete karo

```js
async function fileOperations() {
  try {
    const data = await fs.readFile("a.txt", "utf-8");
    await fs.writeFile("b.txt", data);
    await fs.unlink("a.txt");
    console.log("File operations completed successfully!");
  } catch (err) {
    console.error("Error during file operations:", err);
  }
}

fileOperations();
```

## Common `fs` Sync Methods

Most of the time ye methods use honge:

```js
// Write file
fs.writeFileSync("file.txt", "Hello, World!");

// Read file
const data = fs.readFileSync("file.txt", "utf-8");

// Update file
fs.appendFileSync("file.txt", "\nAppended text.");

// Delete file (sirf file delete hogi)
fs.unlinkSync("file.txt");

// Create directory
fs.mkdirSync("myDirectory");
```

## More Useful Methods

```js
// Rename
fs.renameSync("oldName.txt", "newName.txt");

// Copy (recursive directories ke liye)
fs.cpSync("source.txt", "destination.txt", { recursive: true });

// Delete folder (sirf folder delete hoga)
fs.rmdirSync("myDirectory", { recursive: true });
```
