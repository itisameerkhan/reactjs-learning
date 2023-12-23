## Concepts


### table of contents

|No. | Title |
|--- |--------|
| 1. | [Reconciliation](#reconciliation) 
| 2. | [Lazy Loading](#lazy-loading) 


### Concepts Details

1.  ### Reconciliation

    Reconciliation is the process in React where the virtual DOM is compared with the previous virtual DOM to determine the minimum number of changes required to update the actual DOM. This process helps optimize rendering performance by avoiding unnecessary updates and minimizing DOM manipulations.

    Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

    **[⬆ Back to Top](#table-of-contents)**

2.  ### Lazy Loading

    Lazy loading in React is a technique used to optimize the loading performance of web applications by deferring the loading of certain components or resources until they are actually needed. This can significantly improve the initial load time of a web page, especially in larger applications with numerous components.
    1. Code Splitting: To implement lazy loading, React takes advantage of a feature called "code splitting." This means that the JavaScript code for different parts of your application (usually components) is split into separate bundles or chunks.
    2. 	Dynamic Imports: Instead of importing components directly at the top of your file, you use dynamic imports. This allows you to import a component only when it's required, not when the initial bundle is loaded.
    3. 	React.lazy() Function: React provides a React.lazy() function that lets you create a dynamic import of a component. For example:

    import file
    ```
    import { lazy, Suspense } from "react";
    ```

    Declaration
    ```
    const About = lazy(() => import('./Components/About/About'))
    ```

    Implementation
    ```
    <Route path='/about' element={
        <Suspense fallback={<h1>Hello</h1>}>
            <About />
        </Suspense>}>
    </Route>
    ```
    Loading multiple components in same file
    ```
    const Blog = lazy(() => import('./Components/Blog/Blog').then(module => ({default: module.Blog2})));
    ```