# Turborepo NextJS + Expo Starter Kit

## About

It uses [Turborepo](https://turbo.build/repo) to manage the monorepo. And contains:

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ landing
  |   ├─ Next.js 14
  |   ├─ Radix UI
  |   └─ Tailwind CSS
  └─ dashboard
      ├─ Next.js 14
      ├─ Radix UI
      └─ Tailwind CSS
packages
 ├─ design-system
 |   └─ Reusable components for the apps
 |      ├─ Radix UI
 |      └─ Tailwind CSS
 └─ utils
     └─ Utility functions
configs
 ├─ eslint
 ├─ github
 ├─ prettier
 ├─ tailwind
 └─ typescript
```

## Getting Started

To get it running, follow the steps below:

##### Setup dependencies

```bash
pnpm install
```

##### Start the apps

```bash
pnpm dev
```

##### Build the apps

```bash
pnpm build
```

### Adding a new package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts`, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

## Deployment

#### Deploy to Vercel

Let's deploy the Next.js application to [Vercel](https://vercel.com/). If you have ever deployed a Turborepo app there, the steps are quite straightforward. You can also read the [official Turborepo guide](https://vercel.com/docs/concepts/monorepos/turborepo) on deploying to Vercel.

1. Create a new project on Vercel, select the `apps/landing` or `apps/dashboard` folder as the root directory and apply the following build settings:

<img width="927" alt="Vercel deployment settings" src="https://user-images.githubusercontent.com/11340449/201974887-b6403a32-5570-4ce6-b146-c486c0dbd244.png">

> The install command filters out the expo package and saves a few second (and cache size) of dependency installation. The build command makes us build the application using Turbo.

2. Done! Your app should successfully deploy.

## References

- [Turborepo](https://turbo.build/repo)
- [T3-OSS](https://github.com/t3-oss/create-t3-turbo)

## License

MIT License

<hr>

© 2023 Wahyu Kurniawan
