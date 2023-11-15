const reducers = {
    addProduct: (state, action) => {
        state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
        state.products.splice(action.payload, 1);
    },
};

export default reducers;
