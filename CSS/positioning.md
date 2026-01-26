## Table of Contents

1. [Palette (Colors)](#palette)
2. [Box Model](#box-model)
3. [Typography](#typography)
4. [The Flow](#the-flow)
5. [CSS Positioning](#css-positioning)

---

## Palette

### Color Properties

- **color** - Text color
- **background-color** - Background color

### Example:

```css
.element {
  color: #333;
  background-color: #f0f0f0;
}
```

---

## Box Model

### Padding (Inner Space)

- **Meaning:** Andar ka space - padding ek element ke content ke around space deta hai
- **Shorthand analogy:** Jaise kapde ke andar cushion hota hai

```css
.box {
  padding: 10px; /* all sides */
  padding: 10px 20px; /* top/bottom, left/right */
  padding: 10px 20px 10px 20px; /* top, right, bottom, left */
}
```

### Margin (Outer Space)

- **Meaning:** Bahar ka space - margin element ke bahar spacing deta hai
- **Shorthand analogy:** Jaise akeli seat ke around space hota hai

```css
.box {
  margin: 10px; /* all sides */
  margin: 10px 20px; /* top/bottom, left/right */
  margin: 10px 20px 10px 20px; /* top, right, bottom, left */
}
```

### Width & Height

```css
.box {
  width: 100px;
  height: 50px;
}
```

### Border

```css
.box {
  border: 2px solid red;
  /* shorthand: border-width border-style border-color */
}
```

### Box Sizing

```css
.box {
  box-sizing: border-box; /* Include padding & border in width/height */
}
```

---

## Typography

### Font Properties

- **font-family** - Typeface/font name
- **font-size** - Text size
- **font-weight** - Text boldness (100-900 or bold/normal)
- **line-height** - Space between lines
- **text-align** - Alignment (left, center, right, justify)
- **text-decoration** - Underline, overline, line-through
- **letter-spacing** - Space between characters

### Example:

```css
.text {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.6;
  text-align: center;
  text-decoration: underline;
  letter-spacing: 2px;
}
```

---

## The Flow

### Display Property

- **block** - Takes full width, new line
- **inline** - Takes only needed width, flows with text
- **inline-block** - Hybrid of inline and block
- **none** - Hidden from page

### Position Property

- **relative** - Positioned relative to original position
- **absolute** - Positioned relative to positioned parent

### Stacking Order

- **z-index** - Controls layering of elements

---

## CSS Positioning

### 1. Relative Positioning

Element apni original jagah se thoda idhar-udhar move karta hai

- **Reference point** = uski khud ki original position
- **Normal flow me rehta hai**
- **Meri jagah koi aur nahi leta**

**Example:**

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

**💡 Designer Tip:** Bas thoda adjust karna hai, layout todna nahi.

---

### 2. Absolute Positioning

Element normal flow se bahar nikal jaata hai

- **Reference point** = nearest positioned parent (relative / absolute)
- **Agar koi positioned parent nahi mila** → screen ka top-left
- **Meri jagah dusre elements le sakte hain**

**Example:**

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
}
```

**💡 Designer Tip:** Chipkana hai (badge, icon, close button).

---

### 3. Relative + Absolute (Together)

- **Parent** → position: relative
- **Child** → position: absolute
- **Child parent ke andar hi freely move karta hai** (screen ke andar nahi)

**Example:**

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

**💡 Designer Tip:** Parent boundary banata hai, child uske andar ghoomta hai.

---

### 4. z-index

- **Batata hai kaun upar dikhega**
- **Sirf positioned elements pe kaam karta hai**
- **Sirf tab sense banata hai jab overlap ho**
- **Value zyada = element zyada upar**

**Example:**

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 10; /* This will appear above .box1 */
}
```

**💡 Designer Tip:** Layering ka game hai (popup > content > background).

---

## Practice Folders

- [absolute-positioning/](absolute-positioning/) - Examples of absolute positioning
- [relative-positioning/](relative-positioning/) - Examples of relative positioning
- [z-index/](z-index/) - Examples of z-index layering
