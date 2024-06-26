# 📍 Let's Get Classy

![demo](https://coreui.io/images/ogimages/react_1200_630.jpg)

## ⭐ Class-Based Components

Class-based components are a type of component in React that are defined using ES6 classes. Before the introduction of functional components and hooks, class-based components were the primary way of creating reusable UI components in React.

## ⚡ Syntax

```jsx
class UserClass extends React.Component {}
```

Class-based components are created by defining a JavaScript class that extends `React.Component `or `React.PureComponent`. The component's behavior and rendering logic are defined within the class methods.

This specifies that `UserClass` is a subclass of React.Component. By extending `React.Component`, `UserClass` inherits functionality from `React.Component`, allowing it to be used as a React component.

## ⚡ `render()`

In class-based components in React, the `render()` method is a required method that defines what the component should render to the UI

```jsx
class UserClass extends React.Component {
  render() {
    {
      /* some piece of JSX code */
    }
  }
}
```

1. The `render()` method is declared within the class component. It does not take any parameters.

2. The `render()` method must return a single React element, which represents the UI component that the class component represents.

#### 💻 code snippet

```jsx
class UserClass extends React.Component {
  render() {
    return <h1>Class based Component</h1>;
  }
}
```

## ⭐ Props in Class Components

### ⚡ Passing Props

```jsx
<UserClass name={"Ameer Khan"} />
```

### ⚡ Constructor

In a class component in React, the `constructor()` method is a special method that is called automatically when an instance of the class is created. It is used for initializing the state and binding event handlers, among other things. The `constructor()` method is optional in React class components, and if it's not explicitly defined, a default constructor is provided automatically.

```jsx
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Class based Component</h1>;
  }
}
```

### ⚡ `super()`

The `super(props)` call passes the props parameter to the constructor of the parent class. This allows the parent class to initialize its own properties and perform any necessary setup based on the props passed to the component.

### ⚡ Accessing Props

In React class components, you can access props using `this`.props within class methods.

```jsx
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-class">
        <p>{this.props.name}</p>
        <h1>Class based Component</h1>
      </div>
    );
  }
}
```

## ⭐ Creating a State variable in Class Component

In React class components, you can declare state variables anywhere within the class. However, the most common practice is to initialize the state in the **constructor**. This is because the **constructor is called once when the component is initialized**, making it an appropriate place to set up the initial state.

### ⚡ `this.state`

In a React class component, `this.state = {}` is used to initialize the component's state object. The state object is where you store data that belongs to the component and may change over time. By initializing the state in the constructor using `this.state = {}`, you set up the initial state of the component.

> [!IMPORTANT] 
> `state` is reserved keyword in class component

#### 💻 Code snippet

```jsx
constructor(props) {
  super(props);

  this.state = {
    count: 0,
  }
}
```

#### 📍 Here's a breakdown of what `this.state = {}` means:

1. `this` refers to the current instance of the class component.

2. `state` is a reserved property name in React class components, which holds the state object.

3. `{}` represents an empty object literal, where you can define key-value pairs to represent the initial state of the component.

### ⚡ Accessing the State Variable

#### 💻 code snippet (without destructure)

```jsx
 constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0
    }
  }
  render() {

    return (
      <div className="user-class">
        <h2>Count : {this.state.count}</h2>
      </div>
    );
  }
```

#### 💻 Code Snippet (with destructure)

```jsx
render() {

    const { count } = this.state; {/* <-- DESTRUCTURING IT */}

    return (
      <div className="user-class">
        <h1>{this.props.name}</h1>
        <h2>Count : {count}</h2>
        <h1>Class based Component</h1>
      </div>
    );
  }
```

### ⚡ Creating multiple state variables

#### 💻 Declaring state variables

```jsx
constructor(props) {

  super(props);

  this.state = {
    count: 0,
    name: 'John Doe',
    isLoggedIn: false,
  };
}
```

#### 💻 Destructing it

```jsx
render() {
  const { count, name, isLoggedId } = this.state;
}
```

## ⭐ Updating State Variables

### 🚫 Normal Update

This count will updated but it will not trigger re-render

```jsx
render() {
    let { count } = this.state;

    return (
      <div className="user-class">
        <h1>Class based Component</h1>
        <h1>{this.props.name}</h1>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            count++;  {/* <----- UPDATING */}
            console.log("count -> ", count);
          }}
        >
          INCREASE
        </button>
      </div>
    );
  }
```

#### 🌐 Output

![demo](/assets/demogif3.gif)

> [!NOTE]
> Never Update State Variables Directly

### ⚡ `this.setState()`

`this.setState()` is a method provided by React for updating the state of a class component. It's used to modify the **component's state and trigger a re-render** of the component with the updated state.

1. **Triggering a Re-render**: When you call this.setState, React will re-render the component and its children with the updated state. This ensures that the UI stays in sync with the state changes.

2. **Merging State Updates**: The this.setState method does not replace the entire state object but rather merges the new state with the current state. This means that if you only provide a subset of the state properties in the setState call, the remaining properties will remain unchanged.

3. **Asynchronous Nature**: `setState()` is asynchronous. When you call `setState()`, React schedules an update to the component's state. It doesn't immediately update the state object or re-render the component. Instead, React batches state updates and performs them in an optimized manner for performance reasons.

4. **Updating State with an Object**: You can pass an object to `setState()` containing the new state values you want to update. React will merge this object with the current state and re-render the component with the updated state.

#### 💻 Code Snippet

```jsx
render() {
    const { count } = this.state;

    return (
      <div className="user-class">
        <h1>Class based Component</h1>
        <h2>Count : {count}</h2>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
            console.log("count ->", count);
          }}
        >
          INCREASE
        </button>
      </div>
    );
  }
```

#### 💻 Output

![demo](/assets/demogif7.gif)

#### 💻 Code snippet

```jsx
constructor(props) {
  super(props);

  this.state = {
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
  }
}
```

```jsx
render() {
  <div>
     <h1>{this.state.count1}</h1>
     <button onClick={() => {
      this.setState({
        count1: this.state.count1 + 1;
      })
     }}>INCREASE</button>
  </div>
}
```

In this above calling `setState` method and updating only the `count1` and without copying the entire state variable using spread operator `(...)`.

This is totally fine, Because `setState` only updates the object passed into it and it will not touch anything in the state variable

### ⚡ `componentDidMount()`

`componentDidMount` is one of the lifecycle methods available in class components in React. It's called immediately after a component is mounted (i.e., inserted into the DOM tree). This method is commonly used for performing initialization tasks, such as fetching data from a remote server, setting up subscriptions, or initializing third-party libraries.

**When Does it Run?**: `componentDidMount` is invoked once, immediately after the initial rendering of the component. This means it runs only once during the lifecycle of the component, right after the component has been added to the DOM.

**Fetching Data**: One of the most common use cases for `componentDidMount` is fetching data from an external source, such as an API. Since `componentDidMount` is called after the initial render, it's a suitable place to initiate network requests to fetch data asynchronously.

#### 💻 Code Snippet

```jsx
class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor called");
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("render called");
    const { count } = this.state;

    return (
      <div className="user-class">
        <h1>Class based Component</h1>
        <h2>Count : {count}</h2>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
            console.log("count ->", count);
          }}
        >
          INCREASE
        </button>
      </div>
    );
  }

  componentDidMount() {
    {
      /* <--- component did mount*/
    }
    console.log("ComponentDidMount Called");
  }
}
```

#### 💻 output

![demo](/assets/demo43.png)

#### 💻 Code snippet

```jsx
class ChildClass extends React.Component {
  constructor(props) {
    console.log("Childclass constructor called");
    super(props);
  }

  render() {
    console.log("child class render called");

    return <h1>something</h1>;
  }

  componentDidMount() {
    console.log("childclass component did mount called");
  }
}

class UserClass extends React.Component {
  constructor(props) {
    console.log("parent class constructor called");
    super(props);
  }
  render() {
    console.log("parent class render called");

    return (
      <div className="user-class">
        <ChildClass />
        <h1>something</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log("parentclass ComponentDidMount Called");
  }
}
```

#### 🌐 console

```
parent class constructor called
parent class render called
Childclass constructor called
child class render called
childclass component did mount called
parentclass ComponentDidMount Called
```

![demo](/assets/demogif5.gif)

#### 💻 Code snippet

```jsx
class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor called");
  }

  render() {
    console.log(this.props.name + " render called");

    return <h1>class component -> {this.props.name}</h1>;
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount called");
  }
}

class ParentClass extends React.Component {
  constructor(props) {
    console.log("parent class constructor called");
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("parent class render called");
    const { count } = this.state;

    return (
      <div className="user-class">
        <ChildClass name={"First"} />
        <ChildClass name={"Second"} />
      </div>
    );
  }

  componentDidMount() {
    console.log("parentclass ComponentDidMount Called");
  }
}
```

#### 🌐 console

```
parent class constructor called
parent class render called
First constructor called
First render called
Second constructor called
Second render called
First componentDidMount called
Second componentDidMount called
parentclass ComponentDidMount Called
```

In React, when multiple component instances are created within the same parent component and are rendered together, React utilizes batching to optimize performance. Batching is the process of bundling multiple state updates and re-renders into a single batch to minimize DOM manipulations and improve performance.

## ⭐ React Component Life Cycle

![demo](/assets/demo44.png)

The React component lifecycle refers to a series of methods that are invoked at different stages in the lifecycle of a React component. These methods allow you to hook into various points during a component's existence, from initialization to removal from the DOM. Understanding the component lifecycle is crucial for building React applications efficiently and handling component behavior effectively.

1. **Mounting**

2. **Updating**

3. **Unmounting**

### ⚡ Mounting

Mounting is the phase in the React component lifecycle where an instance of a component is created and inserted into the DOM. During the mounting phase, React initializes the component, renders it, and adds it to the DOM. This phase consists of several lifecycle methods that are called in a specific order:

**`constructor(props)`**:

* This is the first method called when a component is created.

* It's used for initializing state and binding event handlers.

* You should always call `super(props)` before any other statement in the constructor.

**`render()`**:

* This method is responsible for rendering the component's UI.

* It returns the JSX or React elements that represent the component's output.

* The `render()` method must be pure, meaning it should not modify component state, props, or cause side effects.

**`componentDidMount()`**:

* This method is called after the component is rendered for the first time and inserted into the DOM.

* It's commonly used for performing initialization tasks that require access to the DOM, such as fetching data from an API, setting up event listeners, or initializing third-party libraries.

* This is a good place to perform any asynchronous operations that are necessary for the component to function properly.

## ⭐ Making API Calls

```jsx
 constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
```

## ⭐ Updating

### ⚡ `componentDidUpdate`

`componentDidUpdate()` is a lifecycle method in React class components that is invoked immediately after updating occurs. It is called every time the component updates, either due to changes in props or state. 

**When Does it Run?**:

* `componentDidUpdate()` is called after the component's `render()` method has been called and any updates to the DOM have been applied.

* It is invoked every time the component updates, except for the initial render.

#### 💻 code snippet 

```jsx
class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      userInfo: {},
      count: 0,
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {

    console.log("render");

    const { count } = this.state;

    return (
      <div className="user-class">
        <h1>Count: {count}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
          })
        }}>INCREASE</button>
      </div>
    );
  }
}
```

![demo](/assets/demogif6.gif)

### ⚡ `componentWillUnmount()`


`componentWillUnmount()` is a lifecycle method in React class components that is invoked immediately before a component is unmounted and removed from the DOM. It is the last opportunity for the component to perform any cleanup or teardown tasks before it is destroyed. 

**When Does it Run?**:

* `componentWillUnmount()` is called just before a component is removed from the DOM and destroyed.

* It is invoked only once during the component's lifecycle, before it is unmounted.

#### 💻 code snippet 

[click here for code to the componentWillUnmount](./Code/UserClass.jsx)

![demo](/assets/demogif4.gif)

> [!NOTE]
> the traditional React component lifecycle methods such as `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc., are not applicable to functional components in React. These lifecycle methods are specific to class components.

### ⚡ Functional Component uses Class Component Behind the Scenes ?

No, functional components do not use class-based components behind the scenes. They are completely separate concepts in React.

In React, functional components and class components are two different types of components that you can use to define the UI of your application. Functional components are defined using JavaScript functions, while class components are defined using JavaScript classes.


### ⚡ `previousState` and `previousProps` in `componentDidUpdate`

Consider the functional component, where the `useEffect` calls when `count` updates

#### 💻 code snippet 

```jsx
useEffect(() => {

},[count])
```

In class based component, we need `componentDidUpdate`


In the `componentDidUpdate()` lifecycle method of a React class component, the parameters `prevProps` and `prevState` represent the previous props and state values before the most recent update, respectively. These parameters allow you to compare the previous props and state with the current props and state to determine if any specific actions need to be taken based on changes.

**previousProps**:

1. `previousProps` is an object that contains the props of the component before the most recent update.

2. It allows you to compare the previous props with the current props to detect changes in prop values.

3. You can use prevProps to implement conditional logic based on prop changes and perform actions accordingly.

**previousState**:

1. `previousState` is an object that contains the state of the component before the most recent update.

2. It allows you to compare the previous state with the current state to detect changes in state values.
3. You can use prevState to implement conditional logic based on state changes and perform actions accordingly.

```jsx
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  };

  componentDidUpdate(previousProps, previousState) {
    if(previousState.count !== this.state.count) {
      {/* UPDATE LOGIC */}
    }
  };

  render() {
    return (
      <h1>something</h1>
    )
  }
}
```

### ⚡Functionality of `componentWillUnmount`

The `componentWillUnmount()` lifecycle method in React class components is used for cleanup tasks and resource management before a component is unmounted and removed from the DOM. It provides an opportunity to perform any necessary cleanup, such as unsubscribing from event listeners, clearing timers, canceling network requests, or disposing of any resources that were allocated during the component's lifecycle. 

#### 💻 code snippet

```jsx
class UserClass extends React.Component {
  constructor(props) {
    console.log("About us Page");
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      console.log("NAMASTE REACT 🚀");
    }, 1000);
  }

  render() {
    return (
      <div className="user-card"></div>
    );
  }
}
```

![demo](/assets/demogif8.gif)

 When the component mounts, it starts a `setInterval` function that logs `"NAMASTE REACT 🚀"` to the console every second. However, if the user navigates away from the component (e.g., switches to a different page in a single-page application), the component remains mounted, and the `setInterval` continues running in the background. This can lead to potential memory leaks or unnecessary resource consumption, as the `setInterval` function keeps executing even if the component is no longer visible or needed. To avoid this issue, it's important to clear or cancel any intervals or timers in the componentWillUnmount lifecycle method when the component is unmounted or destroyed.

 When the component mounts, it starts the `setInterval` function, which logs a message to the console at regular intervals. However, when navigating away from the component and then returning to it in a single-page application (SPA), the component remounts, causing a new `setInterval` to start without clearing the previous one. As a result, multiple `setInterval` instances may run concurrently,

 ![demo](/assets/demogif9.gif)

 > [!NOTE]
 > Due to the nature of single-page applications (SPAs), where content is dynamically loaded and navigated without full page reloads, components may mount and unmount multiple times as users navigate between different views or pages.

 #### 💻 Code snippet (solution for `setInterval`)

```jsx
componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT 🚀");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
```

![demo](/assets/demogif10.gif)

#### 💻 Cleanup in `useEffect`


In a functional component, you can perform cleanup tasks in the `useEffect` Hook by **returning** a cleanup function.


```jsx
useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT 🚀 from useEffect");
    }, 1000);

    return () => {
      clearInterval(timer);
    }
}, []);
```