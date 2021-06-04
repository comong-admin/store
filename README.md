# [store-site](https://store-wheat-eight.vercel.app/)

## tailwindcss

- init

```sh
> npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
> npx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


//  ./styles/globals.css 
@tailwind base;
@tailwind components;
@tailwind utilities;
```