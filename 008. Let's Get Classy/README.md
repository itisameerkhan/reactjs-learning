# 📍 Let's Get Classy

![demo](https://coreui.io/images/ogimages/react_1200_630.jpg)

## ⭐ Class-Based Components

Class-based components are a type of component in React that are defined using ES6 classes. Before the introduction of functional components and hooks, class-based components were the primary way of creating reusable UI components in React.


## ⚡ Syntax

```jsx
class UserClass extends React.Component {
    
}
```

Class-based components are created by defining a JavaScript class that extends `React.Component `or `React.PureComponent`. The component's behavior and rendering logic are defined within the class methods.

This specifies that `UserClass` is a subclass of React.Component. By extending `React.Component`, `UserClass` inherits functionality from `React.Component`, allowing it to be used as a React component.

## ⚡ `render()`


In class-based components in React, the `render()` method is a required method that defines what the component should render to the UI

```jsx
class UserClass extends React.Component {
    render() {
        {/* some piece of JSX code */}
    }    
}
```

1. The `render()` method is declared within the class component. It does not take any parameters.

2.  The `render()` method must return a single React element, which represents the UI component that the class component represents.

#### 💻 code snippet 

```jsx
class UserClass extends React.Component {
    render() {
        return (
            <h1>Class based Component</h1>
        )
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
