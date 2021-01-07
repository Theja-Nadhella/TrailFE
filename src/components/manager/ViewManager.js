import React from 'react';
import {getManagerById} from '../../actions/ManagerAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';
import {Link} from 'react-router-dom';
class ViewManager extends React.Component{
    constructor(props){
        super(props);
        this.state={
            managerId:this.props.match.params,
            managerName:'',
            managerEmail:'',
            managerNumber:''
        }
    }
    componentDidMount(){
        const {managerId} = this.props.match.params;
        this.props.getManagerById(managerId,this.props.history);
 
     }
     componentWillReceiveProps(nextProps){
         const {
            managerId,
             managerName,
             managerEmail,
             managerNumber
                       
         }=nextProps.manager;
 
         this.setState({
            managerId,
            managerName,
            managerEmail,
            managerNumber
                        
         });
     }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">View Manager Details</h5>
                        <hr />
                        <form>
                        
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Manager Name" 
                                    title="give full name eg. Aswitha Badveli"
                                    name="managerName" 
                                    value={this.state.managerName}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Manager Email" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. aswitha@gmail.com"
                                    name="managerEmail" 
                                    value={this.state.managerEmail}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Manager Phone No" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits as limits"
                                    name="managerNumber" 
                                    value={this.state.managerNumber}
                                    />
                            </div>
                            <Link to="/managerDashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewManager.propTypes = {
    getManagerById:PropTypes.func.isRequired,
    manager:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    manager: state.managers.manager
  });

export default connect(mapStateToProps,{getManagerById})(ViewManager);