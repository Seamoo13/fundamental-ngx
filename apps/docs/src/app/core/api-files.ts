/**
 * Files to display in the API tab of each component.
 * Names should be without hyphens, and capitalized where hyphens occur normally.
 * Include the suffix i.e. Directive or Component.
 * Names are sorted in the ApiComponent so order does not matter.
 */
export const API_FILES = {
    actionBar: [
        'ActionBarComponent',
        'ActionBarActionsDirective',
        'ActionBarBackDirective',
        'ActionBarDescriptionDirective',
        'ActionBarHeaderDirective',
        'ActionBarMobileDirective',
        'ActionBarTitleDirective'
    ],
    alert: ['AlertComponent', 'AlertConfig', 'AlertService', 'AlertRef'],
    avatar: ['AvatarComponent'],
    bar: ['BarComponent', 'BarElementDirective', 'BarLeftDirective', 'BarMiddleDirective', 'BarRightDirective'],
    breadcrumb: ['BreadcrumbComponent', 'BreadcrumbItemDirective', 'BreadcrumbLinkDirective'],
    busyIndicator: ['BusyIndicatorComponent'],
    button: ['ButtonComponent'],
    segmentedButton: ['SegmentedButtonComponent'],
    calendar: [
        'CalendarComponent',
        'CalendarDayViewComponent',
        'CalendarMonthViewComponent',
        'CalendarYearViewComponent',
        'CalendarHeaderViewComponent',
        'CalendarI18n',
        'CalendarI18nDefault',
        'CalendarI18nLabels',
        'DateFormatParser',
        'DateFormatParserDefault',
        'FdDate'
    ],
    combobox: ['ComboboxComponent'],
    checkbox: ['CheckboxComponent'],
    datePicker: ['DatePickerComponent', 'DateFormatParser', 'DateFormatParserDefault', 'FdDate'],
    datetimePicker: ['DatetimePickerComponent', 'FdDateTime', 'DateTimeFormatParser', 'DateTimeFormatParserDefault'],
    dropdown: ['PopoverDropdownComponent'],
    fileInput: ['FileInputComponent', 'FileInputSelectDirective', 'FileInputDragndropDirective'],
    fileUploader: ['FileUploaderComponent', 'FileUploaderSelectDirective', 'FileUploaderDragndropDirective'],
    form: [
        'FormControlComponent',
        'FormGroupComponent',
        'FormItemComponent',
        'FormLabelComponent',
        'FormLegendDirective',
        'FormMessageComponent',
        'FormSetDirective',
        'FormInputMessageGroupComponent'
    ],
    formMessage: ['FormInputMessageGroupComponent'],
    globalConfig: [
    ],
    icon: ['IconComponent'],
    infoLabel: ['InfoLabelComponent'],
    infiniteScroll: ['InfiniteScrollDirective'],
    inlineHelp: ['InlineHelpComponent'],
    inputGroup: ['InputGroupComponent'],
    layoutGrid: ['LayoutGridComponent', 'LayoutGridSpanDirective'],
    layoutPanel: [
        'LayoutPanelComponent',
        'LayoutPanelActionsComponent',
        'LayoutPanelBodyComponent',
        'LayoutPanelDescriptionComponent',
        'LayoutPanelFiltersComponent',
        'LayoutPanelFooterComponent',
        'LayoutPanelHeaderComponent',
        'LayoutPanelHeadComponent',
        'LayoutPanelTitleDirective'
    ],
    link: ['LinkComponent'],
    list: [
        'ListComponent',
        'ListItemDirective',
        'ListLabelDirective',
        'ListTitleDirective',
        'ListSecondaryDirective',
        'ListGroupHeaderDirective',
        'ListIconDirective',
        'ListFooterDirective',
        'ListMessageDirective'
    ],
    localizationEditor: [
        'LocalizationEditorComponent',
        'LocalizationEditorItemComponent',
        'LocalizationEditorMainComponent',
        'LocalizationEditorInputDirective',
        'LocalizationEditorTextareaDirective',
        'LocalizationEditorLabel'
    ],
    megaMenu: [
        'MegaMenuComponent',
        'MegaMenuGroupComponent',
        'MegaMenuItemComponent',
        'MegaMenuLinkDirective',
        'MegaMenuTitleDirective',
        'MegaMenuSubitemDirective',
        'MegaMenuSublinkDirective'
    ],
    menu: [
        'MenuAddonDirective',
        'MenuComponent',
        'MenuGroupComponent',
        'MenuItemDirective',
        'MenuItemAddonDirective',
        'MenuListDirective',
        'MenuTitleDirective',
        'MenuKeyboardService'
    ],
    messageStrip: ['MessageStripComponent'],
    dialog: [
        'DialogService',
        'DialogContainerComponent',
        'DialogTitleDirective',
        'DialogCloseButtonDirective',
        'DialogDecisiveButtonDirective',
        'DialogConfig',
        'DialogPosition',
        'DialogBodyComponent',
        'DialogHeaderComponent',
        'DialogFooterComponent',
        'DialogRef'
    ],
    multiInput: ['MultiInputComponent'],
    notification: [
        'NotificationComponent',
        'NotificationHeaderComponent',
        'NotificationBodyComponent',
        'NotificationFooterComponent',
        'NotificationServiceDirective',
        'NotificationActionsDirective',
        'NotificationAvatarDirective',
        'NotificationContentDirective',
        'NotificationDescriptionDirective',
        'NotificationMetadataDirective',
        'NotificationTextDirective',
        'NotificationTitleDirective',
        'DefaultNotificationComponent',
        'NotificationContainer',
        'NotificationConfig',
        'NotificationDefault',
        'NotificationRef'
    ],
    objectStatus: ['ObjectStatusModule', 'ObjectStatusComponent'],
    pagination: ['PaginationComponent', 'PaginationModel', 'PaginationService'],
    panel: ['PanelComponent', 'PanelTitleDirective'],
    popover: [
        'PopoverComponent',
        'PopoverBodyComponent',
        'PopoverControlComponent',
        'PopoverDropdownComponent',
        'PopoverBodyHeaderDirective',
        'PopoverBodySubheaderDirective',
        'PopoverBodyFooterDirective'
    ],
    popoverDirective: ['PopoverDirective'],
    productSwitch: ['ProductSwitchComponent', 'ProductSwitchItem'],
    scrollSpy: ['ScrollSpyDirective'],
    select: ['SelectComponent', 'OptionComponent'],
    shellbar: [
        'ProductMenuComponent',
        'ShellbarComponent',
        'ShellbarActionComponent',
        'ShellbarActionsComponent',
        'ShellbarLogoComponent',
        'ShellbarSubtitleComponent',
        'ShellbarTitleComponent'
    ],
    sideNavigation: [
        'SideNavigationComponent',
        'SideNavigationModel',
        'SideNavigationUtilityDirective',
        'SideNavigationMainDirective',
        'NestedListDirective',
        'NestedListPopoverComponent',
        'NestedListHeaderDirective',
        'NestedListIconDirective',
        'NestedListItem',
        'NestedListModel',
        'NestedListLink',
        'NestedItemService'
    ],
    splitButton: ['SplitButtonComponent', 'SplitButtonMenuDirective', 'SplitButtonActionTitle'],
    table: [
        'TableBodyDirective',
        'TableCellDirective',
        'TableHeaderDirective',
        'TableRowDirective',
        'TableComponent',
        'TableResponsiveWrapperDirective',
        'TableWrapperComponent',
        'ColumnSortableDirective'
    ],
    tabs: [
        'TabListComponent',
        'TabPanelComponent',
        'TabTitleDirective',
        'TabLoadTitleDirective',
        'TabNavComponent',
        'TabLinkDirective',
        'TabItemDirective',
        'TabTagDirective',
        'TabIconComponent',
        'TabCountDirective',
        'TabLabelDirective',
        'TabProcessDirective',
        'TabHeaderDirective',
        'TabCounterHeaderDirective',
        'TabProcessIconDirective',
        'TabSeparator'
    ],
    tile: [
        'TileComponent',
        'TileHeaderDirective',
        'TileContentDirective',
        'TileFooterDirective',
        'TileTitleDirective',
        'TileSubtitleDirective',
        'TileSectionDirective',
        'TileRefreshDirective',
        'TileFooterTextDirective',
        'TileHeaderContentDirective',
        'TileProfileImgDirective',
        'TileLogoDirective',
        'TileContentBylineDirective',
        'TileContentTextDirective',
        'TileBackgroundImgDirective',
        'TileToggleDirective',
        'TileContainerDirective',
        'TilePageIndicatorDirective',
        'TileDotDirective',
        'TileActionCloseDirective',
        'TileActionIndicatorDirective',
        'TileTitleContainerDirective',
        'TileActionContainerDirective',
        'TileSlideContainerDirective',
        'NumericContentDirective',
        'NumericContentKpiContainerDirective',
        'NumericContentKpiDirective',
        'NumericContentLaunchIconContainerDirective',
        'NumericContentLaunchIconDirective',
        'NumericContentScaleArrowDirective',
        'NumericContentScaleContainerDirective',
        'NumericContentScaleDirective',
        'NumericContentScaleTextDirective'
    ],
    time: [
        'TimeComponent',
        'TimeI18nLabels',
        'TimeFormatParser',
        'TimeFormatParserDefault',
        'TimeObject',
        'TimeColumnComponent'
    ],
    timePicker: ['TimePickerComponent', 'TimeFormatParser', 'TimeFormatParserDefault', 'TimeObject'],
    switch: ['SwitchComponent'],
    stepInput: ['StepInputComponent'],
    token: ['TokenComponent', 'TokenizerComponent'],
    toolbar: [
        'ToolbarComponent',
        'ToolbarContentComponent',
        'ToolbarOverflowContentComponent',
        'ToolbarSpacerComponent'
    ],
    tree: ['TreeComponent', 'TreeChildComponent', 'TreeRowObjectModel']
};
