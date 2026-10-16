import { ACCOUNTS_BY_INDUSTRY, COMPANY_TARGET, PIPELINE_STAGES, REVENUE_LINES } from './Minimal.data';

export type DashboardSection = 'charts' | 'company' | 'industry' | 'work';
type SalesDashboard = {
  REVENUE_LINES: typeof REVENUE_LINES;
  PIPELINE_STAGES: typeof PIPELINE_STAGES;
  ACCOUNTS_BY_INDUSTRY: typeof ACCOUNTS_BY_INDUSTRY;
  COMPANY_TARGET: typeof COMPANY_TARGET;
  sections: DashboardSection[];
  chartOrder: number[];
};
type ViewSample = {
  revenue: number[];
  forecast: number[];
  pipeline: number[];
  industries: number[];
  actual: number;
  target: number;
  sections: DashboardSection[];
  donutFirst?: boolean;
};

// Fixed illustrative datasets: switching views never generates random data or requests a backend.
const VIEW_SAMPLES: Record<string, ViewSample> = {
  daily: {
    revenue: [28, 35, 31, 48, 42, 57], forecast: [32, 30, 40, 44, 51, 60],
    pipeline: [12, 22, 16, 28, 34], industries: [280, 145, 310, 190, 425, 210, 160, 340, 185, 120],
    actual: 1840, target: 2200, sections: ['work', 'charts', 'company', 'industry'],
  },
  pipeline: {
    revenue: [38, 52, 46, 73, 64, 89], forecast: [42, 48, 61, 67, 80, 94],
    pipeline: [32, 46, 28, 52, 41], industries: [510, 265, 380, 220, 460, 175, 310, 245, 195, 150],
    actual: 2740, target: 3200, sections: ['charts', 'work', 'industry', 'company'], donutFirst: true,
  },
  revenue: {
    revenue: [48, 65, 58, 92, 115, 128], forecast: [55, 61, 76, 88, 108, 140],
    pipeline: [18, 26, 22, 58, 72], industries: [720, 390, 610, 280, 455, 240, 320, 195, 360, 165],
    actual: 4260, target: 4000, sections: ['charts', 'company', 'work', 'industry'],
  },
  deals: {
    revenue: [22, 46, 39, 68, 54, 82], forecast: [30, 37, 51, 59, 71, 88],
    pipeline: [15, 24, 19, 62, 84], industries: [430, 280, 510, 350, 220, 165, 290, 410, 185, 135],
    actual: 2980, target: 3400, sections: ['work', 'charts', 'industry', 'company'], donutFirst: true,
  },
  forecast: {
    revenue: [36, 49, 62, 58, 87, 104], forecast: [44, 57, 70, 82, 105, 132],
    pipeline: [22, 31, 27, 46, 63], industries: [540, 310, 460, 250, 390, 180, 275, 325, 215, 140],
    actual: 3520, target: 3800, sections: ['company', 'charts', 'industry', 'work'],
  },
  accounts: {
    revenue: [56, 43, 71, 65, 96, 112], forecast: [48, 59, 64, 80, 91, 120],
    pipeline: [20, 35, 30, 48, 57], industries: [760, 480, 590, 315, 650, 290, 370, 440, 230, 195],
    actual: 4320, target: 4500, sections: ['industry', 'charts', 'company', 'work'], donutFirst: true,
  },
  leads: {
    revenue: [14, 28, 23, 47, 39, 64], forecast: [20, 24, 36, 40, 54, 72],
    pipeline: [68, 52, 34, 23, 16], industries: [320, 195, 270, 155, 440, 310, 125, 215, 180, 245],
    actual: 2180, target: 2600, sections: ['industry', 'work', 'charts', 'company'], donutFirst: true,
  },
  team: {
    revenue: [42, 68, 55, 89, 78, 116], forecast: [50, 60, 74, 81, 98, 124],
    pipeline: [24, 38, 29, 54, 68], industries: [610, 340, 490, 275, 530, 220, 315, 390, 260, 170],
    actual: 3860, target: 4200, sections: ['company', 'work', 'charts', 'industry'],
  },
  territory: {
    revenue: [31, 53, 45, 76, 69, 98], forecast: [39, 47, 61, 70, 86, 110],
    pipeline: [29, 43, 32, 47, 61], industries: [465, 290, 540, 380, 320, 235, 410, 180, 305, 155],
    actual: 3120, target: 3600, sections: ['industry', 'company', 'charts', 'work'], donutFirst: true,
  },
  renewals: {
    revenue: [68, 58, 82, 74, 108, 119], forecast: [60, 72, 76, 94, 101, 130],
    pipeline: [9, 16, 24, 67, 92], industries: [580, 420, 650, 240, 390, 185, 330, 275, 310, 160],
    actual: 3480, target: 3300, sections: ['work', 'company', 'charts', 'industry'], donutFirst: true,
  },
  executive: {
    revenue: [72, 94, 86, 116, 108, 142], forecast: [80, 88, 102, 110, 128, 148],
    pipeline: [36, 48, 42, 76, 98], industries: [780, 520, 690, 430, 610, 350, 470, 390, 310, 240],
    actual: 5120, target: 5000, sections: ['company', 'charts', 'industry', 'work'],
  },
};

const formatCurrency = (value: number) => (value * 1000).toLocaleString('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
});
const classic: SalesDashboard = {
  REVENUE_LINES, PIPELINE_STAGES, ACCOUNTS_BY_INDUSTRY, COMPANY_TARGET,
  sections: ['charts', 'company', 'industry', 'work'], chartOrder: [0, 1],
};

const dashboards: Record<string, SalesDashboard> = Object.fromEntries(
  Object.entries(VIEW_SAMPLES).map(([key, sample]) => [key, {
    REVENUE_LINES: REVENUE_LINES.map((line, index) => ({
      ...line,
      series: line.series.map((item, month) => {
        const value = (index === 0 ? sample.revenue : sample.forecast)[month];
        return { ...item, value, display: formatCurrency(value) };
      }),
    })),
    PIPELINE_STAGES: PIPELINE_STAGES.map((stage, index) => ({
      ...stage, value: sample.pipeline[index], display: formatCurrency(sample.pipeline[index]),
    })),
    ACCOUNTS_BY_INDUSTRY: ACCOUNTS_BY_INDUSTRY.map((industry, index) => ({ ...industry, count: sample.industries[index] })),
    COMPANY_TARGET: {
      achieved: sample.actual, target: sample.target,
      axisMax: Math.ceil(Math.max(sample.actual, sample.target) / 1000) * 1000,
    },
    sections: sample.sections, chartOrder: sample.donutFirst ? [1, 0] : [0, 1],
  }]),
);

export function getSalesDashboard(view: string): SalesDashboard {
  // Classic and the existing quarter filter preserve the original layout and charts.
  return dashboards[view] ?? classic;
}
