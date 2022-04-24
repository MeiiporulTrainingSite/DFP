import {createStore} from "redux";

const Reducer =(state={storeData:{}},action)=>{
    switch (action.type) {
        case "storeData": return { storeData: {...state.storeData, ...action.data} };
        //case "storeData1": return { storeData: {...state.storeData, ...action.data1} };
        default: return state;
         
    }
}
const store=createStore(Reducer);
export default store;