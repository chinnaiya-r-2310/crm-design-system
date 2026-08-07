import type { FC, SVGProps } from 'react';
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
  Check,
  ChevronDownFilled,
  CloseSmall,
  CriteriaMinus,
  CriteriaPlus,
  HelpCircle,
  Info,
  Lock,
  More,
  ResizeHandle,
  Search,
} from '../../foundations/icons/Icons';

export type SvgComponent = FC<SVGProps<SVGSVGElement>>;

export const iconMap = {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
  Check,
  ChevronDownFilled,
  CloseSmall,
  CriteriaMinus,
  CriteriaPlus,
  HelpCircle,
  Info,
  Lock,
  More,
  ResizeHandle,
  Search,
} satisfies Record<string, SvgComponent>;

export type IconName = keyof typeof iconMap;
