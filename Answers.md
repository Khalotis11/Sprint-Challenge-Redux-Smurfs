1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- Map, forEach, slice... Object.create()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- Actions - This will perform an action that will then pass a Object with a Type, and sometimes an 'payload'
 -Reducers - will perform an action to application state (store) based off of the action that was recieved via a switch case.
- The store is where your application state is stored. It holds the state of your application in one tree so you can access it from any component and pass data around more easily.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state the application has access to (store) component state is state that is individual to each state.
- Component state - Useful if the state is only ever needed in that individual component, think controled components
- Application state - to store any data that will need to be shared between multiple components.

1.  What is middleware?
 - Middleware is is a way to interact with actions that have been dispatched to the store, before they end up interacting with the stores reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 - Redux-thunk allows you to make use of promises. Actions are by default synchronous and redux-thunk allows us to have asynchronous actions. 
1.  Which `react-redux` method links up our `components` with our `redux store`?
- The Connect Method.
