// const Prices = (price) => ({
//     saving: (price*-0.0374).toFixed(2),
//     taxes: (price*0.0784).toFixed(2),
//     total: (price +(price*-0.0374)+(price*0.0784)).toFixed(2)
// })
//
// export default Prices;


export const promoCodeToggle = (isOpen) => ({
    type: "PROMO_CODE_TOGGLE",
    payload: !isOpen
})

export const itemDetailToggle = (isOpen) => ({
    type: "ITEM_LIST_TOGGLE",
    payload: !isOpen
})

export const promoCodeCreator = (promoCode) => ({
    type: 'PROMO_CODE',
    payload: promoCode
})

export const checkPromoCode = (promoCode) => promoCode === 'PROMOCODE'? 0.9: 1;