---
title: Learning more
---

We tried to set expectations early on that this tutorial is more focused towards *doing* than *explaining*. Now that the doing is done, explanations are in order.

<br />

# Filling in the gaps on concepts that we applied

## React

We used React components and APIs here with little explaination. Having a solid understanding of React is essential to using Expo to build your app. We recommend reading the [Main Concepts section](https://reactjs.org/docs/hello-world.html) and the [Hooks section](https://reactjs.org/docs/hooks-intro.html) of the React documentation.

<!-- TODO: replace this recommendation with the react-native tutorial when it's live -->

### How to verify your Learning

- You understand how to use `React.useState`, that it is a *hook*, and what the equivalent for React *class* components is.
- Add a new button to clear the selected image state.
- You can create a reusable `Button` component to clean up duplication of `TouchableOpacity` / `Text`.

## async/await, import, and other JavaScript features

Read about [Modern JavaScript on React Native Express](http://www.reactnativeexpress.com/modern_javascript).

### How to verify your Learning

- You can move part of the code from our app into a separate file, export it, and import it successfully into App.js.

## View and Text styles

Read through the [View API reference](https://facebook.github.io/react-native/docs/view) and [Text API reference](https://facebook.github.io/react-native/docs/text) in the React Native documentation.

### How to verify your Learning

- Remove all of the styles from your app and attempt to re-create them from scratch, only referring to the View and Text API reference pages when needed.

## Flexbox

This is the way you position and size the components on your screen. Learn more about it in [Height & Width](https://facebook.github.io/react-native/docs/height-and-width) and [Layout with Flexbox](https://facebook.github.io/react-native/docs/flexbox) in the React Native documentation.

### How to verify your Learning

- Remove the logo image and re-build it using just `View`, `Text`. Use the "sunrise over mountains" 🌄 emoji where needed.

<br />

# Topics that we didn't cover and you will soon care about

## Deployment

How can you take what you have built and turn it into an app that you ship to the App Store and Play Store. Learn more about [distributing your app to stores](../../distribution/introduction/) and [deploying websites](../../guides/deploying-websites/).

## Configuration with app.json

You will want to configure your app icon, splash screen, and other things that are done in `app.json` rather than in your app code. Learn more about [app icons](../../guides/splash-screens/) and [splash screens](../../guides/app-icons/).

## Navigation

Most apps have multiple screens, we just have one here! Learn more about how to add navigation to your app by following the [Fundamentals guide](https://reactnavigation.org/docs/en/getting-started.html) in the React Navigation documentation.

## Debugging

Sometimes things go wrong, and when they do you need to use debugging tools to figure out where your code is having trouble. [Read more about debugging](../../workflow/debugging/). 

## Using the documentation

[Read more about how you can navigate this documentation and use it effectively](../../next-steps/using-the-documentation/).