const initialState = [
    {
        id: 0,
        name: 'Mahmudur Rahman',
        email: 'mahmudur@gmail.com'
    },
    {
        id: 1,
        name: 'Auntik Rahman',
        email: 'auntik226@gmail.com'
    },
]

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            state = [...state, action.payload]
            return state;

        case "DELETE_USER":
            const filterUsers = state.filter(user => user.id !== action.payload && user);
            state = filterUsers;
            return state;

        default:
            return state;
    }
}