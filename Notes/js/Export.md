## Default and named export in javascript 
In JavaScript, the `export default` statement is used to export a single value or module from a file as the default export. It allows you to define a fallback export that can be imported without specifying a name.

Here's an example of using `export default`:

In `module.js`:
```javascript
const message = 'Hello, World!';

export default message;
```
In another file, you can import the default export without specifying a name:
```javascript
import defaultMessage from './module.js';

console.log(defaultMessage); // Output: Hello, World!
```

In this example, the `export default` statement is used to export the `message` variable as the default export in the `module.js` file. The `defaultMessage` variable is then imported in another file using the `import` statement without curly braces (`{}`). The imported value corresponds to the default export from the `module.js` file.

It's important to note that a JavaScript module can have only one default export. However, you can have multiple named exports alongside the default export.

You can also combine the default export with named exports in the same module:
```javascript
// module.js
const message = 'Hello, World!';
const greeting = 'Welcome!';

export { greeting };
export default message;
```
```javascript
// another file
import defaultMessage, { greeting } from './module.js';

console.log(defaultMessage); // Output: Hello, World!
console.log(greeting); // Output: Welcome!
```

In this updated example, both the default export (`message`) and the named export (`greeting`) are defined in the `module.js` file. When importing in another file, you can access both the default and named exports using separate import statements.

Using `export default`, you can conveniently export a single value or module from a file as the default export, making it easier to import in other parts of your JavaScript code.


### Do we need to import everything from a file including every named export and default one

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

Here, we import the default export from the `module.js` file using the `defaultExport` variable. 




