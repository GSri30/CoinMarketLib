import { AxiosResponse } from 'axios';
import instance from './axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};

export default requests;