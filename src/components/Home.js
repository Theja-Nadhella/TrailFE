import React from 'react';
import timecardnew from "./timecardnew.jpg";
import employee from "./employee.png";
import manager from "./manager.png";
import empty from "./empty.png";

const Home = () => {
  return(
    <div className="timecard">
        <div className="home"> 
        
      </div>
     
             
             <marquee style={{ color: 'black', fontSize: '2em' }}>Welcome to Time Card Application</marquee>
             <br></br>
             <br></br>
     
      <div align="center"><h5 >Click on "Services" in navigation bar to access "Employee, Manager and Time Card Entry Services"</h5></div>
                  <div id="i1"><img src={empty} alt="Empty" height={200} width={440}  />
                  
                  <img src={employee} alt="EmployeeService" height={200} width={200} text={"em"} />
                  <img src={manager} alt="Manager Service" height={150} width={150}  />
                  <img src={timecardnew} alt="Time Card Service" height={200} width={200} position={'left'}  />
                  </div>
                  <div id="p1" align="center"><p>A time card improves project execution, decision-making and compliance with employee and government
          regulations. It is useful as a proof at the time of payroll disribution. A timesheet is a physical or software-based tool used by businesses to give their employees a means to record
        the time they've spent on a task or project.</p></div>

      
     
       </div>
    
    
  );
};
export default Home;