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
import { updateShipmentStatusHandler } from "./updateShipmentStatus.handler";
const handlerMap = {
    updateAddress: updateAddressHandler,
    loginWithAppleIOS: loginWithAppleIOSHandler,
    loginWithEmailAndPassword: loginWithEmailAndPasswordHandler,
    loginWithOTP: loginWithOTPHandler,
    loginWithFacebook: loginWithFacebookHandler,
    loginWithGoogle: loginWithGoogleHandler,
    verifyMobileOTP: verifyMobileOTPHandler,
    verifyEmailOTP: verifyEmailOTPHandler,
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
    selectPaymentMode: selectPaymentModehandler,
    updateShipmentStatus: updateShipmentStatusHandler,
};
export function mutationResponseHandler(response, dispatch, params, store) {
    if (!(response === null || response === void 0 ? void 0 : response.data)) {
        return;
    }
    Object.keys(handlerMap).forEach((key) => {
        if (response === null || response === void 0 ? void 0 : response.data.hasOwnProperty(key)) {
            let error = null;
            if (!(response === null || response === void 0 ? void 0 : response.data[key]) && Array.isArray(response === null || response === void 0 ? void 0 : response.errors)) {
                error = response === null || response === void 0 ? void 0 : response.errors.reduce((acc, err) => {
                    if (Array.isArray(err === null || err === void 0 ? void 0 : err.path) && (err === null || err === void 0 ? void 0 : err.path.includes(key))) {
                        return err;
                    }
                    return acc;
                }, null);
            }
            handlerMap[key](response.data[key], dispatch, params, store, error);
        }
    });
}
//# sourceMappingURL=index.js.map