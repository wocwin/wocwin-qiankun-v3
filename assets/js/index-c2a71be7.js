import{u as e}from"./useApi-bdbde33e.js";import{d as a,e as t,Y as l,t as o,f as r,o as n,J as i,K as s,O as u}from"./@vue_runtime-core@3.2.47-371f6b9e.js";import{j as p,v as d,u as m}from"./@vue_reactivity@3.2.47-c13b9e33.js";import"./@vue_shared@3.2.47-5fd227e6.js";const c=a({...a({name:"roleManageList"}),setup(a){const{proxy:c}=e(),b=()=>{},g=()=>{},v=p({roleIds:[],queryData:{roleName:void 0,
// 角色名称
roleKey:void 0,
// 权限字符
date:null},table:{currentPage:1,pageSize:15,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"roleName",label:"角色名称",minWidth:120},{prop:"roleKey",label:"权限字符",minWidth:120},{prop:"createTime",label:"创建时间",minWidth:140},{prop:"status",label:"状态",render:(e,a)=>t(l("el-switch"),{"active-value":!0,modelValue:a.status,"onUpdate:modelValue":e=>a.status=e,"inactive-value":!1,onChange:()=>f(a)},null)}],operator:[{text:"编辑",fun:e=>{}},{text:"删除",fun:e=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:"180",label:"操作"}}}),y=o((()=>({roleName:{label:"角色名称",comp:"el-input"},roleKey:{label:"权限字符",comp:"el-input"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),h=o((()=>{const{roleName:e,roleKey:a,date:t}=d(v.queryData);return{roleName:e.value,roleKey:a.value,beginTime:t.value&&t.value[0]?t.value[0]:null,endTime:t.value&&t.value[1]?t.value[1]:null,pageNum:v.table.currentPage,pageSize:v.table.pageSize}})),f=e=>{},C=e=>{v.queryData=e,K()},S=e=>{v.ids=e.map((e=>e.operId))};r((()=>{K()}));const K=async()=>{const e=await c.$api.roleList(h.value);e.success&&(v.table.data=e.data.rows,v.table.total=e.data.total)},N=e=>{v.table.pageSize=e,K()},_=e=>{v.table.currentPage=e,K()};return(e,a)=>{const o=l("el-button"),r=l("t-adaptive-page");return n(),i(r,{title:"角色管理列表",isCopy:"",table:m(v).table,columns:m(v).table.columns,onSelectionChange:S,onSizeChange:N,onPageChange:_,opts:m(y),onSubmit:C},{toolbar:s((()=>[t(o,{type:"primary",onClick:b},{default:s((()=>[u("新增")])),_:1}),t(o,{type:"danger",disabled:m(v).roleIds.length<1,onClick:g},{default:s((()=>[u("批量删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns","opts"])}}});export{c as default};
