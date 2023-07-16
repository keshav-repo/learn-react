## React JS 

### Create new react app using commmand line 
npx create-react-app my-app
cd .\my-app\
npm start

### Another way of using tenary operator 
```
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
```
const student = {
      ID: '21',
      name: 'Jhon',
      GPA: '3.0',
    };
    
const {ID, name, GPA} = student;
```
```
a = [1,2,3];
b = [4,5,6];
c = a.concat(b);
console.log("c: " + c);
```
For object
```
a = [1,2,3];
b = [4,5,6];
c = [...a, ...b]; //spread operator
console.log("c: " + c);
```
Person object
```
const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);
```
### Arrow Function 
```
const students = [
  { ID: 1, present: true},
  { ID: 2, present: true},
  { ID: 3, present: false}, 
];

const presentStudents = students.filter(student => student.present);
console.log(presentStudents);
```






















