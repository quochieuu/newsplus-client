const apiConfig = {
    baseUrl: 'https://localhost:7121/api/',
    w500Image: (imgPath) => `https://localhost:7121/news/images/${imgPath}`,
    endpoint: 'https://localhost:7121' 
}

export default apiConfig;