import React  from 'react';
import {Link} from 'react-router-dom';
const CreateManagerButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addManager" className="btn btn-lg btn-info">
                Add New Manager
            </Link>
        </React.Fragment>        
    );
}

export default CreateManagerButton;