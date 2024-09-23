# Development Approaches in the Organo Project

## Project Structure

The Organo project is structured as a React application with functional components and hooks, allowing for efficient and dynamic state management and reusable component design. The folder structure clearly separates `components`, `images`, and style settings, promoting an organization that facilitates code maintenance and scalability.

## Componentization

Each part of the application is divided into smaller components, each responsible for specific functionality:

- **Banner and Footer**: Components that represent the header and footer of the application.
- **Form**: Allows data entry for creating new collaborators and teams, using local state control to manage inputs.
- **Dropdown List and Text Field**: Abstractions for form elements, increasing code reuse.
- **Button**: Encapsulates a styled button that can be reused in different parts of the application.
- **Team**: Visually groups collaborators by team and allows specific interactions such as color change and deletion of collaborators.

## State Management

The use of **useState** for local state control and **props** for data passing between components is a central practice:

- **Collaborators and Teams**: States are initialized and manipulated in the `App` main component, allowing state changes to reflect throughout the application reactively.

## Handling Functions

Specific functions for operations such as adding, removing, and toggling favorites for collaborators are defined in the `App` component and passed as props to child components. This demonstrates a unidirectional data flow approach and business logic encapsulation.

## Styling

Styling is done using modularized CSS, where each component has its own CSS file, which prevents style conflicts and improves code cohesion.

## Reusability and Modularity

The project's architecture favors component reusability and modularity, valued characteristics in modern React applications to facilitate code maintenance and future expansion.

<p align="center">
    <img src="https://github.com/user-attachments/assets/6050cd4b-cb25-46b7-ac31-cc8d428c4005" alt="Image Project 1">
</p>

<p align="center">
    <img src="https://github.com/user-attachments/assets/2e69b317-fcee-49ff-bfd3-2e706117a1dc" alt="Image Project 2">
</p>

---

This project is a practical example of how the concepts of componentization, state management, and modular architecture can be implemented in React to create efficient and scalable applications.
