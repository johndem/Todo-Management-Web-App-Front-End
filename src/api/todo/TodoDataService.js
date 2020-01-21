import Axios from "axios"

class TodoDataService {
    retrieveAllTodos(name) {
        return Axios.get(`http://localhost:8080/users/${name}/todos`);
        //console.log('executed service')
    }

    retrieveTodo(name, id) {
        return Axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
        //console.log('executed service')
    }

    deleteTodo(name, id) {
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
        //console.log('executed service')
    }

    updateTodo(name, id, todo) {
        return Axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
        //console.log('executed service')
    }

    createTodo(name, todo) {
        return Axios.post(`http://localhost:8080/users/${name}/todos`, todo);
        //console.log('executed service')
    }
}

export default new TodoDataService()