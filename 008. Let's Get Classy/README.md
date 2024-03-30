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

> [!IMPORTANT] > `state` is reserved keyword in class component

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

> [!WARNING]
> Not Recommended