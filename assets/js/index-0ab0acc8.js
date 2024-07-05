import{u as e}from"./useApi-bdbde33e.js";import{d as t,e as a,Y as l,t as i,f as o,o as s,J as n,K as r,O as p,a as u,y as d}from"./@vue_runtime-core@3.2.47-371f6b9e.js";import{j as c,v as m,r as b,u as g,a as y}from"./@vue_reactivity@3.2.47-c13b9e33.js";import"./@vue_shared@3.2.47-5fd227e6.js";const h={class:"block_wrap quality_overflow"};function f(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)}const v=t({...t({name:"dictManage"}),setup(t){const{proxy:d}=e(),v=c({ids:[],queryData:{dictName:null,
// 字典名称
dictType:null,
// 字典类型
status:null,
// 字典状态
createDate:null},listTypeInfo:{statusList:[{label:"正常",key:!0},{label:"停用",key:!1}]},table:{currentPage:1,pageSize:10,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"dictId",label:"字典编号",minWidth:"140"},{prop:"dictName",label:"字典名称",minWidth:"200"},{prop:"dictType",label:"字典类型",minWidth:"120",render:(e,t)=>a(l("el-button"),{link:!0,type:"primary",onclick:()=>_(t)},f(e)?e:{default:()=>[e]})},{prop:"status",label:"状态",minWidth:"120",render:e=>{let t="",i="";switch(e){case 1:t="success",i="正常";break;case 0:t="danger",i="停用"}return a(l("el-tag"),{type:t},f(i)?i:{default:()=>[i]})}},{prop:"createTime",label:"创建时间",minWidth:"160"},{prop:"remark",label:"备注",minWidth:"200"}],operator:[{text:"编辑"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"120",label:"操作"}}}),W=i((()=>({dictName:{label:"字典名称",comp:"el-input"},dictType:{label:"字典类型",comp:"el-input"},createDate:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}},status:{label:"状态",comp:"t-select",isSelfCom:!0,bind:{optionSource:v.listTypeInfo.statusList}}}))),S=i((()=>{const{dictName:e,dictType:t,status:a,createDate:l}=m(v.queryData);return{dictName:e.value,
// 字典名称
dictType:t.value,
// 字典类型
status:a.value,
// 字典状态
beginTime:l.value&&l.value[0]?l.value[0]:null,endTime:l.value&&l.value[1]?l.value[1]:null,pageNum:v.table.currentPage,pageSize:v.table.pageSize}})),T=e=>{v.queryData=e,C()},w=e=>{v.ids=e.map((e=>e.operId))};o((()=>{C()}));const C=async()=>{const e=await(null==d?void 0:d.$api.dictList(S.value));e.success&&(v.table.data=e.data.rows,v.table.total=e.data.total)},k=e=>{v.table.pageSize=e,C()},x=e=>{v.table.currentPage=e,C()},_=e=>{j.value=!0,L()},j=b(!1),D=b({data:[],operator:[{text:"编辑"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:160,label:"操作"},columns:[{prop:"dictCode",label:"字典编码",minWidth:"140",fixed:!0},{prop:"dictLabel",label:"字典标签",minWidth:"200"},{prop:"dictValue",label:"字典键值",minWidth:"120"},{prop:"dictSort",label:"字典排序",minWidth:"120"},{prop:"statusLabel",label:"状态",minWidth:"160"},{prop:"createTime",label:"创建时间",minWidth:"180"},{prop:"remark",label:"备注",minWidth:"200"}]}),L=async()=>{const e=await d.$api.childDictList();e.success&&(D.value.data=e.data)};return(e,t)=>{const i=l("el-button"),o=l("t-table"),d=l("el-dialog"),c=l("t-adaptive-page");return s(),n(c,{title:"字典配置列表",isCopy:"",table:g(v).table,columns:g(v).table.columns,onSizeChange:k,onPageChange:x,onSelectionChange:w,opts:g(W),onSubmit:T},{toolbar:r((()=>[a(i,{type:"primary"},{default:r((()=>[p("清空")])),_:1}),a(i,{type:"danger",disabled:g(v).ids.length<1},{default:r((()=>[p("批量删除")])),_:1},8,["disabled"])])),default:r((()=>[a(d,{title:"字典数据列表",width:"60%",draggable:"",modelValue:g(j),"onUpdate:modelValue":t[0]||(t[0]=e=>y(j)?j.value=e:null)},{default:r((()=>[u("div",h,[a(o,{table:g(D),isCopy:"",columns:g(D).columns,isShowPagination:!1},null,8,["table","columns"])])])),_:1},8,["modelValue"])])),_:1},8,["table","columns","opts"])}}});export{v as default};
