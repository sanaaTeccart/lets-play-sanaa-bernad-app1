import axios from 'axios';

export async function find() {
  const token = sessionStorage.getItem('token');
  const headers = { headers: { 'Authorization': 'Bearer ' + token } };

  try {
    const { data } = await axios.get('https://api.joeleprof.com/lets-play/users', headers);
    //console.log(data);
    if (!data.success) {
      return [];
    }
    return data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export async function findById(id) {
  const token = sessionStorage.getItem('token');
  const headers = { headers: { 'Authorization': 'Bearer ' + token } };

  try {
    const { data } = await axios.get(`https://api.joeleprof.com/lets-play/users/${id}`, headers);
    if (!data.success) {
      return [];
    }
    return data.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return [];
  }
}

// export async function deleteById(id) {
//   const token = sessionStorage.getItem('token');
//   const headers = { 'Authorization': 'Bearer ' + token } ;

//   try {
//     const response = await axios.delete(`https://api.joeleprof.com/lets-play/users/${id}`, { headers });
//     const data = response.data;

//     if (data.success) {
//       // La suppression a réussi
//       return true;
//     } else {
//       // La suppression a échoué
//       console.error('Error deleting user by ID:', data.message);
//       return false;
//     }
//   } catch (error) {
//     console.error('Error deleting user by ID:', error);
//     return false;
//   }
// }




export async function createUser(user) {
  const token = sessionStorage.getItem('token');
  const headers = {
    'Authorization': 'Bearer ' + token,
  };

  try {
    const { data } = await axios.post('https://api.joeleprof.com/lets-play/users', user, { headers });
    if (!data.success) {
      return [];
    }
    return data.data;
  } catch (error) {
    console.error('Error creating user:', error);
    return [];
  }
}


export async function deleteById(id) {
  const token = sessionStorage.getItem('token');
  const headers = { 'Authorization': 'Bearer ' + token };


  try {

    const response = await axios.delete(`https://api.joeleprof.com/lets-play/users/${id}`, { headers });
    const data = response.data;

    if (data.success) {
      console.log('Suppression réussie pour l\'ID:', id);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur ID:', id, error); 
    return false;
  }
}



export async function updateById(id, userData) {
  const token = sessionStorage.getItem('token');
  const headers = { 'Authorization': 'Bearer ' + token };
  console.log(userData);
  console.log(id);
  try {
   
    const response = await axios.put(`https://api.joeleprof.com/lets-play/users/${id}`, userData, { headers });
    console.log(response)

    const data = response.data;
    console.log(data)
    if (response.status === 200 && data.success) {

      return data.data;
    } else {

      console.error('Erreur lors de la mise à jour de l\'utilisateur ID:', id, data.message);
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur ID:', id, error);
    return (false);
  }
}




export async function updateScore(id, hasWon) {
  const token = sessionStorage.getItem('token');
  const endpoint = hasWon ? 'wins' : 'lost'; // Choisissez l'endpoint en fonction de la victoire ou de la perte

  const headers = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  try {
    const { data } = await axios.put(`https://api.joeleprof.com/lets-play/game/${endpoint}`, {}, headers);

    if (data.success) {
      return data.score;
    } else {
      console.error(`Échec lors de la mise à jour du score après ${hasWon ? 'gagner' : 'perdre'}`);
      return -1; // Vous pouvez renvoyer une valeur par défaut ou gérer l'erreur d'une autre manière
    }
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du score après ${hasWon ? 'gagner' : 'perdre'}:`, error);
    return -1; // Vous pouvez renvoyer une valeur par défaut ou gérer l'erreur d'une autre manière
  }
}





