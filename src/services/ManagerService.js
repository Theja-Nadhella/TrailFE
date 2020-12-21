import axios from 'axios';

const MANAGER_API_BASE_URL = "http://localhost:8081/api/v2/Manager";

class ManagerService {

   
    createManager(manager){
        return axios.post(MANAGER_API_BASE_URL + '/CreateManager/' + 2 , manager);
    }
    updateManager(managerId, managerDetails){
        return axios.put(MANAGER_API_BASE_URL + '/' + managerId, managerDetails);
    }
    deleteManager(managerId){
        return axios.delete(MANAGER_API_BASE_URL + '/deleteManager/' + managerId);
    }
    getAllManager(){
        return axios.get(MANAGER_API_BASE_URL+"/all");
    }
}
export default new ManagerService()