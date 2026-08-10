import type { FC, SVGProps } from 'react';
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
  Check,
  ChevronDownFilled,
  Close,
  CloseSmall,
  CompanyAvatar,
  CriteriaMinus,
  CriteriaPlus,
  Edit,
  GroupAvatar,
  HelpCircle,
  ImageAvatar,
  Info,
  Lock,
  More,
  ResizeHandle,
  Search,
  UserAvatar,
} from '../../foundations/icons/Icons';

export type SvgComponent = FC<SVGProps<SVGSVGElement>>;

export const iconMap = {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
  Check,
  ChevronDownFilled,
  Close,
  CloseSmall,
  CompanyAvatar,
  CriteriaMinus,
  CriteriaPlus,
  Edit,
  GroupAvatar,
  HelpCircle,
  ImageAvatar,
  Info,
  Lock,
  More,
  ResizeHandle,
  Search,
  UserAvatar,
} satisfies Record<string, SvgComponent>;

export type IconName = keyof typeof iconMap;
