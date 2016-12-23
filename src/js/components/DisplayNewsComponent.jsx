
import React from 'react';


export default class DisplayNewsComponent extends React.Component{ /*React.Component is the base class for React components when they are defined */

		constructor()
		    {
		      super();

		      this.saveButton=this.saveButton.bind(this);/*binding saveButton to DisplayNewsComponent */
		    }


		 saveButton(){ /*saveButton starts here*/

		            console.log("Inside save");
								console.log(this.props.sentData);
								console.log(this.props.sentData.restaurant);
								console.log(JSON.stringify(this.props.sentData.restaurant));
								var resDataToSave={

								id:this.props.sentData.restaurant.id,
								name:this.props.sentData.restaurant.name,
								thumb:this.props.sentData.restaurant.thumb,
								url:this.props.sentData.restaurant.url,
								cuisines:this.props.sentData.restaurant.cuisines,
								average_cost_for_two:this.props.sentData.restaurant.average_cost_for_two,
								address:this.props.sentData.restaurant.location.address


								}
				    $.ajax({
						     url: "/foodies/adddatatodb",
						     type: 'POST',
						     data: resDataToSave,/*Data to be saved*/
								 dataType:'JSON',
						     success : function(msg){
								 console.log(msg);
						     alert("Your data was saved");

						     }.bind(this),/*binding to DisplayNewsComponent*/

						     error: function(err){

						    }.bind(this) /*binding to DisplayNewsComponent*/

				 }); /*Ajax call function  to  /server/routes/news/save route  ends here*/


		 }  /*saveButton ends here*/


		render(){ /*render() starts here*/

			    console.log("this is the id -------------"+this.props.sentData.restaurant.url);

				return (
						<div>

							   <section className="container" id="container">{/*section container starts here*/}
								               <section className="jumbotron" style={{"margin-top": "10%"}}>{/*jumbotron starts here*/}
								                   <h4>{this.props.sentData.restaurant.name}</h4>
								                   <img src={this.props.sentData.restaurant.thumb} alt="" style={{"width": "250px", "height":"100"}}/>
								                   <h4>{this.props.sentData.restaurant.average_cost_for_two}</h4>
								                   <h4>{this.props.sentData.restaurant.cuisines}</h4>
								                   <h4>{this.props.sentData.restaurant.location.address}</h4>
								                   <a href={this.props.sentData.restaurant.url}>Read More</a>
                                                   <input type="button" value="Save"  onClick={this.saveButton} />{/*will save the displayed news*/}

								               </section>{/*jumbotron ends here*/}


								</section> {/*section container ends here*/}

						 </div>
				 )

		} /*render() ends here*/

}/*DisplayNewsComponent ends here*/
