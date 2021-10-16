import axios from 'axios';
const url = 'https://92b3-105-245-110-66.ngrok.io';
const axiosConfig = {
	withCredentials: true,
};

export const getAxiosInstance = () => {
	return axios.create({ baseURL: url });
};

export const getTotal = async (data) => {
	const resp = await getAxiosInstance().post(`${url}${'/api/getTotal'}`, data, axiosConfig);
	return resp;
};
