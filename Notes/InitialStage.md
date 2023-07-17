## React JS 

### Create new react app using commmand line 
npx create-react-app my-app
cd .\my-app\
npm start

### Another way of using tenary operator 
```jsx
 const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];
    const showUsers = true;
    return (
      <div>
        {
          showUsers && (
            <ul>
              {users.map(user => <li>{user.name}</li>)}
            </ul>
          )
        }
      </div>
    );
```
### Spread Operators
```jsx
const student = {
      ID: '21',
      name: 'Jhon',
      GPA: '3.0',
    };
    
const {ID, name, GPA} = student;
```
```jsx
a = [1,2,3];
b = [4,5,6];
c = a.concat(b);
console.log("c: " + c);
```
For object
```jsx
a = [1,2,3];
b = [4,5,6];
c = [...a, ...b]; //spread operator
console.log("c: " + c);
```
Person object
```jsx
const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);
```
### Arrow Function 
```jsx
const students = [
  { ID: 1, present: true},
  { ID: 2, present: true},
  { ID: 3, present: false}, 
];

const presentStudents = students.filter(student => student.present);
console.log(presentStudents);
```

### High order function 
```jsx
import React from 'react';

function doFilter(query) {
  return function (user) {
    return query === user.name;
  }
}

export default class App extends React.Component {

  constructor(props){
    super(props);  
    
    this.state = {
    query: '',
    };
    
    this.onChange=this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({ query: event.target.value });
  }
  
  render() {
  const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    
    ];
    return (
      <div>
        <ul>
          { users
            .filter(doFilter(this.state.query))
            .map(myuser => <li>{myuser.name}</li>)
          }
        </ul>
        <input
          type="text"
          onChange={this.onChange}
        />
      </div>
    );
  }
} 
```
Another example 
```jsx
import React from 'react';

export const doIncrement = state =>
  ({ counter: state.counter + 1 });

export const doDecrement = state =>
  ({ counter: state.counter - 1 });

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(doIncrement);
  }

  onDecrement = () => {
    this.setState(doDecrement);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}
```
## Map , filter 
```javascript 
import React from 'react';

export default class App extends React.Component {
  render() {
    var users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];

    return (
      <ul>
        {users.map(function (user) {
          return <li>{user.name}</li>;
        })}
      </ul>
    );
  }
}
```
```javascript 
import React from 'react';

export default class App extends React.Component {
  render() {
    var users = [
      { name: 'Robin', isDeveloper: true },
      { name: 'Markus', isDeveloper: false },
      { name: 'John', isDeveloper: true },
    ];

    return (
      <ul>
        {users
          .filter(user => user.isDeveloper)
          .map(user => <li>{user.name}</li>)
        }
      </ul>
    );
  }
}
```
## Import statement 
```jsx
import React from 'react';
import { firstname as username, lastname } from './myfile.js';

export default class App extends React.Component {
  render() {
    return (
      <p>Hello {username}!</p>
    );
  }
}
```
```jsx
const firstname = 'Robin';
const lastname = 'Wieruch';
export { firstname, lastname };
```

## Equivalent html tag in jsx 
- for equivalent to htmlFor 
- 
```jsx
 <label htmlFor="search">Search: </label>
```






















