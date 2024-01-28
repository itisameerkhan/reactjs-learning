# 💫 Overview

![demo](/assets/react.gif)

## ⭐ What is React ? 


React is a JavaScript library for building user interfaces, particularly for single-page applications where UI updates are frequent and dynamic. Developed and maintained by Facebook, React allows developers to create reusable UI components that efficiently update in response to data changes. It follows a component-based architecture, making it easier to manage and scale complex user interfaces. React uses a virtual DOM to optimize rendering performance and supports a unidirectional data flow, providing a declarative and efficient way to build interactive UIs for web applications. Additionally, React can be seamlessly integrated with other libraries or frameworks.

## ⭐ Difference between a Library and Framework?

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is `library` and Angular is `Framework`. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the `library`.

## ⭐ Why is React known as React?

React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

## ⭐ What is difference between React and ReactDOM?

`React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows React to interact with the DOM. The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

## ⭐ What is NPM?

It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private '`packages`.' To add or update packages, we use the NPM CLI to interact with this database.

`npm` alternative is `yarn`

How to initialize `npm`?

```
npm init
```

`npm init -y` can be used to skip the setup step, npm takes care of it and creates the package.json json file automatically , but without configurations.

## ⭐ What is `Parcel/Webpack`? Why do we need it?

`Parcel/Webpack` is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. `Parcel/Webpack` are type of bundlers that we use to power our application with different type functionalities and features.

### ✨ Parcel Features:

* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files

* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

## ⭐ What is npx?

`npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically `npx` will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## ⭐ What is Tree Shaking?

Tree shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

## ⭐ What is Hot Module Replacement?

**Hot Module Replacement (HMR)** is a feature in development tools for certain programming languages like JavaScript. In the context of React and Webpack, HMR is a mechanism that allows developers to update modules (pieces of code) in a running application without requiring a full refresh. This helps in preserving the application state and speeding up development.

When a module is modified, HMR replaces only the changed module in the running application, preserving the current state and avoiding a full page reload. It provides a more interactive and efficient development experience, allowing developers to see instant changes without losing the application's current state.

In React, tools like Create React App leverage HMR to enhance the development workflow, making it easier for developers to iterate quickly and see the impact of their code changes in real-time.



