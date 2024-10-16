import http from '../common/http-common';
const API_URL = "projeto/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const findByUsuario = (id) => {
    return http.mainInstance.get(API_URL + `findByUsuario/${id}`);
};


const signup = (nome, email, password) => {
    return http.mainInstance.post(API_URL + "signup", {
        nome,
        email,
        password,
    });
};

const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const create = (file, data, email) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('nome', data.nome);
    formData.append('link_Sistema', data.link_Sistema)
    formData.append('descricao', data.descricao);
    formData.append('documentacao', data.documentacao);

    return http.multipartInstance.post(API_URL + `create/${email}`, formData);
};
const createSemND = (data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('descricao', data.descricao);
    formData.append('descricao', data.descricao);

    return http.mainInstance.post(API_URL + "createste", formData);
};

const update = (id, data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('link_Sistema', data.link_sistema);
    formData.append('descricao', data.descricao)
    return http.mainInstance.put(API_URL + `update/${id}`, data);
};

const alterarSenha = (id, data) => {
    const formData = new FormData();
    formData.append('senha', data.senha);
 
    return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const findByNome = nome => {
    return http.mainInstance.get(API_URL + `findByNome?nome=${nome}`);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
}

const reativar = (id) => {
    return http.mainInstance.put(`${API_URL}reativar/${id}`);
}

const ProjetoService = {
    findAll,
    findById,
    findByUsuario,
    signup,
    signin,
    logout,
    getCurrentUser,
    create,
    createSemND,
    update,
    alterarSenha,
    findByNome,
    inativar,
    reativar,
}

export default ProjetoService;