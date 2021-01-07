import React from 'react';
import CreateManagerButton from './CreateManagerButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getAllManager}from "../../actions/ManagerAction";
import {deleteManager} from '../../actions/ManagerAction';
import {Link} from 'react-router-dom';

class ManagerDashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            managers:[]
        }
    }
    onDeleteClick=(managerId)=>{
        console.log('--------ManagerComponent:onDeleteClick Called--------')
        this.props.deleteManager(managerId);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getAllManager();
    }

    render(){
        const {managers} =  this.props.managers;
        const {manager}=this.props;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
               <h1 className="display-4 text-center"> List of Managers</h1>
               <br/>
               <CreateManagerButton/>
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
                                   
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                console.log(managers),
                                    managers.map(
                                        (manager) => 
                                        <tr key = {manager.managerId}>
                                            <td>{manager.managerId}</td>
                                             <td> {manager.managerName} </td>   
                                           
                                             <td> {manager.managerEmail}</td>
                                             <td> {manager.managerNumber}</td>
                                             
                                             <td>
                                                 <Link to={"/updateManager/"+manager.managerId} className="btn btn-info"> Update </Link>
                                                 <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this,manager.managerId)}>Delete </button>
                                                 <Link to={"/viewManager/"+manager.managerId} className="btn btn-info" >View </Link>
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

ManagerDashBoard.propTypes={
    getAllManager:PropTypes.func.isRequired,
    deleteManager:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    managers:state.managers
});
export default connect(mapStateToProps,{getAllManager,deleteManager})(ManagerDashBoard);