// export const servicesApi = async () => {
//   const result = await fetch('http://localhost:5000/api/v1/servicessds').then(
//     res => res.json(),
//   );

//   if (!result.success) {
//     throw new Error('Something new Error');
//   }
//   return result;
// };
import axios from 'axios';
export const servicesApi = async () => {
  const result = await axios.get('http://localhost:5000/api/v1/services');
  return result.data;
};

// if (!result.success) {
//   throw new Error('Something new Error');
// }
// return result;
