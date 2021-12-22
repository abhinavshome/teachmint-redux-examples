//Pure function
// const arr = [2,3];

// const addInArray = (inputArray, el) => {
//     // inputArray.push(el);
//     return inputArray.concat(el);
// };

// const res = addInArray(arr, 5);
// console.log(arr, res);

const reducer = (state = 1, action) => {
    if(action === 'INCREMENT') {
        return state + 1;
    } else if(action === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
};

let state = reducer();

const dispatch = (action) => {
    state = reducer(state, action);
    render();
};

const render = () => {
    console.log(state);
    document.getElementById('counter').innerHTML = state;
};

render();

