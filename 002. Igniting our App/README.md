# 📍Igniting our App

<div align="center">
<img src="https://media.licdn.com/dms/image/D5616AQE4VwlLmDlJLg/profile-displaybackgroundimage-shrink_200_800/0/1686221170579?e=2147483647&v=beta&t=YuBbJlONaNDpAutjM-ZoNVtLPHt3xHbfZlIiHGHztJE" />
</div>

## ⭐ What is **Bundler**?

* A bundler in React is a tool that is used to bundle together various JavaScript, CSS, and other assets required for a web application to run in the browser. It takes multiple separate files and dependencies and combines them into a single file or multiple files that can be efficiently served to the browser.

* Bundlers are essential in modern web development because they help manage the complexity of web applications by organizing code into smaller, manageable modules, improving performance by reducing the number of requests made to the server, and optimizing assets for production deployment.

There are several bundlers commonly used in the React ecosystem, each with its own strengths and features. Here are some of the most popular types of bundlers for React:

* **Webpack**

* **Parcel**
* **Rollup**
* **Browserify**
* **Snowpack**

---

One popular bundler in the React ecosystem is **Parcel**. **Parcel** is a zero-configuration bundler that aims to simplify the process of bundling web applications. 

## ⭐ Parcel 📦

<img src="https://user-images.githubusercontent.com/19409/135924939-03845d0b-e7bb-414b-89b6-e627dfa9f614.png" />

Parcel is a zero-configuration web application bundler that simplifies the process of building modern web applications, including those built with React. It aims to provide a fast and seamless development experience without the need for complex configuration files.

Here's why Parcel is commonly used in React projects:

* Zero Configuration

* Fast Development
* Built-in Support for Modern Web Technologies
* Efficient Production Builds
* Ease of Use for Beginners

#### 💻 Parcel Installation

```bash
npm install -D parcel
```

#### 💻 Execute the Program using this cmd: 

```bash
npx parcel index.html
```

![demo](/assets/demo6.png)

#### 💻 Installing react, react-dom via npm

```cmd
npm install react react-dom
```

#### 💻 Setup Basic code

```js
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "This is Namaste React🚀"),
    React.createElement("h2", {}, "This is h2 Tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "This is h1 Tag"),
    React.createElement("h2", {}, "This is h2 Tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```

#### 💻 Browser

![demo](/assets/demo7.png)

To Fix this issue by simply adding `type="module"` in `script` tag which is present inside `index.html`, we where good to go.

```html
<script src="App.js" type="module" defer></script>
```

## ⭐ Parcel 📦

### ⚡ Development Build

* **Purpose**: Creates an optimized version of your React application suitable for production deployment. This involves:

* **Minification**: Reducing code size by removing unnecessary whitespace and comments.
Concatenation: Combining multiple files into one for efficient loading.
* **JavaScript transpilation**: Converting modern JavaScript (e.g., ES6) to older, browser-compatible versions if needed.
* **Uglification**: Making code more compact and difficult to reverse engineer.
* **Optimization**: Applying techniques to improve performance and reduce file size.

### ⚡ Local Server

* **What it is**: A web server you run on your local machine to host your development application. This allows you to access and test your React app in a browser without deploying it to a remote server.

* **Faster development**: Test changes instantly without needing to deploy or upload files.
* **Secure development**: Code remains on your machine, protecting sensitive information.
* **Flexibility**: Customize server settings and environment as needed.

### ⚡ Hot Module Replacement (HMR)

One of the most powerful features of ParcelJS is its built-in support for Hot Module Reloading. With HMR, you can see instant updates in the browser as you modify your code, without the need to manually refresh the page. This greatly speeds up the development process and enhances productivity.

* Parcel tracks changes in your code.

* When a change is detected, it updates the relevant module without reloading the entire page.
* **Faster development**: See changes instantly without full page reloads.
* **Improved developer experience**: Makes development more interactive and enjoyable.
* **Easier debugging**: Helps pinpoint issues without full reloads.
* CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

### ⚡ File Watcher Algorithm — C++

ParcelJS employs a highly efficient file-watching algorithm written in C++, which ensures lightning-fast recompilation of changed files. This algorithm minimizes the time required for rebuilding the project, making development even more efficient.

### ⚡ Cache

The `.parcel-cache` directory in Parcel plays a crucial role in optimizing development workflows by storing information about your project's assets, dependencies, and transformations.

* **Speed Up Builds**: Parcel caches processed information about your files, leading to significantly faster rebuilds when you make changes. This is because it doesn't need to re-analyze and process everything from scratch each time.

* **Granular Caching**: Parcel uses a granular caching system, meaning it only rebuilds files and dependencies that have actually changed. This avoids unnecessary work and further improves build speed.

* **Efficient Development**: By remembering previous processing steps, Parcel can deliver near-instant updates when using Hot Module Replacement (HMR), further enhancing your development experience.