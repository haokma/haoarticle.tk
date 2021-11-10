import axiosClient from './axiosClient';

export const articleApi = {
  getList: () => {
    return axiosClient.get('/article');
  },
};
