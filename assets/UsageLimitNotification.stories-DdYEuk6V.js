import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DAYtFXoS.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{Yt as i,y as a}from"./Icons-DD_LdCfu.js";import{r as o,t as s}from"./Button-BrqXI0VI.js";import{n as c,t as l}from"./Checkbox-Bjh9CW5k.js";import{n as u,t as d}from"./Tooltip-BKaasVA_.js";import{n as f,t as p}from"./Dropdown-CM_8kEcQ.js";import{n as ee,t as m}from"./Icon-CQJLTGgT.js";import{n as h,t as g}from"./Input-ClYcqrQQ.js";import{n as te,t as ne}from"./Switch-GLodiwMM.js";import{n as re,t as ie}from"./MergeField-Bedgn5OF.js";import{n as _,t as ae}from"./Modal-BsjBQHe9.js";import{n as oe,t as se}from"./Tags-BxCVa2wZ.js";import{n as v,t as ce}from"./NextGenTopBand-Cy1-Ojx4.js";import{n as y,t as le}from"./Table-VnZn9GDV.js";import{n as ue,t as de}from"./Tabs-CvOn2Wo-.js";import{i as b,n as x,r as fe,t as pe}from"./setupMenuItems-C7V5wjFu.js";import{n as S,t as me}from"./TemplateDialog-Bs2tsped.js";var C=e((()=>{})),w,T,E,D=e((()=>{w={api:{label:`API`,recordNoun:`API calls`,blank:!1,properties:[{name:`free_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits included free with your edition. Read from your subscription when the check runs, so it follows an upgrade by itself.`},{name:`paid_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits you have purchased on top of the free allowance.`},{name:`overall_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Free plus paid credits. Surge capacity is not included.`},{name:`free_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`free_limit`],description:`Free credits spent so far this cycle. Resets when the cycle rolls over.`},{name:`paid_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`paid_limit`],description:`Purchased credits spent so far this cycle. Only starts moving once the free allowance is gone.`},{name:`overall_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`overall_limit`],description:`All credits spent so far this cycle, across every tier.`},{name:`paid_credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`paid_limit`],description:`Paid credits charged by one API call. A bulk read costs more than a single record fetch.`},{name:`credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`overall_limit`,`paid_limit`],description:`Credits charged by one API call across every tier.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one API call took to serve, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the call returned. Count it alongside a condition to alert on failures — for example, calls where status is at least 500.`}]},functions:{label:`Functions`,recordNoun:`executions`,blank:!1,properties:[{name:`execution_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Function executions included in your plan for the current cycle.`},{name:`executions_used_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`execution_limit`],description:`Executions consumed so far this cycle. Resets when the cycle rolls over.`},{name:`credits_used_per_execution`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Credits charged by one function run. Heavier functions cost more per run.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one execution took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Whether the run succeeded or failed. Count it alongside a condition to alert on failing functions.`}]},webhooks:{label:`Webhooks`,recordNoun:`webhook calls`,blank:!1,properties:[{name:`webhook_limit`,kind:`constant`,unit:`call`,aggs:[],description:`Webhook calls your edition allows per day.`},{name:`webhook_calls_today`,kind:`total`,unit:`call`,aggs:[`max`],limits:[`webhook_limit`],description:`Webhook calls fired so far today. Resets at midnight in your org’s time zone.`},{name:`response_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the receiving endpoint took to respond, in milliseconds.`},{name:`retries_per_call`,kind:`event`,unit:`retry`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Retries needed before a call succeeded or was dropped.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the endpoint returned. Count it alongside a condition to alert on failing endpoints.`}]},email_notifications:{label:`Email notifications`,recordNoun:`emails`,blank:!1,properties:[{name:`email_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Emails your org may send per day, set by edition and user count.`},{name:`emails_sent_today`,kind:`total`,unit:`email`,aggs:[`max`],description:`Emails sent so far today. Resets at midnight in your org’s time zone.`},{name:`recipients_per_email`,kind:`event`,unit:`recipient`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Recipients on one email. A mass email to a large view produces a single record with a high value.`},{name:`bounces_per_email`,kind:`event`,unit:`bounce`,aggs:[`sum`,`count`,`avg`],description:`Bounces recorded against one send.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Delivered, bounced or failed. Count it alongside a condition to alert on delivery problems.`}]},data_storage:{label:`Data storage`,recordNoun:`storage events`,blank:!1,properties:[{name:`storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Total storage included in your plan.`},{name:`storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`storage_limit`],description:`Storage your org occupies right now, across all modules. Only goes down when data is deleted.`},{name:`storage_used_per_operation`,kind:`event`,unit:`gigabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`storage_limit`],description:`Storage added by one operation — an import, a bulk create or a single record create.`}]},file_storage:{label:`File storage`,recordNoun:`uploads`,blank:!1,properties:[{name:`file_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`File storage included in your plan, across attachments, documents and inline images.`},{name:`file_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`file_storage_limit`],description:`File storage your org occupies right now. Only goes down when files are deleted.`},{name:`file_size_per_upload`,kind:`event`,unit:`megabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Size of one uploaded file, in megabytes.`}]},email_parser:{label:`Email parser`,recordNoun:`parsed emails`,blank:!1,properties:[{name:`parser_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Inbound emails your plan lets the parser process in a cycle.`},{name:`emails_parsed_this_cycle`,kind:`total`,unit:`email`,aggs:[`max`],limits:[`parser_limit`],description:`Inbound emails parsed so far this cycle. Resets when the cycle rolls over.`},{name:`parse_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the parser took to read one email, in milliseconds.`},{name:`fields_extracted`,kind:`event`,unit:`field`,aggs:[`sum`,`count`,`avg`,`min`],description:`Fields the parser pulled out of one email. A low value can mean the template no longer matches.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Parsed or failed. Count it alongside a condition to alert on emails the parser could not read.`}]},zoho_flow:{label:`Actions by Zoho Flow`,recordNoun:`flow actions`,blank:!1,properties:[{name:`task_limit`,kind:`constant`,unit:`task`,aggs:[],description:`Flow tasks included in your plan for the current cycle.`},{name:`tasks_used_this_cycle`,kind:`total`,unit:`task`,aggs:[`max`],limits:[`task_limit`],description:`Tasks consumed so far this cycle. Resets when the cycle rolls over.`},{name:`tasks_per_run`,kind:`event`,unit:`task`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Tasks consumed by one flow run. Flows with many steps cost more.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one flow action took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Succeeded or failed. Count it alongside a condition to alert on failing flows.`}]},circuits:{label:`Circuits`,recordNoun:`circuit runs`,blank:!1,properties:[{name:`circuit_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Circuit executions included in your plan for the current cycle.`},{name:`circuit_runs_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`circuit_limit`],description:`Circuit executions so far this cycle. Resets when the cycle rolls over.`},{name:`steps_per_run`,kind:`event`,unit:`step`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Steps one circuit run went through.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one circuit run took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Completed, failed or timed out. Count it alongside a condition to alert on failing circuits.`}]},mail_merge:{label:`Mail merge email`,recordNoun:`merges`,blank:!1,properties:[{name:`merge_limit`,kind:`constant`,unit:`merge`,aggs:[],description:`Mail merges your org can run per day. The limit is the same in every edition, and extra merges can be purchased.`},{name:`merges_used_today`,kind:`total`,unit:`merge`,aggs:[`max`],limits:[`merge_limit`],description:`Merges run so far today. Both the mail merge action and print preview from a mail merge template count.`}]},export:{label:`Export`,recordNoun:`exports`,blank:!1,properties:[{name:`export_limit`,kind:`constant`,unit:`export`,aggs:[],description:`Exports your org can start per day. It depends on the edition, from 10 on Free up to 1,000 on Ultimate.`},{name:`exports_today`,kind:`total`,unit:`export`,aggs:[`max`],limits:[`export_limit`],description:`Exports started so far today. Resets daily.`}]},email_storage:{label:`Email storage`,recordNoun:`emails`,blank:!1,properties:[{name:`email_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Email storage for the org: 5 GB per user, up to 500 GB, pooled across all users. It is separate from Zoho Mail storage.`},{name:`email_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`email_storage_limit`],description:`Storage used by emails kept in CRM, content and attachments, across all users. It goes down when emails are deleted.`},{name:`email_size`,kind:`event`,unit:`megabyte`,aggs:[`avg`,`max`,`min`,`sum`,`count`],description:`Size of one stored email, including its attachments.`}]},data_backup:{label:`Data backup`,recordNoun:`backups`,blank:!1,properties:[{name:`backup_limit`,kind:`constant`,unit:`backup`,aggs:[],description:`Free backups per month: 2 on Standard, Professional and Enterprise, and 4 on Ultimate. Extra backups are paid.`},{name:`backups_used_this_month`,kind:`total`,unit:`backup`,aggs:[`max`],limits:[`backup_limit`],description:`Backups taken so far this month. Resets each month.`}]},data_enrichment:{label:`Data enrichment`,recordNoun:`enrichments`,blank:!1,properties:[{name:`enrichment_limit`,kind:`constant`,unit:`record`,aggs:[],description:`Records Zia can enrich per month: 500 per user license on Enterprise and 2,000 on Ultimate, up to 50,000 records.`},{name:`records_enriched_this_month`,kind:`total`,unit:`record`,aggs:[`max`],limits:[`enrichment_limit`],description:`Records enriched so far this month, across all modules. Resets each month.`}]},kiosk:{label:`Kiosk`,recordNoun:`kiosks`,blank:!0,properties:[{name:`kiosk_limit`,kind:`constant`,unit:`kiosk`,aggs:[],description:`Kiosks your org can create: 2 on Standard, 7 on Professional, 25 on Enterprise, and 50 on Ultimate, CRM Plus and Zoho One.`},{name:`kiosk_component_limit`,kind:`constant`,unit:`component`,aggs:[],description:`Components allowed in a single kiosk.`},{name:`kiosks_created`,kind:`total`,unit:`kiosk`,aggs:[`max`],limits:[`kiosk_limit`],description:`Kiosks created so far. It goes down when a kiosk is deleted.`},{name:`components_per_kiosk`,kind:`event`,unit:`component`,aggs:[`max`,`min`,`avg`,`count`],limits:[`kiosk_component_limit`],description:`Components in one kiosk when it is saved.`}]}},T={free_limit:25e3,paid_limit:1e5,overall_limit:125e3,execution_limit:1e5,storage_limit:500,email_limit:1e4,webhook_limit:5e4,file_storage_limit:200,parser_limit:5e3,task_limit:2e4,circuit_limit:1e4,merge_limit:1e3,export_limit:500,email_storage_limit:50,backup_limit:4,enrichment_limit:5e4,kiosk_limit:25,kiosk_component_limit:50},E={gigabyte:`GB`,megabyte:`MB`,millisecond:`ms`,credit:`credits`,execution:`executions`,email:`emails`,recipient:`recipients`,bounce:`bounces`,call:`calls`,retry:`retries`,task:`tasks`,step:`steps`,field:`fields`,merge:`merges`,export:`exports`,record:`records`,backup:`backups`,kiosk:`kiosks`,component:`components`}})),he=e((()=>{}));function ge({value:e,onSave:t,onClose:n}){let[r,i]=(0,O.useState)(e),[a,o]=(0,O.useState)(`users`),[s,c]=(0,O.useState)(``),[l,u]=(0,O.useState)({users:!1,groups:!1}),d=r.filter(e=>e.kind===`user`),f=r.filter(e=>e.kind===`group`),ee=e=>i(t=>t.some(t=>t.value===e.value)?t.filter(t=>t.value!==e.value):[...t,e]),m=e=>i(t=>t.filter(t=>t.value!==e)),h=(a===`users`?A.map(e=>({value:`user:${e.id}`,label:e.name,detail:e.email,kind:`user`})):j.map(e=>({value:`group:${e.id}`,label:e.name,detail:`${e.members.length} users`,kind:`group`}))).filter(e=>`${e.label} ${e.detail}`.toLowerCase().includes(s.trim().toLowerCase())),g=(e,t,n=!1)=>(0,k.jsxs)(`span`,{className:`usage-recipient-chip`,children:[(0,k.jsx)(`span`,{className:`usage-recipient-avatar`,"aria-hidden":`true`,children:M(t)}),t,n&&(0,k.jsx)(`button`,{type:`button`,"aria-label":`Remove ${t}`,onClick:()=>m(e),children:`×`})]},e);return(0,k.jsx)(ae,{isOpen:!0,title:`Select Users`,width:1088,className:`usage-recipient-modal`,onClose:n,onCancel:n,onSave:()=>t(r),cancelLabel:`Cancel`,saveLabel:`Save`,children:(0,k.jsxs)(`div`,{className:`usage-recipient-picker`,children:[(0,k.jsxs)(`section`,{className:`usage-recipient-directory`,"aria-label":`Recipient directory`,children:[(0,k.jsxs)(`div`,{className:`usage-recipient-search-row`,children:[(0,k.jsx)(p,{layout:`vertical`,width:100,triggerAriaLabel:`Recipient type`,value:a,options:[{value:`users`,label:`Users`},{value:`groups`,label:`Groups`}],onChange:e=>{o(e),c(``)}}),(0,k.jsxs)(`label`,{className:`usage-recipient-search`,children:[(0,k.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,k.jsx)(`circle`,{cx:`6.5`,cy:`6.5`,r:`4.5`,stroke:`currentColor`}),(0,k.jsx)(`path`,{d:`m10 10 4 4`,stroke:`currentColor`})]}),(0,k.jsx)(`input`,{type:`search`,"aria-label":`Search recipients`,placeholder:`Search`,value:s,onChange:e=>c(e.target.value)})]})]}),(0,k.jsxs)(`div`,{className:`usage-recipient-results`,children:[h.map(e=>(0,k.jsxs)(`button`,{type:`button`,className:`usage-recipient-result`,"aria-pressed":r.some(t=>t.value===e.value),onClick:()=>ee(e),children:[(0,k.jsx)(`span`,{className:`usage-recipient-avatar`,"aria-hidden":`true`,children:M(e.label)}),(0,k.jsxs)(`span`,{className:`usage-recipient-person`,children:[(0,k.jsx)(`span`,{children:e.label}),(0,k.jsx)(`span`,{children:e.detail})]}),r.some(t=>t.value===e.value)&&(0,k.jsx)(`span`,{"aria-hidden":`true`,children:`✓`})]},e.value)),!h.length&&(0,k.jsx)(`p`,{className:`usage-recipient-empty`,children:`No recipients found`})]})]}),(0,k.jsxs)(`section`,{className:`usage-recipient-selections`,"aria-label":`Selected recipients`,"aria-live":`polite`,children:[(0,k.jsxs)(`div`,{className:`usage-recipient-section`,children:[(0,k.jsxs)(`button`,{type:`button`,className:`usage-recipient-section-heading`,"aria-expanded":!l.users,onClick:()=>u(e=>({...e,users:!e.users})),children:[`Users - `,d.length,(0,k.jsx)(`span`,{"aria-hidden":`true`,children:l.users?`⌄`:`⌃`})]}),!l.users&&(0,k.jsxs)(`div`,{className:`usage-recipient-chips`,children:[d.map(e=>g(e.value,e.label,!0)),!d.length&&(0,k.jsx)(`span`,{className:`usage-recipient-empty`,children:`Select users from the list`})]})]}),(0,k.jsxs)(`div`,{className:`usage-recipient-section`,children:[(0,k.jsxs)(`button`,{type:`button`,className:`usage-recipient-section-heading`,"aria-expanded":!l.groups,onClick:()=>u(e=>({...e,groups:!e.groups})),children:[`Groups`,f.length?` - ${f.length}`:``,(0,k.jsx)(`span`,{"aria-hidden":`true`,children:l.groups?`⌄`:`⌃`})]}),!l.groups&&(0,k.jsxs)(`div`,{className:`usage-recipient-groups`,children:[f.map(e=>{let t=j.find(t=>`group:${t.id}`===e.value);return(0,k.jsxs)(`div`,{className:`usage-recipient-group`,children:[(0,k.jsxs)(`div`,{className:`usage-recipient-group-heading`,children:[t.name,` - `,t.members.length,(0,k.jsx)(`button`,{type:`button`,"aria-label":`Remove ${t.name}`,onClick:()=>m(e.value),children:`×`})]}),(0,k.jsx)(`div`,{className:`usage-recipient-chips`,children:t.members.map(e=>{let t=A.find(t=>t.id===e);return g(e,t.name)})})]},t.id)}),!f.length&&(0,k.jsx)(`span`,{className:`usage-recipient-empty`,children:`Select groups from the list`})]})]})]})]})})}var O,k,A,j,M,N=e((()=>{O=t(n(),1),_(),f(),he(),k=r(),A=[{id:`esther`,name:`Esther Howard`,email:`nevaeh.simmons@example.com`},{id:`jacob`,name:`Jacob Jones`,email:`tim.jennings@example.com`},{id:`albert`,name:`Albert Flores`,email:`nathan.roberts@example.com`},{id:`divakar`,name:`Divakar Ganapathy`,email:`divakar.ganapathy@example.com`},{id:`marvin`,name:`Marvin McKinney`,email:`michael.mitc@example.com`},{id:`louisa`,name:`Louisa Grand`,email:`louisa.grand@example.com`},{id:`darlene`,name:`Darlene Robertson`,email:`darlene.robertson@example.com`},{id:`prakash`,name:`Prakash Sekar`,email:`prakash.sekar@example.com`},{id:`cisco`,name:`Cisco Webex Teams`,email:`cisco.webex@example.com`},{id:`wade`,name:`Wade Warren`,email:`wade.warren@example.com`},{id:`devon`,name:`Devon Lane`,email:`devon.lane@example.com`},{id:`arlene`,name:`Arlene McCoy`,email:`arlene.mccoy@example.com`},{id:`floyd`,name:`Floyd Miles`,email:`floyd.miles@example.com`},{id:`guy`,name:`Guy Hawkins`,email:`guy.hawkins@example.com`},{id:`theresa`,name:`Theresa Webb`,email:`theresa.webb@example.com`}],j=[{id:`visual`,name:`Visual Design`,members:[`prakash`,`divakar`,`cisco`,`wade`,`devon`,`arlene`,`floyd`]},{id:`product`,name:`Product Management`,members:[`marvin`,`floyd`,`guy`,`theresa`]}],M=e=>e.split(` `).slice(0,2).map(e=>e[0]).join(``),ge.__docgenInfo={description:``,methods:[],displayName:`UsageRecipientDialog`,props:{value:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ value: string; label: string; kind: 'user' | 'group' }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'user' | 'group'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`}],required:!0}}]}}],raw:`UsageRecipient[]`},description:``},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: UsageRecipient[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ value: string; label: string; kind: 'user' | 'group' }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'user' | 'group'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`}],required:!0}}]}}],raw:`UsageRecipient[]`},name:`value`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));function P(e){return Ce[e]??e.split(`_`).map((e,t)=>R[e]??(t>0&&[`per`,`this`].includes(e)?e:e.charAt(0).toUpperCase()+e.slice(1))).join(` `)}function F(e){return w[e]?.properties.filter(e=>e.kind!==`constant`&&!e.noAgg)??[]}function _e(e=``){let t=F(e)[0];return{feature:e,measure:t?.name??``,calculation:t?.aggs[0]??``,constant:t?.limits?.[0]??``,mode:t?.limits?.length?`pct`:`val`,comparator:`gt`,value:t?.limits?.length?`80`:`90000`,valueTo:t?.limits?.length?`100`:`100000`,windowValue:`12`,windowUnit:`hours`,interval:`hour:1`}}function I(e){return F(e.feature).find(t=>t.name===e.measure)}function ve(e,t){let n=I(e),r=F(e.feature).find(e=>e.name===t);if(!r)return e;let i=r.kind===n?.kind&&r.aggs.includes(e.calculation)?e.calculation:r.aggs[0],a=r.limits?.length?e.mode:`val`;return{...e,measure:t,calculation:i,constant:r.limits?.[0]??``,mode:a,value:a===e.mode?e.value:a===`pct`?`80`:`90000`,valueTo:a===e.mode?e.valueTo:a===`pct`?`100`:`100000`}}function L(e){let t=I(e);return!!t&&!([`data_storage`,`file_storage`,`email_storage`,`mail_merge`].includes(e.feature)&&(t.kind===`total`||e.calculation===`sum`))}function ye(e){let t=I(e);return e.calculation===`count`?w[e.feature].recordNoun:E[t?.unit??``]??``}function be(e){let t=w[e.feature];if(!t)return`Select a feature.`;if(t.blank)return;let n=I(e);if(!n||!n.aggs.includes(e.calculation))return`Select a supported measure and calculation.`;let r=[`bt`,`nb`].includes(e.comparator);if(!z.some(t=>t.value===e.comparator))return`Select a comparison.`;if(e.mode===`pct`&&!n.limits?.includes(e.constant))return`Select a supported allocation limit.`;if((r?[e.value,e.valueTo]:[e.value]).some(t=>t.trim()===``||!Number.isFinite(Number(t))||(e.mode===`pct`?Number(t)<=0||Number(t)>500:Number(t)<0)))return e.mode===`pct`?`Enter a percentage greater than 0 and up to 500.`:`Enter a value of zero or greater.`;if(r&&Number(e.value)>Number(e.valueTo))return`From can’t be greater than To.`;if(L(e)&&(!Number.isInteger(Number(e.windowValue))||Number(e.windowValue)<1||!V[e.windowUnit]||Number(e.windowValue)>V[e.windowUnit]))return`Enter a whole-number window between 1 and ${V[e.windowUnit]} ${e.windowUnit}.`;if(!B.some(t=>t.value===e.interval))return`Select a notification interval.`}function xe(e){let t=I(e);if(!t||w[e.feature].blank)return``;let n=e=>(Math.round(e*100)/100).toLocaleString(`en-US`),r=[`bt`,`nb`].includes(e.comparator)?[e.value,e.valueTo]:[e.value],i=t.kind===`total`?`Current ${P(t.name)}`:`${we[e.calculation]} of ${P(t.name)}`,a=r.map(e=>n(Number(e))).join(` and `);if(e.mode===`pct`){let i=T[e.constant];a=r.map(e=>`${n(Number(e))}%`).join(` and `)+` of ${P(e.constant)}`,i!=null&&(a+=` (${r.map(e=>n(Number(e)/100*i)).join(` and `)} ${E[t.unit??``]??``})`)}else a+=` ${ye(e)}`;let o=L(e)?` within the last ${e.windowValue} ${Number(e.windowValue)===1?e.windowUnit.replace(/s$/,``):e.windowUnit}`:``,s=B.find(t=>t.value===e.interval)?.label??``;return`Alert when ${i} ${Ee[e.comparator]} ${a}${o}. You’ll be notified at most once every ${s}.`}function Se(e){let t=I(e);if(!t||w[e.feature]?.blank)return`#Feature usage alert.`;let n=z.find(t=>t.value===e.comparator)?.label??`>`;return`#Feature: ${t.kind===`total`?``:`#Calculation `}#Measure ${n} #Threshold${e.mode===`pct`?`% of #Limit`:``}${L(e)?` in #Window`:``}.`}var Ce,R,we,z,B,Te,V,Ee,De,H=e((()=>{D(),Ce={webhook_calls_today:`Webhook Calls`,emails_sent_today:`Emails Sent`,merges_used_today:`Total Merges`,exports_today:`Total Exports`,backups_used_this_month:`Backups Used`,records_enriched_this_month:`Records Enriched`,free_credits_used_this_cycle:`Free Credits Used`,paid_credits_used_this_cycle:`Paid Credits Used`,overall_credits_used_this_cycle:`Overall Credits Used`},R={api:`API`,uri:`URI`,oauth:`OAuth`},we={count:`Count`,count_distinct:`Distinct count`,sum:`Total`,avg:`Average`,max:`Maximum`,min:`Minimum`},z=[{value:`eq`,label:`=`},{value:`ne`,label:`!=`},{value:`lt`,label:`<`},{value:`gt`,label:`>`},{value:`bt`,label:`between`},{value:`nb`,label:`not between`}],B=[{value:`minute:15`,label:`15 minutes`},{value:`minute:30`,label:`30 minutes`},{value:`minute:45`,label:`45 minutes`},{value:`hour:1`,label:`1 hour`},{value:`hour:2`,label:`2 hours`},{value:`hour:4`,label:`4 hours`},{value:`hour:8`,label:`8 hours`},{value:`hour:12`,label:`12 hours`},{value:`hour:24`,label:`24 hours`}],Te=[{value:`minutes`,label:`Minutes`},{value:`hours`,label:`Hours`},{value:`days`,label:`Days`}],V={minutes:60,hours:24,days:30},Ee={eq:`equals`,ne:`doesn’t equal`,lt:`is less than`,gt:`is greater than`,bt:`is between`,nb:`is not between`},De=[{value:`Feature`,label:`Feature`},{value:`Measure`,label:`Based on`},{value:`Calculation`,label:`Calculation`},{value:`Threshold`,label:`Threshold`},{value:`Limit`,label:`Allocation limit`},{value:`Window`,label:`Time window`}]}));function U({label:e,children:t,align:n=`center`,labelOffset:r}){let i=r===void 0?n===`start`?2:0:r;return(0,G.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${K} auto`,columnGap:20,alignItems:n},children:[(0,G.jsx)(`span`,{style:{...q,paddingTop:i},children:e}),(0,G.jsx)(`div`,{"data-usage-field":e?``:void 0,style:{minWidth:0,width:e?`max-content`:void 0},children:t})]})}var W,G,Oe,ke,Ae,je,K,q,Me,Ne,Pe,J,Fe,Y,X;e((()=>{W=t(n(),1),h(),ee(),_(),f(),oe(),te(),c(),o(),re(),u(),i(),v(),b(),x(),ue(),y(),C(),D(),S(),N(),H(),G=r(),Oe={title:`Work Items/Usage Limit Notification`,parameters:{layout:`fullscreen`,docs:{description:{component:`Modal pattern for creating usage limit notifications — configure thresholds, notification channels, recipients, and message content.`}}}},ke=Object.entries(w).map(([e,t])=>({value:e,label:t.label})),Ae=[{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Smith`},{value:`carol`,label:`Carol Williams`},{value:`david`,label:`David Brown`},{value:`eve`,label:`Eve Davis`}],je=[{value:`general`,label:`#general`},{value:`engineering`,label:`#engineering`},{value:`alerts`,label:`#alerts`},{value:`support`,label:`#support`},{value:`marketing`,label:`#marketing`}],K=`155px`,q={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,whiteSpace:`nowrap`,textAlign:`right`},Me={margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-h2)`,fontWeight:`var(--ds-font-weight-semibold)`,lineHeight:`var(--ds-line-height-h2)`,color:`var(--ds-text-heading)`},Ne={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-semibold)`,color:`var(--ds-text-base)`},Pe=[...[`60%`,`5000`,`4000`,`3000`,`2500`].map((e,t)=>({id:`api-${t}`,feature:`API`,name:`Reached add-on limit ${e}`,creator:t>2?`System`:t===2?`Arjun Kumar`:`Priya Nair`,date:t>2?`Jan 12, 2026`:`Jul 3, 2026`,system:t>2,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`})),{id:`functions`,feature:`Functions`,name:`Reached daily limit 5000 calls`,creator:`Meera Iyer`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`webhooks`,feature:`Webhooks`,name:`Slow webhook responses`,creator:`Sam Carter`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Active`},{id:`data-storage`,feature:`Data storage`,name:`Storage above 85%`,creator:`System`,date:`Jan 12, 2026`,system:!0,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`file-storage`,feature:`File storage`,name:`File storage nearly full`,creator:`Priya Nair`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Completed`}],J=(e,t)=>t.group?null:(0,G.jsx)(d,{variant:`white`,placement:`top`,followCursor:!0,content:(0,G.jsxs)(`span`,{className:`usage-page__hover-list`,children:[(0,G.jsx)(`span`,{children:t.creator}),(0,G.jsx)(`span`,{children:t.date}),(0,G.jsx)(`span`,{children:t.time})]}),children:(0,G.jsxs)(`span`,{className:`usage-page__person`,tabIndex:0,children:[(0,G.jsx)(`img`,{src:`/crm-design-system/images/avatars/user_06.jpg`,alt:``}),(0,G.jsx)(`span`,{children:t.date})]})}),Fe=e=>[{key:`name`,label:`Notification Name`,width:`35%`,render:(e,t)=>t.group?(0,G.jsxs)(`div`,{className:`usage-page__group`,children:[t.name,(0,G.jsx)(`span`,{className:`usage-page__group-count`,children:t.count})]}):(0,G.jsx)(`div`,{className:`usage-page__name`,children:t.name})},{key:`channels`,label:`Notify via`,width:`25%`,render:(e,t)=>t.group?null:(0,G.jsxs)(G.Fragment,{children:[t.channels?.slice(0,2).join(`, `),(t.channels?.length??0)>2&&(0,G.jsxs)(`span`,{className:`usage-page__more`,children:[` and `,(0,G.jsx)(d,{content:(0,G.jsx)(`span`,{className:`usage-page__hover-list`,children:t.channels.slice(2).map(e=>(0,G.jsx)(`span`,{children:e},e))}),variant:`white`,placement:`top`,followCursor:!0,children:(0,G.jsxs)(`button`,{type:`button`,className:`usage-page__more-trigger`,children:[t.channels.length-2,` more`]})})]})]})},{key:`creator`,label:`Created by`,width:`14%`,render:J},{key:`modifier`,label:`Modified by`,width:`14%`,render:J},{key:`status`,label:`Status`,width:`12%`,render:(t,n)=>n.group?null:(0,G.jsx)(ne,{"aria-label":`Enable ${n.name}`,checked:n.status===`Active`,onChange:t=>e(n.id,t.target.checked)})}],Y={name:`Create Notification`,render:()=>{let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(`admin-tools`),[i,o]=(0,W.useState)(`all`),[c,u]=(0,W.useState)(`usage`),[f,ee]=(0,W.useState)(`notifications`),[h,te]=(0,W.useState)(()=>Pe.map(e=>({...e,time:`10:30 AM`}))),re=Fe((e,t)=>{te(n=>n.map(n=>n.id===e?{...n,status:t?`Active`:`Paused`}:n))}),_=h.filter(e=>i===`all`||e.feature===i),oe=Array.from(new Set(_.map(e=>e.feature))).flatMap(e=>{let t=_.filter(t=>t.feature===e);return[{id:`group-${e}`,feature:e,name:e,group:!0,count:t.length},...t]}),v=(0,W.useId)(),[y,ue]=(0,W.useState)(``),[b,x]=(0,W.useState)(!1),[S,C]=(0,W.useState)(()=>_e()),[T,E]=(0,W.useState)(),D=I(S),he=w[S.feature],O=e=>{C(t=>({...t,...e})),E(void 0)},[k,A]=(0,W.useState)([]),[j,M]=(0,W.useState)(!1),[N,Ce]=(0,W.useState)(!0),[R,Ee]=(0,W.useState)(!1),[H,Oe]=(0,W.useState)(!0),[J,Y]=(0,W.useState)(!0),[X,Ie]=(0,W.useState)(!0),[Le,Re]=(0,W.useState)(!1),ze=JSON.stringify(S),[Be,Ve]=(0,W.useState)({criteriaKey:``,value:``}),He=Be.criteriaKey===ze?Be.value:Se(S),[Ue,Z]=(0,W.useState)(),[We,Ge]=(0,W.useState)(),Ke={sender:`owner`,subject:y.trim()||`Usage limit notification`,body:`Hello,\n\n${xe(S)||He}\n\nRegards,\n\${Organization.OrganizationName}`},[qe,Je]=(0,W.useState)(!1),[Ye,Xe]=(0,W.useState)(!0),[Ze,Qe]=(0,W.useState)(!1),[$e,et]=(0,W.useState)([]),[tt,nt]=(0,W.useState)([]),[Q,rt]=(0,W.useState)([]),[$,it]=(0,W.useState)([]),at=()=>{et(Q),nt($),Je(!0)},ot=()=>{rt($e),it(tt),Je(!1)},st=()=>Je(!1),ct=!(N&&J&&!H&&(!R||!X&&!Le)),lt=!!D&&!he?.blank,ut=L(S),dt=[`bt`,`nb`].includes(S.comparator),ft=xe(S),pt=(0,W.useRef)(null),mt=(0,W.useRef)(null),[ht,gt]=(0,W.useState)(625);return(0,W.useEffect)(()=>{let t=mt.current,n=t?.closest(`.modal-dialog`);if(!e||!t||!n)return;let r=Array.from(t.querySelectorAll(`[data-usage-field], input[type="text"], [aria-label="Feature"]`)),i=()=>{let e=n.getBoundingClientRect().left,t=Math.max(...r.map(e=>e.getBoundingClientRect().right));gt(Math.ceil(t-e+30))},a=new ResizeObserver(i);return r.forEach(e=>a.observe(e)),window.addEventListener(`resize`,i),i(),()=>{a.disconnect(),window.removeEventListener(`resize`,i)}},[e,lt,R,N,ct]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
          .usage-notification-modal {
            max-width: calc(100vw - 32px);
            transition: width 280ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .usage-notification-modal .modal-body {
            padding-right: 0;
            overflow-x: auto;
          }
          @media (prefers-reduced-motion: reduce) {
            .usage-notification-modal { transition: none; }
          }
          .usage-notification-when > * { flex-shrink: 0; }
          .usage-notification-measure-info {
            visibility: hidden;
            color: var(--ds-text-label);
            transform: none;
            scale: none;
          }
          .usage-notification-measure-info > circle:first-child {
            fill: currentColor;
          }
          .dropdown-option:hover .usage-notification-measure-info {
            visibility: visible;
          }
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        `}),(0,G.jsxs)(`div`,{className:`usage-page`,children:[(0,G.jsx)(`aside`,{className:`usage-page__sidebar`,"aria-label":`Setup navigation`,children:(0,G.jsx)(fe,{variant:`setup`,searchable:!0,width:`100%`,items:pe,activeId:n,onSelect:r})}),(0,G.jsx)(`header`,{className:`usage-page__topband`,children:(0,G.jsx)(ce,{moduleLabel:null,showTerritory:!1})}),(0,G.jsxs)(`main`,{className:`usage-page__workspace`,"aria-label":`Usage limit notifications`,children:[(0,G.jsx)(de,{tabs:[{id:`usage`,label:`Usage Limits`},{id:`admin`,label:`Admin tool`}],activeTab:c,onChange:u}),c===`usage`?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`div`,{className:`usage-page__sections`,children:(0,G.jsx)(de,{variant:`secondary`,tabs:[{id:`limits`,label:`Usage Limits`},{id:`notifications`,label:`Notification Configurator`}],activeTab:f,onChange:ee})}),f===`notifications`?(0,G.jsxs)(`section`,{className:`usage-page__content`,"aria-label":`Notification Configurator`,children:[(0,G.jsxs)(`div`,{className:`usage-page__toolbar`,children:[(0,G.jsx)(`p`,{children:`Manage CRM usage limits and events by enabling admins to be notified when required`}),(0,G.jsxs)(`div`,{className:`usage-page__actions`,children:[(0,G.jsx)(p,{"aria-label":`Filter notifications by feature`,width:130,value:i,options:[{value:`all`,label:`All`},...Array.from(new Set(h.map(e=>e.feature))).map(e=>({value:e,label:e}))],onChange:o}),(0,G.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Create Notification`})]})]}),(0,G.jsx)(`div`,{className:`usage-page__table-region`,role:`region`,"aria-label":`Notifications table`,tabIndex:0,children:(0,G.jsx)(le,{variant:`report`,width:`100%`,columns:re,rows:oe,emptyMessage:`No notifications found`})})]}):(0,G.jsxs)(`section`,{className:`usage-page__content`,children:[(0,G.jsx)(`h1`,{children:`Usage Limits`}),(0,G.jsx)(`p`,{children:`Configure usage alerts in the Notification Configurator tab.`})]})]}):(0,G.jsxs)(`section`,{className:`usage-page__content`,children:[(0,G.jsx)(`h1`,{children:`Admin tool`}),(0,G.jsx)(`p`,{children:`Select Usage Limits to manage usage notifications.`})]})]})]}),(0,G.jsx)(ae,{isOpen:qe,title:`Zoho Cliq Notification`,onClose:st,onCancel:st,onSave:ot,cancelLabel:`Cancel`,saveLabel:`Done`,width:520,children:(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,paddingRight:20},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,G.jsx)(l,{label:`Notify to users`,checked:Ye,onChange:e=>Xe(e.target.checked)}),Ye&&(0,G.jsx)(se,{value:$e,options:Ae,onChange:et,placeholder:`Select users`,width:`100%`})]}),(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,G.jsx)(l,{label:`Notify in Channels`,checked:Ze,onChange:e=>Qe(e.target.checked)}),Ze&&(0,G.jsx)(se,{value:tt,options:je,onChange:nt,placeholder:`Select channels`,width:`100%`})]})]})}),(0,G.jsx)(ae,{isOpen:e,title:`Configure Usage Limit Notification`,className:`usage-notification-modal`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>{if(!y.trim()){x(!0),document.getElementById(v)?.focus();return}let e=be(S);if(E(e),e)return;ue(y.trim());let n=[...N&&H?[`Push Notification`]:[],...N&&J?[`Emails`]:[],...R&&X?[`Zoho Cliq`]:[],...R&&Le?[`Slack`]:[]];te(e=>[...e,{id:`notification-${Date.now()}`,feature:he.label,name:y.trim(),creator:`Priya Nair`,date:new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),time:new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),channels:n,status:`Active`}]),x(!1),t(!1)},cancelLabel:`Cancel`,saveLabel:`Save`,width:ht,children:(0,G.jsxs)(`div`,{ref:mt,style:{display:`flex`,flexDirection:`column`,gap:30},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,G.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${K} 1fr`,columnGap:20,alignItems:`center`},children:[(0,G.jsx)(`label`,{htmlFor:v,style:q,children:`Notification Name`}),(0,G.jsx)(g,{id:v,type:`text`,layout:`vertical`,width:390,value:y,"aria-required":`true`,"aria-invalid":b||void 0,error:b,helperText:b?`Enter a notification name.`:void 0,onChange:e=>{ue(e.target.value),e.target.value.trim()&&x(!1)}})]}),(0,G.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${K} 1fr`,columnGap:20,alignItems:`center`},children:[(0,G.jsx)(`span`,{style:q,children:`Feature`}),(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Feature`,placeholder:`Select`,options:ke,width:390,value:S.feature,onChange:e=>{C(_e(e)),E(void 0)}})]}),lt&&D&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(U,{label:`Based on`,children:(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:[(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Based on`,width:390,tooltipVariant:`white`,tooltipMaxWidth:600,options:F(S.feature).map(e=>({value:e.name,label:P(e.name),trailingIcon:(0,G.jsx)(d,{content:e.description,variant:`white`,maxWidth:600,placement:`top`,followCursor:!0,children:(0,G.jsx)(a,{className:`usage-notification-measure-info`,width:12,height:12,tabIndex:0,role:`img`,"aria-label":`About ${P(e.name)}`})})})),value:S.measure,onChange:e=>{C(t=>ve(t,e)),E(void 0)}}),D.aggs.length>1&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{style:q,children:`by`}),(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Calculation`,width:150,options:D.aggs.map(e=>({value:e,label:we[e]})),value:S.calculation,onChange:e=>O({calculation:e})})]})]})}),(0,G.jsx)(U,{label:`When`,children:(0,G.jsxs)(`div`,{ref:pt,className:`usage-notification-when`,style:{display:`flex`,width:`max-content`,alignItems:`center`,flexWrap:`nowrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:[!!D.limits?.length&&(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Threshold type`,width:150,options:[{value:`pct`,label:`Percent`},{value:`val`,label:`Value`}],value:S.mode,onChange:e=>O({mode:e,value:e===`pct`?`80`:`90000`,valueTo:e===`pct`?`100`:`100000`})}),(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Comparator`,width:150,options:z,value:S.comparator,onChange:e=>O({comparator:e})}),(0,G.jsx)(g,{layout:`vertical`,type:`number`,width:150,"aria-label":dt?`Threshold from`:`Threshold value`,min:S.mode===`pct`?.01:0,max:S.mode===`pct`?500:void 0,step:`any`,value:S.value,placeholder:dt?`From`:``,onChange:e=>O({value:e.target.value})}),dt&&(0,G.jsx)(g,{layout:`vertical`,type:`number`,width:150,"aria-label":`Threshold to`,min:S.mode===`pct`?.01:0,max:S.mode===`pct`?500:void 0,step:`any`,value:S.valueTo,placeholder:`To`,onChange:e=>O({valueTo:e.target.value})}),S.mode===`pct`&&(D.limits?.length??0)>1&&(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Limit`,width:150,options:D.limits.map(e=>({value:e,label:P(e)})),value:S.constant,onChange:e=>O({constant:e})}),S.mode===`val`&&(0,G.jsx)(`span`,{style:q,children:ye(S)}),ut&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{style:q,children:`over the last`}),(0,G.jsx)(g,{layout:`vertical`,type:`number`,width:150,"aria-label":`Window length`,min:1,max:V[S.windowUnit],step:1,value:S.windowValue,onChange:e=>O({windowValue:e.target.value})}),(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Window unit`,width:150,options:Te,value:S.windowUnit,onChange:e=>O({windowUnit:e})})]})]})})]}),(0,G.jsx)(U,{label:`Notify once every`,children:(0,G.jsx)(p,{layout:`vertical`,triggerAriaLabel:`Notify once every`,options:B,width:390,value:S.interval,onChange:e=>O({interval:e})})}),ft&&(0,G.jsx)(U,{label:``,align:`start`,children:(0,G.jsx)(`div`,{style:{width:`fit-content`,maxWidth:`calc(100% - 30px)`,marginRight:30,overflowWrap:`anywhere`,boxSizing:`border-box`,padding:`var(--ds-font-size-base)`,border:`1px solid var(--ds-border-subtle)`,borderRadius:`calc(var(--ds-font-size-base) * 0.4)`,background:`var(--ds-bg-common-bg)`,lineHeight:`var(--ds-line-height-base)`,color:`var(--ds-text-base)`,fontSize:`var(--ds-font-size-base)`,fontFamily:`var(--ds-font-family-base)`},"aria-live":`polite`,children:ft})}),T&&(0,G.jsx)(U,{label:``,children:(0,G.jsx)(`span`,{role:`alert`,style:{color:`var(--ds-status-negative)`},children:T})})]}),(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,G.jsx)(`h2`,{style:Me,children:`Notify via`}),(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,G.jsx)(`span`,{style:Ne,children:`Push Notification / Email`}),(0,G.jsx)(ne,{checked:N,onChange:e=>Ce(e.target.checked),"aria-label":`Toggle push notification and email`})]}),N&&(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,G.jsx)(U,{label:`Send notification to`,children:(0,G.jsxs)(`div`,{className:`usage-recipient-field${k.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Send notification to`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&M(!0)},children:[k.length===0?(0,G.jsx)(s,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:()=>M(!0),children:`Select User`}):[`user`,`group`].map(e=>{let t=k.filter(t=>t.kind===e),n=e===`user`?`Users`:`Groups`;return t.length>0&&(0,G.jsx)(d,{variant:`white`,placement:`top`,maxWidth:320,content:(0,G.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,G.jsxs)(`strong`,{children:[n,` (`,t.length,`)`]}),t.map(e=>(0,G.jsx)(`span`,{children:e.label},e.value))]}),children:(0,G.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${n}: ${t.length}. Edit selected recipients`,onClick:()=>M(!0),children:[(0,G.jsx)(`span`,{className:`tags-tag-label`,children:n}),(0,G.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)}),k.length>0&&(0,G.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit notification recipients`,"aria-haspopup":`dialog`,onClick:()=>M(!0),children:(0,G.jsx)(m,{name:`CrmEditFilledMd`,size:14})})]})}),(0,G.jsx)(U,{label:`Notify Via`,align:`start`,children:(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,G.jsx)(l,{label:`Push Notification`,checked:H,onChange:e=>Oe(e.target.checked)}),(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,G.jsx)(l,{label:`Email`,checked:J,onChange:e=>Y(e.target.checked)}),J&&(0,G.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,G.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Preview email template`,"aria-haspopup":`dialog`,onClick:()=>Z(`preview`),children:`Preview`}),(0,G.jsx)(`span`,{style:{color:`var(--ds-text-muted)`,fontSize:`var(--ds-font-size-base)`,lineHeight:1},children:`·`}),(0,G.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Edit email template`,"aria-haspopup":`dialog`,onClick:()=>Z(`edit`),children:`Edit Template`})]})]})]})})]})]}),(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,G.jsx)(`span`,{style:Ne,children:`External apps`}),(0,G.jsx)(ne,{checked:R,onChange:e=>Ee(e.target.checked),"aria-label":`Toggle external app notifications`})]}),R&&(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,G.jsx)(U,{label:`Notify Via`,align:`center`,children:(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,G.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,G.jsx)(l,{label:`Zoho Cliq`,checked:X,onChange:e=>Ie(e.target.checked)})}),(0,G.jsx)(`div`,{style:{opacity:+!!X,pointerEvents:X?`auto`:`none`},children:(0,G.jsxs)(`div`,{className:`usage-recipient-field usage-cliq-field${Q.length>0||$.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Zoho Cliq recipients`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&at()},children:[Q.length===0&&$.length===0&&(0,G.jsx)(s,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:at,children:`Select User`}),[{label:`Users`,recipients:Q},{label:`Channels`,recipients:$}].map(({label:e,recipients:t})=>t.length>0&&(0,G.jsx)(d,{variant:`white`,placement:`top`,maxWidth:320,content:(0,G.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,G.jsxs)(`strong`,{children:[e,` (`,t.length,`)`]}),t.map(e=>(0,G.jsx)(`span`,{children:e.label},e.value))]}),children:(0,G.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${e}: ${t.length}. Edit Zoho Cliq recipients`,onClick:at,children:[(0,G.jsx)(`span`,{className:`tags-tag-label`,children:e}),(0,G.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)),(Q.length>0||$.length>0)&&(0,G.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit Zoho Cliq recipients`,"aria-haspopup":`dialog`,onClick:at,children:(0,G.jsx)(m,{name:`CrmEditFilledMd`,size:14})})]})})]})}),(0,G.jsx)(`div`,{style:{paddingLeft:`calc(${K} + 20px)`},children:(0,G.jsx)(l,{label:`Slack`,checked:Le,onChange:e=>Re(e.target.checked)})})]})]})]}),ct&&(0,G.jsx)(U,{label:`Notification message`,align:`start`,labelOffset:7,children:(0,G.jsx)(ie,{"aria-label":`Notification message`,layout:`vertical`,variant:`multiline`,width:390,defaultValue:He,mergeFields:De,hint:`Type "#" to insert merge field`,onChange:e=>Ve({criteriaKey:ze,value:e})},ze)})]})}),j&&(0,G.jsx)(ge,{value:k,onClose:()=>M(!1),onSave:e=>{A(e),M(!1)}}),Ue&&(0,G.jsx)(me,{kind:`email`,title:Ue===`preview`?`Usage Notification Email Preview`:`Edit Email Content`,readOnly:Ue===`preview`,initial:We,defaults:Ke,onClose:()=>Z(void 0),onSave:e=>{Ge(e),Z(void 0)}})]})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Create Notification',
  render: () => {
    const [open, setOpen] = useState(false);
    const [sidebarId, setSidebarId] = useState('admin-tools');
    const [featureFilter, setFeatureFilter] = useState('all');
    const [pageTab, setPageTab] = useState('usage');
    const [sectionTab, setSectionTab] = useState('notifications');
    const [savedRows, setSavedRows] = useState<UsageListRow[]>(() => USAGE_LIST_ROWS.map(row => ({
      ...row,
      time: '10:30 AM'
    })));
    const columns = usageListColumns((id, enabled) => {
      setSavedRows(current => current.map(row => row.id === id ? {
        ...row,
        status: enabled ? 'Active' : 'Paused'
      } : row));
    });
    const visibleRows = savedRows.filter(row => featureFilter === 'all' || row.feature === featureFilter);
    const tableRows = Array.from(new Set(visibleRows.map(row => row.feature))).flatMap(feature => {
      const rows = visibleRows.filter(row => row.feature === feature);
      return [{
        id: \`group-\${feature}\`,
        feature,
        name: feature,
        group: true,
        count: rows.length
      }, ...rows];
    });
    const notificationNameId = useId();
    const [notificationName, setNotificationName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [trigger, setTrigger] = useState(() => createUsageTrigger());
    const [triggerError, setTriggerError] = useState<string>();
    const measure = selectedUsageMeasure(trigger);
    const feature = USAGE_FEATURES[trigger.feature];
    const updateTrigger = (patch: Partial<typeof trigger>) => {
      setTrigger(current => ({
        ...current,
        ...patch
      }));
      setTriggerError(undefined);
    };

    // Send notification to
    const [notifyToTags, setNotifyToTags] = useState<UsageRecipient[]>([]);
    const [recipientDialogOpen, setRecipientDialogOpen] = useState(false);

    // Notify via toggles
    const [pushEmailEnabled, setPushEmailEnabled] = useState(true);
    const [externalAppsEnabled, setExternalAppsEnabled] = useState(false);

    // Channel checkboxes
    const [notifyPush, setNotifyPush] = useState(true);
    const [notifyEmail, setNotifyEmail] = useState(true);
    const [notifyZohoCliq, setNotifyZohoCliq] = useState(true);
    const [notifySlack, setNotifySlack] = useState(false);

    // Message
    const criteriaKey = JSON.stringify(trigger);
    const [messageDraft, setMessageDraft] = useState({
      criteriaKey: '',
      value: ''
    });
    const message = messageDraft.criteriaKey === criteriaKey ? messageDraft.value : usageNotificationMessage(trigger);
    const [emailDialog, setEmailDialog] = useState<'preview' | 'edit'>();
    const [emailTemplate, setEmailTemplate] = useState<TemplateSettings>();
    const emailDefaults: TemplateSettings = {
      sender: 'owner',
      subject: notificationName.trim() || 'Usage limit notification',
      body: \`Hello,\\n\\n\${usageTriggerSummary(trigger) || message}\\n\\nRegards,\\n\\\${Organization.OrganizationName}\`
    };

    // Zoho Cliq Notification sub-modal — draft/committed pattern
    const [zohoOpen, setZohoOpen] = useState(false);
    const [zohoNotifyUsers, setZohoNotifyUsers] = useState(true);
    const [zohoNotifyChannels, setZohoNotifyChannels] = useState(false);
    const [zohoDraftUsers, setZohoDraftUsers] = useState<TagItem[]>([]);
    const [zohoDraftChannels, setZohoDraftChannels] = useState<TagItem[]>([]);
    const [zohoCommittedUsers, setZohoCommittedUsers] = useState<TagItem[]>([]);
    const [zohoCommittedChannels, setZohoCommittedChannels] = useState<TagItem[]>([]);
    const openZohoModal = () => {
      setZohoDraftUsers(zohoCommittedUsers);
      setZohoDraftChannels(zohoCommittedChannels);
      setZohoOpen(true);
    };
    const handleZohoDone = () => {
      setZohoCommittedUsers(zohoDraftUsers);
      setZohoCommittedChannels(zohoDraftChannels);
      setZohoOpen(false);
    };
    const handleZohoCancel = () => setZohoOpen(false);

    // Whether the Message section should be shown.
    // Hidden only when the ONLY active channel that carries a message is Email
    // (which has its own template), and no push channels are enabled.
    const onlyEmailNotify = pushEmailEnabled && notifyEmail && !notifyPush && (!externalAppsEnabled || !notifyZohoCliq && !notifySlack);
    const showMessage = !onlyEmailNotify;
    const showCriteria = !!measure && !feature?.blank;
    const showWindow = usageWindowApplies(trigger);
    const isRange = ['bt', 'nb'].includes(trigger.comparator);
    const summary = usageTriggerSummary(trigger);
    const whenRowRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [modalWidth, setModalWidth] = useState(625);
    useEffect(() => {
      const content = contentRef.current;
      const dialog = content?.closest('.modal-dialog');
      if (!open || !content || !dialog) return;

      // Hug the widest field, not just When: recipient controls can be wider.
      // Exclude the summary, whose wrapping should follow the modal width.
      const fields = Array.from(content.querySelectorAll<HTMLElement>('[data-usage-field], input[type="text"], [aria-label="Feature"]'));
      const updateWidth = () => {
        const dialogLeft = dialog.getBoundingClientRect().left;
        const right = Math.max(...fields.map(field => field.getBoundingClientRect().right));
        setModalWidth(Math.ceil(right - dialogLeft + 30));
      };
      const observer = new ResizeObserver(updateWidth);
      fields.forEach(field => observer.observe(field));
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', updateWidth);
      };
    }, [open, showCriteria, externalAppsEnabled, pushEmailEnabled, showMessage]);
    return <>
        {/* Hide number input spinners globally for this pattern */}
        <style>{\`
          .usage-notification-modal {
            max-width: calc(100vw - 32px);
            transition: width 280ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .usage-notification-modal .modal-body {
            padding-right: 0;
            overflow-x: auto;
          }
          @media (prefers-reduced-motion: reduce) {
            .usage-notification-modal { transition: none; }
          }
          .usage-notification-when > * { flex-shrink: 0; }
          .usage-notification-measure-info {
            visibility: hidden;
            color: var(--ds-text-label);
            transform: none;
            scale: none;
          }
          .usage-notification-measure-info > circle:first-child {
            fill: currentColor;
          }
          .dropdown-option:hover .usage-notification-measure-info {
            visibility: visible;
          }
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        \`}</style>

        <div className="usage-page">
          <aside className="usage-page__sidebar" aria-label="Setup navigation">
            <VerticalTabs variant="setup" searchable width="100%" items={SETUP_MENU_ITEMS} activeId={sidebarId} onSelect={setSidebarId} />
          </aside>
          <header className="usage-page__topband"><NextGenTopBand moduleLabel={null} showTerritory={false} /></header>
          <main className="usage-page__workspace" aria-label="Usage limit notifications">
            <Tabs tabs={[{
            id: 'usage',
            label: 'Usage Limits'
          }, {
            id: 'admin',
            label: 'Admin tool'
          }]} activeTab={pageTab} onChange={setPageTab} />
            {pageTab === 'usage' ? <>
              <div className="usage-page__sections">
                <Tabs variant="secondary" tabs={[{
                id: 'limits',
                label: 'Usage Limits'
              }, {
                id: 'notifications',
                label: 'Notification Configurator'
              }]} activeTab={sectionTab} onChange={setSectionTab} />
              </div>
              {sectionTab === 'notifications' ? <section className="usage-page__content" aria-label="Notification Configurator">
                <div className="usage-page__toolbar">
                  <p>Manage CRM usage limits and events by enabling admins to be notified when required</p>
                  <div className="usage-page__actions">
                    <Dropdown aria-label="Filter notifications by feature" width={130} value={featureFilter} options={[{
                    value: 'all',
                    label: 'All'
                  }, ...Array.from(new Set(savedRows.map(row => row.feature))).map(feature => ({
                    value: feature,
                    label: feature
                  }))]} onChange={setFeatureFilter} />
                    <Button variant="primary" onClick={() => setOpen(true)}>Create Notification</Button>
                  </div>
                </div>
                <div className="usage-page__table-region" role="region" aria-label="Notifications table" tabIndex={0}>
                  <SetupTable variant="report" width="100%" columns={columns} rows={tableRows} emptyMessage="No notifications found" />
                </div>
              </section> : <section className="usage-page__content"><h1>Usage Limits</h1><p>Configure usage alerts in the Notification Configurator tab.</p></section>}
            </> : <section className="usage-page__content"><h1>Admin tool</h1><p>Select Usage Limits to manage usage notifications.</p></section>}
          </main>
        </div>

        {/* ── Zoho Cliq Notification sub-modal ─────────────────────────── */}
        <Modal isOpen={zohoOpen} title="Zoho Cliq Notification" onClose={handleZohoCancel} onCancel={handleZohoCancel} onSave={handleZohoDone} cancelLabel="Cancel" saveLabel="Done" width={520}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          paddingRight: 20
        }}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}>
              <Checkbox label="Notify to users" checked={zohoNotifyUsers} onChange={e => setZohoNotifyUsers(e.target.checked)} />
              {zohoNotifyUsers && <Tags value={zohoDraftUsers} options={ZOHO_USER_OPTIONS} onChange={setZohoDraftUsers} placeholder="Select users" width="100%" />}
            </div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}>
              <Checkbox label="Notify in Channels" checked={zohoNotifyChannels} onChange={e => setZohoNotifyChannels(e.target.checked)} />
              {zohoNotifyChannels && <Tags value={zohoDraftChannels} options={ZOHO_CHANNEL_OPTIONS} onChange={setZohoDraftChannels} placeholder="Select channels" width="100%" />}
            </div>
          </div>
        </Modal>

        {/* ── Main modal ───────────────────────────────────────────────── */}
        <Modal isOpen={open} title="Configure Usage Limit Notification" className="usage-notification-modal" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => {
        if (!notificationName.trim()) {
          setNameError(true);
          document.getElementById(notificationNameId)?.focus();
          return;
        }
        const error = validateUsageTrigger(trigger);
        setTriggerError(error);
        if (error) return;
        setNotificationName(notificationName.trim());
        const channels = [...(pushEmailEnabled && notifyPush ? ['Push Notification'] : []), ...(pushEmailEnabled && notifyEmail ? ['Emails'] : []), ...(externalAppsEnabled && notifyZohoCliq ? ['Zoho Cliq'] : []), ...(externalAppsEnabled && notifySlack ? ['Slack'] : [])];
        setSavedRows(current => [...current, {
          id: \`notification-\${Date.now()}\`,
          feature: feature.label,
          name: notificationName.trim(),
          creator: 'Priya Nair',
          date: new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }).format(new Date()),
          time: new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
          }).format(new Date()),
          channels,
          status: 'Active'
        }]);
        setNameError(false);
        setOpen(false);
      }} cancelLabel="Cancel" saveLabel="Save" width={modalWidth}>
          <div ref={contentRef} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 30
        }}>

          {/* ── Notification name, feature, condition, and frequency ───── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
          <div style={{
              display: 'grid',
              gridTemplateColumns: \`\${LABEL_COL} 1fr\`,
              columnGap: 20,
              alignItems: 'center'
            }}>
            <label htmlFor={notificationNameId} style={labelStyle}>
              Notification Name
            </label>
            <Input id={notificationNameId} type="text" layout="vertical" width={390} value={notificationName} aria-required="true" aria-invalid={nameError || undefined} error={nameError} helperText={nameError ? 'Enter a notification name.' : undefined} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNotificationName(event.target.value);
                if (event.target.value.trim()) setNameError(false);
              }} />
          </div>
          <div style={{
              display: 'grid',
              gridTemplateColumns: \`\${LABEL_COL} 1fr\`,
              columnGap: 20,
              alignItems: 'center'
            }}>
            <span style={labelStyle}>Feature</span>
            <Dropdown layout="vertical" triggerAriaLabel="Feature" placeholder="Select" options={FEATURE_OPTIONS} width={390} value={trigger.feature} onChange={(value: string) => {
                setTrigger(createUsageTrigger(value));
                setTriggerError(undefined);
              }} />
          </div>
          {showCriteria && measure && <>
              <FormRow label="Based on">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 'calc(var(--ds-font-size-base) * 0.6)'
                }}>
                  <Dropdown layout="vertical" triggerAriaLabel="Based on" width={390} tooltipVariant="white" tooltipMaxWidth={600} options={usageMeasures(trigger.feature).map(field => ({
                    value: field.name,
                    label: prettyUsageName(field.name),
                    trailingIcon: <Tooltip content={field.description} variant="white" maxWidth={600} placement="top" followCursor>
                        <CrmAlertInfo className="usage-notification-measure-info" width={12} height={12} tabIndex={0} role="img" aria-label={\`About \${prettyUsageName(field.name)}\`} />
                      </Tooltip>
                  }))} value={trigger.measure} onChange={(value: string) => {
                    setTrigger(current => changeUsageMeasure(current, value));
                    setTriggerError(undefined);
                  }} />
                  {measure.aggs.length > 1 && <>
                    <span style={labelStyle}>by</span>
                    <Dropdown layout="vertical" triggerAriaLabel="Calculation" width={150} options={measure.aggs.map(value => ({
                      value,
                      label: AGGREGATION_LABELS[value]
                    }))} value={trigger.calculation} onChange={(calculation: string) => updateTrigger({
                      calculation
                    })} />
                  </>}
                </div>
              </FormRow>
              <FormRow label="When">
                <div ref={whenRowRef} className="usage-notification-when" style={{
                  display: 'flex',
                  width: 'max-content',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  gap: 'calc(var(--ds-font-size-base) * 0.6)'
                }}>
                  {!!measure.limits?.length && <Dropdown layout="vertical" triggerAriaLabel="Threshold type" width={150} options={[{
                    value: 'pct',
                    label: 'Percent'
                  }, {
                    value: 'val',
                    label: 'Value'
                  }]} value={trigger.mode} onChange={(mode: string) => updateTrigger({
                    mode,
                    value: mode === 'pct' ? '80' : '90000',
                    valueTo: mode === 'pct' ? '100' : '100000'
                  })} />}
                  <Dropdown layout="vertical" triggerAriaLabel="Comparator" width={150} options={COMPARISON_OPTIONS} value={trigger.comparator} onChange={(comparator: string) => updateTrigger({
                    comparator
                  })} />
                  <Input layout="vertical" type="number" width={150} aria-label={isRange ? 'Threshold from' : 'Threshold value'} min={trigger.mode === 'pct' ? 0.01 : 0} max={trigger.mode === 'pct' ? 500 : undefined} step="any" value={trigger.value} placeholder={isRange ? 'From' : ''} onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTrigger({
                    value: event.target.value
                  })} />
                  {isRange && <Input layout="vertical" type="number" width={150} aria-label="Threshold to" min={trigger.mode === 'pct' ? 0.01 : 0} max={trigger.mode === 'pct' ? 500 : undefined} step="any" value={trigger.valueTo} placeholder="To" onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTrigger({
                    valueTo: event.target.value
                  })} />}
                  {trigger.mode === 'pct' && (measure.limits?.length ?? 0) > 1 && <Dropdown layout="vertical" triggerAriaLabel="Limit" width={150} options={measure.limits!.map(value => ({
                    value,
                    label: prettyUsageName(value)
                  }))} value={trigger.constant} onChange={(constant: string) => updateTrigger({
                    constant
                  })} />}
                  {trigger.mode === 'val' && <span style={labelStyle}>{usageValueUnit(trigger)}</span>}
                  {showWindow && <>
                    <span style={labelStyle}>over the last</span>
                    <Input layout="vertical" type="number" width={150} aria-label="Window length" min={1} max={WINDOW_MAX[trigger.windowUnit]} step={1} value={trigger.windowValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTrigger({
                      windowValue: event.target.value
                    })} />
                    <Dropdown layout="vertical" triggerAriaLabel="Window unit" width={150} options={WINDOW_OPTIONS} value={trigger.windowUnit} onChange={(windowUnit: string) => updateTrigger({
                      windowUnit
                    })} />
                  </>}
                </div>
              </FormRow>
            </>}
          <FormRow label="Notify once every">
            <Dropdown layout="vertical" triggerAriaLabel="Notify once every" options={INTERVAL_OPTIONS} width={390} value={trigger.interval} onChange={(interval: string) => updateTrigger({
                interval
              })} />
          </FormRow>
          {summary && <FormRow label="" align="start">
            <div style={{
                width: 'fit-content',
                maxWidth: 'calc(100% - 30px)',
                marginRight: 30,
                overflowWrap: 'anywhere',
                boxSizing: 'border-box',
                padding: 'var(--ds-font-size-base)',
                border: '1px solid var(--ds-border-subtle)',
                borderRadius: 'calc(var(--ds-font-size-base) * 0.4)',
                background: 'var(--ds-bg-common-bg)',
                lineHeight: 'var(--ds-line-height-base)',
                color: 'var(--ds-text-base)',
                fontSize: 'var(--ds-font-size-base)',
                fontFamily: 'var(--ds-font-family-base)'
              }} aria-live="polite">
              {summary}
            </div>
          </FormRow>}
          {triggerError && <FormRow label=""><span role="alert" style={{
                color: 'var(--ds-status-negative)'
              }}>{triggerError}</span></FormRow>}
          </div>{/* end first-group */}

          {/* ── Notify via ──────────────────────────────────────────────── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            <h2 style={sectionHeadingStyle}>Notify via</h2>

            {/* Push Notification / Email */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <span style={subHeadingStyle}>Push Notification / Email</span>
                <Switch checked={pushEmailEnabled} onChange={e => setPushEmailEnabled(e.target.checked)} aria-label="Toggle push notification and email" />
              </div>

              {pushEmailEnabled && <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                  <FormRow label="Send notification to">
                    <div className={\`usage-recipient-field\${notifyToTags.length > 0 ? ' usage-recipient-editable' : ''}\`} role="group" aria-label="Send notification to" onClick={event => {
                    if (!(event.target instanceof Element) || !event.target.closest('button')) {
                      setRecipientDialogOpen(true);
                    }
                  }}>
                      {notifyToTags.length === 0 ? <Button variant="default" size="sm" aria-haspopup="dialog" onClick={() => setRecipientDialogOpen(true)}>
                          Select User
                        </Button> : (['user', 'group'] as const).map(kind => {
                      const recipients = notifyToTags.filter(recipient => recipient.kind === kind);
                      const label = kind === 'user' ? 'Users' : 'Groups';
                      return recipients.length > 0 && <Tooltip key={kind} variant="white" placement="top" maxWidth={320} content={<span className="usage-recipient-preview">
                              <strong>{label} ({recipients.length})</strong>
                              {recipients.map(recipient => <span key={recipient.value}>{recipient.label}</span>)}
                            </span>}>
                            <button type="button" className="tags-tag usage-recipient-count" aria-haspopup="dialog" aria-label={\`\${label}: \${recipients.length}. Edit selected recipients\`} onClick={() => setRecipientDialogOpen(true)}>
                              <span className="tags-tag-label">{label}</span>
                              <span className="tags-tag-count">{recipients.length}</span>
                            </button>
                          </Tooltip>;
                    })}
                      {notifyToTags.length > 0 && <button type="button" className="usage-cliq-edit" aria-label="Edit notification recipients" aria-haspopup="dialog" onClick={() => setRecipientDialogOpen(true)}>
                        <Icon name="CrmEditFilledMd" size={14} />
                      </button>}
                    </div>
                  </FormRow>

                  <FormRow label="Notify Via" align="start">
                    <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                  }}>
                      <Checkbox label="Push Notification" checked={notifyPush} onChange={e => setNotifyPush(e.target.checked)} />
                      <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}>
                        <Checkbox label="Email" checked={notifyEmail} onChange={e => setNotifyEmail(e.target.checked)} />
                        {/* Preview · Edit Template — only visible when Email is checked */}
                        {notifyEmail && <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6
                      }}>
                          <button type="button" style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          fontFamily: 'var(--ds-font-family-base)',
                          fontSize: 'var(--ds-font-size-base)',
                          color: 'var(--ds-text-link)'
                        }} aria-label="Preview email template" aria-haspopup="dialog" onClick={() => setEmailDialog('preview')}>
                            Preview
                          </button>
                          <span style={{
                          color: 'var(--ds-text-muted)',
                          fontSize: 'var(--ds-font-size-base)',
                          lineHeight: 1
                        }}>·</span>
                          <button type="button" style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          fontFamily: 'var(--ds-font-family-base)',
                          fontSize: 'var(--ds-font-size-base)',
                          color: 'var(--ds-text-link)'
                        }} aria-label="Edit email template" aria-haspopup="dialog" onClick={() => setEmailDialog('edit')}>
                            Edit Template
                          </button>
                        </span>}
                      </div>
                    </div>
                  </FormRow>
                </div>}
            </div>

            {/* External apps */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <span style={subHeadingStyle}>External apps</span>
                <Switch checked={externalAppsEnabled} onChange={e => setExternalAppsEnabled(e.target.checked)} aria-label="Toggle external app notifications" />
              </div>

              {externalAppsEnabled && <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
                  <FormRow label="Notify Via" align="center">
                    <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                      {/* Isolate Checkbox's align-self: flex-start so the row can center it. */}
                      <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                        <Checkbox label="Zoho Cliq" checked={notifyZohoCliq} onChange={e => setNotifyZohoCliq(e.target.checked)} />
                      </div>
                      <div style={{
                      opacity: notifyZohoCliq ? 1 : 0,
                      pointerEvents: notifyZohoCliq ? 'auto' : 'none'
                    }}>
                        <div className={\`usage-recipient-field usage-cliq-field\${zohoCommittedUsers.length > 0 || zohoCommittedChannels.length > 0 ? ' usage-recipient-editable' : ''}\`} role="group" aria-label="Zoho Cliq recipients" onClick={event => {
                        if (!(event.target instanceof Element) || !event.target.closest('button')) {
                          openZohoModal();
                        }
                      }}>
                          {zohoCommittedUsers.length === 0 && zohoCommittedChannels.length === 0 && <Button variant="default" size="sm" aria-haspopup="dialog" onClick={openZohoModal}>
                              Select User
                            </Button>}
                          {[{
                          label: 'Users',
                          recipients: zohoCommittedUsers
                        }, {
                          label: 'Channels',
                          recipients: zohoCommittedChannels
                        }].map(({
                          label,
                          recipients
                        }) => recipients.length > 0 && <Tooltip key={label} variant="white" placement="top" maxWidth={320} content={<span className="usage-recipient-preview">
                                <strong>{label} ({recipients.length})</strong>
                                {recipients.map(recipient => <span key={recipient.value}>{recipient.label}</span>)}
                              </span>}>
                              <button type="button" className="tags-tag usage-recipient-count" aria-haspopup="dialog" aria-label={\`\${label}: \${recipients.length}. Edit Zoho Cliq recipients\`} onClick={openZohoModal}>
                                <span className="tags-tag-label">{label}</span>
                                <span className="tags-tag-count">{recipients.length}</span>
                              </button>
                            </Tooltip>)}
                          {(zohoCommittedUsers.length > 0 || zohoCommittedChannels.length > 0) && <button type="button" className="usage-cliq-edit" aria-label="Edit Zoho Cliq recipients" aria-haspopup="dialog" onClick={openZohoModal}>
                            <Icon name="CrmEditFilledMd" size={14} />
                          </button>}
                        </div>
                      </div>
                    </div>
                  </FormRow>
                  <div style={{
                  paddingLeft: \`calc(\${LABEL_COL} + 20px)\`
                }}>
                    <Checkbox label="Slack" checked={notifySlack} onChange={e => setNotifySlack(e.target.checked)} />
                  </div>
                </div>}
            </div>
          </div>

          {/* ── Message ─────────────────────────────────────────────────── */}
          {showMessage && <FormRow label="Notification message" align="start" labelOffset={7}>
              <MergeField key={criteriaKey} aria-label="Notification message" layout="vertical" variant="multiline" width={390} defaultValue={message} mergeFields={USAGE_MESSAGE_FIELDS} hint={'Type "#" to insert merge field'} onChange={(value: string) => setMessageDraft({
              criteriaKey,
              value
            })} />
            </FormRow>}

          </div>
        </Modal>
        {recipientDialogOpen && <UsageRecipientDialog value={notifyToTags} onClose={() => setRecipientDialogOpen(false)} onSave={recipients => {
        setNotifyToTags(recipients);
        setRecipientDialogOpen(false);
      }} />}
        {emailDialog && <TemplateDialog kind="email" title={emailDialog === 'preview' ? 'Usage Notification Email Preview' : 'Edit Email Content'} readOnly={emailDialog === 'preview'} initial={emailTemplate} defaults={emailDefaults} onClose={() => setEmailDialog(undefined)} onSave={settings => {
        setEmailTemplate(settings);
        setEmailDialog(undefined);
      }} />}
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X=[`CreateNotification`]}))();export{Y as CreateNotification,X as __namedExportsOrder,Oe as default};