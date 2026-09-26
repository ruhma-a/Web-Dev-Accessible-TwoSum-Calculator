# Web-Dev-Accessible-TwoSum-Calculator

This project is a fully interactive, mobile-responsive web application designed to visually demonstrate the classic **Two Sum** algorithm.

## 🌐 Live Demo
Don't want to download files and run them locally? Same.
[Play with the live app here!](https://ruhma-a.github.io/Web-Dev-Accessible-TwoSum-Calculator/)

## ✨ Features
- **Interactive Array Management:** Push new numbers (marbles) into the array or pop them off the end using the DOM controls.
- **Dynamic Target Tracking:** Set a target value and watch the algorithm react in real-time as the inputs change.
- **Visual Feedback:** The array is dynamically rendered on the screen. (Hover over the array boxes to see their index!).
- **Optimal Algorithm:** Solves the Two Sum problem in **O(n) time complexity** under the hood by using a JavaScript Hash Map (`Map`). 

## 📂 File Structure
This project follows best programming practices by separating components into three files:
1. `index.html` - The structure and navigation.
2. `styles.css` - The responsive, flexbox-driven, accessible styling.
3. `script.js` - The brains of the operation (state management, DOM manipulation, and the algorithm).

## Algorithm
Instead of a brute force nested method, which would render an O(n^2) complexity, this project uses hash maps. This allows the algorithm to find the correct indices in O(n) complexity. Yay!



*Created as part of Web Dev coursework in DOM Manipulation and algorithmic thinking*
