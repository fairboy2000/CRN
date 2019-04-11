__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),s=r(d[4]),c=r(d[5]),f=r(d[6]),u=f.ScrollView,h=f.StyleSheet,p=f.RefreshControl,w=f.Text,k=f.TouchableWithoutFeedback,y=f.View,C=h.create({row:{borderColor:'grey',borderWidth:1,padding:20,backgroundColor:'#3a5795',margin:5},text:{alignSelf:'center',color:'#fff'},scrollview:{flex:1}}),v=(function(f){function u(){var n,s;t(this,u);for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];return(s=o(this,(n=l(u)).call.apply(n,[this].concat(f))))._onClick=function(){s.props.onClick(s.props.data)},s}return s(u,f),n(u,[{key:"render",value:function(){return c.createElement(k,{onPress:this._onClick},c.createElement(y,{style:C.row},c.createElement(w,{style:C.text},this.props.data.text+' ('+this.props.data.clicks+' clicks)')))}}]),u})(c.Component),R=(function(f){function h(){var n,s;t(this,h);for(var c=arguments.length,f=new Array(c),u=0;u<c;u++)f[u]=arguments[u];return(s=o(this,(n=l(h)).call.apply(n,[this].concat(f)))).state={isRefreshing:!1,loaded:0,rowData:Array.from(new Array(20)).map(function(t,n){return{text:'Initial row '+n,clicks:0}})},s._onClick=function(t){t.clicks++,s.setState({rowData:s.state.rowData})},s._onRefresh=function(){s.setState({isRefreshing:!0}),setTimeout(function(){var t=Array.from(new Array(10)).map(function(t,n){return{text:'Loaded row '+(+s.state.loaded+n),clicks:0}}).concat(s.state.rowData);s.setState({loaded:s.state.loaded+10,isRefreshing:!1,rowData:t})},5e3)},s}return s(h,f),n(h,[{key:"render",value:function(){var t=this,n=this.state.rowData.map(function(n,o){return c.createElement(v,{key:o,data:n,onClick:t._onClick})});return c.createElement(u,{style:C.scrollview,refreshControl:c.createElement(p,{refreshing:this.state.isRefreshing,onRefresh:this._onRefresh,tintColor:"#ff0000",title:"Loading...",titleColor:"#00ff00",colors:['#ff0000','#00ff00','#0000ff'],progressBackgroundColor:"#ffff00"})},n)}}]),h})(c.Component);e.title='<RefreshControl>',e.description='Adds pull-to-refresh support to a scrollview.',e.examples=[{title:'Simple refresh',render:function(){return c.createElement(R,null)}}]},666724,[3,4,5,8,9,11,15]);