import type { FC, SVGProps } from 'react';
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
  Check,
  ChevronDownFilled,
  CloseSmall,
  Info,
  Lock,
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
  Info,
  Lock,
  ResizeHandle,
  Search,
} satisfies Record<string, SvgComponent>;

export type IconName = keyof typeof iconMap;
