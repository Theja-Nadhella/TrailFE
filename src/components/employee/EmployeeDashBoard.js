import React from 'react';
import CreateEmployeeButton from './CreateEmployeeButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getAllEmployee}from "../../actions/EmployeeAction";
import {deleteEmployeeById} from '../../actions/EmployeeAction';
import {Link} from 'react-router-dom';

class EmployeeDashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees:[]
        }
    }
    onDeleteClick=(employeeId)=>{
        console.log('--------EmployeeComponent:onDeleteClick Called--------')
        this.props.deleteEmployeeById(employeeId);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getAllEmployee();
    }

    render(){
        const {employees} =  this.props.employees;
        const {employee}=this.props;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
               <h1 className="display-4 text-center">List of Employees</h1>
               <br/>
               <CreateEmployeeButton/>
               <br/>
               <hr/>
               <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                console.log(employees),
                                    employees.map(
                                        (employee) => 
                                        <tr key = {employee.managerId}>
                                            <td>{employee.employeeId}</td>
                                             <td> {employee.employeeName} </td>   
                                           
                                             <td> {employee.employeeEmail}</td>
                                             <td> {employee.phoneNumber}</td>
                                             <td> {employee.employeeRole}</td>
                                             
                                             <td>
                                                 <Link to={"/updateEmployee/"+employee.employeeId} className="btn btn-info"> Update </Link>
                                                 <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this,employee.employeeId)}>Delete </button>
                                                 <Link to={"/viewEmployee/"+employee.employeeId} className="btn btn-info" >View </Link>
                                             </td>
                                             </tr>
                                      
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div></div></div>
            </div>
        );
    }
}

EmployeeDashBoard.propTypes={
    getAllEmployee:PropTypes.func.isRequired,
    deleteEmployeeById:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    employees:state.employees
});
export default connect(mapStateToProps,{getAllEmployee,deleteEmployeeById})(EmployeeDashBoard);