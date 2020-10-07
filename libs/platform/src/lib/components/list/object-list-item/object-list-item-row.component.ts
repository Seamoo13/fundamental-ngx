import {
    Component, ElementRef,
    ChangeDetectionStrategy, ViewEncapsulation, Input
} from '@angular/core';

@Component({
    selector: 'fdp-object-list-item-row',
    template: `<div class="fd-object-list__row">
        <div class= "fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
                {{ attributeLabel }}
            </div>
        </div>
    <div class="fd-object-list__row-right">
    <ng-content> </ng-content>
    </div>
    </div>`,
    styleUrls: ['./object-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectListItemRowComponent {

    /** object attribute label */
    @Input()
    attributeLabel: string;

    constructor(private element: ElementRef) { }

    // showChildName() {
    //     this.element.nativeElement.innerHTML = this.attributeLabel;
    // }
}



