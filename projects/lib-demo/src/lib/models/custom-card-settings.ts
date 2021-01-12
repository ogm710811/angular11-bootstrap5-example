import {CustomCardColors} from '../enums/custom-card-colors.enum';
import {CustomCardSizes} from '../enums/custom-card-sizes.enum';

export interface CustomCardSettings {
  [index: string]: any;
  bgColor: string[];
  cardWidth: string[];
  hasNotification: boolean;
  hasIconBadge: boolean;
  bodyAlignment: string[];
}
