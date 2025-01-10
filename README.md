![Vercel Deploy](https://deploy-badge.vercel.app/vercel/soar-react)
![GitHub Release](https://img.shields.io/github/v/release/iamleigh/react-soar)

# SOAR Frontend Exercise

Hello stranger, welcome to `react-soar`, a repository with some dummy
dashboard for a fintech app called **SOAR**.

This exercise is built with **Vite + React + TypeScript**. Why? To keep
things simple and basic, focusing to practice with routing (React Router)
and state management (Redux or Context API) whenever is possible.

Feel free to snoop and dig in, leave some comments, or if you want to practice
your frontend skills, you're welcome to submit a pull request. However, if you're
a QA Engineer looking for some fun breaking things, you're welcome as well to
request some fixes.

You can find the project published in **Vercel**:\
https://react-soar.vercel.app/

## Project Workflow
This project uses a Gitflow workflow using two main branches to record the history
of the project:
- `master`: Stores the (latest) production release.
- `develop`: Stores the "next release" code.

For supporting branches we're going to use:
- `feature/`: To work on improvements or fixes in the roadmap.
- `hotfix/`: To store code that's gonna patch production.
- `release/`: To store code to be released, as part of the workflow.

## Poject Roadmap
This project overview of upcoming changes are listed in the **[Roadmap](docs/roadmap.md)** file.

## Getting Started

### 📝 Requirements

- Node v20 or later

### 👾 Available Script(s)

#### `npm i`

Installs any specified packages in the `package.json` file inside
`node_modules` folder.

#### `npm run dev`

Runs the project locally enabling [http://localhost:5173/](http://localhost:5173/)
for preview.\

The page will reload on every change you make.

### `npm run build`

Builds files for production.
