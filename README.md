# General-react-dash-template

## Table of contents

1. [Features](#features)
2. [Dependencies](#dependencies)
3. [Prerequisites](#prerequisites)
4. [Install and Use](#install-and-use)
5. [Folder Structure](#folder-structure)

## Features

- Sending and receiving messages
- Typing indicator
- Theme switcher

## Dependencies

The project is built with:

- `Native js` with no libraries or frameworks
- `Vite` a JavaScript-based bundler

## Prerequisites

To use this project you should have the following on your machine:

- `Node.js` version 24.11.1

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone https://github.com/Mohmmed-Mahsoub/chat-app-task.git`

2. Install packages:
   `npm install`

3. Run the project:
   `npm run dev`

4. Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## Folder Structure

The main folder structure of the code is structured like the following:

```js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
|
├── public
|   └── vite.svg
|
└── src
    ├── main.js
    ├── actions
    |   ├── chatActions.js
    |   ├── index.js
    |   └── themeActions.js
    ├── state
    |   ├── chatState.js
    |   ├── index.js
    |   ├── store.js
    |   └── themeState.js
    ├── styles
    |   └── main.css
    ├── utils
    |   ├── domHelpers.js
    |   ├── helpers.js
    |   └── index.js
    └── views
        ├── chatView.js
        ├── headerView.js
        ├── inputView.js
        └── messageView.js
```
