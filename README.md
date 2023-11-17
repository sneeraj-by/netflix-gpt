# Netflix GPT

- CRA "npx create-react-app netflix-gpt"
- config tailwindCSS
  - npm install -D tailwindcss
  - npx tailwindcss init
  - Configure your template paths, Add the paths to all of your template files in your tailwind.config.js file.
  - "/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
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