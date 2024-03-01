# 📍 Let's Get Hooked

![demo](/assets/demo19.png)

## ⭐ File Structures in React

```css
my-react-app/
  |- src/
  |  |- components/
  |  |  |- Header/
  |  |  |  |- Header.js
  |  |  |  |- Header.css
  |  |  |- Footer/
  |  |  |  |- Footer.js
  |  |  |  |- Footer.css
  |  |  |- ...
  |  |- hooks/
  |  |  |- UseFetch/
  |  |  |  |- useFetch.js
  |  |  |- UseLocalStorage/
  |  |  |  |- useLocalStorage.js
  |  |  |- ...
  |  |- pages/
  |  |  |- Home/
  |  |  |  |- Home.js
  |  |  |  |- Home.css
  |  |  |- About/
  |  |  |  |- About.js
  |  |  |  |- About.css
  |  |  |- ...
  |  |- App.js
  |  |- index.js
  |  |- App.css
  |  |- ...
  |- public/
  |  |- index.html
  |  |- favicon.ico
  |- package.json
  |- README.md
  |- ...
```

## ⭐ Importing and Exporting Components

### ⚡ Exporting Components

You can export a component by placing the export keyword in front of its declaration:

```jsx
// Button.js
import React from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
```

Alternatively, you can export components using named exports:

```jsx
// Button.js
import React from 'react';

export const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

### ⚡ Importing Components

**Default Import**

To import a component that was exported as the default export

```jsx
import Button from './Button'; // Path to the Button component
```

To import a component that was exported as a named export:

```jsx
import { Button } from './Button'; // Path to the Button component file
```

#### 💻 Importing Multiple Components:

```jsx
import Button, { AnotherComponent, YetAnotherComponent } from './Components';
```

#### 💻 Aliasing Imports:

You can alias imports using the `as` keyword:

```jsx
import { Button as CustomButton } from './Button';
```

#### 💻 Importing All Exports:

To import all named exports from a file, you can use the * syntax:

```jsx
import * as Components from './Components';
```

#### 💻 consider this example 

In this example, I want to filter out top restaurant by their average rating. If the average rating in greater than 4.5 then put the result into this `mockData`.

```jsx
import { data } from "../utils/constants";
```

```jsx
let mockData = data;
  const handleClick = () => {
    mockData = data.filter((value) => {
      return value.info.avgRating > 4.5
    });
    console.log(mockData);
};
```

```jsx
<div className="res-list">
    {mockData.map((value, index) => (
      <RestaurantCard data={value} key={index} />
    ))}
</div>
```

#### 🌐 Output

![demo](/assets/demo20.png)