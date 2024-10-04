# My Next.js Three.js App

## Project Description

This application is an interactive piece that showcases the different stages of a disease affecting
an organ. It focuses on the human heart, presenting three different models that users can
interact with. While the heart models do not directly represent any specific disease, they offer
three distinct views that users can explore. Labels and descriptions provide information about
the stages. Users can also change perspectives by using the interactive camera controls.

## DEVELOPMENT PROCESS

This was the development process that took place to build this interactive application.

**STEP 1**: Visual Draft Design - With no visual references to follow, I created a simple draft of
the desired outcome for the final application.


**STEP 2**: Setting Up the Boilerplate - I set up the project by installing Next.js, React Three Fiber, React Three Drei, and Three.js. I also organized the folder structure and cleaned up the initial code.

**STEP 3**: Creating a Task List - I made a task list of all the necessary items and processes. This file is located in the root directory and is named `TASK-LIST.txt`.

**STEP 4**: Integrating Models - I downloaded all the necessary models and integrated them into the project. I used `gltfjsx`, an npm package that converts GLB or GLTF assets into reusable React Three Fiber JSX components. Afterward, I converted the files to TypeScript.

**STEP 5**: Installing Fonts and Organizing Model Data - I installed and set up all the Google fonts and created an object file to store model data.

**STEP 6**: Basic Layout Creation - I built the basic visual layout, including the header, footer, and modal credit section. I then loaded the models, set up lighting, and added a background.

**STEP 7**: State Management Setup - I implemented global state management to handle model toggling, loading, camera controls, and the visibility of labels.

**STEP 8**: Camera View and Label Functionality - I added functionality for camera view buttons and the label toggle (show/hide). I used GSAP to animate camera transitions.

**STEP 9**: Loading and Animation - I implemented loading functionality and used GSAP to animate the element sequence when the project loads.

**STEP 10**: Final Code Review - I did a final walkthrough of the code, added comments, and cleaned up unnecessary imports and code.

**STEP 11**: Build and Test - I built and tested the application.

**STEP 12**: Pushed to GitHub

**FINAL STEP**: Deployment to Vercel


## Technical Decisions

Each technology was selected based on its specific strengths to optimize the development process and performance.

**Three.js**: As the driving force behind the 3d models shown

**GSAP**: Chosen for its powerful and smooth animation capabilities, particularly in complex 3D environments.

**Leva**: Used for its intuitive GUI to easily control and adjust parameters in real-time during development.

**gltfjsx**: Simplified the loading and management of 3D models by converting them into reusable React components.

**useContext**: Opted for state management to keep the app lightweight and avoid the complexity of external state libraries.

## AI Integration

For AI integration, I utilized AI tools like v0.dev to generate the initial layout and optimize the code for my project. Additionally, I used ChatGPT extensively to troubleshoot issues related to code syntax and logic. This approach significantly streamlined my workflow, as it was faster and more effective than searching for answers on StackOverflow or Google.

## Initialization

```
npx create-next-app@latest heart-disease-model --typescript
cd heart-disease-model
npm install three gsap leva @react-three/drei @react-three/fiber @react-three/gltfjsx
```

## Challenges and Solutions

One of the main challenges I faced was managing the application's state, particularly handling loading states, camera controls, and model selection. Initially, I considered using Redux for state management but found it to be unnecessarily complex for this project. Instead, I opted for a simpler solution using React’s useContext to manage state efficiently. This decision simplified the codebase while still allowing me to handle key aspects of the app's functionality like loading and camera state transitions.



## Project Structure

```
```
- `components/` - Contains React components used throughout the application.
- `pages/` - Next.js pages that define the routes of the application.
- `public/` - Static assets like images and fonts.
- `styles/` - CSS and styling files.
- `three/` - Custom Three.js components and utilities.
- `utils/` - Utility functions and helpers.
- `package.json` - Project dependencies and scripts.
- `README.md` - Project documentation.
```
```

