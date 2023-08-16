## Setting Absolute Import

- in **tsconfig.json**, add

```
    {
      "compilerOptions": {
        "baseUrl": "./src",
        // ...
      }
    }
```

- in **vite.config.ts**,

```
    {
      resolve: {
        alias: {
            src: path.resolve('src/'),
        }
      },
      // ...
    }
```

- The absolute import will looks like

```
    import Test from 'components/test'
```
