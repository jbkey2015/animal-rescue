import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPetsByShelterId = (shelterId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pets.json?orderBy="shelterId"&equalTo="${shelterId}"`)
    .then((result) => {
      const allPetsObj = result.data;
      const pets = [];
      if (allPetsObj != null) {
        Object.keys(allPetsObj).forEach((petId) => {
          const newPet = allPetsObj[petId];
          newPet.id = petId;
          pets.push(newPet);
        });
      }
      resolve(pets);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSinglePet = (petId) => axios.get(`${baseUrl}/pets/${petId}.json`);

const deletePet = (petId) => axios.delete(`${baseUrl}/pets/${petId}.json`);

const savePet = (newPet) => axios.post(`${baseUrl}/pets.json`, newPet);

const editPet = (petId, pet) => axios.put(`${baseUrl}/pets/${petId}.json`, pet);

export default {
  getPetsByShelterId,
  getSinglePet,
  deletePet,
  savePet,
  editPet,
};
