import axios from 'axios';

export const getPosts = async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/posts`, {
            params: params,
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
