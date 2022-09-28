import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-check-biometric-changed' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const CheckBiometricChanged = NativeModules.CheckBiometricChanged
  ? NativeModules.CheckBiometricChanged
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return CheckBiometricChanged.multiply(a, b);
}

export function biometricsChanged(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    CheckBiometricChanged.biometricsChanged()
      .then((response: any) => {
        if (response == true) resolve(true);
        else resolve(false);
      })
      .catch((error: any) => {
        reject(`${error}`);
      });
  });
}

export function verifyBiometric(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    CheckBiometricChanged.verifyBiometric()
      .then((response: any) => {
        if (response == true) resolve(true);
        else resolve(false);
      })
      .catch((error: any) => {
        reject(`${error}`);
      });
  });
}

export function refreshTracker(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    CheckBiometricChanged.refreshTracker()
      .then((response: any) => {
        if (response == true) resolve(true);
        else resolve(false);
      })
      .catch((error: any) => {
        reject(`${error}`);
      });
  });
}
