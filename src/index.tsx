import { NativeModules } from 'react-native';

type CheckBiometricChangedType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CheckBiometricChanged } = NativeModules;

export default CheckBiometricChanged as CheckBiometricChangedType;
