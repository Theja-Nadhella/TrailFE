import React from 'react';
import {getTimeCardById} from '../../actions/TimecardAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewTimecard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            timeCardId: this.props.match.params, 
            date:'',
            projectId:'',
            projectName:'',
            hours:'',
            status:"Pending"
        }
    }
    componentDidMount(){
        const {timeCardId} = this.props.match.params;
        this.props.getTimeCardById(timeCardId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            timeCardId,
            date,
            hours,
            projectName,
            projectId,
            status                   
         }=nextProps.timecard;
 
         this.setState({
            timeCardId,
            date,
            hours,
            projectName,
            projectId,
            status  
                        
         });
     }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">View Time Card Details</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Date" 
                                    
                                    name="date" 
                                    value={this.state.date}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="hours" 
                                    className="form-control form-control-lg" 
                                    placeholder="Enter Num of Hours" 
                                    pattern="[1-9]{1}"
                                    title="Hours range must be between 01 and 09"
                                    name="hours" 
                                  
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
                                   
                                    value={this.state.projectId}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Project Name" 
                                    name="projectName"                                                                        
                                    
                                    value={this.state.projectName}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Status" 
                                    name="status"                                                                        
                                   
                                    value={this.state.status}
                                    required/>
                            </div>
                            <Link to="/timecardDashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewTimecard.propTypes = {
    getTimeCardById:PropTypes.func.isRequired,
    timecard:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    timecard: state.timecards.timecard
  });

export default connect(mapStateToProps,{getTimeCardById})(ViewTimecard);