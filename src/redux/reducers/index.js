import { ActionTypeGetData } from "../constants/actionType"

const list ={
    employees: [],
    search: []
}
const getDataReducer = (state = list, action) => {
    switch (action.type) {
        case ActionTypeGetData.API_CALL_REQUEST:
            return {...state}
        
        case ActionTypeGetData.API_CALL_REQUEST_SUCCESS:
            return {...state, employees: action.payload.map((el, index) => ({...el, key: index})), search: action.payload.map((el, index) => ({...el, key: index}))}
          
        case ActionTypeGetData.API_CALL_REQUEST_ERROR:
            return {...state}

        case ActionTypeGetData.REMOVE_TODO:
            return {...state}
        
        case ActionTypeGetData.REMOVE_TODO_SUCCESS:
            return {...state, employees: state.employees.filter(item=>item.id !== action.payload.id),search: state.employees.filter(item=>item.id !== action.payload.id)}
        
        case ActionTypeGetData.REMOVE_TODO_ERROR:
            return {...state}
        
        case ActionTypeGetData.ADD_TODO:
            return {...state}
        
        case ActionTypeGetData.ADD_TODO_SUCCESS:
            let newEmployees = [...state.employees];
           
            newEmployees.push(action.payload);
            
            return {...state, employees: newEmployees, search: newEmployees}
        
        case ActionTypeGetData.ADD_TODO_ERROR:
            return {...state}
        
        case ActionTypeGetData.EDIT_TODO:
            return {...state}
        
        case ActionTypeGetData.EDIT_TODO_SUCCESS: {
            return {...state,employees: state.employees.map((item,index)=>{
                if(item.id === action.payload.id){
                    return {...action.payload,key: index}
                }
                return item;
            }),search: state.employees.map((item,index)=>{
                if(item.id === action.payload.id){
                    return {...action.payload,key: index}
                }
                return item;
            })}
        }
        case ActionTypeGetData.EDIT_TODO_ERROR:
            return {...state}
        
        case ActionTypeGetData.SEARCH_DATA:
          
            return {...state}
        
        default:
            return {...state}
    }
}
export default getDataReducer;