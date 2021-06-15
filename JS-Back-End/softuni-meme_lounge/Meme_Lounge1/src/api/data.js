import * as api from './api.js';

const host = 'http://localhost:5000/api';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getMemes () {
   return await api.get(host + '/memes');
}
 
export async function getMemeById (id) {
    return await api.get(host + '/memes/' + id);
}

export async function getMemesByOwnerId (userId) {
    return await api.get(host + `/memes/owner/` + userId);
}


export async function createMeme (title, description, imageUrl) {
    let result = await api.post(host + '/memes', {title, description, imageUrl});
    console.log(result);
    return result;
}

export async function editMeme (id, title, description, imageUrl) {
    return await api.put(host + '/memes/' + id, {title, description, imageUrl});
}

export async function  deleteMeme (id) {
    return await api.del(host + '/memes/' + id);
}


