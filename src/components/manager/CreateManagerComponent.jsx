import React, { Component } from 'react'
import ManagerService from '../../services/ManagerService';

class CreateManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            managerId: this.props.match.params.managerId,
            managerName: '',
            managerEmail: '',
            managerNumber:''
        }
        this.changeManagerNameHandler = this.changeManagerNameHandler.bind(this);
        this.changeManagerNumHandler = this.changeManagerNumHandler.bind(this);
        this.changeManagerEmailHandler = this.changeManagerEmailHandler.bind(this);
        this.saveManager = this.saveManager.bind(this);
    }

    saveManager = (e) => {
        e.preventDefault();
        let manager = {managerName: this.state.managerName, managerEmail: this.state.managerEmail, managerNumber: this.state.managerNumber};
        console.log('manager => ' + JSON.stringify(manager));

        // step 5
        ManagerService.createManager(manager).then(res =>{
            this.props.history.push(`/Manager/${this.state.managerId}`);
        });
        
    }
    
    changeManagerNumHandler= (event) => {
        this.setState({managerNumber: event.target.value});
    }

    changeManagerNameHandler= (event) => {
        this.setState({managerName: event.target.value});
    }

    changeManagerEmailHandler= (event) => {
        this.setState({managerEmail: event.target.value});
    }
    save(){
        
        this.props.history.push(`/add-manager/api/v2/Manager/CreateManager`);
    }
    cancel(){
        this.props.history.push(`/Manager/:id`);
    }

    getTitle(){
        return <h3 className="text-center" style={{color: "red"}}>Add Manager</h3>
    }
    render() {
        return (
            <div>
                <br/>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Full Name" name="managerName" className="form-control" 
                                            value={this.state.managerName} onChange={this.changeManagerNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input type="email" placeholder="Email Address" name="managerEmail" className="form-control" 
                                            value={this.state.managerEmail} onChange={this.changeManagerEmailHandler} required={true}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Phone Number: </label>
                                        <input type="number" minLength="10" maxLength="10" placeholder="Phone Number" name="managerNumber" className="form-control" 
                                            value={this.state.managerNumber} onChange={this.changeManagerNumHandler} required={true}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveManager}>&#x2713;Save</button>
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

export default CreateManagerComponent