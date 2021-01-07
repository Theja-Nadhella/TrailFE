import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createTimeCard} from "../../actions/TimecardAction";
class AddTimecard extends React.Component{
    constructor(props){
        super(props);
        this.state={
    timeCardId: this.props.match.params, 
    date:'',
    projectId:'',
    projectName:'',
    hours:'',
    status:"Pending",
    employeeId:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const newTimecard = {
            date:this.state.date,
            hours:this.state.hours,
            projectId:this.state.projectId,
            projectName:this.state.projectName,
            status:this.state.status,
            employeeId:this.state.employeeId,
            timeCardId:this.props.match.params
            
        }
        console.log(newTimecard);
        console.log(newTimecard.timeCardId)
        this.props.createTimeCard(newTimecard.employeeId,newTimecard,this.props.history);

    }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Time Card</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg " 
                                    placeholder="Entry Date" 
                                    name="date"                                   
                                    onChange={this.onChange}
                                    value={this.state.date} 
                                   // pattern="[a-zA-Z][a-zA-Z ]{2,}"
                                   // title="name should be given as @example: Theja Nadhella"
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="hours" 
                                    className="form-control form-control-lg" 
                                    placeholder="Enter Num of Hours" 
                                    pattern="[1-9]{1}"
                                    title="Hours range must be between 01 and 09"
                                    name="hours" 
                                    onChange={this.onChange}
                                    value={this.state.hours}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Projet ID" 
                                    name="projectId"
                                    pattern="[1-9]{1}[0-9]{3,5}"
                                    title="Id must range in between 4 and 6" 
                                    onChange={this.onChange}
                                    value={this.state.projectId}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Project Name" 
                                    name="projectName"                                                                        
                                    onChange={this.onChange}
                                    value={this.state.projectName}
                                    required/>
                            </div>
                            {/* <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Status" 
                                   
                                    name="status" 
                                    onChange={this.onChange}
                                    value={this.state.status}
                                    required/>
                            </div> */}
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
AddTimecard.propTypes = {
    createTimeCard:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createTimeCard})(AddTimecard);