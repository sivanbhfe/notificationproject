import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
		status:"Select status",
		htmlData:"",
		timewindow:"",
		summary:"",
		incidentmanageremail:"",
		incidentmanager:"",
		starttime:"",
		endtime:"",
		type:"",
		notitype:"Select a notification type",
		startendcombine:""
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
		this.setState({ status: e.target.value,
			startendcombine:e.target.value 
		})
	}

	incidentmanagerupdate = (e)=> {
		this.setState({ incidentmanager: e.target.value })
	}

	incidentmanageremailupdate = (e)=> {
		this.setState({ incidentmanageremail: e.target.value })
	}
	starttimeupdate = (e)=> {
		this.setState({ starttime: e.target.value })
	}
	endtimeupdate = (e)=> {
		this.setState({ endtime: e.target.value })
	}
	summaryupdate  = (e)=> {
		this.setState({ summary: e.target.value })
	}
	notitypeupdate  = (e)=> {
		this.setState({ notitype: e.target.value })
	}
	sendmail=()=>{	
		alert("test");	

		if(this.state.notitype==="Select a notification type"){
			alert("Please select a valid notification type");
			return;
		}

		if(this.state.status==="Select status"){
			alert("Please select a valid status");
			return;
		}

		if(this.state.title===""){
			alert("Notification title cannot be empty");
			return;
		}

		if(this.state.platform===""){
			alert("Platform details cannot be empty");
			return;
		}

		if(this.state.starttime===""){
			alert("Start time cannot be empty");
			return;
		}
		
		let notidata = JSON.stringify({
			"title": this.state.title,
			"platform": this.state.platform,
			"jira": this.state.jiraticket,
			"servicenow": this.state.snticket,
			"webstar": this.state.webstarticket,
			"status": this.state.status,
			"incimanager": this.state.incidentmanager,
			"incimanageremail": this.state.incidentmanageremail,
			"starttime":this.state.starttime,
			"endtime":this.state.endtime,
			"notitype":this.state.notitype,
			"summary":this.state.summary

		});
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
		xhr.send(notidata);
	}
	render() {
		
		return (
		<div style={{display:"flex"}}>
			
			<div style={{marginBottom:"20px", display:"flex", width:"50%"}}>
				<form>
					<FormControl>
					<select onChange={this.notitypeupdate} style={{width:"220px",height:"40px", fontSize:"16px", fontWeight:"bold"}} id="notificationtype">
						<option value="default">Selet a notification type</option>
						<option value="outageholiday">Planned Outage</option>
						<option value="emergencyseverity">Emergency Outage</option>
						<option value="outageholiday">Planned Release</option>
						<option value="emergencyseverity">Emergency Release</option>
						<option value="emergencyseverity">Severity 1</option>
						<option value="emergencyseverity">Severity 2</option>
						<option value="outageholiday">Holiday notification</option>
					</select>
					</FormControl><br/>
				<FormControl >
					<InputLabel  htmlFor="title">Title</InputLabel>
					<Input className="inputtitle" onChange={this.titleUpdate} style={{fontWeight:"bolder"}} id="title" />
				</FormControl>
				<FormControl  >
					<InputLabel htmlFor="platform">Platform</InputLabel>
					<Input className="inputtitle" onChange={this.platformUpdate} id="platform" />
				</FormControl>
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
					<select onChange={this.statusupdate} style={{width:"220px",height:"40px", fontSize:"16px", fontWeight:"bold"}} id="notistatus">
						<option value="default">Select status</option>
						<option value="Open">Open</option>
						<option value="Completed">Completed</option>
						<option value="Resolved">Resolved</option>
					</select>
					</FormControl><br/>
				<FormControl>
					<InputLabel  htmlFor="starttime">Start time</InputLabel>
					<Input style={{height:"70px"}} className="inputfields" id="starttime" onChange={this.starttimeupdate}	
					/>
				</FormControl>
				<FormControl>
					<InputLabel  htmlFor="endtime">End time</InputLabel>
					<Input style={{height:"70px"}}  className="inputfields" id="endtime" onChange={this.endtimeupdate}	
					/>
				</FormControl>

				<FormControl >
					<InputLabel htmlFor="incident-manager-name">Incident Manager</InputLabel>
					<Input  style={{height:"70px"}} className="inputfields" id="incident-manager-name"  onChange={this.incidentmanagerupdate}/>
					</FormControl>
					<FormControl >
					<InputLabel htmlFor="incident-manager-email" >Incident Manager Email</InputLabel>
					<Input  style={{height:"70px"}}  className="inputfields" id="incident-manager-email" onChange={this.incidentmanageremailupdate}  />
				</FormControl><br/><br/><br/>
				<FormControl autoComplete="off">
		<label style={{fontFamily:"calibri", fontWeight:"bold"}} for="summary">{this.state.type} Summary</label>
  				<input onChange={this.summaryupdate} style={{height:"150px",width:"860px"}} type="text" id="summary" name="summary"></input>
</FormControl><br/><br/>
				<Button onClick={this.sendmail} style={{ marginLeft:"30%", fontWeight:"bold", fontSize: "100%", height:"50px" }} variant="contained" color="default" >
					Send mail</Button>
					</form>
				<span>{this.state.htmlData}</span></div>
					
					<div style={{width:"50%", display:"inline"}}>
						<table border="1">
						<colgroup>
    <col style={{width:"250px"}}/>
    <col style={{width:"600px"}}/>
  </colgroup><tbody>
	  <tr><td colSpan="2"><span><img style={{minWidth:"100%",maxHeight:"100%"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCACUApoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkooNABmlptLQAtFISKKAFoopM0ALSUE4qCe6SHgnLelTOcYK8hpX2J6BVEanHv2nhverUMolXIrOnXhN2ixuLRLRSUVsSLRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR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8Cf8h+Oph/FN6iSwElFW02PZBS01adXqH56FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA01yHibwldapqq6hY3CLIY/KZJVyuPXHrXYUYqoycXdCauZPhzRf7B0aGx80yFMkt7n0rV6UtGKTbbuwSS2E7UooxRikMWiiigBKKWigAooooAKKKKACkNLRQA0964vxl4UvteuUezeNQo/irtqKmcVNWZvh8RPD1FUhueRf8K21zPW3+u+k/4Vrrecf6P/AN9V69RWH1Wmer/rDjPL7jyE/DbWx3tv++qX/hWuuetv/wB9V67RR9Upi/1gxndfceRf8K11z1t/++qT/hWuuf8ATt/31Xr1FP6rTH/rDjPL7jyH/hWuuHvb/wDfVH/Ctdb9bf8A76r16il9Vph/rBjPL7jyH/hW2uDvb/8AfVH/AArXXPW3/wC+q9eop/VaYf6w4zy+48h/4Vrrnrb/APfVB+G2tjHNv/33Xr1FL6rAP9YcZ5fceQ/8K11zPW3/AO+6P+Fba51/0f8A76r16ij6rTD/AFhxnl9x5D/wrbXP+nf/AL6o/wCFba3/ANO//fVevUUfVaYf6wYzy+48h/4Vtrf/AE7/APfVA+G2t/8ATv8A99V69RR9Vph/rDjPL7jyH/hW2uf9O/8A31R/wrbW/W3/AO+q9eoo+q0w/wBYcZ5fceQ/8K21vPW3/wC+qP8AhWut+tt/31Xr1FH1WmH+sOM8vuPIf+Fa63623/fVH/Cttb/6d/8AvqvXaWj6pTD/AFhxnl9x5F/wrXXPW3H/AAKk/wCFba3/ANO//fVevUUfVaYf6w4zy+48h/4VtrY723/fdH/Ctdb9bf8A76r16ij6pTD/AFgxnl9x5D/wrbXMdbf/AL6pf+Fa631zbf8AfVeu0UfVaYf6wYzpb7jyL/hWuuetv/31SH4ba2B1tv8AvqvXqKPqtMP9YcZ5fceU2PgTxFp1ytxavbLIBjO6oZPhzrssjSubfc5LN83evXKSm8NTehP9vYrm5tL+h5XYeB/EenSPJayWyM6lW+bqKrH4ba2STm3yTk/NXrtLQ8NAFn2KUnJWu/I8hPw11v1tv++qB8NdbIyDb/8AfVevUUvqlMr/AFgxndfceQ/8K21vP/Lv/wB9Uf8ACttc/wCnf/vqvXqKPqtMP9YcZ5fceRD4a63623/fVbHhfwTqmlaqlxdGHy167W5r0Wiqjh4RaaM6ueYqrBwlaz8hop1FFbnjhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q=="></img></span></td></tr>
		<tr className={this.state.status==="Open" ? this.state.notitype:this.state.status} style={{fontSize: "40px", fontFamily: "calibri", 
			textAlign: "center", height: "100px"}}>
				<td 	colSpan="2">{this.state.title}</td>
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
		<td style={{fontFamily: "calibri",fontSize:"16px"}}>{this.state.platform}</td></tr>
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tablestatus" >Status</td>
		<td style={{fontFamily: "calibri",fontSize:"16px"}}>{this.state.status}</td></tr>
				
		<tr className={"open"+this.state.startendcombine}><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}}	id="tablestarttime" >Start time</td>
		<td style={{fontFamily: "calibri",fontSize:"16px"}}>{this.state.starttime}</td></tr>
		<tr className={"open"+this.state.startendcombine}><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tableendtime" >End time</td>
		<td style={{fontFamily: "calibri",fontSize:"16px"}}>{this.state.endtime}</td></tr> 
		<tr className={"completed"+this.state.startendcombine}><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tablestarttime" >Start time & End time</td>
		<td style={{fontFamily: "calibri",fontSize:"16px"}}>{this.state.starttime}<span> to </span>{this.state.endtime}</td></tr>
		
		{this.state.incidentmanager!=="" ?
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tabletime" >Incident Manager</td>
		<td style={{fontFamily: "calibri",fontSize:"16px"}}><a href={"mailto:"+this.state.incidentmanageremail}> {this.state.incidentmanager}</a></td></tr> : ""
		}
		<tr><td style={{textAlign:"right",fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}} 
		id="tablesummary" >Summary</td>
		<td style={{fontFamily: "calibri",fontSize:"16px"}}>{this.state.summary}</td></tr>
		<tr><td colSpan="2" style={{fontFamily: "calibri",fontSize:"20px"}}>Please contact  GTO APAC Content Support via reply to this <a href="mailto:sivabalan.shanmugasiva@lexisnexis.com">email</a> if you have any queries/concerns.</td></tr>
		<tr><td colSpan="2" style={{fontFamily: "calibri",fontWeight:"bold", fontSize:"20px"}}>Regards<br/>GTO APAC Content Support<br/>
		Email: <a href="mailto:sivabalan.shanmugasiva@lexisnexis.com">CSS (LNG - AUS)</a><br/>
		<span style={{fontSize:"15px"}}>Note: Internal & External</span>
		</td></tr>
		</tbody>
						</table>
					
			</div></div>);

	}
}
export default Details;