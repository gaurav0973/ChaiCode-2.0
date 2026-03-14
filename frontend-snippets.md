# 📘 Frontend Snippet Library

A personal collection of reusable HTML + CSS patterns for fast development.

## 1️⃣ CSS Reset (Always Start With This)

Removes inconsistent browser defaults.

### CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Why use this?

Browsers add default styles like:

- body margin
- heading spacing
- button padding

Resetting them gives **full control over layout**.

---

## 2️⃣ Centering a Div (Flexbox Method)

Most common modern technique.

### HTML

```html
<div class="container">
  <div class="center">
    <h1>Hello World</h1>
  </div>
</div>
```

### CSS

```css
.container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center; /* vertical */
  height: 100vh;
}
```

### Key Idea

Parent must have height.

- display:flex
- justify-content:center
- align-items:center

---

## 3️⃣ Centering Using CSS Grid

Even simpler sometimes.

### HTML

```html
<div class="container">
  <div class="box">Centered</div>
</div>
```

### CSS

```css
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

`place-items: center` = horizontal + vertical centering.

---

## 4️⃣ Standard Button Styling

Good buttons should follow consistent UI rules.

### HTML

```html
<button class="btn">Toggle Theme</button>
```

### CSS

```css
.btn {
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: black;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn:hover {
  opacity: 0.8;
}
```

### Button Rules

✔ good padding  
✔ pointer cursor  
✔ hover state  
✔ rounded corners

---

## 5️⃣ Card UI Layout

Used everywhere (dashboards, blogs, products).

### HTML

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Description text</p>
</div>
```

### CSS

```css
.card {
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
```

---

## 6️⃣ Responsive Container

Standard layout wrapper.

### HTML

```html
<div class="container">Content here</div>
```

### CSS

```css
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
```

### Why?

Keeps content **centered and readable** on large screens.

---

## 7️⃣ Flexbox Layout

Used for navigation bars and horizontal layouts.

### HTML

```html
<div class="nav">
  <div>Logo</div>
  <div>Menu</div>
</div>
```

### CSS

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

## 8️⃣ Simple Navbar

### HTML

```html
<nav class="navbar">
  <h2>Logo</h2>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

### CSS

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.navbar ul {
  display: flex;
  gap: 20px;
  list-style: none;
}
```

---

## 9️⃣ Grid Layout

Great for dashboards and galleries.

### HTML

```html
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### CSS

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

---

## 🔟 Dark Mode Base

Used in your **theme toggle project**.

### CSS

```css
body.dark {
  background: black;
  color: white;
}
```

Toggle using JS.

---

## 1️⃣1️⃣ Smooth Hover Effect

### HTML

```html
<div class="box"></div>
```

### CSS

```css
.box {
  width: 100px;
  height: 100px;
  background: red;
  transition: 0.3s;
}

.box:hover {
  transform: scale(1.1);
}
```

---

## 1️⃣2️⃣ Image Responsive Rule

Always use this.

### CSS

```css
img {
  max-width: 100%;
  height: auto;
}
```

Prevents images from breaking layouts.

---

## 1️⃣3️⃣ Glassmorphism Card

Modern UI style.

### CSS

```css
.glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 20px;
}
```

---

## 1️⃣4️⃣ Vertical Stack Layout

### CSS

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
```

Very useful for **forms and cards**.

---
