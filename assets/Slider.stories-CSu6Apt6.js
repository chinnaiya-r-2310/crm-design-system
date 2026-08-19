import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DrHkVmpO.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";var i=e((()=>{}));function a({value:e=50,min:t=0,max:n=100,step:r=1,disabled:i=!1,showValue:a=!0,suffix:o=``,showTooltip:s=!1,tooltipPosition:u=`above`,marks:d,onChange:f}){let p=(0,l.useRef)(null),[m,h]=(0,l.useState)(!1),g=Math.min(n,Math.max(t,e)),_=(g-t)/(n-t)*100,v=(0,l.useCallback)(e=>{let i=p.current.getBoundingClientRect(),a=t+Math.min(1,Math.max(0,(e-i.left)/i.width))*(n-t);return Math.round(a/r)*r},[t,n,r]),y=(0,l.useCallback)(e=>{if(i)return;e.preventDefault(),h(!0);let t=e=>e.touches?e.touches[0].clientX:e.clientX,n=e=>f?.(v(t(e))),r=()=>{h(!1),document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseup`,r),document.removeEventListener(`touchmove`,n),document.removeEventListener(`touchend`,r)};n(e.nativeEvent??e),document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,r),document.addEventListener(`touchmove`,n,{passive:!0}),document.addEventListener(`touchend`,r)},[i,v,f]),b=e=>{if(i)return;let a=e.key===`ArrowRight`||e.key===`ArrowUp`?r:e.key===`ArrowLeft`||e.key===`ArrowDown`?-r:0;a&&(e.preventDefault(),f?.(Math.min(n,Math.max(t,g+a))))},x=`sld-tooltip sld-tt-${u}${m?` sld-tt-visible`:``}`;return(0,c.jsxs)(`div`,{className:`sld-root${i?` sld-disabled`:``}`,children:[a&&(0,c.jsx)(`div`,{className:`sld-value-row`,children:(0,c.jsxs)(`span`,{className:`sld-value`,children:[g,o]})}),(0,c.jsxs)(`div`,{className:`sld-track-wrap`,ref:p,onMouseDown:y,onTouchStart:y,children:[(0,c.jsx)(`div`,{className:`sld-track-bg`}),(0,c.jsx)(`div`,{className:`sld-track-fill`,style:{width:`${_}%`}}),(0,c.jsx)(`div`,{className:`sld-thumb`,style:{left:`${_}%`},role:`slider`,tabIndex:i?-1:0,"aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":g,"aria-disabled":i||void 0,onKeyDown:b,children:s&&(0,c.jsxs)(`div`,{className:x,children:[g,o]})})]}),d&&d.length>0&&(0,c.jsx)(`div`,{className:`sld-marks-row`,children:d.map((e,r)=>(0,c.jsxs)(`div`,{className:`sld-mark`,style:{left:`${(e.value-t)/(n-t)*100}%`},children:[(0,c.jsx)(`div`,{className:`sld-mark-tick`}),(0,c.jsx)(`span`,{className:`sld-mark-label`,children:e.label})]},r))})]})}function o({values:e=[33,66],min:t=0,max:n=100,step:r=1,disabled:i=!1,colors:a=u,onChange:o}){let s=(0,l.useRef)(null),[d,f]=e,p=(d-t)/(n-t)*100,m=(f-t)/(n-t)*100,h=d-t,g=f-d,_=n-f,v=t===0&&n===100,y=(0,l.useCallback)(e=>{let i=s.current.getBoundingClientRect(),a=t+Math.min(1,Math.max(0,(e-i.left)/i.width))*(n-t);return Math.round(a/r)*r},[t,n,r]),b=(0,l.useCallback)(e=>t=>{if(i)return;t.preventDefault(),t.stopPropagation();let n=t=>{let n=y(t.touches?t.touches[0].clientX:t.clientX);e===0?o?.([Math.min(n,f-r),f]):o?.([d,Math.max(n,d+r)])},a=()=>{document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseup`,a)};n(t.nativeEvent??t),document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,a)},[i,y,o,d,f,r]);return(0,c.jsxs)(`div`,{className:`sld-multi-root${i?` sld-disabled`:``}`,children:[(0,c.jsxs)(`div`,{className:`sld-multi-labels`,children:[(0,c.jsxs)(`span`,{className:`sld-multi-label`,style:{width:`${p}%`},children:[h,v?`%`:``]}),(0,c.jsxs)(`span`,{className:`sld-multi-label`,style:{width:`${m-p}%`},children:[g,v?`%`:``]}),(0,c.jsxs)(`span`,{className:`sld-multi-label`,style:{flex:1},children:[_,v?`%`:``]})]}),(0,c.jsxs)(`div`,{className:`sld-multi-track-wrap`,children:[(0,c.jsxs)(`div`,{className:`sld-multi-track`,ref:s,children:[(0,c.jsx)(`div`,{className:`sld-multi-seg`,style:{width:`${p}%`,background:a[0]}}),(0,c.jsx)(`div`,{className:`sld-multi-sep`}),(0,c.jsx)(`div`,{className:`sld-multi-seg`,style:{width:`${m-p}%`,background:a[1]}}),(0,c.jsx)(`div`,{className:`sld-multi-sep`}),(0,c.jsx)(`div`,{className:`sld-multi-seg sld-multi-seg-last`,style:{background:a[2]}})]}),(0,c.jsx)(`div`,{className:`sld-multi-thumb`,style:{left:`${p}%`},onMouseDown:b(0),role:`slider`,tabIndex:i?-1:0,"aria-valuemin":t,"aria-valuemax":f-r,"aria-valuenow":d}),(0,c.jsx)(`div`,{className:`sld-multi-thumb`,style:{left:`${m}%`},onMouseDown:b(1),role:`slider`,tabIndex:i?-1:0,"aria-valuemin":d+r,"aria-valuemax":n,"aria-valuenow":f})]})]})}function s({value:e=0,steps:t=[],disabled:n=!1,onChange:r}){if(!t.length)return null;let i=t.length,a=i>1?e/(i-1)*100:0,o=e=>typeof e==`string`?e:e.label;return(0,c.jsxs)(`div`,{className:`sld-step-root${n?` sld-disabled`:``}`,children:[(0,c.jsx)(`div`,{className:`sld-step-label-row`,children:t.map((t,n)=>{let r=i>1?n/(i-1)*100:50;return(0,c.jsx)(`span`,{className:`sld-step-label${n===e?` sld-step-label-active`:``}`,style:{left:`${r}%`},children:o(t)},n)})}),(0,c.jsxs)(`div`,{className:`sld-step-track-wrap`,children:[(0,c.jsx)(`div`,{className:`sld-step-fill`,style:{width:`${a}%`}}),t.map((t,a)=>(0,c.jsx)(`div`,{className:a<e?`sld-step-dot sld-step-dot-passed`:a===e?`sld-step-dot sld-step-dot-active`:`sld-step-dot sld-step-dot-future`,role:`radio`,"aria-checked":a===e,tabIndex:n?-1:0,onClick:()=>!n&&r?.(a),onKeyDown:e=>{n||(e.key===`ArrowRight`&&a<i-1&&(e.preventDefault(),r?.(a+1)),e.key===`ArrowLeft`&&a>0&&(e.preventDefault(),r?.(a-1)),(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r?.(a)))}},a))]})]})}var c,l,u,d=e((()=>{c=r(),l=t(n(),1),i(),u=[`#FF6D6D`,`#FAC268`,`#39C995`],a.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{value:{defaultValue:{value:`50`,computed:!1},required:!1},min:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1},step:{defaultValue:{value:`1`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},showValue:{defaultValue:{value:`true`,computed:!1},required:!1},suffix:{defaultValue:{value:`''`,computed:!1},required:!1},showTooltip:{defaultValue:{value:`false`,computed:!1},required:!1},tooltipPosition:{defaultValue:{value:`'above'`,computed:!1},required:!1}}},o.__docgenInfo={description:``,methods:[],displayName:`MultiSlider`,props:{values:{defaultValue:{value:`[33, 66]`,computed:!1},required:!1},min:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1},step:{defaultValue:{value:`1`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},colors:{defaultValue:{value:`['#FF6D6D', '#FAC268', '#39C995']`,computed:!1},required:!1}}},s.__docgenInfo={description:``,methods:[],displayName:`StepSlider`,props:{value:{defaultValue:{value:`0`,computed:!1},required:!1},steps:{defaultValue:{value:`[]`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{f=t(n(),1),d(),p=r(),m={title:`Design System/Components/Slider`,parameters:{layout:`padded`,docs:{description:{component:"Slider components. `Slider` — single thumb with optional marks, tooltip on drag, value label. `MultiSlider` — 3-segment distribution with triangle thumbs. `StepSlider` — discrete dot steps with labels. Figma: Chinnaiya-Style-Sheet node 93673-150972."}}}},h={name:`Default`,render:()=>{let[e,t]=(0,f.useState)(50);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(a,{value:e,onChange:t})})}},g={name:`Percentage`,render:()=>{let[e,t]=(0,f.useState)(65);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(a,{value:e,onChange:t,suffix:`%`})})}},_={name:`Without Value Label`,render:()=>{let[e,t]=(0,f.useState)(40);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(a,{value:e,onChange:t,showValue:!1})})}},v={name:`Tooltip on Drag (Above)`,render:()=>{let[e,t]=(0,f.useState)(50);return(0,p.jsx)(`div`,{style:{width:400,paddingTop:32},children:(0,p.jsx)(a,{value:e,onChange:t,showValue:!1,showTooltip:!0,suffix:`%`})})}},y={name:`Tooltip on Drag (Below)`,render:()=>{let[e,t]=(0,f.useState)(50);return(0,p.jsx)(`div`,{style:{width:400,paddingBottom:32},children:(0,p.jsx)(a,{value:e,onChange:t,showValue:!1,showTooltip:!0,tooltipPosition:`below`,suffix:`%`})})}},b={name:`With Marks`,render:()=>{let[e,t]=(0,f.useState)(4e5);return(0,p.jsx)(`div`,{style:{width:420},children:(0,p.jsx)(a,{value:e,min:0,max:1e6,step:5e4,onChange:t,showTooltip:!0,showValue:!1,suffix:``,marks:[{value:0,label:`$0`},{value:2e5,label:`$200k`},{value:4e5,label:`$400k`},{value:6e5,label:`$600k`},{value:8e5,label:`$800k`},{value:1e6,label:`$1M`}]})})}},x={name:`Disabled`,render:()=>(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(a,{value:50,disabled:!0,suffix:`%`})})},S={name:`Multi-segment`,render:()=>{let[e,t]=(0,f.useState)([33,66]);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(o,{values:e,onChange:e=>t(e)})})}},C={name:`Multi-segment (Custom Colors)`,render:()=>{let[e,t]=(0,f.useState)([25,60]);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(o,{values:e,onChange:e=>t(e),colors:[`#5464F2`,`#39C995`,`#FAC268`]})})}},w={name:`Step Slider (Font Size)`,render:()=>{let[e,t]=(0,f.useState)(2);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(s,{value:e,steps:[`Ex Small`,`Small`,`Medium`,`Large`,`Ex Large`],onChange:t})})}},T={name:`Step Slider (Custom Steps)`,render:()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(s,{value:e,steps:[`Low`,`Medium`,`High`,`Critical`],onChange:t})})}},E={name:`Step Slider (Disabled)`,render:()=>(0,p.jsx)(`div`,{style:{width:400},children:(0,p.jsx)(s,{value:2,steps:[`Ex Small`,`Small`,`Medium`,`Large`,`Ex Large`],disabled:!0})})},D={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>{let[e,t]=(0,f.useState)(50),[n,r]=(0,f.useState)(65),[i,c]=(0,f.useState)(4e5),[l,u]=(0,f.useState)([33,66]),[d,m]=(0,f.useState)(2),h=e=>(0,p.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e});return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,maxWidth:440,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,p.jsxs)(`div`,{children:[h(`Default`),(0,p.jsx)(a,{value:e,onChange:t})]}),(0,p.jsxs)(`div`,{style:{paddingTop:24},children:[h(`Tooltip on drag (above) — no value label`),(0,p.jsx)(a,{value:n,onChange:r,suffix:`%`,showValue:!1,showTooltip:!0})]}),(0,p.jsxs)(`div`,{style:{paddingBottom:24},children:[h(`Tooltip on drag (below)`),(0,p.jsx)(a,{value:n,onChange:r,suffix:`%`,showValue:!1,showTooltip:!0,tooltipPosition:`below`})]}),(0,p.jsxs)(`div`,{children:[h(`With marks`),(0,p.jsx)(a,{value:i,min:0,max:1e6,step:5e4,onChange:c,showTooltip:!0,showValue:!1,marks:[{value:0,label:`$0`},{value:2e5,label:`$200k`},{value:4e5,label:`$400k`},{value:6e5,label:`$600k`},{value:8e5,label:`$800k`},{value:1e6,label:`$1M`}]})]}),(0,p.jsxs)(`div`,{children:[h(`Disabled`),(0,p.jsx)(a,{value:50,disabled:!0,suffix:`%`})]}),(0,p.jsxs)(`div`,{children:[h(`Multi-segment`),(0,p.jsx)(o,{values:l,onChange:e=>u(e)})]}),(0,p.jsxs)(`div`,{children:[h(`Step Slider`),(0,p.jsx)(s,{value:d,steps:[`Ex Small`,`Small`,`Medium`,`Large`,`Ex Large`],onChange:m})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const [v, setV] = useState(50);
    return <div style={{
      width: 400
    }}><Slider value={v} onChange={setV} /></div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Percentage',
  render: () => {
    const [v, setV] = useState(65);
    return <div style={{
      width: 400
    }}><Slider value={v} onChange={setV} suffix="%" /></div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Without Value Label',
  render: () => {
    const [v, setV] = useState(40);
    return <div style={{
      width: 400
    }}><Slider value={v} onChange={setV} showValue={false} /></div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    width: 400
  }}><Slider value={50} disabled suffix="%" /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Multi-segment',
  render: () => {
    const [vals, setVals] = useState<[number, number]>([33, 66]);
    return <div style={{
      width: 400
    }}>
        <MultiSlider values={vals} onChange={v => setVals(v as [number, number])} />
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Multi-segment (Custom Colors)',
  render: () => {
    const [vals, setVals] = useState<[number, number]>([25, 60]);
    return <div style={{
      width: 400
    }}>
        <MultiSlider values={vals} onChange={v => setVals(v as [number, number])} colors={['#5464F2', '#39C995', '#FAC268']} />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Step Slider (Font Size)',
  render: () => {
    const [v, setV] = useState(2);
    return <div style={{
      width: 400
    }}>
        <StepSlider value={v} steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']} onChange={setV} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Step Slider (Custom Steps)',
  render: () => {
    const [v, setV] = useState(1);
    return <div style={{
      width: 400
    }}>
        <StepSlider value={v} steps={['Low', 'Medium', 'High', 'Critical']} onChange={setV} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Step Slider (Disabled)',
  render: () => <div style={{
    width: 400
  }}>
      <StepSlider value={2} steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']} disabled />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Percentage`,`WithoutValue`,`TooltipAbove`,`TooltipBelow`,`WithMarks`,`DisabledSlider`,`MultiSegment`,`MultiCustomColors`,`FontSizeSteps`,`CustomSteps`,`StepDisabled`,`AllVariants`]}))();export{D as AllVariants,T as CustomSteps,h as Default,x as DisabledSlider,w as FontSizeSteps,C as MultiCustomColors,S as MultiSegment,g as Percentage,E as StepDisabled,v as TooltipAbove,y as TooltipBelow,b as WithMarks,_ as WithoutValue,O as __namedExportsOrder,m as default};