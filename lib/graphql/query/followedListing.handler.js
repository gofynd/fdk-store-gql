import { setFollowListing } from "../../store/slices/product";
import { addMarketingParamsInAction } from "../../helpers/utils";
export function followedListingHandler(followedListing, dispatch, params) {
    if (followedListing) {
        try {
            if (followedListing === null || followedListing === void 0 ? void 0 : followedListing.items) {
                followedListing.items.forEach((item, index) => {
                    if (item) {
                        item.action = addMarketingParamsInAction(item.action, {
                            f_id: params === null || params === void 0 ? void 0 : params.collectionType,
                            f_source: 'wishlist',
                            f_content: `${index + 1}`,
                        });
                    }
                });
            }
        }
        catch (err) {
            console.log("Error setting followed listing marketing params: ", err);
        }
        dispatch(setFollowListing(followedListing));
    }
}
//# sourceMappingURL=followedListing.handler.js.map