import axios from 'axios';

const url = 'https://api.joeleprof.com/lets-play';

export async function login(email, password) {
  const body = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axios.post(`${url}/auth/login`, body);
    console.log(data);
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('isAdmin', data.isAdmin);
    return true;
  } catch (error) {
    return false;
  }
}

export async function register(username, email, password) {
  const body = {
    username: username,
    email: email,
    password: password,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(`${url}/auth/register`, body, config);
    const data = response.data;
    console.log(data);

    if (data.success) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('isAdmin', data.isAdmin);
      return true;
    } else {
      console.error("Erreur lors de l'inscription :", data.message);
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la requête axios :", error);
    return false;
  }
}

export async function resetScore(token) {
  const headers = {
      headers: {
          'Authorization': 'Bearer ' + token,
      },
  };

  try {
      const response = await axios.put('https://api.joeleprof.com/lets-play/me/reset-score', null, headers);
      return response.data.success;
  } catch (error) {
      console.error('Erreur lors de la réinitialisation du pointage :', error);
      return false;
  }
}


export function getToken() {
  return sessionStorage.getItem('token');
}

