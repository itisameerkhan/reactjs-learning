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
   />;
   )
};
```

> **Props is an object**

When you try to log this props on the console you'll get this object

![demo](/assets/demo17.png)