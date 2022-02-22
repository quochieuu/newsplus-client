import axiosClient from "./axiosClient";

const newsPlusApi = {
    getNewsList: (params) => {
        const url = 'news';
        return axiosClient.get(url, params);
    },
    detail: (slug, params) => {
        const url = 'news/detail/' + slug;
        return axiosClient.get(url, params);
    },
    getCategories: (params) => {
        const url = 'category';
        return axiosClient.get(url, params);
    },
    createCategory: (obj) => {
        const url = 'category/create';
        return axiosClient.post(url, obj);
    },
}

export default newsPlusApi;