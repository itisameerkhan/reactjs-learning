# 📍 Let's Get Hooked

![demo](/assets/demo19.png)

## ⭐ File Structures in React

```css
my-react-app/
  |- src/
  |  |- components/
  |  |  |- Header/
  |  |  |  |- Header.js
  |  |  |  |- Header.css
  |  |  |- Footer/
  |  |  |  |- Footer.js
  |  |  |  |- Footer.css
  |  |  |- ...
  |  |- hooks/
  |  |  |- UseFetch/
  |  |  |  |- useFetch.js
  |  |  |- UseLocalStorage/
  |  |  |  |- useLocalStorage.js
  |  |  |- ...
  |  |- pages/
  |  |  |- Home/
  |  |  |  |- Home.js
  |  |  |  |- Home.css
  |  |  |- About/
  |  |  |  |- About.js
  |  |  |  |- About.css
  |  |  |- ...
  |  |- App.js
  |  |- index.js
  |  |- App.css
  |  |- ...
  |- public/
  |  |- index.html
  |  |- favicon.ico
  |- package.json
  |- README.md
  |- ...
```

## ⭐ Importing and Exporting Components

### ⚡ Exporting Components

You can export a component by placing the export keyword in front of its declaration:

```jsx
// Button.js
import React from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
```

Alternatively, you can export components using named exports:

```jsx
// Button.js
import React from 'react';

export const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

### ⚡ Importing Components

**Default Import**

To import a component that was exported as the default export

```jsx
import Button from './Button'; // Path to the Button component
```

To import a component that was exported as a named export:

```jsx
import { Button } from './Button'; // Path to the Button component file
```

#### 💻 Importing Multiple Components:

```jsx
import Button, { AnotherComponent, YetAnotherComponent } from './Components';
```

#### 💻 Aliasing Imports:

You can alias imports using the `as` keyword:

```jsx
import { Button as CustomButton } from './Button';
```

#### 💻 Importing All Exports:

To import all named exports from a file, you can use the * syntax:

```jsx
import * as Components from './Components';
```

#### 💻 consider this example 

In this example, I want to filter out top restaurant by their average rating. If the average rating in greater than 4.5 then put the result into this `mockData`.

```jsx
import { data } from "../utils/constants";
```

```jsx
let mockData = data;
  const handleClick = () => {
    mockData = data.filter((value) => {
      return value.info.avgRating > 4.5
    });
    console.log(mockData);
};
```

```jsx
<div className="res-list">
    {mockData.map((value, index) => (
      <RestaurantCard data={value} key={index} />
    ))}
</div>
```

#### 🌐 Output

![demo](/assets/demo20.png)

In this output file we got the filtered result of 2 elements in an array. **but notice the UI doesn't even changed.**

In React, directly assigning a new value to a variable like `mockData = data.filter(...)` without using state does not trigger a re-render of the component. This is because React relies on state management to detect changes and re-render components accordingly.

In your example, `mockData` is a regular JavaScript variable and not part of React's state. Therefore, updating `mockData` does not inform React that the component's state has changed, and React does not re-render the component.

To update the UI in React, you need to use state management. This typically involves using `useState` hook in functional components or `setState` method in class components. When you update the state using these methods, React detects the changes and re-renders the components to reflect the updated state.

# 📍 React Hooks

React hooks are functions that enable functional components to use state and other React features without writing a class. They were introduced in React version 16.8 to address complex state management and lifecycle methods in functional components. Hooks provide a more concise and readable way to manage state and side effects in React applications.

## ⭐ `useState`

The `useState()` is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. 

#### 💻 Importing `useState` from **React**

```jsx
import { useState } from "react"
```

#### 💻 Initialization of state 

```jsx
const [count, setCount] = useState(0);
```

Inside a functional component, you call the `useState` hook and pass the initial state value as an argument. The `useState` hook returns an array with two elements: **the current state value and a function to update that value.**

### 🚩 When a regular variable isn’t enough.

Here some example of some normal javascript variable used for data to update `count` variable.

```jsx
const App = () => {
  const handleClick = () => {
    count++;
    console.log(count);
  };
  let count = 0;
  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={handleClick}>ADD+</button>
    </div>
  );
};
```

#### 🌐 data layer updated but not the UI

![demo](/assets/demo22.png)

The `handleClick` event handler is updating a local variable, `count`. But two things prevent that change from being visible:

1. **Local variables don’t persist between renders**. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

2. **Changes to local variables won’t trigger renders**. React doesn’t realize it needs to render the component again with the new data.

#### 🧩 To update a component with new data, two things need to happen:

1. Retain the data between renders.

2. Trigger React to render the component with new data **(re-rendering)**.

#### 🧩 The `useState` Hook provides those two things:

1. A state variable to retain the data between renders.

2. A state setter function to update the variable and trigger React to render the component again.

#### 💻 Importing `useState` from **React**

```jsx
import { useState } from "react"
```

#### 💻 Adding state variables

```jsx
let count = 0; // 🚫 Don't use local variable
```

```jsx
const [count, setCount] = useState(0);
```

`count` is a state variable and `setCount` is the setter function.

![demo](/assets/demo23.png)