import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider, MultiSlider, StepSlider, PercentSlider } from './Slider';

const meta: Meta = {
  title: 'Design System/Components/Slider',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Slider components. ' +
          '`Slider` — single thumb with optional marks, tooltip on drag, value label. ' +
          '`MultiSlider` — 3-segment distribution with triangle thumbs. ' +
          '`StepSlider` — discrete dot steps with labels. ' +
          'Figma: Chinnaiya-Style-Sheet node 93673-150972.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

/* ─── Slider ─── */
export const Default: Story = {
  name: 'Default',
  render: () => {
    const [v, setV] = useState(50);
    return <div style={{ width: 400 }}><Slider value={v} onChange={setV} /></div>;
  },
};

export const Percentage: Story = {
  name: 'Percentage',
  render: () => {
    const [v, setV] = useState(65);
    return <div style={{ width: 400 }}><Slider value={v} onChange={setV} suffix="%" /></div>;
  },
};

export const WithoutValue: Story = {
  name: 'Without Value Label',
  render: () => {
    const [v, setV] = useState(40);
    return <div style={{ width: 400 }}><Slider value={v} onChange={setV} showValue={false} /></div>;
  },
};

export const TooltipAbove: Story = {
  name: 'Tooltip on Drag (Above)',
  render: () => {
    const [v, setV] = useState(50);
    return (
      <div style={{ width: 400, paddingTop: 32 }}>
        <Slider value={v} onChange={setV} showValue={false} showTooltip suffix="%" />
      </div>
    );
  },
};

export const TooltipBelow: Story = {
  name: 'Tooltip on Drag (Below)',
  render: () => {
    const [v, setV] = useState(50);
    return (
      <div style={{ width: 400, paddingBottom: 32 }}>
        <Slider value={v} onChange={setV} showValue={false} showTooltip tooltipPosition="below" suffix="%" />
      </div>
    );
  },
};

export const WithMarks: Story = {
  name: 'With Marks',
  render: () => {
    const [v, setV] = useState(400000);
    return (
      <div style={{ width: 420 }}>
        <Slider
          value={v}
          min={0}
          max={1000000}
          step={50000}
          onChange={setV}
          showTooltip
          showValue={false}
          suffix=""
          marks={[
            { value: 0,       label: '$0' },
            { value: 200000,  label: '$200k' },
            { value: 400000,  label: '$400k' },
            { value: 600000,  label: '$600k' },
            { value: 800000,  label: '$800k' },
            { value: 1000000, label: '$1M' },
          ]}
        />
      </div>
    );
  },
};

export const DisabledSlider: Story = {
  name: 'Disabled',
  render: () => <div style={{ width: 400 }}><Slider value={50} disabled suffix="%" /></div>,
};

/* ─── Multi-segment ─── */
export const MultiSegment: Story = {
  name: 'Multi-segment',
  render: () => {
    const [vals, setVals] = useState<[number, number]>([33, 66]);
    return (
      <div style={{ width: 400 }}>
        <MultiSlider values={vals} onChange={(v) => setVals(v as [number, number])} />
      </div>
    );
  },
};

export const MultiCustomColors: Story = {
  name: 'Multi-segment (Custom Colors)',
  render: () => {
    const [vals, setVals] = useState<[number, number]>([25, 60]);
    return (
      <div style={{ width: 400 }}>
        <MultiSlider
          values={vals}
          onChange={(v) => setVals(v as [number, number])}
          colors={['#5464F2', '#39C995', '#FAC268']}
        />
      </div>
    );
  },
};

/* ─── Step Slider ─── */
export const FontSizeSteps: Story = {
  name: 'Step Slider (Font Size)',
  render: () => {
    const [v, setV] = useState(2);
    return (
      <div style={{ width: 400 }}>
        <StepSlider
          value={v}
          steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']}
          onChange={setV}
        />
      </div>
    );
  },
};

export const CustomSteps: Story = {
  name: 'Step Slider (Custom Steps)',
  render: () => {
    const [v, setV] = useState(1);
    return (
      <div style={{ width: 400 }}>
        <StepSlider
          value={v}
          steps={['Low', 'Medium', 'High', 'Critical']}
          onChange={setV}
        />
      </div>
    );
  },
};

export const StepDisabled: Story = {
  name: 'Step Slider (Disabled)',
  render: () => (
    <div style={{ width: 400 }}>
      <StepSlider
        value={2}
        steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']}
        disabled
      />
    </div>
  ),
};

/* ─── All Variants ─── */
export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const [v1, setV1]     = useState(50);
    const [v2, setV2]     = useState(65);
    const [marks, setM]   = useState(400000);
    const [multi, setMul] = useState<[number, number]>([33, 66]);
    const [step, setStep] = useState(2);
    const [pct, setPct]   = useState(0);

    const sectionLabel = (text: string) => (
      <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 600, color: '#616E88', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
        {text}
      </p>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 440, fontFamily: 'var(--ds-font-family-base, sans-serif)' }}>
        <div>{sectionLabel('Default')}
          <Slider value={v1} onChange={setV1} />
        </div>
        <div style={{ paddingTop: 24 }}>{sectionLabel('Tooltip on drag (above) — no value label')}
          <Slider value={v2} onChange={setV2} suffix="%" showValue={false} showTooltip />
        </div>
        <div style={{ paddingBottom: 24 }}>{sectionLabel('Tooltip on drag (below)')}
          <Slider value={v2} onChange={setV2} suffix="%" showValue={false} showTooltip tooltipPosition="below" />
        </div>
        <div>{sectionLabel('With marks')}
          <Slider
            value={marks}
            min={0} max={1000000} step={50000}
            onChange={setM}
            showTooltip showValue={false}
            marks={[
              { value: 0,       label: '$0' },
              { value: 200000,  label: '$200k' },
              { value: 400000,  label: '$400k' },
              { value: 600000,  label: '$600k' },
              { value: 800000,  label: '$800k' },
              { value: 1000000, label: '$1M' },
            ]}
          />
        </div>
        <div>{sectionLabel('Disabled')}
          <Slider value={50} disabled suffix="%" />
        </div>
        <div>{sectionLabel('Multi-segment')}
          <MultiSlider values={multi} onChange={(v) => setMul(v as [number, number])} />
        </div>
        <div>{sectionLabel('Step Slider')}
          <StepSlider
            value={step}
            steps={['Ex Small', 'Small', 'Medium', 'Large', 'Ex Large']}
            onChange={setStep}
          />
        </div>
        <div>{sectionLabel('Percent Slider')}
          <PercentSlider value={pct} onChange={setPct} />
        </div>
      </div>
    );
  },
};

export const PercentSliderStory: Story = {
  name: 'Percent Slider',
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: 400, fontFamily: 'var(--ds-font-family-base, sans-serif)' }}>
        <PercentSlider value={value} onChange={setValue} />
      </div>
    );
  },
};
