# 📍 Data is the New Oil

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:1400/1*b3sBGXonbaL8YcARWTZ2aA.png" />
</div>
<br>

## ⭐ Higher Order Component

A Higher-Order Component (HOC) in React is a pattern used to share common functionality between components. **An HOC is a function that takes a component and returns a new component with additional props or functionality.**

Think of an HOC as a wrapper that adds extra features to a component without modifying the original component directly. This is useful for reusing component logic across multiple components.

### ⚡ Defining Higher Order Components

```jsx
export const withVegLabel = (RestaurantCard) => {
  return ({ data }) => {
    return (
      <div className="with-veg">
        <p className="veg-label">Veg</p>
        <RestaurantCard data={data} /> // <---- Another Component
      </div>
    );
  };
};
```

In your code, `withVegLabel` is an HOC. It's a function that takes a component (`RestaurantCard`) and returns a new component that enhances the original component with additional functionality.

### ⚡ Using the HOC

```jsx
const RestaurantCardVeg = withVegLabel(RestaurantCard);
```

`RestaurantCardVeg` is now a component that includes the additional "Veg" label.

### ⚡ Rendering Components Conditionally

```jsx
{
  value?.info?.veg ? (
    <RestaurantCardVeg data={value} />
  ) : (
    <RestaurantCard data={value} />
  );
}
```
**FULL CODE**

1. [Body.jsx](./code/Body.jsx) 
2. [RestaurantCard.jsx](./code/RestaurantCard.jsx)