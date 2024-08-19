# React Assignment : Answers to the Questions

1; How can you implement shared functionality across a component tree?

Shared functionality across a component tree in React can be implemented using the following approaches:

- **Context API**: Provides a way to share data (like themes or authenticated user details) across components without prop drilling.
- **Higher-Order Components (HOCs)**: Wrapping components to inject shared logic.
- **Render Props**: Passing functions as props to share functionality across components. (Used in this Assignment)
- **Custom Hooks**: Encapsulating shared logic that can be reused across multiple components.

2; Why is the useState hook appropriate for handling state in a complex component?

The `useState` hook is appropriate because:

- It provides a simple and intuitive way to manage state within functional components.
- It supports complex state management by allowing you to store objects, arrays, or primitive values.
- It enables easy updates and re-renders based on state changes, ensuring UI consistency.
- You can manage multiple pieces of state separately, avoiding complex state structures.

3; Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
