(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a(295)},295:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(39),c=a.n(r),s=a(29),o=a(30),i=a(32),u=a(31),d=a(33),m=a(309),h=a(303),b=a(305),E=a(304),p=a(296),g=a(55),y=a(307),f=a(308),w=a(306),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={tableData:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({tableData:e.tableData})}},{key:"render",value:function(){var e=this.state.tableData;return l.a.createElement("div",null,l.a.createElement(w.a,{celled:!1},l.a.createElement(w.a.Body,null,l.a.createElement(w.a.Row,null,l.a.createElement(w.a.Cell,null,l.a.createElement(w.a,{color:"blue"},l.a.createElement(w.a.Body,null,l.a.createElement(w.a.Row,{textAlign:"center"},l.a.createElement(w.a.Cell,{width:1},l.a.createElement(m.a,null,"S.No.")),l.a.createElement(w.a.Cell,{width:1},l.a.createElement(m.a,null,"IssueID")),l.a.createElement(w.a.Cell,{width:5},l.a.createElement(m.a,null," Issue Title")),l.a.createElement(w.a.Cell,{width:3},l.a.createElement(m.a,null," Created")),l.a.createElement(w.a.Cell,{width:3},l.a.createElement(m.a,null," Last Updated"))))))),l.a.createElement(w.a.Row,null,l.a.createElement(w.a.Cell,null,l.a.createElement("div",{style:{height:"280px",overflow:"auto"}},l.a.createElement(w.a,{striped:!0,selectable:!0},l.a.createElement(w.a.Body,null,e&&Object.keys(e).length>0?e.map(function(e,t){return l.a.createElement(w.a.Row,{textAlign:"center"},l.a.createElement(w.a.Cell,{width:1},t+1),l.a.createElement(w.a.Cell,{width:1},e.number),l.a.createElement(w.a.Cell,{width:5},l.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},e.title)),l.a.createElement(w.a.Cell,{width:3},e.created_at),l.a.createElement(w.a.Cell,{width:3},e.updated_at))}):l.a.createElement(w.a.Cell,{textAlign:"center",colSpan:"10"},"No Record Found")))))))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={response:[],data24hrs:[],data7days:[],databeyond7days:[],errorMessage:"",isDataFound:!1,tableData:[],selectedLabel:""},a.applysearch=function(){a.setState({isDataFound:!1});var e=document.getElementById("repo-url").value,t="";if(e){if(0!==e.indexOf("https://github.com/"))return void a.setState({errorMessage:"Incorrect URL "});"/"===(e=e.replace("https://github.com/","https://api.github.com/repos/")).charAt(e.length-1)&&(e=e.substring(0,e.length-1),document.getElementById("repo-url").value=e),e+="/issues",fetch(e,{Method:"GET"}).then(function(e){return e.json()}).catch(function(){t="Incorrect URL or response XML"}).then(function(e){var n=(new Date).getTime(),l=[],r=[],c=[];for(var s in e)if(e.hasOwnProperty(s)){var o=e[s],i=new Date(o.created_at);"open"===o.state&&(n-i.getTime()>6048e5?l.push(o):n-i.getTime()>864e5?r.push(o):c.push(o))}a.setState({isDataFound:!0,response:e,databeyond7days:l,data7days:r,data24hrs:c,errorMessage:t,tableData:[]})})}},a.onClickLabel=function(e,t){var n=[],l="";switch(t.id){case"total":n=a.state.response,l="Total Open Issues";break;case"b7d":n=a.state.databeyond7days,l="Open Issues Beyond 7 Days";break;case"d7":n=a.state.data7days,l="Open Issues In Last 7 Days";break;case"d24":n=a.state.data24hrs,l="Open Issues In Last 24 Hrs";break;default:n=[],l=""}a.setState({tableData:n,selectedLabel:l})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{as:"h1",textAlign:"center",style:{paddingTop:"10px"}},"Github Open Issue Dashboard"),l.a.createElement(m.a,{as:"h5",textAlign:"center"},"Please enter your github repository URL and click on submit button"),l.a.createElement(h.a,null,l.a.createElement(b.a,{size:"tiny"},l.a.createElement(E.a,{fluid:!0,id:"repo-url",placeholder:"Repository URL",label:l.a.createElement(p.a,{type:"submit",onClick:this.applysearch,primary:!0},"Submit"),labelPosition:"right"}),this.state.errorMessage&&l.a.createElement(g.a,null,this.state.errorMessage))),this.state.isDataFound&&l.a.createElement(h.a,{centered:!0},l.a.createElement(y.a,{fluid:!0,columns:4,centered:!0,textAlign:"center",style:{paddingTop:"20px"}},l.a.createElement(y.a.Row,{container:!0,centered:!0},l.a.createElement(y.a.Column,{textAlign:"center"},"Total Issues"),l.a.createElement(y.a.Column,{textAlign:"center"},"Beyond Last 7 Days"),l.a.createElement(y.a.Column,{textAlign:"center"},"In Last 7 Days"),l.a.createElement(y.a.Column,{textAlign:"center"},"In Last 24 hrs")),l.a.createElement(y.a.Row,{centered:!0},l.a.createElement(y.a.Column,{centered:!0,textAlign:"center"},l.a.createElement(g.a,{id:"total",circular:!0,size:"massive",color:"blue",as:"a",onClick:this.onClickLabel},this.state.response.length)),l.a.createElement(y.a.Column,{centered:!0,textAlign:"center"},l.a.createElement(g.a,{id:"b7d",circular:!0,size:"massive",color:"red",as:"a",onClick:this.onClickLabel},this.state.databeyond7days.length)),l.a.createElement(y.a.Column,{centered:!0,textAlign:"center"},l.a.createElement(g.a,{id:"d7",circular:!0,size:"massive",color:"orange",as:"a",onClick:this.onClickLabel},this.state.data7days.length)),l.a.createElement(y.a.Column,{centered:!0,textAlign:"center"},l.a.createElement(g.a,{id:"d24",circular:!0,size:"massive",color:"yellow",as:"a",onClick:this.onClickLabel},this.state.data24hrs.length)))),l.a.createElement(f.a,null,l.a.createElement(m.a,{textAlign:"center"},this.state.selectedLabel),l.a.createElement(C,{tableData:this.state.tableData}))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ui vertical footer segment"},l.a.createElement("div",{className:"ui center aligned container"},l.a.createElement("h5",{className:"ui  header"},"\xa9 Copyright 2019 | All rights reserved | Rohit Raj",l.a.createElement("a",{href:"https://www.facebook.com/qzelt",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"facebook square icon big"})))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(294);c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[168,1,2]]]);
//# sourceMappingURL=main.391956f3.chunk.js.map