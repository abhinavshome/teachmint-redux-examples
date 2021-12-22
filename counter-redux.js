//Pure function
// const arr = [2,3];

// const addInArray = (inputArray, el) => {
//     // inputArray.push(el);
//     return inputArray.concat(el);
// };

// const res = addInArray(arr, 5);
// console.log(arr, res);

const reducer = (state = 1, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'CHANGE_BY':
            return state + action.payload;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

const render = () => {
    document.getElementById('counter').innerHTML = store.getState();
};
render();

store.subscribe(render);


