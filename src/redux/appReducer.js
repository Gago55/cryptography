const SETINPUTTEXT = './app/SETINPUTTEXT'

let initialState ={
    inputText : ""
}

export default (state = initialState,action) => {
    switch(action.type){
        case SETINPUTTEXT :
            return{
                ...state,
                inputText : action.text
            }
        default:
            return state
    }
}

export const setInputTextAC = text => ({type:SETINPUTTEXT , text})