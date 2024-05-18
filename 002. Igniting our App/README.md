# 📍Igniting our App

<div align="center">
<img src="https://image.cnbcfm.com/api/v1/image/107204282-1678197288065-gettyimages-1247844410-AFP_33AN4HF.jpeg?v=1678197528&w=929&h=523&vtcrop=y" />
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

![demo](/assets/demo8.png)
![demo](/assets/demo9.png)

### ⚡ Image Optimization

ParcelJS not only handles JavaScript and CSS but also takes care of optimizing images. It automatically compresses and optimizes images during the build process, reducing their size without compromising quality, resulting in faster loading times.

### ⚡ Minification

ParcelJS excels at bundling JavaScript, CSS, and other assets. It automatically analyzes your project’s dependencies and generates optimized bundles. It can handle a wide range of file types out of the box, making it extremely versatile.

* **purpose**: Minification aims to reduce the file size of your code by removing unnecessary characters and whitespace. This translates to faster loading times and improved user experience, especially on slower connections.

* **Parcel's Approach**: When you run a development build (`parcel index.html`), Parcel automatically minifies your JavaScript, CSS, and HTML files using appropriate tools:
* **JavaScript**: Parcel uses ***SWC*** (formerly known as `@swc/core`) for efficient and configurable minification. It optimizes the code while preserving compatibility and readability.
* **CSS**: Parcel leverages ***lightningcss*** for CSS minification, ensuring smaller file sizes without compromising code integrity.
* **HTML**: For HTML minification, Parcel employs ***htmlnano*** to remove comments, whitespace, and unnecessary attributes, further reducing file size.

### ⚡ Bundling 

* **Purpose**: Bundling combines multiple files into a single unit, making it easier for the browser to download and execute them. This reduces HTTP requests and improves loading performance, especially when dealing with numerous small files.

**Parcel's Approach: Parcel uses a smart bundling strategy that takes advantage of:**

* **Tree Shaking**: It analyzes your code to identify unused code and removes it from the final bundle. This significantly reduces the overall size and improves performance.

* **Code Splitting**: Parcel can split your code into smaller bundles based on routes or features. This allows browsers to download only the necessary code, further improving performance and reducing initial load times.
* **Automatic File Type Handling**: Parcel automatically detects and bundles various file types (JS, CSS, images, etc.) into an optimized format.

### ⚡ Consistent Hashing Algorithm
ParcelJS utilizes a consistent hashing algorithm to generate unique filenames for cache busting. This ensures that whenever you make changes to your code, the browser fetches the latest version from the server, eliminating the need for users to manually clear their browser cache.

![demo](/assets/demo11.png)
![demo](/assets/demo10.png)

### ⚡Differential Bundling

**Differential bundling** is the idea of shipping multiple versions of your code for different targets, and allowing the browser to choose the most optimal one to download. When you use a `<script type="module">` element in an HTML file, and some of the browsers specified by the environment do not support ES modules natively, Parcel will automatically generate a `<script nomodule>` fallback as well.

```html
<script type="module" src="app.js"></script>
```
is complied to: 
```html
<script type="module" src="app.c9a6fe.js"></script>
<script nomodule src="app.f7d631.js"></script>
```

This allows modern browsers that support ES modules to download a much smaller bundle, while legacy browsers are still supported using a fallback. This can significantly reduce bundle sizes and improve load times by avoiding transpilation of modern JavaScript syntax like classes, arrow functions, async/await, and more.

This happens automatically based on your browser targets, as declared in the `"browserslist"` field in your `package.json`. If no `browserslist` is declared, or all browser targets support ES modules natively, then a nomodule fallback will not be generated.

#### 📌 Imagine

* You're building a website with modern JavaScript features like ES modules.

* But not everyone has the latest browser version, some might have older ones.

#### 📌 Parcel's Solution:

* **Multiple Versions**: Instead of sending everyone the same code,

**Parcel creates two versions:**

* **Modern Bundle**: Packed with all the fancy features for browsers that understand them (ES modules).

* **Fallback Bundle**: A simpler version translated into older JavaScript (nomodule) for browsers that don't support modern features.

#### 📌 How it Works:

* **Target Detection**: Parcel uses your browserslist configuration to understand what browsers you need to support.

* **Bundling Magic**: Based on the targets, it creates separate 

**bundles**:

* **module bundle**: Contains modern JavaScript features for modern browsers.

* **nomodule bundle**: A transpiled version of the same code, compatible with older browsers.

### ⚡ Diagnostics

* If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.

* Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue.

### ⚡ HTTPS Support on Dev

For secure development environments, ParcelJS supports serving your project over HTTPS during development. This feature is especially useful when working with APIs that require secure connections, enabling you to test and develop securely without additional configuration.

```cmd
npx parcel index.html --https
```

### ⚡ Development and Production Builds

ParcelJS streamlines the development process by providing a development server with live reloading and HMR capabilities. When it comes to production builds, ParcelJS generates optimized, minified, and tree-shaken bundles, ready for deployment to production servers.

| Development Builds | Production Builds |
| --- | --- | 
| Source maps |  Production-specific optimizations
| Hot Module Replacement (HMR) | Tree-shaking
| Unminified code | Minified code 
| Faster Builds | Slower builds

## ⭐ Make App Compactible for older versions

Parcel's `browserslist` configuration plays a crucial role in making your React app compatible with older browser versions.

`browserslist` is a configuration file that specifies which browsers you want your code to support. It defines a set of browser versions and features that your app should target.

**Parcel uses `browserslist` to determine:**

* Which modern JavaScript features to transpile for older browsers.

* Whether to use specific polyfills for missing functionalities.
* Potential optimizations that can be applied based on the supported browsers.

#### 💻 Setting up `browserslist`

in `package.json` simply add the following code.

```json
"broswerslist": [
    "last 2 Chrome version",
    "last 2 Firefox version"
]
```
will it only works on Chrome and Firefox, but not Edge, **NO**.

But it will definitely 100% of the time works on Chrome and Firefox and it is might or might not works on any other browsers and their versions.

![demo](/assets/demo12.png)