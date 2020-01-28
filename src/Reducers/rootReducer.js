import { combineReducers} from "redux";
import { promoCodeToggle, itemDetailsToggle, promoCodeInput } from "./Reducer";

export default combineReducers({
    promoCodeToggle,
    itemDetailsToggle,
    promoCodeInput
})