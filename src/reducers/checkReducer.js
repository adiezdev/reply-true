


export const checkReducer = (state = [] , action) => {
    switch (action.type) {
        case true:
                return 'true';
        case false:
                return 'false';
        default:
            break;
    }
}
