
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBarComponent from './SearchBarComponent.jsx';
import ManagerComponent from './ManagerComponent.jsx';

export default class HomeComponent extends React.Component{ /*React.Component is the base class for React components when they are defined */
		constructor(){

			super();
			this.state={zomatoData:[]};/*Initializing the state Msg to type array */
			this.fetchCityFromExternalAPI=this.fetchCityFromExternalAPI.bind(this);/*Binding fetchNewsFromExternalAPI to HomeComponent */
			this.fetchResturantsFromExternalAPI=this.fetchResturantsFromExternalAPI.bind(this);

		}


         fetchResturantsFromExternalAPI(cuisines,city_id){

          $.ajax({/*Ajax call function  to  newsapi.org  starts here*/

						     url: "https://developers.zomato.com/api/v2.1/search?entity_id="+city_id+"&entity_type=city&q="+cuisines+"&count=10&apikey=733853dc596a64a684e5b2bcd8a74d2b",
						     /*url variable obtained from search box apended to api's url*/

						     type: "GET",

						     dataType: 'JSON',

						     success : function(zomatoResponse){

                             console.log("Response from API",zomatoResponse);
                             this.setState({zomatoData:zomatoResponse.restaurants});


						        /*msg reprewsents JSON data of news headlines sent back by external API*/
                                 //console.log("msg is "+msg);
						         //this.setState({Msg:msg.articles})/*Updating state value*/

						     }.bind(this),/*binding the function to the HomeComponent*/

						     error: function(err){

						    }.bind(this)  /*binding the function to the HomeComponent*/

				 });


         }



		fetchCityFromExternalAPI(city,cuisines) {/*fetchNewsFromExternalAPI starts here*/

			console.log("city "+city+"cuisines "+cuisines);

				    $.ajax({/*Ajax call function  to  newsapi.org  starts here*/

						     url: "https://developers.zomato.com/api/v2.1/cities?q="+city+"&apikey=733853dc596a64a684e5b2bcd8a74d2b",
						     /*url variable obtained from search box apended to api's url*/

						     type: "GET",

						     dataType: 'JSON',

						     success : function(msg){


						     	var city_id=msg.location_suggestions[0].id;
						     	console.log("City Id is "+city_id);
                                this.fetchResturantsFromExternalAPI(cuisines,city_id);

						        /*msg reprewsents JSON data of news headlines sent back by external API*/
                                 //console.log("msg is "+msg);
						         //this.setState({Msg:msg.articles})/*Updating state value*/

						     }.bind(this),/*binding the function to the HomeComponent*/

						     error: function(err){

						    }.bind(this)  /*binding the function to the HomeComponent*/

				 });

		}

		render(){/*render function starts here*/

			return (

					<div>

						 <SearchBarComponent ajaxUri={this.fetchCityFromExternalAPI}/>{/*Passing  fetchNewsFromExternalAPI to SearchBarComponent */}
						 <ManagerComponent zomatoRes={this.state.zomatoData} />{/*Passing  Msg to ManagerComponent */}


					</div>

		        )

		}/*render function starts here*/




}
