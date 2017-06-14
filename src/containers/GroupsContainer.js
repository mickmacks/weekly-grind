import React, {Component} from 'react'
import { fb } from '../index.js'
import $ from 'jquery-ajax';

import GroupsList from './GroupsList'
import Group from '../components/Group'


class GroupsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			groups: [],
		};



		this.loadGroupsFromServer = this.loadGroupsFromServer.bind(this);
	// 	this.handleNewGroupSubmit = this.handleNewGroupSubmit.bind(this);
	// 	//this.handleGroupSubmit = this.handleGroupSubmit.bind(this);
	// 	// this.handleGroupDelete = this.handleGrouptDelete.bind(this);
	// 	// this.handleGroupUpdate = this.handleGroupUpdate.bind(this);

	}

	loadGroupsFromServer(){

	    const groupsRef = fb.child('groups');

	    groupsRef.on('value', snap => {
	        this.setState({
	          groups: snap.val()
	        })
	    })

	    console.log(this.state.groups)

  	}

	handleNewGroupSubmit(group){

		// group.city = this.props.routeParams.cityId;

		// console.log('reached handleNewGroupSubmit');
		// let groups = this.state.groups;
		// console.log('groups is: ', groups);
		// let newGroup = groups.concat([group]);
		// console.log('newGroup is: ', newGroup)
		// this.setState({groups: newGroup});
		// // use this once groups' data route is confirmed
		// //url: 'http://localhost:3000/api/cities/:cityId/groups'

		// $.ajax({
		// 	method: 'POST',
		// 	url: `http://localhost:3000/api/cities/${this.props.routeParams.cityId}/groups/`,
		// 	data: group
		// })
		// .then(res => {
		// 	console.log('res is: ', res)
		// }, err => {
		// 	console.error(err);
		// 	this.setState({groups: groups});
		// });
	}

	handleGroupDelete(id){
	 //    $.ajax({
	 //      method: 'DELETE',
	 //      url: 'http://localhost:3000/api/cities/:cityId/groups/:groupId'

	//     })
	//     .then((res) => {
	//       console.log('Group deleted');
	//     }, (err) => {
	//       console.error(err);
	//     });
	}

    handleGroupUpdate(id, group) {
    //sends the groups id and new text to our api
    // $.ajax({
    //   method: 'PUT',
    //   url:'http://localhost:3000/api/cities/:cityId/groups/:groupId' ,
    //   data: group
    // })
    // .then(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // })
  }

  componentDidMount() {
    this.loadGroupsFromServer();
    console.log("load groups: this.state.groups is: ", this.state.groups)
  }


	render() {

		return(

			<div className="groups-container-main">	
				<GroupsList
					groups={this.state.groups}
					onGroupDelete={this.handleGroupDelete}
					onGroupUpdate={this.handleGroupUpdate}/>
       		</div>
		)
	}
}

export default GroupsContainer;
