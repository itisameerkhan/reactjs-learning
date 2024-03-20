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

In React, `useState`, as well as any other function starting with **“use”**, is called a Hook.

Hooks are special functions that are only available while React is rendering

* Don’t call Hooks inside loops, conditions, or nested functions

* Only Call Hooks from React Functions

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

#### 💻 This is how they work together in `handleClick`:

```jsx
const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // setter function 
  };

  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={handleClick}>ADD+</button>
    </div>
  );
};
```

## ⭐ React hooks: not magic, just arrays

**State management in hooks is all about arrays**

### ⚡ How could we implement `useState()` ?

```jsx
const App = () => {
  const [firstName, setFirstName] = useState("Rudy");
  const [lastName, setLastName] = useState("Yardley")

  return (
    <button onClick={() => setFirstName("Fred")}>Fred</button>
  )
}
```

### ⚡ Do and Dont's with `useState`

#### 🚫 1. Don't call the `useState` outside the functional component

In React, the useState hook is designed to be called only within the body of a functional component, not outside of it.

![demo](/assets/demo37.png)

#### 🚫 2. Don't call `useState` in `if` statement

```jsx
if(something) {
  const [count, setCount] = useState(0) ❌
}
```

Calling `useState` within an if statement or any conditional block in a functional component is not recommended in React. This is because the order of hooks, including `useState`, must remain consistent across all renders of the component. React relies on the order of hooks to correctly associate state variables with their corresponding component instances.

#### 🚫 2. Don't call `useState` in `for` loop statement

```jsx
for(let i=0;i<100;i++) {
  const [count, setCount] = useState(0);
}
```

Calling `useState` inside a loop, such as a for loop, is not recommended in React. This is because React requires that hooks, including `useState`, are called in the same order on every render of the component. Placing `useState` inside a loop could result in its conditional execution, violating the rules of hooks and leading to unpredictable behavior or errors.


### ⚡ So what’s React going to do with this?

Let’s annotate how this might work internally within React. The following would work within the execution context for rendering a particular component. That means that the data stored here lives one level outside of the component being rendered. This state is not shared with other components but it is maintained in a scope that is accessible to subsequent rendering of the specific component.

#### 💻 1. Initialisation

Create two empty arrays: `setters` and `state`

![demo](/assets/demo24.webp)

#### 💻 2 First render

Run the component function for the first time.

Each `useState()` call, when first run, pushes a setter function (bound to a cursor position) onto the setters array and then pushes some state on to the state array.

![demo](https://miro.medium.com/v2/resize:fit:786/format:webp/1*8TpWnrL-Jqh7PymLWKXbWg.png)

#### 💻 3. Subsequent render

Each subsequent render the cursor is reset and those values are just read from each array.

![demo](https://miro.medium.com/v2/resize:fit:786/format:webp/1*qtwvPWj-K3PkLQ6SzE2u8w.png)

#### 💻 4 Event handling

Each setter has a reference to its cursor position so by triggering the call to any setter it will change the state value at that position in the state array.

![demo](https://miro.medium.com/v2/resize:fit:786/format:webp/1*3L8YJnn5eV5ev1FuN6rKSQ.png)

#### 💻 And the naive implementation

```jsx
let componentHooks = [];
let currentHookIndex = 0;

const useState = (initialState) => {
  let pair = componentHooks[currentHookIndex];
  if(pair) {
    currentHookIndex++;
    return pair;
  }
  
  const setState = (nextState) => {
    pair[0] = nextState;
    updateDOM();
  }
  
  pair = [initialState, setState];
  
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}
```

### ⚡ State is isolated and private

State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

#### 💻 code snippet

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}
const App = () => {

  return (
    <div className="app">
    <Counter />
    <Counter />
    </div>
  )
}
```

#### 🌐 output

![demo](/assets/demo25.png)


# 📍 React Fibre Architecture

![demo](https://miro.medium.com/v2/resize:fit:1400/1*GJiR7jC07hARQ1WogY1Ffg.jpeg)


React Fiber is an internal implementation detail of React's core algorithm for rendering components. It's a reimplementation of the stack-based reconciler (the old algorithm) with a more efficient, incremental, and prioritized approach to rendering and updating the UI. Fiber is designed to enable better performance, smoother animations, and improved handling of concurrent updates and user interactions.

Introduced from React 16, Fiber Reconciler is the new **reconciliation** algorithm in React. The term Fiber refers to React's data structure (or) architecture, and originates from '**fiber**' - a representation of a node of the DOM tree.

### ⚡Key Features of React Fiber

#### 🚀 Incremental Rendering:

* Fiber breaks down the rendering work into smaller, incremental units called "fibers."

* Instead of rendering the entire component tree in a single pass, Fiber processes these fibers iteratively, allowing for more efficient rendering and updates.

#### 🚀 Priority Scheduling:

* Fiber introduces the concept of task priorities to determine the order in which updates should be processed.

* Tasks are assigned priority levels, such as synchronous (immediate), asynchronous (deferred), or low priority (background), enabling React to prioritize high-priority updates and ensure a responsive user experience.

#### 🚀 Concurrent Rendering:

* Fiber enables concurrent rendering, allowing React to work on multiple updates concurrently and interleave rendering with other tasks, such as event handling and input processing.

* Concurrent rendering improves perceived performance and responsiveness by allowing React to respond to user interactions more quickly.

#### 🚀 Time-Slicing:

* Fiber implements time-slicing, a technique that divides rendering work into smaller, discrete chunks (time slices) and allocates time to each slice.

* Time-slicing prevents long-running tasks from blocking the main thread, ensuring smooth animations, responsive interactions, and a more predictable user experience.

#### 🚀 Interruptible and Resumable:

* Fiber reconciliation is interruptible and resumable, meaning React can pause and resume rendering work as needed.

* This feature allows React to respond to user interactions, prioritize high-priority updates, and adjust rendering based on changing conditions without sacrificing performance.

#### 🚀 Error Handling and Boundaries:

* Fiber introduces error boundaries, a mechanism for capturing and handling errors that occur during rendering or updating components.

* Error boundaries help prevent crashes from propagating up the component tree, allowing React to recover gracefully from errors and continue rendering the rest of the UI.

#### 🚀Better Debugging and Profiling:

* Fiber provides improved debugging and profiling capabilities, allowing developers to inspect the internal state of the rendering process, track performance metrics, and diagnose performance issues more effectively.

## ⭐ Virtual DOM

### 🚩 What is DOM ? 

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

* The DOM represents the document as nodes and object

* It helps Connects Javascript to HTML

<p align="center">

![demo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*b9i7n4XOt1L2AvWzGEY36Q.png)

</p>

## ⭐ Virtual DOM


In React, the Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model). It's a programming concept that React uses internally to improve performance and optimize the updating process of the UI.

Here's how the Virtual DOM works in React:

### ⚡ Initial Rendering:

* When you write React components, you describe the UI using JSX syntax. These components are JavaScript objects that represent the structure and content of the UI.

* When you render a React component, React creates a corresponding Virtual DOM representation of the component and its children.

### ⚡Virtual DOM Structure:

* The Virtual DOM is a tree-like structure that mirrors the structure of the actual DOM.
Each node in the Virtual DOM represents an element (e.g., a div, span, or custom component) and its associated attributes (e.g., className, onClick).

* React components are translated into Virtual DOM elements with properties that describe how they should appear in the UI.

### ⚡Efficient Updates:

* When a component's state or props change, React re-renders the component and generates a new Virtual DOM representation based on the updated state and props.

* React then compares the new Virtual DOM with the previous Virtual DOM using a process called **reconciliation**.

* React identifies the differences (or "**diffs**") between the old and new Virtual DOM trees and determines what changes need to be applied to the actual DOM.

### ⚡ Minimizing DOM Operations:

* React's reconciliation algorithm is designed to minimize the number of DOM operations required to update the UI.

* Instead of directly manipulating the actual DOM for every change, React computes the minimal set of changes needed and applies them in a batched and optimized manner.

### ⚡ Updating the Actual DOM:

* Once React determines the necessary changes, it updates the actual DOM to reflect the updates made to the Virtual DOM.

* React applies the changes using efficient DOM manipulation techniques, such as batched updates and using the least amount of DOM mutations possible.

<p align="center">

![demo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*pITtRGQSPcWswcZ62gE1dg.png)

</p>

<p align="center">

![demo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*Ck_HUOSdkbLtktXVKmVsYw.png)

</p>

### 🚩 Why Virtual DOM?

Any operation/manipulation which is done directly in the DOM makes the entire DOM re-render which is proven to be too costly and that is where Virtual DOM is used which takes a copy of the actual DOM and does manipulation on that copy and replaces only that particular objects to the real DOM.

### 🚩 DOM Visualization 

#### 💻 Here the sample HTML file which displays the current time and its respective DOM rerenders

```jsx
const Time = () => {

    const handleTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(handleTime, 500);

    const [time, setTime] = useState(new Date().toLocaleTimeString());
  return (
    <div className="time">
        <h1>{time}</h1>
    </div>
  )
}
```

#### 🌐 Rendering without reload entire DOM

<div align="center">

![demo](/assets/demo26.gif)

</div>

## ⭐ Reconciliation

Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible.

React uses a [virtual DOM](#⭐-virtual-dom) (Document Object Model) to update the UI. The virtual DOM is a lightweight in-memory representation of the real DOM, which allows React to make changes to the UI without manipulating the actual DOM. This makes updates faster, as changing the virtual DOM is less expensive than changing the real DOM.

The reconciliation algorithm works by comparing the current virtual DOM tree to the updated virtual DOM tree, and making the minimum number of changes necessary to bring the virtual DOM in line with the updated state.

### 🚀 Tree diffing: 
React compares the current virtual DOM tree with the updated virtual DOM tree, and identifies the minimum number of changes necessary to bring the virtual DOM in line with the updated state.

### 🚀 Batching:
React batches multiple changes into a single update, reducing the number of updates to the virtual DOM and, in turn, the real DOM.

<div align="center">

![demo](https://miro.medium.com/v2/resize:fit:750/format:webp/1*o8X7VFBBUls2PM70Dtj_ig.gif)

</div>

## ⭐ Diffing Algorithm

React uses a diffing algorithm as part of its reconciliation process to efficiently update the Document Object Model (DOM). When the state of a component changes, React creates a new virtual DOM and compares it with the current DOM. This comparison process, known as “diffing,” allows React to identify the minimum number of operations needed to update the DOM.
The diffing algorithm in React is responsible for efficiently comparing the old virtual DOM with the new virtual DOM to determine what changes need to be applied to the actual DOM.

### ⚡ The Significance of Efficient Rendering:

Web applications often consist of dynamic content that needs to be updated in response to user interactions, data changes, or other events. Updating the entire Document Object Model (DOM) whenever changes occur can be inefficient and lead to a sluggish user experience. This is where the concept of “reconciliation” and the diffing algorithm come into play.

### ⚡ Reconciliation and the Diffing Algorithm:

Reconciliation is the process of comparing the previous state of the DOM with the new state, identifying the differences, and updating only the necessary parts to reflect the changes. The diffing algorithm is a core part of this reconciliation process in React.js.

### ⚡ Why does React use the Diffing Algorithm?

The diffing algorithm allows React to update the DOM efficiently. The state-of-the-art algorithms that perform an optimal tree diff have a time complexity of O(n³), where n is the number of elements in the tree. This would be prohibitively expensive for large numbers of elements. By using its diffing algorithm, React can perform the necessary operations in O(n) time, significantly reducing the computational cost.

### ⚡How does the Diffing Algorithm works?

1. **Virtual DOM Representation**: React maintains a virtual representation of the DOM, known as the Virtual DOM. When data changes, React creates a new Virtual DOM tree.

2. **Element Diffing:** React performs a diffing process by comparing he previous Virtual DOM tree with the new one. It identifies the differences between the two trees.

3. **Minimal Updates**: Instead of updating the entire DOM, React generates a minimal set of updates needed to transform the current DOM to match the new Virtual DOM.

4. **Batching Updates**: To avoid excessive DOM manipulations, React batched updates and applies them in a single batch. This reduces browser reflows and improves performance.

5. **Keyed Elements**: The use of keys in React components helps the algorithm to accurately identify and track changes in lists, improving efficiency.

### ⚡ Benefits of the Diffing Algorithm:

1. **Performance Optimization**: By updating only the necessary parts of the DOM, React minimizes the impact of rendering updates on performance, resulting in smoother user experiences.

2. **Reduced Browser Reflows**: The algorithm’s ability to batch updates reduces browser reflows, which can be resource-intensive and lead to flickering.

3. **Responsive Applications**: Diffing enables React applications to respond quickly to user interactions and data changes, enhancing overall interactivity.

## ⭐ Reconciliation versus rendering

| sno | Rendering | Reconciliation
|---|---|---|
| 1. | Rendering refers to the process of generating a virtual representation of the UI based on the current state and props of React components.|Reconciliation, on the other hand, is the process of updating the actual DOM to reflect changes in the virtual DOM after rendering.|
| 2. | When a component is initially mounted or updated due to changes in its state or props, React triggers a rendering process to create a new virtual DOM representation of the component and its children.| When a component is re-rendered, React compares the new virtual DOM with the previous virtual DOM to determine what changes need to be applied to the actual DOM. |
| 3. | Rendering involves constructing the component tree, processing JSX elements, and generating a virtual DOM structure that mirrors the desired UI layout. | Reconciliation involves identifying the differences (or "diffs") between the old and new virtual DOM trees and applying the necessary updates to the actual DOM to reflect these changes.

## ⭐ Scheduling

If something is offscreen, we can delay any logic related to it. If data is arriving faster than the frame rate, we can coalesce and batch updates. We can prioritize work coming from user interactions (such as an animation caused by a button click) over less important background work (such as rendering new content just loaded from the network) to avoid dropping frames.

* In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

* Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

* A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

> React doesn't currently take advantage of scheduling in a significant way; an update results in the entire subtree being re-rendered immediately. Overhauling React's core algorithm to take advantage of scheduling is the driving idea behind Fiber.

## ⭐ What is a fiber?

In React, "Fiber" refers to an internal reimplementation of the reconciliation algorithm and rendering engine that was introduced in React 16. It's not something developers directly interact with, but it's a critical part of how React works under the hood, influencing the performance and behavior of React applications.

Here's a breakdown of what React Fiber is and why it's important:

### ⚡Incremental Rendering:

* React Fiber enables incremental rendering, allowing React to break the rendering work into smaller units (called fibers) and prioritize updates based on their priority level.

* This means that React can interrupt rendering work, adjust priorities, and resume rendering to ensure a responsive user experience.

### ⚡Concurrent Rendering:

* Fiber introduces the concept of concurrent rendering, enabling React to work on multiple updates concurrently and interleave rendering with other tasks, such as event handling and input processing.

* Concurrent rendering improves the responsiveness of React applications by allowing high-priority updates to be processed quickly, even while other updates are still in progress.

### ⚡Time Slicing:

* React Fiber implements time slicing, a technique that divides rendering work into smaller, discrete chunks (time slices) and allocates time to each slice.

* Time slicing prevents long-running tasks from blocking the main thread, ensuring smooth animations, responsive interactions, and a more predictable user experience.

### ⚡Interruptible and Resumable Rendering:

* Fiber reconciliation is interruptible and resumable, allowing React to pause and resume rendering work as needed.

* This feature enables React to respond to user interactions, prioritize high-priority updates, and adjust rendering based on changing conditions without sacrificing performance.

### ⚡Error Handling and Recovery:

* Fiber introduces error boundaries, a mechanism for capturing and handling errors that occur during rendering or updating components.

* Error boundaries help prevent crashes from propagating up the component tree, allowing React to recover gracefully from errors and continue rendering the rest of the UI.