import { setFollowListing } from "../../store/slices/product";
export function followedListingHandler(followedListing, dispatch) {
    if (followedListing) {
        dispatch(setFollowListing(followedListing));
    }
}
//# sourceMappingURL=followedListing.handler.js.map