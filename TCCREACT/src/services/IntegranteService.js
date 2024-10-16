import http from '../common/http-common';
const API_URL = "integrante/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const create = data => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('rm', data.rm)
    formData.append('statusIntegrante', data.statusIntegrante)

    return http.mainInstance.post(API_URL + "create", formData);
};

const update = (id, data) => {
    formData.append('nome', data.nome);

    return http.mainInstance.put(API_URL + `update/${id}`, formData);;
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
}


const IntegranteService = {
    findAll,
    create,
    update,
    inativar,
    
}

export default IntegranteService;