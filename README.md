# simple-frontend-project

### Sometimes you want to create a simple front-end web project, without using a framework, but you still want to take advantage of a Web server with hot reload, and use languages like Sass for stylesheets and TypeScript instead of JavaScript only.

### ⚡ This starter uses the awesome [ViteJS](https://vitejs.dev/) to handle all of that, just install it, start the server and go!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

# build
$ npm run build

# preview
$ npm run preview
```

// ******************************************\*\*\*******************************************

# front end project with Tailwind without Vite at this point

## set up

1. install Tailwind and create a tailwind.config.js file `npm install -D tailwindcss` & `npx tailwindcss init`
2. configure the path to all template files inside tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. create a folder `src` & inside a folder `css` & inside a css file: `input.css`
4. add the taillwind directives inside input.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. start the tailwind cli build process
   `npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch`
6. add the compiled CSS file to the <head> of index.html
   `<link href="/dist/output.css" rel="stylesheet">`
7. add other normal CSS or JS file to the HTML as usual
