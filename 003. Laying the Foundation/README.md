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

## ⭐ Babel

<p align="center">
<img  src="https://gamedevacademy.org/wp-content/uploads/2015/12/babel.png.webp" />
</p>


**Babel** is a JavaScript compiler that enables developers to write code using the latest **ECMAScript** standards and modern JavaScript syntax, even if the browsers they're targeting don't yet support those features. In the context of React and JSX, **Babel** plays a crucial role in transforming JSX syntax into standard JavaScript that browsers can understand.

* **Understanding JSX**: Babel first understands JSX, a syntax extension that allows HTML-like code in JavaScript.

* **Parsing JSX**: Babel breaks down JSX code into a structured format called an abstract syntax tree (AST).

* **Transforming JSX**: It replaces JSX elements with calls to `React.createElement()`. For example, `<div>Hello</div>` becomes `React.createElement('div', null, 'Hello')`.

* **Handling Attributes**: JSX attributes are turned into properties of the `React.createElement()` call.

* **Resolving Components**: Custom component names are resolved, ensuring they're correctly imported or defined.

* **Preserving JavaScript Expressions**: JavaScript expressions within JSX are preserved and evaluated correctly.

* **Generating Output Code**: Babel creates transformed JavaScript code with `React.createElement()` calls, ready to be executed by the browser or Node.js.

> **JSX => React.createElement => JS Object => HTML element(render)**