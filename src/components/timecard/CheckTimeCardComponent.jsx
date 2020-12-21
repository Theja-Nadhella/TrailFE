import React, { Component } from 'react'
import TimeCardService from '../../services/TimeCardService'

class CheckTimeCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timeCardId: this.props.match.params.id,
            timecard: {},
            empId:''

        }
    }
 
    componentDidMount(){
        TimeCardService.getTimeCardById(this.state.timeCardId).then( res => {
            this.setState({timecard: res.data});
            this.setState({empId:this.state.timecard.employee.employeeId});
        })
    }

    cancel(){
        this.props.history.push(`/timecard/${this.state.empId}`);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Time Card Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Number of Working Hours: </label>
                            <div> { this.state.timecard.hours}</div>
                        </div>
                        <div className = "row">
                            <label> TimeCard Entry Date: </label>
                            <div> { this.state.timecard.date }</div>
                        </div>
                        <div className = "row">
                            <label> Project Id: </label>
                            <div> { this.state.timecard.projectId }</div>
                        </div>
                        <div className = "row">
                            <label> Project Name: </label>
                            <div> { this.state.timecard.projectName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.empId }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default CheckTimeCardComponent