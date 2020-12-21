import React, { Component } from 'react'
import TimeCardService from '../../services/TimeCardService';

class AddTimeCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            timeCardId: this.props.match.params.id,
            date: '',
            hours: '',
            projectId: '',
            projectName:'',
            status:'',
            empId: ''
        }
        this.changeHoursHandler = this.changeHoursHandler.bind(this);
        this.changeProjectIdHandler = this.changeProjectIdHandler.bind(this);
        this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.enterTimeCard = this.enterTimeCard.bind(this);
        
    }

    // step 3
   
    enterTimeCard = (e) => {
        e.preventDefault();
        let timeCard = { date: this.state.date, hours: this.state.hours, projectId: this.state.projectId, projectName: this.state.projectName, empId: this.state.empId};
        console.log('timeCard => ' + JSON.stringify(timeCard));

        // step 5
        
        TimeCardService.enterTimeCard(this.state.empId, timeCard).then(res =>{
            this.props.history.push(`/timecard/${this.state.empId}`);
            console.log(res);
        });
        
    }
    
    changeHoursHandler= (event) => {
        this.setState({hours: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    cancel(){
        this.props.history.push(`/timecard/:id`);
    }

    save(){
        this.props.history.push(`/add-timecard/{timeCardId}`);
    }
    changeProjectIdHandler=(event)=>{
        this.setState({projectId: event.target.value});
    }
    changeProjectNameHandler=(event)=>{
        this.setState({projectName: event.target.value});
    }



    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center" style={{color: "red"}}>Add Time Card Entry</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                    <div className = "form-group">
                                            <label> Project Id: </label>
                                            <input type="projectId" placeholder="Enter Project Id" name="projectId" className="form-control" 
                                                value={this.state.projectId} onChange={this.changeProjectIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Project Name: </label>
                                            <input type="projectName" placeholder="Enter Project Name" name="projectName" className="form-control" 
                                                value={this.state.projectName} onChange={this.changeProjectNameHandler}/>
                                        </div>

                                            <label> Date: </label>
                                            <input type="date" placeholder="Enter date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number of Hours: </label>
                                            <input type="hours" placeholder="Enter Num of Hours" name="hours" className="form-control" 
                                                value={this.state.hours} onChange={this.changeHoursHandler}/>
                                        </div>
                                       
                                        <button className="btn btn-success" onClick={this.enterTimeCard}>Add</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddTimeCardComponent