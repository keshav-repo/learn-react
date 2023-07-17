## What is a reajt js 

React.js (or React) is a **JavaScript library used for building user interfaces, specifically for creating interactive and dynamic web applications**. It was developed by Facebook and is widely adopted by developers due to its simplicity, efficiency, and reusability.

React follows a **component-based architecture**, where the user interface is divided into reusable components. Each component manages its own state and renders a view based on that state. React efficiently updates and re-renders only the necessary components when the underlying data changes, which leads to better performance.

Some key features of React include:

1. **Virtual DOM**: React uses a virtual representation of the actual DOM, which allows it to efficiently update only the necessary components without directly manipulating the entire DOM. This results in faster rendering and improved performance.

2. **JSX**: React introduces JSX (JavaScript XML), which is an extension to JavaScript syntax that allows you to write HTML-like code within JavaScript. It provides a declarative way to define the structure and appearance of the components.

3. Component-based architecture: React promotes the idea of breaking down the user interface into reusable components. Each component has its own logic, state, and lifecycle methods, making it easier to manage and maintain complex applications.

4. Unidirectional data flow: React follows a unidirectional data flow, also known as **one-way data binding. Data flows from parent components to child components**, which helps in managing the application's state and simplifies the debugging process.

5. React Hooks: React introduced Hooks, which are functions that allow you to use state and other React features without writing a class. Hooks enable functional components to have stateful behavior and access to React's lifecycle methods.

React is often used in combination with other libraries or frameworks, such as React Router for routing, Redux for state management, and Axios for making HTTP requests. It is widely adopted in web development and has a large and active community that provides extensive support, resources, and third-party packages.

Overall, React.js provides a powerful and efficient way to build interactive user interfaces for web applications, making it a popular choice among developers.

## What is a react component ?  
In React, a component is a reusable and self-contained building block that encapsulates a specific piece of the user interface and its behavior. It represents a part of the UI that can be reused, composed, and managed independently.

**Component can be split UI into independent, reusable pieces and works in isolation.**


React components can be classified into two types: functional components and class components.

1. Functional Components:
   Functional components are written as plain JavaScript functions. They accept an input called "props" (short for properties) as an argument and return JSX (JavaScript XML) to describe the component's structure and appearance. Functional components are typically used for simpler UI elements that don't require internal state or lifecycle methods.

   Example of a functional component:
   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>;
   }
   ```

2. Class Components:
   **Class components are JavaScript classes that extend the `React.Component` base class**. They have a more complex structure and provide additional features like state management and lifecycle methods. Class components are used for more complex UI elements that need to manage their own state and respond to lifecycle events.

   Example of a class component:
   ```jsx
   class Counter extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         count: 0
       };
     }

     increment() {
       this.setState({ count: this.state.count + 1 });
     }

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button onClick={() => this.increment()}>Increment</button>
         </div>
       );
     }
   }
   ```

Components can be composed together to create more complex UI structures. They can be reused throughout the application and even shared across different projects.

One of the key benefits of React components is their reusability, as they encapsulate the UI and behavior in a modular and isolated manner. This makes it easier to manage and maintain the codebase, enhance code readability, and promote a declarative approach to building user interfaces.

## React.Component
In React, `React.Component` is a base class or superclass that you can extend to create custom components. It is a class-based approach to creating components in React.

The `React.Component` class provides a set of methods and properties that you can override and use to define the behavior and rendering of your custom components. By extending `React.Component`, you can define your own component class and customize its functionality.

Here's an example of how you can define a custom component by extending `React.Component`:

```jsx
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default MyComponent;
```

In this example, the `MyComponent` class extends `React.Component`. It defines a `render()` method that returns JSX, specifying the component's rendering logic. In this case, the component renders a `<h1>` heading with the text "Hello, World!" wrapped in a `<div>`.

By extending `React.Component`, your custom component inherits various methods and properties, including the lifecycle methods such as `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`. These lifecycle methods allow you to hook into different stages of a component's lifecycle and perform actions accordingly.

You can also define state and handle events within your custom component. The `React.Component` class provides methods like `setState()` to manage component state and event handling capabilities.

Overall, `React.Component` serves as a foundation for creating custom components in React, allowing you to encapsulate logic, manage state, handle events, and define the rendering of your components.

## what is mostly used various methods and properties in React.Component
The `React.Component` class provides several commonly used methods and properties that you can override and utilize when creating custom components in React. Here are some of the most commonly used ones:

Methods:

1. `render()`: This method is required and responsible for rendering the component's JSX or returning `null`. It defines the component's UI and structure.

2. Lifecycle methods:
   - `componentDidMount()`: Invoked immediately after the component is mounted (inserted into the DOM).
   - `componentDidUpdate(prevProps, prevState)`: Invoked immediately after the component updates (props or state change).
   - `componentWillUnmount()`: Invoked immediately before the component is unmounted and destroyed.

3. Event handling methods:
   - `onClick()`, `onChange()`, etc.: These methods are used to handle specific events and define custom behavior when events occur on the component.

Properties:

1. `props`: The `props` property contains the component's properties or attributes passed to it from its parent component. It allows you to access and use these values within the component.

2. `state`: The `state` property represents the internal state of the component. It allows you to store and manage dynamic data that can change during the component's lifecycle. Use `setState()` to update the state and trigger re-rendering.

3. `this`: The `this` keyword refers to the instance of the component itself. It is commonly used to access methods, properties, and the component's context.

These are just a few examples of the commonly used methods and properties provided by the `React.Component` class. Depending on your specific requirements, you may also find other methods and properties useful. Additionally, React has introduced hooks (e.g., `useState`, `useEffect`) as an alternative to class components, which offer similar functionality in a functional component approach.

## Do we need to import everything from a file including every named export and default one ?

No, you don't need to import everything from a file if you only require specific exports. In JavaScript, you can choose to import specific named exports or the default export from a module.

Here's an example:

```javascript
// module.js
export const greeting = 'Hello';
export const name = 'John';
export const age = 25;

export default {
  // default export object
  color: 'blue',
  size: 'large',
};
```

To import specific named exports, you can use the destructuring syntax:

```javascript
import { greeting, age } from './module.js';

console.log(greeting); // Output: Hello
console.log(age); // Output: 25
```

In this example, we import only the `greeting` and `age` named exports from the `module.js` file. We can access these specific values directly without importing the other named exports or the default export.

If you want to import the default export, you can use a separate import statement:

```javascript
import defaultExport from './module.js';

console.log(defaultExport.color); // Output: blue
console.log(defaultExport.size); // Output: large
```

Here, we import the default export from the `module.js` file using the `defaultExport` variable. We can access the properties of the default export directly using dot notation.

Remember that you can mix and match named exports and the default export in your imports based on your requirements. You have the flexibility to choose which specific exports to import and use in your code, without needing to import everything from a file.

## Get request in react

```jsx
import React from 'react';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Hello!',
    };
  }

 componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ title: data.hits[0].title }));
 	}

	render() {
    return (
      <h1> {this.state.title} </h1>
    );
  }
}
```
we can also use Axios to perform same.

## First Component 
```jsx
import React from 'react';

const title = 'React';

function App() {
    return (
      <div>
          <h1> Hello {title} </h1>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" />
      </div>
    );
}
export default App;
```




## References
- https://legacy.reactjs.org/docs/components-and-props.html
- https://legacy.reactjs.org/docs/introducing-jsx.html
- https://legacy.reactjs.org/docs/dom-elements.html#all-supported-html-attributes
- https://create-react-app.dev/docs/getting-started/
- https://create-react-app.dev/docs/folder-structure/
- https://create-react-app.dev/docs/available-scripts/
- 

