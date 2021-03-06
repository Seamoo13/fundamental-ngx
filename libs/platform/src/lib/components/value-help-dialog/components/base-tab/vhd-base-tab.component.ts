import { ChangeDetectorRef, Component, Host, Inject, Input } from '@angular/core';

import {
  VhdTab,
  VhdFilter
} from '../../models';

@Component({
  template: ''
})
export class VhdBaseTab {
  /** Tab Title */
  @Input()
  uid: string;

  /** Tab Title */
  @Input()
  tabTitle: string;

  /** Mobile view */
  @Input()
  mobile = false;

  /** Actual filters */
  @Input()
  filters: VhdFilter[] = [];

  /** @hidden */
  get type(): VhdTab {
    return VhdTab.defineConditions
  }

  constructor(
    readonly _changeDetectorRef: ChangeDetectorRef
  ) {}
}
