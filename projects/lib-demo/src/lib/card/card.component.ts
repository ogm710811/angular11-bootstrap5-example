import {Component, Input} from '@angular/core';
import {CustomCardSettings} from '../models/custom-card-settings';

@Component({
  selector: 'ld-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  get customCardClasses(): string[] {
    const settings = [];
    for (const key in this.cardConfig) {
      if (this.cardConfig) {
        if (key !== 'hasNotification' && key !== 'hasIconBadge' && key !== 'bodyAlignment') {
          settings.push(this.cardConfig[key]);
        }
      }
    }
    return settings;
  }

  get customCardBodyAlignment(): string[] {
    let settings: string[] = [];
    for (const key in this.cardConfig) {
      if (this.cardConfig) {
        if (key === 'bodyAlignment') {
          settings = [...this.cardConfig[key]];
        }
      }
    }
    return settings;
  }

  get notification(): boolean {
    return this._cardSettings.hasNotification;
  }
  get iconBadge(): boolean {
    return this._cardSettings.hasIconBadge;
  }

  @Input()
  set cardConfig(customCardSettings: CustomCardSettings) {
    if (customCardSettings) {
      this._cardSettings = {...customCardSettings};
    }
  }

  get cardConfig(): CustomCardSettings {
    return this._cardSettings;
  }

  private _cardSettings: CustomCardSettings = {
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: []
  };
}
