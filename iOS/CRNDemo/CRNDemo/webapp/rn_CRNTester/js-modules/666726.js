__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),s=r(d[3]),o=r(d[4]),u=r(d[5]),c=r(d[6]),p=r(d[7]),h=r(d[8]),f=r(d[9]),v=r(d[10]),y=r(d[11]),S=r(d[12]),E=r(d[13]),w=(function(c){function v(){var n,o;t(this,v);for(var u=arguments.length,c=new Array(u),p=0;p<u;p++)c[p]=arguments[p];return(o=l(this,(n=s(v)).call.apply(n,[this].concat(c)))).state={modalVisible:!1,emulateUnlessSupported:!0},o._setModalVisible=function(t){o.setState({modalVisible:t})},o}return o(v,c),n(v,[{key:"render",value:function(){var t=this;return h.createElement(E,null,h.createElement(p,{visible:this.state.modalVisible,onRequestClose:function(){return t._setModalVisible(!1)},animationType:"slide",supportedOrientations:['portrait','landscape']},h.createElement(E,{style:b.modal},h.createElement(f,{style:b.safeArea,emulateUnlessSupported:this.state.emulateUnlessSupported},h.createElement(E,{style:b.safeAreaContent},h.createElement(u,{onPress:this._setModalVisible.bind(this,!1),title:"Close"}),h.createElement(S,null,"emulateUnlessSupported:"),h.createElement(y,{onValueChange:function(n){return t.setState({emulateUnlessSupported:n})},value:this.state.emulateUnlessSupported}))))),h.createElement(u,{onPress:this._setModalVisible.bind(this,!0),title:"Present Modal Screen with SafeAreaView"}),h.createElement(S,null,"emulateUnlessSupported:"),h.createElement(y,{onValueChange:function(n){return t.setState({emulateUnlessSupported:n})},value:this.state.emulateUnlessSupported}))}}]),v})(h.Component),V=(function(u){function p(){return t(this,p),l(this,s(p).apply(this,arguments))}return o(p,u),n(p,[{key:"render",value:function(){return h.createElement(E,null,h.createElement(S,null,"Is this an iPhone X:",' ',c.isIPhoneX_deprecated?'Yeah!':'Nope. (Or `isIPhoneX_deprecated` was already removed.)'))}}]),p})(h.Component),b=v.create({modal:{flex:1},safeArea:{flex:1,height:1e3},safeAreaContent:{flex:1,backgroundColor:'#ffaaaa',alignItems:'center',justifyContent:'center'}});e.displayName=void 0,e.framework='React',e.title='<SafeAreaView>',e.description='SafeAreaView automatically applies paddings reflect the portion of the view that is not covered by other (special) ancestor views.',e.examples=[{title:'<SafeAreaView> Example',description:'SafeAreaView automatically applies paddings reflect the portion of the view that is not covered by other (special) ancestor views.',render:function(){return h.createElement(w,null)}},{title:'isIPhoneX_deprecated Example',description:"`DeviceInfo.isIPhoneX_deprecated` returns true only on iPhone X. Note: This prop is deprecated and will be removed in a future release. Please use this only for a quick and temporary solution. Use <SafeAreaView> instead.",render:function(){return h.createElement(V,null)}}]},666726,[3,4,5,8,9,179,58,282,11,293,55,301,180,80]);