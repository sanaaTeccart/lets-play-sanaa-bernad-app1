

import axios from 'axios';




export async function findME(id) {
  const token = sessionStorage.getItem('token');
  const headers = { headers: { 'Authorization': 'Bearer ' + token } };

  try {
    const { data } = await axios.get(`https://api.joeleprof.com/lets-play/me`, headers);
    if (!data.success) {
      return [];
    }
    return data.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return [];
  }
}

// 
export async function DeleteMe(token) {
  try {
    
    const response = await axios.delete('https://api.joeleprof.com/lets-play/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.success;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur actuel :', error);
    return false;
  }
}


// export async function updateMe(userData) {
//   const token = sessionStorage.getItem('token');
//   const headers = {
//     headers: {
//       'Authorization': 'Bearer ' + token,
//     },
//   };
//   try {
//     const response = await axios.put('https://api.joeleprof.com/lets-play/me', userData, headers);
//     return response.data;
//   } catch (error) {
//     console.error('Erreur lors de la mise à jour des informations de l\'utilisateur:', error);
//     throw error; 
//   }
// }

export async function updateMe( id,userData) {
  const token = sessionStorage.getItem('token');
  const headers = { 'Authorization': 'Bearer ' + token };

  try {
   
    const response = await axios.put(`https://api.joeleprof.com/lets-play/me`, userData, { headers }); 
    console.log(response)

    const data = response.data;
    console.log(data)
    if (response.status === 200 && data.success) {

      return data.data;
    } else {

      throw new error( data.message);
 
    }
  } catch (error) {
    throw error;

  }


}


