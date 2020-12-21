import React from 'react';
import timecardnew from "./timecardnew.jpg";
import employee from "./employee.png";
import manager from "./manager.png";
import empty from "./empty.png";
import { Dropdown } from 'react-bootstrap';
const Home = () => {
  return(
    <div className="timecard">
        <div className="home"> 
        
      </div>
      <div align="center" ><h5 >Click on "Select Services" at right-top-corner to access "Employee, Manager and Time Card Entry Services"</h5></div>
                  <img src={empty} alt="Empty" height={200} width={300}  />
                  <img src={employee} alt="EmployeeService" height={200} width={200} image-text={"em"} />
                  <img src={manager} alt="Manager Service" height={150} width={150}  />
                  <img src={timecardnew} alt="Time Card Service" height={200} width={200} position={'left'}  />
                  <div id="p1" align="center"><p>A time card improves project execution, decision-making and compliance with employee and government
          regulations. It is useful as a proof at the time of payroll disribution. A timesheet is a physical or software-based tool used by businesses to give their employees a means to record
        the time they've spent on a task or project.</p></div>

      <div clasName="dropdown">
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Services
          </Dropdown.Toggle>
          <Dropdown.Menu>
              <Dropdown.Item href="http://localhost:3000/employees/:id">Employee Service</Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Manager/:id">Manager Service</Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/timecard/:id">Time Card Entry Service</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </div>
      
       </div>
    
    
  );
};
export default Home;