import { setFollowListing } from "../../store/slices/product";
import { addMarketingParamsInAction } from "../../helpers/utils";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function followedListingHandler(followedListing, dispatch, params, oldStore, options) {
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
        conditionalStoreDispatch(dispatch, setFollowListing, followedListing, options);
        emitFPIEvent(FPI_EVENTS.VIEW_WISHLIST, params, followedListing, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=followedListing.handler.js.map