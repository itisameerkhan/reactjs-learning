# 📍 Exploring the World

![demo](https://miro.medium.com/v2/resize:fit:1400/1*GJiR7jC07hARQ1WogY1Ffg.jpeg)

## ⭐ Monolith vs Microservice Architecture

| sno. | Monolith Architecture | Microservice Architecture |
| --- | --- | --- | 
| 1. | In a monolithic architecture, the entire application is built as a single, self-contained unit. | In a microservices architecture, the application is broken down into smaller, loosely coupled services that are independently deployable and scalable.
| 2. | All components of the application, including the user interface, business logic, and data access layer, are tightly coupled and deployed together. | Each service in a microservices architecture is responsible for a specific business capability and can be developed, deployed, and scaled independently of other services. |
| 3. | Monolithic applications typically consist of a single codebase, often organized into modules or layers, but they are all deployed as a single unit. | Services communicate with each other through well-defined APIs, often using lightweight protocols such as HTTP or messaging queues.
| 4. | Scaling a monolithic application can be challenging because all components need to be scaled together, even if only one component requires additional resources. | Microservices architectures promote flexibility, scalability, and resilience. Developers can choose the most appropriate technology stack for each service, and individual services can be scaled independently based on demand. |
| 5. | However, monolithic architectures are often simpler to develop and deploy, especially for smaller applications or when the development team is small. | However, microservices architectures can introduce complexity, especially in terms of managing communication between services, ensuring data consistency across services, and coordinating deployments.

<div align="center">

![demo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*bDI_1EtHO8iJR5pSwiWelw.png)

</div>

## ⭐ `useEffect()`

In React, the `useEffect` hook is used to perform side effects in functional components. Side effects can include things like **data fetching**, **DOM manipulation**, or **subscriptions**, which need to be executed after the component has rendered or when certain dependencies have changed. Here's how `useEffect` works