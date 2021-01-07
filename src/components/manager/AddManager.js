import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createManager} from "../../actions/ManagerAction";
class AddManager extends React.Component{
    constructor(props){
        super(props);
        this.state={
            managerId:this.props.match.params,
            managerName:'',           
            managerEmail:'',
           managerNumber:'',
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
        const newManager = {
           managerName:this.state. managerName,
            managerEmail:this.state. managerEmail,
            managerNumber:this.state. managerNumber
        
        }
        console.log(newManager);
        this.props.createManager(newManager,this.props.history);

    }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Manager</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Manager Full Name" 
                                    name="managerName" 
                                    onChange={this.onChange}
                                    value={this.state.managerName} 
                                    pattern="[a-zA-Z][a-zA-Z ]{2,}"
                                    title="name should be given as @example: Aswitha Badveli"
                                    required/>
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Manager Email" 
                                    name="managerEmail" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. aswitha@gmail.com"
                                    onChange={this.onChange}
                                    value={this.state.managerEmail}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Manager Phone No" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 digits and limit is 10 digits"
                                    name="managerNumber" 
                                    onChange={this.onChange}
                                    value={this.state.managerNumber}
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
AddManager.propTypes = {
    createManager:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createManager})(AddManager);