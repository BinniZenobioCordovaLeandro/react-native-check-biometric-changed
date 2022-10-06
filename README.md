# react-native-check-biometric-changed

Helps you to detect when the biometric register changed

## Installation

```sh
npm install react-native-check-biometric-changed
```

## ATENTION.

[Hey!, My code helps you? , then buy me a coffee to help me.](https://www.buymeacoffee.com/binnicordova) ☕️☕️☕️☕️☕️💯👨‍💻🥰

## Usage

```js
import {
  biometricsChanged,
  refreshTracker,
  verifyBiometric,
} from 'react-native-check-biometric-changed';

// THIS PACKAGE WILL BE USED TO CHECK WHEN THE BIOMETRIC CHANGED

// REQUEST BIOMETRIC STATUS TO THE TRACKER
const biometricWasChanged = await biometricsChanged();

if (biometricWasChanged) {
    // ALERT!, USER LISTEN, YOUR BIOMETRIC WAS CHANGED!
}

// TO UPDATE BIOMETRIC TRACKER
const isHumanConfirm = await verifyBiometric();

if (isHumanConfirm) {
    const updateBiometricRegisters = await refreshTracker();
} else {
    // YOUR NOT A REAL HUMAN ON THIS DEVICE ;(
}

```
## Demo

Read and Clone the EXAMPLE from [demoExample](https://github.com/BinniZenobioCordovaLeandro/react-native-check-biometric-changed/tree/main/example)

## Contributing

Send me a message to validate your *branch*

`feat/feature-description` with _UNIT_TEST_ at 90%

`fix/fix-description` with _UNIT_TEST_ at 95%

`tst/test-description` with _UNIT_TEST_ at 100%

`doc/documentation-description` using *.md* files and comments using [JSDoc](https://jsdoc.app/)

And see the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
