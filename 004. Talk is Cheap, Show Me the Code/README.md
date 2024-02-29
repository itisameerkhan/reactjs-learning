# 📍 Talk is Cheap, Show Me the Code

<p align="center">
<img src="https://pbs.twimg.com/media/CWhxr4WWcAAa42s.jpg" />
</p>

## ⭐ Passing Props to a Component

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- They are like arguments you pass to a function.

- Props create a top-down, single-direction data flow, which helps maintain predictability and organization within your React applications.

#### 💻 code snippet (hard codded without passing props)

```jsx
const RestaurantCart = () => {
  return (
    <div>
      <img src="img.url" />
      <h3>Meghana Foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.4</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return <RestaurantCard />;
};
```

The above code snippet is hard codded, to make it more dynamic and reusable, we need props to maintain the data flow and reusability.

#### 💻 code snippet (with props)

```jsx
const RestaurantCard = () => {
  return (
    <div>
      <img src="img.url" />
      <h3>Meghana Foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.4</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <RestaurantCard
      resName="Meghana Foods"
      cuisine="Biriyani, North Indian, Asian"
    />
  );
};
```

> **Props is an object**

When you try to log this props on the console you'll get this object

![demo](/assets/demo17.png)

#### 💻 Read props inside the child component

```jsx
const RestaurantCard = (props) => {
  return (
    <div>
      <img src="img.url" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <RestaurantCard
      resName="Meghana Foods"
      cuisine="Biriyani, North Indian, Asian"
    />
  );
};
```

You can read these props by listing their names person, size separated by the commas inside `({` and `})`

```jsx
const RestaurantCard = ({resName, cuisine}) => { } ✅
```

```jsx
const RestaurantCard = (props) => {
    const { resName, cuisine } = props; ✅ // destructing
}
```

#### 💻 Passing Objects to Props

```jsx
const Body = () => {
  return (
    <RestaurantCard
      data={{
        resName: "Meghana Foods",
        cuisine: "Biriyani, North Indian, Asian",
      }}
    />
  );
};
```

#### 💻 Specifying a default value for a prop

```jsx
const RestaurantCard = ({ resName, cuisine, price = 1000 }) => {};
```

#### 💻 Forwarding props with the JSX spread syntax

```jsx
const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div>
      <img src="img.url" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4</h4>
      <h4>30 minutes</h4>
    </div>
  );
};
```

### ❓Config-Driven UI

Configuration-driven UI, also known as config-driven UI or configuration-based UI - When you build real a world application so you want should your website work in many country or many place we control our frontend it is known as using Config-Driven UI . API or Backend Driven which is data Coming from API.

In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.

#### 💻 Consider this data

```js
const resObject = [
  {
    id: "1232",
    restaurantName: "Noodles & Co.",
    cuisines: [
      "Asian",
      "Noodles"
    ],
    rating: 4.2,
    arrivalTime: "20 minutes"
  },
  {
    id: "1fd2",
    restaurantName: "The Pizzeria",
    cuisines: [
      "Italian",
      "Pizza"
    ],
    rating: 4.8,
    arrivalTime: "15 minutes"
  },
  {
    id: "12vf",
    restaurantName: "Spicy Curry House",
    cuisines: [
      "Indian",
      "Curry"
    ],
    rating: 4.5,
    arrivalTime: "30 minutes"
  },
  {
    id: "1es2",
    restaurantName: "Green Earth Cafe",
    cuisines: [
      "Vegan",
      "Healthy"
    ],
    rating: 4.7,
    arrivalTime: "25 minutes"
  },
  {
    id: "12vv",
    restaurantName: "Sushi Paradise",
    cuisines: [
      "Japanese",
      "Sushi"
    ],
    rating: 4.3,
    arrivalTime: "40 minutes"
  },
  {
    id: "f3e2",
    restaurantName: "Taco Fiesta",
    cuisines: [
      "Mexican",
      "Tacos"
    ],
    rating: 4.1,
    arrivalTime: "20 minutes"
  },
  {
    id: "fwe2",
    restaurantName: "Burger Shack",
    cuisines: [
      "American",
      "Burgers"
    ],
    rating: 4.6,
    arrivalTime: "18 minutes"
  },
  {
    id: "1fee",
    restaurantName: "Crepe Corner",
    cuisines: [
      "French",
      "Crepes"
    ],
    rating: 4.4,
    arrivalTime: "35 minutes"
  }
]
```

#### 💻 Passing this data to the components

```jsx

const RestaurantCard = ({ resData }) => {
    const { restaurantName, cuisines, rating, arrivalTime } = resData;
  return (
    <div>
      <img src="img.url" />
      <h3>{restaurantName}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{arrivalTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
        <RestaurantCard resData={resObject[0]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[1]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[2]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[3]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[4]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[5]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[6]} /> // ♻️ Repeating
        <RestaurantCard resData={resObject[7]} /> // ♻️ Repeating
    </div>
  )
};
```
#### 💻 Creating Reusable React Components with `map()`


```jsx
const Body = () => {
    return (
        <div>
    resObject.map((data) => (
        <RestaurantCard resData={data} />
    ))
    </div>
  )
};
```
Learn map in this [repository](https://github.com/itisameerkhan/Javascript-learning/tree/main/015.%20Map%2C%20Filter%2C%20Reduce)

#### 🌐 warning in console

![demo](/assets/demo18.png)

## ⭐ Keys

The `key` prop in React is a special attribute you add when creating lists of elements. You assign a unique string or number to each element within the list.

The `key` helps React track changes, additions, and removals of elements within a list, boosting efficiency.

### ⚡Why is it Important?

React uses the `key` prop to optimize rendering performance and make updates to your UI more efficient. Here's how:

React uses keys to optimize the rendering of lists. When React updates the UI, it tries to minimize the number of DOM operations required. By using keys, React can quickly identify which items have changed, been added, or been removed from the list, allowing it to update the DOM efficiently.

**Identifying Elements**: When you update your data and React needs to re-render your list, it uses keys to match new list elements to the old ones. This avoids unnecessary re-rendering of elements that didn't change, thus improving performance.

**Diffing Algorithm**: React's diffing algorithm relies on keys to identify which elements have changed and update the DOM accordingly.  Without unique keys, React may have trouble correctly updating the real DOM.

> **Keys Must Only Be Unique Among Siblings**

### ⚡ Index as Keys

React generally discourages using array indexes as keys for components because it can lead to subtle bugs and performance issues in certain scenarios. While using array indexes as keys might seem convenient, it can cause problems.

### ⚡ Index as a key is an anti-pattern