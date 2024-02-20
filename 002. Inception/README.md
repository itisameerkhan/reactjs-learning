# 📍 Inception

<img src="https://gaper.io/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-13-at-2.57.02-PM.jpeg">

## ⭐ React CDN Links

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

A **content delivery network (CDN)** is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

#### 📌 By Simply log `React` in the console we will get this 

![demo](/assets/demo1.png)

#### 📌 By Simply log `ReactDOM` in the console we will get this 

![DEMO](/assets/demo2.png)

## ⭐ Basic **HELLO WORLD** Program

```js
const heading = React.createElement("h1", {}, "Hello World From React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

### ✨ let's break down the provided React code step by step:

```js
const heading = React.createElement("h1", {}, "Hello World From React");
```

#### 📌 1. `React.createElement()`: This is a function provided by React to create React elements. It takes three arguments:

* The first argument is the type of the element you want to create, in this case, **"h1"** for a heading level 1 element.

* The second argument is an object containing any properties or attributes you want to assign to the element. In this example, an empty object {} means there are no additional properties or attributes.

* The third argument is the content or children of the element. Here, it's the text content **"Hello World From React"**.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

#### 📌 2. `ReactDOM.createRoot()`:

* This is a function provided by `ReactDOM` to create a root level React component. It takes one argument, which is the DOM element where you want to mount your React application. In this case, it's `document.getElementById("root")`, which presumably refers to a `<div>` element with the id "**root**" in your HTML document.

* So, `root` is a reference to the root level component of your React application, which will be mounted into the DOM element with the id "**root**".

```js
root.render(heading);
```

#### 📌 3. `root.render()`:

* This is a method provided by the `root` component created with `ReactDOM.createRoot()`. It is used to render React elements into the DOM. It takes one argument, which is the React element you want to render.

* Here,` root.render(heading)` means that you're rendering the heading element (representing `<h1>Hello World From React</h1>`) into the root component of your React application.

### ✨ What is returned from `React.createElement`

### 💻 Code Snippet 
```js
const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

### 💻 Console

![demo](/assets/demo3.png)

### ✨ Returns

**createElement returns a React element object with a few properties:**

* `type`: The type you have passed.

* `props`: Object containing attributes/properties to be passed to the element. May also contain children (`children` prop) used to nest other elements.

* `key` (optional): String or number used to uniquely identify an element among siblings. This is crucial for React's efficient reconciliation process.

* `ref` (optional): Callback function passed to React for accessing the underlying DOM element or component instance.

* `_owner` (internal, mostly null): Internal property for React's component hierarchy tracking.

* `_store` (internal): Internal data structure used by React for optimization.

* `_self` (internal, mostly null): Internal pointer to the element itself.

* `_source` (internal, mostly null): Internal tracking of the element's creation location.

### ✨ `$$typeof` Property:

* **Type**: Symbol

* **Value**: Unique symbol specific to React
* **Purpose**: Identifies the object as a React element to React's internal mechanisms. This allows React to distinguish regular JavaScript objects from elements during rendering and reconciliation.

## ⭐ Nested Structure

```html
<div class="parent">
    <div class="child">
        <h1>This is a h1 tag</h1>
    </div>
</div>
```

To create nested elements like the above structure in React.

#### 💻 Code Snippet 

```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is h1 Tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```

**If we log the parent variable we will get this nested object**

![demo](/assets/demo4.png)

## ⭐ Creating siblings in `React.createElement`

```html
<div class="parent">
    <div class="child">
        <h1>This is a h1 tag</h1>
        <h1>This is a h1 tag</h1>
    </div>
</div>
```

To create siblings inside parent `div`, we need to make third argument as array

```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 Tag"),
    React.createElement("h1", {}, "This is h1 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```

> !NOTE
> By passing elements in an array as the children, we get warning that says

> !WARNING
> Each child in a list should have a unique "key" prop.