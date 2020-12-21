import React, { Component } from 'react'
import ManagerService from '../../services/ManagerService'

class ListManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                managers: []
        }
        this.addManager = this.addManager.bind(this);
        this.editManager = this.editManager.bind(this);
        this.deleteManager = this.deleteManager.bind(this);
    }

    deleteManager(managerId){
        ManagerService.deleteManager(managerId).then( res => {
            this.setState({managers: this.state.managers.filter(manager => manager.managerId !== managerId)});
        });
    }
    viewManager(managerId){
        this.props.history.push(`/profile/${managerId}`);
    }
    editManager(managerId){
        this.props.history.push(`/update-manager/${managerId}`);
    }

    componentDidMount(){
        ManagerService.getAllManager().then((res) => {
            this.setState({ managers: res.data});
        });
        
    }

    addManager(){
        this.props.history.push(`/add-manager/${this.state.managerId}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{color: "red"}}>Managers List</h2>
                <div className = "row">
                <button className="btn btn-primary" onClick={this.addManager}> Add Manager</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead className="thead-dark">
                            <tr>
                            <th> Manager ID</th>
                                <th> Manager Name</th>
                                <th> Manager Contact Number</th>
                                <th> Manager Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.managers.map(
                                    manager => 
                                    <tr key = {manager.managerId}>
                                            <td> {manager.managerId}</td>
                                            <td> {manager.managerName} </td>   
                                            <td> {manager.managerNumber}</td>
                                            <td> {manager.managerEmail}</td>
                                            <td>
                                                <button onClick={ () => this.editManager(manager.managerId)} className="btn btn-info">&#x270E;Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteManager(manager.managerId)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewManger(manager.managerId)} className="btn btn-info">View </button>
                                            </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListManagerComponent