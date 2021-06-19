export const toCart = (value) => {
    return {
        type: 'addToCart',
        payload: value
    }
}

export const toCartMinus = (value) => {
    return {
        type: 'toCartMinus',
        payload: value
    }
}

export const checkOutProduct = () => {
    return {
        type: 'checkout'
    }
}