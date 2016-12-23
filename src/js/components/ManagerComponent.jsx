
import React from 'react';
import DisplayNewsComponent from './DisplayNewsComponent.jsx';


export default class ManagerComponent extends React.Component{ /*React.Component is the base class for React components when they are defined */

		constructor()
		    {
		      super();

		    }

		render(){
				  var newData=this.props.zomatoRes.map(function(obj, index){ {/*Iterating and sending data to DisplayNewsComponent to display it*/}
           console.log("Inside Map", index);
				  return  <DisplayNewsComponent key={index}  sentData={obj} />
				  });

				return (
					<div>{newData}</div>
				)
		}
}
