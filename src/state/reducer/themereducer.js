
const cssReducer = (state = localStorage.getItem("theme"), action) => {
    if(action.payload === 'light' || action.payload === 'dark') {
        state = action.payload;
    } else {
        if(localStorage.getItem("theme")) {
            state = localStorage.getItem("theme");
        } else {
            state = 'light';            
        }

    }
    localStorage.setItem("theme", state);
    return state;
};

export default cssReducer;
