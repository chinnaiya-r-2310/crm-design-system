import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BPd3g3Yp.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./DualRangeSlider-DeGTeG-t.js";var o=e((()=>{}));function s({value:e=50,min:t=0,max:n=100,step:r=1,disabled:i=!1,showValue:a=!0,suffix:o=``,showTooltip:s=!1,tooltipPosition:c=`above`,marks:l,onChange:u}){let p=(0,f.useRef)(null),[m,h]=(0,f.useState)(!1),g=Math.min(n,Math.max(t,e)),_=(g-t)/(n-t)*100,v=(0,f.useCallback)(e=>{let i=p.current.getBoundingClientRect(),a=t+Math.min(1,Math.max(0,(e-i.left)/i.width))*(n-t);return Math.round(a/r)*r},[t,n,r]),y=(0,f.useCallback)(e=>{if(i)return;e.preventDefault(),h(!0);let t=e=>e.touches?e.touches[0].clientX:e.clientX,n=e=>u?.(v(t(e))),r=()=>{h(!1),document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseup`,r),document.removeEventListener(`touchmove`,n),document.removeEventListener(`touchend`,r)};n(e.nativeEvent??e),document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,r),document.addEventListener(`touchmove`,n,{passive:!0}),document.addEventListener(`touchend`,r)},[i,v,u]),b=e=>{if(i)return;let a=e.key===`ArrowRight`||e.key===`ArrowUp`?r:e.key===`ArrowLeft`||e.key===`ArrowDown`?-r:0;a&&(e.preventDefault(),u?.(Math.min(n,Math.max(t,g+a))))},x=`sld-tooltip sld-tt-${c}${m?` sld-tt-visible`:``}`;return(0,d.jsxs)(`div`,{className:`sld-root${i?` sld-disabled`:``}`,children:[a&&(0,d.jsx)(`div`,{className:`sld-value-row`,children:(0,d.jsxs)(`span`,{className:`sld-value`,children:[g,o]})}),(0,d.jsxs)(`div`,{className:`sld-track-wrap`,ref:p,onMouseDown:y,onTouchStart:y,children:[(0,d.jsx)(`div`,{className:`sld-track-bg`}),(0,d.jsx)(`div`,{className:`sld-track-fill`,style:{width:`${_}%`}}),(0,d.jsx)(`div`,{className:`sld-thumb`,style:{left:`${_}%`},role:`slider`,tabIndex:i?-1:0,"aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":g,"aria-disabled":i||void 0,onKeyDown:b,children:s&&(0,d.jsxs)(`div`,{className:x,children:[g,o]})})]}),l&&l.length>0&&(0,d.jsx)(`div`,{className:`sld-marks-row`,children:l.map((e,r)=>(0,d.jsxs)(`div`,{className:`sld-mark`,style:{left:`${(e.value-t)/(n-t)*100}%`},children:[(0,d.jsx)(`div`,{className:`sld-mark-tick`}),(0,d.jsx)(`span`,{className:`sld-mark-label`,children:e.label})]},r))})]})}function c({values:e=[33,66],min:t=0,max:n=100,step:r=1,disabled:i=!1,colors:a=p,onChange:o}){let s=(0,f.useRef)(null),[c,l]=e,u=(c-t)/(n-t)*100,m=(l-t)/(n-t)*100,h=c-t,g=l-c,_=n-l,v=t===0&&n===100,y=(0,f.useCallback)(e=>{let i=s.current.getBoundingClientRect(),a=t+Math.min(1,Math.max(0,(e-i.left)/i.width))*(n-t);return Math.round(a/r)*r},[t,n,r]),b=(0,f.useCallback)(e=>t=>{if(i)return;t.preventDefault(),t.stopPropagation();let n=t=>{let n=y(t.touches?t.touches[0].clientX:t.clientX);e===0?o?.([Math.min(n,l-r),l]):o?.([c,Math.max(n,c+r)])},a=()=>{document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseup`,a)};n(t.nativeEvent??t),document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,a)},[i,y,o,c,l,r]);return(0,d.jsxs)(`div`,{className:`sld-multi-root${i?` sld-disabled`:``}`,children:[(0,d.jsxs)(`div`,{className:`sld-multi-labels`,children:[(0,d.jsxs)(`span`,{className:`sld-multi-label`,style:{width:`${u}%`},children:[h,v?`%`:``]}),(0,d.jsxs)(`span`,{className:`sld-multi-label`,style:{width:`${m-u}%`},children:[g,v?`%`:``]}),(0,d.jsxs)(`span`,{className:`sld-multi-label`,style:{flex:1},children:[_,v?`%`:``]})]}),(0,d.jsxs)(`div`,{className:`sld-multi-track-wrap`,children:[(0,d.jsxs)(`div`,{className:`sld-multi-track`,ref:s,children:[(0,d.jsx)(`div`,{className:`sld-multi-seg`,style:{width:`${u}%`,background:a[0]}}),(0,d.jsx)(`div`,{className:`sld-multi-sep`}),(0,d.jsx)(`div`,{className:`sld-multi-seg`,style:{width:`${m-u}%`,background:a[1]}}),(0,d.jsx)(`div`,{className:`sld-multi-sep`}),(0,d.jsx)(`div`,{className:`sld-multi-seg sld-multi-seg-last`,style:{background:a[2]}})]}),(0,d.jsx)(`div`,{className:`sld-multi-thumb`,style:{left:`${u}%`},onMouseDown:b(0),role:`slider`,tabIndex:i?-1:0,"aria-valuemin":t,"aria-valuemax":l-r,"aria-valuenow":c}),(0,d.jsx)(`div`,{className:`sld-multi-thumb`,style:{left:`${m}%`},onMouseDown:b(1),role:`slider`,tabIndex:i?-1:0,"aria-valuemin":c+r,"aria-valuemax":n,"aria-valuenow":l})]})]})}function l({value:e=0,disabled:t=!1,onChange:n}){let r=(0,f.useRef)(null),i=Math.min(100,Math.max(0,Math.round(e/10)*10)),a=(0,f.useCallback)(e=>{let t=r.current.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e-t.left)/t.width));return Math.round(n*10)*10},[]),o=(0,f.useCallback)(e=>{if(t)return;e.preventDefault();let r=e=>e.touches?e.touches[0].clientX:e.clientX,i=e=>n?.(a(r(e))),o=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,i),document.removeEventListener(`touchend`,o)};i(e.nativeEvent??e),document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,o),document.addEventListener(`touchmove`,i,{passive:!0}),document.addEventListener(`touchend`,o)},[t,a,n]);return(0,d.jsxs)(`div`,{className:`sld-pct-root${t?` sld-disabled`:``}`,children:[(0,d.jsx)(`div`,{className:`sld-pct-header`,children:(0,d.jsxs)(`span`,{className:`sld-pct-label`,children:[i,`-100%`]})}),(0,d.jsxs)(`div`,{className:`sld-pct-wrap`,ref:r,onMouseDown:o,onTouchStart:o,children:[(0,d.jsx)(`div`,{className:`sld-pct-segs`,children:m.map((e,t)=>(0,d.jsx)(`div`,{className:`sld-pct-seg`,style:{background:t>=i/10?e:`#E5EAF2`}},t))}),(0,d.jsx)(`div`,{className:`sld-pct-thumb`,style:{left:`${i}%`},role:`slider`,tabIndex:t?-1:0,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":i,"aria-disabled":t||void 0,onKeyDown:e=>{if(t)return;let r=e.key===`ArrowRight`||e.key===`ArrowUp`?10:e.key===`ArrowLeft`||e.key===`ArrowDown`?-10:0;r&&(e.preventDefault(),n?.(Math.min(100,Math.max(0,i+r))))}})]})]})}function u({value:e=0,steps:t=[],disabled:n=!1,onChange:r}){if(!t.length)return null;let i=t.length,a=i>1?e/(i-1)*100:0,o=e=>typeof e==`string`?e:e.label;return(0,d.jsxs)(`div`,{className:`sld-step-root${n?` sld-disabled`:``}`,children:[(0,d.jsx)(`div`,{className:`sld-step-label-row`,children:t.map((t,n)=>{let r=i>1?n/(i-1)*100:50;return(0,d.jsx)(`span`,{className:`sld-step-label${n===e?` sld-step-label-active`:``}`,style:{left:`${r}%`},children:o(t)},n)})}),(0,d.jsxs)(`div`,{className:`sld-step-track-wrap`,children:[(0,d.jsx)(`div`,{className:`sld-step-fill`,style:{width:`${a}%`}}),t.map((t,a)=>(0,d.jsx)(`div`,{className:a<e?`sld-step-dot sld-step-dot-passed`:a===e?`sld-step-dot sld-step-dot-active`:`sld-step-dot sld-step-dot-future`,role:`radio`,"aria-checked":a===e,tabIndex:n?-1:0,onClick:()=>!n&&r?.(a),onKeyDown:e=>{n||(e.key===`ArrowRight`&&a<i-1&&(e.preventDefault(),r?.(a+1)),e.key===`ArrowLeft`&&a>0&&(e.preventDefault(),r?.(a-1)),(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r?.(a)))}},a))]})]})}var d,f,p,m,h=e((()=>{d=r(),f=t(n(),1),o(),p=[`#FF6D6D`,`#FAC268`,`#39C995`],m=[`#EDECD1`,`#E1E0A6`,`#CECC84`,`#DAC072`,`#EBB05F`,`#F7A553`,`#FB934E`,`#FB734C`,`#FA624C`,`#F9504C`],s.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{value:{defaultValue:{value:`50`,computed:!1},required:!1},min:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1},step:{defaultValue:{value:`1`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},showValue:{defaultValue:{value:`true`,computed:!1},required:!1},suffix:{defaultValue:{value:`''`,computed:!1},required:!1},showTooltip:{defaultValue:{value:`false`,computed:!1},required:!1},tooltipPosition:{defaultValue:{value:`'above'`,computed:!1},required:!1}}},c.__docgenInfo={description:``,methods:[],displayName:`MultiSlider`,props:{values:{defaultValue:{value:`[33, 66]`,computed:!1},required:!1},min:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1},step:{defaultValue:{value:`1`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},colors:{defaultValue:{value:`['#FF6D6D', '#FAC268', '#39C995']`,computed:!1},required:!1}}},l.__docgenInfo={description:``,methods:[],displayName:`PercentSlider`,props:{value:{defaultValue:{value:`0`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}},u.__docgenInfo={description:``,methods:[],displayName:`StepSlider`,props:{value:{defaultValue:{value:`0`,computed:!1},required:!1},steps:{defaultValue:{value:`[]`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{g=t(n(),1),h(),i(),_=r(),{expect:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Design System/Components/Slider`,parameters:{layout:`padded`,docs:{description:{component:"Slider components. `Slider` — single thumb with optional marks, tooltip on drag, value label. `MultiSlider` — 3-segment distribution with triangle thumbs. `StepSlider` — discrete dot steps with labels. Figma: Chinnaiya-Style-Sheet node 93673-150972."}}}},S={name:`Default`,render:()=>{let[e,t]=(0,g.useState)(50);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(s,{value:e,onChange:t})})}},C={name:`Percentage`,render:()=>{let[e,t]=(0,g.useState)(65);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(s,{value:e,onChange:t,suffix:`%`})})}},w={name:`Without Value Label`,render:()=>{let[e,t]=(0,g.useState)(40);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(s,{value:e,onChange:t,showValue:!1})})}},T={name:`Tooltip on Drag (Above)`,render:()=>{let[e,t]=(0,g.useState)(50);return(0,_.jsx)(`div`,{style:{width:400,paddingTop:32},children:(0,_.jsx)(s,{value:e,onChange:t,showValue:!1,showTooltip:!0,suffix:`%`})})}},E={name:`Tooltip on Drag (Below)`,render:()=>{let[e,t]=(0,g.useState)(50);return(0,_.jsx)(`div`,{style:{width:400,paddingBottom:32},children:(0,_.jsx)(s,{value:e,onChange:t,showValue:!1,showTooltip:!0,tooltipPosition:`below`,suffix:`%`})})}},D={name:`With Marks`,render:()=>{let[e,t]=(0,g.useState)(4e5);return(0,_.jsx)(`div`,{style:{width:420},children:(0,_.jsx)(s,{value:e,min:0,max:1e6,step:5e4,onChange:t,showTooltip:!0,showValue:!1,suffix:``,marks:[{value:0,label:`$0`},{value:2e5,label:`$200k`},{value:4e5,label:`$400k`},{value:6e5,label:`$600k`},{value:8e5,label:`$800k`},{value:1e6,label:`$1M`}]})})}},O={name:`Disabled`,render:()=>(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(s,{value:50,disabled:!0,suffix:`%`})})},k={name:`Multi-segment`,render:()=>{let[e,t]=(0,g.useState)([33,66]);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(c,{values:e,onChange:e=>t(e)})})}},A={name:`Multi-segment (Custom Colors)`,render:()=>{let[e,t]=(0,g.useState)([25,60]);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(c,{values:e,onChange:e=>t(e),colors:[`#5464F2`,`#39C995`,`#FAC268`]})})}},j={name:`Step Slider (Font Size)`,render:()=>{let[e,t]=(0,g.useState)(2);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(u,{value:e,steps:[`Ex Small`,`Small`,`Medium`,`Large`,`Ex Large`],onChange:t})})}},M={name:`Step Slider (Custom Steps)`,render:()=>{let[e,t]=(0,g.useState)(1);return(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(u,{value:e,steps:[`Low`,`Medium`,`High`,`Critical`],onChange:t})})}},N={name:`Step Slider (Disabled)`,render:()=>(0,_.jsx)(`div`,{style:{width:400},children:(0,_.jsx)(u,{value:2,steps:[`Ex Small`,`Small`,`Medium`,`Large`,`Ex Large`],disabled:!0})})},P={name:`Dual Range`,render:()=>{let[e,t]=(0,g.useState)(2),[n,r]=(0,g.useState)(7);return(0,_.jsx)(`div`,{style:{width:`100%`,maxWidth:440,padding:`16px 12px`},children:(0,_.jsx)(a,{valueA:e,valueB:n,onChangeA:t,onChangeB:r})})},play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`slider`,{name:`Visible log history end`}),r=t.getByRole(`slider`,{name:`Archive log end`});await y.click(n),await y.keyboard(`{ArrowRight}`),await v(n).toHaveAttribute(`aria-valuenow`,`3`),await y.keyboard(`{End}`),await v(n).toHaveAttribute(`aria-valuenow`,`6`),await y.keyboard(`{ArrowRight}`),await v(n).toHaveAttribute(`aria-valuenow`,`6`),await y.click(r),await y.keyboard(`{End}`),await v(r).toHaveAttribute(`aria-valuenow`,`10`),await y.keyboard(`{Home}`),await v(r).toHaveAttribute(`aria-valuenow`,`7`)}},F={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>{let[e,t]=(0,g.useState)(50),[n,r]=(0,g.useState)(65),[i,o]=(0,g.useState)(4e5),[d,f]=(0,g.useState)([33,66]),[p,m]=(0,g.useState)(2),[h,v]=(0,g.useState)(0),[y,b]=(0,g.useState)(2),[x,S]=(0,g.useState)(7),C=e=>(0,_.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e});return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,maxWidth:440,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,_.jsxs)(`div`,{children:[C(`Default`),(0,_.jsx)(s,{value:e,onChange:t})]}),(0,_.jsxs)(`div`,{style:{paddingTop:24},children:[C(`Tooltip on drag (above) — no value label`),(0,_.jsx)(s,{value:n,onChange:r,suffix:`%`,showValue:!1,showTooltip:!0})]}),(0,_.jsxs)(`div`,{style:{paddingBottom:24},children:[C(`Tooltip on drag (below)`),(0,_.jsx)(s,{value:n,onChange:r,suffix:`%`,showValue:!1,showTooltip:!0,tooltipPosition:`below`})]}),(0,_.jsxs)(`div`,{children:[C(`With marks`),(0,_.jsx)(s,{value:i,min:0,max:1e6,step:5e4,onChange:o,showTooltip:!0,showValue:!1,marks:[{value:0,label:`$0`},{value:2e5,label:`$200k`},{value:4e5,label:`$400k`},{value:6e5,label:`$600k`},{value:8e5,label:`$800k`},{value:1e6,label:`$1M`}]})]}),(0,_.jsxs)(`div`,{children:[C(`Disabled`),(0,_.jsx)(s,{value:50,disabled:!0,suffix:`%`})]}),(0,_.jsxs)(`div`,{children:[C(`Multi-segment`),(0,_.jsx)(c,{values:d,onChange:e=>f(e)})]}),(0,_.jsxs)(`div`,{children:[C(`Step Slider`),(0,_.jsx)(u,{value:p,steps:[`Ex Small`,`Small`,`Medium`,`Large`,`Ex Large`],onChange:m})]}),(0,_.jsxs)(`div`,{children:[C(`Percent Slider`),(0,_.jsx)(l,{value:h,onChange:v})]}),(0,_.jsxs)(`div`,{style:{paddingInline:12},children:[C(`Dual Range`),(0,_.jsx)(a,{valueA:y,valueB:x,onChangeA:b,onChangeB:S})]})]})}},I={name:`Percent Slider`,render:()=>{let[e,t]=(0,g.useState)(0);return(0,_.jsx)(`div`,{style:{width:400,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:(0,_.jsx)(l,{value:e,onChange:t})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const [v, setV] = useState(50);
    return <div style={{
      width: 400
    }}><Slider value={v} onChange={setV} /></div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Percentage',
  render: () => {
    const [v, setV] = useState(65);
    return <div style={{
      width: 400
    }}><Slider value={v} onChange={setV} suffix="%" /></div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Without Value Label',
  render: () => {
    const [v, setV] = useState(40);
    return <div style={{
      width: 400
    }}><Slider value={v} onChange={setV} showValue={false} /></div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Tooltip on Drag (Above)',
  render: () => {
    const [v, setV] = useState(50);
    return <div style={{
      width: 400,
      paddingTop: 32
    }}>
        <Slider value={v} onChange={setV} showValue={false} showTooltip suffix="%" />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Tooltip on Drag (Below)',
  render: () => {
    const [v, setV] = useState(50);
    return <div style={{
      width: 400,
      paddingBottom: 32
    }}>
        <Slider value={v} onChange={setV} showValue={false} showTooltip tooltipPosition="below" suffix="%" />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Marks',
  render: () => {
    const [v, setV] = useState(400000);
    return <div style={{
      width: 420
    }}>
        <Slider value={v} min={0} max={1000000} step={50000} onChange={setV} showTooltip showValue={false} suffix="" marks={[{
        value: 0,
        label: '$0'
      }, {
        value: 200000,
        label: '$200k'
      }, {
        value: 400000,
        label: '$400k'
      }, {
        value: 600000,
        label: '$600k'
      }, {
        value: 800000,
        label: '$800k'
      }, {
        value: 1000000,
        label: '$1M'
      }]} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    width: 400
  }}><Slider value={50} disabled suffix="%" /></div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Multi-segment',
  render: () => {
    const [vals, setVals] = useState<[number, number]>([33, 66]);
    return <div style={{
      width: 400
    }}>
        <MultiSlider values={vals} onChange={v => setVals(v as [number, number])} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Multi-segment (Custom Colors)',
  render: () => {
    const [vals, setVals] = useState<[number, number]>([25, 60]);
    return <div style={{
      width: 400
    }}>
        <MultiSlider values={vals} onChange={v => setVals(v as [number, number])} colors={['#5464F2', '#39C995', '#FAC268']} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Step Slider (Font Size)',
  render: () => {
    const [v, setV] = useState(2);
    return <div style={{
      width: 400
    }}>
        <StepSlider value={v} steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']} onChange={setV} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Step Slider (Custom Steps)',
  render: () => {
    const [v, setV] = useState(1);
    return <div style={{
      width: 400
    }}>
        <StepSlider value={v} steps={['Low', 'Medium', 'High', 'Critical']} onChange={setV} />
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Step Slider (Disabled)',
  render: () => <div style={{
    width: 400
  }}>
      <StepSlider value={2} steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']} disabled />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Dual Range',
  render: () => {
    const [visible, setVisible] = useState(2);
    const [archive, setArchive] = useState(7);
    return <div style={{
      width: '100%',
      maxWidth: 440,
      padding: '16px 12px'
    }}>
        <DualRangeSlider valueA={visible} valueB={archive} onChangeA={setVisible} onChangeB={setArchive} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const visible = canvas.getByRole('slider', {
      name: 'Visible log history end'
    });
    const archive = canvas.getByRole('slider', {
      name: 'Archive log end'
    });
    await userEvent.click(visible);
    await userEvent.keyboard('{ArrowRight}');
    await expect(visible).toHaveAttribute('aria-valuenow', '3');
    await userEvent.keyboard('{End}');
    await expect(visible).toHaveAttribute('aria-valuenow', '6');
    await userEvent.keyboard('{ArrowRight}');
    await expect(visible).toHaveAttribute('aria-valuenow', '6');
    await userEvent.click(archive);
    await userEvent.keyboard('{End}');
    await expect(archive).toHaveAttribute('aria-valuenow', '10');
    await userEvent.keyboard('{Home}');
    await expect(archive).toHaveAttribute('aria-valuenow', '7');
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v1, setV1] = useState(50);
    const [v2, setV2] = useState(65);
    const [marks, setM] = useState(400000);
    const [multi, setMul] = useState<[number, number]>([33, 66]);
    const [step, setStep] = useState(2);
    const [pct, setPct] = useState(0);
    const [visible, setVisible] = useState(2);
    const [archive, setArchive] = useState(7);
    const sectionLabel = (text: string) => <p style={{
      margin: '0 0 8px',
      fontSize: 11,
      fontWeight: 600,
      color: '#616E88',
      textTransform: 'uppercase',
      letterSpacing: '0.6px'
    }}>
        {text}
      </p>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      maxWidth: 440,
      fontFamily: 'var(--ds-font-family-base, sans-serif)'
    }}>
        <div>{sectionLabel('Default')}
          <Slider value={v1} onChange={setV1} />
        </div>
        <div style={{
        paddingTop: 24
      }}>{sectionLabel('Tooltip on drag (above) — no value label')}
          <Slider value={v2} onChange={setV2} suffix="%" showValue={false} showTooltip />
        </div>
        <div style={{
        paddingBottom: 24
      }}>{sectionLabel('Tooltip on drag (below)')}
          <Slider value={v2} onChange={setV2} suffix="%" showValue={false} showTooltip tooltipPosition="below" />
        </div>
        <div>{sectionLabel('With marks')}
          <Slider value={marks} min={0} max={1000000} step={50000} onChange={setM} showTooltip showValue={false} marks={[{
          value: 0,
          label: '$0'
        }, {
          value: 200000,
          label: '$200k'
        }, {
          value: 400000,
          label: '$400k'
        }, {
          value: 600000,
          label: '$600k'
        }, {
          value: 800000,
          label: '$800k'
        }, {
          value: 1000000,
          label: '$1M'
        }]} />
        </div>
        <div>{sectionLabel('Disabled')}
          <Slider value={50} disabled suffix="%" />
        </div>
        <div>{sectionLabel('Multi-segment')}
          <MultiSlider values={multi} onChange={v => setMul(v as [number, number])} />
        </div>
        <div>{sectionLabel('Step Slider')}
          <StepSlider value={step} steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']} onChange={setStep} />
        </div>
        <div>{sectionLabel('Percent Slider')}
          <PercentSlider value={pct} onChange={setPct} />
        </div>
        <div style={{
        paddingInline: 12
      }}>{sectionLabel('Dual Range')}
          <DualRangeSlider valueA={visible} valueB={archive} onChangeA={setVisible} onChangeB={setArchive} />
        </div>
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Percent Slider',
  render: () => {
    const [value, setValue] = useState(0);
    return <div style={{
      width: 400,
      fontFamily: 'var(--ds-font-family-base, sans-serif)'
    }}>
        <PercentSlider value={value} onChange={setValue} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Percentage`,`WithoutValue`,`TooltipAbove`,`TooltipBelow`,`WithMarks`,`DisabledSlider`,`MultiSegment`,`MultiCustomColors`,`FontSizeSteps`,`CustomSteps`,`StepDisabled`,`DualRange`,`AllVariants`,`PercentSliderStory`]}))();export{F as AllVariants,M as CustomSteps,S as Default,O as DisabledSlider,P as DualRange,j as FontSizeSteps,A as MultiCustomColors,k as MultiSegment,I as PercentSliderStory,C as Percentage,N as StepDisabled,T as TooltipAbove,E as TooltipBelow,D as WithMarks,w as WithoutValue,L as __namedExportsOrder,x as default};