# Netflix GPT

- CRA "npx create-react-app netflix-gpt"
- config tailwindCSS

  - npm install -D tailwindcss
  - npx tailwindcss init
  - Configure your template paths, Add the paths to all of your template files in your tailwind.config.js file.
  - "/** @type {import('tailwindcss').Config} \*/
    module.exports = {
    content: [
    "./src/**/\*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }"
  - Add the Tailwind directives to your CSS, Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;

  - npm i -D react-router-dom
  - sign in/up form
  - validation
  - Setup Firebase [npm install firebase, npm install -g firebase-tools, copy SDK code from firebase console, firebase login, firebase init, npm run build, firebase deploy]
  - Deploy web app to firebase https://netflixgpt-518e1.web.app
  - added sign in/up firebase logic to handle login function
  - store user object from firebase to redux store
  - npm i -D @reduxjs/toolkit, npm i react-redux
  - setUp store and created slice for User
  - added auth state change function from firebase
  - added displayName and photURL from firebase updateProfile function

# Features to build

- Login/SignUp
  - Sign In/Sign up form
  - Protected browse page
- Browse Page (After Auth)
  - Header
  - Main Movie
    - Trailer in BG
    - Movie Title & Description
    - Movie Suggestions Category
      - Movie list
- NetflixGPT
  - Search bar
  - movie suggestions
