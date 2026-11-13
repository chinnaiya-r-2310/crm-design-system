import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D1rmBOiZ.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{At as i,Q as a,Yt as o,y as s}from"./Icons-C5jh3b7i.js";import{r as ee,t as te}from"./Button-DwuZP9xo.js";import{n as ne,t as c}from"./Checkbox-INl0rBkE.js";import{n as re,t as l}from"./Tooltip-B3wu_Ay2.js";import{n as ie,t as u}from"./Dropdown-B-4kV9Ry.js";import{n as ae,t as oe}from"./Icon-z2nraMsE.js";import{n as d,t as f}from"./Input-8dg0QFmD.js";import{n as p,t as se}from"./Switch-clexBkuI.js";import{n as ce,t as le}from"./MergeField-R6w8Ttf1.js";import{n as m,t as ue}from"./Modal-OTC6nYhd.js";import{n as de,t as fe}from"./Tags-Bu_7tWL5.js";import{n as pe,t as me}from"./NextGenTopBand-Du1ruz6S.js";import{n as he,t as ge}from"./Table-vqNdyRgJ.js";import{n as h,t as _e}from"./Tabs-uPWC9ndy.js";import{i as ve,n as g,r as _,t as ye}from"./UserSelectionModal.data-UqBEBENK.js";import{i as v,n as y,r as be,t as xe}from"./setupMenuItems-DR6Wl9xX.js";import{n as b,t as Se}from"./TemplateDialog-BOe2Mmus.js";var x=e((()=>{})),S,C,w,T=e((()=>{S={api:{label:`API`,recordNoun:`API calls`,blank:!1,properties:[{name:`free_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits included free with your edition. Read from your subscription when the check runs, so it follows an upgrade by itself.`},{name:`paid_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits you have purchased on top of the free allowance.`},{name:`overall_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Free plus paid credits. Surge capacity is not included.`},{name:`free_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`free_limit`],description:`Free credits spent so far this cycle. Resets when the cycle rolls over.`},{name:`paid_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`paid_limit`],description:`Purchased credits spent so far this cycle. Only starts moving once the free allowance is gone.`},{name:`overall_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`overall_limit`],description:`All credits spent so far this cycle, across every tier.`},{name:`paid_credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`paid_limit`],description:`Paid credits charged by one API call. A bulk read costs more than a single record fetch.`},{name:`credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`overall_limit`,`paid_limit`],description:`Credits charged by one API call across every tier.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one API call took to serve, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the call returned. Count it alongside a condition to alert on failures — for example, calls where status is at least 500.`}]},functions:{label:`Functions`,recordNoun:`executions`,blank:!1,properties:[{name:`execution_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Function executions included in your plan for the current cycle.`},{name:`executions_used_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`execution_limit`],description:`Executions consumed so far this cycle. Resets when the cycle rolls over.`},{name:`credits_used_per_execution`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Credits charged by one function run. Heavier functions cost more per run.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one execution took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Whether the run succeeded or failed. Count it alongside a condition to alert on failing functions.`}]},webhooks:{label:`Webhooks`,recordNoun:`webhook calls`,blank:!1,properties:[{name:`webhook_limit`,kind:`constant`,unit:`call`,aggs:[],description:`Webhook calls your edition allows per day.`},{name:`webhook_calls_today`,kind:`total`,unit:`call`,aggs:[`max`],limits:[`webhook_limit`],description:`Webhook calls fired so far today. Resets at midnight in your org’s time zone.`},{name:`response_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the receiving endpoint took to respond, in milliseconds.`},{name:`retries_per_call`,kind:`event`,unit:`retry`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Retries needed before a call succeeded or was dropped.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the endpoint returned. Count it alongside a condition to alert on failing endpoints.`}]},email_notifications:{label:`Email notifications`,recordNoun:`emails`,blank:!1,properties:[{name:`email_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Emails your org may send per day, set by edition and user count.`},{name:`emails_sent_today`,kind:`total`,unit:`email`,aggs:[`max`],description:`Emails sent so far today. Resets at midnight in your org’s time zone.`},{name:`recipients_per_email`,kind:`event`,unit:`recipient`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Recipients on one email. A mass email to a large view produces a single record with a high value.`},{name:`bounces_per_email`,kind:`event`,unit:`bounce`,aggs:[`sum`,`count`,`avg`],description:`Bounces recorded against one send.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Delivered, bounced or failed. Count it alongside a condition to alert on delivery problems.`}]},data_storage:{label:`Data storage`,recordNoun:`storage events`,blank:!1,properties:[{name:`storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Total storage included in your plan.`},{name:`storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`storage_limit`],description:`Storage your org occupies right now, across all modules. Only goes down when data is deleted.`},{name:`storage_used_per_operation`,kind:`event`,unit:`gigabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`storage_limit`],description:`Storage added by one operation — an import, a bulk create or a single record create.`}]},file_storage:{label:`File storage`,recordNoun:`uploads`,blank:!1,properties:[{name:`file_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`File storage included in your plan, across attachments, documents and inline images.`},{name:`file_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`file_storage_limit`],description:`File storage your org occupies right now. Only goes down when files are deleted.`},{name:`file_size_per_upload`,kind:`event`,unit:`megabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Size of one uploaded file, in megabytes.`}]},email_parser:{label:`Email parser`,recordNoun:`parsed emails`,blank:!1,properties:[{name:`parser_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Inbound emails your plan lets the parser process in a cycle.`},{name:`emails_parsed_this_cycle`,kind:`total`,unit:`email`,aggs:[`max`],limits:[`parser_limit`],description:`Inbound emails parsed so far this cycle. Resets when the cycle rolls over.`},{name:`parse_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the parser took to read one email, in milliseconds.`},{name:`fields_extracted`,kind:`event`,unit:`field`,aggs:[`sum`,`count`,`avg`,`min`],description:`Fields the parser pulled out of one email. A low value can mean the template no longer matches.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Parsed or failed. Count it alongside a condition to alert on emails the parser could not read.`}]},zoho_flow:{label:`Actions by Zoho Flow`,recordNoun:`flow actions`,blank:!1,properties:[{name:`task_limit`,kind:`constant`,unit:`task`,aggs:[],description:`Flow tasks included in your plan for the current cycle.`},{name:`tasks_used_this_cycle`,kind:`total`,unit:`task`,aggs:[`max`],limits:[`task_limit`],description:`Tasks consumed so far this cycle. Resets when the cycle rolls over.`},{name:`tasks_per_run`,kind:`event`,unit:`task`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Tasks consumed by one flow run. Flows with many steps cost more.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one flow action took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Succeeded or failed. Count it alongside a condition to alert on failing flows.`}]},circuits:{label:`Circuits`,recordNoun:`circuit runs`,blank:!1,properties:[{name:`circuit_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Circuit executions included in your plan for the current cycle.`},{name:`circuit_runs_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`circuit_limit`],description:`Circuit executions so far this cycle. Resets when the cycle rolls over.`},{name:`steps_per_run`,kind:`event`,unit:`step`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Steps one circuit run went through.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one circuit run took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Completed, failed or timed out. Count it alongside a condition to alert on failing circuits.`}]},mail_merge:{label:`Mail merge email`,recordNoun:`merges`,blank:!1,properties:[{name:`merge_limit`,kind:`constant`,unit:`merge`,aggs:[],description:`Mail merges your org can run per day. The limit is the same in every edition, and extra merges can be purchased.`},{name:`merges_used_today`,kind:`total`,unit:`merge`,aggs:[`max`],limits:[`merge_limit`],description:`Merges run so far today. Both the mail merge action and print preview from a mail merge template count.`}]},export:{label:`Export`,recordNoun:`exports`,blank:!1,properties:[{name:`export_limit`,kind:`constant`,unit:`export`,aggs:[],description:`Exports your org can start per day. It depends on the edition, from 10 on Free up to 1,000 on Ultimate.`},{name:`exports_today`,kind:`total`,unit:`export`,aggs:[`max`],limits:[`export_limit`],description:`Exports started so far today. Resets daily.`}]},email_storage:{label:`Email storage`,recordNoun:`emails`,blank:!1,properties:[{name:`email_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Email storage for the org: 5 GB per user, up to 500 GB, pooled across all users. It is separate from Zoho Mail storage.`},{name:`email_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`email_storage_limit`],description:`Storage used by emails kept in CRM, content and attachments, across all users. It goes down when emails are deleted.`},{name:`email_size`,kind:`event`,unit:`megabyte`,aggs:[`avg`,`max`,`min`,`sum`,`count`],description:`Size of one stored email, including its attachments.`}]},data_backup:{label:`Data backup`,recordNoun:`backups`,blank:!1,properties:[{name:`backup_limit`,kind:`constant`,unit:`backup`,aggs:[],description:`Free backups per month: 2 on Standard, Professional and Enterprise, and 4 on Ultimate. Extra backups are paid.`},{name:`backups_used_this_month`,kind:`total`,unit:`backup`,aggs:[`max`],limits:[`backup_limit`],description:`Backups taken so far this month. Resets each month.`}]},data_enrichment:{label:`Data enrichment`,recordNoun:`enrichments`,blank:!1,properties:[{name:`enrichment_limit`,kind:`constant`,unit:`record`,aggs:[],description:`Records Zia can enrich per month: 500 per user license on Enterprise and 2,000 on Ultimate, up to 50,000 records.`},{name:`records_enriched_this_month`,kind:`total`,unit:`record`,aggs:[`max`],limits:[`enrichment_limit`],description:`Records enriched so far this month, across all modules. Resets each month.`}]},kiosk:{label:`Kiosk`,recordNoun:`kiosks`,blank:!0,properties:[{name:`kiosk_limit`,kind:`constant`,unit:`kiosk`,aggs:[],description:`Kiosks your org can create: 2 on Standard, 7 on Professional, 25 on Enterprise, and 50 on Ultimate, CRM Plus and Zoho One.`},{name:`kiosk_component_limit`,kind:`constant`,unit:`component`,aggs:[],description:`Components allowed in a single kiosk.`},{name:`kiosks_created`,kind:`total`,unit:`kiosk`,aggs:[`max`],limits:[`kiosk_limit`],description:`Kiosks created so far. It goes down when a kiosk is deleted.`},{name:`components_per_kiosk`,kind:`event`,unit:`component`,aggs:[`max`,`min`,`avg`,`count`],limits:[`kiosk_component_limit`],description:`Components in one kiosk when it is saved.`}]}},C={free_limit:25e3,paid_limit:1e5,overall_limit:125e3,execution_limit:1e5,storage_limit:500,email_limit:1e4,webhook_limit:5e4,file_storage_limit:200,parser_limit:5e3,task_limit:2e4,circuit_limit:1e4,merge_limit:1e3,export_limit:500,email_storage_limit:50,backup_limit:4,enrichment_limit:5e4,kiosk_limit:25,kiosk_component_limit:50},w={gigabyte:`GB`,megabyte:`MB`,millisecond:`ms`,credit:`credits`,execution:`executions`,email:`emails`,recipient:`recipients`,bounce:`bounces`,call:`calls`,retry:`retries`,task:`tasks`,step:`steps`,field:`fields`,merge:`merges`,export:`exports`,record:`records`,backup:`backups`,kiosk:`kiosks`,component:`components`}})),Ce=e((()=>{}));function we({value:e,onSave:t,onClose:n}){return(0,E.jsx)(_,{value:e,options:ye,allowAdditionalEmails:!0,onSave:t,onClose:n})}var E,D=e((()=>{ve(),g(),Ce(),E=r(),we.__docgenInfo={description:``,methods:[],displayName:`UsageRecipientDialog`,props:{value:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ value: string; label: string; kind: UserSelectionKind }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'email'`}],required:!0}}]}}],raw:`UsageRecipient[]`},description:``},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: UsageRecipient[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ value: string; label: string; kind: UserSelectionKind }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'email'`}],required:!0}}]}}],raw:`UsageRecipient[]`},name:`value`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));function O(e){return M[e]??e.split(`_`).map((e,t)=>N[e]??(t>0&&[`per`,`this`].includes(e)?e:e.charAt(0).toUpperCase()+e.slice(1))).join(` `)}function k(e){return S[e]?.properties.filter(e=>e.kind!==`constant`&&!e.noAgg)??[]}function A(e=``){let t=k(e)[0];return{feature:e,measure:t?.name??``,calculation:t?.aggs[0]??``,constant:t?.limits?.[0]??``,mode:t?.limits?.length?`pct`:`val`,comparator:`gt`,value:t?.limits?.length?`80`:`90000`,valueTo:t?.limits?.length?`100`:`100000`,windowValue:`12`,windowUnit:`hours`,interval:`hour:1`}}function j(e){return k(e.feature).find(t=>t.name===e.measure)}function Te(e,t){let n=j(e),r=k(e.feature).find(e=>e.name===t);if(!r)return e;let i=r.kind===n?.kind&&r.aggs.includes(e.calculation)?e.calculation:r.aggs[0],a=r.limits?.length?e.mode:`val`;return{...e,measure:t,calculation:i,constant:r.limits?.[0]??``,mode:a,value:a===e.mode?e.value:a===`pct`?`80`:`90000`,valueTo:a===e.mode?e.valueTo:a===`pct`?`100`:`100000`}}function Ee(e){let t=j(e);return!!t&&!([`data_storage`,`file_storage`,`email_storage`,`mail_merge`].includes(e.feature)&&(t.kind===`total`||e.calculation===`sum`))}function De(e){let t=j(e);return e.calculation===`count`?S[e.feature].recordNoun:w[t?.unit??``]??``}function Oe(e){let t=S[e.feature];if(!t)return`Select a feature.`;if(t.blank)return;let n=j(e);if(!n||!n.aggs.includes(e.calculation))return`Select a supported measure and calculation.`;let r=[`bt`,`nb`].includes(e.comparator);if(!P.some(t=>t.value===e.comparator))return`Select a comparison.`;if(e.mode===`pct`&&!n.limits?.includes(e.constant))return`Select a supported allocation limit.`;if((r?[e.value,e.valueTo]:[e.value]).some(t=>t.trim()===``||!Number.isFinite(Number(t))||(e.mode===`pct`?Number(t)<=0||Number(t)>500:Number(t)<0)))return e.mode===`pct`?`Enter a percentage greater than 0 and up to 500.`:`Enter a value of zero or greater.`;if(r&&Number(e.value)>Number(e.valueTo))return`From can’t be greater than To.`;if(Ee(e)&&(!Number.isInteger(Number(e.windowValue))||Number(e.windowValue)<1||!I[e.windowUnit]||Number(e.windowValue)>I[e.windowUnit]))return`Enter a whole-number window between 1 and ${I[e.windowUnit]} ${e.windowUnit}.`;if(!F.some(t=>t.value===e.interval))return`Select a notification interval.`}function ke(e){let t=j(e);if(!t||S[e.feature].blank)return``;let n=e=>(Math.round(e*100)/100).toLocaleString(`en-US`),r=[`bt`,`nb`].includes(e.comparator)?[e.value,e.valueTo]:[e.value],i=t.kind===`total`?`Current ${O(t.name)}`:`${je[e.calculation]} of ${O(t.name)}`,a=r.map(e=>n(Number(e))).join(` and `);if(e.mode===`pct`){let i=C[e.constant];a=r.map(e=>`${n(Number(e))}%`).join(` and `)+` of ${O(e.constant)}`,i!=null&&(a+=` (${r.map(e=>n(Number(e)/100*i)).join(` and `)} ${w[t.unit??``]??``})`)}else a+=` ${De(e)}`;let o=Ee(e)?` within the last ${e.windowValue} ${Number(e.windowValue)===1?e.windowUnit.replace(/s$/,``):e.windowUnit}`:``,s=F.find(t=>t.value===e.interval)?.label??``;return`Alert when ${i} ${L[e.comparator]} ${a}${o}. You’ll be notified at most once every ${s}.`}function Ae(e){let t=j(e);if(!t||S[e.feature]?.blank)return`#Feature usage alert.`;let n=P.find(t=>t.value===e.comparator)?.label??`>`;return`#Feature: ${t.kind===`total`?``:`#Calculation `}#Measure ${n} #Threshold${e.mode===`pct`?`% of #Limit`:``}${Ee(e)?` in #Window`:``}.`}var M,N,je,P,F,Me,I,L,Ne,Pe=e((()=>{T(),M={webhook_calls_today:`Webhook Calls`,emails_sent_today:`Emails Sent`,merges_used_today:`Total Merges`,exports_today:`Total Exports`,backups_used_this_month:`Backups Used`,records_enriched_this_month:`Records Enriched`,free_credits_used_this_cycle:`Free Credits Used`,paid_credits_used_this_cycle:`Paid Credits Used`,overall_credits_used_this_cycle:`Overall Credits Used`},N={api:`API`,uri:`URI`,oauth:`OAuth`},je={count:`Count`,count_distinct:`Distinct count`,sum:`Total`,avg:`Average`,max:`Maximum`,min:`Minimum`},P=[{value:`eq`,label:`=`},{value:`ne`,label:`!=`},{value:`lt`,label:`<`},{value:`gt`,label:`>`},{value:`bt`,label:`between`},{value:`nb`,label:`not between`}],F=[{value:`minute:15`,label:`15 minutes`},{value:`minute:30`,label:`30 minutes`},{value:`minute:45`,label:`45 minutes`},{value:`hour:1`,label:`1 hour`},{value:`hour:2`,label:`2 hours`},{value:`hour:4`,label:`4 hours`},{value:`hour:8`,label:`8 hours`},{value:`hour:12`,label:`12 hours`},{value:`hour:24`,label:`24 hours`}],Me=[{value:`minutes`,label:`Minutes`},{value:`hours`,label:`Hours`},{value:`days`,label:`Days`}],I={minutes:60,hours:24,days:30},L={eq:`equals`,ne:`doesn’t equal`,lt:`is less than`,gt:`is greater than`,bt:`is between`,nb:`is not between`},Ne=[{value:`Feature`,label:`Feature`},{value:`Measure`,label:`Based on`},{value:`Calculation`,label:`Calculation`},{value:`Threshold`,label:`Threshold`},{value:`Limit`,label:`Allocation limit`},{value:`Window`,label:`Time window`}]}));function R({label:e,children:t,align:n=`center`,labelOffset:r}){let i=r===void 0?n===`start`?2:0:r;return(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${U} auto`,columnGap:20,alignItems:n},children:[(0,V.jsx)(`span`,{style:{...W,paddingTop:i},children:e}),(0,V.jsx)(`div`,{"data-usage-field":e?``:void 0,style:{minWidth:0,width:e?`max-content`:void 0},children:t})]})}function Fe({row:e,onAction:t}){return(0,V.jsx)(`span`,{className:`usage-page__row-actions`,children:(0,V.jsx)(u,{width:27,triggerIcon:(0,V.jsx)(a,{}),triggerAriaLabel:`More options for ${e.name}`,value:``,panelStyle:{width:160,"--usage-actions-menu":1},options:[{value:`edit`,label:`Edit`},{value:`clone`,label:`Clone`},...!e.system&&e.status===`Active`?[{value:`pause`,label:`Pause`}]:[],...!e.system&&e.status===`Paused`?[{value:`resume`,label:`Resume`}]:[],{value:`delete`,label:`Delete`,disabled:e.system,disabledTooltip:`System-defined notifications cannot be deleted.`}],onChange:n=>t(n,e)})})}function z({channels:e=[]}){let t=(0,B.useRef)(null),[n,r]=(0,B.useState)(1);(0,B.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>{let t=1;e.querySelectorAll(`[data-channel-count]`).forEach(n=>{n.getBoundingClientRect().width<=e.clientWidth&&(t=Number(n.dataset.channelCount))}),r(t)},i=new ResizeObserver(n);i.observe(e),n();let a=!0;return document.fonts.ready.then(()=>{a&&n()}),()=>{a=!1,i.disconnect()}},[e]);let i=Math.min(n,e.length),a=e.slice(i);return(0,V.jsxs)(`span`,{ref:t,className:`usage-page__channels`,children:[(0,V.jsx)(`span`,{className:`usage-page__channel-label`,title:e.slice(0,i).join(`, `),children:e.slice(0,i).join(`, `)||`-`}),a.length>0&&(0,V.jsxs)(`span`,{className:`usage-page__more`,children:[` and `,(0,V.jsx)(l,{content:(0,V.jsx)(`span`,{className:`usage-page__hover-list`,children:a.map(e=>(0,V.jsx)(`span`,{children:e},e))}),variant:`white`,placement:`top`,followCursor:!0,children:(0,V.jsxs)(`button`,{type:`button`,className:`usage-page__more-trigger`,children:[a.length,` more`]})})]}),(0,V.jsx)(`span`,{className:`usage-page__channel-measure`,"aria-hidden":`true`,children:e.map((t,n)=>(0,V.jsxs)(`span`,{"data-channel-count":n+1,children:[e.slice(0,n+1).join(`, `),n+1<e.length?` and ${e.length-n-1} more`:``]},n))})]})}var B,V,H,Ie,Le,Re,U,W,ze,Be,G,Ve,He,K,Ue,q,J;e((()=>{B=t(n(),1),d(),ae(),m(),ie(),de(),p(),ne(),ee(),ce(),re(),o(),pe(),v(),y(),h(),he(),x(),T(),b(),D(),Pe(),V=r(),H={title:`Work Items/Usage Limit Notification`,parameters:{layout:`fullscreen`,docs:{description:{component:`Modal pattern for creating usage limit notifications — configure thresholds, notification channels, recipients, and message content.`}}}},Ie=Object.entries(S).map(([e,t])=>({value:e,label:t.label})),Le=[{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Smith`},{value:`carol`,label:`Carol Williams`},{value:`david`,label:`David Brown`},{value:`eve`,label:`Eve Davis`}],Re=[{value:`general`,label:`#general`},{value:`engineering`,label:`#engineering`},{value:`alerts`,label:`#alerts`},{value:`support`,label:`#support`},{value:`marketing`,label:`#marketing`}],U=`155px`,W={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,whiteSpace:`nowrap`,textAlign:`right`},ze={margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-h2)`,fontWeight:`var(--ds-font-weight-semibold)`,lineHeight:`var(--ds-line-height-h2)`,color:`var(--ds-text-heading)`},Be={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-semibold)`,color:`var(--ds-text-base)`},G={"Priya Nair":`user_03.jpg`,"Arjun Kumar":`user_04.jpg`,"Meera Iyer":`user_07.jpg`,"Sam Carter":`user_08.jpg`},Ve=`Priya Nair`,He=[...[`60%`,`5000`,`4000`,`3000`,`2500`].map((e,t)=>({id:`api-${t}`,feature:`API`,name:`Reached add-on limit ${e}`,creator:t>2?`System`:t===2?`Arjun Kumar`:`Priya Nair`,modifier:t>2?`System`:t===2?`Priya Nair`:`Arjun Kumar`,date:t>2?`Jan 12, 2026`:`Jul 3, 2026`,system:t>2,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`})),{id:`functions`,feature:`Functions`,name:`Reached daily limit 5000 calls`,creator:`Meera Iyer`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`webhooks`,feature:`Webhooks`,name:`Slow webhook responses`,creator:`Sam Carter`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Active`},{id:`data-storage`,feature:`Data storage`,name:`Storage above 85%`,creator:`System`,date:`Jan 12, 2026`,system:!0,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`file-storage`,feature:`File storage`,name:`File storage nearly full`,creator:`Priya Nair`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Completed`}],K=e=>(t,n)=>{if(n.system)return`-`;let r=(e===`modifier`?n.modifier:n.creator)??n.creator,i=(e===`modifier`?n.modifiedDate:n.date)??n.date,a=(e===`modifier`?n.modifiedTime:n.time)??n.time,o=`${r} on ${i}${a?` ${a}`:``}`,s=r?G[r]:void 0;return(0,V.jsx)(l,{variant:`white`,placement:`top`,followCursor:!0,wrapperStyle:{display:`inline-flex`,maxWidth:`100%`},content:o,children:(0,V.jsxs)(`span`,{className:`usage-page__person`,tabIndex:0,"aria-label":o,children:[s?(0,V.jsx)(`img`,{src:`/crm-design-system/images/avatars/${s}`,alt:``}):(0,V.jsx)(oe,{name:`user-avatar`}),(0,V.jsx)(`span`,{children:i})]})})},Ue=e=>[{key:`actions`,label:``,width:31,render:(t,n)=>(0,V.jsx)(Fe,{row:n,onAction:e})},{key:`name`,label:`Notification Name`,width:`25%`,render:(e,t)=>(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:600,wrapperStyle:{display:`inline-flex`,maxWidth:`100%`,minWidth:0,verticalAlign:`middle`},content:t.summary||`${t.feature}: ${t.name}. Notify via ${t.channels?.join(`, `)}.`,children:(0,V.jsx)(`span`,{className:`usage-page__name`,tabIndex:0,children:t.name})})},{key:`feature`,label:`Feature`,width:`13%`},{key:`channels`,label:`Notify via`,width:`22%`,render:(e,t)=>(0,V.jsx)(z,{channels:t.channels})},{key:`creator`,label:`Created by`,width:`14%`,render:K(`creator`)},{key:`modifier`,label:`Modified by`,width:`14%`,render:K(`modifier`)},{key:`status`,label:`Status`,width:120,render:(e,t)=>(0,V.jsx)(`span`,{children:t.status})}],q={name:`Create Notification`,render:()=>{let[e,t]=(0,B.useState)(!1),[n,r]=(0,B.useState)(`admin-tools`),[a,o]=(0,B.useState)(`all`),[ee,ne]=(0,B.useState)(`usage`),[re,ie]=(0,B.useState)(`notifications`),[ae,d]=(0,B.useState)(()=>He.map(e=>{let t=Object.entries(S).find(([,t])=>t.label.toLowerCase()===e.feature.toLowerCase())?.[0],n=A(t);if(e.id.startsWith(`api-`)){let t=e.name.split(` `).at(-1);n.mode=t.endsWith(`%`)?`pct`:`val`,n.value=t.replace(`%`,``)}else e.id===`functions`?(n.mode=`val`,n.value=`5000`):e.id===`data-storage`&&(n.mode=`pct`,n.value=`85`);return{...e,feature:S[n.feature]?.label??e.feature,time:`10:30 AM`,summary:ke(n),config:{trigger:n,recipients:[],pushEmailEnabled:!0,externalAppsEnabled:!!e.channels?.some(e=>[`Zoho Cliq`,`Slack`].includes(e)),notifyPush:!!e.channels?.includes(`Push Notification`),notifyEmail:!!e.channels?.includes(`Emails`),notifyZohoCliq:!!e.channels?.includes(`Zoho Cliq`),notifySlack:!!e.channels?.includes(`Slack`),users:[],channels:[],message:Ae(n)}}})),[p,ce]=(0,B.useState)(`all`),[m,de]=(0,B.useState)(`all`),[pe,he]=(0,B.useState)(``),[h,ve]=(0,B.useState)(),[g,_]=(0,B.useState)(),ye=ae.filter(e=>(a===`all`||e.feature===a)&&(p===`all`||(p===`system`?e.system:!e.system))&&(m===`all`||e.status===m)&&`${e.name} ${e.feature}`.toLowerCase().includes(pe.trim().toLowerCase())),v=(0,B.useId)(),[y,b]=(0,B.useState)(``),[x,C]=(0,B.useState)(!1),[w,T]=(0,B.useState)(()=>A()),[Ce,E]=(0,B.useState)(),D=j(w),M=S[w.feature],N=e=>{T(t=>({...t,...e})),E(void 0)},[L,Pe]=(0,B.useState)([]),[Fe,z]=(0,B.useState)(!1),[H,G]=(0,B.useState)(!0),[K,q]=(0,B.useState)(!1),[J,We]=(0,B.useState)(!0),[Y,Ge]=(0,B.useState)(!0),[X,Ke]=(0,B.useState)(!0),[Z,qe]=(0,B.useState)(!1),Je=JSON.stringify(w),[Ye,Xe]=(0,B.useState)({criteriaKey:``,value:``}),Ze=Ye.criteriaKey===Je?Ye.value:Ae(w),[Qe,$e]=(0,B.useState)(),[et,tt]=(0,B.useState)(),nt={sender:`owner`,subject:y.trim()||`Usage limit notification`,body:`Hello,\n\n${ke(w)||Ze}\n\nRegards,\n\${Organization.OrganizationName}`},[rt,it]=(0,B.useState)(!1),[at,ot]=(0,B.useState)(!0),[st,ct]=(0,B.useState)(!1),[lt,ut]=(0,B.useState)([]),[dt,ft]=(0,B.useState)([]),[Q,pt]=(0,B.useState)([]),[$,mt]=(0,B.useState)([]),ht=()=>{ut(Q),ft($),it(!0)},gt=()=>{pt(lt),mt(dt),it(!1)},_t=()=>it(!1),vt=!(H&&Y&&!J&&(!K||!X&&!Z)),yt=!!D&&!M?.blank,bt=Ee(w),xt=[`bt`,`nb`].includes(w.comparator),St=ke(w),Ct=(0,B.useRef)(null),[wt,Tt]=(0,B.useState)(null),[Et,Dt]=(0,B.useState)(625);(0,B.useEffect)(()=>{let t=wt?.closest(`.modal-dialog`);if(!e||!wt||!t)return;let n=Array.from(wt.querySelectorAll(`[data-usage-field], input[type="text"], [aria-label="Feature"]`)),r=()=>{let e=t.getBoundingClientRect().left,r=Math.max(...n.map(e=>e.getBoundingClientRect().right));Dt(Math.ceil(r-e+30))},i=new ResizeObserver(r);return n.forEach(e=>i.observe(e)),window.addEventListener(`resize`,r),r(),()=>{i.disconnect(),window.removeEventListener(`resize`,r)}},[e,wt,yt,K,H,vt]);let Ot=(e,n=!1)=>{ve(n?void 0:e?.id),b(e?`${e.name}${n?`_Cloned`:``}`:``);let r=e?.config,i=Object.entries(S).find(([,t])=>t.label.toLowerCase()===e?.feature.toLowerCase())?.[0];T(r?{...r.trigger}:A(i)),Pe(r?.recipients??[]),G(r?.pushEmailEnabled??!0),q(r?.externalAppsEnabled??!!e?.channels?.some(e=>[`Zoho Cliq`,`Slack`].includes(e))),We(r?.notifyPush??(!e||!!e.channels?.includes(`Push Notification`))),Ge(r?.notifyEmail??(!e||!!e.channels?.includes(`Emails`))),Ke(r?.notifyZohoCliq??(!e||!!e.channels?.includes(`Zoho Cliq`))),qe(r?.notifySlack??!!e?.channels?.includes(`Slack`)),pt(r?.users??[]),mt(r?.channels??[]),Xe(r?{criteriaKey:JSON.stringify(r.trigger),value:r.message}:{criteriaKey:``,value:``}),tt(r?.template),C(!1),E(void 0),t(!0)},kt=Ue((e,t)=>{e===`edit`||e===`clone`?Ot(t,e===`clone`):e===`delete`?t.system||_(t):!t.system&&t.status!==`Completed`&&d(n=>n.map(n=>n.id===t.id&&!n.system?{...n,status:e===`pause`?`Paused`:`Active`}:n))});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`style`,{children:`
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
        `}),(0,V.jsxs)(`div`,{className:`usage-page`,children:[(0,V.jsx)(`aside`,{className:`usage-page__sidebar`,"aria-label":`Setup navigation`,children:(0,V.jsx)(be,{variant:`setup`,searchable:!0,width:`100%`,items:xe,activeId:n,onSelect:r})}),(0,V.jsx)(`header`,{className:`usage-page__topband`,children:(0,V.jsx)(me,{moduleLabel:null,showTerritory:!1})}),(0,V.jsxs)(`main`,{className:`usage-page__workspace`,"aria-label":`Usage limit notifications`,children:[(0,V.jsx)(_e,{tabs:[{id:`usage`,label:`Usage Limits`},{id:`admin`,label:`Admin tool`}],activeTab:ee,onChange:ne}),ee===`usage`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`usage-page__sections`,children:(0,V.jsx)(_e,{variant:`secondary`,tabs:[{id:`limits`,label:`Usage Limits`},{id:`notifications`,label:`Notification Configurator`}],activeTab:re,onChange:ie})}),re===`notifications`?(0,V.jsxs)(`section`,{className:`usage-page__content`,"aria-label":`Notification Configurator`,children:[(0,V.jsx)(`div`,{className:`usage-page__toolbar`,children:(0,V.jsx)(`p`,{children:`Manage CRM usage limits and events by enabling admins to be notified when required`})}),(0,V.jsxs)(`div`,{className:`usage-page__toolbar`,children:[(0,V.jsxs)(`div`,{className:`usage-page__filters`,children:[(0,V.jsxs)(`div`,{className:`usage-page__search`,children:[(0,V.jsx)(i,{"aria-hidden":`true`}),(0,V.jsx)(f,{layout:`vertical`,type:`search`,width:200,"aria-label":`Search notifications`,placeholder:`Search`,value:pe,onChange:e=>he(e.target.value)})]}),(0,V.jsx)(u,{triggerAriaLabel:`Filter notifications by feature`,width:150,value:a,panelStyle:{width:`max-content`,minWidth:150,maxWidth:`calc(100vw - 32px)`},options:[{value:`all`,label:`All Features`},...Ie.map(e=>({value:e.label,label:e.label}))],onChange:o}),(0,V.jsx)(u,{triggerAriaLabel:`Filter notifications by type`,width:150,value:p,options:[{value:`all`,label:`All Types`},{value:`system`,label:`System Defined`},{value:`user`,label:`User Defined`}],onChange:ce}),(0,V.jsx)(u,{triggerAriaLabel:`Filter notifications by status`,width:150,value:m,options:[{value:`all`,label:`All Status`},...[`Active`,`Paused`,`Completed`].map(e=>({value:e,label:e}))],onChange:de})]}),(0,V.jsx)(te,{variant:`primary`,onClick:()=>Ot(),children:`Create Notification`})]}),(0,V.jsx)(`div`,{className:`usage-page__table-region`,role:`region`,"aria-label":`Notifications table`,tabIndex:0,children:(0,V.jsx)(ge,{variant:`report`,width:`100%`,columns:kt,rows:ye,emptyMessage:`No notifications found`})})]}):(0,V.jsxs)(`section`,{className:`usage-page__content`,children:[(0,V.jsx)(`h1`,{children:`Usage Limits`}),(0,V.jsx)(`p`,{children:`Configure usage alerts in the Notification Configurator tab.`})]})]}):(0,V.jsxs)(`section`,{className:`usage-page__content`,children:[(0,V.jsx)(`h1`,{children:`Admin tool`}),(0,V.jsx)(`p`,{children:`Select Usage Limits to manage usage notifications.`})]})]})]}),(0,V.jsx)(ue,{isOpen:rt,title:`Zoho Cliq Notification`,onClose:_t,onCancel:_t,onSave:gt,cancelLabel:`Cancel`,saveLabel:`Done`,width:520,children:(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,paddingRight:20},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,V.jsx)(c,{label:`Notify to users`,checked:at,onChange:e=>ot(e.target.checked)}),at&&(0,V.jsx)(fe,{value:lt,options:Le,onChange:ut,placeholder:`Select users`,width:`100%`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,V.jsx)(c,{label:`Notify in Channels`,checked:st,onChange:e=>ct(e.target.checked)}),st&&(0,V.jsx)(fe,{value:dt,options:Re,onChange:ft,placeholder:`Select channels`,width:`100%`})]})]})}),(0,V.jsx)(ue,{isOpen:e,title:`Configure Usage Limit Notification`,className:`usage-notification-modal`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>{if(!y.trim()){C(!0),document.getElementById(v)?.focus();return}let e=Oe(w);if(E(e),e)return;b(y.trim());let n=[...H&&J?[`Push Notification`]:[],...H&&Y?[`Emails`]:[],...K&&X?[`Zoho Cliq`]:[],...K&&Z?[`Slack`]:[]],r=ae.find(e=>e.id===h),i={...r,id:h??`notification-${Date.now()}`,feature:M.label,name:y.trim(),creator:r?.creator??Ve,date:r?.date??new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),time:r?.time??new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),modifier:Ve,modifiedDate:new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),modifiedTime:new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),channels:n,status:r?.status??`Active`,summary:ke(w),config:{trigger:{...w},recipients:L,pushEmailEnabled:H,externalAppsEnabled:K,notifyPush:J,notifyEmail:Y,notifyZohoCliq:X,notifySlack:Z,users:Q,channels:$,message:Ze,template:et}};d(e=>h?e.map(e=>e.id===h?i:e):[...e,i]),C(!1),t(!1)},cancelLabel:`Cancel`,saveLabel:`Save`,width:Et,children:(0,V.jsxs)(`div`,{ref:Tt,style:{display:`flex`,flexDirection:`column`,gap:30},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${U} 1fr`,columnGap:20,alignItems:`center`},children:[(0,V.jsx)(`label`,{htmlFor:v,style:W,children:`Notification Name`}),(0,V.jsx)(f,{id:v,type:`text`,layout:`vertical`,width:390,value:y,"aria-required":`true`,"aria-invalid":x||void 0,error:x,helperText:x?`Enter a notification name.`:void 0,onChange:e=>{b(e.target.value),e.target.value.trim()&&C(!1)}})]}),(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${U} 1fr`,columnGap:20,alignItems:`center`},children:[(0,V.jsx)(`span`,{style:W,children:`Feature`}),(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Feature`,placeholder:`Select`,options:Ie,width:390,value:w.feature,onChange:e=>{T(A(e)),E(void 0)}})]}),yt&&D&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R,{label:`Based on`,children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:[(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Based on`,width:390,tooltipVariant:`white`,tooltipMaxWidth:600,options:k(w.feature).map(e=>({value:e.name,label:O(e.name),trailingIcon:(0,V.jsx)(l,{content:e.description,variant:`white`,maxWidth:600,placement:`top`,followCursor:!0,children:(0,V.jsx)(s,{className:`usage-notification-measure-info`,width:12,height:12,tabIndex:0,role:`img`,"aria-label":`About ${O(e.name)}`})})})),value:w.measure,onChange:e=>{T(t=>Te(t,e)),E(void 0)}}),D.aggs.length>1&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{style:W,children:`by`}),(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Calculation`,width:150,options:D.aggs.map(e=>({value:e,label:je[e]})),value:w.calculation,onChange:e=>N({calculation:e})})]})]})}),(0,V.jsx)(R,{label:`When`,children:(0,V.jsxs)(`div`,{ref:Ct,className:`usage-notification-when`,style:{display:`flex`,width:`max-content`,alignItems:`center`,flexWrap:`nowrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:[!!D.limits?.length&&(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Threshold type`,width:150,options:[{value:`pct`,label:`Percent`},{value:`val`,label:`Value`}],value:w.mode,onChange:e=>N({mode:e,value:e===`pct`?`80`:`90000`,valueTo:e===`pct`?`100`:`100000`})}),(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Comparator`,width:150,options:P,value:w.comparator,onChange:e=>N({comparator:e})}),(0,V.jsx)(f,{layout:`vertical`,type:`number`,width:150,"aria-label":xt?`Threshold from`:`Threshold value`,min:w.mode===`pct`?.01:0,max:w.mode===`pct`?500:void 0,step:`any`,value:w.value,placeholder:xt?`From`:``,onChange:e=>N({value:e.target.value})}),xt&&(0,V.jsx)(f,{layout:`vertical`,type:`number`,width:150,"aria-label":`Threshold to`,min:w.mode===`pct`?.01:0,max:w.mode===`pct`?500:void 0,step:`any`,value:w.valueTo,placeholder:`To`,onChange:e=>N({valueTo:e.target.value})}),w.mode===`pct`&&(D.limits?.length??0)>1&&(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Limit`,width:150,options:D.limits.map(e=>({value:e,label:O(e)})),value:w.constant,onChange:e=>N({constant:e})}),w.mode===`val`&&(0,V.jsx)(`span`,{style:W,children:De(w)}),bt&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{style:W,children:`over the last`}),(0,V.jsx)(f,{layout:`vertical`,type:`number`,width:150,"aria-label":`Window length`,min:1,max:I[w.windowUnit],step:1,value:w.windowValue,onChange:e=>N({windowValue:e.target.value})}),(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Window unit`,width:150,options:Me,value:w.windowUnit,onChange:e=>N({windowUnit:e})})]})]})})]}),(0,V.jsx)(R,{label:`Notify once every`,children:(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Notify once every`,options:F,width:390,value:w.interval,onChange:e=>N({interval:e})})}),St&&(0,V.jsx)(R,{label:``,align:`start`,children:(0,V.jsx)(`div`,{style:{width:`fit-content`,maxWidth:`calc(100% - 30px)`,marginRight:30,overflowWrap:`anywhere`,boxSizing:`border-box`,padding:`var(--ds-font-size-base)`,border:`1px solid var(--ds-border-subtle)`,borderRadius:`calc(var(--ds-font-size-base) * 0.4)`,background:`var(--ds-bg-common-bg)`,lineHeight:`var(--ds-line-height-base)`,color:`var(--ds-text-base)`,fontSize:`var(--ds-font-size-base)`,fontFamily:`var(--ds-font-family-base)`},"aria-live":`polite`,children:St})}),Ce&&(0,V.jsx)(R,{label:``,children:(0,V.jsx)(`span`,{role:`alert`,style:{color:`var(--ds-status-negative)`},children:Ce})})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,V.jsx)(`h2`,{style:ze,children:`Notify via`}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`span`,{style:Be,children:`Push Notification / Email`}),(0,V.jsx)(se,{checked:H,onChange:e=>G(e.target.checked),"aria-label":`Toggle push notification and email`})]}),H&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,V.jsx)(R,{label:`Send notification to`,children:(0,V.jsxs)(`div`,{className:`usage-recipient-field${L.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Send notification to`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&z(!0)},children:[L.length===0?(0,V.jsx)(te,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:()=>z(!0),children:`Select User`}):[`user`,`group`,`role`,`role-and-subordinates`,`email`].map(e=>{let t=L.filter(t=>t.kind===e),n={user:`Users`,group:`Groups`,role:`Roles`,"role-and-subordinates":`Roles and Subordinates`,email:`Emails`}[e];return t.length>0&&(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[n,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${n}: ${t.length}. Edit selected recipients`,onClick:()=>z(!0),children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:n}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)}),L.length>0&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit notification recipients`,"aria-haspopup":`dialog`,onClick:()=>z(!0),children:(0,V.jsx)(oe,{name:`CrmEditFilledMd`,size:14})})]})}),(0,V.jsx)(R,{label:`Notify Via`,align:`start`,children:(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsx)(c,{label:`Push Notification`,checked:J,onChange:e=>We(e.target.checked)}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,V.jsx)(c,{label:`Email`,checked:Y,onChange:e=>Ge(e.target.checked)}),Y&&(0,V.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Preview email template`,"aria-haspopup":`dialog`,onClick:()=>$e(`preview`),children:`Preview`}),(0,V.jsx)(`span`,{style:{color:`var(--ds-text-muted)`,fontSize:`var(--ds-font-size-base)`,lineHeight:1},children:`·`}),(0,V.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Edit email template`,"aria-haspopup":`dialog`,onClick:()=>$e(`edit`),children:`Edit Template`})]})]})]})})]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`span`,{style:Be,children:`External apps`}),(0,V.jsx)(se,{checked:K,onChange:e=>q(e.target.checked),"aria-label":`Toggle external app notifications`})]}),K&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsx)(R,{label:`Notify Via`,align:`center`,children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,V.jsx)(c,{label:`Zoho Cliq`,checked:X,onChange:e=>Ke(e.target.checked)})}),(0,V.jsx)(`div`,{style:{opacity:+!!X,pointerEvents:X?`auto`:`none`},children:(0,V.jsxs)(`div`,{className:`usage-recipient-field usage-cliq-field${Q.length>0||$.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Zoho Cliq recipients`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&ht()},children:[Q.length===0&&$.length===0&&(0,V.jsx)(te,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:ht,children:`Select User`}),[{label:`Users`,recipients:Q},{label:`Channels`,recipients:$}].map(({label:e,recipients:t})=>t.length>0&&(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[e,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${e}: ${t.length}. Edit Zoho Cliq recipients`,onClick:ht,children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:e}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)),(Q.length>0||$.length>0)&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit Zoho Cliq recipients`,"aria-haspopup":`dialog`,onClick:ht,children:(0,V.jsx)(oe,{name:`CrmEditFilledMd`,size:14})})]})})]})}),(0,V.jsx)(`div`,{style:{paddingLeft:`calc(${U} + 20px)`},children:(0,V.jsx)(c,{label:`Slack`,checked:Z,onChange:e=>qe(e.target.checked)})})]})]})]}),vt&&(0,V.jsx)(R,{label:`Notification message`,align:`start`,labelOffset:7,children:(0,V.jsx)(le,{"aria-label":`Notification message`,layout:`vertical`,variant:`multiline`,width:390,defaultValue:Ze,mergeFields:Ne,hint:`Type # to insert merge field`,onChange:e=>Xe({criteriaKey:Je,value:e})},Je)})]})}),g&&(0,V.jsx)(ue,{type:`alert`,variant:`error`,isOpen:!0,title:`Delete "${g.name}"`,width:460,confirmLabel:`Delete`,cancelLabel:`Cancel`,onClose:()=>_(void 0),onCancel:()=>_(void 0),onSave:()=>{g.system||d(e=>e.filter(e=>e.id!==g.id)),_(void 0)}}),Fe&&(0,V.jsx)(we,{value:L,onClose:()=>z(!1),onSave:e=>{Pe(e),z(!1)}}),Qe&&(0,V.jsx)(Se,{kind:`email`,title:Qe===`preview`?`Usage Notification Email Preview`:`Edit Email Content`,readOnly:Qe===`preview`,initial:et,defaults:nt,onClose:()=>$e(void 0),onSave:e=>{tt(e),$e(void 0)}})]})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Create Notification',
  render: () => {
    const [open, setOpen] = useState(false);
    const [sidebarId, setSidebarId] = useState('admin-tools');
    const [featureFilter, setFeatureFilter] = useState('all');
    const [pageTab, setPageTab] = useState('usage');
    const [sectionTab, setSectionTab] = useState('notifications');
    const [savedRows, setSavedRows] = useState<UsageListRow[]>(() => USAGE_LIST_ROWS.map(row => {
      const featureKey = Object.entries(USAGE_FEATURES).find(([, item]) => item.label.toLowerCase() === row.feature.toLowerCase())?.[0];
      const trigger = createUsageTrigger(featureKey);
      // Seed demo rules with real editable criteria, shared by their hover summary.
      if (row.id.startsWith('api-')) {
        const threshold = row.name.split(' ').at(-1)!;
        trigger.mode = threshold.endsWith('%') ? 'pct' : 'val';
        trigger.value = threshold.replace('%', '');
      } else if (row.id === 'functions') {
        trigger.mode = 'val';
        trigger.value = '5000';
      } else if (row.id === 'data-storage') {
        trigger.mode = 'pct';
        trigger.value = '85';
      }
      return {
        ...row,
        feature: USAGE_FEATURES[trigger.feature]?.label ?? row.feature,
        time: '10:30 AM',
        summary: usageTriggerSummary(trigger),
        config: {
          trigger,
          recipients: [],
          pushEmailEnabled: true,
          externalAppsEnabled: !!row.channels?.some(channel => ['Zoho Cliq', 'Slack'].includes(channel)),
          notifyPush: !!row.channels?.includes('Push Notification'),
          notifyEmail: !!row.channels?.includes('Emails'),
          notifyZohoCliq: !!row.channels?.includes('Zoho Cliq'),
          notifySlack: !!row.channels?.includes('Slack'),
          users: [],
          channels: [],
          message: usageNotificationMessage(trigger)
        }
      };
    }));
    const [typeFilter, setTypeFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [editingId, setEditingId] = useState<string>();
    const [pendingDelete, setPendingDelete] = useState<UsageListRow>();
    const visibleRows = savedRows.filter(row => (featureFilter === 'all' || row.feature === featureFilter) && (typeFilter === 'all' || (typeFilter === 'system' ? row.system : !row.system)) && (statusFilter === 'all' || row.status === statusFilter) && \`\${row.name} \${row.feature}\`.toLowerCase().includes(search.trim().toLowerCase()));
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
    const [content, setContent] = useState<HTMLDivElement | null>(null);
    const [modalWidth, setModalWidth] = useState(625);
    useEffect(() => {
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
    }, [open, content, showCriteria, externalAppsEnabled, pushEmailEnabled, showMessage]);
    const openEditor = (row?: UsageListRow, clone = false) => {
      setEditingId(clone ? undefined : row?.id);
      setNotificationName(row ? \`\${row.name}\${clone ? '_Cloned' : ''}\` : '');
      const config = row?.config;
      const featureKey = Object.entries(USAGE_FEATURES).find(([, item]) => item.label.toLowerCase() === row?.feature.toLowerCase())?.[0];
      setTrigger(config ? {
        ...config.trigger
      } : createUsageTrigger(featureKey));
      setNotifyToTags(config?.recipients ?? []);
      setPushEmailEnabled(config?.pushEmailEnabled ?? true);
      setExternalAppsEnabled(config?.externalAppsEnabled ?? !!row?.channels?.some(channel => ['Zoho Cliq', 'Slack'].includes(channel)));
      setNotifyPush(config?.notifyPush ?? (row ? !!row.channels?.includes('Push Notification') : true));
      setNotifyEmail(config?.notifyEmail ?? (row ? !!row.channels?.includes('Emails') : true));
      setNotifyZohoCliq(config?.notifyZohoCliq ?? (row ? !!row.channels?.includes('Zoho Cliq') : true));
      setNotifySlack(config?.notifySlack ?? !!row?.channels?.includes('Slack'));
      setZohoCommittedUsers(config?.users ?? []);
      setZohoCommittedChannels(config?.channels ?? []);
      setMessageDraft(config ? {
        criteriaKey: JSON.stringify(config.trigger),
        value: config.message
      } : {
        criteriaKey: '',
        value: ''
      });
      setEmailTemplate(config?.template);
      setNameError(false);
      setTriggerError(undefined);
      setOpen(true);
    };
    const onRowAction = (action: RowAction, row: UsageListRow) => {
      if (action === 'edit' || action === 'clone') openEditor(row, action === 'clone');else if (action === 'delete') {
        if (!row.system) setPendingDelete(row);
      } else if (!row.system && row.status !== 'Completed') setSavedRows(current => current.map(item => item.id === row.id && !item.system ? {
        ...item,
        status: action === 'pause' ? 'Paused' : 'Active'
      } : item));
    };
    const columns = usageListColumns(onRowAction);
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
                </div>
                <div className="usage-page__toolbar">
                  <div className="usage-page__filters">
                    <div className="usage-page__search">
                      <Search aria-hidden="true" />
                      <Input layout="vertical" type="search" width={200} aria-label="Search notifications" placeholder="Search" value={search} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} />
                    </div>
                    <Dropdown triggerAriaLabel="Filter notifications by feature" width={150} value={featureFilter} panelStyle={{
                    width: 'max-content',
                    minWidth: 150,
                    maxWidth: 'calc(100vw - 32px)'
                  }} options={[{
                    value: 'all',
                    label: 'All Features'
                  }, ...FEATURE_OPTIONS.map(item => ({
                    value: item.label,
                    label: item.label
                  }))]} onChange={setFeatureFilter} />
                    <Dropdown triggerAriaLabel="Filter notifications by type" width={150} value={typeFilter} options={[{
                    value: 'all',
                    label: 'All Types'
                  }, {
                    value: 'system',
                    label: 'System Defined'
                  }, {
                    value: 'user',
                    label: 'User Defined'
                  }]} onChange={setTypeFilter} />
                    <Dropdown triggerAriaLabel="Filter notifications by status" width={150} value={statusFilter} options={[{
                    value: 'all',
                    label: 'All Status'
                  }, ...['Active', 'Paused', 'Completed'].map(status => ({
                    value: status,
                    label: status
                  }))]} onChange={setStatusFilter} />
                  </div>
                  <Button variant="primary" onClick={() => openEditor()}>Create Notification</Button>
                </div>
                <div className="usage-page__table-region" role="region" aria-label="Notifications table" tabIndex={0}>
                  <SetupTable variant="report" width="100%" columns={columns} rows={visibleRows} emptyMessage="No notifications found" />
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
        const existing = savedRows.find(row => row.id === editingId);
        const saved: UsageListRow = {
          ...existing,
          id: editingId ?? \`notification-\${Date.now()}\`,
          feature: feature.label,
          name: notificationName.trim(),
          creator: existing?.creator ?? CURRENT_USAGE_USER,
          date: existing?.date ?? new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }).format(new Date()),
          time: existing?.time ?? new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
          }).format(new Date()),
          modifier: CURRENT_USAGE_USER,
          modifiedDate: new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }).format(new Date()),
          modifiedTime: new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
          }).format(new Date()),
          channels,
          status: existing?.status ?? 'Active',
          summary: usageTriggerSummary(trigger),
          config: {
            trigger: {
              ...trigger
            },
            recipients: notifyToTags,
            pushEmailEnabled,
            externalAppsEnabled,
            notifyPush,
            notifyEmail,
            notifyZohoCliq,
            notifySlack,
            users: zohoCommittedUsers,
            channels: zohoCommittedChannels,
            message,
            template: emailTemplate
          }
        };
        setSavedRows(current => editingId ? current.map(row => row.id === editingId ? saved : row) : [...current, saved]);
        setNameError(false);
        setOpen(false);
      }} cancelLabel="Cancel" saveLabel="Save" width={modalWidth}>
          <div ref={setContent} style={{
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
                        </Button> : (['user', 'group', 'role', 'role-and-subordinates', 'email'] as const).map(kind => {
                      const recipients = notifyToTags.filter(recipient => recipient.kind === kind);
                      const label = {
                        user: 'Users',
                        group: 'Groups',
                        role: 'Roles',
                        'role-and-subordinates': 'Roles and Subordinates',
                        email: 'Emails'
                      }[kind];
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
              <MergeField key={criteriaKey} aria-label="Notification message" layout="vertical" variant="multiline" width={390} defaultValue={message} mergeFields={USAGE_MESSAGE_FIELDS} hint="Type # to insert merge field" onChange={(value: string) => setMessageDraft({
              criteriaKey,
              value
            })} />
            </FormRow>}

          </div>
        </Modal>
        {pendingDelete && <Modal type="alert" variant="error" isOpen title={\`Delete "\${pendingDelete.name}"\`} width={460} confirmLabel="Delete" cancelLabel="Cancel" onClose={() => setPendingDelete(undefined)} onCancel={() => setPendingDelete(undefined)} onSave={() => {
        if (!pendingDelete.system) setSavedRows(current => current.filter(row => row.id !== pendingDelete.id));
        setPendingDelete(undefined);
      }} />}
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
}`,...q.parameters?.docs?.source}}},J=[`CreateNotification`]}))();export{q as CreateNotification,J as __namedExportsOrder,H as default};