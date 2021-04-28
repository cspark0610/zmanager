import axios from 'axios';

const url = 'http://localhost:5000/api/zombie'


export const getAllZombies = () => axios.get(url);

export const updateZombie = (id, updatedZombie) => axios.patch(`${url}/${id}`,updatedZombie);

