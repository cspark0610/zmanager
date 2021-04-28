export const zombiesReducer = (zombies = [], action) =>{
    switch (action.type){
        case 'GET_ALL': 
            return action.payload; //data

        case 'UPDATE': 
            return zombies.map((zombie) => zombie._id === action.payload._id ? action.payload : zombie) 

        default : return zombies;
    }

}
