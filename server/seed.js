
import zombieModel from './models/zombie.js'

let zombieData = [];
function randomInteger(min, max) {
//integer random number between min (included) and max (included):
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i=0; i <= 17; i++ ){
    const locations = ['Hospital', 'School', 'Warehouse']
    let randomIdx = randomInteger(0 , 2);
    zombieData.push({ zombieLocation: locations[randomIdx], image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` })
}

console.log(zombieData);

const seedDB = () => {
    zombieModel.deleteMany({}, (err) => {
        if (err) {
            console.log(`Zombie.deleteMany error: ${err}`);
        } else {
            zombieModel.create(zombieData, (err) => {
                console.log('Zombies created succesfully');
                if (err) {
                    console.log(`Zombie.create error: ${err}`);
                }
            });
        }
    })
};

export default seedDB;