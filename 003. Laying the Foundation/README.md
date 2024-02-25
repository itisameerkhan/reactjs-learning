# 📍Laying the Foundation

<p align="center">
<img src="https://media.istockphoto.com/id/1201248958/vector/construction-workers-isometric-people-composition.jpg?s=612x612&w=0&k=20&c=ViXjasdrAQ7FxBQxzEN2qSAQ-LmGkClsmqqDhWahWtk=" />
</p>

## ⭐ JSX

JSX, or JavaScript XML, is a syntax extension for JavaScript often used with React. It allows developers to write HTML-like code directly within JavaScript. JSX syntax resembles HTML, making it more intuitive and familiar for developers, especially those with experience in web development.

JSX stands for JavaScript XML. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()` and/or `appendChild()` methods. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.

### ✨ Created by

JSX was introduced by Facebook as part of the React library. It was designed to simplify the process of building React components by allowing developers to write markup and JavaScript together in a single file.

### ✨ Why JSX ?

- **Readability**: JSX makes code more readable and maintainable by combining HTML-like syntax with JavaScript logic. Developers can easily understand the structure of the UI by looking at JSX code.

- **Familiarity**: For developers with experience in web development, JSX feels more natural and familiar compared to writing JavaScript functions to create DOM elements.
- **Performance**: JSX can be optimized by tools like Babel to produce efficient JavaScript code that runs efficiently in the browser.
- **Static Analysis**: JSX enables static code analysis and type checking, helping to catch errors early in the development process.

#### 💻 Code snippet

```jsx
const jsxheading = <h1 id="heading">Namaste React from JSX 🚀</h1>;
```

#### 💻 Code snippet

```jsx
const jsxheading = <h1 id="heading">Namaste React from JSX 🚀</h1>;

console.log(jsxheading);
```

#### 🌐 Output (console)

![demo](/assets/demo13.png)

#### 💻 Rendering JSX snippet

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1>Namaste React Using JSX🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
```

### 📓 JSX Works on VSCode but not on Browser JS Engine

![demo](/assets/demo14.png)

The JSX snippet works in VSCode because VSCode supports JSX syntax highlighting out of the box and often includes plugins or extensions that enable JSX **transpilation** to regular JavaScript. However, browsers do not inherently understand JSX syntax. They expect JavaScript code to adhere to **ECMAScript standards**.

When you write JSX code in your JavaScript files and use **Parcel** to bundle your application, **Parcel** automatically detects JSX syntax. When Parcel detects JSX syntax in your JavaScript files, it uses **Babel** under the hood to perform the necessary transformations. **Babel** is a JavaScript compiler that can transform JSX syntax into standard JavaScript

**Automatic Transformation(Transpiled)**: When you include JSX code in your JavaScript files, Parcel recognizes the JSX syntax and automatically applies transformations to convert it into regular JavaScript.

**What is a transpiler?**

Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language which is in the same level.

## ⭐ Babel

<p align="center">
<img  src="https://gamedevacademy.org/wp-content/uploads/2015/12/babel.png.webp" />

</p>

**Babel** is a JavaScript compiler that enables developers to write code using the latest **ECMAScript** standards and modern JavaScript syntax, even if the browsers they're targeting don't yet support those features. In the context of React and JSX, **Babel** plays a crucial role in transforming JSX syntax into standard JavaScript that browsers can understand.

### ✨ What is the reason for using babel?

Well, all the latest javascript features are not supported in every browser yet. So someone needs to do the converting part right? So babel is here to transpile latest javascript features(ES6 features) which are not understandable to every browser to ES5 which is understandable to every browser.

- **Understanding JSX**: Babel first understands JSX, a syntax extension that allows HTML-like code in JavaScript.

- **Parsing JSX**: Babel breaks down JSX code into a structured format called an abstract syntax tree (AST).

- **Transforming JSX**: It replaces JSX elements with calls to `React.createElement()`. For example, `<div>Hello</div>` becomes `React.createElement('div', null, 'Hello')`.

- **Handling Attributes**: JSX attributes are turned into properties of the `React.createElement()` call.

- **Resolving Components**: Custom component names are resolved, ensuring they're correctly imported or defined.

- **Preserving JavaScript Expressions**: JavaScript expressions within JSX are preserved and evaluated correctly.

- **Generating Output Code**: Babel creates transformed JavaScript code with `React.createElement()` calls, ready to be executed by the browser or Node.js.

> **JSX => React.createElement => JS Object => HTML element(render)**

#### 💻 next-gen Javascript

```jsx
const jsxheading = <h1>Namaste React 🚀</h1>;
```

#### 💻 browser-compatible JavaScript out

```js
const jsxheading = React.createElement("h1", {}, "Namaste React 🚀");
```

## ⭐ JSX Superpowers

```jsx
const heading = <h1>Namaste React🚀</h1>;
```

In JSX, parentheses `()` are often used to wrap multiple lines of code for clarity and to avoid syntax errors.

```jsx
const heading = (
  <div>
    <h1>Namaste React🚀</h1>
    <h1>Namaste React🚀</h1>
  </div>
);
```

# 📍 React Components

![demo](/assets/demo16.png)

React components are the building blocks of React applications. They are reusable, self-contained pieces of code that encapsulate a portion of a user interface and its behavior. Components allow developers to break down complex UIs into smaller, manageable pieces, making it easier to develop, test, and maintain applications.

Here are some key aspects of React components:

1. Reusability

2. Encapsulation

3. Composition

4. LifeCycle methods

5. State management

6. Reusable UI Patterns

7. Props

There are 2 types of components in React

1. Class Based Components

2. Function Based Components (**Recommended**)

## ⭐ Functional Components

React functional components, also known as stateless functional components, are a type of React component that are defined as JavaScript functions. They are a simpler and more concise way to create components compared to class components. Functional components are primarily used for presenting UI elements and rendering content based on the props passed to them.

> You should name Function component first letter in capital otherwise you would get error.

### ⚡ Syntax

```jsx
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
```

Functional components are defined as JavaScript functions that return JSX elements.

### ⚡Stateless

Functional components are stateless, meaning they do not have state or lifecycle methods such as `componentDidMount`, `componentDidUpdate`, etc. They are purely presentational and receive data via props.

### ⚡ Readability and Simplicity

Functional components are often simpler and more readable than class components, especially for simple UI elements. They tend to have less boilerplate code and a more straightforward structure.

### ⚡ Easy Testing

Because functional components are purely presentational and depend only on their props, they are typically easier to test compared to class components. You can simply pass different props to the component and test the output.

### ⚡ Hooks

With the introduction of React Hooks in React version 16.8, functional components gained the ability to manage state and side effects. Hooks like `useState`, `useEffect`, and others allow functional components to manage state and perform side effects without needing to be converted to class components.

#### 💻 Rendering React Functional Components


```jsx
import React from "react";
import ReactDOM from "react-dom/client";


const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
```

#### 💻 Rendering Multiple Functional Components

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div className="header">
      <h1>Namaste React using JSX 🚀</h1>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
```

### ✨ Components Composition

Component composition in React refers to the practice of building larger and more complex user interface **components by combining or nesting smaller, reusable components together**. This approach allows developers to create modular and maintainable code, as well as to follow the principle of separation of concerns.

#### 💻 Code Snippet 

```jsx
const App = () => {
  return (
    <Header />
    <Main />
    <Footer />
  )
}
```

### ✨ Combining Javascript elements in JSX


To include JavaScript elements within JSX in React, you can use curly braces `{}` to embed JavaScript expressions directly into the JSX code. This allows you to dynamically generate content, calculate values, or include variables within your JSX elements.

#### 💻 Code Snippet

```jsx
const elements = (
  <h1 className="elements">
    Some Elements
  </h1>
)

const HeadingComponent = () => {
  return (
    <div className="container">
      {elements}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};
```

#### 💻 Code Snippet 

```jsx
const name = "Ameer Khan";

const App = () => {
  return (
    <h1>Hello!, {name}</h1>
  )
}
```

#### 💻 Code Snippet 

```jsx
const App = () => {
  return (
    <h1>{100 + 100}</h1> // 200
  )
}
```

### ✨  Within curly braces `{}` in JSX, you can include a wide range of JavaScript expressions

#### 📌 Mathematical Calculations

```jsx
const result = <p>The result of 5 + 5 is {5 + 5}.</p>;
```

#### 📌 JavaScript Variables

```jsx
const name = 'John';
const greeting = <p>Hello, {name}!</p>;
```

#### 📌 JavaScript Functions

```jsx
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = <p>Full name: {getFullName('John', 'Doe')}</p>;
```

#### 📌 Conditional Rendering

```jsx
const isLoggedIn = true;

const loginStatus = (
  <p>
    {isLoggedIn ? 'You are logged in' : 'Please log in'}
  </p>
);
```

#### 📌 Array Iteration

```jsx
const numbers = [1, 2, 3, 4, 5];

const numberList = (
  <ul>
    {numbers.map((number) => (
      <li key={number}>{number}</li>
    ))}
  </ul>
);
```

#### 📌 Inline Styles

```jsx
const style = {
  color: 'blue',
  fontSize: '20px'
};

const styledText = <p style={style}>Styled text</p>;
```

### ✨ Recursive Functional Component

#### 💻 code snippet 

```jsx
const HeadingComponent = () => {
  return (
    <div className="container">
      <HeadingComponent />
    </div>
  );
};
```

This code will result in an infinite loop and eventually cause a stack overflow error.

### ✨ Rendering Components (Alternate)

#### 💻 Code snippet 

```jsx
const Title = () => {
  return (
    <div className="header">
      <h1>Namaste React using JSX 🚀</h1>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <Title></Title>
      {Title()}
    </div>
  );
};
```

All are valid