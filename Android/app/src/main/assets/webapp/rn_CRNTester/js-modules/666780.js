__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=r(d[2]),c=r(d[3]),u=r(d[4]),o=r(d[5]),p=r(d[6]),v=r(d[7]);var l={createContainer:function(l,f){var h,S;return S=h=(function(h){function S(){var t,s;n(this,S);for(var o=arguments.length,v=new Array(o),l=0;l<o;l++)v[l]=arguments[l];return(s=c(this,(t=u(S)).call.apply(t,[this].concat(v)))).state={value:f.getInitialState(s.props)},s._cacheKey="RNTester:"+(f.version||'v1')+":"+f.cacheKeySuffix(s.props),s._passSetState=function(t){s.setState(function(n){var c=t(n.value);return p.setItem(s._cacheKey,JSON.stringify(c)),{value:c}})},s}return o(S,h),s(S,[{key:"componentDidMount",value:function(){var t=this;p.getItem(this._cacheKey,function(n,s){!n&&s&&t.setState({value:JSON.parse(s)})})}},{key:"render",value:function(){return v.createElement(l,t({},this.props,{persister:{state:this.state.value,setState:this._passSetState}}))}}]),S})(v.Component),h.displayName="RNTesterStatePersister("+(l.displayName||l.name)+")",S}};m.exports=l},666780,[14,3,4,5,8,9,337,54]);