### React Hooks


|No. | Title |
|--- |--------|
| 1. | [Build in React Hooks](#build-in-react-hooks)
| 2. | [Use](#use)
| 3. | [useState](#usestate)

1. ### Build in React Hooks

    ### State Hooks
    “remember” information like user input.
    * useState()
    * useReducer()

    ### Context Hooks
    receive information from distant parents without passing it as props.
    * useContext()

    ### Ref Hooks
     hold some information that isn’t used for rendering
     * useRef()
     * useImperativeHandle()

    ### Effect Hooks
     connect to and synchronize with external systems. 
    * useEffect()

    ### Performance Hooks
    A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.
    * useMemo()
    * useCallback()

2. ### Use

    use is a React Hook that lets you read the value of a resource like a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or [context](https://react.dev/learn/passing-data-deeply-with-context)

    ```jsx
    const value = use(resource);
    ```

    1. Unlike all other React Hooks, use can be called within loops and conditional statements like if.

3. ### useState

    * `useState` is a React Hook that lets you add a state variable to your component.

    * The `useState` is a React hook that allows functional components in React to manage state. Before the introduction of hooks in React 16.8, state management was primarily done in class components using the `setState` method. However, functional components lacked the ability to maintain local state. `useState` was introduced to address this limitation.

    1. import `useState`
    ```jsx
    import { useState } from 'react'
    ```

    2. Declare state variables 
    ```jsx
    const [state, setState] = useState(initialState)
    ```

    ### Parameters
    `initialState`: the value you want the state to be initially. it can be value of any type.

    `state`: this is current state value.

    `setState`: This is a function that you can call to update the state.

    ### Returns
    `useState` returns an array with exactly two values.
    1. the current state. during the first render it will match the `initialState` you have passed

    2. The `set` function that lets you update the state to a different value and trigger a re-render.

    ### caveats
    1. `useState` is a Hook, so you can only call it at the top level of your component or your own Hooks. 
    2. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

    ### `set` functions, like `setSomething(nextState)`

    1. The set function returned by useState lets you update the state to a different value and trigger a re-render. 

    2. You can pass the next state directly, or a function that calculates it from the previous state:

    ```jsx
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(++count)
        setCount(count => count + 1);
    }
    ```

    ### Parameters
    1. `nextState`: The value that you want the state to be. It can be a value of any type, but there is a special behavior for functions.

    2. React waits until all code in event handlers has run before processing your state updates. [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)

    3. This lets you update the multiple state variables, even from multiple components without triggering too many re-renders.

    ### updating states based on previous states

    `count: 0`
    ```jsx
    const handleClick = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    ```
    `count: 1`

    4. React queues this function to be processed after all the other code in the event handler has run.

    5. React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event. 

    5. During the next render react goes through all queue and gives you the final updated state.

    To solve this problem, **you may pass an updater function** to `setCount` instead of the next state

    `count: 0`
    ```jsx
    const handleClick = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    ```
    `count: 3`
    1. `c => c + 1` will receive `0` as the pending state and return `1` as the next state.
    2.  `c => c + 1` will receive `1` as the pending state and return `2` as the next state.
    3.  `c => c + 1` will receive `2` as the pending state and return `3` as the next state.

    By convention, it’s common to name the pending state argument for the first letter of the state variable name, like `a` for `age`. However, you may also call it like `prevAge` or something else that you find clearer.

    ---

    ```jsx
    const handleClick = () => {
    setCount((count) => count + 1);
    setCount(count + 1);
    setCount((count) => count + 1);
    setCount(count + 5);
    setCount((count) => count + 1);
    };
    ```
    `count: 0`
    |setFunction |  Queue |  Rendering |
    |--- |--------|-------|
    | count => count + 1 | count => count + 1 | count = 0 + 1 = 1
    | count + 1 | 0 + 1 | count = 1
    | count => count + 1 | count => count + 1 | count = 1 + 1 = 2
    | count + 5 | 0 + 5 | count = 5
    | count => count + 1 | count => count + 1 | count = 5 + 1 = 6

    Here, `c => c + 1` is your updater function. It takes the `pending state` and calculates the `next state` from it.

    React puts your updater functions in a **queue**. Then, during the next render, it will call them in the same order:

    ### caveats

    1. If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. 
    2. In Strict Mode, React will call your updater function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production.

    ### Is using an updater always preferred? 

    You might hear a recommendation to always write code like `setAge(a => a + 1)` if the state you’re setting is calculated from the previous state. There is no harm in it, but it is also not always necessary.
    
    However, if you do multiple updates within the same event, updaters can be helpful. They’re also helpful if accessing the state variable itself is inconvenient (you might run into this when optimizing re-renders).