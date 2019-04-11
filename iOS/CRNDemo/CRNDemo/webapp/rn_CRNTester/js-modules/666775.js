__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),o=r(d[3]),u=r(d[4]),c=r(d[5]),s=r(d[6]),h=r(d[7]),f=h.LayoutAnimation,y=h.StyleSheet,v=h.Text,w=h.View,E=h.TouchableOpacity,p=(function(h){function y(){var l,c;n(this,y);for(var s=arguments.length,h=new Array(s),f=0;f<s;f++)h[f]=arguments[f];return(c=o(this,(l=u(y)).call.apply(l,[this].concat(h)))).state={views:[]},c._onPressAddView=function(){c.setState(function(n){return{views:[].concat(t(n.views),[{}])}})},c._onPressRemoveView=function(){c.setState(function(t){return{views:t.views.slice(0,-1)}})},c}return c(y,h),l(y,[{key:"UNSAFE_componentWillUpdate",value:function(){f.easeInEaseOut()}},{key:"render",value:function(){var t=this.state.views.map(function(t,n){return s.createElement(w,{key:n,style:P.view},s.createElement(v,null,n))});return s.createElement(w,{style:P.container},s.createElement(E,{onPress:this._onPressAddView},s.createElement(w,{style:P.button},s.createElement(v,null,"Add view"))),s.createElement(E,{onPress:this._onPressRemoveView},s.createElement(w,{style:P.button},s.createElement(v,null,"Remove view"))),s.createElement(w,{style:P.viewContainer},t))}}]),y})(s.Component),b=function(){return s.createElement(w,{style:P.greenSquare},s.createElement(v,null,"Green square"))},C=function(){return s.createElement(w,{style:P.blueSquare},s.createElement(v,null,"Blue square"))},_=(function(t){function h(){var t,l;n(this,h);for(var c=arguments.length,s=new Array(c),y=0;y<c;y++)s[y]=arguments[y];return(l=o(this,(t=u(h)).call.apply(t,[this].concat(s)))).state={toggled:!1},l._onPressToggle=function(){f.easeInEaseOut(),l.setState(function(t){return{toggled:!t.toggled}})},l}return c(h,t),l(h,[{key:"render",value:function(){return s.createElement(w,{style:P.container},s.createElement(E,{onPress:this._onPressToggle},s.createElement(w,{style:P.button},s.createElement(v,null,"Toggle"))),s.createElement(w,{style:P.viewContainer},this.state.toggled?s.createElement(b,null):s.createElement(C,null)))}}]),h})(s.Component),T=(function(t){function h(){var t,l;n(this,h);for(var c=arguments.length,s=new Array(c),y=0;y<c;y++)s[y]=arguments[y];return(l=o(this,(t=u(h)).call.apply(t,[this].concat(s)))).state={width:200,height:100},l.timeout=null,l._clearTimeout=function(){null!==l.timeout&&(clearTimeout(l.timeout),l.timeout=null)},l._onPressToggle=function(){l._clearTimeout(),l.setState({width:150}),f.configureNext({duration:1e3,update:{type:f.Types.linear}}),l.timeout=setTimeout(function(){return l.setState({width:100})},500)},l}return c(h,t),l(h,[{key:"componentWillUnmount",value:function(){this._clearTimeout()}},{key:"render",value:function(){var t=this.state,n=t.width,l=t.height;return s.createElement(w,{style:P.container},s.createElement(E,{onPress:this._onPressToggle},s.createElement(w,{style:P.button},s.createElement(v,null,"Make box square"))),s.createElement(w,{style:[P.view,{width:n,height:l}]},s.createElement(v,null,n,"x",l)))}}]),h})(s.Component),P=y.create({container:{flex:1},button:{borderRadius:5,backgroundColor:'#eeeeee',padding:10,marginBottom:10},viewContainer:{flex:1,flexDirection:'row',flexWrap:'wrap'},view:{height:54,width:54,backgroundColor:'red',margin:8,alignItems:'center',justifyContent:'center'},greenSquare:{width:150,height:150,backgroundColor:'green',alignItems:'center',justifyContent:'center'},blueSquare:{width:150,height:150,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}});e.title='Layout Animation',e.description='Layout animation',e.examples=[{title:'Add and remove views',render:function(){return s.createElement(p,null)}},{title:'Cross fade views',render:function(){return s.createElement(_,null)}},{title:'Layout update during animation',render:function(){return s.createElement(T,null)}}]},666775,[30,3,4,5,8,9,11,15]);