
export const promoCodeToggle = (initialState = {}, action) => {
    if(action.type === "PROMO_CODE_TOGGLE"){
        return {
            promoCodeOpen: action.payload
        }
    }
    return initialState
}

export const itemDetailsToggle = (initialState = {}, action) => {
    if(action.type === "ITEM_LIST_TOGGLE"){
        return {
            itemDetailsOpen: action.payload
        }
    }
    return initialState
}

export const promoCodeInput = (initialState = {}, action) => {
    if(action.type === "PROMO_CODE"){
        return {
            promoCode: action.payload
        }
    }
    return initialState
}