import React from 'react';
import {getEmployeeById} from '../../actions/EmployeeAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewEmployee extends React.Component{
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
                        <h5 className="display-4 text-center">View Employee Details</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Employee Name" 
                                    title="give full name eg. Theja Nadhella"
                                    name="employeeName" 
                                    value={this.state.employeeName}/>
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
                                    placeholder="Employee Email" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. theja12@gmail.com"
                                    name="employeeEmail" 
                                    value={this.state.employeeEmail}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Role" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="give employee role"
                                    name="employeeRole" 
                                    value={this.state.employeeRole}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Employee Phone No" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits as limits"
                                    name="phoneNumber" 
                                    value={this.state.phoneNumber}
                                    />
                            </div>
                            <Link to="/employeeDashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewEmployee.propTypes = {
    getEmployeeById:PropTypes.func.isRequired,
    employee:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    employee: state.employees.employee
  });

export default connect(mapStateToProps,{getEmployeeById})(ViewEmployee);