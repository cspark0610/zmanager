import * as api from '../api/index';


export const getAllZombies = () => async(dispatch)=> {
    try {
        const { data } = await api.getAllZombies(); //data representa el post que proviene del server por el axios
        dispatch({type:'GET_ALL', payload : data})

    } catch (error) {
        console.log(error.message);
    }
    
}


export const updateZombie = (id, zombie) => async(dispatch)=>{
    try {
        const { data } = await api.updateZombie(id, zombie);

        dispatch({ type:'UPDATE', payload: data })
    } catch (error) {
        console.log(error);
    }
};