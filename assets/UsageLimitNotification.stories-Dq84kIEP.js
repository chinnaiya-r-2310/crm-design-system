const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/context-DgrVKaNM.js","assets/preload-helper-BTXe9M7S.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,s as n,t as r}from"./preload-helper-BTXe9M7S.js";import{N as i}from"./iframe-XZfgAIhB.js";import{t as a}from"./jsx-runtime-D-I7Lrue.js";import{At as o,M as s,Q as c,Yt as l,u as ee,y as u}from"./Icons-bfiiLqbO.js";import{r as d,t as f}from"./Button-CyIwDSWy.js";import{n as te,t as p}from"./Tooltip-B3SuNI1O.js";import{n as m,t as h}from"./Dropdown-Bpe9cF4n.js";import{n as g,t as _}from"./Icon-g0L6Urr0.js";import{n as v,t as y}from"./Checkbox-DfVZ3LYP.js";import{n as ne,t as b}from"./Input-mqZxTmsZ.js";import{n as x,t as re}from"./MessageBox-BxEDDhTk.js";import{n as ie,t as ae}from"./Switch-Cv8Fj3uM.js";import{n as S,t as oe}from"./Tabs-CPf0USxE.js";import{n as C,t as se}from"./Modal-CnS5u4bu.js";import{n as w,t as ce}from"./MergeField-HCSCv6fL.js";import{n as T,t as E}from"./MessageInfo-BQUrdfOl.js";import{n as le,t as ue}from"./Tags-LwZ79j0m.js";import{n as de,t as fe}from"./NextGenTopBand-3TVtGAm_.js";import{n as pe,t as me}from"./SortingHat-SideRK-w.js";import{n as he,t as ge}from"./Table-BGHVubsx.js";import{a as _e,i as ve,n as ye,o as be,t as xe}from"./UserSelectionModal.data-mUoKoRey.js";import{i as Se,n as Ce,r as we,t as Te}from"./setupMenuItems-CPiZ59Pr.js";import{n as Ee,t as De}from"./TemplateDialog-Ce0OLVcD.js";var D=e((()=>{})),O,Oe,k,A=e((()=>{O={api:{label:`API`,recordNoun:`API calls`,blank:!1,properties:[{name:`free_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits included free with your edition. Read from your subscription when the check runs, so it follows an upgrade by itself.`},{name:`paid_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Credits you have purchased on top of the free allowance.`},{name:`overall_limit`,kind:`constant`,unit:`credit`,aggs:[],description:`Free plus paid credits. Surge capacity is not included.`},{name:`free_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`free_limit`],description:`Free credits spent so far this cycle. Resets when the cycle rolls over.`},{name:`paid_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`paid_limit`],description:`Purchased credits spent so far this cycle. Only starts moving once the free allowance is gone.`},{name:`overall_credits_used_this_cycle`,kind:`total`,unit:`credit`,aggs:[`max`],limits:[`overall_limit`],description:`All credits spent so far this cycle, across every tier.`},{name:`paid_credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`paid_limit`],description:`Paid credits charged by one API call. A bulk read costs more than a single record fetch.`},{name:`credits_used_per_api`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`overall_limit`,`paid_limit`],description:`Credits charged by one API call across every tier.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one API call took to serve, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the call returned. Count it alongside a condition to alert on failures — for example, calls where status is at least 500.`}]},functions:{label:`Functions`,recordNoun:`executions`,blank:!1,properties:[{name:`execution_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Function executions included in your plan for the current cycle.`},{name:`executions_used_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`execution_limit`],description:`Executions consumed so far this cycle. Resets when the cycle rolls over.`},{name:`credits_used_per_execution`,kind:`event`,unit:`credit`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Credits charged by one function run. Heavier functions cost more per run.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one execution took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Whether the run succeeded or failed. Count it alongside a condition to alert on failing functions.`}]},webhooks:{label:`Webhooks`,recordNoun:`webhook calls`,blank:!1,properties:[{name:`webhook_limit`,kind:`constant`,unit:`call`,aggs:[],description:`Webhook calls your edition allows per day.`},{name:`webhook_calls_today`,kind:`total`,unit:`call`,aggs:[`max`],limits:[`webhook_limit`],description:`Webhook calls fired so far today. Resets at midnight in your org’s time zone.`},{name:`response_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the receiving endpoint took to respond, in milliseconds.`},{name:`retries_per_call`,kind:`event`,unit:`retry`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Retries needed before a call succeeded or was dropped.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`HTTP status the endpoint returned. Count it alongside a condition to alert on failing endpoints.`}]},email_notifications:{label:`Email notifications`,recordNoun:`emails`,blank:!1,properties:[{name:`email_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Emails your org may send per day, set by edition and user count.`},{name:`emails_sent_today`,kind:`total`,unit:`email`,aggs:[`max`],description:`Emails sent so far today. Resets at midnight in your org’s time zone.`},{name:`recipients_per_email`,kind:`event`,unit:`recipient`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Recipients on one email. A mass email to a large view produces a single record with a high value.`},{name:`bounces_per_email`,kind:`event`,unit:`bounce`,aggs:[`sum`,`count`,`avg`],description:`Bounces recorded against one send.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Delivered, bounced or failed. Count it alongside a condition to alert on delivery problems.`}]},data_storage:{label:`Data storage`,recordNoun:`storage events`,blank:!1,properties:[{name:`storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Total storage included in your plan.`},{name:`storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`storage_limit`],description:`Storage your org occupies right now, across all modules. Only goes down when data is deleted.`},{name:`storage_used_per_operation`,kind:`event`,unit:`gigabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],limits:[`storage_limit`],description:`Storage added by one operation — an import, a bulk create or a single record create.`}]},file_storage:{label:`File storage`,recordNoun:`uploads`,blank:!1,properties:[{name:`file_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`File storage included in your plan, across attachments, documents and inline images.`},{name:`file_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`file_storage_limit`],description:`File storage your org occupies right now. Only goes down when files are deleted.`},{name:`file_size_per_upload`,kind:`event`,unit:`megabyte`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Size of one uploaded file, in megabytes.`}]},email_parser:{label:`Email parser`,recordNoun:`parsed emails`,blank:!1,properties:[{name:`parser_limit`,kind:`constant`,unit:`email`,aggs:[],description:`Inbound emails your plan lets the parser process in a cycle.`},{name:`emails_parsed_this_cycle`,kind:`total`,unit:`email`,aggs:[`max`],limits:[`parser_limit`],description:`Inbound emails parsed so far this cycle. Resets when the cycle rolls over.`},{name:`parse_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],description:`How long the parser took to read one email, in milliseconds.`},{name:`fields_extracted`,kind:`event`,unit:`field`,aggs:[`sum`,`count`,`avg`,`min`],description:`Fields the parser pulled out of one email. A low value can mean the template no longer matches.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Parsed or failed. Count it alongside a condition to alert on emails the parser could not read.`}]},zoho_flow:{label:`Actions by Zoho Flow`,recordNoun:`flow actions`,blank:!1,properties:[{name:`task_limit`,kind:`constant`,unit:`task`,aggs:[],description:`Flow tasks included in your plan for the current cycle.`},{name:`tasks_used_this_cycle`,kind:`total`,unit:`task`,aggs:[`max`],limits:[`task_limit`],description:`Tasks consumed so far this cycle. Resets when the cycle rolls over.`},{name:`tasks_per_run`,kind:`event`,unit:`task`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Tasks consumed by one flow run. Flows with many steps cost more.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one flow action took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Succeeded or failed. Count it alongside a condition to alert on failing flows.`}]},circuits:{label:`Circuits`,recordNoun:`circuit runs`,blank:!1,properties:[{name:`circuit_limit`,kind:`constant`,unit:`execution`,aggs:[],description:`Circuit executions included in your plan for the current cycle.`},{name:`circuit_runs_this_cycle`,kind:`total`,unit:`execution`,aggs:[`max`],limits:[`circuit_limit`],description:`Circuit executions so far this cycle. Resets when the cycle rolls over.`},{name:`steps_per_run`,kind:`event`,unit:`step`,aggs:[`sum`,`count`,`avg`,`max`,`min`],description:`Steps one circuit run went through.`},{name:`execution_time`,kind:`event`,unit:`millisecond`,aggs:[`avg`,`max`,`min`,`count`],noAgg:!0,description:`How long one circuit run took, in milliseconds.`},{name:`status`,kind:`event`,aggs:[`count`,`count_distinct`],noAgg:!0,description:`Completed, failed or timed out. Count it alongside a condition to alert on failing circuits.`}]},mail_merge:{label:`Mail merge email`,recordNoun:`merges`,blank:!1,properties:[{name:`merge_limit`,kind:`constant`,unit:`merge`,aggs:[],description:`Mail merges your org can run per day. The limit is the same in every edition, and extra merges can be purchased.`},{name:`merges_used_today`,kind:`total`,unit:`merge`,aggs:[`max`],limits:[`merge_limit`],description:`Merges run so far today. Both the mail merge action and print preview from a mail merge template count.`}]},export:{label:`Export`,recordNoun:`exports`,blank:!1,properties:[{name:`export_limit`,kind:`constant`,unit:`export`,aggs:[],description:`Exports your org can start per day. It depends on the edition, from 10 on Free up to 1,000 on Ultimate.`},{name:`exports_today`,kind:`total`,unit:`export`,aggs:[`max`],limits:[`export_limit`],description:`Exports started so far today. Resets daily.`}]},email_storage:{label:`Email storage`,recordNoun:`emails`,blank:!1,properties:[{name:`email_storage_limit`,kind:`constant`,unit:`gigabyte`,aggs:[],description:`Email storage for the org: 5 GB per user, up to 500 GB, pooled across all users. It is separate from Zoho Mail storage.`},{name:`email_storage_used_total`,kind:`total`,unit:`gigabyte`,aggs:[`max`],limits:[`email_storage_limit`],description:`Storage used by emails kept in CRM, content and attachments, across all users. It goes down when emails are deleted.`},{name:`email_size`,kind:`event`,unit:`megabyte`,aggs:[`avg`,`max`,`min`,`sum`,`count`],description:`Size of one stored email, including its attachments.`}]},data_backup:{label:`Data backup`,recordNoun:`backups`,blank:!1,properties:[{name:`backup_limit`,kind:`constant`,unit:`backup`,aggs:[],description:`Free backups per month: 2 on Standard, Professional and Enterprise, and 4 on Ultimate. Extra backups are paid.`},{name:`backups_used_this_month`,kind:`total`,unit:`backup`,aggs:[`max`],limits:[`backup_limit`],description:`Backups taken so far this month. Resets each month.`}]},data_enrichment:{label:`Data enrichment`,recordNoun:`enrichments`,blank:!1,properties:[{name:`enrichment_limit`,kind:`constant`,unit:`record`,aggs:[],description:`Records Zia can enrich per month: 500 per user license on Enterprise and 2,000 on Ultimate, up to 50,000 records.`},{name:`records_enriched_this_month`,kind:`total`,unit:`record`,aggs:[`max`],limits:[`enrichment_limit`],description:`Records enriched so far this month, across all modules. Resets each month.`}]},kiosk:{label:`Kiosk`,recordNoun:`kiosks`,blank:!0,properties:[{name:`kiosk_limit`,kind:`constant`,unit:`kiosk`,aggs:[],description:`Kiosks your org can create: 2 on Standard, 7 on Professional, 25 on Enterprise, and 50 on Ultimate, CRM Plus and Zoho One.`},{name:`kiosk_component_limit`,kind:`constant`,unit:`component`,aggs:[],description:`Components allowed in a single kiosk.`},{name:`kiosks_created`,kind:`total`,unit:`kiosk`,aggs:[`max`],limits:[`kiosk_limit`],description:`Kiosks created so far. It goes down when a kiosk is deleted.`},{name:`components_per_kiosk`,kind:`event`,unit:`component`,aggs:[`max`,`min`,`avg`,`count`],limits:[`kiosk_component_limit`],description:`Components in one kiosk when it is saved.`}]}},Oe={free_limit:25e3,paid_limit:1e5,overall_limit:125e3,execution_limit:1e5,storage_limit:500,email_limit:1e4,webhook_limit:5e4,file_storage_limit:200,parser_limit:5e3,task_limit:2e4,circuit_limit:1e4,merge_limit:1e3,export_limit:500,email_storage_limit:50,backup_limit:4,enrichment_limit:5e4,kiosk_limit:25,kiosk_component_limit:50},k={gigabyte:`GB`,megabyte:`MB`,millisecond:`ms`,credit:`credits`,execution:`executions`,email:`emails`,recipient:`recipients`,bounce:`bounces`,call:`calls`,retry:`retries`,task:`tasks`,step:`steps`,field:`fields`,merge:`merges`,export:`exports`,record:`records`,backup:`backups`,kiosk:`kiosks`,component:`components`}})),j=e((()=>{}));function ke({value:e,onSave:t,onClose:n}){return(0,M.jsx)(_e,{value:e,options:ye,variant:`individual-users`,allowAdditionalEmails:!0,additionalRecipientOptions:xe,onSave:t,onClose:n,footerNote:(0,M.jsx)(E,{variant:`note`,points:[`Email: You can select up to 90 CRM users and add up to 10 additional email addresses. The total number of email recipients cannot exceed 100.`,`Push Notifications: You can select up to 100 CRM users. Additional recipients are not supported.`]})})}var M,Ae=e((()=>{be(),ve(),T(),j(),M=a(),ke.__docgenInfo={description:``,methods:[],displayName:`UsageRecipientDialog`,props:{value:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'user' | 'group' | 'role' | 'role-and-subordinates' | 'territory' | 'territory-and-subterritories' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'group'`},{name:`literal`,value:`'role'`},{name:`literal`,value:`'role-and-subordinates'`},{name:`literal`,value:`'territory'`},{name:`literal`,value:`'territory-and-subterritories'`},{name:`literal`,value:`'email'`}],required:!0},{name:`union`,raw:`'user' | 'email'`,elements:[{name:`literal`,value:`'user'`},{name:`literal`,value:`'email'`}]}],raw:`Exclude<UserSelectionKind, 'user' | 'email'>`,required:!0}}]},required:!1},description:`Display provenance only: permissions always target this user's ID, not the source.`},{key:`removalDisabledReason`,value:{name:`string`,required:!1}}]}}],raw:`UsageRecipient[]`},name:`value`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));function je(e){return Ve[e]??e.split(`_`).map((e,t)=>He[e]??(t>0&&[`per`,`this`].includes(e)?e:e.charAt(0).toUpperCase()+e.slice(1))).join(` `)}function Me(e){return O[e]?.properties.filter(e=>e.kind!==`constant`&&!e.noAgg)??[]}function Ne(e=``){let t=Me(e)[0];return{feature:e,measure:t?.name??``,calculation:t?.aggs[0]??``,constant:t?.limits?.[0]??``,mode:t?.limits?.length?`pct`:`val`,comparator:`gt`,value:t?.limits?.length?`80`:`90000`,valueTo:t?.limits?.length?`100`:`100000`,windowValue:`12`,windowUnit:`hours`,interval:`hour:1`}}function N(e){return Me(e.feature).find(t=>t.name===e.measure)}function P(e,t){let n=N(e),r=Me(e.feature).find(e=>e.name===t);if(!r)return e;let i=r.kind===n?.kind&&r.aggs.includes(e.calculation)?e.calculation:r.aggs[0],a=r.limits?.length?e.mode:`val`;return{...e,measure:t,calculation:i,constant:r.limits?.[0]??``,mode:a,value:a===e.mode?e.value:a===`pct`?`80`:`90000`,valueTo:a===e.mode?e.valueTo:a===`pct`?`100`:`100000`}}function Pe(e){return`${e.measure}:${e.calculation}`}function F(e){return Me(e).flatMap(t=>t.aggs.map(n=>{let r=je(t.name).replace(/Credits/g,`Credit`),i=t.kind===`total`||n===`sum`?/^Total\b/.test(r)?r:`Total ${r}`:`${I[n]} of ${r}`,a=t.kind===`total`?`Tracks the current running total of ${r}.`:{sum:`Adds up ${r} across the matching ${O[e].recordNoun}.`,count:`Counts the matching ${O[e].recordNoun} with a recorded value for ${r}, not the sum of those values.`,count_distinct:`Counts the unique recorded values of ${r} across the matching ${O[e].recordNoun}.`,avg:`Calculates the average of ${r} by dividing the sum of the recorded values by the number of values.`,max:`Returns the highest recorded value of ${r}.`,min:`Returns the lowest recorded value of ${r}.`}[n];return{value:Pe({measure:t.name,calculation:n}),label:i,description:`${a} ${t.description}`,aggregation:t.kind===`total`?`Total`:I[n]}}))}function Fe(e,t){let n=F(e.feature).find(e=>e.value===t);if(!n)return e;let[r,i]=n.value.split(`:`);return{...P(e,r),calculation:i}}function Ie(e){let t=N(e);return!!t&&!([`data_storage`,`file_storage`,`email_storage`,`mail_merge`].includes(e.feature)&&(t.kind===`total`||e.calculation===`sum`))}function Le(e){let t=N(e);return e.calculation===`count`?O[e.feature].recordNoun:k[t?.unit??``]??``}function Re(e){let t=O[e.feature];if(!t)return`Select a feature.`;if(t.blank)return;let n=N(e);if(!n||!n.aggs.includes(e.calculation))return`Select a supported measure and calculation.`;let r=[`bt`,`nb`].includes(e.comparator);if(!Ue.some(t=>t.value===e.comparator))return`Select a comparison.`;if(e.mode===`pct`&&!n.limits?.includes(e.constant))return`Select a supported allocation limit.`;if((r?[e.value,e.valueTo]:[e.value]).some(t=>t.trim()===``||!Number.isFinite(Number(t))||(e.mode===`pct`?Number(t)<=0||Number(t)>500:Number(t)<0)))return e.mode===`pct`?`Enter a percentage greater than 0 and up to 500.`:`Enter a value of zero or greater.`;if(r&&Number(e.value)>Number(e.valueTo))return`From can’t be greater than To.`;if(Ie(e)&&(!Number.isInteger(Number(e.windowValue))||Number(e.windowValue)<1||!Ke[e.windowUnit]||Number(e.windowValue)>Ke[e.windowUnit]))return`Enter a whole-number window between 1 and ${Ke[e.windowUnit]} ${e.windowUnit}.`;if(!We.some(t=>t.value===e.interval))return`Select a notification interval.`}function ze(e){let t=N(e);if(!t||O[e.feature].blank)return``;let n=e=>(Math.round(e*100)/100).toLocaleString(`en-US`),r=[`bt`,`nb`].includes(e.comparator)?[e.value,e.valueTo]:[e.value],i=t.kind===`total`?`Current ${je(t.name)}`:`${I[e.calculation]} of ${je(t.name)}`,a=r.map(e=>n(Number(e))).join(` and `);if(e.mode===`pct`){let i=Oe[e.constant];a=r.map(e=>`${n(Number(e))}%`).join(` and `)+` of ${je(e.constant)}`,i!=null&&(a+=` (${r.map(e=>n(Number(e)/100*i)).join(` and `)} ${k[t.unit??``]??``})`)}else a+=` ${Le(e)}`;let o=Ie(e)?` within the last ${e.windowValue} ${Number(e.windowValue)===1?e.windowUnit.replace(/s$/,``):e.windowUnit}`:``,s=We.find(t=>t.value===e.interval)?.label??``;return`Alert when ${i} ${L[e.comparator]} ${a}${o}. You’ll be notified at most once every ${s}.`}function Be(e){let t=N(e);if(!t||O[e.feature]?.blank)return`#Feature usage alert.`;let n=Ue.find(t=>t.value===e.comparator)?.label??`>`;return`#Feature: ${t.kind===`total`?``:`#Calculation `}#Measure ${n} #Threshold${e.mode===`pct`?`% of #Limit`:``}${Ie(e)?` in #Window`:``}.`}var Ve,He,I,Ue,We,Ge,Ke,L,qe,Je=e((()=>{A(),Ve={webhook_calls_today:`Webhook Calls`,emails_sent_today:`Emails Sent`,merges_used_today:`Total Merges`,exports_today:`Total Exports`,backups_used_this_month:`Backups Used`,records_enriched_this_month:`Records Enriched`,free_credits_used_this_cycle:`Free Credits Used`,paid_credits_used_this_cycle:`Paid Credits Used`,overall_credits_used_this_cycle:`Overall Credits Used`},He={api:`API`,uri:`URI`,oauth:`OAuth`},I={count:`Count`,count_distinct:`Distinct count`,sum:`Total`,avg:`Average`,max:`Maximum`,min:`Minimum`},Ue=[{value:`eq`,label:`=`},{value:`ne`,label:`!=`},{value:`lt`,label:`<`},{value:`gt`,label:`>`},{value:`bt`,label:`between`},{value:`nb`,label:`not between`}],We=[{value:`minute:15`,label:`15 minutes`},{value:`minute:30`,label:`30 minutes`},{value:`minute:45`,label:`45 minutes`},{value:`hour:1`,label:`1 hour`},{value:`hour:2`,label:`2 hours`},{value:`hour:4`,label:`4 hours`},{value:`hour:8`,label:`8 hours`},{value:`hour:12`,label:`12 hours`},{value:`hour:24`,label:`24 hours`}],Ge=[{value:`minutes`,label:`Minutes`},{value:`hours`,label:`Hours`},{value:`days`,label:`Days`}],Ke={minutes:60,hours:24,days:30},L={eq:`equals`,ne:`doesn’t equal`,lt:`is less than`,gt:`is greater than`,bt:`is between`,nb:`is not between`},qe=[{value:`Feature`,label:`Feature`},{value:`Measure`,label:`Based on`},{value:`Calculation`,label:`Calculation`},{value:`Threshold`,label:`Threshold`},{value:`Limit`,label:`Allocation limit`},{value:`Window`,label:`Time window`}]}));function Ye({feature:e,value:t,onChange:n,error:r}){let[i,a]=(0,B.useState)(`All`),o=F(e);return(0,V.jsx)(h,{layout:`vertical`,triggerAriaLabel:`Based on`,width:390,tooltipVariant:`white`,tooltipMaxWidth:600,error:r,helperText:r?(0,V.jsx)(`span`,{role:`alert`,children:`Select a supported measure and calculation.`}):void 0,moduleFilter:[`All`,...new Set(o.map(e=>e.aggregation))],moduleValue:i,onModuleChange:a,moduleFilterAriaLabel:`Calculation filter`,options:o.map(e=>({value:e.value,label:e.label,module:i===`All`?void 0:e.aggregation,trailingIcon:(0,V.jsx)(p,{content:e.description,variant:`white`,maxWidth:600,placement:`top`,followCursor:!0,children:(0,V.jsx)(u,{className:`usage-notification-measure-info`,width:12,height:12,tabIndex:0,role:`img`,"aria-label":`About ${e.label}`})})})),value:t,onChange:n})}function R({label:e,children:t,align:n=`center`,labelOffset:r,labelInfo:i}){let a=r===void 0?n===`start`?2:0:r;return(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`${tt} minmax(0, 1fr)`,columnGap:20,alignItems:n},children:[(0,V.jsx)(`span`,{style:{...nt,paddingTop:a},children:i?(0,V.jsxs)(`span`,{className:`usage-notification-label-info`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsx)(p,{content:i,variant:`white`,placement:`top`,followCursor:!0,wrapperStyle:{display:`inline-flex`,alignItems:`center`,alignSelf:`center`,lineHeight:0},children:(0,V.jsx)(u,{className:`usage-notification-message-info`,width:14,height:14,tabIndex:0,role:`img`,"aria-label":i})})]}):e}),(0,V.jsx)(`div`,{"data-usage-field":e?``:void 0,style:{minWidth:0,width:e?`max-content`:void 0},children:t})]})}function z({row:e,onAction:t}){return(0,V.jsx)(`span`,{className:`usage-page__row-actions`,children:(0,V.jsx)(h,{width:27,triggerIcon:(0,V.jsx)(c,{}),triggerAriaLabel:`More options for ${e.name}`,value:``,panelStyle:{width:160,"--usage-actions-menu":1},options:[{value:`edit`,label:`Edit`,disabled:e.system,disabledTooltip:`System-defined notifications cannot be edited.`},{value:`clone`,label:`Clone`},...!e.system&&e.status===`Active`?[{value:`pause`,label:`Pause`}]:[],...!e.system&&e.status===`Paused`?[{value:`resume`,label:`Resume`}]:[],{value:`delete`,label:`Delete`,disabled:e.system,disabledTooltip:`System-defined notifications cannot be deleted.`}],onChange:n=>t(n,e)})})}function Xe(e){let t={system:e.filter(e=>e.system).length,user:e.filter(e=>!e.system).length},n={system:0,user:0};return e.map(e=>{let r=e.system?`system`:`user`,i=n[r]++<Math.round(t[r]*(e.system?.35:.7));return{...e,lastTriggeredOn:i?`Nov 26, 2026, 10:30 AM`:void 0}})}function Ze({channels:e=[]}){let t=(0,B.useRef)(null),[n,r]=(0,B.useState)(1);(0,B.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>{let t=1;e.querySelectorAll(`[data-channel-count]`).forEach(n=>{n.getBoundingClientRect().width<=e.clientWidth&&(t=Number(n.dataset.channelCount))}),r(t)},i=new ResizeObserver(n);i.observe(e),n();let a=!0;return document.fonts.ready.then(()=>{a&&n()}),()=>{a=!1,i.disconnect()}},[e]);let i=Math.min(n,e.length),a=e.slice(i);return(0,V.jsxs)(`span`,{ref:t,className:`usage-page__channels`,children:[(0,V.jsx)(`span`,{className:`usage-page__channel-label`,title:e.slice(0,i).join(`, `),children:e.slice(0,i).join(`, `)||`-`}),a.length>0&&(0,V.jsxs)(`span`,{className:`usage-page__more`,children:[` and `,(0,V.jsx)(p,{content:(0,V.jsx)(`span`,{className:`usage-page__hover-list`,children:a.map(e=>(0,V.jsx)(`span`,{children:e},e))}),variant:`white`,placement:`top`,followCursor:!0,children:(0,V.jsxs)(`button`,{type:`button`,className:`usage-page__more-trigger`,children:[a.length,` more`]})})]}),(0,V.jsx)(`span`,{className:`usage-page__channel-measure`,"aria-hidden":`true`,children:e.map((t,n)=>(0,V.jsxs)(`span`,{"data-channel-count":n+1,children:[e.slice(0,n+1).join(`, `),n+1<e.length?` and ${e.length-n-1} more`:``]},n))})]})}var B,V,H,U,W,G,K,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,q,J,lt,Y,X,Z,ut;e((()=>{B=n(i(),1),ne(),g(),C(),x(),m(),le(),ie(),v(),d(),w(),te(),l(),de(),Se(),Ce(),S(),he(),pe(),D(),A(),Ee(),Ae(),Je(),V=a(),t(),{expect:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K={title:`Work Items/Usage Limit Notification`,parameters:{layout:`fullscreen`,docs:{source:{type:`code`},description:{component:`Modal pattern for creating usage limit notifications — configure thresholds, notification channels, recipients, and message content.`}}}},Qe=Object.entries(O).map(([e,t])=>({value:e,label:t.label})),$e=[{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Smith`},{value:`carol`,label:`Carol Williams`},{value:`david`,label:`David Brown`},{value:`eve`,label:`Eve Davis`}],et=[{value:`general`,label:`#general`},{value:`engineering`,label:`#engineering`},{value:`alerts`,label:`#alerts`},{value:`support`,label:`#support`},{value:`marketing`,label:`#marketing`}],tt=`155px`,nt={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,whiteSpace:`nowrap`,textAlign:`right`},rt={margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-h2)`,fontWeight:`var(--ds-font-weight-semibold)`,lineHeight:`var(--ds-line-height-h2)`,color:`var(--ds-text-heading)`},it={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-semibold)`,color:`var(--ds-text-base)`},at=`Priya Nair`,ot=Xe([...[`60%`,`5000`,`4000`,`3000`,`2500`].map((e,t)=>({id:`api-${t}`,feature:`API`,name:`Reached add-on limit ${e}`,creator:t>2?`System`:t===2?`Arjun Kumar`:`Priya Nair`,modifier:t>2?`System`:t===2?`Priya Nair`:`Arjun Kumar`,date:t>2?`Jan 12, 2026`:`Jul 3, 2026`,system:t>2,lastTriggeredOn:`Nov 26, 2026, 10:30 AM`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`})),{id:`functions`,feature:`Functions`,name:`Reached daily limit 5000 calls`,creator:`Meera Iyer`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`webhooks`,feature:`Webhooks`,name:`Slow webhook responses`,creator:`Sam Carter`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Active`},{id:`data-storage`,feature:`Data storage`,name:`Storage above 85%`,creator:`System`,date:`Jan 12, 2026`,system:!0,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Active`},{id:`file-storage`,feature:`File storage`,name:`File storage nearly full`,creator:`Priya Nair`,date:`Jul 3, 2026`,channels:[`Push Notification`,`Emails`],status:`Completed`},{id:`api-credit-warning`,feature:`API`,name:`API credit usage warning`,creator:`Arjun Kumar`,modifier:`Meera Iyer`,date:`Jul 2, 2026`,channels:[`Emails`,`Slack`],status:`Active`},{id:`functions-execution-warning`,feature:`Functions`,name:`Function execution usage warning`,creator:`Meera Iyer`,modifier:`Priya Nair`,date:`Jul 2, 2026`,channels:[`Push Notification`,`Emails`],status:`Paused`},{id:`webhooks-daily-warning`,feature:`Webhooks`,name:`Daily webhook usage warning`,creator:`Sam Carter`,modifier:`Arjun Kumar`,date:`Jul 1, 2026`,channels:[`Emails`,`Zoho Cliq`],status:`Active`},{id:`data-storage-capacity-warning`,feature:`Data storage`,name:`Data storage capacity warning`,creator:`Priya Nair`,modifier:`Sam Carter`,date:`Jul 1, 2026`,channels:[`Push Notification`,`Emails`,`Slack`],status:`Active`},{id:`file-storage-capacity-warning`,feature:`File storage`,name:`File storage capacity warning`,creator:`Arjun Kumar`,modifier:`Meera Iyer`,date:`Jun 30, 2026`,channels:[`Emails`],status:`Paused`},{id:`api-credit-review`,feature:`API`,name:`API credit consumption review`,creator:`Meera Iyer`,modifier:`Sam Carter`,date:`Jun 30, 2026`,channels:[`Push Notification`,`Zoho Cliq`],status:`Completed`},{id:`functions-allocation-warning`,feature:`Functions`,name:`Function execution allocation warning`,creator:`Sam Carter`,modifier:`Priya Nair`,date:`Jun 29, 2026`,channels:[`Emails`,`Slack`],status:`Active`},{id:`webhooks-allocation-warning`,feature:`Webhooks`,name:`Webhook allocation warning`,creator:`Priya Nair`,modifier:`Arjun Kumar`,date:`Jun 29, 2026`,channels:[`Push Notification`,`Emails`,`Zoho Cliq`,`Slack`],status:`Paused`},{id:`data-storage-usage-review`,feature:`Data storage`,name:`Data storage usage review`,creator:`Arjun Kumar`,modifier:`Sam Carter`,date:`Jun 28, 2026`,channels:[`Emails`,`Zoho Cliq`],status:`Completed`},{id:`file-storage-allocation-warning`,feature:`File storage`,name:`File storage allocation warning`,creator:`Meera Iyer`,modifier:`Priya Nair`,date:`Jun 28, 2026`,channels:[`Push Notification`,`Emails`,`Slack`],status:`Active`}]),st=Xe(Object.values(O).filter(e=>!e.blank).flatMap(e=>[`60%`,`70%`,`80%`,`85%`,`90%`,`95%`,`100%`].map(t=>({id:`system-${e.label}-${t}`,feature:e.label,name:`${e.label} usage reached ${t}`,creator:`System`,modifier:`System`,date:`Jan 12, 2026`,system:!0,channels:[`Push Notification`,`Emails`],status:`Active`}))).slice(0,47)),ct=[...ot.filter(e=>!e.system),...st],q={"Priya Nair":`user_03.jpg`,"Arjun Kumar":`user_04.jpg`,"Meera Iyer":`user_07.jpg`,"Sam Carter":`user_08.jpg`},J=(e,t)=>{if(t.system)return`-`;let n=t.modifier??t.creator,r=t.modifiedDate??t.date,i=t.modifiedTime??t.time,a=`${n} on ${r}${i?` ${i}`:``}`,o=q[n];return(0,V.jsx)(p,{variant:`white`,placement:`top`,followCursor:!0,wrapperStyle:{display:`inline-flex`,maxWidth:`100%`},content:a,children:(0,V.jsxs)(`span`,{className:`usage-page__person`,tabIndex:0,"aria-label":a,children:[o?(0,V.jsx)(`img`,{src:`/crm-design-system/images/avatars/${o}`,alt:``}):(0,V.jsx)(_,{name:`user-avatar`}),(0,V.jsx)(`span`,{children:r})]})})},lt=e=>[{key:`actions`,label:``,width:31,render:(t,n)=>(0,V.jsx)(z,{row:n,onAction:e})},{key:`name`,label:`Notification Name`,width:`25%`,render:(t,n)=>(0,V.jsxs)(`span`,{className:`usage-page__name-cell`,"data-new-notification":n.newlyAdded||void 0,children:[(0,V.jsx)(`button`,{type:`button`,className:`usage-page__name`,"aria-haspopup":`dialog`,onClick:()=>e(`edit`,n),children:n.name}),(0,V.jsx)(p,{variant:`white`,placement:`top`,followCursor:!0,maxWidth:600,content:n.summary||`${n.feature}: ${n.name}. Notify via ${n.channels?.join(`, `)}.`,children:(0,V.jsx)(s,{className:`usage-page__summary-info`,width:16,height:16,role:`img`,"aria-label":`Summary: ${n.summary||`${n.feature}: ${n.name}`}`})})]})},{key:`feature`,label:`Feature`,width:`13%`},{key:`channels`,label:`Notify via`,width:`22%`,render:(e,t)=>(0,V.jsx)(Ze,{channels:t.channels})},{key:`modifier`,label:`Last Modified`,width:`14%`,render:J},{key:`lastTriggeredOn`,label:`Last Triggered On`,width:200,render:e=>(0,V.jsx)(`span`,{className:`usage-page__triggered-date`,children:e||`-`})},{key:`status`,label:`Status`,width:120,render:(e,t)=>(0,V.jsx)(`span`,{className:`usage-page__status`,"data-status":t.status,children:t.status})}],Y={name:`V1`,play:async({canvasElement:e})=>{if(!(navigator.webdriver||new URLSearchParams(window.location.search).has(`playModal`)))return;let t=G(e.ownerDocument.body),n=ot.filter(e=>!e.system).length,r=ot.filter(e=>e.system).length,i=t.getByRole(`button`,{name:`User Defined, ${n} notifications`}),a=t.getByRole(`button`,{name:`System Defined, ${r} notifications`});await H(i).toHaveAttribute(`aria-expanded`,`true`),await H(a).toHaveAttribute(`aria-expanded`,`true`),await H(i.querySelector(`.usage-page__group-count`)).toHaveTextContent(String(n));let o=i.querySelector(`.usage-page__group-count`).getBoundingClientRect();await H(o.width).toBeGreaterThan(o.height),await U.click(i),await H(i).toHaveAttribute(`aria-expanded`,`false`),await W(()=>H(t.getByText(`Slow webhook responses`,{exact:!0})).not.toBeVisible()),await H(t.getByRole(`button`,{name:`Storage above 85%`,exact:!0})).toBeVisible(),i.focus(),await U.keyboard(`{Enter}`),await H(i).toHaveAttribute(`aria-expanded`,`true`),await U.click(a),await W(()=>H(t.getByText(`Storage above 85%`,{exact:!0})).not.toBeVisible()),await H(t.getByRole(`button`,{name:`Slow webhook responses`,exact:!0})).toBeVisible(),await U.click(a);let s=t.getByRole(`searchbox`,{name:`Search notifications`});await U.type(s,`Slow webhook responses`),await H(t.getByRole(`button`,{name:`User Defined, 1 notifications`})).toBeVisible(),await H(t.queryByRole(`button`,{name:/System Defined, /})).not.toBeInTheDocument(),await U.clear(s),await U.click(t.getByRole(`button`,{name:`Create Notification`,exact:!0}));let c=t.getByRole(`textbox`,{name:`Notification Name`}),l=t.getByText(`Notification Name`,{selector:`label`});await W(()=>H(c).toHaveFocus());let ee=c.closest(`.input-input-wrapper`);await H(ee).not.toHaveAttribute(`data-required`),(()=>{let e=l.getBoundingClientRect(),t=ee.getBoundingClientRect(),n=parseFloat(getComputedStyle(l).paddingTop);H(Math.abs(e.top+n+(e.height-n)/2-t.top-t.height/2)).toBeLessThanOrEqual(1)})();let u=l.getBoundingClientRect().top-c.getBoundingClientRect().top,d=c.closest(`.usage-notification-fields`),f=d.getBoundingClientRect().height,te=()=>t.getByRole(`button`,{name:`Feature`,exact:!0}).getBoundingClientRect().top-d.getBoundingClientRect().top,p=te();await U.click(t.getByRole(`button`,{name:`Save`,exact:!0})),await H(d.getBoundingClientRect().height).toBe(f),await H(te()).toBeCloseTo(p,0);let m=t.getByText(`Notification Name cannot be empty.`);await H(m).toHaveAttribute(`role`,`alert`),await H(getComputedStyle(m).color).toBe(`rgb(255, 93, 90)`),await H(getComputedStyle(m).webkitTextFillColor).toBe(`rgb(255, 93, 90)`);let h=t.getByText(`Select a feature.`);await H(h).toHaveAttribute(`role`,`alert`),await H(getComputedStyle(h).color).toBe(`rgb(255, 93, 90)`),await H(Math.abs(l.getBoundingClientRect().top-c.getBoundingClientRect().top-u)).toBeLessThanOrEqual(1),await U.type(c,`Test notification`),await H(t.queryByText(`Notification Name cannot be empty.`)).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Feature`,exact:!0})),await U.click(t.getByRole(`option`,{name:`Webhooks`,exact:!0})),await H(t.queryByRole(`alert`)).not.toBeInTheDocument(),await H(t.getByRole(`button`,{name:`Based on`,exact:!0})).toBeVisible(),await H(t.queryByRole(`button`,{name:`Calculation`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Feature`,exact:!0})),await U.click(t.getByRole(`option`,{name:`API`,exact:!0})),await H(t.getByRole(`button`,{name:`Based on`,exact:!0})).toHaveTextContent(`Total Free Credit Used`),await U.click(t.getByRole(`button`,{name:`Based on`,exact:!0}));for(let e of[`Total Credit Used per API`,`Count of Credit Used per API`,`Average of Credit Used per API`])await H(t.getByRole(`option`,{name:e,exact:!0})).toBeInTheDocument();for(let[e,n]of[[`Total Credit Used per API`,`Adds up Credit Used per API`],[`Count of Credit Used per API`,`Counts the matching API calls`],[`Average of Credit Used per API`,`Calculates the average of Credit Used per API`],[`Maximum of Credit Used per API`,`Returns the highest recorded value`],[`Minimum of Credit Used per API`,`Returns the lowest recorded value`]]){let r=t.getByRole(`option`,{name:e,exact:!0}).querySelector(`.usage-notification-measure-info`);await U.hover(r),await H(await t.findByRole(`tooltip`)).toHaveTextContent(n),await U.unhover(r),await W(()=>H(t.queryByRole(`tooltip`)).not.toBeInTheDocument())}await U.click(t.getByRole(`button`,{name:`Calculation filter`,exact:!0})),await U.click(G(t.getByRole(`listbox`,{name:`Calculation filter`})).getByRole(`option`,{name:`Total`,exact:!0})),await H(t.getByRole(`option`,{name:`Total Free Credit Used`,exact:!0})).toBeInTheDocument(),await H(t.queryByRole(`option`,{name:`Average of Credit Used per API`,exact:!0})).not.toBeInTheDocument();let g=t.getByRole(`textbox`,{name:`Search options`,exact:!0});await U.type(g,`per API`),await H(t.getByRole(`option`,{name:`Total Credit Used per API`,exact:!0})).toBeInTheDocument(),await H(t.queryByRole(`option`,{name:`Total Free Credit Used`,exact:!0})).not.toBeInTheDocument(),await U.clear(g),await U.click(t.getByRole(`button`,{name:`Calculation filter`,exact:!0})),await U.click(G(t.getByRole(`listbox`,{name:`Calculation filter`})).getByRole(`option`,{name:`All`,exact:!0})),await H(t.getByRole(`option`,{name:`Count of Credit Used per API`,exact:!0})).toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Calculation filter`,exact:!0})),await U.click(G(t.getByRole(`listbox`,{name:`Calculation filter`})).getByRole(`option`,{name:`Average`,exact:!0})),await H(t.queryByRole(`option`,{name:`Total Credit Used per API`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`option`,{name:`Average of Credit Used per API`,exact:!0})),await H(t.getByRole(`button`,{name:`Based on`,exact:!0})).toHaveTextContent(`Average of Credit Used per API`),await H(t.queryByRole(`button`,{name:`Calculation`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Feature`,exact:!0})),await U.click(t.getByRole(`option`,{name:`Webhooks`,exact:!0})),await U.click(await t.findByRole(`button`,{name:`Select User`,exact:!0}));let _=G(await t.findByRole(`region`,{name:`Available recipients`}));await W(()=>H(t.getByText(`Email: You can select up to 90 CRM users and add up to 10 additional email addresses. The total number of email recipients cannot exceed 100.`)).toBeVisible()),await U.click(_.getByRole(`button`,{name:/Esther Howard/})),await U.click(t.getByRole(`button`,{name:`Recipient type`})),await U.click(t.getByRole(`option`,{name:`Groups`,exact:!0})),await H(t.getByRole(`button`,{name:`Recipient collection`})).toHaveTextContent(`Sales Group`),await H(G(_.getByRole(`button`,{name:/Esther Howard/})).getByText(`Added`)).toBeVisible(),await U.click(_.getByRole(`button`,{name:/Jacob Jones/})),await H(t.getByRole(`button`,{name:`Add Additional Recipient`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`button`,{name:`Done`,exact:!0})),await W(()=>H(t.queryByRole(`region`,{name:`Selected recipients`})).not.toBeInTheDocument());let v=G(t.getByRole(`group`,{name:`Send notification to`,exact:!0}));await H(v.getByRole(`button`,{name:`Users: 2. Edit selected recipients`})).toBeVisible(),await H(v.queryByRole(`button`,{name:/Groups:/})).not.toBeInTheDocument(),await U.click(v.getByRole(`button`,{name:`Edit notification recipients`}));let y=G(await t.findByRole(`region`,{name:`Selected recipients`}));await H(y.getByRole(`button`,{name:`Remove Esther Howard`})).toBeInTheDocument();let ne=y.getByRole(`button`,{name:`Remove Jacob Jones`});ne.focus(),await W(()=>H(ne).toBeVisible()),await U.click(ne),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(v.getByRole(`button`,{name:`Users: 2. Edit selected recipients`})).toBeVisible()),await U.click(t.getByRole(`switch`,{name:`Toggle external app notifications`}));let b=G(t.getByRole(`group`,{name:`Zoho Cliq recipients`}));await U.click(b.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByText(`Zoho Cliq Notification`,{exact:!0})).toBeVisible()),await H(await t.findByPlaceholderText(`Select recipients`)).toBeVisible(),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(t.queryByText(`Zoho Cliq Notification`,{exact:!0})).not.toBeInTheDocument()),await U.click(t.getByRole(`checkbox`,{name:`Slack`,exact:!0}));let x=G(t.getByRole(`group`,{name:`Slack recipients`}));await U.click(x.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByText(`Slack Notification`,{exact:!0})).toBeVisible()),await H(t.queryByRole(`checkbox`,{name:`Notify to users`})).not.toBeInTheDocument(),await H(t.queryByRole(`checkbox`,{name:`Notify in Channels`})).not.toBeInTheDocument(),await H(t.queryByPlaceholderText(`Select recipients`)).not.toBeInTheDocument(),await H(t.queryByText(`Select a team first to choose recipients.`)).not.toBeInTheDocument(),await H(t.getByRole(`button`,{name:`Slack team`})).toHaveTextContent(`Select`);let re=t.getByText(`Slack Notification`,{exact:!0}).closest(`.modal-dialog`);await H(re.style.width).toBe(`fit-content`),await H(re.querySelector(`.usage-app-recipients`)).toBeNull(),await U.click(t.getByRole(`button`,{name:`Slack team`})),await H(t.queryByRole(`option`,{name:`Select`,exact:!0})).not.toBeInTheDocument(),await H(t.getByRole(`option`,{name:`Bennett Electronics`,exact:!0})).toBeVisible(),await H(t.getByRole(`button`,{name:`Authorise another team`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`option`,{name:`scranton store`,exact:!0})),await H(t.getByPlaceholderText(`Select recipients`)).toBeEnabled(),await H(t.queryByText(`Select a team first to choose recipients.`)).not.toBeInTheDocument(),await H(t.getByRole(`checkbox`,{name:`Notify to users`})).toBeEnabled(),await H(getComputedStyle(re.querySelector(`.usage-app-recipients`)).gap).toBe(`28px`),await U.click(t.getByRole(`checkbox`,{name:`Notify in Channels`})),await H(t.getByPlaceholderText(`Select channels`)).toBeVisible(),await U.click(t.getByRole(`button`,{name:`Done`,exact:!0})),await W(()=>H(t.queryByText(`Slack Notification`,{exact:!0})).not.toBeInTheDocument()),await U.click(x.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByRole(`button`,{name:`Slack team`})).toHaveTextContent(`scranton store`)),await U.click(t.getByRole(`button`,{name:`Slack team`})),await U.click(t.getByRole(`button`,{name:`Authorise another team`,exact:!0})),await H(t.queryByLabelText(`Team name`)).not.toBeInTheDocument(),await H(t.getByRole(`button`,{name:`Slack team`})).toHaveTextContent(`scranton store`),await W(()=>H(t.queryByText(`Authorise another team`,{exact:!0})).not.toBeInTheDocument()),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(t.queryByText(`Slack Notification`,{exact:!0})).not.toBeInTheDocument()),await U.click(t.getByRole(`button`,{name:`Cancel`,exact:!0}))},render:e=>{let t=e.externalAppsVariant===`dropdown`,[n,r]=(0,B.useState)(!1),[i,a]=(0,B.useState)(`admin-tools`),[s,c]=(0,B.useState)(`all`),[l,u]=(0,B.useState)(`usage`),[d,te]=(0,B.useState)(`notifications`),[m,g]=(0,B.useState)(()=>(e.listState===`initial`?st:t?ct:ot).map(e=>{let t=Object.entries(O).find(([,t])=>t.label.toLowerCase()===e.feature.toLowerCase())?.[0],n=Ne(t);if(e.id.startsWith(`api-`)){let t=e.name.split(` `).at(-1);n.mode=t.endsWith(`%`)?`pct`:`val`,n.value=t.replace(`%`,``)}else e.id===`functions`?(n.mode=`val`,n.value=`5000`):e.id===`data-storage`&&(n.mode=`pct`,n.value=`85`);return{...e,feature:O[n.feature]?.label??e.feature,time:`10:30 AM`,summary:ze(n),config:{trigger:n,recipients:[],pushEmailEnabled:!0,externalAppsEnabled:!!e.channels?.some(e=>[`Zoho Cliq`,`Slack`].includes(e)),notifyPush:!!e.channels?.includes(`Push Notification`),notifyEmail:!!e.channels?.includes(`Emails`),notifyZohoCliq:!!e.channels?.includes(`Zoho Cliq`),notifySlack:!!e.channels?.includes(`Slack`),users:[],channels:[],message:Be(n)}}})),[v,ne]=(0,B.useState)(()=>e.listState===`initial`?[`system`]:[]),[x,ie]=(0,B.useState)(`all`),[S,C]=(0,B.useState)(``),[w,T]=(0,B.useState)(),E=!!m.find(e=>e.id===w)?.system,[le,de]=(0,B.useState)(),[pe,he]=(0,B.useState)(),[_e,ve]=(0,B.useState)();(0,B.useEffect)(()=>{if(!pe)return;let e=window.setTimeout(()=>he(void 0),4e3);return()=>window.clearTimeout(e)},[pe]),(0,B.useEffect)(()=>{if(!_e)return;let e=window.setTimeout(()=>{g(e=>e.map(e=>e.id===_e?{...e,newlyAdded:!1}:e)),ve(void 0)},4e3);return()=>window.clearTimeout(e)},[_e]);let ye=m.filter(e=>(s===`all`||e.feature===s)&&(x===`all`||e.status===x)&&`${e.name} ${e.feature}`.toLowerCase().includes(S.trim().toLowerCase())),be=(0,B.useId)(),[xe,Se]=(0,B.useState)(``),[Ce,Ee]=(0,B.useState)(!1),[D,Oe]=(0,B.useState)(()=>Ne()),[k,A]=(0,B.useState)(),j=N(D),M=O[D.feature],Ae=!!k&&!M,Me=!!k&&!!M&&!M.blank&&(!j||!j.aggs.includes(D.calculation)),P=e=>{Oe(t=>({...t,...e})),A(void 0)},[F,Ve]=(0,B.useState)([]),[He,I]=(0,B.useState)(!1),[L,Je]=(0,B.useState)(!0),[z,Xe]=(0,B.useState)(!1),[Ze,H]=(0,B.useState)(!0),[U,W]=(0,B.useState)(!0),[G,K]=(0,B.useState)(!0),[q,J]=(0,B.useState)(!1),[Y,X]=(0,B.useState)([]),Z=e=>{X(t=>t.filter(t=>t!==e)),e===`cliq`?K(!1):J(!1)},ut=JSON.stringify(D),[dt,ft]=(0,B.useState)({criteriaKey:``,value:``}),pt=dt.criteriaKey===ut?dt.value:Be(D),[mt,ht]=(0,B.useState)(),[gt,_t]=(0,B.useState)(),vt={sender:`owner`,subject:xe.trim()||`Usage limit notification`,body:`Hello,\n\n${ze(D)||pt}\n\nRegards,\n\${Organization.OrganizationName}`},[yt,bt]=(0,B.useState)(!1),[xt,St]=(0,B.useState)(!0),[Ct,wt]=(0,B.useState)(!1),[Tt,Et]=(0,B.useState)([]),[Dt,Ot]=(0,B.useState)([]),[kt,At]=(0,B.useState)([]),[jt,Mt]=(0,B.useState)([]),[Q,Nt]=(0,B.useState)(`Zoho Cliq`),[Pt,Ft]=(0,B.useState)([]),[It,Lt]=(0,B.useState)([]),[Rt]=(0,B.useState)([{value:`scranton-store`,label:`scranton store`},{value:`bennett-electronics`,label:`Bennett Electronics`}]),[zt,Bt]=(0,B.useState)(``),[$,Vt]=(0,B.useState)(``),Ht=e=>{let t=e===`Slack`?Pt:kt,n=e===`Slack`?It:jt;Nt(e),Vt(zt),Et(t),Ot(n),St(!0),wt(n.length>0),bt(!0)},Ut=()=>Ht(`Zoho Cliq`),Wt=()=>{let e=xt?Tt:[],t=Ct?Dt:[];Q===`Slack`?(Ft(e),Lt(t),Bt($)):(At(e),Mt(t)),bt(!1)},Gt=()=>bt(!1),Kt=!(L&&U&&!Ze&&(!z||!G&&!q)),qt=!!j&&!M?.blank,Jt=Ie(D),Yt=[`bt`,`nb`].includes(D.comparator),Xt=ze(D),Zt=(0,B.useRef)(null),[Qt,$t]=(0,B.useState)(null),[en,tn]=(0,B.useState)(625);(0,B.useEffect)(()=>{let e=Qt?.closest(`.modal-dialog`);if(!n||!Qt||!e)return;let t=Array.from(Qt.querySelectorAll(`[data-usage-field], input[type="text"], [aria-label="Feature"]`)),r=()=>{let n=e.getBoundingClientRect().left,r=Math.max(...t.map(e=>e.getBoundingClientRect().right));tn(Math.ceil(r-n+30))},i=new ResizeObserver(r);return t.forEach(e=>i.observe(e)),window.addEventListener(`resize`,r),r(),()=>{i.disconnect(),window.removeEventListener(`resize`,r)}},[n,Qt,qt,z,L,Kt]);let nn=(e,n=!1)=>{if(e?.system&&!n)return;T(n?void 0:e?.id),Se(e?`${e.name}${n?`_Cloned`:``}`:``);let i=e?.config,a=!!e?.system&&!n,o=Object.entries(O).find(([,t])=>t.label.toLowerCase()===e?.feature.toLowerCase())?.[0];Oe(i?{...i.trigger}:Ne(o)),Ve(i?.recipients??[]),Je(a||(i?.pushEmailEnabled??!0)),Xe(!a&&(i?.externalAppsEnabled??!!e?.channels?.some(e=>[`Zoho Cliq`,`Slack`].includes(e)))),H(a||(i?.notifyPush??(!e||!!e.channels?.includes(`Push Notification`)))),W(a||(i?.notifyEmail??(!e||!!e.channels?.includes(`Emails`)))),K(i?.notifyZohoCliq??(e?!!e.channels?.includes(`Zoho Cliq`):!t)),J(i?.notifySlack??!!e?.channels?.includes(`Slack`)),X(i?.externalAppOrder??(e?.channels??[]).filter(e=>e===`Zoho Cliq`||e===`Slack`).map(e=>e===`Zoho Cliq`?`cliq`:`slack`)),At(i?.users??[]),Mt(i?.channels??[]),Ft(i?.slackUsers??[]),Lt(i?.slackChannels??[]),Bt(i?.slackTeam??``),ft(i?{criteriaKey:JSON.stringify(i.trigger),value:i.message}:{criteriaKey:``,value:``}),_t(i?.template),Ee(!1),A(void 0),r(!0)},rn=lt((e,t)=>{e===`edit`||e===`clone`?nn(t,e===`clone`):e===`delete`?t.system||de(t):!t.system&&t.status!==`Completed`&&(g(n=>n.map(n=>n.id===t.id&&!n.system?{...n,status:e===`pause`?`Paused`:`Active`}:n)),he(`${t.name} ${e===`pause`?`paused`:`resumed`} successfully.`))});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`style`,{children:`
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
          .usage-notification-label-info {
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
            gap: calc(var(--ds-font-size-sm) / 3);
          }
          .usage-notification-message-info {
            display: block;
            color: var(--ds-text-label);
          }
          .usage-notification-message-info > circle:first-child,
          .usage-notification-measure-info > circle:first-child {
            fill: currentColor;
          }
          .dropdown-option:hover .usage-notification-measure-info {
            visibility: visible;
          }
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        `}),pe&&(0,V.jsx)(re,{variant:`success`,className:`usage-page__success-alert`,message:pe,onClose:()=>he(void 0)}),(0,V.jsxs)(`div`,{className:`usage-page`,children:[(0,V.jsx)(`aside`,{className:`usage-page__sidebar`,"aria-label":`Setup navigation`,children:(0,V.jsx)(we,{variant:`setup`,searchable:!0,width:`100%`,items:Te,activeId:i,onSelect:a})}),(0,V.jsx)(`header`,{className:`usage-page__topband`,children:(0,V.jsx)(fe,{moduleLabel:null,showTerritory:!1})}),(0,V.jsxs)(`main`,{className:`usage-page__workspace`,"aria-label":`Usage limit notifications`,children:[(0,V.jsx)(oe,{tabs:[{id:`admin`,label:`Admin tool`},{id:`usage`,label:`Usage Limits`}],activeTab:l,onChange:u}),l===`usage`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`usage-page__sections`,children:(0,V.jsx)(oe,{variant:`secondary`,tabs:[{id:`limits`,label:`Usage Limits`},{id:`notifications`,label:`Notification Configurator`}],activeTab:d,onChange:te})}),d===`notifications`?(0,V.jsxs)(`section`,{className:`usage-page__content`,"aria-label":`Notification Configurator`,children:[(0,V.jsx)(`div`,{className:`usage-page__toolbar`,children:(0,V.jsx)(`p`,{children:`Manage CRM usage limits and events by enabling admins to be notified when required`})}),(0,V.jsxs)(`div`,{className:`usage-page__toolbar`,children:[(0,V.jsxs)(`div`,{className:`usage-page__filters`,children:[(0,V.jsxs)(`div`,{className:`usage-page__search`,children:[(0,V.jsx)(o,{"aria-hidden":`true`}),(0,V.jsx)(b,{layout:`vertical`,type:`search`,width:200,"aria-label":`Search notifications`,placeholder:`Search`,value:S,onChange:e=>C(e.target.value)}),S&&(0,V.jsx)(`button`,{type:`button`,className:`usage-page__search-clear dropdown-clear-btn`,"aria-label":`Clear search`,onClick:e=>{C(``),e.currentTarget.parentElement?.querySelector(`input`)?.focus()},children:(0,V.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{d:`M1 1L7 7M7 1L1 7`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]}),(0,V.jsx)(h,{triggerAriaLabel:`Filter notifications by feature`,width:150,value:s,panelStyle:{width:`max-content`,minWidth:150,maxWidth:`calc(100vw - 32px)`},options:[{value:`all`,label:`All Features`},...Qe.map(e=>({value:e.label,label:e.label}))],onChange:c}),(0,V.jsx)(h,{triggerAriaLabel:`Filter notifications by status`,width:150,value:x,options:[{value:`all`,label:`All Status`},...[`Active`,`Paused`,`Completed`].map(e=>({value:e,label:e}))],onChange:ie})]}),(0,V.jsx)(f,{variant:`primary`,className:`usage-page__create-notification`,onClick:()=>nn(),children:`Create Notification`})]}),(0,V.jsx)(`div`,{className:`usage-page__table-region`,role:`region`,"aria-label":`Notifications table`,tabIndex:0,children:(0,V.jsx)(ge,{variant:`report`,width:`100%`,columns:rn,rows:ye,emptyMessage:`No notifications found`,groups:[{id:`user`,label:`User Defined`,system:!1},{id:`system`,label:`System Defined`,system:!0}].map(e=>{let t=ye.filter(t=>!!t.system===e.system),n=v.includes(e.id);return{id:e.id,rows:t,collapsed:n,header:(0,V.jsxs)(`button`,{type:`button`,className:`usage-page__group`,"aria-expanded":!n,"aria-label":`${e.label}, ${t.length} notifications`,onClick:()=>ne(t=>n?t.filter(t=>t!==e.id):[...t,e.id]),children:[(0,V.jsx)(ee,{"aria-hidden":`true`,className:`usage-page__group-chevron`}),(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`span`,{className:`usage-page__group-count`,"aria-hidden":`true`,children:t.length})]})}}).filter(e=>e.rows.length>0)})})]}):(0,V.jsxs)(`section`,{className:`usage-page__content`,children:[(0,V.jsx)(`h1`,{children:`Usage Limits`}),(0,V.jsx)(`p`,{children:`Configure usage alerts in the Notification Configurator tab.`})]})]}):(0,V.jsxs)(`section`,{className:`usage-page__content`,children:[(0,V.jsx)(`h1`,{children:`Admin tool`}),(0,V.jsx)(`p`,{children:`Select Usage Limits to manage usage notifications.`})]})]})]}),(0,V.jsx)(me,{variations:[{label:`Default`,storyId:`work-items-usage-limit-notification--add-external-apps`},{label:`Initial State`,storyId:`work-items-usage-limit-notification--initial-state`}]}),(0,V.jsx)(se,{isOpen:yt,title:`${Q} Notification`,onClose:Gt,onCancel:Gt,onSave:Wt,cancelLabel:`Cancel`,saveLabel:`Done`,width:`fit-content`,className:`usage-app-modal`,children:(0,V.jsxs)(`div`,{className:`usage-app-modal__content`,children:[Q===`Slack`&&(0,V.jsx)(h,{label:`Team`,placeholder:`Select`,width:`100%`,triggerAriaLabel:`Slack team`,value:$,options:Rt,onChange:e=>{e!==$&&(Vt(e),Et([]),Ot([]))},panelStyle:{"--usage-slack-team-menu":1},footerAction:{label:`Authorise another team`,icon:null,onClick:()=>{}}}),(Q!==`Slack`||$)&&(0,V.jsxs)(`fieldset`,{className:`usage-app-recipients`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,V.jsx)(y,{label:`Notify to users`,disabled:Q===`Slack`&&!$,checked:xt,onChange:e=>St(e.target.checked)}),xt&&(0,V.jsx)(ue,{value:Tt,options:$e,onChange:Et,placeholder:`Select recipients`,disabled:Q===`Slack`&&!$,width:`100%`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,V.jsx)(y,{label:`Notify in Channels`,disabled:Q===`Slack`&&!$,checked:Ct,onChange:e=>wt(e.target.checked)}),Ct&&(0,V.jsx)(ue,{value:Dt,options:et,onChange:Ot,placeholder:`Select channels`,disabled:Q===`Slack`&&!$,width:`100%`})]})]})]})}),(0,V.jsx)(se,{isOpen:n,title:`Configure Usage Limit Notification`,className:`usage-notification-modal`,onClose:()=>r(!1),onCancel:()=>r(!1),onSave:()=>{let e=!xe.trim(),t=E?void 0:Re(D);if(Ee(e),A(t),e&&document.getElementById(be)?.focus(),e||t)return;Se(xe.trim());let n=[...L&&Ze?[`Push Notification`]:[],...L&&U?[`Emails`]:[],...z&&G?[`Zoho Cliq`]:[],...z&&q?[`Slack`]:[]],i=m.find(e=>e.id===w),a={...i,id:w??`notification-${Date.now()}`,feature:M.label,name:xe.trim(),creator:i?.creator??at,date:i?.date??new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),time:i?.time??new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),modifier:at,modifiedDate:new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),modifiedTime:new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`}).format(new Date),channels:n,status:i?.status??`Active`,summary:ze(D),config:{trigger:{...D},recipients:F,pushEmailEnabled:L,externalAppsEnabled:z,notifyPush:Ze,notifyEmail:U,notifyZohoCliq:G,notifySlack:q,externalAppOrder:Y,users:kt,channels:jt,slackUsers:Pt,slackChannels:It,slackTeam:zt,message:pt,template:gt}};g(e=>w?e.map(e=>e.id===w?a:e):[{...a,newlyAdded:!0},...e.map(e=>({...e,newlyAdded:!1}))]),w||ve(a.id),Ee(!1),r(!1)},cancelLabel:`Cancel`,saveLabel:`Save`,width:en,children:(0,V.jsxs)(`div`,{ref:$t,style:{display:`flex`,flexDirection:`column`,gap:30},children:[(0,V.jsxs)(`div`,{className:`usage-notification-fields`,style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,V.jsx)(b,{id:be,label:`Notification Name`,type:`text`,layout:`horizontal`,columns:`${tt} 390px`,value:xe,disabled:E,style:E?{"--_input-disabled-text-color":`var(--ds-text-base)`,WebkitTextFillColor:`var(--ds-text-base)`,opacity:1}:void 0,"aria-required":`true`,"aria-invalid":Ce||void 0,error:Ce,helperText:Ce?(0,V.jsx)(`span`,{role:`alert`,children:`Notification Name cannot be empty.`}):void 0,onChange:e=>{Se(e.target.value),e.target.value.trim()&&Ee(!1)}}),!E&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(h,{layout:`horizontal`,label:`Feature`,columns:`${tt} 390px`,triggerAriaLabel:`Feature`,placeholder:`Select`,error:Ae,helperText:Ae?(0,V.jsx)(`span`,{role:`alert`,children:`Select a feature.`}):void 0,options:Qe,value:D.feature,onChange:e=>{Oe(Ne(e)),A(void 0)}}),M&&!M.blank&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R,{label:`Based on`,align:`start`,labelOffset:7,children:(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`start`,flexWrap:`wrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:(0,V.jsx)(Ye,{feature:D.feature,error:Me,value:Pe(D),onChange:e=>{Oe(t=>Fe(t,e)),A(void 0)}},D.feature)})}),j&&(0,V.jsx)(R,{label:`When`,children:(0,V.jsxs)(`div`,{ref:Zt,className:`usage-notification-when`,style:{display:`flex`,width:`max-content`,alignItems:`center`,flexWrap:`nowrap`,gap:`calc(var(--ds-font-size-base) * 0.6)`},children:[!!j.limits?.length&&(0,V.jsx)(h,{layout:`vertical`,triggerAriaLabel:`Threshold type`,width:150,options:[{value:`pct`,label:`Percent`},{value:`val`,label:`Value`}],value:D.mode,onChange:e=>P({mode:e,value:e===`pct`?`80`:`90000`,valueTo:e===`pct`?`100`:`100000`})}),(0,V.jsx)(h,{layout:`vertical`,triggerAriaLabel:`Comparator`,width:150,options:Ue,value:D.comparator,onChange:e=>P({comparator:e})}),(0,V.jsx)(b,{layout:`vertical`,type:`number`,width:150,"aria-label":Yt?`Threshold from`:`Threshold value`,min:D.mode===`pct`?.01:0,max:D.mode===`pct`?500:void 0,step:`any`,value:D.value,placeholder:Yt?`From`:``,onChange:e=>P({value:e.target.value})}),Yt&&(0,V.jsx)(b,{layout:`vertical`,type:`number`,width:150,"aria-label":`Threshold to`,min:D.mode===`pct`?.01:0,max:D.mode===`pct`?500:void 0,step:`any`,value:D.valueTo,placeholder:`To`,onChange:e=>P({valueTo:e.target.value})}),D.mode===`pct`&&(j.limits?.length??0)>1&&(0,V.jsx)(h,{layout:`vertical`,triggerAriaLabel:`Limit`,width:150,options:j.limits.map(e=>({value:e,label:je(e)})),value:D.constant,onChange:e=>P({constant:e})}),D.mode===`val`&&(0,V.jsx)(`span`,{style:nt,children:Le(D)}),Jt&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{style:nt,children:`over the last`}),(0,V.jsx)(b,{layout:`vertical`,type:`number`,width:150,"aria-label":`Window length`,min:1,max:Ke[D.windowUnit],step:1,value:D.windowValue,onChange:e=>P({windowValue:e.target.value})}),(0,V.jsx)(h,{layout:`vertical`,triggerAriaLabel:`Window unit`,width:150,options:Ge,value:D.windowUnit,onChange:e=>P({windowUnit:e})})]})]})})]}),(0,V.jsx)(R,{label:`Notify once every`,children:(0,V.jsx)(h,{layout:`vertical`,triggerAriaLabel:`Notify once every`,options:We,width:390,value:D.interval,onChange:e=>P({interval:e})})})]}),Xt&&(0,V.jsx)(`div`,{style:{paddingLeft:E?0:`calc(${tt} + 20px)`},children:(0,V.jsx)(`div`,{style:{width:E?`100%`:`fit-content`,maxWidth:`calc(100% - 30px)`,marginRight:30,overflowWrap:`anywhere`,boxSizing:`border-box`,padding:`var(--ds-font-size-base)`,border:`1px solid var(--ds-border-subtle)`,borderRadius:`calc(var(--ds-font-size-base) * 0.4)`,background:`var(--ds-bg-common-bg)`,lineHeight:`var(--ds-line-height-base)`,color:`var(--ds-text-base)`,fontSize:`var(--ds-font-size-base)`,fontFamily:`var(--ds-font-family-base)`},"aria-live":`polite`,children:Xt})}),k&&!Ae&&!Me&&(0,V.jsx)(R,{label:``,children:(0,V.jsx)(`div`,{className:`input-root`,"data-variant":`error`,children:(0,V.jsx)(`span`,{className:`input-helper-text`,role:`alert`,children:k})})})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,V.jsx)(`h2`,{style:rt,children:`Notify via`}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`h3`,{style:{...it,margin:0},children:`Push Notification / Email`}),!E&&(0,V.jsx)(ae,{checked:L,onChange:e=>Je(e.target.checked),"aria-label":`Toggle push notification and email`})]}),L&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[!E&&(0,V.jsx)(R,{label:`Send notification to`,children:(0,V.jsxs)(`div`,{className:`usage-recipient-field${F.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Send notification to`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&I(!0)},children:[F.length===0?(0,V.jsx)(f,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:()=>I(!0),children:`Select User`}):[`user`,`group`,`role`,`role-and-subordinates`,`territory`,`territory-and-subterritories`,`email`].map(e=>{let t=F.filter(t=>t.kind===e),n={user:`Users`,group:`Groups`,role:`Roles`,"role-and-subordinates":`Roles and Subordinates`,territory:`Territories`,"territory-and-subterritories":`Territories and Sub-territories`,email:`Emails`}[e];return t.length>0&&(0,V.jsx)(p,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[n,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${n}: ${t.length}. Edit selected recipients`,onClick:()=>I(!0),children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:n}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)}),F.length>0&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit notification recipients`,"aria-haspopup":`dialog`,onClick:()=>I(!0),children:(0,V.jsx)(_,{name:`CrmEditFilledMd`,size:13})})]})}),(0,V.jsx)(R,{label:`Notify Via`,align:`start`,children:(0,V.jsxs)(`div`,{className:`usage-notification-channels`,style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsx)(y,{label:`Push Notification`,disabled:E,checked:Ze,onChange:e=>H(e.target.checked)}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,V.jsx)(y,{label:`Email`,disabled:E,checked:U,onChange:e=>W(e.target.checked)}),U&&(0,V.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Preview email template`,"aria-haspopup":`dialog`,onClick:()=>ht(`preview`),children:`Preview`}),(0,V.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:4,height:4,marginInline:2,flexShrink:0,borderRadius:`50%`,background:`var(--ds-text-muted)`}}),(0,V.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-link)`},"aria-label":`Edit email template`,"aria-haspopup":`dialog`,onClick:()=>ht(`edit`),children:`Edit Template`})]})]})]})})]})]}),!E&&(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[t?z&&(G||q)&&(0,V.jsx)(`h3`,{style:{...it,margin:0},children:`External apps`}):(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`h3`,{style:{...it,margin:0},children:`External apps`}),(0,V.jsx)(ae,{checked:z,onChange:e=>Xe(e.target.checked),"aria-label":`Toggle external app notifications`})]}),z&&(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ds-line-height-base)`},children:(t?Y:[`cliq`,`slack`]).map(e=>e===`cliq`?(!t||G)&&(0,V.jsx)(R,{label:t?`Notify via Zoho Cliq`:`Notify Via`,align:`center`,children:(0,V.jsxs)(`div`,{className:t?`usage-external-app-row`:void 0,style:{display:`flex`,alignItems:`center`,gap:t?`var(--ds-space-6, 6px)`:12},children:[!t&&(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,V.jsx)(y,{label:`Zoho Cliq`,checked:G,onChange:e=>K(e.target.checked)})}),(0,V.jsx)(`div`,{style:{flex:t?1:void 0,minWidth:0,opacity:+!!G,pointerEvents:G?`auto`:`none`},children:(0,V.jsxs)(`div`,{className:`usage-recipient-field usage-cliq-field${kt.length>0||jt.length>0?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Zoho Cliq recipients`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&Ut()},children:[kt.length===0&&jt.length===0&&(0,V.jsx)(f,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:Ut,children:`Select Recipients`}),[{label:`Users`,recipients:kt},{label:`Channels`,recipients:jt}].map(({label:e,recipients:t})=>t.length>0&&(0,V.jsx)(p,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[e,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${e}: ${t.length}. Edit Zoho Cliq recipients`,onClick:Ut,children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:e}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)),(kt.length>0||jt.length>0)&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit Zoho Cliq recipients`,"aria-haspopup":`dialog`,onClick:Ut,children:(0,V.jsx)(_,{name:`CrmEditFilledMd`,size:13})})]})}),t&&(0,V.jsx)(`button`,{type:`button`,className:`usage-external-app-remove`,"aria-label":`Remove Zoho Cliq`,onClick:()=>Z(`cliq`),children:(0,V.jsx)(_,{name:`CrmMinusRounded`,size:16})})]})},e):(!t||q)&&(0,V.jsx)(R,{label:t?`Notify via Slack`:``,children:(0,V.jsxs)(`div`,{className:`usage-slack-row${t?` usage-external-app-row`:``}`,style:{display:`flex`,alignItems:`center`,gap:t?`var(--ds-space-6, 6px)`:12},children:[!t&&(0,V.jsx)(y,{label:`Slack`,checked:q,onChange:e=>J(e.target.checked)}),q&&(0,V.jsxs)(`div`,{className:`usage-recipient-field usage-cliq-field${Pt.length||It.length?` usage-recipient-editable`:``}`,role:`group`,"aria-label":`Slack recipients`,onClick:e=>{(!(e.target instanceof Element)||!e.target.closest(`button`))&&Ht(`Slack`)},children:[!Pt.length&&!It.length&&(0,V.jsx)(f,{variant:`default`,size:`sm`,"aria-haspopup":`dialog`,onClick:()=>Ht(`Slack`),children:`Select Recipients`}),[{label:`Users`,recipients:Pt},{label:`Channels`,recipients:It}].map(({label:e,recipients:t})=>t.length>0&&(0,V.jsx)(p,{variant:`white`,placement:`top`,maxWidth:320,content:(0,V.jsxs)(`span`,{className:`usage-recipient-preview`,children:[(0,V.jsxs)(`strong`,{children:[e,` (`,t.length,`)`]}),t.map(e=>(0,V.jsx)(`span`,{children:e.label},e.value))]}),children:(0,V.jsxs)(`button`,{type:`button`,className:`tags-tag usage-recipient-count`,"aria-haspopup":`dialog`,"aria-label":`${e}: ${t.length}. Edit Slack recipients`,onClick:()=>Ht(`Slack`),children:[(0,V.jsx)(`span`,{className:`tags-tag-label`,children:e}),(0,V.jsx)(`span`,{className:`tags-tag-count`,children:t.length})]})},e)),(Pt.length>0||It.length>0)&&(0,V.jsx)(`button`,{type:`button`,className:`usage-cliq-edit`,"aria-label":`Edit Slack recipients`,"aria-haspopup":`dialog`,onClick:()=>Ht(`Slack`),children:(0,V.jsx)(_,{name:`CrmEditFilledMd`,size:13})})]}),t&&(0,V.jsx)(`button`,{type:`button`,className:`usage-external-app-remove`,"aria-label":`Remove Slack`,onClick:()=>Z(`slack`),children:(0,V.jsx)(_,{name:`CrmMinusRounded`,size:16})})]})},e))}),t&&!(z&&G&&q)&&(0,V.jsx)(`div`,{style:{alignSelf:`flex-start`,marginBlock:-6},children:(0,V.jsx)(h,{width:190,triggerButtonVariant:`ghost-blue`,triggerAriaLabel:`Add External Apps`,placeholder:`Add External Apps`,panelStyle:{"--dropdown-option-padding-left":`10px`},value:``,showSelectionIndicator:!1,options:[...!z||!G?[{value:`cliq`,label:`Zoho Cliq`}]:[],...!z||!q?[{value:`slack`,label:`Slack`}]:[]],onChange:e=>{X(t=>z?t.includes(e)?t:[...t,e]:[e]),z?e===`cliq`?K(!0):J(!0):(K(e===`cliq`),J(e===`slack`)),Xe(!0)}})})]})]}),Kt&&(0,V.jsx)(R,{label:`Notification message`,align:`start`,labelOffset:7,labelInfo:`Applicable for both push notifications and external apps`,children:(0,V.jsx)(ce,{"aria-label":`Notification message`,layout:`vertical`,variant:`multiline`,width:390,defaultValue:pt,mergeFields:qe,hint:`Type # to insert merge field`,onChange:e=>ft({criteriaKey:ut,value:e})},ut)})]})}),le&&(0,V.jsx)(se,{type:`alert`,variant:`error`,isOpen:!0,title:`Delete "${le.name}"`,width:460,confirmLabel:`Delete`,cancelLabel:`Cancel`,onClose:()=>de(void 0),onCancel:()=>de(void 0),onSave:()=>{le.system||(g(e=>e.filter(e=>e.id!==le.id)),he(`${le.name} deleted successfully.`)),de(void 0)}}),He&&(0,V.jsx)(ke,{value:F,onClose:()=>I(!1),onSave:e=>{Ve(e),I(!1)}}),mt&&(0,V.jsx)(De,{kind:`email`,title:mt===`preview`?`Usage Notification Email Preview`:`Edit Email Content`,readOnly:mt===`preview`,initial:gt,defaults:vt,onClose:()=>ht(void 0),onSave:e=>{_t(e),ht(void 0)}})]})}},X={name:`V2`,args:{externalAppsVariant:`dropdown`},render:Y.render,play:async({canvasElement:e})=>{if(!navigator.webdriver&&!new URLSearchParams(window.location.search).has(`playModal`))return;let t=G(e.ownerDocument.body);await U.click(t.getByRole(`button`,{name:`Create Notification`,exact:!0}));let n=`Applicable for both push notifications and external apps`,i=t.getByRole(`img`,{name:n});await W(()=>H(i).toBeVisible()),await H(i.getBoundingClientRect().width).toBe(14),await H(i.getBoundingClientRect().height).toBe(14);let a=t.getByText(`Notification message`,{exact:!0}).getBoundingClientRect(),o=i.getBoundingClientRect();await H(Math.abs(o.top+o.height/2-(a.top+a.height/2))).toBeLessThanOrEqual(1),await H(getComputedStyle(i).color).toBe(getComputedStyle(t.getByText(`Notification message`,{exact:!0})).color),await H(getComputedStyle(i.querySelector(`circle`)).fill).toBe(getComputedStyle(i).color),await U.hover(i),await H(t.getByRole(`tooltip`)).toHaveTextContent(n),await H(t.getByRole(`tooltip`)).toHaveClass(`tooltip-white`),await U.unhover(i),await H(t.queryByRole(`tooltip`)).not.toBeInTheDocument(),await H(t.queryByRole(`switch`,{name:`Toggle external app notifications`})).not.toBeInTheDocument(),await H(t.queryByRole(`checkbox`,{name:`Zoho Cliq`,exact:!0})).not.toBeInTheDocument();let s=t.getByRole(`button`,{name:`Add External Apps`,exact:!0});await H(s).toHaveAttribute(`data-variant`,`ghost-blue`),await U.click(s),await H(t.getByRole(`option`,{name:`Slack`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`option`,{name:`Zoho Cliq`,exact:!0})),await H(t.queryByRole(`checkbox`,{name:`Zoho Cliq`,exact:!0})).not.toBeInTheDocument(),await H(t.getByText(`Notify via Zoho Cliq`,{exact:!0})).toBeVisible(),await H(t.getByRole(`button`,{name:`Remove Zoho Cliq`,exact:!0})).toBeVisible(),await H(t.queryByRole(`checkbox`,{name:`Slack`,exact:!0})).not.toBeInTheDocument();let c=G(t.getByRole(`group`,{name:`Zoho Cliq recipients`}));await U.click(c.getByRole(`button`,{name:`Select Recipients`})),await W(()=>H(t.getByText(`Zoho Cliq Notification`,{exact:!0})).toBeVisible()),await H(t.getByPlaceholderText(`Select recipients`).closest(`.tags-container`).getBoundingClientRect().width).toBe(390),await U.click(t.getByRole(`checkbox`,{name:`Notify in Channels`})),await H(t.getByPlaceholderText(`Select channels`).closest(`.tags-container`).getBoundingClientRect().width).toBe(390),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(t.queryByText(`Zoho Cliq Notification`,{exact:!0})).not.toBeInTheDocument());let l=t.getByRole(`heading`,{name:`External apps`,exact:!0});await H(l).toBeVisible();let ee=t.getByRole(`button`,{name:`Add External Apps`,exact:!0});await H(c.getByRole(`button`,{name:`Select Recipients`}).getBoundingClientRect().bottom).toBeLessThanOrEqual(ee.getBoundingClientRect().top),await H(Math.abs(l.getBoundingClientRect().left-ee.getBoundingClientRect().left)).toBeLessThanOrEqual(1),await U.click(ee),await H(t.queryByRole(`option`,{name:`Zoho Cliq`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`option`,{name:`Slack`,exact:!0})),await H(t.queryByRole(`checkbox`,{name:`Slack`,exact:!0})).not.toBeInTheDocument(),await H(t.getByText(`Notify via Slack`,{exact:!0})).toBeVisible(),await H(t.getByRole(`group`,{name:`Slack recipients`})).toBeVisible(),await U.click(G(t.getByRole(`group`,{name:`Slack recipients`})).getByRole(`button`,{name:`Select Recipients`}));let u=await t.findByRole(`button`,{name:`Slack team`});await H(u).toHaveTextContent(`Select`);let d=u.closest(`.dropdown-form-row`),f=d.querySelector(`.dropdown-label`);await H(getComputedStyle(f).textAlign).toBe(`right`),await H(getComputedStyle(d).columnGap).toBe(`20px`),await H(u.getBoundingClientRect().left-f.getBoundingClientRect().right).toBeCloseTo(20,0),await H(f.getBoundingClientRect().width).toBeLessThan(60),await H(u.getBoundingClientRect().height).toBe(34),await H(u.getBoundingClientRect().width).toBe(390),await H(t.queryByRole(`checkbox`,{name:`Notify to users`})).not.toBeInTheDocument(),await H(t.queryByRole(`checkbox`,{name:`Notify in Channels`})).not.toBeInTheDocument(),await H(t.queryByPlaceholderText(`Select recipients`)).not.toBeInTheDocument(),await H(t.queryByText(`Select a team first to choose recipients.`)).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Slack team`})),await H(t.getByRole(`button`,{name:`Authorise another team`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`option`,{name:`scranton store`,exact:!0})),await H(t.getByRole(`checkbox`,{name:`Notify to users`})).toBeEnabled(),await H(t.getByRole(`checkbox`,{name:`Notify in Channels`})).toBeEnabled(),await H(t.getByPlaceholderText(`Select recipients`)).toBeVisible();let te=t.getByPlaceholderText(`Select recipients`).closest(`.tags-container`);await H(te.getBoundingClientRect().width).toBe(390),await H(te.getBoundingClientRect().left).toBe(u.getBoundingClientRect().left),await U.click(t.getByRole(`checkbox`,{name:`Notify in Channels`})),await H(t.getByPlaceholderText(`Select channels`).closest(`.tags-container`).getBoundingClientRect().width).toBe(390),await U.click(t.getAllByRole(`button`,{name:`Cancel`,exact:!0}).at(-1)),await W(()=>H(t.queryByText(`Slack Notification`,{exact:!0})).not.toBeInTheDocument()),await H(G(l.parentElement).getAllByRole(`group`).map(e=>e.getAttribute(`aria-label`))).toEqual([`Zoho Cliq recipients`,`Slack recipients`]),await H(t.queryByRole(`button`,{name:`Add External Apps`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Remove Zoho Cliq`,exact:!0})),await H(t.queryByRole(`group`,{name:`Zoho Cliq recipients`})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Add External Apps`,exact:!0})),await H(t.queryByRole(`option`,{name:`Slack`,exact:!0})).not.toBeInTheDocument(),await U.click(t.getByRole(`option`,{name:`Zoho Cliq`,exact:!0})),await H(t.getByRole(`group`,{name:`Zoho Cliq recipients`})).toBeVisible();let p=l.parentElement;await H(G(p).getAllByRole(`group`).map(e=>e.getAttribute(`aria-label`))).toEqual([`Slack recipients`,`Zoho Cliq recipients`]);let m=t.getByRole(`heading`,{name:`Push Notification / Email`,level:3,exact:!0});await H(l.tagName).toBe(m.tagName);let h=m.parentElement.parentElement;await H(getComputedStyle(p).rowGap).toBe(getComputedStyle(h).rowGap),await H(getComputedStyle(l).marginBottom).toBe(`0px`);let g=t.getByRole(`button`,{name:`Remove Slack`,exact:!0}),_=t.getByRole(`group`,{name:`Slack recipients`});await H(g.getBoundingClientRect().left-_.getBoundingClientRect().right).toBeCloseTo(6,0);let v=t.getByRole(`group`,{name:`Zoho Cliq recipients`});await H(v.getBoundingClientRect().top-_.getBoundingClientRect().bottom).toBeCloseTo(20,0);let y=t.getByText(`Type # to insert merge field`,{exact:!0}),ne=getComputedStyle(t.getByText(`Notify via Zoho Cliq`,{exact:!0})).color;await H(getComputedStyle(y).color).toBe(ne),await H(t.getByRole(`button`,{name:`Remove Zoho Cliq`}).getBoundingClientRect().left-v.getBoundingClientRect().right).toBeCloseTo(6,0),await U.click(g),await H(t.queryByRole(`group`,{name:`Slack recipients`})).not.toBeInTheDocument(),await U.click(t.getByRole(`button`,{name:`Remove Zoho Cliq`,exact:!0})),await H(t.queryByRole(`heading`,{name:`External apps`,exact:!0})).not.toBeInTheDocument(),await H(t.getByRole(`button`,{name:`Add External Apps`,exact:!0})).toBeVisible(),await U.click(t.getByRole(`button`,{name:`Cancel`,exact:!0}));let b=e.querySelector(`.usage-page__workspace > .tabs-tab-bar`);await H(G(b).getAllByRole(`tab`).map(e=>e.textContent)).toEqual([`Admin tool`,`Usage Limits`]);let x=t.getByRole(`button`,{name:`Reached add-on limit 60%`,exact:!0}),{page:re}=await r(async()=>{let{page:e}=await import(`./context-DgrVKaNM.js`);return{page:e}},__vite__mapDeps([0,1])),ie=x.parentElement.querySelector(`.tooltip-wrapper`);await re.elementLocator(b).hover(),await H(ie).not.toBeVisible(),await re.elementLocator(x).hover(),await H(ie).toBeVisible(),await U.hover(x),await H(t.queryByRole(`tooltip`)).not.toBeInTheDocument(),x.focus(),await H(t.queryByRole(`tooltip`)).not.toBeInTheDocument();let ae=x.parentElement.querySelector(`.usage-page__summary-info`),S=ae.getBoundingClientRect(),oe=x.getBoundingClientRect();await H(S.width).toBe(16),await H(S.height).toBe(16),await H(Math.abs(S.top+S.height/2-oe.top-oe.height/2)).toBeLessThanOrEqual(1),await H(ae.querySelector(`circle`)).toHaveAttribute(`stroke`,`currentColor`),await H(ae).toHaveAttribute(`fill`,`none`),await U.hover(ae),await H(await t.findByRole(`tooltip`)).toHaveTextContent(`60`),await U.unhover(ae),await W(()=>H(t.queryByRole(`tooltip`)).not.toBeInTheDocument());let C=x.closest(`tr`),se=G(C).getByRole(`button`,{name:`More options for Reached add-on limit 60%`});await U.hover(C),await U.click(se),await U.click(t.getByRole(`option`,{name:`Pause`,exact:!0})),await H(t.getByText(`Reached add-on limit 60% paused successfully.`)).toBeVisible(),await H(G(C).getByText(`Paused`,{exact:!0})).toHaveAttribute(`data-status`,`Paused`),await U.click(se),await U.click(t.getByRole(`option`,{name:`Resume`,exact:!0})),await H(t.getByText(`Reached add-on limit 60% resumed successfully.`)).toBeVisible(),await H(G(C).getByText(`Active`,{exact:!0})).toHaveAttribute(`data-status`,`Active`),await U.click(se),await U.click(t.getByRole(`option`,{name:`Clone`,exact:!0})),await U.click(t.getByRole(`button`,{name:`Save`,exact:!0}));let w=t.getByRole(`button`,{name:`Reached add-on limit 60%_Cloned`,exact:!0}),ce=w.closest(`tr`);await H(ce).toBe(e.querySelector(`.table-report tbody tr:not(.table-report-group)`));let T=w.closest(`td`);await H(getComputedStyle(T).backgroundColor).toBe(`rgb(253, 250, 222)`);let E=T.getAnimations()[0];await H(E).toBeDefined(),await H(E.effect.getTiming().duration).toBe(4e3),E.currentTime=3e3,await H(getComputedStyle(T).backgroundColor).not.toBe(`rgb(253, 250, 222)`),await H(getComputedStyle(T).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),await W(()=>H(ce.querySelector(`[data-new-notification]`)).toBeNull(),{timeout:6e3}),await H(getComputedStyle(T).backgroundColor).toBe(`rgba(0, 0, 0, 0)`)}},Z={args:{externalAppsVariant:`dropdown`,listState:`initial`},render:Y.render,play:async({canvasElement:e})=>{if(!navigator.webdriver&&!new URLSearchParams(window.location.search).has(`playModal`))return;let t=G(e),n=t.getByRole(`button`,{name:`System Defined, 47 notifications`});await H(n).toBeVisible(),await H(t.queryByRole(`button`,{name:/User Defined, /})).not.toBeInTheDocument(),await H(n.querySelector(`.usage-page__group-count`)).toHaveTextContent(`47`),await H(getComputedStyle(n.querySelector(`.usage-page__group-count`)).fontSize).toBe(`12px`),await H(getComputedStyle(n.closest(`td`)).borderBottomWidth).toBe(`0px`),await H(n).toHaveAttribute(`aria-expanded`,`false`),await H(t.queryByRole(`button`,{name:`API usage reached 60%`,exact:!0})).not.toBeInTheDocument(),await U.click(n),await W(()=>H(t.getByRole(`button`,{name:`API usage reached 60%`,exact:!0})).toBeVisible()),await U.click(n),await W(()=>H(t.getByText(`API usage reached 60%`,{exact:!0})).not.toBeVisible())}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'V1',
  play: async ({
    canvasElement
  }) => {
    // Only auto-open the modal for the test runner or when ?playModal is in the URL,
    // so the story page loads without the modal for normal viewing.
    const shouldPlay = navigator.webdriver || new URLSearchParams(window.location.search).has('playModal');
    if (!shouldPlay) return;
    const page = within(canvasElement.ownerDocument.body);
    const userCount = USAGE_LIST_ROWS.filter(row => !row.system).length;
    const systemCount = USAGE_LIST_ROWS.filter(row => row.system).length;
    const userGroup = page.getByRole('button', {
      name: \`User Defined, \${userCount} notifications\`
    });
    const systemGroup = page.getByRole('button', {
      name: \`System Defined, \${systemCount} notifications\`
    });
    await expect(userGroup).toHaveAttribute('aria-expanded', 'true');
    await expect(systemGroup).toHaveAttribute('aria-expanded', 'true');
    await expect(userGroup.querySelector('.usage-page__group-count')).toHaveTextContent(String(userCount));
    const countBounds = userGroup.querySelector('.usage-page__group-count')!.getBoundingClientRect();
    await expect(countBounds.width).toBeGreaterThan(countBounds.height);
    await userEvent.click(userGroup);
    await expect(userGroup).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(page.getByText('Slow webhook responses', {
      exact: true
    })).not.toBeVisible());
    await expect(page.getByRole('button', {
      name: 'Storage above 85%',
      exact: true
    })).toBeVisible();
    userGroup.focus();
    await userEvent.keyboard('{Enter}');
    await expect(userGroup).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(systemGroup);
    await waitFor(() => expect(page.getByText('Storage above 85%', {
      exact: true
    })).not.toBeVisible());
    await expect(page.getByRole('button', {
      name: 'Slow webhook responses',
      exact: true
    })).toBeVisible();
    await userEvent.click(systemGroup);
    const listSearch = page.getByRole('searchbox', {
      name: 'Search notifications'
    });
    await userEvent.type(listSearch, 'Slow webhook responses');
    await expect(page.getByRole('button', {
      name: 'User Defined, 1 notifications'
    })).toBeVisible();
    await expect(page.queryByRole('button', {
      name: /System Defined, /
    })).not.toBeInTheDocument();
    await userEvent.clear(listSearch);
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
    await expect(await page.findByPlaceholderText('Select recipients')).toBeVisible();
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
    await expect(page.queryByRole('checkbox', {
      name: 'Notify to users'
    })).not.toBeInTheDocument();
    await expect(page.queryByRole('checkbox', {
      name: 'Notify in Channels'
    })).not.toBeInTheDocument();
    await expect(page.queryByPlaceholderText('Select recipients')).not.toBeInTheDocument();
    await expect(page.queryByText('Select a team first to choose recipients.')).not.toBeInTheDocument();
    await expect(page.getByRole('button', {
      name: 'Slack team'
    })).toHaveTextContent('Select');
    const appModal = page.getByText('Slack Notification', {
      exact: true
    }).closest('.modal-dialog') as HTMLElement;
    await expect(appModal.style.width).toBe('fit-content');
    await expect(appModal.querySelector('.usage-app-recipients')).toBeNull();
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
    await expect(page.queryByText('Select a team first to choose recipients.')).not.toBeInTheDocument();
    await expect(page.getByRole('checkbox', {
      name: 'Notify to users'
    })).toBeEnabled();
    await expect(getComputedStyle(appModal.querySelector('.usage-app-recipients')!).gap).toBe('28px');
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
  render: args => {
    const addExternalAppsVariant = args.externalAppsVariant === 'dropdown';
    const [open, setOpen] = useState(false);
    const [sidebarId, setSidebarId] = useState('admin-tools');
    const [featureFilter, setFeatureFilter] = useState('all');
    const [pageTab, setPageTab] = useState('usage');
    const [sectionTab, setSectionTab] = useState('notifications');
    const [savedRows, setSavedRows] = useState<UsageListRow[]>(() => (args.listState === 'initial' ? INITIAL_USAGE_LIST_ROWS : addExternalAppsVariant ? V2_USAGE_LIST_ROWS : USAGE_LIST_ROWS).map(row => {
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
    const [collapsedGroups, setCollapsedGroups] = useState<string[]>(() => args.listState === 'initial' ? ['system'] : []);
    const [statusFilter, setStatusFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [editingId, setEditingId] = useState<string>();
    const isSystemDefined = !!savedRows.find(row => row.id === editingId)?.system;
    const [pendingDelete, setPendingDelete] = useState<UsageListRow>();
    const [successMessage, setSuccessMessage] = useState<string>();
    const [newNotificationId, setNewNotificationId] = useState<string>();
    useEffect(() => {
      if (!successMessage) return;
      const timeout = window.setTimeout(() => setSuccessMessage(undefined), 4000);
      return () => window.clearTimeout(timeout);
    }, [successMessage]);
    useEffect(() => {
      if (!newNotificationId) return;
      const timeout = window.setTimeout(() => {
        setSavedRows(current => current.map(row => row.id === newNotificationId ? {
          ...row,
          newlyAdded: false
        } : row));
        setNewNotificationId(undefined);
      }, 4000);
      return () => window.clearTimeout(timeout);
    }, [newNotificationId]);
    const visibleRows = savedRows.filter(row => (featureFilter === 'all' || row.feature === featureFilter) && (statusFilter === 'all' || row.status === statusFilter) && \`\${row.name} \${row.feature}\`.toLowerCase().includes(search.trim().toLowerCase()));
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
    const [externalAppOrder, setExternalAppOrder] = useState<string[]>([]);
    const removeExternalApp = (app: string) => {
      setExternalAppOrder(current => current.filter(value => value !== app));
      if (app === 'cliq') setNotifyZohoCliq(false);else setNotifySlack(false);
    };

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
      if (row?.system && !clone) return;
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
      setNotifyZohoCliq(config?.notifyZohoCliq ?? (row ? !!row.channels?.includes('Zoho Cliq') : !addExternalAppsVariant));
      setNotifySlack(config?.notifySlack ?? !!row?.channels?.includes('Slack'));
      setExternalAppOrder(config?.externalAppOrder ?? (row?.channels ?? []).filter(channel => channel === 'Zoho Cliq' || channel === 'Slack').map(channel => channel === 'Zoho Cliq' ? 'cliq' : 'slack'));
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
      } else if (!row.system && row.status !== 'Completed') {
        setSavedRows(current => current.map(item => item.id === row.id && !item.system ? {
          ...item,
          status: action === 'pause' ? 'Paused' : 'Active'
        } : item));
        setSuccessMessage(\`\${row.name} \${action === 'pause' ? 'paused' : 'resumed'} successfully.\`);
      }
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
          .usage-notification-label-info {
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
            gap: calc(var(--ds-font-size-sm) / 3);
          }
          .usage-notification-message-info {
            display: block;
            color: var(--ds-text-label);
          }
          .usage-notification-message-info > circle:first-child,
          .usage-notification-measure-info > circle:first-child {
            fill: currentColor;
          }
          .dropdown-option:hover .usage-notification-measure-info {
            visibility: visible;
          }
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        \`}</style>

        {successMessage && <MessageBox variant="success" className="usage-page__success-alert" message={successMessage} onClose={() => setSuccessMessage(undefined)} />}

        <div className="usage-page">
          <aside className="usage-page__sidebar" aria-label="Setup navigation">
            <VerticalTabs variant="setup" searchable width="100%" items={SETUP_MENU_ITEMS} activeId={sidebarId} onSelect={setSidebarId} />
          </aside>
          <header className="usage-page__topband"><NextGenTopBand moduleLabel={null} showTerritory={false} /></header>
          <main className="usage-page__workspace" aria-label="Usage limit notifications">
            <Tabs tabs={[{
            id: 'admin',
            label: 'Admin tool'
          }, {
            id: 'usage',
            label: 'Usage Limits'
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
                  <SetupTable variant="report" width="100%" columns={columns} rows={visibleRows} emptyMessage="No notifications found" groups={[{
                  id: 'user',
                  label: 'User Defined',
                  system: false
                }, {
                  id: 'system',
                  label: 'System Defined',
                  system: true
                }].map(group => {
                  const rows = visibleRows.filter(row => !!row.system === group.system);
                  const collapsed = collapsedGroups.includes(group.id);
                  return {
                    id: group.id,
                    rows,
                    collapsed,
                    header: <button type="button" className="usage-page__group" aria-expanded={!collapsed} aria-label={\`\${group.label}, \${rows.length} notifications\`} onClick={() => setCollapsedGroups(current => collapsed ? current.filter(id => id !== group.id) : [...current, group.id])}>
                          <ChevronDownFilled aria-hidden="true" className="usage-page__group-chevron" />
                          <span>{group.label}</span>
                          <span className="usage-page__group-count" aria-hidden="true">{rows.length}</span>
                        </button>
                  };
                }).filter(group => group.rows.length > 0)} />
                </div>
              </section> : <section className="usage-page__content"><h1>Usage Limits</h1><p>Configure usage alerts in the Notification Configurator tab.</p></section>}
            </> : <section className="usage-page__content"><h1>Admin tool</h1><p>Select Usage Limits to manage usage notifications.</p></section>}
          </main>
        </div>

        <SortingHat variations={[{
        label: 'Default',
        storyId: 'work-items-usage-limit-notification--add-external-apps'
      }, {
        label: 'Initial State',
        storyId: 'work-items-usage-limit-notification--initial-state'
      }]} />

        {/* ── Zoho Cliq Notification sub-modal ─────────────────────────── */}
        <Modal isOpen={zohoOpen} title={\`\${recipientApp} Notification\`} onClose={handleZohoCancel} onCancel={handleZohoCancel} onSave={handleZohoDone} cancelLabel="Cancel" saveLabel="Done" width="fit-content" className="usage-app-modal">
          <div className="usage-app-modal__content">
            {recipientApp === 'Slack' && <Dropdown label="Team" placeholder="Select" width="100%" triggerAriaLabel="Slack team" value={slackDraftTeam} options={slackTeams} onChange={(team: string) => {
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
            {(recipientApp !== 'Slack' || slackDraftTeam) && <fieldset className="usage-app-recipients">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10
            }}>
              <Checkbox label="Notify to users" disabled={recipientApp === 'Slack' && !slackDraftTeam} checked={zohoNotifyUsers} onChange={e => setZohoNotifyUsers(e.target.checked)} />
              {zohoNotifyUsers && <Tags value={zohoDraftUsers} options={ZOHO_USER_OPTIONS} onChange={setZohoDraftUsers} placeholder="Select recipients" disabled={recipientApp === 'Slack' && !slackDraftTeam} width="100%" />}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10
            }}>
              <Checkbox label="Notify in Channels" disabled={recipientApp === 'Slack' && !slackDraftTeam} checked={zohoNotifyChannels} onChange={e => setZohoNotifyChannels(e.target.checked)} />
              {zohoNotifyChannels && <Tags value={zohoDraftChannels} options={ZOHO_CHANNEL_OPTIONS} onChange={setZohoDraftChannels} placeholder="Select channels" disabled={recipientApp === 'Slack' && !slackDraftTeam} width="100%" />}
            </div>
            </fieldset>}
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
            externalAppOrder,
            users: zohoCommittedUsers,
            channels: zohoCommittedChannels,
            slackUsers: slackCommittedUsers,
            slackChannels: slackCommittedChannels,
            slackTeam: slackCommittedTeam,
            message,
            template: emailTemplate
          }
        };
        setSavedRows(current => editingId ? current.map(row => row.id === editingId ? saved : row) : [{
          ...saved,
          newlyAdded: true
        }, ...current.map(row => ({
          ...row,
          newlyAdded: false
        }))]);
        if (!editingId) setNewNotificationId(saved.id);
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
                <h3 style={{
                  ...subHeadingStyle,
                  margin: 0
                }}>Push Notification / Email</h3>
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
              {addExternalAppsVariant ? externalAppsEnabled && (notifyZohoCliq || notifySlack) && <h3 style={{
                ...subHeadingStyle,
                margin: 0
              }}>External apps</h3> : <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <h3 style={{
                  ...subHeadingStyle,
                  margin: 0
                }}>External apps</h3>
                <Switch checked={externalAppsEnabled} onChange={e => setExternalAppsEnabled(e.target.checked)} aria-label="Toggle external app notifications" />
              </div>}

              {externalAppsEnabled && <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--ds-line-height-base)'
              }}>
                  {(addExternalAppsVariant ? externalAppOrder : ['cliq', 'slack']).map(app => app === 'cliq' ? (!addExternalAppsVariant || notifyZohoCliq) && <FormRow key={app} label={addExternalAppsVariant ? 'Notify via Zoho Cliq' : 'Notify Via'} align="center">
                    <div className={addExternalAppsVariant ? 'usage-external-app-row' : undefined} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: addExternalAppsVariant ? 'var(--ds-space-6, 6px)' : 12
                  }}>
                      {/* Keep the checkbox in the original variant only. */}
                      {!addExternalAppsVariant && <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                        <Checkbox label="Zoho Cliq" checked={notifyZohoCliq} onChange={e => setNotifyZohoCliq(e.target.checked)} />
                      </div>}
                      <div style={{
                      flex: addExternalAppsVariant ? 1 : undefined,
                      minWidth: 0,
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
                      {addExternalAppsVariant && <button type="button" className="usage-external-app-remove" aria-label="Remove Zoho Cliq" onClick={() => removeExternalApp('cliq')}>
                        <Icon name="CrmMinusRounded" size={16} />
                      </button>}
                    </div>
                  </FormRow> : (!addExternalAppsVariant || notifySlack) && <FormRow key={app} label={addExternalAppsVariant ? 'Notify via Slack' : ''}>
                    <div className={\`usage-slack-row\${addExternalAppsVariant ? ' usage-external-app-row' : ''}\`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: addExternalAppsVariant ? 'var(--ds-space-6, 6px)' : 12
                  }}>
                    {!addExternalAppsVariant && <Checkbox label="Slack" checked={notifySlack} onChange={e => setNotifySlack(e.target.checked)} />}
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
                    {addExternalAppsVariant && <button type="button" className="usage-external-app-remove" aria-label="Remove Slack" onClick={() => removeExternalApp('slack')}>
                      <Icon name="CrmMinusRounded" size={16} />
                    </button>}
                    </div>
                  </FormRow>)}
                </div>}

              {addExternalAppsVariant && !(externalAppsEnabled && notifyZohoCliq && notifySlack) && <div style={{
                alignSelf: 'flex-start',
                marginBlock: -6
              }}>
                  <Dropdown width={190} triggerButtonVariant="ghost-blue" triggerAriaLabel="Add External Apps" placeholder="Add External Apps" panelStyle={{
                  '--dropdown-option-padding-left': '10px'
                }} value="" showSelectionIndicator={false} options={[...(!externalAppsEnabled || !notifyZohoCliq ? [{
                  value: 'cliq',
                  label: 'Zoho Cliq'
                }] : []), ...(!externalAppsEnabled || !notifySlack ? [{
                  value: 'slack',
                  label: 'Slack'
                }] : [])]} onChange={(app: string) => {
                  setExternalAppOrder(current => !externalAppsEnabled ? [app] : current.includes(app) ? current : [...current, app]);
                  if (!externalAppsEnabled) {
                    setNotifyZohoCliq(app === 'cliq');
                    setNotifySlack(app === 'slack');
                  } else if (app === 'cliq') setNotifyZohoCliq(true);else setNotifySlack(true);
                  setExternalAppsEnabled(true);
                }} />
                </div>}
            </div>}
          </div>

          {/* ── Message ─────────────────────────────────────────────────── */}
          {showMessage && <FormRow label="Notification message" align="start" labelOffset={7} labelInfo="Applicable for both push notifications and external apps">
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
          setSuccessMessage(\`\${pendingDelete.name} deleted successfully.\`);
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'V2',
  args: {
    externalAppsVariant: 'dropdown'
  },
  render: CreateNotification.render,
  play: async ({
    canvasElement
  }) => {
    if (!navigator.webdriver && !new URLSearchParams(window.location.search).has('playModal')) return;
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', {
      name: 'Create Notification',
      exact: true
    }));
    const messageInfoText = 'Applicable for both push notifications and external apps';
    const messageInfo = page.getByRole('img', {
      name: messageInfoText
    });
    await waitFor(() => expect(messageInfo).toBeVisible());
    await expect(messageInfo.getBoundingClientRect().width).toBe(14);
    await expect(messageInfo.getBoundingClientRect().height).toBe(14);
    const messageLabelRect = page.getByText('Notification message', {
      exact: true
    }).getBoundingClientRect();
    const messageInfoRect = messageInfo.getBoundingClientRect();
    await expect(Math.abs(messageInfoRect.top + messageInfoRect.height / 2 - (messageLabelRect.top + messageLabelRect.height / 2))).toBeLessThanOrEqual(1);
    await expect(getComputedStyle(messageInfo).color).toBe(getComputedStyle(page.getByText('Notification message', {
      exact: true
    })).color);
    await expect(getComputedStyle(messageInfo.querySelector('circle')!).fill).toBe(getComputedStyle(messageInfo).color);
    await userEvent.hover(messageInfo);
    await expect(page.getByRole('tooltip')).toHaveTextContent(messageInfoText);
    await expect(page.getByRole('tooltip')).toHaveClass('tooltip-white');
    await userEvent.unhover(messageInfo);
    await expect(page.queryByRole('tooltip')).not.toBeInTheDocument();
    await expect(page.queryByRole('switch', {
      name: 'Toggle external app notifications'
    })).not.toBeInTheDocument();
    await expect(page.queryByRole('checkbox', {
      name: 'Zoho Cliq',
      exact: true
    })).not.toBeInTheDocument();
    const addApps = page.getByRole('button', {
      name: 'Add External Apps',
      exact: true
    });
    await expect(addApps).toHaveAttribute('data-variant', 'ghost-blue');
    await userEvent.click(addApps);
    await expect(page.getByRole('option', {
      name: 'Slack',
      exact: true
    })).toBeVisible();
    await userEvent.click(page.getByRole('option', {
      name: 'Zoho Cliq',
      exact: true
    }));
    await expect(page.queryByRole('checkbox', {
      name: 'Zoho Cliq',
      exact: true
    })).not.toBeInTheDocument();
    await expect(page.getByText('Notify via Zoho Cliq', {
      exact: true
    })).toBeVisible();
    await expect(page.getByRole('button', {
      name: 'Remove Zoho Cliq',
      exact: true
    })).toBeVisible();
    await expect(page.queryByRole('checkbox', {
      name: 'Slack',
      exact: true
    })).not.toBeInTheDocument();
    const cliq = within(page.getByRole('group', {
      name: 'Zoho Cliq recipients'
    }));
    await userEvent.click(cliq.getByRole('button', {
      name: 'Select Recipients'
    }));
    await waitFor(() => expect(page.getByText('Zoho Cliq Notification', {
      exact: true
    })).toBeVisible());
    await expect(page.getByPlaceholderText('Select recipients').closest('.tags-container')!.getBoundingClientRect().width).toBe(390);
    await userEvent.click(page.getByRole('checkbox', {
      name: 'Notify in Channels'
    }));
    await expect(page.getByPlaceholderText('Select channels').closest('.tags-container')!.getBoundingClientRect().width).toBe(390);
    await userEvent.click(page.getAllByRole('button', {
      name: 'Cancel',
      exact: true
    }).at(-1)!);
    await waitFor(() => expect(page.queryByText('Zoho Cliq Notification', {
      exact: true
    })).not.toBeInTheDocument());
    const heading = page.getByRole('heading', {
      name: 'External apps',
      exact: true
    });
    await expect(heading).toBeVisible();
    const nextAddApps = page.getByRole('button', {
      name: 'Add External Apps',
      exact: true
    });
    await expect(cliq.getByRole('button', {
      name: 'Select Recipients'
    }).getBoundingClientRect().bottom).toBeLessThanOrEqual(nextAddApps.getBoundingClientRect().top);
    await expect(Math.abs(heading.getBoundingClientRect().left - nextAddApps.getBoundingClientRect().left)).toBeLessThanOrEqual(1);
    await userEvent.click(nextAddApps);
    await expect(page.queryByRole('option', {
      name: 'Zoho Cliq',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('option', {
      name: 'Slack',
      exact: true
    }));
    await expect(page.queryByRole('checkbox', {
      name: 'Slack',
      exact: true
    })).not.toBeInTheDocument();
    await expect(page.getByText('Notify via Slack', {
      exact: true
    })).toBeVisible();
    await expect(page.getByRole('group', {
      name: 'Slack recipients'
    })).toBeVisible();
    await userEvent.click(within(page.getByRole('group', {
      name: 'Slack recipients'
    })).getByRole('button', {
      name: 'Select Recipients'
    }));
    const teamDropdown = await page.findByRole('button', {
      name: 'Slack team'
    });
    await expect(teamDropdown).toHaveTextContent('Select');
    const teamRow = teamDropdown.closest('.dropdown-form-row')!;
    const teamLabel = teamRow.querySelector('.dropdown-label')!;
    await expect(getComputedStyle(teamLabel).textAlign).toBe('right');
    await expect(getComputedStyle(teamRow).columnGap).toBe('20px');
    await expect(teamDropdown.getBoundingClientRect().left - teamLabel.getBoundingClientRect().right).toBeCloseTo(20, 0);
    await expect(teamLabel.getBoundingClientRect().width).toBeLessThan(60);
    await expect(teamDropdown.getBoundingClientRect().height).toBe(34);
    await expect(teamDropdown.getBoundingClientRect().width).toBe(390);
    await expect(page.queryByRole('checkbox', {
      name: 'Notify to users'
    })).not.toBeInTheDocument();
    await expect(page.queryByRole('checkbox', {
      name: 'Notify in Channels'
    })).not.toBeInTheDocument();
    await expect(page.queryByPlaceholderText('Select recipients')).not.toBeInTheDocument();
    await expect(page.queryByText('Select a team first to choose recipients.')).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Slack team'
    }));
    await expect(page.getByRole('button', {
      name: 'Authorise another team',
      exact: true
    })).toBeVisible();
    await userEvent.click(page.getByRole('option', {
      name: 'scranton store',
      exact: true
    }));
    await expect(page.getByRole('checkbox', {
      name: 'Notify to users'
    })).toBeEnabled();
    await expect(page.getByRole('checkbox', {
      name: 'Notify in Channels'
    })).toBeEnabled();
    await expect(page.getByPlaceholderText('Select recipients')).toBeVisible();
    const usersField = page.getByPlaceholderText('Select recipients').closest('.tags-container')!;
    await expect(usersField.getBoundingClientRect().width).toBe(390);
    await expect(usersField.getBoundingClientRect().left).toBe(teamDropdown.getBoundingClientRect().left);
    await userEvent.click(page.getByRole('checkbox', {
      name: 'Notify in Channels'
    }));
    await expect(page.getByPlaceholderText('Select channels').closest('.tags-container')!.getBoundingClientRect().width).toBe(390);
    await userEvent.click(page.getAllByRole('button', {
      name: 'Cancel',
      exact: true
    }).at(-1)!);
    await waitFor(() => expect(page.queryByText('Slack Notification', {
      exact: true
    })).not.toBeInTheDocument());
    await expect(within(heading.parentElement!).getAllByRole('group').map(group => group.getAttribute('aria-label'))).toEqual(['Zoho Cliq recipients', 'Slack recipients']);
    await expect(page.queryByRole('button', {
      name: 'Add External Apps',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Remove Zoho Cliq',
      exact: true
    }));
    await expect(page.queryByRole('group', {
      name: 'Zoho Cliq recipients'
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Add External Apps',
      exact: true
    }));
    await expect(page.queryByRole('option', {
      name: 'Slack',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('option', {
      name: 'Zoho Cliq',
      exact: true
    }));
    await expect(page.getByRole('group', {
      name: 'Zoho Cliq recipients'
    })).toBeVisible();
    const externalSection = heading.parentElement!;
    await expect(within(externalSection).getAllByRole('group').map(group => group.getAttribute('aria-label'))).toEqual(['Slack recipients', 'Zoho Cliq recipients']);
    const pushHeading = page.getByRole('heading', {
      name: 'Push Notification / Email',
      level: 3,
      exact: true
    });
    await expect(heading.tagName).toBe(pushHeading.tagName);
    const pushSection = pushHeading.parentElement!.parentElement!;
    await expect(getComputedStyle(externalSection).rowGap).toBe(getComputedStyle(pushSection).rowGap);
    await expect(getComputedStyle(heading).marginBottom).toBe('0px');
    const removeSlack = page.getByRole('button', {
      name: 'Remove Slack',
      exact: true
    });
    const slackField = page.getByRole('group', {
      name: 'Slack recipients'
    });
    await expect(removeSlack.getBoundingClientRect().left - slackField.getBoundingClientRect().right).toBeCloseTo(6, 0);
    const cliqField = page.getByRole('group', {
      name: 'Zoho Cliq recipients'
    });
    await expect(cliqField.getBoundingClientRect().top - slackField.getBoundingClientRect().bottom).toBeCloseTo(20, 0);
    const messageHint = page.getByText('Type # to insert merge field', {
      exact: true
    });
    const labelColor = getComputedStyle(page.getByText('Notify via Zoho Cliq', {
      exact: true
    })).color;
    await expect(getComputedStyle(messageHint).color).toBe(labelColor);
    await expect(page.getByRole('button', {
      name: 'Remove Zoho Cliq'
    }).getBoundingClientRect().left - cliqField.getBoundingClientRect().right).toBeCloseTo(6, 0);
    await userEvent.click(removeSlack);
    await expect(page.queryByRole('group', {
      name: 'Slack recipients'
    })).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Remove Zoho Cliq',
      exact: true
    }));
    await expect(page.queryByRole('heading', {
      name: 'External apps',
      exact: true
    })).not.toBeInTheDocument();
    await expect(page.getByRole('button', {
      name: 'Add External Apps',
      exact: true
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Cancel',
      exact: true
    }));
    const primaryTabs = canvasElement.querySelector('.usage-page__workspace > .tabs-tab-bar')!;
    await expect(within(primaryTabs as HTMLElement).getAllByRole('tab').map(tab => tab.textContent)).toEqual(['Admin tool', 'Usage Limits']);
    const firstName = page.getByRole('button', {
      name: 'Reached add-on limit 60%',
      exact: true
    });
    const {
      page: browserPage
    } = await import('vitest/browser');
    const summaryTrigger = firstName.parentElement!.querySelector('.tooltip-wrapper')!;
    await browserPage.elementLocator(primaryTabs).hover();
    await expect(summaryTrigger).not.toBeVisible();
    await browserPage.elementLocator(firstName).hover();
    await expect(summaryTrigger).toBeVisible();
    await userEvent.hover(firstName);
    await expect(page.queryByRole('tooltip')).not.toBeInTheDocument();
    firstName.focus();
    await expect(page.queryByRole('tooltip')).not.toBeInTheDocument();
    const summaryIcon = firstName.parentElement!.querySelector('.usage-page__summary-info')!;
    const iconBounds = summaryIcon.getBoundingClientRect();
    const nameBounds = firstName.getBoundingClientRect();
    await expect(iconBounds.width).toBe(16);
    await expect(iconBounds.height).toBe(16);
    await expect(Math.abs(iconBounds.top + iconBounds.height / 2 - nameBounds.top - nameBounds.height / 2)).toBeLessThanOrEqual(1);
    await expect(summaryIcon.querySelector('circle')).toHaveAttribute('stroke', 'currentColor');
    await expect(summaryIcon).toHaveAttribute('fill', 'none');
    await userEvent.hover(summaryIcon);
    await expect(await page.findByRole('tooltip')).toHaveTextContent('60');
    await userEvent.unhover(summaryIcon);
    await waitFor(() => expect(page.queryByRole('tooltip')).not.toBeInTheDocument());
    const row = firstName.closest('tr')!;
    const actions = within(row).getByRole('button', {
      name: 'More options for Reached add-on limit 60%'
    });
    await userEvent.hover(row);
    await userEvent.click(actions);
    await userEvent.click(page.getByRole('option', {
      name: 'Pause',
      exact: true
    }));
    await expect(page.getByText('Reached add-on limit 60% paused successfully.')).toBeVisible();
    await expect(within(row).getByText('Paused', {
      exact: true
    })).toHaveAttribute('data-status', 'Paused');
    await userEvent.click(actions);
    await userEvent.click(page.getByRole('option', {
      name: 'Resume',
      exact: true
    }));
    await expect(page.getByText('Reached add-on limit 60% resumed successfully.')).toBeVisible();
    await expect(within(row).getByText('Active', {
      exact: true
    })).toHaveAttribute('data-status', 'Active');
    await userEvent.click(actions);
    await userEvent.click(page.getByRole('option', {
      name: 'Clone',
      exact: true
    }));
    await userEvent.click(page.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    const newName = page.getByRole('button', {
      name: 'Reached add-on limit 60%_Cloned',
      exact: true
    });
    const newRow = newName.closest('tr')!;
    await expect(newRow).toBe(canvasElement.querySelector('.table-report tbody tr:not(.table-report-group)'));
    const newCell = newName.closest('td')!;
    await expect(getComputedStyle(newCell).backgroundColor).toBe('rgb(253, 250, 222)');
    const highlight = newCell.getAnimations()[0];
    await expect(highlight).toBeDefined();
    await expect(highlight.effect!.getTiming().duration).toBe(4000);
    highlight.currentTime = 3000;
    await expect(getComputedStyle(newCell).backgroundColor).not.toBe('rgb(253, 250, 222)');
    await expect(getComputedStyle(newCell).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    await waitFor(() => expect(newRow.querySelector('[data-new-notification]')).toBeNull(), {
      timeout: 6000
    });
    await expect(getComputedStyle(newCell).backgroundColor).toBe('rgba(0, 0, 0, 0)');
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    externalAppsVariant: 'dropdown',
    listState: 'initial'
  },
  render: CreateNotification.render,
  play: async ({
    canvasElement
  }) => {
    if (!navigator.webdriver && !new URLSearchParams(window.location.search).has('playModal')) return;
    const page = within(canvasElement);
    const group = page.getByRole('button', {
      name: 'System Defined, 47 notifications'
    });
    await expect(group).toBeVisible();
    await expect(page.queryByRole('button', {
      name: /User Defined, /
    })).not.toBeInTheDocument();
    await expect(group.querySelector('.usage-page__group-count')).toHaveTextContent('47');
    await expect(getComputedStyle(group.querySelector('.usage-page__group-count')!).fontSize).toBe('12px');
    await expect(getComputedStyle(group.closest('td')!).borderBottomWidth).toBe('0px');
    await expect(group).toHaveAttribute('aria-expanded', 'false');
    await expect(page.queryByRole('button', {
      name: 'API usage reached 60%',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(group);
    await waitFor(() => expect(page.getByRole('button', {
      name: 'API usage reached 60%',
      exact: true
    })).toBeVisible());
    await userEvent.click(group);
    await waitFor(() => expect(page.getByText('API usage reached 60%', {
      exact: true
    })).not.toBeVisible());
  }
}`,...Z.parameters?.docs?.source}}},ut=[`CreateNotification`,`AddExternalApps`,`InitialState`]}))();export{X as AddExternalApps,Y as CreateNotification,Z as InitialState,ut as __namedExportsOrder,K as default};