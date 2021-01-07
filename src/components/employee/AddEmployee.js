import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createEmployee} from "../../actions/EmployeeAction";
class AddEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employeeName:'',
            employeeId:'',
           employeeRole:'', 
            employeeEmail:'',
           phoneNumber:'',
           managerId:this.props.match.params,
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
        const newEmployee = {
            employeeName:this.state.employeeName,
            employeeId:this.state.employeeId,
            employeeRole:this.state.employeeRole,
            employeeEmail:this.state.employeeEmail,
            phoneNumber:this.state.phoneNumber,
            managerId:this.props.match.params
        }
        console.log(newEmployee);
        console.log(newEmployee.managerId)
        this.props.createEmployee(newEmployee.managerId,newEmployee,this.props.history);

    }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Employee</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Employee Full Name" 
                                    name="employeeName" 
                                    onChange={this.onChange}
                                    value={this.state.employeeName} 
                                    pattern="[a-zA-Z][a-zA-Z ]{2,}"
                                    title="name should be given as @example: Theja Nadhella"
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Id" 
                                    pattern="[1-9]{1}[0-9]{3,5}"
                                    title="Id must range in between 4 and 6"
                                    name="employeeId" 
                                    onChange={this.onChange}
                                    value={this.state.employeeId}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Role" 
                                    name="employeeRole" 
                                    onChange={this.onChange}
                                    value={this.state.employeeRole}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Email" 
                                    name="employeeEmail" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. theja@gmail.com"
                                    onChange={this.onChange}
                                    value={this.state.employeeEmail}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Phone No" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 digits and limit is 10 digits"
                                    name="phoneNumber" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    required/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
AddEmployee.propTypes = {
    createEmployee:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createEmployee})(AddEmployee);