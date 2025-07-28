# To-Do List Application

## Overview
The To-Do List application is a simple, user-friendly web app that allows users to manage daily tasks effectively. This project demonstrates fundamental front-end development concepts using **HTML**, **CSS**, and **JavaScript**, with emphasis on DOM manipulation, event handling, error validation, and data persistence using localStorage.

## Features
- **Add Tasks:** Users can enter new tasks and add them to the list.
- **Mark Tasks as Completed:** Each task includes a checkbox to mark it as completed, visually indicated by a strikethrough and color change.
- **Delete Tasks:** Users may delete tasks individually.
- **Error Handling:** Prevents adding empty tasks and displays an error message.
- **Persistent Storage:** Tasks are saved in the browser's localStorage so that they remain after the page is refreshed.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Browser Local Storage for persistence

## File Structure
├── index.html # Main HTML page
├── style.css # Stylesheet with responsive and clean UI
└── script.js # JavaScript logic for task management and localStorage

## How to Use
1. Open `index.html` in any modern web browser.
2. Type a task description into the input field.
3. Click the **Add Task** button or press **Enter** to add the task.
4. Use the checkbox next to each task to mark it completed. Completed tasks will appear with a strikethrough and different background color.
5. Click the **Delete** button next to a task to remove it.
6. Tasks are automatically saved in the browser’s localStorage and will persist across page reloads.

## Development Notes
- Adding an empty task triggers an error message that disappears after 2 seconds.
- The app re-renders the task list every time a task is added, completed, or deleted to reflect the current state.
- The design is clean and responsive within a centered container for ease of use.
