## Concepts


### table of contents

|No. | Title |
|--- |--------|
| 1. | [Reconsiliation](#reconsiliation) | 


### Concepts Details

1.  ### Reconsiliation
    Reconciliation is the process in React where the virtual DOM is compared with the previous virtual DOM to determine the minimum number of changes required to update the actual DOM. This process helps optimize rendering performance by avoiding unnecessary updates and minimizing DOM manipulations.

    Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

    **[⬆ Back to Top](#table-of-contents)**
