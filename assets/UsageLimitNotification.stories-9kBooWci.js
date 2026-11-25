import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-C2Qq_MrP.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{At as i,Q as a,Yt as o,y as s}from"./Icons-jAEkxykW.js";import{r as ee,t as te}from"./Button-WH05PzwQ.js";import{n as c,t as l}from"./Tooltip-CtqMViFE.js";import{n as ne,t as u}from"./Dropdown-_gaWEL05.js";import{n as d,t as f}from"./Icon-DH-ASDJs.js";import{n as p,t as m}from"./Checkbox-DZLglNVi.js";import{n as h,t as g}from"./Input-XSOLS_NX.js";import{n as re,t as ie}from"./MessageBox-CaPkf1Bk.js";import{n as ae,t as oe}from"./Switch-Bn6q0P-0.js";import{n as se,t as ce}from"./Tabs-6pfI7UXf.js";import{n as le,t as ue}from"./MergeField-C25E9wjm.js";import{n as de,t as _}from"./MessageInfo-BQUrdfOl.js";import{n as fe,t as pe}from"./Modal-CgZ1aj-9.js";import{n as v,t as me}from"./Tags-CWpW5RTk.js";import{n as y,t as he}from"./NextGenTopBand-pzYOkTLx.js";import{n as b,t as ge}from"./Table-CWmJI4Jh.js";import{a as x,i as _e,n as ve,o as ye,t as S}from"./UserSelectionModal.data-CLJL0B6R.js";import{i as be,n as xe,r as Se,t as Ce}from"./setupMenuItems-CQ96OMYl.js";import{n as we,t as Te}from"./TemplateDialog-Bu1HIZrq.js";var C=e((()=>{})),w,T,E,D=e((()=>{w={api:{label:`API`,recordNoun:`API calls`,blank:!1,properties:[{name:`free_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits included free with your edition. Read from your subscription when the check runs, so it follows an upgrade by itself.`},{name:`paid_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits you have purchased on top of the free allowance.`},{name:`overall_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Free plus paid credits. Surge capacity is not included.`},{name:`free_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`free_limit`],description:`Free credits spent so far this cycle. Resets when the cycle rolls over.`},{name:`paid_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`paid_limit`],description:`Purchased credits spent so far this cycle. Only starts moving once the free allowance is gone.`},{name:`overall_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`overall_limit`],description:`All credits spent so far this cycle, across every tier.`},{name:`paid_credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`paid_limit`],description:`Paid credits charged by one API call. A bulk read costs more than a single record fetch.`},{name:`credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`overall_limit`,`paid_limit`],description:`Credits charged by one API call across every tier.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one API call took to serve, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the call returned. Count it alongside a condition to alert on failures — for example, calls where status is at least 500.`}]},functions:{label:`Functions`,recordNoun:`executions`,blank:!1,properties:[{name:`execution_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Function executions included in your plan for the current cycle.`},{name:`executions_used_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`execution_limit`],description:`Executions consumed so far this cycle. Resets when the cycle rolls over.`},{name:`credits_used_per_execution`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Credits charged by one function run. Heavier functions cost more per run.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one execution took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Whether the run succeeded or failed. Count it alongside a condition to alert on failing functions.`}]},webhooks:{label:`Webhooks`,recordNoun:`webhook calls`,blank:!1,properties:[{name:`webhook_limit`,kind:`constant`,unit:`call`,aggs:[],description:`Webhook calls your edition allows per day.`},{name:`webhook_calls_today`,kind:`total`,unit:`call`,aggs:[`max`],limits:[`webhook_limit`],description:`Webhook calls fired so far today. Resets at midnight in your org’s time zone.`},{name:`response_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the receiving endpoint took to respond, in milliseconds.`},{name:`retries_per_call`,kind:`event`,unit:`retry`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Retries needed before a call succeeded or was dropped.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the endpoint returned. Count it alongside a condition to alert on failing endpoints.`}]},email_notifications:{label:`Email notifications`,recordNoun:`emails`,blank:!1,properties:[{name:`email_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Emails your org may send per day, set by edition and user count.`},{name:`emails_sent_today`,kind:`total`,unit:`email`,aggs:[`max`],description:`Emails sent so far today. Resets at midnight in your org’s time zone.`},{name:`recipients_per_email`,kind:`event`,unit:`recipient`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Recipients on one email. A mass email to a large view produces a single record with a high value.`},{name:`bounces_per_email`,kind:`event`,unit:`bounce`,aggs:[`sum`,`count`,`avg`],description:`Bounces recorded against one send.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Delivered, bounced or failed. Count it alongside a condition to alert on delivery problems.`}]},data_storage:{label:`Data storage`,recordNoun:`storage events`,blank:!1,properties:[{name:`storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Total storage included in your plan.`},{name:`storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`storage_limit`],description:`Storage your org occupies right now, across all modules. Only goes down when data is deleted.`},{name:`storage_used_per_operation`,kind:`event`,unit:`gigabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`storage_limit`],description:`Storage added by one operation — an import, a bulk create or a single record create.`}]},file_storage:{label:`File storage`,recordNoun:`uploads`,blank:!1,properties:[{name:`file_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`File storage included in your plan, across attachments, documents and inline images.`},{name:`file_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`file_storage_limit`],description:`File storage your org occupies right now. Only goes down when files are deleted.`},{name:`file_size_per_upload`,kind:`event`,unit:`megabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Size of one uploaded file, in megabytes.`}]},email_parser:{label:`Email parser`,recordNoun:`parsed emails`,blank:!1,properties:[{name:`parser_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Inbound emails your plan lets the parser process in a cycle.`},{name:`emails_parsed_this_cycle`,kind:`total`,unit:`email`,aggs:[`max`],limits:[`parser_limit`],description:`Inbound emails parsed so far this cycle. Resets when the cycle rolls over.`},{name:`parse_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the parser took to read one email, in milliseconds.`},{name:`fields_extracted`,kind:`event`,unit:`field`,aggs:[`sum`,`count`,`avg`,`min`],description:`Fields the parser pulled out of one email. A low value can mean the template no longer matches.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Parsed or failed. Count it alongside a condition to alert on emails the parser could not read.`}]},zoho_flow:{label:`Actions by Zoho Flow`,recordNoun:`flow actions`,blank:!1,properties:[{name:`task_limit`,kind:`constant`,unit:`task`,aggs:[],description:`Flow tasks included in your plan for the current cycle.`},{name:`tasks_used_this_cycle`,kind:`total`,unit:`task`,aggs:[`max`],limits:[`task_limit`],description:`Tasks consumed so far this cycle. Resets when the cycle rolls over.`},{name:`tasks_per_run`,kind:`event`,unit:`task`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Tasks consumed by one flow run. Flows with many steps cost more.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one flow action took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Succeeded or failed. Count it alongside a condition to alert on failing flows.`}]},circuits:{label:`Circuits`,recordNoun:`circuit runs`,blank:!1,properties:[{name:`circuit_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Circuit executions included in your plan for the current cycle.`},{name:`circuit_runs_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`circuit_limit`],description:`Circuit executions so far this cycle. Resets when the cycle rolls over.`},{name:`steps_per_run`,kind:`event`,unit:`step`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Steps one circuit run went through.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one circuit run took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Completed, failed or timed out. Count it alongside a condition to alert on failing circuits.`}]},mail_merge:{label:`Mail merge email`,recordNoun:`merges`,blank:!1,properties:[{name:`merge_limit`,kind:`constant`,unit:`merge`,aggs:[],description:`Mail merges your org can run per day. The limit is the same in every edition, and extra merges can be purchased.`},{name:`merges_used_today`,kind:`total`,unit:`merge`,aggs:[`max`],limits:[`merge_limit`],description:`Merges run so far today. Both the mail merge action and print preview from a mail merge template count.`}]},export:{label:`Export`,recordNoun:`exports`,blank:!1,properties:[{name:`export_limit`,kind:`constant`,unit:`export`,aggs:[],description:`Exports your org can start per day. It depends on the edition, from 10 on Free up to 1,000 on Ultimate.`},{name:`exports_today`,kind:`total`,unit:`export`,aggs:[`max`],limits:[`export_limit`],description:`Exports started so far today. Resets daily.`}]},email_storage:{label:`Email storage`,recordNoun:`emails`,blank:!1,properties:[{name:`email_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Email storage for the org: 5 GB per user, up to 500 GB, pooled across all users. It is separate from Zoho Mail storage.`},{name:`email_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`email_storage_limit`],description:`Storage used by emails kept in CRM, content and attachments, across all users. It goes down when emails are deleted.`},{name:`email_size`,kind:`event`,unit:`megabyte`,aggs:[`avg`,`max`,`min`,`sum`,`count`],description:`Size of one stored email, including its attachments.`}]},data_backup:{label:`Data backup`,recordNoun:`backups`,blank:!1,properties:[{name:`backup_limit`,kind:`constant`,unit:`backup`,aggs:[],description:`Free backups per month: 2 on Standard, Professional and Enterprise, and 4 on Ultimate. Extra backups are paid.`},{name:`backups_used_this_month`,kind:`total`,unit:`backup`,aggs:[`max`],limits:[`backup_limit`],description:`Backups taken so far this month. Resets each month.`}]},data_enrichment:{label:`Data enrichment`,recordNoun:`enrichments`,blank:!1,properties:[{name:`enrichment_limit`,kind:`constant`,unit:`record`,aggs:[],description:`Records Zia can enrich per month: 500 per user license on Enterprise and 2,000 on Ultimate, up to 50,000 records.`},{name:`records_enriched_this_month`,kind:`total`,unit:`record`,aggs:[`max`],limits:[`enrichment_limit`],description:`Records enriched so far this month, across all modules. Resets each month.`}]},kiosk:{label:`Kiosk`,recordNoun:`kiosks`,blank:!0,properties:[{name:`kiosk_limit`,kind:`constant`,unit:`kiosk`,aggs:[],description:`Kiosks your org can create: 2 on Standard, 7 on Professional, 25 on Enterprise, and 50 on Ultimate, CRM Plus and Zoho One.`},{name:`kiosk_component_limit`,kind:`constant`,unit:`component`,aggs:[],description:`Components allowed in a single kiosk.`},{name:`kiosks_created`,kind:`total`,unit:`kiosk`,aggs:[`max`],limits:[`kiosk_limit`],description:`Kiosks created so far. It goes down when a kiosk is deleted.`},{name:`components_per_kiosk`,kind:`event`,unit:`component`,aggs:[`max`,`min`,`avg`,`count`],limits:[`kiosk_component_limit`],description:`Components in one kiosk when it is saved.`}]}},T={free_limit:25e3,paid_limit:1e5,overall_limit:125e3,execution_limit:1e5,storage_limit:500,email_limit:1e4,webhook_limit:5e4,file_storage_limit:200,parser_limit:5e3,task_limit:2e4,circuit_limit:1e4,merge_limit:1e3,export_limit:500,email_storage_limit:50,backup_limit:4,enrichment_limit:5e4,kiosk_limit:25,kiosk_component_limit:50},E={gigabyte:`GB`,megabyte:`MB`,millisecond:`ms`,credit:`credits`,execution:`executions`,email:`emails`,recipient:`recipients`,bounce:`bounces`,call:`calls`,retry:`retries`,task:`tasks`,step:`steps`,field:`fields`,merge:`merges`,export:`exports`,record:`records`,backup:`backups`,kiosk:`kiosks`,component:`components`}})),O=e((()=>{}));function Ee({value:e,onSave:t,onClose:n}){return(0,k.jsx)(x,{value:e,options:ve,variant:`individual-users`,allowAdditionalEmails:!0,additionalRecipientOptions:S,onSave:t,onClose:n,footerNote:(0,k.jsx)(_,{variant:`note`,points:[`Email: You can select up to 90 CRM users and add up to 10 additional email addresses. The total number of email recipients cannot exceed 100.`,`Push Notifications: You can select up to 100 CRM users. Additional recipients are not supported.`]})})}var k,De=e((()=>{ye(),_e(),de(),O(),k=r(),Ee.__docgenInfo={description:``,methods:[],displayName:`UsageRecipientDialog`,props:{value:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  kind: UserSelectionKind;
  avatarUrl?: string;
  /** Display provenance only: permissions always target this user's ID, not the source. */
  source?: UserSelectionSource;
  removalDisabledReason?: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'territory' | 'territory-and-subterritories' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'territory'`},{name:`literal`,value:`'territory-and-subterritories'`},{name:`literal`,value:`'email'`}],required:!0}},{key:`avatarUrl`,value:{name:`string`,required:!1}},{key:`source`,value:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  kind: Exclude<UserSelectionKind, 'user' | 'email'>;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'territory' | 'territory-and-subterritories' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'territory'`},{name:`literal`,value:`'territory-and-subterritories'`},{name:`literal`,value:`'email'`}],required:!0},{name:`union`,raw:`'user' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'email'`}]}],raw:`Exclude<UserSelectionKind, 'user' | 'email'>`,required:!0}}]},required:!1},description:`Display provenance only: permissions always target this user's ID, not the source.`},{key:`removalDisabledReason`,value:{name:`string`,required:!1}}]}}],raw:`UsageRecipient[]`},description:``},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: UsageRecipient[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  kind: UserSelectionKind;
  avatarUrl?: string;
  /** Display provenance only: permissions always target this user's ID, not the source. */
  source?: UserSelectionSource;
  removalDisabledReason?: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'territory' | 'territory-and-subterritories' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'territory'`},{name:`literal`,value:`'territory-and-subterritories'`},{name:`literal`,value:`'email'`}],required:!0}},{key:`avatarUrl`,value:{name:`string`,required:!1}},{key:`source`,value:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  kind: Exclude<UserSelectionKind, 'user' | 'email'>;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'territory' | 'territory-and-subterritories' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'territory'`},{name:`literal`,value:`'territory-and-subterritories'`},{name:`literal`,value:`'email'`}],required:!0},{name:`union`,raw:`'user' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'email'`}]}],raw:`Exclude<UserSelectionKind, 'user' | 'email'>`,required:!0}}]},required:!1},description:`Display provenance only: permissions always target this user's ID, not the source.`},{key:`removalDisabledReason`,value:{name:`string`,required:!1}}]}}],raw:`UsageRecipient[]`},name:`value`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));function A(e){return Ie[e]??e.split(`_`).map((e,t)=>Le[e]??(t>0&&[`per`,`this`].includes(e)?e:e.charAt(0).toUpperCase()+e.slice(1))).join(` `)}function j(e){return w[e]?.properties.filter(e=>e.kind!==`constant`&&!e.noAgg)??[]}function Oe(e=``){let t=j(e)[0];return{feature:e,measure:t?.name??``,calculation:t?.aggs[0]??``,constant:t?.limits?.[0]??``,mode:t?.limits?.length?`pct`:`val`,comparator:`gt`,value:t?.limits?.length?`80`:`90000`,valueTo:t?.limits?.length?`100`:`100000`,windowValue:`12`,windowUnit:`hours`,interval:`hour:1`}}function M(e){return j(e.feature).find(t=>t.name===e.measure)}function N(e,t){let n=M(e),r=j(e.feature).find(e=>e.name===t);if(!r)return e;let i=r.kind===n?.kind&&r.aggs.includes(e.calculation)?e.calculation:r.aggs[0],a=r.limits?.length?e.mode:`val`;return{...e,measure:t,calculation:i,constant:r.limits?.[0]??``,mode:a,value:a===e.mode?e.value:a===`pct`?`80`:`90000`,valueTo:a===e.mode?e.valueTo:a===`pct`?`100`:`100000`}}function ke(e){return`${e.measure}:${e.calculation}`}function P(e){return j(e).flatMap(t=>t.aggs.map(n=>{let r=A(t.name).replace(/Credits/g,`Credit`),i=t.kind===`total`||n===`sum`?/^Total\b/.test(r)?r:`Total ${r}`:`${F[n]} of ${r}`,a=t.kind===`total`?`Tracks the current running total of ${r}.`:{sum:`Adds up ${r} across the matching ${w[e].recordNoun}.`,count:`Counts the matching ${w[e].recordNoun} with a recorded value for ${r}, not the sum of those values.`,count_distinct:`Counts the unique recorded values of ${r} across the matching ${w[e].recordNoun}.`,avg:`Calculates the average of ${r} by dividing the sum of the recorded values by the number of values.`,max:`Returns the highest recorded value of ${r}.`,min:`Returns the lowest recorded value of ${r}.`}[n];return{value:ke({measure:t.name,calculation:n}),label:i,description:`${a} ${t.description}`,aggregation:t.kind===`total`?`Total`:F[n]}}))}function Ae(e,t){let n=P(e.feature).find(e=>e.value===t);if(!n)return e;let[r,i]=n.value.split(`:`);return{...N(e,r),calculation:i}}function je(e){let t=M(e);return!!t&&!([`data_storage`,`file_storage`,`email_storage`,`mail_merge`].includes(e.feature)&&(t.kind===`total`||e.calculation===`sum`))}function Me(e){let t=M(e);return e.calculation===`count`?w[e.feature].recordNoun:E[t?.unit??``]??``}function Ne(e){let t=w[e.feature];if(!t)return`Select a feature.`;if(t.blank)return;let n=M(e);if(!n||!n.aggs.includes(e.calculation))return`Select a supported measure and calculation.`;let r=[`bt`,`nb`].includes(e.comparator);if(!Re.some(t=>t.value===e.comparator))return`Select a comparison.`;if(e.mode===`pct`&&!n.limits?.includes(e.constant))return`Select a supported allocation limit.`;if((r?[e.value,e.valueTo]:[e.value]).some(t=>t.trim()===``||!Number.isFinite(Number(t))||(e.mode===`pct`?Number(t)<=0||Number(t)>500:Number(t)<0)))return e.mode===`pct`?`Enter a percentage greater than 0 and up to 500.`:`Enter a value of zero or greater.`;if(r&&Number(e.value)>Number(e.valueTo))return`From can’t be greater than To.`;if(je(e)&&(!Number.isInteger(Number(e.windowValue))||Number(e.windowValue)<1||!I[e.windowUnit]||Number(e.windowValue)>I[e.windowUnit]))return`Enter a whole-number window between 1 and ${I[e.windowUnit]} ${e.windowUnit}.`;if(!ze.some(t=>t.value===e.interval))return`Select a notification interval.`}function Pe(e){let t=M(e);if(!t||w[e.feature].blank)return``;let n=e=>(Math.round(e*100)/100).toLocaleString(`en-US`),r=[`bt`,`nb`].includes(e.comparator)?[e.value,e.valueTo]:[e.value],i=t.kind===`total`?`Current ${A(t.name)}`:`${F[e.calculation]} of ${A(t.name)}`,a=r.map(e=>n(Number(e))).join(` and `);if(e.mode===`pct`){let i=T[e.constant];a=r.map(e=>`${n(Number(e))}%`).join(` and `)+` of ${A(e.constant)}`,i!=null&&(a+=` (${r.map(e=>n(Number(e)/100*i)).join(` and `)} ${E[t.unit??``]??``})`)}else a+=` ${Me(e)}`;let o=je(e)?` within the last ${e.windowValue} ${Number(e.windowValue)===1?e.windowUnit.replace(/s$/,``):e.windowUnit}`:``,s=ze.find(t=>t.value===e.interval)?.label??``;return`Alert when ${i} ${L[e.comparator]} ${a}${o}. You’ll be notified at most once every ${s}.`}function Fe(e){let t=M(e);if(!t||w[e.feature]?.blank)return`#Feature usage alert.`;let n=Re.find(t=>t.value===e.comparator)?.label??`>`;return`#Feature: ${t.kind===`total`?``:`#Calculation `}#Measure ${n} #Threshold${e.mode===`pct`?`% of #Limit`:``}${je(e)?` in #Window`:``}.`}var Ie,Le,F,Re,ze,Be,I,L,Ve,He=e((()=>{D(),Ie={webhook_calls_today:`Webhook Calls`,emails_sent_today:`Emails Sent`,merges_used_today:`Total Merges`,exports_today:`Total Exports`,backups_used_this_month:`Backups Used`,records_enriched_this_month:`Records Enriched`,free_credits_used_this_cycle:`Free Credits Used`,paid_credits_used_this_cycle:`Paid Credits Used`,overall_credits_used_this_cycle:`Overall Credits Used`},Le={api:`API`,uri:`URI`,oauth:`OAuth`},F={count:`Count`,count_distinct:`Distinct count`,sum:`Total`,avg:`Average`,max:`Maximum`,min:`Minimum`},Re=[{value:`eq`,label:`=`},{value:`ne`,label:`!=`},{value:`lt`,label:`<`},{value:`gt`,label:`>`},{value:`bt`,label:`between`},{value:`nb`,label:`not between`}],ze=[{value:`minute:15`,label:`15 minutes`},{value:`minute:30`,label:`30 minutes`},{value:`minute:45`,label:`45 minutes`},{value:`hour:1`,label:`1 hour`},{value:`hour:2`,label:`2 hours`},{value:`hour:4`,label:`4 hours`},{value:`hour:8`,label:`8 hours`},{value:`hour:12`,label:`12 hours`},{value:`hour:24`,label:`24 hours`}],Be=[{value:`minutes`,label:`Minutes`},{value:`hours`,label:`Hours`},{value:`days`,label:`Days`}],I={minutes:60,hours:24,days:30},L={eq:`equals`,ne:`doesn’t equal`,lt:`is less than`,gt:`is greater than`,bt:`is between`,nb:`is not between`},Ve=[{value:`Feature`,label:`Feature`},{value:`Measure`,label:`Based on`},{value:`Calculation`,label:`Calculation`},{value:`Threshold`,label:`Threshold`},{value:`Limit`,label:`Allocation limit`},{value:`Window`,label:`Time window`}]}));function Ue({feature:e,value:t,onChange:n,error:r}){let[i,a]=(0,B.useState)(`All`),o=P(e);return(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Based on`,width:390,tooltipVariant:`white`,tooltipMaxWidth:600,error:r,helperText:r?(0,V.jsx)(`span`,{role:`alert`,children:`Select a supported measure and calculation.`}):void 0,moduleFilter:[`All`,...new Set(o.map(e=>e.aggregation))],moduleValue:i,onModuleChange:a,moduleFilterAriaLabel:`Calculation filter`,options:o.map(e=>({value:e.value,label:e.label,module:i===`All`?void 0:e.aggregation,trailingIcon:(0,V.jsx)(l,{content:e.description,variant:`white`,maxWidth:600,placement:`top`,followCursor:!0,children:(0,V.jsx)(s,{className:`usage-notification-measure-info`,width:12,height:12,tabIndex:0,role:`img`,"aria-label":`About ${e.label}`})})})),value:t,onChange:n})}function R({label:e,children:t,align:n=`center`,labelOffset:r}){let i=r===void 0?n===`start`?2:0:r;return(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${q} minmax(0, 1fr)`,columnGap:20,alignItems:n},children:[(0,V.jsx)(`span`,{style:{...Je,paddingTop:i},children:e}),(0,V.jsx)(`div`,{"data-usage-field":e?``:void 0,style:{minWidth:0,width:e?`max-content`:void 0},children:t})]})}function z({row:e,onAction:t}){return(0,V.jsx)(`span`,{className:`usage-page__row-actions`,children:(0,V.jsx)(u,{width:27,triggerIcon:(0,V.jsx)(a,{}),triggerAriaLabel:`More options for ${e.name}`,value:``,panelStyle:{width:160,"--usage-actions-menu":1},options:[{value:`edit`,label:`Edit`},{value:`clone`,label:`Clone`},...!e.system&&e.status===`Active`?[{value:`pause`,label:`Pause`}]:[],...!e.system&&e.status===`Paused`?[{value:`resume`,label:`Resume`}]:[],{value:`delete`,label:`Delete`,disabled:e.system,disabledTooltip:`System-defined notifications cannot be deleted.`}],onChange:n=>t(n,e)})})}function We({channels:e=[]}){let t=(0,B.useRef)(null),[n,r]=(0,B.useState)(1);(0,B.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>{let t=1;e.querySelectorAll(`[data-channel-count]`).forEach(n=>{n.getBoundingClientRect().width<=e.clientWidth&&(t=Number(n.dataset.channelCount))}),r(t)},i=new ResizeObserver(n);i.observe(e),n();let a=!0;return document.fonts.ready.then(()=>{a&&n()}),()=>{a=!1,i.disconnect()}},[e]);let i=Math.min(n,e.length),a=e.slice(i);return(0,V.jsxs)(`span`,{ref:t,className:`usage-page__channels`,children:[(0,V.jsx)(`span`,{className:`usage-page__channel-label`,title:e.slice(0,i).join(`, `),children:e.slice(0,i).join(`, `)||`-`}),a.length>0&&(0,V.jsxs)(`span`,{className:`usage-page__more`,children:[` and `,(0,V.jsx)(l,{content:(0,V.jsx)(`span`,{className:`usage-page__hover-list`,children:a.map(e=>(0,V.jsx)(`span`,{children:e},e))}),variant:`white`,placement:`top`,followCursor:!0,children:(0,V.jsxs)(`button`,{type:`button`,className:`usage-page__more-trigger`,children:[a.length,` more`]})})]}),(0,V.jsx)(`span`,{className:`usage-page__channel-measure`,"aria-hidden":`true`,children:e.map((t,n)=>(0,V.jsxs)(`span`,{"data-channel-count":n+1,children:[e.slice(0,n+1).join(`, `),n+1<e.length?` and ${e.length-n-1} more`:``]},n))})]})}var B,V,H,U,W,G,K,Ge,Ke,qe,q,Je,Ye,Xe,Ze,Qe,$e,J,et,Y,tt;e((()=>{B=t(n(),1),h(),d(),fe(),re(),ne(),v(),ae(),p(),ee(),le(),c(),o(),y(),be(),xe(),se(),b(),C(),D(),we(),De(),He(),V=r(),{expect:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K={title:`Work Items/Usage Limit Notification`,parameters:{layout:`fullscreen`,docs:{description:{component:`Modal pattern for creating usage limit notifications — configure thresholds, notification channels, recipients, and message content.`}}}},Ge=Object.entries(w).map(([e,t])=>({value:e,label:t.label})),Ke=[{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Smith`},{value:`carol`,label:`Carol Williams`},{value:`david`,label:`David Brown`},{value:`eve`,label:`Eve Davis`}],qe=[{value:`general`,label:`#general`},{value:`engineering`,label:`#engineering`},{value:`alerts`,label:`#alerts`},{value:`support`,label:`#support`},{value:`marketing`,label:`#marketing`}],q=`155px`,Je={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,whiteSpace:`nowrap`,textAlign:`right`},Ye={margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-h2)`,fontWeight:`var(--ds-font-weight-semibold)`,lineHeight:`var(--ds-line-height-h2)`,color:`var(--ds-text-heading)`},Xe={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-semibold)`,color:`var(--ds-text-base)`},Ze={"Priya Nair":`user_03.jpg`,"Arjun Kumar":`user_04.jpg`,"Meera Iyer":`user_07.jpg`,"Sam Carter":`user_08.jpg`},Qe=`Priya Nair`,$e=[...[`60%`,`5000`,`4000`,`3000`,`2500`].map((e,t)=>({id:`api-${t}`,feature:`API`,name:`Reached add-on limit ${e}`,creator:t>2?`System`:t===2?`Arjun Kumar`:`Priya Nair`,modifier:t>2?`System`:t===2?`Priya Nair`:`Arjun Kumar`,date:t>2?`Jan 12, 2026`:`Jul 3, 2026`,system:t>2,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`})),{id:`functions`,feature:`Functions`,name:`Reached daily limit 5000 calls`,creator:`Meera Iyer`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`webhooks`,feature:`Webhooks`,name:`Slow webhook responses`,creator:`Sam Carter`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Active`},{id:`data-storage`,feature:`Data storage`,name:`Storage above 85%`,creator:`System`,date:`Jan 12, 2026`,system:!0,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`file-storage`,feature:`File storage`,name:`File storage nearly full`,creator:`Priya Nair`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Completed`},{id:`api-credit-warning`,feature:`API`,name:`API credit usage warning`,creator:`Arjun Kumar`,modifier:`Meera Iyer`,date:`Jul 2, 2026`,channels:[`Emails`,`Slack`],status:`Active`},{id:`functions-execution-warning`,feature:`Functions`,name:`Function execution usage warning`,creator:`Meera Iyer`,modifier:`Priya Nair`,date:`Jul 2, 2026`,channels:[`Push Notification`,`Emails`],status:`Paused`},{id:`webhooks-daily-warning`,feature:`Webhooks`,name:`Daily webhook usage warning`,creator:`Sam Carter`,modifier:`Arjun Kumar`,date:`Jul 1, 2026`,channels:[`Emails`,`Zoho Cliq`],status:`Active`},{id:`data-storage-capacity-warning`,feature:`Data storage`,name:`Data storage capacity warning`,creator:`Priya Nair`,modifier:`Sam Carter`,date:`Jul 1, 2026`,channels:[`Push Notification`,`Emails`,`Slack`],status:`Active`},{id:`file-storage-capacity-warning`,feature:`File storage`,name:`File storage capacity warning`,creator:`Arjun Kumar`,modifier:`Meera Iyer`,date:`Jun 30, 2026`,channels:[`Emails`],status:`Paused`},{id:`api-credit-review`,feature:`API`,name:`API credit consumption review`,creator:`Meera Iyer`,modifier:`Sam Carter`,date:`Jun 30, 2026`,channels:[`Push Notification`,`Zoho Cliq`],status:`Completed`},{id:`functions-allocation-warning`,feature:`Functions`,name:`Function execution allocation warning`,creator:`Sam Carter`,modifier:`Priya Nair`,date:`Jun 29, 2026`,channels:[`Emails`,`Slack`],status:`Active`},{id:`webhooks-allocation-warning`,feature:`Webhooks`,name:`Webhook allocation warning`,creator:`Priya Nair`,modifier:`Arjun Kumar`,date:`Jun 29, 2026`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Paused`},{id:`data-storage-usage-review`,feature:`Data storage`,name:`Data storage usage review`,creator:`Arjun Kumar`,modifier:`Sam Carter`,date:`Jun 28, 2026`,channels:[`Emails`,`Zoho Cliq`],status:`Completed`},{id:`file-storage-allocation-warning`,feature:`File storage`,name:`File storage allocation warning`,creator:`Meera Iyer`,modifier:`Priya Nair`,date:`Jun 28, 2026`,channels:[`Push Notification`,`Emails`,`Slack`],status:`Active`}],J=e=>(t,n)=>{if(n.system)return`-`;let r=(e===`modifier`?n.modifier:n.creator)??n.creator,i=(e===`modifier`?n.modifiedDate:n.date)??n.date,a=(e===`modifier`?n.modifiedTime:n.time)??n.time,o=`${r} on ${i}${a?` ${a}`:``}`,s=r?Ze[r]:void 0;return(0,V.jsx)(l,{variant:`white`,placement:`top`,followCursor:!0,wrapperStyle:{display:`inline-flex`,maxWidth:`100%`},content:o,children:(0,V.jsxs)(`span`,{className:`usage-page__person`,tabIndex:0,"aria-label":o,children:[s?(0,V.jsx)(`img`,{src:`/crm-design-system/images/avatars/${s}`,alt:``}):(0,V.jsx)(f,{name:`user-avatar`}),(0,V.jsx)(`span`,{children:i})]})})},et=e=>[{key:`actions`,label:``,width:31,render:(t,n)=>(0,V.jsx)(z,{row:n,onAction:e})},{key:`name`,label:`Notification Name`,width:`25%`,render:(t,n)=>(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:600,wrapperStyle:{display:`inline-flex`,maxWidth:`100%`,minWidth:0,verticalAlign:`middle`},content:n.summary||`${n.feature}: ${n.name}. Notify via ${n.channels?.join(`, `)}.`,children:(0,V.jsx)(`button`,{type:`button`,className:`usage-page__name`,"aria-haspopup":`dialog`,onClick:()=>e(`edit`,n),children:n.name})})},{key:`feature`,label:`Feature`,width:`13%`},{key:`channels`,label:`Notify via`,width:`22%`,render:(e,t)=>(0,V.jsx)(We,{channels:t.channels})},{key:`creator`,label:`Created by`,width:`14%`,render:J(`creator`)},{key:`modifier`,label:`Modified by`,width:`14%`,render:J(`modifier`)},{key:`status`,label:`Status`,width:120,render:(e,t)=>(0,V.jsx)(`span`,{children:t.status})}],Y={name:`Create Notification`,play:async({canvasElement:e})=>{if(!(navigator.webdriver||new URLSearchParams(window.location.search).has(`playModal`)))return;let t=G(e.ownerDocument.body);await U.click(t.getByRole(`button`,{name:`Create Notification`,exact:!0}));let n=t.getByRole(`textbox`,{name:`Notification Name`}),r=t.getByText(`Notification Name`,{selector:`label`});await W(()=>H(n).toHaveFocus());let i=n.closest(`.input-input-wrapper`);await H(i).not.toHaveAttribute(`data-required`),(()=>{let e=r.getBoundingClientRect(),t=i.getBoundingClientRect(),n=parseFloat(getComputedStyle(r).paddingTop);H(Math.abs(e.top+n+(e.height-n)/2-t.top-t.height/2)).toBeLessThanOrEqual(1)})();let a=r.getBoundingClientRect().top-n.getBoundingClientRect().top,o=n.closest(`.usage-notification-fields`),s=o.getBoundingClientRect().height,ee=()=>t.getByRole(`button`,{name:`Feature`,exact:!0}).getBoundingClientRect().top-o.getBoundingClientRect().top,te=ee();await U.click(t.getByRole(`button`,{name:`Save`,exact:!0})),await H(o.getBoundingClientRect().height).toBe(s),await H(ee()).toBeCloseTo(te,0);let c=t.getByText(`Notification Name cannot be empty.`);await H(c).toHaveAttribute(`role`,`alert`),await H(getComputedStyle(c).color).toBe(`rgb(255, 93, 90)`),await H(getComputedStyle(c).webkitTextFillColor).toBe(`rgb(255, 93, 90)`);let l=t.getByText(`Select a feature.`);await H(l).toHaveAttribute(`role`,`alert`),await H(getComputedStyle(l).color).toBe(`rgb(255, 93, 90)`),await H(Math.abs(r.getBoundingClientRect().top-n.getBoundingClientRect().top-a)).toBeLessThanOrEqual(1),await U.type(n,`Test notification`),await H(t.queryByText(`Notification Name cannot be empty.`)).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Feature`,exact:!0})),await U.click(t.getByRole(`option`,{name:`Webhooks`,exact:!0})),await H(t.queryByRole(`alert`)).not.toBeInTheDocument(),await H(t.getByRole(`button`,{name:`Based on`,exact:!0})).toBeVisible(),await H(t.queryByRole(`button`,{name:`Calculation`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Feature`,exact:!0})),await U.click(t.getByRole(`option`,{name:`API`,exact:!0})),await H(t.getByRole(`button`,{name:`Based on`,exact:!0})).toHaveTextContent(`Total Free Credit Used`),await U.click(t.getByRole(`button`,{name:`Based on`,exact:!0}));for(let e of[`Total Credit Used per API`,`Count of Credit Used per API`,`Average of Credit Used per API`])await H(t.getByRole(`option`,{name:e,exact:!0})).toBeInTheDocument();for(let[e,n]of[[`Total Credit Used per API`,`Adds up Credit Used per API`],[`Count of Credit Used per API`,`Counts the matching API calls`],[`Average of Credit Used per API`,`Calculates the average of Credit Used per API`],[`Maximum of Credit Used per API`,`Returns the highest recorded value`],[`Minimum of Credit Used per API`,`Returns the lowest recorded value`]]){let r=t.getByRole(`option`,{name:e,exact:!0}).querySelector(`.usage-notification-measure-info`);await U.hover(r),await H(await t.findByRole(`tooltip`)).toHaveTextContent(n),await U.unhover(r),await W(()=>H(t.queryByRole(`tooltip`)).not.toBeInTheDocument())}await U.click(t.getByRole(`button`,{name:`Calculation filter`,exact:!0})),await U.click(G(t.getByRole(`listbox`,{name:`Calculation filter`})).getByRole(`option`,{name:`Total`,exact:!0})),await H(t.getByRole(`option`,{name:`Total Free Credit Used`,exact:!0})).toBeInTheDocument(),await H(t.queryByRole(`option`,{name:`Average of Credit Used per API`,exact:!0})).not.toBeInTheDocument();let ne=t.getByRole(`textbox`,{name:`Search options`,exact:!0});await U.type(ne,`per API`),await H(t.getByRole(`option`,{name:`Total Credit Used per API`,exact:!0})).toBeInTheDocument(),await H(t.queryByRole(`option`,{name:`Total Free Credit Used`,exact:!0})).not.toBeInTheDocument(),await U.clear(ne),await U.click(t.getByRole(`button`,{name:`Calculation filter`,exact:!0})),await U.click(G(t.getByRole(`listbox`,{name:`Calculation filter`})).getByRole(`option`,{name:`All`,exact:!0})),await H(t.getByRole(`option`,{name:`Count of Credit Used per API`,exact:!0})).toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Calculation filter`,exact:!0})),await U.click(G(t.getByRole(`listbox`,{name:`Calculation filter`})).getByRole(`option`,{name:`Average`,exact:!0})),await H(t.queryByRole(`option`,{name:`Total Credit Used per API`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`option`,{name:`Average of Credit Used per API`,exact:!0})),await H(t.getByRole(`button`,{name:`Based on`,exact:!0})).toHaveTextContent(`Average of Credit Used per API`),await H(t.queryByRole(`button`,{name:`Calculation`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Feature`,exact:!0})),await U.click(t.getByRole(`option`,{name:`Webhooks`,exact:!0})),await U.click(await t.findByRole(`button`,{name:`Select User`,exact:!0}));let u=G(await t.findByRole(`region`,{name:`Available recipients`}));await W(()=>H(t.getByText(`Email: You can select up to 90 CRM users and add up to 10 additional email addresses. The total number of email recipients cannot exceed 100.`)).toBeVisible()),await U.click(u.getByRole(`button`,{name:/Esther Howard/})),await U.click(t.getByRole(`button`,{name:`Recipient type`})),await U.click(t.getByRole(`option`,{name:`Groups`,exact:!0})),await H(t.getByRole(`button`,{name:`Recipient collection`})).toHaveTextContent(`Sales Group`),await H(G(u.getByRole(`button`,{name:/Esther Howard/})).getByText(`Added`)).toBeVisible(),await U.click(u.getByRole(`button`,{name:/Jacob Jones/})),await H(t.getByRole(`button`,{name:`Add Additional Recipient`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`button`,{name:`Done`,exact:!0})),await W(()=>H(t.queryByRole(`region`,{name:`Selected recipients`})).not.toBeInTheDocument());let d=G(t.getByRole(`group`,{name:`Send notification to`,exact:!0}));await H(d.getByRole(`button`,{name:`Users: 2. Edit selected recipients`})).toBeVisible(),await H(d.queryByRole(`button`,{name:/Groups:/})).not.toBeInTheDocument(),await U.click(d.getByRole(`button`,{name:`Edit notification recipients`}));let f=G(await t.findByRole(`region`,{name:`Selected recipients`}));await H(f.getByRole(`button`,{name:`Remove Esther Howard`})).toBeInTheDocument();let p=f.getByRole(`button`,{name:`Remove Jacob Jones`});p.focus(),await W(()=>H(p).toBeVisible()),await U.click(p),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(d.getByRole(`button`,{name:`Users: 2. Edit selected recipients`})).toBeVisible()),await U.click(t.getByRole(`switch`,{name:`Toggle external app notifications`}));let m=G(t.getByRole(`group`,{name:`Zoho Cliq recipients`}));await U.click(m.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByText(`Zoho Cliq Notification`,{exact:!0})).toBeVisible()),await H(t.getByPlaceholderText(`Select recipients`)).toBeVisible(),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(t.queryByText(`Zoho Cliq Notification`,{exact:!0})).not.toBeInTheDocument()),await U.click(t.getByRole(`checkbox`,{name:`Slack`,exact:!0}));let h=G(t.getByRole(`group`,{name:`Slack recipients`}));await U.click(h.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByText(`Slack Notification`,{exact:!0})).toBeVisible()),await H(t.getByPlaceholderText(`Select recipients`)).toBeDisabled(),await H(t.getByRole(`button`,{name:`Slack team`})).toHaveTextContent(`Select`);let g=t.getByText(`Slack Notification`,{exact:!0}).closest(`.modal-dialog`);await H(g.style.width).toBe(`fit-content`),await H(getComputedStyle(g.querySelector(`.usage-app-recipients`)).gap).toBe(`28px`),await U.click(t.getByRole(`button`,{name:`Slack team`})),await H(t.queryByRole(`option`,{name:`Select`,exact:!0})).not.toBeInTheDocument(),await H(t.getByRole(`option`,{name:`Bennett Electronics`,exact:!0})).toBeVisible(),await H(t.getByRole(`button`,{name:`Authorise another team`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`option`,{name:`scranton store`,exact:!0})),await H(t.getByPlaceholderText(`Select recipients`)).toBeEnabled(),await U.click(t.getByRole(`checkbox`,{name:`Notify in Channels`})),await H(t.getByPlaceholderText(`Select channels`)).toBeVisible(),await U.click(t.getByRole(`button`,{name:`Done`,exact:!0})),await W(()=>H(t.queryByText(`Slack Notification`,{exact:!0})).not.toBeInTheDocument()),await U.click(h.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByRole(`button`,{name:`Slack team`})).toHaveTextContent(`scranton store`)),await U.click(t.getByRole(`button`,{name:`Slack team`})),await U.click(t.getByRole(`button`,{name:`Authorise another team`,exact:!0})),await H(t.queryByLabelText(`Team name`)).not.toBeInTheDocument(),await H(t.getByRole(`button`,{name:`Slack team`})).toHaveTextContent(`scranton store`),await W(()=>H(t.queryByText(`Authorise another team`,{exact:!0})).not.toBeInTheDocument()),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(t.queryByText(`Slack Notification`,{exact:!0})).not.toBeInTheDocument()),await U.click(t.getByRole(`button`,{name:`Cancel`,exact:!0}))},render:()=>{let[e,t]=(0,B.useState)(!1),[n,r]=(0,B.useState)(`admin-tools`),[a,o]=(0,B.useState)(`all`),[s,ee]=(0,B.useState)(`usage`),[c,ne]=(0,B.useState)(`notifications`),[d,p]=(0,B.useState)(()=>$e.map(e=>{let t=Object.entries(w).find(([,t])=>t.label.toLowerCase()===e.feature.toLowerCase())?.[0],n=Oe(t);if(e.id.startsWith(`api-`)){let t=e.name.split(` `).at(-1);n.mode=t.endsWith(`%`)?`pct`:`val`,n.value=t.replace(`%`,``)}else e.id===`functions`?(n.mode=`val`,n.value=`5000`):e.id===`data-storage`&&(n.mode=`pct`,n.value=`85`);return{...e,feature:w[n.feature]?.label??e.feature,time:`10:30 AM`,summary:Pe(n),config:{trigger:n,recipients:[],pushEmailEnabled:!0,externalAppsEnabled:!!e.channels?.some(e=>[`Zoho Cliq`,`Slack`].includes(e)),notifyPush:!!e.channels?.includes(`Push Notification`),notifyEmail:!!e.channels?.includes(`Emails`),notifyZohoCliq:!!e.channels?.includes(`Zoho Cliq`),notifySlack:!!e.channels?.includes(`Slack`),users:[],channels:[],message:Fe(n)}}})),[h,re]=(0,B.useState)(`all`),[ae,se]=(0,B.useState)(`all`),[le,de]=(0,B.useState)(``),[_,fe]=(0,B.useState)(),v=!!d.find(e=>e.id===_)?.system,[y,b]=(0,B.useState)(),[x,_e]=(0,B.useState)();(0,B.useEffect)(()=>{if(!x)return;let e=window.setTimeout(()=>_e(void 0),4e3);return()=>window.clearTimeout(e)},[x]);let ve=d.filter(e=>(a===`all`||e.feature===a)&&(h===`all`||(h===`system`?e.system:!e.system))&&(ae===`all`||e.status===ae)&&`${e.name} ${e.feature}`.toLowerCase().includes(le.trim().toLowerCase())),ye=(0,B.useId)(),[S,be]=(0,B.useState)(``),[xe,we]=(0,B.useState)(!1),[C,T]=(0,B.useState)(()=>Oe()),[E,D]=(0,B.useState)(),O=M(C),k=w[C.feature],De=!!E&&!k,j=!!E&&!!k&&!k.blank&&(!O||!O.aggs.includes(C.calculation)),N=e=>{T(t=>({...t,...e})),D(void 0)},[P,Ie]=(0,B.useState)([]),[Le,F]=(0,B.useState)(!1),[L,He]=(0,B.useState)(!0),[z,We]=(0,B.useState)(!1),[H,U]=(0,B.useState)(!0),[W,G]=(0,B.useState)(!0),[K,Ze]=(0,B.useState)(!0),[J,Y]=(0,B.useState)(!1),tt=JSON.stringify(C),[nt,rt]=(0,B.useState)({criteriaKey:``,value:``}),it=nt.criteriaKey===tt?nt.value:Fe(C),[at,ot]=(0,B.useState)(),[st,ct]=(0,B.useState)(),lt={sender:`owner`,subject:S.trim()||`Usage limit notification`,body:`Hello,\n\n${Pe(C)||it}\n\nRegards,\n\${Organization.OrganizationName}`},[ut,dt]=(0,B.useState)(!1),[ft,pt]=(0,B.useState)(!0),[mt,ht]=(0,B.useState)(!1),[gt,_t]=(0,B.useState)([]),[vt,yt]=(0,B.useState)([]),[X,bt]=(0,B.useState)([]),[Z,xt]=(0,B.useState)([]),[St,Ct]=(0,B.useState)(`Zoho Cliq`),[Q,wt]=(0,B.useState)([]),[$,Tt]=(0,B.useState)([]),[Et]=(0,B.useState)([{value:`scranton-store`,label:`scranton store`},{value:`bennett-electronics`,label:`Bennett Electronics`}]),[Dt,Ot]=(0,B.useState)(``),[kt,At]=(0,B.useState)(``),jt=e=>{let t=e===`Slack`?Q:X,n=e===`Slack`?$:Z;Ct(e),At(Dt),_t(t),yt(n),pt(!0),ht(n.length>0),dt(!0)},Mt=()=>jt(`Zoho Cliq`),Nt=()=>{let e=ft?gt:[],t=mt?vt:[];St===`Slack`?(wt(e),Tt(t),Ot(kt)):(bt(e),xt(t)),dt(!1)},Pt=()=>dt(!1),Ft=!(L&&W&&!H&&(!z||!K&&!J)),It=!!O&&!k?.blank,Lt=je(C),Rt=[`bt`,`nb`].includes(C.comparator),zt=Pe(C),Bt=(0,B.useRef)(null),[Vt,Ht]=(0,B.useState)(null),[Ut,Wt]=(0,B.useState)(625);(0,B.useEffect)(()=>{let t=Vt?.closest(`.modal-dialog`);if(!e||!Vt||!t)return;let n=Array.from(Vt.querySelectorAll(`[data-usage-field], input[type="text"], [aria-label="Feature"]`)),r=()=>{let e=t.getBoundingClientRect().left,r=Math.max(...n.map(e=>e.getBoundingClientRect().right));Wt(Math.ceil(r-e+30))},i=new ResizeObserver(r);return n.forEach(e=>i.observe(e)),window.addEventListener(`resize`,r),r(),()=>{i.disconnect(),window.removeEventListener(`resize`,r)}},[e,Vt,It,z,L,Ft]);let Gt=(e,n=!1)=>{fe(n?void 0:e?.id),be(e?`${e.name}${n?`_Cloned`:``}`:``);let r=e?.config,i=!!e?.system&&!n,a=Object.entries(w).find(([,t])=>t.label.toLowerCase()===e?.feature.toLowerCase())?.[0];T(r?{...r.trigger}:Oe(a)),Ie(r?.recipients??[]),He(i||(r?.pushEmailEnabled??!0)),We(!i&&(r?.externalAppsEnabled??!!e?.channels?.some(e=>[`Zoho Cliq`,`Slack`].includes(e)))),U(i||(r?.notifyPush??(!e||!!e.channels?.includes(`Push Notification`)))),G(i||(r?.notifyEmail??(!e||!!e.channels?.includes(`Emails`)))),Ze(r?.notifyZohoCliq??(!e||!!e.channels?.includes(`Zoho Cliq`))),Y(r?.notifySlack??!!e?.channels?.includes(`Slack`)),bt(r?.users??[]),xt(r?.channels??[]),wt(r?.slackUsers??[]),Tt(r?.slackChannels??[]),Ot(r?.slackTeam??``),rt(r?{criteriaKey:JSON.stringify(r.trigger),value:r.message}:{criteriaKey:``,value:``}),ct(r?.template),we(!1),D(void 0),t(!0)},Kt=et((e,t)=>{e===`edit`||e===`clone`?Gt(t,e===`clone`):e===`delete`?t.system||b(t):!t.system&&t.status!==`Completed`&&p(n=>n.map(n=>n.id===t.id&&!n.system?{...n,status:e===`pause`?`Paused`:`Active`}:n))});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`style`,{children:`
          .usage-notification-modal {
            max-width: calc(100vw - 32px);
            transition: width 280ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .usage-notification-modal .modal-body {
            padding-right: 30px;
            overflow-x: hidden;
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
        `}),x&&(0,V.jsx)(ie,{variant:`success`,className:`usage-page__success-alert`,message:`${x} deleted successfully.`,onClose:()=>_e(void 0)}),(0,V.jsxs)(`div`,{className:`usage-page`,children:[(0,V.jsx)(`aside`,{className:`usage-page__sidebar`,"aria-label":`Setup navigation`,children:(0,V.jsx)(Se,{variant:`setup`,searchable:!0,width:`100%`,items:Ce,activeId:n,onSelect:r})}),(0,V.jsx)(`header`,{className:`usage-page__topband`,children:(0,V.jsx)(he,{moduleLabel:null,showTerritory:!1})}),(0,V.jsxs)(`main`,{className:`usage-page__workspace`,"aria-label":`Usage limit notifications`,children:[(0,V.jsx)(ce,{tabs:[{id:`usage`,label:`Usage Limits`},{id:`admin`,label:`Admin tool`}],activeTab:s,onChange:ee}),s===`usage`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`usage-page__sections`,children:(0,V.jsx)(ce,{variant:`secondary`,tabs:[{id:`limits`,label:`Usage Limits`},{id:`notifications`,label:`Notification Configurator`}],activeTab:c,onChange:ne})}),c===`notifications`?(0,V.jsxs)(`section`,{className:`usage-page__content`,"aria-label":`Notification Configurator`,children:[(0,V.jsx)(`div`,{className:`usage-page__toolbar`,children:(0,V.jsx)(`p`,{children:`Manage CRM usage limits and events by enabling admins to be notified when required`})}),(0,V.jsxs)(`div`,{className:`usage-page__toolbar`,children:[(0,V.jsxs)(`div`,{className:`usage-page__filters`,children:[(0,V.jsxs)(`div`,{className:`usage-page__search`,children:[(0,V.jsx)(i,{"aria-hidden":`true`}),(0,V.jsx)(g,{layout:`vertical`,type:`search`,width:200,"aria-label":`Search notifications`,placeholder:`Search`,value:le,onChange:e=>de(e.target.value)}),le&&(0,V.jsx)(`button`,{type:`button`,className:`usage-page__search-clear dropdown-clear-btn`,"aria-label":`Clear search`,onClick:e=>{de(``),e.currentTarget.parentElement?.querySelector(`input`)?.focus()},children:(0,V.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{d:`M1 1L7 7M7 1L1 7`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]}),(0,V.jsx)(u,{triggerAriaLabel:`Filter notifications by feature`,width:150,value:a,panelStyle:{width:`max-content`,minWidth:150,maxWidth:`calc(100vw - 32px)`},options:[{value:`all`,label:`All Features`},...Ge.map(e=>({value:e.label,label:e.label}))],onChange:o}),(0,V.jsx)(u,{triggerAriaLabel:`Filter notifications by type`,width:150,value:h,panelStyle:{width:`max-content`,minWidth:150,maxWidth:`calc(100vw - 32px)`},options:[{value:`all`,label:`All Types`},{value:`system`,label:`System Defined`},{value:`user`,label:`User Defined`}],onChange:re}),(0,V.jsx)(u,{triggerAriaLabel:`Filter notifications by status`,width:150,value:ae,options:[{value:`all`,label:`All Status`},...[`Active`,`Paused`,`Completed`].map(e=>({value:e,label:e}))],onChange:se})]}),(0,V.jsx)(te,{variant:`primary`,className:`usage-page__create-notification`,onClick:()=>Gt(),children:`Create Notification`})]}),(0,V.jsx)(`div`,{className:`usage-page__table-region`,role:`region`,"aria-label":`Notifications table`,tabIndex:0,children:(0,V.jsx)(ge,{variant:`report`,width:`100%`,columns:Kt,rows:ve,emptyMessage:`No notifications found`})})]}):(0,V.jsxs)(`section`,{className:`usage-page__content`,children:[(0,V.jsx)(`h1`,{children:`Usage Limits`}),(0,V.jsx)(`p`,{children:`Configure usage alerts in the Notification Configurator tab.`})]})]}):(0,V.jsxs)(`section`,{className:`usage-page__content`,children:[(0,V.jsx)(`h1`,{children:`Admin tool`}),(0,V.jsx)(`p`,{children:`Select Usage Limits to manage usage notifications.`})]})]})]}),(0,V.jsx)(pe,{isOpen:ut,title:`${St} Notification`,onClose:Pt,onCancel:Pt,onSave:Nt,cancelLabel:`Cancel`,saveLabel:`Done`,width:`fit-content`,className:`usage-app-modal`,children:(0,V.jsxs)(`div`,{className:`usage-app-modal__content`,children:[St===`Slack`&&(0,V.jsx)(u,{label:`Team`,placeholder:`Select`,width:`100%`,columns:`auto minmax(0, 1fr)`,triggerAriaLabel:`Slack team`,value:kt,options:Et,onChange:e=>{e!==kt&&(At(e),_t([]),yt([]))},panelStyle:{"--usage-slack-team-menu":1},footerAction:{label:`Authorise another team`,icon:null,onClick:()=>{}}}),(0,V.jsxs)(`fieldset`,{className:`usage-app-recipients`,disabled:St===`Slack`&&!kt,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,V.jsx)(m,{label:`Notify to users`,checked:ft,onChange:e=>pt(e.target.checked)}),ft&&(0,V.jsx)(me,{value:gt,options:Ke,onChange:_t,placeholder:`Select recipients`,width:`100%`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,V.jsx)(m,{label:`Notify in Channels`,checked:mt,onChange:e=>ht(e.target.checked)}),mt&&(0,V.jsx)(me,{value:vt,options:qe,onChange:yt,placeholder:`Select channels`,width:`100%`})]})]})]})}),(0,V.jsx)(pe,{isOpen:e,title:`Configure Usage Limit Notification`,className:`usage-notification-modal`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>{let e=!S.trim(),n=v?void 0:Ne(C);if(we(e),D(n),e&&document.getElementById(ye)?.focus(),e||n)return;be(S.trim());let r=[...L&&H?[`Push Notification`]:[],...L&&W?[`Emails`]:[],...z&&K?[`Zoho Cliq`]:[],...z&&J?[`Slack`]:[]],i=d.find(e=>e.id===_),a={...i,id:_??`notification-${Date.now()}`,feature:k.label,name:S.trim(),creator:i?.creator??Qe,date:i?.date??new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),time:i?.time??new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),modifier:Qe,modifiedDate:new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),modifiedTime:new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),channels:r,status:i?.status??`Active`,summary:Pe(C),config:{trigger:{...C},recipients:P,pushEmailEnabled:L,externalAppsEnabled:z,notifyPush:H,notifyEmail:W,notifyZohoCliq:K,notifySlack:J,users:X,channels:Z,slackUsers:Q,slackChannels:$,slackTeam:Dt,message:it,template:st}};p(e=>_?e.map(e=>e.id===_?a:e):[...e,a]),we(!1),t(!1)},cancelLabel:`Cancel`,saveLabel:`Save`,width:Ut,children:(0,V.jsxs)(`div`,{ref:Ht,style:{display:`flex`,flexDirection:`column`,gap:30},children:[(0,V.jsxs)(`div`,{className:`usage-notification-fields`,style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,V.jsx)(g,{id:ye,label:`Notification Name`,type:`text`,layout:`horizontal`,columns:`${q} 390px`,value:S,disabled:v,style:v?{"--_input-disabled-text-color":`var(--ds-text-base)`,WebkitTextFillColor:`var(--ds-text-base)`,opacity:1}:void 0,"aria-required":`true`,"aria-invalid":xe||void 0,error:xe,helperText:xe?(0,V.jsx)(`span`,{role:`alert`,children:`Notification Name cannot be empty.`}):void 0,onChange:e=>{be(e.target.value),e.target.value.trim()&&we(!1)}}),!v&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(u,{layout:`horizontal`,label:`Feature`,columns:`${q} 390px`,triggerAriaLabel:`Feature`,placeholder:`Select`,error:De,helperText:De?(0,V.jsx)(`span`,{role:`alert`,children:`Select a feature.`}):void 0,options:Ge,value:C.feature,onChange:e=>{T(Oe(e)),D(void 0)}}),k&&!k.blank&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R,{label:`Based on`,align:`start`,labelOffset:7,children:(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`start`,flexWrap:`wrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:(0,V.jsx)(Ue,{feature:C.feature,error:j,value:ke(C),onChange:e=>{T(t=>Ae(t,e)),D(void 0)}},C.feature)})}),O&&(0,V.jsx)(R,{label:`When`,children:(0,V.jsxs)(`div`,{ref:Bt,className:`usage-notification-when`,style:{display:`flex`,width:`max-content`,alignItems:`center`,flexWrap:`nowrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:[!!O.limits?.length&&(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Threshold type`,width:150,options:[{value:`pct`,label:`Percent`},{value:`val`,label:`Value`}],value:C.mode,onChange:e=>N({mode:e,value:e===`pct`?`80`:`90000`,valueTo:e===`pct`?`100`:`100000`})}),(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Comparator`,width:150,options:Re,value:C.comparator,onChange:e=>N({comparator:e})}),(0,V.jsx)(g,{layout:`vertical`,type:`number`,width:150,"aria-label":Rt?`Threshold from`:`Threshold value`,min:C.mode===`pct`?.01:0,max:C.mode===`pct`?500:void 0,step:`any`,value:C.value,placeholder:Rt?`From`:``,onChange:e=>N({value:e.target.value})}),Rt&&(0,V.jsx)(g,{layout:`vertical`,type:`number`,width:150,"aria-label":`Threshold to`,min:C.mode===`pct`?.01:0,max:C.mode===`pct`?500:void 0,step:`any`,value:C.valueTo,placeholder:`To`,onChange:e=>N({valueTo:e.target.value})}),C.mode===`pct`&&(O.limits?.length??0)>1&&(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Limit`,width:150,options:O.limits.map(e=>({value:e,label:A(e)})),value:C.constant,onChange:e=>N({constant:e})}),C.mode===`val`&&(0,V.jsx)(`span`,{style:Je,children:Me(C)}),Lt&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{style:Je,children:`over the last`}),(0,V.jsx)(g,{layout:`vertical`,type:`number`,width:150,"aria-label":`Window length`,min:1,max:I[C.windowUnit],step:1,value:C.windowValue,onChange:e=>N({windowValue:e.target.value})}),(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Window unit`,width:150,options:Be,value:C.windowUnit,onChange:e=>N({windowUnit:e})})]})]})})]}),(0,V.jsx)(R,{label:`Notify once every`,children:(0,V.jsx)(u,{layout:`vertical`,triggerAriaLabel:`Notify once every`,options:ze,width:390,value:C.interval,onChange:e=>N({interval:e})})})]}),zt&&(0,V.jsx)(`div`,{style:{paddingLeft:v?0:`calc(${q} + 20px)`},children:(0,V.jsx)(`div`,{style:{width:v?`100%`:`fit-content`,maxWidth:`calc(100% - 30px)`,marginRight:30,overflowWrap:`anywhere`,boxSizing:`border-box`,padding:`var(--ds-font-size-base)`,border:`1px solid var(--ds-border-subtle)`,borderRadius:`calc(var(--ds-font-size-base) * 0.4)`,background:`var(--ds-bg-common-bg)`,lineHeight:`var(--ds-line-height-base)`,color:`var(--ds-text-base)`,fontSize:`var(--ds-font-size-base)`,fontFamily:`var(--ds-font-family-base)`},"aria-live":`polite`,children:zt})}),E&&!De&&!j&&(0,V.jsx)(R,{label:``,children:(0,V.jsx)(`div`,{className:`input-root`,"data-variant":`error`,children:(0,V.jsx)(`span`,{className:`input-helper-text`,role:`alert`,children:E})})})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,V.jsx)(`h2`,{style:Ye,children:`Notify via`}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`span`,{style:Xe,children:`Push Notification / Email`}),!v&&(0,V.jsx)(oe,{checked:L,onChange:e=>He(e.target.checked),"aria-label":`Toggle push notification and email`})]}),L&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[!v&&(0,V.jsx)(R,{label:`Send notification to`,children:(0,V.jsxs)(`div`,{className:`usage-recipient-field${P.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Send notification to`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&F(!0)},children:[P.length===0?(0,V.jsx)(te,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:()=>F(!0),children:`Select User`}):[`user`,`group`,`role`,`role-and-subordinates`,`territory`,`territory-and-subterritories`,`email`].map(e=>{let t=P.filter(t=>t.kind===e),n={user:`Users`,group:`Groups`,role:`Roles`,"role-and-subordinates":`Roles and Subordinates`,territory:`Territories`,"territory-and-subterritories":`Territories and Sub-territories`,email:`Emails`}[e];return t.length>0&&(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[n,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${n}: ${t.length}. Edit selected recipients`,onClick:()=>F(!0),children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:n}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)}),P.length>0&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit notification recipients`,"aria-haspopup":`dialog`,onClick:()=>F(!0),children:(0,V.jsx)(f,{name:`CrmEditFilledMd`,size:13})})]})}),(0,V.jsx)(R,{label:`Notify Via`,align:`start`,children:(0,V.jsxs)(`div`,{className:`usage-notification-channels`,style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsx)(m,{label:`Push Notification`,disabled:v,checked:H,onChange:e=>U(e.target.checked)}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,V.jsx)(m,{label:`Email`,disabled:v,checked:W,onChange:e=>G(e.target.checked)}),W&&(0,V.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Preview email template`,"aria-haspopup":`dialog`,onClick:()=>ot(`preview`),children:`Preview`}),(0,V.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:4,height:4,marginInline:2,flexShrink:0,borderRadius:`50%`,background:`var(--ds-text-muted)`}}),(0,V.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Edit email template`,"aria-haspopup":`dialog`,onClick:()=>ot(`edit`),children:`Edit Template`})]})]})]})})]})]}),!v&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`span`,{style:Xe,children:`External apps`}),(0,V.jsx)(oe,{checked:z,onChange:e=>We(e.target.checked),"aria-label":`Toggle external app notifications`})]}),z&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsx)(R,{label:`Notify Via`,align:`center`,children:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,V.jsx)(m,{label:`Zoho Cliq`,checked:K,onChange:e=>Ze(e.target.checked)})}),(0,V.jsx)(`div`,{style:{opacity:+!!K,pointerEvents:K?`auto`:`none`},children:(0,V.jsxs)(`div`,{className:`usage-recipient-field usage-cliq-field${X.length>0||Z.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Zoho Cliq recipients`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&Mt()},children:[X.length===0&&Z.length===0&&(0,V.jsx)(te,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:Mt,children:`Select Recipients`}),[{label:`Users`,recipients:X},{label:`Channels`,recipients:Z}].map(({label:e,recipients:t})=>t.length>0&&(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[e,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${e}: ${t.length}. Edit Zoho Cliq recipients`,onClick:Mt,children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:e}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)),(X.length>0||Z.length>0)&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit Zoho Cliq recipients`,"aria-haspopup":`dialog`,onClick:Mt,children:(0,V.jsx)(f,{name:`CrmEditFilledMd`,size:13})})]})})]})}),(0,V.jsxs)(`div`,{className:`usage-slack-row`,style:{paddingLeft:`calc(${q} + 20px)`,display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(m,{label:`Slack`,checked:J,onChange:e=>Y(e.target.checked)}),J&&(0,V.jsxs)(`div`,{className:`usage-recipient-field usage-cliq-field${Q.length||$.length?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Slack recipients`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&jt(`Slack`)},children:[!Q.length&&!$.length&&(0,V.jsx)(te,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:()=>jt(`Slack`),children:`Select Recipients`}),[{label:`Users`,recipients:Q},{label:`Channels`,recipients:$}].map(({label:e,recipients:t})=>t.length>0&&(0,V.jsx)(l,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[e,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${e}: ${t.length}. Edit Slack recipients`,onClick:()=>jt(`Slack`),children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:e}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)),(Q.length>0||$.length>0)&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit Slack recipients`,"aria-haspopup":`dialog`,onClick:()=>jt(`Slack`),children:(0,V.jsx)(f,{name:`CrmEditFilledMd`,size:13})})]})]})]})]})]}),Ft&&(0,V.jsx)(R,{label:`Notification message`,align:`start`,labelOffset:7,children:(0,V.jsx)(ue,{"aria-label":`Notification message`,layout:`vertical`,variant:`multiline`,width:390,defaultValue:it,mergeFields:Ve,hint:`Type # to insert merge field`,onChange:e=>rt({criteriaKey:tt,value:e})},tt)})]})}),y&&(0,V.jsx)(pe,{type:`alert`,variant:`error`,isOpen:!0,title:`Delete "${y.name}"`,width:460,confirmLabel:`Delete`,cancelLabel:`Cancel`,onClose:()=>b(void 0),onCancel:()=>b(void 0),onSave:()=>{y.system||(p(e=>e.filter(e=>e.id!==y.id)),_e(y.name)),b(void 0)}}),Le&&(0,V.jsx)(Ee,{value:P,onClose:()=>F(!1),onSave:e=>{Ie(e),F(!1)}}),at&&(0,V.jsx)(Te,{kind:`email`,title:at===`preview`?`Usage Notification Email Preview`:`Edit Email Content`,readOnly:at===`preview`,initial:st,defaults:lt,onClose:()=>ot(void 0),onSave:e=>{ct(e),ot(void 0)}})]})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Create Notification',
  play: async ({
    canvasElement
  }) => {
    // Only auto-open the modal for the test runner or when ?playModal is in the URL,
    // so the story page loads without the modal for normal viewing.
    const shouldPlay = navigator.webdriver || new URLSearchParams(window.location.search).has('playModal');
    if (!shouldPlay) return;
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', {
      name: 'Create Notification',
      exact: true
    }));
    const nameInput = page.getByRole('textbox', {
      name: 'Notification Name'
    });
    const nameLabel = page.getByText('Notification Name', {
      selector: 'label'
    });
    await waitFor(() => expect(nameInput).toHaveFocus());
    const nameWrapper = nameInput.closest('.input-input-wrapper')!;
    const expectNameLabelCentered = () => {
      const labelBounds = nameLabel.getBoundingClientRect();
      const inputBounds = nameWrapper.getBoundingClientRect();
      const labelPadding = parseFloat(getComputedStyle(nameLabel).paddingTop);
      expect(Math.abs(labelBounds.top + labelPadding + (labelBounds.height - labelPadding) / 2 - inputBounds.top - inputBounds.height / 2)).toBeLessThanOrEqual(1);
    };
    await expect(nameWrapper).not.toHaveAttribute('data-required');
    expectNameLabelCentered();
    const labelTop = nameLabel.getBoundingClientRect().top - nameInput.getBoundingClientRect().top;
    const fieldGroup = nameInput.closest('.usage-notification-fields')!;
    const initialFieldsHeight = fieldGroup.getBoundingClientRect().height;
    const featureOffset = () => page.getByRole('button', {
      name: 'Feature',
      exact: true
    }).getBoundingClientRect().top - fieldGroup.getBoundingClientRect().top;
    const initialFeatureTop = featureOffset();
    await userEvent.click(page.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await expect(fieldGroup.getBoundingClientRect().height).toBe(initialFieldsHeight);
    await expect(featureOffset()).toBeCloseTo(initialFeatureTop, 0);
    const nameAlert = page.getByText('Notification Name cannot be empty.');
    await expect(nameAlert).toHaveAttribute('role', 'alert');
    await expect(getComputedStyle(nameAlert).color).toBe('rgb(255, 93, 90)');
    await expect(getComputedStyle(nameAlert).webkitTextFillColor).toBe('rgb(255, 93, 90)');
    const featureAlert = page.getByText('Select a feature.');
    await expect(featureAlert).toHaveAttribute('role', 'alert');
    await expect(getComputedStyle(featureAlert).color).toBe('rgb(255, 93, 90)');
    await expect(Math.abs(nameLabel.getBoundingClientRect().top - nameInput.getBoundingClientRect().top - labelTop)).toBeLessThanOrEqual(1);
    await userEvent.type(nameInput, 'Test notification');
    await expect(page.queryByText('Notification Name cannot be empty.')).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Feature',
      exact: true
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Webhooks',
      exact: true
    }));
    await expect(page.queryByRole('alert')).not.toBeInTheDocument();
    await expect(page.getByRole('button', {
      name: 'Based on',
      exact: true
    })).toBeVisible();
    await expect(page.queryByRole('button', {
      name: 'Calculation',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Feature',
      exact: true
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'API',
      exact: true
    }));
    await expect(page.getByRole('button', {
      name: 'Based on',
      exact: true
    })).toHaveTextContent('Total Free Credit Used');
    await userEvent.click(page.getByRole('button', {
      name: 'Based on',
      exact: true
    }));
    for (const label of ['Total Credit Used per API', 'Count of Credit Used per API', 'Average of Credit Used per API']) {
      await expect(page.getByRole('option', {
        name: label,
        exact: true
      })).toBeInTheDocument();
    }
    for (const [label, explanation] of [['Total Credit Used per API', 'Adds up Credit Used per API'], ['Count of Credit Used per API', 'Counts the matching API calls'], ['Average of Credit Used per API', 'Calculates the average of Credit Used per API'], ['Maximum of Credit Used per API', 'Returns the highest recorded value'], ['Minimum of Credit Used per API', 'Returns the lowest recorded value']]) {
      const info = page.getByRole('option', {
        name: label,
        exact: true
      }).querySelector('.usage-notification-measure-info')!;
      await userEvent.hover(info);
      await expect(await page.findByRole('tooltip')).toHaveTextContent(explanation);
      await userEvent.unhover(info);
      await waitFor(() => expect(page.queryByRole('tooltip')).not.toBeInTheDocument());
    }
    await userEvent.click(page.getByRole('button', {
      name: 'Calculation filter',
      exact: true
    }));
    await userEvent.click(within(page.getByRole('listbox', {
      name: 'Calculation filter'
    })).getByRole('option', {
      name: 'Total',
      exact: true
    }));
    await expect(page.getByRole('option', {
      name: 'Total Free Credit Used',
      exact: true
    })).toBeInTheDocument();
    await expect(page.queryByRole('option', {
      name: 'Average of Credit Used per API',
      exact: true
    })).not.toBeInTheDocument();
    const basisSearch = page.getByRole('textbox', {
      name: 'Search options',
      exact: true
    });
    await userEvent.type(basisSearch, 'per API');
    await expect(page.getByRole('option', {
      name: 'Total Credit Used per API',
      exact: true
    })).toBeInTheDocument();
    await expect(page.queryByRole('option', {
      name: 'Total Free Credit Used',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.clear(basisSearch);
    await userEvent.click(page.getByRole('button', {
      name: 'Calculation filter',
      exact: true
    }));
    await userEvent.click(within(page.getByRole('listbox', {
      name: 'Calculation filter'
    })).getByRole('option', {
      name: 'All',
      exact: true
    }));
    await expect(page.getByRole('option', {
      name: 'Count of Credit Used per API',
      exact: true
    })).toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Calculation filter',
      exact: true
    }));
    await userEvent.click(within(page.getByRole('listbox', {
      name: 'Calculation filter'
    })).getByRole('option', {
      name: 'Average',
      exact: true
    }));
    await expect(page.queryByRole('option', {
      name: 'Total Credit Used per API',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('option', {
      name: 'Average of Credit Used per API',
      exact: true
    }));
    await expect(page.getByRole('button', {
      name: 'Based on',
      exact: true
    })).toHaveTextContent('Average of Credit Used per API');
    await expect(page.queryByRole('button', {
      name: 'Calculation',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Feature',
      exact: true
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Webhooks',
      exact: true
    }));
    await userEvent.click(await page.findByRole('button', {
      name: 'Select User',
      exact: true
    }));
    const directory = within(await page.findByRole('region', {
      name: 'Available recipients'
    }));
    await waitFor(() => expect(page.getByText('Email: You can select up to 90 CRM users and add up to 10 additional email addresses. The total number of email recipients cannot exceed 100.')).toBeVisible());
    await userEvent.click(directory.getByRole('button', {
      name: /Esther Howard/
    }));
    await userEvent.click(page.getByRole('button', {
      name: 'Recipient type'
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Groups',
      exact: true
    }));
    await expect(page.getByRole('button', {
      name: 'Recipient collection'
    })).toHaveTextContent('Sales Group');
    await expect(within(directory.getByRole('button', {
      name: /Esther Howard/
    })).getByText('Added')).toBeVisible();
    await userEvent.click(directory.getByRole('button', {
      name: /Jacob Jones/
    }));
    await expect(page.getByRole('button', {
      name: 'Add Additional Recipient',
      exact: true
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('region', {
      name: 'Selected recipients'
    })).not.toBeInTheDocument());
    const recipients = within(page.getByRole('group', {
      name: 'Send notification to',
      exact: true
    }));
    await expect(recipients.getByRole('button', {
      name: 'Users: 2. Edit selected recipients'
    })).toBeVisible();
    await expect(recipients.queryByRole('button', {
      name: /Groups:/
    })).not.toBeInTheDocument();
    await userEvent.click(recipients.getByRole('button', {
      name: 'Edit notification recipients'
    }));
    const selected = within(await page.findByRole('region', {
      name: 'Selected recipients'
    }));
    await expect(selected.getByRole('button', {
      name: 'Remove Esther Howard'
    })).toBeInTheDocument();
    const removeJacob = selected.getByRole('button', {
      name: 'Remove Jacob Jones'
    });
    removeJacob.focus();
    await waitFor(() => expect(removeJacob).toBeVisible());
    await userEvent.click(removeJacob);
    await userEvent.click(page.getAllByRole('button', {
      name: 'Cancel',
      exact: true
    }).at(-1)!);
    await waitFor(() => expect(recipients.getByRole('button', {
      name: 'Users: 2. Edit selected recipients'
    })).toBeVisible());
    await userEvent.click(page.getByRole('switch', {
      name: 'Toggle external app notifications'
    }));
    const cliq = within(page.getByRole('group', {
      name: 'Zoho Cliq recipients'
    }));
    await userEvent.click(cliq.getByRole('button', {
      name: 'Select Recipients'
    }));
    await waitFor(() => expect(page.getByText('Zoho Cliq Notification', {
      exact: true
    })).toBeVisible());
    await expect(page.getByPlaceholderText('Select recipients')).toBeVisible();
    await userEvent.click(page.getAllByRole('button', {
      name: 'Cancel',
      exact: true
    }).at(-1)!);
    await waitFor(() => expect(page.queryByText('Zoho Cliq Notification', {
      exact: true
    })).not.toBeInTheDocument());
    await userEvent.click(page.getByRole('checkbox', {
      name: 'Slack',
      exact: true
    }));
    const slack = within(page.getByRole('group', {
      name: 'Slack recipients'
    }));
    await userEvent.click(slack.getByRole('button', {
      name: 'Select Recipients'
    }));
    await waitFor(() => expect(page.getByText('Slack Notification', {
      exact: true
    })).toBeVisible());
    await expect(page.getByPlaceholderText('Select recipients')).toBeDisabled();
    await expect(page.getByRole('button', {
      name: 'Slack team'
    })).toHaveTextContent('Select');
    const appModal = page.getByText('Slack Notification', {
      exact: true
    }).closest('.modal-dialog') as HTMLElement;
    await expect(appModal.style.width).toBe('fit-content');
    await expect(getComputedStyle(appModal.querySelector('.usage-app-recipients')!).gap).toBe('28px');
    await userEvent.click(page.getByRole('button', {
      name: 'Slack team'
    }));
    await expect(page.queryByRole('option', {
      name: 'Select',
      exact: true
    })).not.toBeInTheDocument();
    await expect(page.getByRole('option', {
      name: 'Bennett Electronics',
      exact: true
    })).toBeVisible();
    await expect(page.getByRole('button', {
      name: 'Authorise another team',
      exact: true
    })).toBeVisible();
    await userEvent.click(page.getByRole('option', {
      name: 'scranton store',
      exact: true
    }));
    await expect(page.getByPlaceholderText('Select recipients')).toBeEnabled();
    await userEvent.click(page.getByRole('checkbox', {
      name: 'Notify in Channels'
    }));
    await expect(page.getByPlaceholderText('Select channels')).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    await waitFor(() => expect(page.queryByText('Slack Notification', {
      exact: true
    })).not.toBeInTheDocument());
    await userEvent.click(slack.getByRole('button', {
      name: 'Select Recipients'
    }));
    await waitFor(() => expect(page.getByRole('button', {
      name: 'Slack team'
    })).toHaveTextContent('scranton store'));
    await userEvent.click(page.getByRole('button', {
      name: 'Slack team'
    }));
    await userEvent.click(page.getByRole('button', {
      name: 'Authorise another team',
      exact: true
    }));
    await expect(page.queryByLabelText('Team name')).not.toBeInTheDocument();
    await expect(page.getByRole('button', {
      name: 'Slack team'
    })).toHaveTextContent('scranton store');
    await waitFor(() => expect(page.queryByText('Authorise another team', {
      exact: true
    })).not.toBeInTheDocument());
    await userEvent.click(page.getAllByRole('button', {
      name: 'Cancel',
      exact: true
    }).at(-1)!);
    await waitFor(() => expect(page.queryByText('Slack Notification', {
      exact: true
    })).not.toBeInTheDocument());
    await userEvent.click(page.getByRole('button', {
      name: 'Cancel',
      exact: true
    }));
  },
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
    const isSystemDefined = !!savedRows.find(row => row.id === editingId)?.system;
    const [pendingDelete, setPendingDelete] = useState<UsageListRow>();
    const [deleteSuccess, setDeleteSuccess] = useState<string>();
    useEffect(() => {
      if (!deleteSuccess) return;
      const timeout = window.setTimeout(() => setDeleteSuccess(undefined), 4000);
      return () => window.clearTimeout(timeout);
    }, [deleteSuccess]);
    const visibleRows = savedRows.filter(row => (featureFilter === 'all' || row.feature === featureFilter) && (typeFilter === 'all' || (typeFilter === 'system' ? row.system : !row.system)) && (statusFilter === 'all' || row.status === statusFilter) && \`\${row.name} \${row.feature}\`.toLowerCase().includes(search.trim().toLowerCase()));
    const notificationNameId = useId();
    const [notificationName, setNotificationName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [trigger, setTrigger] = useState(() => createUsageTrigger());
    const [triggerError, setTriggerError] = useState<string>();
    const measure = selectedUsageMeasure(trigger);
    const feature = USAGE_FEATURES[trigger.feature];
    const featureError = !!triggerError && !feature;
    const measureError = !!triggerError && !!feature && !feature.blank && (!measure || !measure.aggs.includes(trigger.calculation));
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
    const [recipientApp, setRecipientApp] = useState<'Zoho Cliq' | 'Slack'>('Zoho Cliq');
    const [slackCommittedUsers, setSlackCommittedUsers] = useState<TagItem[]>([]);
    const [slackCommittedChannels, setSlackCommittedChannels] = useState<TagItem[]>([]);
    const [slackTeams] = useState([{
      value: 'scranton-store',
      label: 'scranton store'
    }, {
      value: 'bennett-electronics',
      label: 'Bennett Electronics'
    }]);
    const [slackCommittedTeam, setSlackCommittedTeam] = useState('');
    const [slackDraftTeam, setSlackDraftTeam] = useState('');
    const openAppRecipients = (app: 'Zoho Cliq' | 'Slack') => {
      const users = app === 'Slack' ? slackCommittedUsers : zohoCommittedUsers;
      const channels = app === 'Slack' ? slackCommittedChannels : zohoCommittedChannels;
      setRecipientApp(app);
      setSlackDraftTeam(slackCommittedTeam);
      setZohoDraftUsers(users);
      setZohoDraftChannels(channels);
      setZohoNotifyUsers(true);
      setZohoNotifyChannels(channels.length > 0);
      setZohoOpen(true);
    };
    const openZohoModal = () => openAppRecipients('Zoho Cliq');
    const handleZohoDone = () => {
      const users = zohoNotifyUsers ? zohoDraftUsers : [];
      const channels = zohoNotifyChannels ? zohoDraftChannels : [];
      if (recipientApp === 'Slack') {
        setSlackCommittedUsers(users);
        setSlackCommittedChannels(channels);
        setSlackCommittedTeam(slackDraftTeam);
      } else {
        setZohoCommittedUsers(users);
        setZohoCommittedChannels(channels);
      }
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
      const systemEdit = !!row?.system && !clone;
      const featureKey = Object.entries(USAGE_FEATURES).find(([, item]) => item.label.toLowerCase() === row?.feature.toLowerCase())?.[0];
      setTrigger(config ? {
        ...config.trigger
      } : createUsageTrigger(featureKey));
      setNotifyToTags(config?.recipients ?? []);
      setPushEmailEnabled(systemEdit || (config?.pushEmailEnabled ?? true));
      setExternalAppsEnabled(!systemEdit && (config?.externalAppsEnabled ?? !!row?.channels?.some(channel => ['Zoho Cliq', 'Slack'].includes(channel))));
      setNotifyPush(systemEdit || (config?.notifyPush ?? (row ? !!row.channels?.includes('Push Notification') : true)));
      setNotifyEmail(systemEdit || (config?.notifyEmail ?? (row ? !!row.channels?.includes('Emails') : true)));
      setNotifyZohoCliq(config?.notifyZohoCliq ?? (row ? !!row.channels?.includes('Zoho Cliq') : true));
      setNotifySlack(config?.notifySlack ?? !!row?.channels?.includes('Slack'));
      setZohoCommittedUsers(config?.users ?? []);
      setZohoCommittedChannels(config?.channels ?? []);
      setSlackCommittedUsers(config?.slackUsers ?? []);
      setSlackCommittedChannels(config?.slackChannels ?? []);
      setSlackCommittedTeam(config?.slackTeam ?? '');
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
            padding-right: 30px;
            overflow-x: hidden;
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

        {deleteSuccess && <MessageBox variant="success" className="usage-page__success-alert" message={\`\${deleteSuccess} deleted successfully.\`} onClose={() => setDeleteSuccess(undefined)} />}

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
                      {search && <button type="button" className="usage-page__search-clear dropdown-clear-btn" aria-label="Clear search" onClick={event => {
                      setSearch('');
                      event.currentTarget.parentElement?.querySelector('input')?.focus();
                    }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                          <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </button>}
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
                    <Dropdown triggerAriaLabel="Filter notifications by type" width={150} value={typeFilter} panelStyle={{
                    width: 'max-content',
                    minWidth: 150,
                    maxWidth: 'calc(100vw - 32px)'
                  }} options={[{
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
                  <Button variant="primary" className="usage-page__create-notification" onClick={() => openEditor()}>Create Notification</Button>
                </div>
                <div className="usage-page__table-region" role="region" aria-label="Notifications table" tabIndex={0}>
                  <SetupTable variant="report" width="100%" columns={columns} rows={visibleRows} emptyMessage="No notifications found" />
                </div>
              </section> : <section className="usage-page__content"><h1>Usage Limits</h1><p>Configure usage alerts in the Notification Configurator tab.</p></section>}
            </> : <section className="usage-page__content"><h1>Admin tool</h1><p>Select Usage Limits to manage usage notifications.</p></section>}
          </main>
        </div>

        {/* ── Zoho Cliq Notification sub-modal ─────────────────────────── */}
        <Modal isOpen={zohoOpen} title={\`\${recipientApp} Notification\`} onClose={handleZohoCancel} onCancel={handleZohoCancel} onSave={handleZohoDone} cancelLabel="Cancel" saveLabel="Done" width="fit-content" className="usage-app-modal">
          <div className="usage-app-modal__content">
            {recipientApp === 'Slack' && <Dropdown label="Team" placeholder="Select" width="100%" columns="auto minmax(0, 1fr)" triggerAriaLabel="Slack team" value={slackDraftTeam} options={slackTeams} onChange={(team: string) => {
            if (team === slackDraftTeam) return;
            setSlackDraftTeam(team);
            setZohoDraftUsers([]);
            setZohoDraftChannels([]);
          }} panelStyle={{
            '--usage-slack-team-menu': 1
          } as React.CSSProperties} footerAction={{
            label: 'Authorise another team',
            icon: null,
            onClick: () => {}
          }} />}
            <fieldset className="usage-app-recipients" disabled={recipientApp === 'Slack' && !slackDraftTeam}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10
            }}>
              <Checkbox label="Notify to users" checked={zohoNotifyUsers} onChange={e => setZohoNotifyUsers(e.target.checked)} />
              {zohoNotifyUsers && <Tags value={zohoDraftUsers} options={ZOHO_USER_OPTIONS} onChange={setZohoDraftUsers} placeholder="Select recipients" width="100%" />}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10
            }}>
              <Checkbox label="Notify in Channels" checked={zohoNotifyChannels} onChange={e => setZohoNotifyChannels(e.target.checked)} />
              {zohoNotifyChannels && <Tags value={zohoDraftChannels} options={ZOHO_CHANNEL_OPTIONS} onChange={setZohoDraftChannels} placeholder="Select channels" width="100%" />}
            </div>
            </fieldset>
          </div>
        </Modal>

        {/* ── Main modal ───────────────────────────────────────────────── */}
        <Modal isOpen={open} title="Configure Usage Limit Notification" className="usage-notification-modal" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => {
        const missingName = !notificationName.trim();
        const error = isSystemDefined ? undefined : validateUsageTrigger(trigger);
        setNameError(missingName);
        setTriggerError(error);
        if (missingName) document.getElementById(notificationNameId)?.focus();
        if (missingName || error) return;
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
            slackUsers: slackCommittedUsers,
            slackChannels: slackCommittedChannels,
            slackTeam: slackCommittedTeam,
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
          <div className="usage-notification-fields" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
          <Input id={notificationNameId} label="Notification Name" type="text" layout="horizontal" columns={\`\${LABEL_COL} 390px\`} value={notificationName} disabled={isSystemDefined} style={isSystemDefined ? {
              '--_input-disabled-text-color': 'var(--ds-text-base)',
              WebkitTextFillColor: 'var(--ds-text-base)',
              opacity: 1
            } as React.CSSProperties : undefined} aria-required="true" aria-invalid={nameError || undefined} error={nameError} helperText={nameError ? <span role="alert">Notification Name cannot be empty.</span> : undefined} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNotificationName(event.target.value);
              if (event.target.value.trim()) setNameError(false);
            }} />
          {!isSystemDefined && <>
          <Dropdown layout="horizontal" label="Feature" columns={\`\${LABEL_COL} 390px\`} triggerAriaLabel="Feature" placeholder="Select" error={featureError} helperText={featureError ? <span role="alert">Select a feature.</span> : undefined} options={FEATURE_OPTIONS} value={trigger.feature} onChange={(value: string) => {
                setTrigger(createUsageTrigger(value));
                setTriggerError(undefined);
              }} />
          {feature && !feature.blank && <>
              <FormRow label="Based on" align="start" labelOffset={7}>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    flexWrap: 'wrap',
                    gap: 'calc(var(--ds-font-size-base) * 0.6)'
                  }}>
                  <UsageBasisDropdown key={trigger.feature} feature={trigger.feature} error={measureError} value={usageBasisValue(trigger)} onChange={(value: string) => {
                      setTrigger(current => changeUsageBasis(current, value));
                      setTriggerError(undefined);
                    }} />
                </div>
              </FormRow>
              {measure && <FormRow label="When">
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
              </FormRow>}
            </>}
          <FormRow label="Notify once every">
            <Dropdown layout="vertical" triggerAriaLabel="Notify once every" options={INTERVAL_OPTIONS} width={390} value={trigger.interval} onChange={(interval: string) => updateTrigger({
                  interval
                })} />
          </FormRow>
          </>}
          {summary && <div style={{
              paddingLeft: isSystemDefined ? 0 : \`calc(\${LABEL_COL} + 20px)\`
            }}>
            <div style={{
                width: isSystemDefined ? '100%' : 'fit-content',
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
          </div>}
          {triggerError && !featureError && !measureError && <FormRow label=""><div className="input-root" data-variant="error"><span className="input-helper-text" role="alert">{triggerError}</span></div></FormRow>}
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
                {!isSystemDefined && <Switch checked={pushEmailEnabled} onChange={e => setPushEmailEnabled(e.target.checked)} aria-label="Toggle push notification and email" />}
              </div>

              {pushEmailEnabled && <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                  {!isSystemDefined && <FormRow label="Send notification to">
                    <div className={\`usage-recipient-field\${notifyToTags.length > 0 ? ' usage-recipient-editable' : ''}\`} role="group" aria-label="Send notification to" onClick={event => {
                    if (!(event.target instanceof Element) || !event.target.closest('button')) {
                      setRecipientDialogOpen(true);
                    }
                  }}>
                      {notifyToTags.length === 0 ? <Button variant="default" size="sm" aria-haspopup="dialog" onClick={() => setRecipientDialogOpen(true)}>
                          Select User
                        </Button> : (['user', 'group', 'role', 'role-and-subordinates', 'territory', 'territory-and-subterritories', 'email'] as const).map(kind => {
                      const recipients = notifyToTags.filter(recipient => recipient.kind === kind);
                      const label = {
                        user: 'Users',
                        group: 'Groups',
                        role: 'Roles',
                        'role-and-subordinates': 'Roles and Subordinates',
                        territory: 'Territories',
                        'territory-and-subterritories': 'Territories and Sub-territories',
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
                        <Icon name="CrmEditFilledMd" size={13} />
                      </button>}
                    </div>
                  </FormRow>}

                  <FormRow label="Notify Via" align="start">
                    <div className="usage-notification-channels" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                  }}>
                      <Checkbox label="Push Notification" disabled={isSystemDefined} checked={notifyPush} onChange={e => setNotifyPush(e.target.checked)} />
                      <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}>
                        <Checkbox label="Email" disabled={isSystemDefined} checked={notifyEmail} onChange={e => setNotifyEmail(e.target.checked)} />
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
                          <span aria-hidden="true" style={{
                          display: 'inline-block',
                          width: 4,
                          height: 4,
                          marginInline: 2,
                          flexShrink: 0,
                          borderRadius: '50%',
                          background: 'var(--ds-text-muted)'
                        }} />
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
            {!isSystemDefined && <div style={{
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
                              Select Recipients
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
                            <Icon name="CrmEditFilledMd" size={13} />
                          </button>}
                        </div>
                      </div>
                    </div>
                  </FormRow>
                  <div className="usage-slack-row" style={{
                  paddingLeft: \`calc(\${LABEL_COL} + 20px)\`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}>
                    <Checkbox label="Slack" checked={notifySlack} onChange={e => setNotifySlack(e.target.checked)} />
                    {notifySlack && <div className={\`usage-recipient-field usage-cliq-field\${slackCommittedUsers.length || slackCommittedChannels.length ? ' usage-recipient-editable' : ''}\`} role="group" aria-label="Slack recipients" onClick={event => {
                    if (!(event.target instanceof Element) || !event.target.closest('button')) openAppRecipients('Slack');
                  }}>
                      {!slackCommittedUsers.length && !slackCommittedChannels.length && <Button variant="default" size="sm" aria-haspopup="dialog" onClick={() => openAppRecipients('Slack')}>Select Recipients</Button>}
                      {[{
                      label: 'Users',
                      recipients: slackCommittedUsers
                    }, {
                      label: 'Channels',
                      recipients: slackCommittedChannels
                    }].map(({
                      label,
                      recipients
                    }) => recipients.length > 0 && <Tooltip key={label} variant="white" placement="top" maxWidth={320} content={<span className="usage-recipient-preview">
                          <strong>{label} ({recipients.length})</strong>
                          {recipients.map(recipient => <span key={recipient.value}>{recipient.label}</span>)}
                        </span>}>
                        <button type="button" className="tags-tag usage-recipient-count" aria-haspopup="dialog" aria-label={\`\${label}: \${recipients.length}. Edit Slack recipients\`} onClick={() => openAppRecipients('Slack')}>
                          <span className="tags-tag-label">{label}</span><span className="tags-tag-count">{recipients.length}</span>
                        </button>
                      </Tooltip>)}
                      {(slackCommittedUsers.length > 0 || slackCommittedChannels.length > 0) && <button type="button" className="usage-cliq-edit" aria-label="Edit Slack recipients" aria-haspopup="dialog" onClick={() => openAppRecipients('Slack')}><Icon name="CrmEditFilledMd" size={13} /></button>}
                    </div>}
                  </div>
                </div>}
            </div>}
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
        if (!pendingDelete.system) {
          setSavedRows(current => current.filter(row => row.id !== pendingDelete.id));
          setDeleteSuccess(pendingDelete.name);
        }
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
}`,...Y.parameters?.docs?.source}}},tt=[`CreateNotification`]}))();export{Y as CreateNotification,tt as __namedExportsOrder,K as default};