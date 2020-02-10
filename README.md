# react-users-list

A minimalist React application that uses the latest React library API and advanced patterns.

The project has been set up on top of [Create React App](https://create-react-app.dev).

The application has been implemented with the usage of the latest React API like [Context](https://reactjs.org/docs/context.html) and [Hooks](https://reactjs.org/docs/hooks-intro.html). These features has been utilized to prove that React internal mechanisms are sufficient to take responsibility for the application state management instead of overused [Redux](https://redux.js.org) library. Applied pattern is overcomplicated for such trivial functionality, but it can be scalable for much larger projects.

## Cloning the repository

```
git clone https://github.com/mszmida/react-users-list.git
```

## Installing Dependencies

In order to install all required project dependencies use the following command:

```
yarn install
```

## Running tests

The tests can be run using the command:

```
yarn run test --watchAll=false
```

## Running application

Before run the application you need to [install project dependencies](#installing-dependencies) and use the following command:

```
yarn run start
```

The application will be available at `http://localhost:3000`.
