const api = (baseUrl:string) => {



    const getUnits =  async () => fetch(baseUrl + '/units').then(x=>x.json())


    return {
        getUnits
    }
}


export default api;
