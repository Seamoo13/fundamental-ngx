import {
    Component, ChangeDetectorRef, ElementRef,
    forwardRef, ChangeDetectionStrategy, ViewEncapsulation,
    ContentChildren, QueryList, Input
} from '@angular/core';
import { BaseListItem } from '../base-list-item';
import { ListConfig } from '../list.config';
import { ObjectListItemRowComponent } from './object-list-item-row.component';

@Component({
    selector: 'fdp-object-list-item',
    templateUrl: './object-list-item.component.html',
    styleUrls: ['./object-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        { provide: BaseListItem, useExisting: forwardRef(() => ObjectListItemComponent) }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectListItemComponent extends BaseListItem {

    /** @hidden */
    _contentDensity = this._listConfig.contentDensity;

    /** define label for screen reader */
    @Input()
    text: string;
    /** define label for screen reader */
    @Input()
    icon: string;

    @Input()
    indicationColor: string;

    @Input()
    status: string;

    @Input()
    glyph: string;

    /** define label for screen reader */
    @Input()
    introductionText: string;

    /** define label for screen reader */
    @Input()
    amount: string;

    /** define currency */
    @Input()
    currency: string;

    /** label for avatar */
    @Input()
    label: string;

    /** Is avatar in circle */
    @Input()
    circle: boolean;

    /** Is avatar has placeholder */
    @Input()
    placeholder: boolean;

    /** Is avatar has tile */
    @Input()
    tile: boolean;

    /** Is avatar has colorAccent */
    @Input()
    colorAccent: number;

    /** Avatar image path */
    @Input()
    image: string;

    /** Avatar is transparent */
    @Input()
    transparent: boolean;

    /** define label for screen reader */
    @Input()
    ariaLabelledBy: string;

    /** define level of item for screen reader */
    @Input()
    ariaLevel: number;

    /** define position of item for screen reader */
    @Input()
    ariaPosinet: number;

    /** attribute to hold avatar path*/
    @Input()
    avatarSrc?: string;

    /** attribute to hold avatar title for a11y*/
    @Input()
    avatarTitle: string;

    /** attribute to hold counter value*/
    @Input()
    counter?: string;

    /**Description of the title*/
    @Input()
    description: string;

    /** To invert the status of secondary text*/
    @Input()
    inverted = false;

    /** Whether there is no data inside list item */
    @Input()
    noDataText: string;

    /** attribute to hold secondary text*/
    @Input()
    secondary?: string;

    /**
    * Enabling this flag causes forcing secondary item directive to not wrap text,
    * instead of wrapping there will be text truncation
   */
    @Input()
    secondaryWrap?: boolean;

    /** Tooltip text to show when focused for more than timeout value*/
    @Input()
    title?: string;


    @ContentChildren(ObjectListItemRowComponent)
    children: QueryList<ObjectListItemRowComponent>;

    /**
     * @hidden
     * Used to define if contentDensity value is 'compact' or not.
     */
    isCompact = this._contentDensity === 'compact';
    /** @hidden */
    constructor(_changeDetectorRef: ChangeDetectorRef, public itemEl: ElementRef,
        protected _listConfig: ListConfig) {
        super(_changeDetectorRef, itemEl, _listConfig);
    }

}
