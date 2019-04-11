__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),s=r(d[3]),u=r(d[4]),o=r(d[5]),c=r(d[6]),_=c.Alert,f=(c.Platform,c.ToastAndroid,c.Text),h=c.View,p=r(d[7]),I=r(d[8]);function T(t){for(var n=I();I()<n+t;);}var v=(function(c){function _(){var n,u;t(this,_);for(var o=arguments.length,c=new Array(o),f=0;f<o;f++)c[f]=arguments[f];return(u=l(this,(n=s(_)).call.apply(n,[this].concat(c)))).state={message:'-'},u._idleTimer=null,u._iters=0,u._runWithTimeout=function(){null!=u._idleTimer&&(cancelIdleCallback(u._idleTimer),u._idleTimer=null),u._idleTimer=requestIdleCallback(function(t){u.setState({message:t.timeRemaining()+"ms remaining in frame, it did timeout: "+(t.didTimeout?'yes':'no')})},{timeout:100}),T(100)},u._runBackground=function(){null!=u._idleTimer&&(cancelIdleCallback(u._idleTimer),u._idleTimer=null);u._idleTimer=requestIdleCallback(function t(n){for(;n.timeRemaining()>5;)T(5),u.setState({message:"Burned CPU for 5ms "+u._iters+++" times, "+n.timeRemaining()+"ms remaining in frame"});u._idleTimer=requestIdleCallback(t)})},u._stopBackground=function(){u._iters=0,null!=u._idleTimer&&(cancelIdleCallback(u._idleTimer),u._idleTimer=null)},u}return u(_,c),n(_,[{key:"componentWillUnmount",value:function(){null!=this._idleTimer&&(cancelIdleCallback(this._idleTimer),this._idleTimer=null)}},{key:"render",value:function(){return o.createElement(h,null,o.createElement(p,{onPress:this._run.bind(this,!1)},"Run requestIdleCallback"),o.createElement(p,{onPress:this._run.bind(this,!0)},"Burn CPU inside of requestIdleCallback"),o.createElement(p,{onPress:this._runWithTimeout},"Run requestIdleCallback with timeout option"),o.createElement(p,{onPress:this._runBackground},"Run background task"),o.createElement(p,{onPress:this._stopBackground},"Stop background task"),o.createElement(f,null,this.state.message))}},{key:"_run",value:function(t){var n=this;null!=this._idleTimer&&(cancelIdleCallback(this._idleTimer),this._idleTimer=null),this._idleTimer=requestIdleCallback(function(l){var s='';t&&(T(10),s='Burned CPU for 10ms,'),n.setState({message:s+" "+l.timeRemaining()+"ms remaining in frame"})})}}]),_})(o.Component),E=(function(c){function f(){var n,u;t(this,f);for(var o=arguments.length,c=new Array(o),h=0;h<o;h++)c[h]=arguments[h];return(u=l(this,(n=s(f)).call.apply(n,[this].concat(c))))._ii=0,u._iters=0,u._start=0,u._timerId=null,u._rafId=null,u._intervalId=null,u._immediateId=null,u._timerFn=null,u._run=function(){if(!u._start){var t=new Date;u._start=t.getTime(),u._iters=100,u._ii=0,'setTimeout'===u.props.type?(void 0!==u.props.dt&&u.props.dt<1?u._iters=5e3:void 0!==u.props.dt&&u.props.dt>20&&(u._iters=10),u._timerFn=function(){u._timerId=setTimeout(u._run,u.props.dt)}):'requestAnimationFrame'===u.props.type?u._timerFn=function(){u._rafId=requestAnimationFrame(u._run)}:'setImmediate'===u.props.type?(u._iters=5e3,u._timerFn=function(){u._immediateId=setImmediate(u._run)}):'setInterval'===u.props.type&&(u._iters=30,u._timerFn=null,u._intervalId=setInterval(u._run,u.props.dt))}if(u._ii>=u._iters&&null==u._intervalId){var n=(new Date).getTime()-u._start,l='Finished '+u._ii+' '+u.props.type+" calls.\nElapsed time: "+n+' ms\n'+n/u._ii+' ms / iter';return _.alert(l),u._start=0,void u.forceUpdate(function(){u._ii=0})}u._ii++,u._ii%(u._iters/5)==0&&u.forceUpdate(),u._timerFn&&(u._timerId=u._timerFn())},u.clear=function(){null!=u._intervalId&&(clearInterval(u._intervalId),u._intervalId=null,u._iters=u._ii,u._run())},u}return u(f,c),n(f,[{key:"render",value:function(){var t='fn'+(void 0!==this.props.dt?', '+this.props.dt:'');return o.createElement(p,{onPress:this._run},"Measure: ",this.props.type,"(",t,") - ",this._ii||0)}},{key:"componentWillUnmount",value:function(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null),null!=this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),null!=this._immediateId&&(clearImmediate(this._immediateId),this._immediateId=null),null!=this._intervalId&&(clearInterval(this._intervalId),this._intervalId=null)}}]),f})(o.Component);e.framework='React',e.title='Timers',e.description='A demonstration of Timers in React Native.',e.examples=[{title:'this.setTimeout(fn, t)',description:"Execute function fn t milliseconds in the future.  If t === 0, it will be enqueued immediately in the next event loop.  Larger values will fire on the closest frame.",render:function(){return o.createElement(h,null,o.createElement(E,{type:"setTimeout",dt:0}),o.createElement(E,{type:"setTimeout",dt:1}),o.createElement(E,{type:"setTimeout",dt:100}))}},{title:'this.requestAnimationFrame(fn)',description:'Execute function fn on the next frame.',render:function(){return o.createElement(h,null,o.createElement(E,{type:"requestAnimationFrame"}))}},{title:'this.requestIdleCallback(fn)',description:'Execute function fn on the next JS frame that has idle time',render:function(){return o.createElement(h,null,o.createElement(v,null))}},{title:'this.setImmediate(fn)',description:'Execute function fn at the end of the current JS event loop.',render:function(){return o.createElement(h,null,o.createElement(E,{type:"setImmediate"}))}},{title:'this.setInterval(fn, t)',description:"Execute function fn every t milliseconds until cancelled or component is unmounted.",render:function(){var c=(function(c){function _(){var n,u;t(this,_);for(var c=arguments.length,f=new Array(c),I=0;I<c;I++)f[I]=arguments[I];return(u=l(this,(n=s(_)).call.apply(n,[this].concat(f)))).state={showTimer:!0},u._renderTimer=function(){return o.createElement(h,null,o.createElement(E,{ref:function(t){return u._timerTester=t},dt:25,type:"setInterval"}),o.createElement(p,{onPress:function(){return u._timerTester&&u._timerTester.clear()}},"Clear interval"))},u._toggleTimer=function(){u.setState({showTimer:!u.state.showTimer})},u}return u(_,c),n(_,[{key:"render",value:function(){return o.createElement(h,null,this.state.showTimer&&this._renderTimer(),o.createElement(p,{onPress:this._toggleTimer},this.state.showTimer?'Unmount timer':'Mount new timer'))}}]),_})(o.Component);return o.createElement(c,null)}}]},666791,[3,4,5,8,9,11,15,666753,109]);