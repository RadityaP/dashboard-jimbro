## Setting Absolute Import

- in **tsconfig.json**, add

```
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "src/*": ["./src/*"]
        }
      }
    }
```

- in **vite.config.ts**,

```
    {
      resolve: {
        alias: {
            src: path.resolve('./src'),
        }
      },
      // ...
    }
```

- The absolute import will looks like

```
    import Test from 'components/test'
```

## Install and Config Tailwind and Sass

- Install and init tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Config in **tailwind.config.js**

````
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}```
````
