import React  from 'react';
import {Link} from 'react-router-dom';
const CreateTimeCardButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addTimecard" className="btn btn-lg btn-info">
                Add New TimeCard
            </Link>
        </React.Fragment>        
    );
}

export default CreateTimeCardButton;