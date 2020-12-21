import React, { Component } from 'react'
import ManagerService from '../../services/ManagerService';

class UpdateManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            managerId: this.props.match.params.id,
            managerName: '',
            managerNumber: '',
            managerEmail: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
    }

    componentDidMount(){
        ManagerService.getManagerById(this.state.id).then( (res) =>{
            let manager = res.data;
            this.setState({managerName: manager.managerName,
                managerEmail :manager.managerEmail,
                managerNumber: manager.managerNumber
            });
        });
    }

    updateManager = (e) => {
        e.preventDefault();
        let manager = {managerName: this.state.managerName,managerNumber: this.state.managerNumber,  managerEmail: this.state.managerEmail};
        console.log('manager => ' + JSON.stringify(manager));
        console.log('id => ' + JSON.stringify(this.state.managerId));
        ManagerService.updateManager(manager, this.state.managerId).then( res => {
            this.props.history.push('/Manager');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({managerName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({ managerEmail: event.target.value});
    }

    cancel(){
        this.props.history.push(`/Manager/${this.state.id}`);
    }

    changePhoneNoHandler= (event) => {
        this.setState({managerNumber: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center" style={{color: "red"}}>Update Manager</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Full Name" name="managerName" className="form-control" 
                                                value={this.state.managerName} onChange={this.changeNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="managerEmail" className="form-control" 
                                                value={this.state.managerEmail} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input type="number" minLength="10" maxLength="10" placeholder="Phone Number" name="managerNumber" className="form-control" 
                                                value={this.state.managerNumber} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateManager}>&#x2713;Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>&#x2716;Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default UpdateManagerComponent