import{g as m,e as r}from"./Cookies-fbb6115f.js";class p{constructor(t,e,a,s,o){this.companyId=t,this.name=e,this.nit=a,this.email=s,this.companyState=o}set CompanyId(t){this.companyId=t}set Name(t){this.name=t}set NIT(t){this.nit=t}set Email(t){this.email=t}set CompanyState(t){this.companyState=t}get CompanyId(){return this.companyId}get Name(){return this.name}get NIT(){return this.nit}get Email(){return this.email}get CompanyState(){return this.companyState}}class y{constructor(t){this.message=t}set Message(t){this.message=t}get Message(){return this.message}}async function h(){const n="/admin/companies",t={method:"GET",headers:{Authorization:"Bearer "+m(r.AUTH_TOKEN_NAME),"Content-Type":"application/json"}},a=await(await fetch(r.API_URL+n,t)).json();let s=[];for(let o in a){let i=a[o];s.push(new p(i.companyId,i.name,i.nit,i.email,i.companyState))}return s}async function u(n){return c("/admin/company","POST",JSON.stringify(n))}async function g(n,t){const e="/admin/company/"+n;return c(e,"PUT",JSON.stringify(t))}async function l(n){const t="/admin/company/"+n;return c(t,"DELETE")}async function c(n,t,e){const a={method:t,headers:{Authorization:"Bearer "+m(r.AUTH_TOKEN_NAME),"Content-Type":"application/json"}};e&&(a.body=e),console.log(a);const s=await fetch(r.API_URL+n,a);console.log(s);const o=await s.json();return new y(o.message)}function C(n,t,e){return n&&n.length>=t&&n.length<=e}function f(n,t,e){return n&&n.toString().length>=t&&n.toString().length<=e}function E(n){return n&&!!n.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}function I(n){return n!==void 0&&n!==""&&n!==null}export{g as a,u as c,l as d,E as e,h as g,f as n,I as r,C as t};
