# 📍 Exploring the World

![demo](https://miro.medium.com/v2/resize:fit:1400/1*GJiR7jC07hARQ1WogY1Ffg.jpeg)

## ⭐ Monolith vs Microservice Architecture

| sno. | Monolith Architecture                                                                                                                                            | Microservice Architecture                                                                                                                                                                                                        |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.   | In a monolithic architecture, the entire application is built as a single, self-contained unit.                                                                  | In a microservices architecture, the application is broken down into smaller, loosely coupled services that are independently deployable and scalable.                                                                           |
| 2.   | All components of the application, including the user interface, business logic, and data access layer, are tightly coupled and deployed together.               | Each service in a microservices architecture is responsible for a specific business capability and can be developed, deployed, and scaled independently of other services.                                                       |
| 3.   | Monolithic applications typically consist of a single codebase, often organized into modules or layers, but they are all deployed as a single unit.              | Services communicate with each other through well-defined APIs, often using lightweight protocols such as HTTP or messaging queues.                                                                                              |
| 4.   | Scaling a monolithic application can be challenging because all components need to be scaled together, even if only one component requires additional resources. | Microservices architectures promote flexibility, scalability, and resilience. Developers can choose the most appropriate technology stack for each service, and individual services can be scaled independently based on demand. |
| 5.   | However, monolithic architectures are often simpler to develop and deploy, especially for smaller applications or when the development team is small.            | However, microservices architectures can introduce complexity, especially in terms of managing communication between services, ensuring data consistency across services, and coordinating deployments.                          |

<div align="center">

![demo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*bDI_1EtHO8iJR5pSwiWelw.png)

</div>

## ⭐ Shimmer UI

Shimmer UI, also known as skeleton loading or skeleton screens, is a technique used in user interface design to provide users with visual feedback while content is being loaded or fetched asynchronously. It involves displaying placeholder elements or animations that mimic the layout and structure of the actual content that will be displayed once it's loaded.

![demo](/assets/demo27.png)

### 🌐Traditional Approach (Without Shimmer UI):

- In this approach, when the page loads, the frontend waits for the data to be fetched from the backend before rendering anything on the screen.

- This means that users may experience a blank or empty screen until the data is fetched and rendered, which can lead to a poor user experience, especially if the data fetching process takes time.

![demo](/assets/demo28.png)

### 🌐 With Shimmer UI:

- In this approach, when the page loads, instead of displaying a blank screen, the frontend shows a placeholder or "shimmer" UI.

- This placeholder UI typically consists of animated loading indicators or placeholders that mimic the layout of the actual content.

- While the shimmer UI is being displayed, the frontend asynchronously fetches the data from the backend in the background.
  Once the data is fetched, the frontend replaces the shimmer UI with the actual content, providing users with visual feedback that something is happening in the background.

- This approach enhances the user experience by reducing perceived loading times and providing users with a more engaging and interactive interface, even while data is being fetched.

![demo](/assets/demo29.png)

## ⭐ `useEffect()`

In React, the `useEffect` hook is used to perform side effects in functional components. Side effects can include things like **data fetching**, **DOM manipulation**, or **subscriptions**, which need to be executed after the component has rendered or when certain dependencies have changed. Here's how `useEffect` works

### ⚡ Declaring useEffect

```jsx
import { useEffect } from "react";
```

### ⚡ Syntax

- `useEffect` takes two arguments: a **callback function** and an **optional array of dependencies**.

- The callback function is the side effect you want to perform. It will run after the component has rendered and after every update.

- The optional array of dependencies allows you to specify values that the effect depends on. If any of these values change between renders, the effect will re-run. If the array is empty, the effect will only run once after the initial render.

**useEffect is a React Hook that lets you synchronize a component with an external system.**

![demo](/assets/demo30.png)

### ⚡ Common Use Cases:

- Data fetching with AJAX or fetch API.

- Subscriptions or event listeners setup and teardown.

- Manually changing the DOM or interacting with external APIs.

### ⚡ Dependencies:

- If the array of dependencies is not provided, the effect will run after every render.

- If the array is provided and contains values, the effect will only run if any of those values change between renders.

- If the array is empty, the effect will only run once after the initial render.

### 💻 code snippet

```jsx
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json);
  };

  return (
    <Restaurants data={listOfRestaurants} />
  );
};
```

### 🌐 Lets debug code

<div align="center">

![demo](/assets/demo35.gif)


</div>
* On the First render the state variable is empty array.

* So it will the shimmer ui

* When the component rendered for the first time with shimmer ui.

* Its starts executing the callback function inside `useEffect` and we get the data.

* once we got the data from the API. Then we set the state variable with the new data and which is then triggers the re-render.

* Actual data got from state variable and UI updated.