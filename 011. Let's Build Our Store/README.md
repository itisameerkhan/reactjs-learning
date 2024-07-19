# Let's Build Our Store

<div align="center">
<img src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/02/99128fa6.jpg" alt="img" />
</div>

## ⭐ What is Redux ?

Redux is a state management library often used with React to manage the application's global state in a predictable way. It centralizes the application's state in a **single store**, allowing components to access and update the state through **actions** and **reducers**, which describe how the state should change in response to specific actions. This approach simplifies state management in complex applications by providing a clear and structured way to handle data flow, making the application easier to debug, test, and maintain.

---
### 💫 `react-redux`

React Redux is an essential library for managing state in large-scale React applications. It acts as a bridge between React and Redux, enabling React components to interact seamlessly with the Redux store. By centralizing the state management, React Redux allows developers to manage and share state across various components without prop drilling, leading to cleaner and more maintainable code. It provides a `Provider` component to make the Redux store available to the entire application and hooks like `useSelector` and `useDispatch` for accessing the state and dispatching actions directly within functional components. This integration simplifies the process of state management, making it easier to handle complex state logic and asynchronous actions.

### 💫 `Redux Toolkit`

Redux Toolkit is the recommended way to write Redux logic due to its ability to streamline the setup and management of Redux stores. It addresses common pain points such as boilerplate code and complex configurations by providing utility functions like `configureStore` and `createSlice`. `configureStore` simplifies the store configuration with sensible defaults, including middleware and Redux DevTools integration, while `createSlice` reduces boilerplate by combining reducers and actions into a single object. Additionally, features like `createAsyncThunk` handle asynchronous actions more gracefully. By using Redux Toolkit, developers can write more concise, readable, and maintainable Redux code, ultimately enhancing productivity and reducing errors in state management.

> [!NOTE]
> redux store is big object with more data and it is kept in the global central place, we should keep most of our application data into this redux store.

<div align="center">
<img src="https://www.ceos3c.com/wp-content/uploads/2022/01/redux-toolkit-2.gif" alt="img" />
</div>

---

## ⭐ Slice


In Redux, a "slice" refers to a portion of the Redux state and the logic associated with that portion. The concept of a slice simplifies the process of writing Redux logic by grouping related actions and reducers together. Redux Toolkit, the official toolset for efficient Redux development, introduces the `createSlice` function to facilitate this.

### 💫 What is a Slice?

A slice represents a single unit of the Redux state and includes:

* **State**: The part of the overall state that the slice manages.

* **Reducers**: Functions that handle changes to the state based on specific actions.

* **Actions**: Named events that can be dispatched to trigger state changes.

---

### ⭐ Write data in redux 

![demo](../assets/demo52.png)

### ⭐ Read Data

![demo](../assets/demo53.png)

![demo](../assets/demo16.jpg)