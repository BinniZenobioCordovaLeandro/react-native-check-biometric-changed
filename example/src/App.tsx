import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {
  biometricsChanged,
  multiply,
  refreshTracker,
  verifyBiometric,
} from 'react-native-check-biometric-changed';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  const [isBiometricChanged, setIsBiometricChanged] = React.useState<
    boolean | undefined
  >();

  const [isValidBiometric, setIsValidBiometric] = React.useState<
    boolean | undefined
  >();

  const [isUpdatedTracker, setIsUpdatedTracker] = React.useState<
    boolean | undefined
  >();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const checkBiometricChanged = () => {
    biometricsChanged()
      .then((response: boolean) => {
        setIsBiometricChanged(response);
      })
      .catch((error: any) => {
        console.log('error: ', error);
      });
  };

  const validateBiometricBeforeUpdate = () => {
    verifyBiometric().then((response: boolean) => {
      setIsValidBiometric(response);
    });
  };

  const updateBiometricTracker = () => {
    refreshTracker().then((response: boolean) => {
      setIsUpdatedTracker(response);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>ñññññññ</Text>
      <Button title="Check biometric changed" onPress={checkBiometricChanged} />
      {isBiometricChanged ? (
        <Text>bio Changed</Text>
      ) : (
        <Text>bio No changed</Text>
      )}
      <Text>ñññññññ</Text>
      <Button
        title="validate biometric register"
        onPress={validateBiometricBeforeUpdate}
      />
      {isValidBiometric ? (
        <Text>valid human</Text>
      ) : (
        <Text>not valid human</Text>
      )}
      <Text>ñññññññ</Text>
      <Button
        title="Update biometric tracker"
        onPress={updateBiometricTracker}
      />
      {isUpdatedTracker ? <Text>updated</Text> : <Text>error updating</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
