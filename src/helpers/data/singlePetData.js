import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPetsByPetId = (petId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pets.json?orderBy="petId"&equalTo="${petId}"`)
    .then((result) => {
      const allPetsObj = result.data;
      const pets = [];
      if (allPetsObj != null) {
        Object.keys(allPetsObj).forEach((singlePetId) => {
          const newPet = allPetsObj[petId];
          newPet.id = singlePetId;
          pets.push(newPet);
        });
      }
      resolve(pets);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getPetsByPetId };
