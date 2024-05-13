# 📍 Optimizing Our App

<div align="center">
<img src="https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/191412/image-1582297511813-b188785eb990868e1e672230e8bbe740.png" />
</div>

## ⭐ Custom Hooks

Custom hooks in React are JavaScript functions that enable you to encapsulate reusable logic, similar to how React's built-in hooks like `useState` and `useEffect` work. By creating custom hooks, you can extract stateful logic from components and share it across multiple components in your application.

1. **Prefix with "use"**: Custom hooks must start with the word "**use**" to follow the convention established by React for hooks.

2. **Extract Reusable Logic**: Custom hooks allow you to extract complex logic, side effects, or state management from components, making them more focused and easier to understand.

<br>

> useRestaurantMenu.jsx
```jsx
import { useEffect } from "react";
import { MENU_API } from "./constants";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
```

<br>

> RestaurantMenu.jsx
```jsx
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); {* <-- Custom Hook *}

  ....
``` 

>[!IMPORTANT]
> If you don't use the "use" prefix for your custom hooks, the linter may flag it as a violation of coding standards or conventions, depending on the specific rules configured in your linter setup. 