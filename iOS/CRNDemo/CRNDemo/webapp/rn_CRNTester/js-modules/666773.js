__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),c=r(d[4]),s=r(d[5]),u=r(d[6]),h=u.StyleSheet,f=u.Text,v=u.View,y=u.Alert,p=(function(u){function h(){var n,c;t(this,h);for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return(c=o(this,(n=l(h)).call.apply(n,[this].concat(u)))).state={initialPosition:'unknown',lastPosition:'unknown'},c.watchID=null,c}return c(h,u),n(h,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation.getCurrentPosition(function(n){var o=JSON.stringify(n);t.setState({initialPosition:o})},function(t){return y.alert('Error',JSON.stringify(t))},{enableHighAccuracy:!0,timeout:2e4,maximumAge:1e3}),this.watchID=navigator.geolocation.watchPosition(function(n){var o=JSON.stringify(n);t.setState({lastPosition:o})})}},{key:"componentWillUnmount",value:function(){null!=this.watchID&&navigator.geolocation.clearWatch(this.watchID)}},{key:"render",value:function(){return s.createElement(v,null,s.createElement(f,null,s.createElement(f,{style:w.title},"Initial position: "),this.state.initialPosition),s.createElement(f,null,s.createElement(f,{style:w.title},"Current position: "),this.state.lastPosition))}}]),h})(s.Component),w=h.create({title:{fontWeight:'500'}});e.framework='React',e.title='Geolocation',e.description='Examples of using the Geolocation API.',e.examples=[{title:'navigator.geolocation',render:function(){return s.createElement(p,null)}}]},666773,[3,4,5,8,9,11,15]);