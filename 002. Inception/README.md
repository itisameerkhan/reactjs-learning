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