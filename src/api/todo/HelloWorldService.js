import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello-world')
        //console.log('executed service')
    }

    executeHelloWorldBeanService() {
        return Axios.get('http://localhost:8080/hello-world-bean')
        //console.log('executed service')
    }

    executeHelloWorldPathVariableService(name) {
        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
        //console.log('executed service')
    }
}

export default new HelloWorldService()