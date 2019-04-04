(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5412:function(e,t,n){e.exports=n(5541)},5417:function(e,t,n){},5418:function(e,t,n){},5541:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(16),i=n.n(r),c=(n(5417),n(18)),l=n(19),s=n(21),u=n(20),d=n(22),h=(n(5418),n(46)),m=n.n(h),p=n(9),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.h,{fullWidth:!0,placeholder:"Search",variant:"outlined",onChange:function(t){return e.props.filterNotesBySearchResult(t.target.value)},InputProps:{startAdornment:o.a.createElement(p.f,{position:"start"},o.a.createElement(m.a,null))}})}}]),t}(a.Component),b=n(75),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isEditMode:!1,editValue:""},n.editText=function(){n.changeEditMode(!0)},n.closeEditText=function(){n.changeEditMode(!1)},n.saveAndCloseEditText=function(e,t,a){n.changeEditMode(!1);var o=t;o.body=a,e(o)},n.changeEditMode=function(e){return n.setState({isEditMode:e})},n.handleEditChange=function(e){n.setState({editValue:e.target.value})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.note;this.state.editValue!==e.body&&this.setState({editValue:e.body})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isEditMode,a=t.editValue,r=this.props,i=r.note,c=r.deleteNote,l=r.updateNote;return o.a.createElement(p.b,null,n?o.a.createElement(o.a.Fragment,null,o.a.createElement(p.h,{id:"outlined-bare",value:a,margin:"normal",variant:"outlined",fullWidth:!0,onChange:this.handleEditChange}),o.a.createElement("span",{className:"update-buttons"},o.a.createElement(p.a,{variant:"contained",onClick:this.closeEditText,size:"small"},"Cancel")),o.a.createElement("span",{className:"update-buttons"},o.a.createElement(p.a,{variant:"contained",color:"primary",className:"update-buttons",onClick:function(){return e.saveAndCloseEditText(l,i,a)},size:"small"},"Update"))):o.a.createElement(p.c,{title:i.body,action:o.a.createElement(o.a.Fragment,null,o.a.createElement(p.e,{onClick:function(){return e.editText(i)}},o.a.createElement(b.b,null)),o.a.createElement(p.e,{onClick:function(){return c(i.id)}},o.a.createElement(b.a,null)))}))}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.notes,n=e.deleteNote,a=e.updateNote;e.filteredKeyword;return o.a.createElement(p.d,{container:!0,spacing:24},o.a.createElement(p.d,{item:!0,xs:12,className:"note-header"},o.a.createElement("h2",null,"Here are all of your current notes")),0===t.length?o.a.createElement("p",{className:"no-notes"},"Oops! There are no notes! Click new note to get started"):t.map(function(e){return o.a.createElement(p.d,{item:!0,xs:3},o.a.createElement(E,{key:e.id,note:e,deleteNote:n,updateNote:a}))}))}}]),t}(a.Component),g=n(17);var y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={newNoteValue:""},n.onMultilineChange=function(e){n.setState({newNoteValue:e.target.value})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.newNoteValue,t=this.props,n=t.classes,a=t.handleClose,r=t.handleSave;return o.a.createElement(p.b,{className:n.paper,elevation:1,style:{top:"".concat(50,"%"),margin:"auto",left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}},o.a.createElement("h2",{className:n.cardHeader},"New Note"),o.a.createElement(p.h,{id:"outlined-multiline-flexible",label:"Write down your thoughts",multiline:!0,rowsMax:"4",value:e,onChange:this.onMultilineChange,className:n.textField,margin:"normal",variant:"outlined"}),o.a.createElement("div",null,o.a.createElement(p.a,{variant:"contained",className:n.button,onClick:a},"Cancel"),o.a.createElement(p.a,{variant:"contained",color:"primary",className:n.button,onClick:function(){return r(e)}},"Save")))}}]),t}(a.Component),N=Object(g.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:50*e.spacing.unit},button:{margin:e.spacing.unit},cardHeader:{margin:e.spacing.unit}}})(y),C="https://safe-inlet-97630.herokuapp.com/api/notes",j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,notes:[{id:1,body:"This is the first note"},{id:2,body:"This is the second note"},{id:3,body:"This is the third note"},{id:4,body:"This is the fourth note"},{id:5,body:"This is the fifth note"}],filteredKeyword:""},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.handleSave=function(e){var t=n.state.notes;console.log("Saving new note: "+e);var a=t[t.length-1],o={id:a?a.id+1:1,body:e};fetch(C,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var t=n.state.notes.concat(o);n.setState({notes:t})}).catch(function(e){return console.error("Error:",e)}),n.handleClose()},n.deleteNote=function(e){fetch("".concat(C,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=n.state.notes.filter(function(t){return t.id!==e});n.setState({notes:a})}).catch(function(e){return console.error("Error:",e)})},n.updateNote=function(e){fetch(C,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=n.state.notes;a[n.state.notes.findIndex(function(t){return t.id==e.id})]=e,n.setState({notes:a})}).catch(function(e){return console.error("Error:",e)})},n.filterNotesBySearchResult=function(e){n.setState({filteredKeyword:e})},n.determineNotes=function(e,t){return t.length>0?e.filter(function(e){return e.body.includes(t)}):e},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(C,{}).then(function(e){return e.json()}).then(function(t){return e.setState({notes:t})}).catch(function(e){return console.error("Error:",e)})}},{key:"render",value:function(){var e=this.state,t=e.open,n=e.notes,a=e.filteredKeyword,r=this.determineNotes(n,a);return o.a.createElement("div",{className:"App"},o.a.createElement(p.d,{container:!0,spacing:24,alignItems:"center"},o.a.createElement(p.d,{item:!0,xs:6},o.a.createElement("div",{className:"search-container"},o.a.createElement(f,{filterNotesBySearchResult:this.filterNotesBySearchResult}))),o.a.createElement(p.d,{item:!0,xs:3},o.a.createElement(p.a,{variant:"contained",className:"button",color:"primary",size:"large",onClick:this.handleOpen},"New Note")),o.a.createElement(p.g,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onClose:this.handleClose},o.a.createElement(N,{handleClose:this.handleClose,handleSave:this.handleSave})),o.a.createElement(p.d,{item:!0,xs:12},o.a.createElement(v,{notes:r,deleteNote:this.deleteNote,updateNote:this.updateNote}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5412,1,2]]]);
//# sourceMappingURL=main.ba734be7.chunk.js.map