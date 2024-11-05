import { addItemsToCartHandler } from "./addItemsToCart.handler";
import { applyCouponHandler } from "./applyCoupon.handler";
import { applyRewardPointsHandler } from "./applyRewardPoints.handler";
import { getCartShareLinkHandler } from "./getCartShareLink.handler";
import { loginWithAppleIOSHandler } from "./loginWithAppleIOS.handler";
import { loginWithEmailAndPasswordHandler } from "./loginWithEmailAndPassword.handler";
import { loginWithFacebookHandler } from "./loginWithFacebook.handler";
import { loginWithGoogleHandler } from "./loginWithGoogle.handler";
import { loginWithOTPHandler } from "./loginWithOTP.handler";
import { removeCouponHandler } from "./removeCoupon.handler";
import { updateAddressHandler } from "./updateAddress.handler";
import { updateCartHandler } from "./updateCart.handler";
import { updateCartMetaHandler } from "./updateCartMeta.handler";
import { updateProfileHandler } from "./updateProfile.handler";
import { verifyEmailOTPHandler } from "./verifyEmailOtp.handler";
import { verifyMobileOTPHandler } from "./verifyMobileOTP.handler";
import { followByIdHandler } from "./followById.handler";
import { unfollowByIdHandler } from "./UnFollowById.handler";
import { selectAddressHandler } from "./selectAddress.handler";
import { selectPaymentModehandler } from "./selectPaymentMode.handler";
const handlerMap = {
    updateAddress: updateAddressHandler,
    loginWithAppleIOS: loginWithAppleIOSHandler,
    loginWithEmailAndPassword: loginWithEmailAndPasswordHandler,
    loginWithOTP: loginWithOTPHandler,
    loginWithFacebook: loginWithFacebookHandler,
    loginWithGoogle: loginWithGoogleHandler,
    verifyMobileOTP: verifyMobileOTPHandler,
    verifyEmailOtp: verifyEmailOTPHandler,
    updateProfile: updateProfileHandler,
    getCartShareLink: getCartShareLinkHandler,
    addItemsToCart: addItemsToCartHandler,
    updateCart: updateCartHandler,
    updateCartMeta: updateCartMetaHandler,
    applyCoupon: applyCouponHandler,
    removeCoupon: removeCouponHandler,
    applyRewardPoints: applyRewardPointsHandler,
    followById: followByIdHandler,
    unfollowById: unfollowByIdHandler,
    selectAddress: selectAddressHandler,
    selectPaymentMode: selectPaymentModehandler
};
export function mutationResponseHandler(responseData, dispatch, params) {
    console.log({ responseData });
    if (!responseData) {
        return;
    }
    Object.keys(handlerMap).forEach(key => {
        if (responseData.hasOwnProperty(key)) {
            handlerMap[key](responseData[key], dispatch);
        }
    });
}
//# sourceMappingURL=index.js.map