
import LocalAuthentication

@objc(CheckBiometricChanged)
class CheckBiometricChanged: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }

    @objc(biometricsChanged:withRejecter:)
    func biometricsChanged(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let context = LAContext()

        guard context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: nil) else {
                // Handle not being able to use biometrics
                reject(String("error"), "Not being able to use biometrics", nil)
                return
            }

        guard !LAContext.biometricsChanged() else {
            // Handle biometrics changed, such as clearing credentials and making the user manually log in
            // Reset LAContext.savedBiometricsPolicyState to nil after doing so

            // "Biometrics changed";
            resolve(true)
            return
        }
        
        guard LAContext.biometricsChanged() else {
            // "Biometrics NOT changed";
            resolve(false)
            return
        }
    }

    @objc(verifyBiometric:withRejecter:)
    func verifyBiometric(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let context = LAContext()
        
        // Log in with biometrics
        let reason = "Sign in to your account";
        context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason ) { success, error in
            
            if success {
                DispatchQueue.main.async {
                    // Go to next screen after login success
                    // will update Context Updated
                    // resolve(true);
                }
                
            } else {
                // Handle error
                // Biomtric not verified
                // resolve(false);
            }
        }
        resolve(true);
    }

    @objc(refreshTracker:withRejecter:)
    func refreshTracker(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let context = LAContext()
        LAContext.savedBiometricsPolicyState = context.evaluatedPolicyDomainState
        resolve(true)
    }
}
