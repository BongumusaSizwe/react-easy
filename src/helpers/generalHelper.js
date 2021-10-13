import axios from 'axios';
const url = 'https://morning-inlet-67850.herokuapp.com';
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
