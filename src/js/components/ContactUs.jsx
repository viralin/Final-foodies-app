var React = require('react');
export default class About extends  React.Component{

render()
{
 return(
   <div className="container-fluid">
       <div className="row">
           <div className="col-md-12">
               <div className="jumbotron">
                   <h2>
                       Contact Us
                   </h2>
                   <p>
                   Wipro Limited
Doddakannelli, Sarjapur Road
Bangalore - 560 035
India
                   </p>
                   <p>
                       <a className="btn btn-primary btn-large" href="https://www.wipro.com">Learn more</a>
                   </p>
               </div>
           </div>
       </div>
   </div>
 );
}
}
