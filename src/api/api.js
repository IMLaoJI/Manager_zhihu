import axios from 'axios';

let base = '/api/admin';
let base1 = '/api/user';
let base2 = '';
export const requestLogin = (params) => {
    console.log(params);
    return axios.post(`${base}/CheckAdmin`, params);
};
export const mockrequestLogin = (params) => {
    console.log(params);
    return axios.post('/login', params);
};

export const getUserList = params => { return axios.get(`${base2}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base2}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base2}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base2}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base2}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base2}/user/add`, { params: params }); };