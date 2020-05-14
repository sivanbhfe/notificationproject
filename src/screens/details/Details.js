import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import "./Details.css"


class Details extends Component {
	constructor() {
		super();
		this.state = {
		title:"",
		platform:"",
		jiraticket:"",
		htmlData:[]
		}
	//	this.seePreview = this.seePreview.bind(this);
	}
	
	titleUpdate = (e)=> {
		this.setState({ title: e.target.value })
	}
	platformUpdate = (e)=> {
		this.setState({ platform: e.target.value })
	}
	jiraticketupdate = (e)=> {
		this.setState({ jiraticket: e.target.value })
	}
	seePreview=()=>{	
		alert("test");	
		
		let previewdata = JSON.stringify({
			"title": this.state.title});
			let that = this;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (this.readyState === 4 && this.status === 200) {
				// Typical action to be performed when the document is ready:
				alert(xhr.responseText);
				that.setState ({htmlData: xhr.responseText});
			 }
		};
		
		xhr.open("POST", "http://localhost:8080/users");
		xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
		xhr.send(previewdata);
	}
	render() {
		
		return (
			<div>
				<form>
				<FormControl >
					<InputLabel  htmlFor="title">Title</InputLabel>
					<Input className="inputtitle" onChange={this.titleUpdate} style={{Width:"100%"}} id="title" />
				</FormControl><br/>
				<FormControl  >
					<InputLabel htmlFor="platform">Platform</InputLabel>
					<Input className="inputtitle" onChange={this.platformUpdate} id="platform" />
				</FormControl>
				<FormControl  >
					<InputLabel htmlFor="jiraticket">JIRA</InputLabel>
					<Input className="jiraticket" onChange={this.jiraticketupdate} id="platform" />
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="status">Status</InputLabel>
					<Input
						id="status"
						value=""
					/>
				</FormControl>
				<FormControl >
					<InputLabel htmlFor="incident-manager">Incident Manager</InputLabel>
					<Input id="incident-manager" value="" />
				</FormControl><br/><br/>
				<Button onClick={this.seePreview} style={{ fontWeight:"bold", fontSize: "100%", height:"50px" }} variant="contained" color="default" >
					Create Preview</Button>
					</form>
					<div>
					<div dangerouslySetInnerHTML={{ __html: this.state.htmlData }} />
						<table border="1">
						<colgroup>
    <col style={{width:"250px"}}/>
    <col style={{width:"600px"}}/>
  </colgroup><tbody>
		<tr id="tabletitle"><td colSpan="2">{this.state.title}</td></tr>
	<tr id="tableticket"><td colSpan="2"><span>Ticket information:</span><span>JIRA: {this.state.jiraticket}</span></td></tr>
		<tr  ><td className="rowname" >Platform</td><td>{this.state.platform}</td></tr>
		</tbody>
						</table>
					</div>
			</div>);

	}
}
export default Details;