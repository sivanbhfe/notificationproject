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
		snticket:"",
		webstarticket:"",
		status:"",
		htmlData:[],
		timewindow:"",
		summary:"",
		incidentmanageremail:"",
		incidentmanager:""
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
	snticketupdate = (e)=> {
		this.setState({ snticket: e.target.value })
	}
	webstarticketupdate = (e)=> {
		this.setState({ webstarticket: e.target.value })
	}

	statusupdate = (e)=> {
		this.setState({ status: e.target.value })
	}

	incidentmanagerupdate = (e)=> {
		this.setState({ incidentmanager: e.target.value })
	}

	incidentmanageremailupdate = (e)=> {
		this.setState({ incidentmanageremail: e.target.value })
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
				</FormControl><br/>
				<FormControl  >
					<InputLabel htmlFor="jiraticket">JIRA</InputLabel>
					<Input className="inputfields" onChange={this.jiraticketupdate} id="jiraticket" />
				</FormControl>
				<FormControl  >
					<InputLabel htmlFor="snticket">ServiceNow</InputLabel>
					<Input className="inputfields" onChange={this.snticketupdate} id="snticket" />
				</FormControl>
				<FormControl  >
					<InputLabel htmlFor="webstartikcet">Webstar</InputLabel>
					<Input className="inputfields" onChange={this.webstarticketupdate}  id="webstartikcet" />
				</FormControl>
				<FormControl>
					<InputLabel  htmlFor="status">Status</InputLabel>
					<Input className="inputfields" id="status" onChange={this.statusupdate}	
					/>
				</FormControl>
				<FormControl >
					<InputLabel htmlFor="incident-manager-name">Incident Manager</InputLabel>
					<Input className="inputfields" id="incident-manager-name"  onChange={this.incidentmanagerupdate}/>
					</FormControl><br/><br/>
					<FormControl >
					<InputLabel htmlFor="incident-manager-email" >Incident Manager Email</InputLabel>
					<Input className="inputfields" id="incident-manager-email" onChange={this.incidentmanageremailupdate}  />
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
		<tr id="tabletitle" style={{fontSize: "50px", fontFamily: "calibri", color:"rgb(102, 148, 102)", 
			textAlign: "center", height: "100px"}}>
				<td colSpan="2">{this.state.title}</td>
				</tr>
	<tr id="tableticket">
		<td colSpan="2"><span>Ticket information: </span>
		<span>{this.state.jiraticket!=="" ? <span>JIRA: <a href={this.state.jiraticket}>{this.state.jiraticket}</a> </span>:<span></span>}
		</span>
		<span>{this.state.snticket!=="" ? <span>ServiceNow: <a href={this.state.snticket}>{this.state.snticket}</a> </span>:<span></span>}
		</span>
		<span>{this.state.webstarticket!=="" ? <span>Webstar: <a href={this.state.webstarticket}>{this.state.webstarticket}</a></span>:<span></span>}
		</span></td>
		</tr>
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tableplatform" >Platform</td>
		<td>{this.state.platform}</td></tr>
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tablestatus" >Status</td>
		<td>{this.state.status}</td></tr>
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tabletime" >Start time & End time</td>
		<td>{this.state.timewindow}</td></tr>
		{this.state.incidentmanager!=="" ?
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tabletime" >Incident Manager</td>
		<td><a href={this.state.incidentmanageremail}> {this.state.incidentmanager}</a></td></tr> : ""
		}
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tablesummary" >Summary</td>
		<td>{this.state.summary}</td></tr>
		<tr><td colSpan="2" style={{fontFamily: "calibri",fontSize:"20px"}}>Please contact  GTO APAC Content Support via reply to this 
			<a href="mailto:sivabalan.shanmugasiva@lexisnexis.com">email</a> if you have any queries/concerns.</td></tr>
		<tr><td colSpan="2" style={{fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}}>Regards<br/>GTO APAC Content Support<br/>
		Email: <a href="mailto:sivabalan.shanmugasiva@lexisnexis.com">CSS (LNG - AUS)</a><br/>
		<span style={{fontSize:"15px"}}>Note: Internal & External</span>
		</td></tr>
		</tbody>
						</table>
					</div>
			</div>);

	}
}
export default Details;