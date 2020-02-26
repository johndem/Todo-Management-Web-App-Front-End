import Axios from 'axios'
import {API_URL, JPA_API_URL} from '../../Constants'

class TodoDataService {
    retrieveAllTodos(name) {
        return Axios.get(`${JPA_API_URL}/users/${name}/todos`);
        //console.log('executed service')
    }

    retrieveTodo(name, id) {
        return Axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //console.log('executed service')
    }

    deleteTodo(name, id) {
        return Axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //console.log('executed service')
    }

    updateTodo(name, id, todo) {
        return Axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
        //console.log('executed service')
    }

    createTodo(name, todo) {
        return Axios.post(`${JPA_API_URL}/users/${name}/todos`, todo);
        //console.log('executed service')
    }
}

export default new TodoDataService()