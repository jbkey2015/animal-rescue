import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getShelters = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shelters.json`)
    .then((result) => {
      const allSheltersObj = result.data;
      const shelters = [];
      if (allSheltersObj != null) {
        Object.keys(allSheltersObj).forEach((shelterId) => {
          const newShelter = allSheltersObj[shelterId];
          newShelter.id = shelterId;
          shelters.push(newShelter);
        });
      }
      resolve(shelters);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleShelter = (shelterId) => axios.get(`${baseUrl}/shelters/${shelterId}.json`);

export default { getShelters, getSingleShelter };
