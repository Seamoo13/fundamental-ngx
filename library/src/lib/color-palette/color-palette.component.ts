import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { VariantConfiguration } from './models/variant-configuration';

@Component({
    selector: 'fd-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: [
        './color-palette.component.scss',
        '../../../../node_modules/fundamental-styles/scss/components/color-palette.scss'
    ]
})
export class ColorPaletteComponent implements OnInit {
    /** Used to determine which variant of the color-palette needs to be displayed */
    @Input()
    variant: string;

    @Input()
    colorPaletteLauncherType: string;

    @Input()
    defaultColors: string[] = [
        '#ffd700',
        '#F08080',
        '#FF1493',
        '#c71585',
        '#7B68EE',
        '#6495ed',
        '#20b2aa',
        '#6B8E23',
        '#4169E1',
        '#E0FFFF',
        '#FFFFFF',
        '#D3D3D3',
        '#A9A9A9',
        '#696969',
        '#000000'
    ];

    /** Varible storing the color the user has clicked on */
    @Output()
    chosenColor: EventEmitter<string> = new EventEmitter<string>();

    /** Object used to hide/show various sub-components of the color-palette based on the desired variant */
    variantConfiguration: VariantConfiguration;

    chosenColorLocal: string = '';

    /** Variable that holds the color that is used if user selects 'default color' */
    defaultColor: string = 'Black';

    constructor() {}

    ngOnInit() {
        this.configureVariant(this.variant);
    }

    /** Method used to make color selection */
    public selectedColor(color: string): void {
        this.chosenColorLocal = color;
        this.chosenColor.emit(this.chosenColorLocal);
    }

    /** Method that configures the object that is used to determine which variant is displayed */
    public configureVariant(variant: string): void {
        if (variant === 'full-featured') {
            this.variantConfiguration = this.getConfigurationObject(true, true, true, true);
        } else if (variant === 'complex') {
            this.variantConfiguration = this.getConfigurationObject(true, true, true, false);
        } else if (variant === 'simple') {
            this.variantConfiguration = this.getConfigurationObject(false, true, false, false);
        }
    }

    /** @hidden */
    private getConfigurationObject(
        defaultColor: boolean,
        swatchContainer: boolean,
        moreColors: boolean,
        recentColors: boolean
    ): VariantConfiguration {
        return {
            defaultColor: defaultColor,
            swatchContainer: swatchContainer,
            moreColors: moreColors,
            recentColors: recentColors
        };
    }
}
