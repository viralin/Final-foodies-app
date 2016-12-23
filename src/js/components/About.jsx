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
                       About Us
                   </h2>
                   <p>
                   Wipro is globally recognized for its innovative approach towards delivering business value and its commitment to sustainability. Wipro champions optimized utilization of natural resources, capital and talent. Today we are a trusted partner of choice for global businesses looking to ‘differentiate at the front’ and ‘standardize at the core’ through technology interventions.
In today’s world, organizations will have to rapidly reengineer themselves and be more responsive to changing customer needs. Wipro is well positioned to be a partner and co-innovator to businesses in their transformation journey, identify new growth opportunities and facilitate their foray into new sectors and markets.
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
