export  const initialState={

    basket: [],
    user:null,
    };
    //selector
    export const getBasketTotal=(basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);
    
    
    
    
    const reducer=(state, action)=>{
        console.log(action)
    switch(action.type){
    case "ADD_TO_BASKET":
        return{
            
    ...state,
    basket:[...state.basket,action.item],
    
        }
        case"EMTY_BASKET":
        return{
    ...state,
    basket:[]
    
    
        }
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if(index>=0){
    
    newBasket.splice(index,1)
            }else{
    console.warn(`cant,t remove product(id:${action.id}) as ists not in the basket`)
    
            }
    
    return {
    ...state,
    basket:newBasket
    
    }
    case "SET_USER":
    return{
    ...state,
    user:action.user
    
    }
 
    }

    
    }
    
    
    export default reducer