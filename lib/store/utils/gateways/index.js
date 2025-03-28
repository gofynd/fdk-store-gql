import JuspayPayment from "./juspay";
import RazorpayPayment from "./razorpay";
import SimplypayPayment from "./simply";
import RupifiPayment from "./rupifi";
import PayumoneyPayment from "./payumoney";
import JiopayPayment from "./jiopay";
import JioPayment from "./jio";
import PotleePayment from "./potlee";
import EpayLaterPayment from "./epaylater";
import AjiodhanPayment from "./ajiodhan";
import StandardExtension from "./standard_extension";
import CcavenuePayment from "./ccavenue";
export const PaymentGatway = {
    Juspay: JuspayPayment,
    Razorpay: RazorpayPayment,
    UPI_Razorpay: RazorpayPayment,
    Simpl: SimplypayPayment,
    Potlee: PotleePayment,
    Rupifi: RupifiPayment,
    Payumoney: PayumoneyPayment,
    Jiopay: JiopayPayment,
    Jio: JioPayment,
    Epaylater: EpayLaterPayment,
    Ajiodhan: AjiodhanPayment,
    StandardExtension: StandardExtension,
    Ccavenue: CcavenuePayment,
};
//# sourceMappingURL=index.js.map