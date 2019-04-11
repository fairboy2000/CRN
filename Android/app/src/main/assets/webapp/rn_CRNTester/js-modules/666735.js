__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),s=r(d[3]),o=r(d[4]),c=r(d[5]),u=r(d[6]),h=u.StatusBar,f=u.StyleSheet,y=u.Text,E=u.TouchableHighlight,p=u.View,b=u.Modal,w=['#ff0000','#00ff00','#0000ff','rgba(0, 0, 0, 0.4)'],C=['default','light-content'],k=['fade','slide'];function v(t,n){return t[n%t.length]}var S=(function(u){function f(){var n,o;t(this,f);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(o=l(this,(n=s(f)).call.apply(n,[this].concat(u)))).state={animated:!0,hidden:!1,showHideTransition:v(k,0)},o._showHideTransitionIndex=0,o._onChangeAnimated=function(){o.setState({animated:!o.state.animated})},o._onChangeHidden=function(){o.setState({hidden:!o.state.hidden})},o._onChangeTransition=function(){o._showHideTransitionIndex++,o.setState({showHideTransition:v(k,o._showHideTransitionIndex)})},o}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(h,{hidden:this.state.hidden,showHideTransition:this.state.showHideTransition,animated:this.state.animated}),c.createElement(E,{style:T.wrapper,onPress:this._onChangeHidden},c.createElement(p,{style:T.button},c.createElement(y,null,"hidden: ",this.state.hidden?'true':'false'))),c.createElement(E,{style:T.wrapper,onPress:this._onChangeAnimated},c.createElement(p,{style:T.button},c.createElement(y,null,"animated (ios only): ",this.state.animated?'true':'false'))),c.createElement(E,{style:T.wrapper,onPress:this._onChangeTransition},c.createElement(p,{style:T.button},c.createElement(y,null,"showHideTransition (ios only): '",v(k,this._showHideTransitionIndex),"'"))),c.createElement(V,null))}}]),f})(c.Component),_=(function(u){function f(){var n,o;t(this,f);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(o=l(this,(n=s(f)).call.apply(n,[this].concat(u))))._barStyleIndex=0,o._onChangeBarStyle=function(){o._barStyleIndex++,o.setState({barStyle:v(C,o._barStyleIndex)})},o._onChangeAnimated=function(){o.setState({animated:!o.state.animated})},o.state={animated:!0,barStyle:v(C,o._barStyleIndex)},o}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(h,{animated:this.state.animated,barStyle:this.state.barStyle}),c.createElement(E,{style:T.wrapper,onPress:this._onChangeBarStyle},c.createElement(p,{style:T.button},c.createElement(y,null,"style: '",v(C,this._barStyleIndex),"'"))),c.createElement(E,{style:T.wrapper,onPress:this._onChangeAnimated},c.createElement(p,{style:T.button},c.createElement(y,null,"animated: ",this.state.animated?'true':'false'))))}}]),f})(c.Component),B=(function(u){function f(){var n,o;t(this,f);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(o=l(this,(n=s(f)).call.apply(n,[this].concat(u)))).state={networkActivityIndicatorVisible:!1},o._onChangeNetworkIndicatorVisible=function(){o.setState({networkActivityIndicatorVisible:!o.state.networkActivityIndicatorVisible})},o}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(h,{networkActivityIndicatorVisible:this.state.networkActivityIndicatorVisible}),c.createElement(E,{style:T.wrapper,onPress:this._onChangeNetworkIndicatorVisible},c.createElement(p,{style:T.button},c.createElement(y,null,"networkActivityIndicatorVisible:",this.state.networkActivityIndicatorVisible?'true':'false'))))}}]),f})(c.Component),I=(function(u){function f(){var n,o;t(this,f);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(o=l(this,(n=s(f)).call.apply(n,[this].concat(u)))).state={animated:!0,backgroundColor:v(w,0)},o._colorIndex=0,o._onChangeBackgroundColor=function(){o._colorIndex++,o.setState({backgroundColor:v(w,o._colorIndex)})},o._onChangeAnimated=function(){o.setState({animated:!o.state.animated})},o}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(h,{backgroundColor:this.state.backgroundColor,animated:this.state.animated}),c.createElement(E,{style:T.wrapper,onPress:this._onChangeBackgroundColor},c.createElement(p,{style:T.button},c.createElement(y,null,"backgroundColor: '",v(w,this._colorIndex),"'"))),c.createElement(E,{style:T.wrapper,onPress:this._onChangeAnimated},c.createElement(p,{style:T.button},c.createElement(y,null,"animated: ",this.state.animated?'true':'false'))))}}]),f})(c.Component),A=(function(u){function f(){var n,o;t(this,f);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(o=l(this,(n=s(f)).call.apply(n,[this].concat(u)))).state={translucent:!1},o._onChangeTranslucent=function(){o.setState({translucent:!o.state.translucent})},o}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(h,{translucent:this.state.translucent}),c.createElement(E,{style:T.wrapper,onPress:this._onChangeTranslucent},c.createElement(p,{style:T.button},c.createElement(y,null,"translucent: ",this.state.translucent?'true':'false'))))}}]),f})(c.Component),P=(function(u){function f(){return t(this,f),l(this,s(f).apply(this,arguments))}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(E,{style:T.wrapper,onPress:function(){h.setHidden(!0,'slide')}},c.createElement(p,{style:T.button},c.createElement(y,null,"setHidden(true, 'slide')"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setHidden(!1,'fade')}},c.createElement(p,{style:T.button},c.createElement(y,null,"setHidden(false, 'fade')"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setBarStyle('default',!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setBarStyle('default', true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setBarStyle('light-content',!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setBarStyle('light-content', true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setNetworkActivityIndicatorVisible(!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setNetworkActivityIndicatorVisible(true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setNetworkActivityIndicatorVisible(!1)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setNetworkActivityIndicatorVisible(false)"))))}}]),f})(c.Component),H=(function(u){function f(){return t(this,f),l(this,s(f).apply(this,arguments))}return o(f,u),n(f,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(E,{style:T.wrapper,onPress:function(){h.setHidden(!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setHidden(true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setHidden(!1)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setHidden(false)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setBackgroundColor('#ff00ff',!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setBackgroundColor('#ff00ff', true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setBackgroundColor('#00ff00',!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setBackgroundColor('#00ff00', true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setTranslucent(!0),h.setBackgroundColor('rgba(0, 0, 0, 0.4)',!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setTranslucent(true) and setBackgroundColor('rgba(0, 0, 0, 0.4)', true)"))),c.createElement(E,{style:T.wrapper,onPress:function(){h.setTranslucent(!1),h.setBackgroundColor('black',!0)}},c.createElement(p,{style:T.button},c.createElement(y,null,"setTranslucent(false) and setBackgroundColor('black', true)"))))}}]),f})(c.Component),V=(function(u){function h(){var n,o;t(this,h);for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return(o=l(this,(n=s(h)).call.apply(n,[this].concat(u)))).state={modalVisible:!1},o._onChangeModalVisible=function(){o.setState({modalVisible:!o.state.modalVisible})},o}return o(h,u),n(h,[{key:"render",value:function(){return c.createElement(p,null,c.createElement(E,{style:T.wrapper,onPress:this._onChangeModalVisible},c.createElement(p,{style:T.button},c.createElement(y,null,"modal visible: ",this.state.hidden?'true':'false'))),c.createElement(b,{visible:this.state.modalVisible,transparent:!0,onRequestClose:this._onChangeModalVisible},c.createElement(p,{style:[T.container]},c.createElement(p,{style:[T.innerContainer]},c.createElement(y,null,"This modal was presented!"),c.createElement(E,{onPress:this._onChangeModalVisible,style:T.modalButton},c.createElement(p,{style:T.button},c.createElement(y,null,"Close")))))))}}]),h})(c.Component);e.framework='React',e.title='<StatusBar>',e.description='Component for controlling the status bar',e.examples=[{title:'StatusBar hidden',render:function(){return c.createElement(S,null)}},{title:'StatusBar style',render:function(){return c.createElement(_,null)},platform:'ios'},{title:'StatusBar network activity indicator',render:function(){return c.createElement(B,null)},platform:'ios'},{title:'StatusBar background color',render:function(){return c.createElement(I,null)},platform:'android'},{title:'StatusBar translucent',render:function(){return c.createElement(A,null)},platform:'android'},{title:'StatusBar static API',render:function(){return c.createElement(P,null)},platform:'ios'},{title:'StatusBar static API',render:function(){return c.createElement(H,null)},platform:'android'},{title:'StatusBar dimensions',render:function(){return c.createElement(p,null,c.createElement(y,null,"Height (Android only): ",h.currentHeight," pts"))},platform:'android'}];var T=f.create({container:{flex:1,justifyContent:'center',padding:20,backgroundColor:'#f5fcff'},innerContainer:{borderRadius:10,alignItems:'center'},wrapper:{borderRadius:5,marginBottom:5},button:{borderRadius:5,backgroundColor:'#eeeeee',padding:10},modalButton:{marginTop:10}})},666735,[3,4,5,8,9,11,15]);