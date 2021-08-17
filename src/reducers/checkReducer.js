


export const checkReducer = (state = [] , action) => {
    switch (action.type) {
        case 'toggle':
                return  state.map(  true_words =>
                        ( true_words.id === action.payload )
                        ? { ...true_words, done: !true_words.done }
                        : true_words     
                )      
        default:
            return state;
    }
}
