# 📍 What is JSX ?

<img src='https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687457/retina_1708x683_staging.toptal.net_javascript_emulating-react-jsx-in-vanilla-javascript-816eafe06505b888585d08474f2166e7.png'>

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML and is commonly used with React to describe what the UI should look like. JSX allows you to write HTML elements and components in a syntax that closely resembles XML or HTML, but it is ultimately transformed into JavaScript code that React understands.

## ⭐ Without JSX

```jsx
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## ⭐ With JSX

```jsx
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## ⭐ Superpowers of JSX

Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

```jsx
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

## ⭐ Is JSX mandatory for React?

JSX is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling `React.createElement(component, props, …children)` with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So JSX is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

## ⭐ Comments

JSX comments are written as follows:

`{/*  */}` - for single or multiline comments

```jsx
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```
___

