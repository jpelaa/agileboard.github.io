(this["webpackJsonpagile-board"]=this["webpackJsonpagile-board"]||[]).push([[0],{33:function(a,t,e){a.exports=e(46)},38:function(a,t,e){},4:function(a,t,e){"use strict";var n=e(1);t.a=Object(n.a)({},{UPDATE_LOGIN_STATUS_BY_INDEX:"UPDATE_LOGIN_STATUS_BY_INDEX",UPDATE_USER_NAME:"UPDATE_USER_NAME",RESET_USERS:"RESET_USERS"},{},{ADD_NEW_TASK:"ADD_NEW_TASK",UPDATE_DESC:"UPDATE_DESC",DELETE_TASK:"DELETE_STATUS",ADD_NEW_COMMENTS_TO_TASK:"ADD_NEW_COMMENTS_TO_TASK"},{},{ADD_NEW_STATUS:"ADD_NEW_STATUS",DELETE_STATUS:"DELETE_STATUS",ADD_NEW_TASK_TO_STATUS:"ADD_NEW_TASK_TO_STATUS",SWAP_STATUS:"SWAP_STATUS",SWAP_TASKS_IN_SAME_STATUS:"SWAP_TASKS_IN_SAME_STATUS",ADD_TASKS_IN_DIFFERENT_STATUS:"ADD_TASKS_IN_DIFFERENT_STATUS",DELETE_TASK_IN_STATUS:"DELETE_TASK_IN_STATUS"},{},{ADD_NEW_COMMENTS:"ADD_NEW_COMMENTS"})},46:function(a,t,e){"use strict";e.r(t);var n=e(0),c=e.n(n),d=e(16),r=e.n(d),s=(e(38),e(15)),o=e(26),l=e(8),u=e(27),i=e(1),b=e(3),I=e(4),T={currentUser:"",userList:[{username:"karthick",nickname:"kk",isLoggedIn:!1,role:1,password:"123",project:1},{username:"prasath",nickname:"pr",isLoggedIn:!1,role:2,password:"123",project:1},{username:"manoj",nickname:"ms",isLoggedIn:!1,role:2,password:"123",project:1},{username:"siva",nickname:"ss",isLoggedIn:!1,role:2,password:"123",project:1}]},S=e(5),_=e(48),E={sprintName:"SPRINT 1",allIds:[],byId:{}},O={allIds:[],byId:{}},p={allIds:[],byId:{}},y=Object(l.combineReducers)({users:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.a.UPDATE_LOGIN_STATUS_BY_INDEX:var e=Object(b.a)(a.userList);return e[t.payload].isLoggedIn=!0,Object(i.a)({},a,{userList:Object(b.a)(e)});case I.a.UPDATE_USER_NAME:return Object(i.a)({},a,{currentUser:t.payload});case I.a.RESET_USERS:return Object(i.a)({},T);default:return a}},status:function(){var a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.a.ADD_NEW_STATUS:var n=Object(_.a)();return Object(i.a)({},t,{allIds:[].concat(Object(b.a)(t.allIds),[n]),byId:Object(i.a)({},t.byId,Object(S.a)({},n,{id:n,title:e.payload,tasks:[]}))});case I.a.ADD_NEW_TASK_TO_STATUS:return Object(i.a)({},t,{byId:Object(i.a)({},t.byId,Object(S.a)({},e.payload.statusId,Object(i.a)({},t.byId[e.payload.statusId],{tasks:[].concat(Object(b.a)(t.byId[e.payload.statusId].tasks),[e.payload.taskId])})))});case I.a.SWAP_STATUS:var c=Object(b.a)(t.allIds),d=c.findIndex((function(a){return a===e.payload.dropStatusId})),r=c.findIndex((function(a){return a===e.payload.dragStatusId})),s=[c[r],c[d]];return c[d]=s[0],c[r]=s[1],Object(i.a)({},t,{allIds:c});case I.a.SWAP_TASKS_IN_SAME_STATUS:var o=Object(i.a)({},t.byId[e.payload.statusId]),l=Object(b.a)(o.tasks),u=l.findIndex((function(a){return a===e.payload.dropTaskId})),T=l.findIndex((function(a){return a===e.payload.dragTaskId})),O=[l[T],l[u]];return l[u]=O[0],l[T]=O[1],o.tasks=l,Object(i.a)({},t,{byId:Object(i.a)({},t.byId,Object(S.a)({},e.payload.statusId,Object(i.a)({},o)))});case I.a.ADD_TASKS_IN_DIFFERENT_STATUS:var p=Object(i.a)({},t.byId[e.payload.dragStatusId]),y=Object(i.a)({},t.byId[e.payload.dropStatusId]);if(p.tasks=p.tasks.filter((function(a){return a!==e.payload.dragTaskId})),e.payload.dropTaskId){var j=y.tasks.findIndex((function(a){return a===e.payload.dropTaskId}));y.tasks=[].concat(Object(b.a)(y.tasks.slice(0,j)),[e.payload.dragTaskId],Object(b.a)(y.tasks.slice(j)))}else y.tasks=[].concat(Object(b.a)(y.tasks),[e.payload.dragTaskId]);return Object(i.a)({},t,{byId:Object(i.a)({},t.byId,(a={},Object(S.a)(a,e.payload.dragStatusId,Object(i.a)({},p)),Object(S.a)(a,e.payload.dropStatusId,Object(i.a)({},y)),a))});case I.a.DELETE_STATUS:return Object(i.a)({},t,{allIds:Object(b.a)(t.allIds.filter((function(a){return a!==e.payload}))),byId:Object(i.a)({},t.byId,Object(S.a)({},e.payload,void 0))});case I.a.DELETE_TASK_IN_STATUS:return Object(i.a)({},t,{byId:Object(i.a)({},t.byId,Object(S.a)({},e.payload.statusId,Object(i.a)({},t.byId[e.payload.statusId],{tasks:t.byId[e.payload.statusId].tasks.filter((function(a){return a!==e.payload.taskId}))})))});default:return t}},tasks:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.a.SWAP_TASKS:var e=Object(b.a)(a.taskList),n=e.findIndex((function(a){return a.taskId===t.payload.dropTaskId})),c=e.findIndex((function(a){return a.taskId===t.payload.dragTaskId})),d=Object(i.a)({},e[c]);return e[c]=Object(i.a)({},e[n]),e[n]=d,Object(i.a)({},a,{taskList:Object(b.a)(e)});case I.a.MOVE_TASK:var r=Object(b.a)(a.taskList),s=r.findIndex((function(a){return a.taskId===t.payload.taskId}));return r[s].status=t.payload.statusId,Object(i.a)({},a,{taskList:Object(b.a)(r)});case I.a.MOVE_TASK_COMPLETE:return Object(i.a)({},a,{taskList:Object(b.a)(a.taskList.map((function(a){return Object(i.a)({},a,{status:5})})))});case I.a.ADD_NEW_TASK:return Object(i.a)({},a,{allIds:[].concat(Object(b.a)(a.allIds),[t.payload.taskId]),byId:Object(i.a)({},a.byId,Object(S.a)({},t.payload.taskId,Object(i.a)({},t.payload)))});case I.a.DELETE_TASK:return Object(i.a)({},a,{allIds:Object(b.a)(a.allIds.filter((function(a){return a!==t.payload}))),byId:Object(i.a)({},a.byId,Object(S.a)({},t.payload,void 0))});case I.a.UPDATE_DESC:return Object(i.a)({},a,{byId:Object(i.a)({},a.byId,Object(S.a)({},t.payload.taskId,Object(i.a)({},a.byId[t.payload.taskId],{description:t.payload.description})))});case I.a.ADD_NEW_COMMENTS_TO_TASK:return Object(i.a)({},a,{byId:Object(i.a)({},a.byId,Object(S.a)({},t.payload.taskId,Object(i.a)({},a.byId[t.payload.taskId],{comments:[].concat(Object(b.a)(a.byId[t.payload.taskId].comments),[t.payload.commentId])})))});default:return a}},comments:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.a.ADD_NEW_COMMENTS:return Object(i.a)({},a,{allIds:[].concat(Object(b.a)(a.allIds),[t.payload.id]),byId:Object(i.a)({},a.byId,Object(S.a)({},t.payload.id,Object(i.a)({},t.payload,{createdDate:new Date})))});default:return a}}}),j=e(28),A=e(22),D=e(29),m=e.n(D),f=e(30),k=e.n(f),N={key:"root",storage:m.a,stateReconciler:k.a},h=Object(A.a)(N,y),U=Object(l.applyMiddleware)(u.a),g=Object(l.createStore)(h,Object(j.composeWithDevTools)(U)),v=Object(A.b)(g),L=e(31),K=e(13),W=function(){return c.a.createElement("div",{className:"loader"},"Loading....")},M=[{name:"login",path:"/login",component:Object(n.lazy)((function(){return e.e(4).then(e.bind(null,60))})),exact:!0,authentication:!1},{name:"dashboard",path:"/home",component:Object(n.lazy)((function(){return e.e(3).then(e.bind(null,59))})),exact:!1,authentication:!0},{name:"completed",path:"/completed",component:Object(n.lazy)((function(){return e.e(5).then(e.bind(null,58))})),exact:!1,authentication:!0},{name:"default",path:["/","/index.html"],default:!0}],P=c.a.memo((function(a){var t=a.isAuthenticated;return c.a.createElement(n.Suspense,{fallback:c.a.createElement(W,null)},c.a.createElement(L.a,{basepath:"/"},c.a.createElement(K.d,null,M.map((function(a,e){return c.a.createElement(K.b,{key:a.key||e,path:a.path,exact:a.exact,render:function(e){if(a.authentication&&"/login"!==a.path){if(t)return c.a.createElement(a.component,Object.assign({},e,{routes:a.routes}));if(!t)return c.a.createElement(K.a,{to:"/login"})}if(!a.authentication)if("/login"===a.path){if(t)return c.a.createElement(K.a,{to:"/home"});if(!t)return c.a.createElement(a.component,e)}else{if(!a.default)return c.a.createElement(a.component,e);if(t)return c.a.createElement(K.a,{to:"/home"});if(!t)return c.a.createElement(K.a,{to:"/login"})}}})})))))})),x=Object(s.b)((function(a){return{isAuthenticated:a.users.currentUser.length>0}}),null)(P),R=function(){return c.a.createElement(s.a,{store:g},c.a.createElement(o.PersistGate,{loading:c.a.createElement(W,null),persistor:v},c.a.createElement(x,null)))};r.a.render(c.a.createElement(R,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.badf90d6.chunk.js.map