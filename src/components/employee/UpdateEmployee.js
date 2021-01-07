import React from 'react';
import {getEmployeeById,updateEmployee} from '../../actions/EmployeeAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employeeId:'',
            employeeName:'',
            employeeEmail:'',
            employeeRole:'',
            phoneNumber:''
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedEmployee = {
            employeeId:this.state.employeeId,
            employeeName:this.state.employeeName,
            employeeEmail:this.state.employeeEmail,
            employeeRole:this.state.employeeRole,
            phoneNumber:this.state. phoneNumber      
        }

      this.props.updateEmployee(updatedEmployee,this.props.history);

    }
    componentDidMount(){
        const {employeeId} = this.props.match.params;
        this.props.getEmployeeById(employeeId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            employeeId,
            employeeName,
            employeeEmail,
            employeeRole,
             phoneNumber
                      
         }=nextProps.employee;
 
         this.setState({
            
            employeeId,
            employeeName,
            employeeEmail,
            employeeRole,
             phoneNumber
         });
     }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Employee</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
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
                                   />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Employee Name" 
                                    title="give full name like eg. Theja Nadhella"
                                    name="employeeName" 
                                    onChange={this.onChange}
                                    value={this.state.employeeName}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Employee Role" 
                                    title="give role of the employee"
                                    name="employeeRole" 
                                    onChange={this.onChange}
                                    value={this.state.employeeRole}/>
                            </div>
                           
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Email" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. theja12@gmail.com"
                                    name="employeeEmail" 
                                    onChange={this.onChange}
                                    value={this.state.employeeEmail}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Phone Num" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits as limit"
                                    name="phoneNumber" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    />
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
UpdateEmployee.propTypes = {
    getEmployeeById:PropTypes.func.isRequired,
    updateEmployee:PropTypes.func.isRequired,
    employee:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    employee: state.employees.employee
  });

export default connect(mapStateToProps,{getEmployeeById,updateEmployee})(UpdateEmployee);