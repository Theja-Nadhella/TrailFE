import React from 'react';
import {updateManager,getManagerById,createManager} from '../../actions/ManagerAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateManager extends React.Component{
    constructor(props){
        super(props);
        this.state={
            managerId:'',
            managerName:'',
            managerEmail:'',
            managerNumber:''
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedManager = {
            managerId:this.state.managerId,
            managerName:this.state.managerName,
            managerEmail:this.state.managerEmail,
            managerNumber:this.state. managerNumber
            
        }

      this.props.createManager(updatedManager,this.props.history);

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
                        <h5 className="display-4 text-center">Update Manager</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Manager Name" 
                                    title="give full name like eg. Aswitha Badveli"
                                    name="managerName" 
                                    onChange={this.onChange}
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
                                    onChange={this.onChange}
                                    value={this.state.managerEmail}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Manager Phone Num" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits as limit"
                                    name="managerNumber" 
                                    onChange={this.onChange}
                                    value={this.state.managerNumber}
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
UpdateManager.propTypes = {
    updateManager:PropTypes.func.isRequired,
    getManagerById:PropTypes.func.isRequired,
    createManager:PropTypes.func.isRequired,
    manager:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    manager: state.managers.manager
  });

export default connect(mapStateToProps,{updateManager,getManagerById,createManager})(UpdateManager);