# 📍 Finding the Path

<p align="center">
<img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1309400/retina_1708x683_0919_Declaratively-Protecting-Routes-in-React_Cover-dd72479964a7ef68186b100a35b5e459.png" />
</p>

# 📍 react-router-dom

<p align="center">
    <img src="https://media.graphassets.com/X6kKCYw6RLG39lg5mPDl" />
</p>

## ⭐ Feature Overview

### ⚡ Client Side Routing

React Router enables "**client side routing**".

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

## ⭐ Picking a Router

## ⚡ `createBrowserRouter`

In React Router DOM v6, `createBrowserRouter` is a function that allows you to define the routing structure and behavior for your React application. It is a part of the new Router API introduced in React Router v6, which aims to provide a more intuitive and declarative way of defining routes.

#### 💻 Import the necessary functions and components

```jsx
import { createBrowserRouter } from "react-router-dom"
```

#### 💻 Define your route components

```jsx
import App from "App"
import About from "About"
import Contact from "Contact"
```

#### 💻 Create a router object using `createBrowserRouter`

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

```

## ⚡ `RouterProvider`

The `RouterProvider` is a new component introduced in React Router v6 that serves as the root component for providing the routing context to your React application. It replaces the `BrowserRouter` and `HashRouter` components used in previous versions of React Router.

#### 💻 Import the RouterProvider

```jsx
import { RouterProvider } from 'react-router-dom';
```

#### 💻 Render the RouterProvider

```jsx
root.render(<RouterProvider router={appRouter} />)
```

The `RouterProvider` component is responsible for providing the routing context to your entire application. It handles the rendering of the appropriate components based on the current URL and the defined routes.

By using the `RouterProvider`, you no longer need to manually wrap your application with `BrowserRouter` or `HashRouter`. Instead, you create a router instance with your desired routing configuration and pass it to the `RouterProvider`.

### ✨ The RouterProvider offers several benefits:

**Improved performance**: The new Router API in React Router v6 is designed to be more efficient and improve overall performance.

**Declarative routing**: Routes are defined as data structures, making it easier to reason about the routing logic and structure.

**Nested routes**: Nested routes can be defined more easily using the children property in the route object.

**Reduced bundle size**: The new Router API aims to reduce the overall bundle size of your application.

#### 💻 code snippet

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter} />
);
```

In this above provided code, when you visited the URL `localhost:1234/about`. we get the about page

![demo](/assets/demo38.png)

same for the contact us page, when you visited the URL `localhost:1234/contact`. we get the contact page

![demo](/assets/demo39.png)

### ✨ Handling random URL

but when you visit some other random page, it will give this page

![demo](/assets/demo40.png)


To fix this issue and improve UX with the help of `errorElement` prop.

In the context of `createBrowserRouter` from React Router v6, the `errorElement` prop is used to specify a React component that will be rendered when an error occurs during the rendering of the route's main component. This can be useful for displaying custom error pages or handling specific error scenarios within your application.

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // <----- ADD THIS
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);
```

When you visit some other random unrelated URL you will displayed with custom error component like this

![demo](/assets/demo41.png)

### ⚡ `useRouteError`

The `useRouteError` hook in React Router v6 is used in conjunction with the `errorElement` prop to handle errors that occur during the rendering of a specific route. It provides access to the error object and other useful information related to the error.

#### 💻 Define an error component

```jsx
import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>OOPS! Something went wrong</h1>
      <h1>
        {error.status} {error.statusText}
      </h1>
    </div>
  );
};

export default Error;
```

#### 💻 console

![demo](/assets/demo42.png)