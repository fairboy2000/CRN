__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),n=r(d[2]),l=r(d[3]),o=r(d[4]),u=r(d[5]),h=r(d[6]),c=h.StyleSheet,p=h.Text,v=h.TouchableHighlight,E=h.View,w=(function(h){function c(s){var o;return t(this,c),(o=n(this,l(c).call(this,s))).cancelled=!1,o.state={status:'',headers:'',contentSize:1,downloaded:0},o}return o(c,h),s(c,[{key:"download",value:function(){var t=this;this.xhr&&this.xhr.abort();var s=this.xhr||new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===s.DONE){if(t.cancelled)return void(t.cancelled=!1);200===s.status?t.setState({status:'Download complete!',headers:s.getAllResponseHeaders()}):0!==s.status?t.setState({status:'Error: Server returned HTTP status of '+s.status+' '+s.responseText}):t.setState({status:'Error: '+s.responseText})}},s.open('GET','https://httpbin.org/response-headers?header1=value&header2=value1&header2=value2'),s.send(),this.xhr=s,this.setState({status:'Downloading...'})}},{key:"componentWillUnmount",value:function(){this.cancelled=!0,this.xhr&&this.xhr.abort()}},{key:"render",value:function(){var t='Downloading...'===this.state.status?u.createElement(E,{style:b.wrapper},u.createElement(E,{style:b.button},u.createElement(p,null,"..."))):u.createElement(v,{style:b.wrapper,onPress:this.download.bind(this)},u.createElement(E,{style:b.button},u.createElement(p,null,"Get headers")));return u.createElement(E,null,t,u.createElement(p,null,this.state.headers))}}]),c})(u.Component),b=c.create({wrapper:{borderRadius:5,marginBottom:5},button:{backgroundColor:'#eeeeee',padding:8}});m.exports=w},666800,[3,4,5,8,9,11,15]);