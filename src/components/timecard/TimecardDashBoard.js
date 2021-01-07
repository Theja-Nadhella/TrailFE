import React from 'react';
import CreateTimeCardButton from './CreateTimeCardButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getAllEntries}from "../../actions/TimecardAction";
import {deleteTimeCard} from '../../actions/TimecardAction';
import {Link} from 'react-router-dom';

class TimecardDashBoard extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            timecards:[]
        }
    }
    onDeleteClick=(timeCardId)=>{
        console.log('--------TimeCardComponent:onDeleteClick Called--------')
        this.props.deleteTimeCard(timeCardId);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getAllEntries();
    }

    render(){
        const {timecards} = this.props.timecards;
        const {timecard}=this.props;
        return(
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-12">
               <h1 className="display-4 text-center">List of Entries</h1>
               <br/>
               <CreateTimeCardButton/>
               <br/>
               <hr/>
               <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                <th>Time Card Id</th>
                                    <th>Date</th>
                                    <th>Hours</th>
                                    <th>Project ID</th>
                                    <th>Project Name</th>
                                   <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                console.log(timecards),
                                timecards.map(
                                        (timecard) => 
                                        <tr key = {timecard.employeeId}>
                                            <td>{timecard.timeCardId}</td>
                                             <td> {timecard.date} </td>   
                                           
                                             <td> {timecard.hours}</td>
                                             <td> {timecard.projectId}</td>
                                             <td> {timecard.projectName}</td>
                                             <td> {timecard.status}</td>
                                             
                                             <td>
                                                
                                                
                                                 <Link to={"/viewTimecard/"+timecard.timeCardId} className="btn btn-info" >View </Link>
                                                 <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this,timecard.timeCardId)}>Delete </button>
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

TimecardDashBoard.propTypes={
    getAllEntries:PropTypes.func.isRequired,
    deleteTimeCard:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    timecards:state.timecards
});
export default connect(mapStateToProps,{getAllEntries,deleteTimeCard})(TimecardDashBoard);