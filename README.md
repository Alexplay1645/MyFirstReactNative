

________________________________________________________________________

React Native Homework #8

Currency App built with React Native.

Features
Fetch currency rates from NBU API
Format date for request
Display currencies using FlatList
Uses "useState" for state management

Testing
Press "Load Currency"
Data loads from API
Currencies appear in list
________________________________________________________________________

React Native Homework #7

A React Native "Calculator" application for Android with extended functionality.

Features Added in This Assignment

Trigonometry buttons: sin, cos, tan, ctg

Input validation: tan and ctg operations are checked to ensure valid results.

% Button: calculates a percentage of a number (e.g., 20% of 500 = 100)

Landscape orientation support

Error handling: invalid operations are displayed as "Error" or "Undefined."

Assignment Files

/screens/CalculatorScreen.js — Calculator screen

/components/CalculatorButton.js — Button component

/src/calculatorLogic.js — Functions for % and trigonometry

App.js — Application entry point

________________________________________________________________________

React Native Homework #6

A mobile calculator built with React Native.

## Features
- Squaring a number (x²)
- Square root (√), including a check for positive numbers
- Uses "useState" for state management

## Testing
1. Enter a number
2. Press x² or √
3. The result is displayed below

## Screenshots
Located in the "screenshots" folder
________________________________________________________________________
React Native Homework #5

React Native Calculator

Description

This project is a simple mobile calculator built with React Native.

Features

Limits the number of digits on the display.

The minus sign - is not counted as a digit.

The decimal point . is not counted as a digit.

Numbers are automatically formatted with spaces between thousands.
Example: 1234567.2 → 1 234 567.2

Spaces are not counted as digits and update correctly when deleting numbers.


________________________________________________________________________
React Native Homework #4

Task:

Calculator memory control buttons (MC, MR, M+, M-, MS, MV)
Create constant object for button types
Create reusable MemoryButton component

Features:

MemoryButtonTypes: constant object with button type, text and enabled state
MemoryButton: reusable TSX component for calculator buttons
App: renders buttons using map() and displays active/disabled states.

How to run:

npm install
npx react-native start
npx react-native run-android

________________________________________________________________________
# React Native Homework #3

Task:
- 404 page for non-existent routes
- Button on Home to simulate invalid page
- Preserve Product Skeleton Loader on Home

Features:
- HomeScreen**: ProductSkeleton (2-column), loading state, button to 404
- NotFoundScreen**: 404 title, subtitle, button back to Home
- Navigation**: React Navigation stack

How to run:
npm install
npx react-native start
npx react-native run-android

________________________________________________________________________
React Native Homework#2

Task:
Create product skeleton loader.

Features:
- 2 columns product layout
- image placeholder
- title placeholder
- loading state

How to run:
npm install
npx react-native run-android
________________________________________________________________________

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
