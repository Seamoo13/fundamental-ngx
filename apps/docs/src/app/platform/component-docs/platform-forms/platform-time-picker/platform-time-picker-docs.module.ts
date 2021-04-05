import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { API_FILES } from '../../../api-files';
import { FdDatetimeModule, SegmentedButtonModule } from '@fundamental-ngx/core';
import { FdpFormGroupModule, PlatformTimePickerModule } from '@fundamental-ngx/platform';
import { SharedDocumentationPageModule } from '../../../../documentation/shared-documentation-page.module';
import { ApiComponent } from '../../../../documentation/core-helpers/api/api.component';
import { PlatformTimePickerDocsComponent } from './platform-time-picker-docs.component';
import { PlatformTimePickerHeaderComponent } from './platform-time-picker-header/platform-time-picker-header.component';
import { PlatformTimePickerBasicExampleComponent } from './examples/platform-time-picker-basic-example.component';
import { PlatformTimePickerReactiveExampleComponent } from './examples/platform-time-picker-reactive-example.component';
import { PlatformTimePickerTemplateExampleComponent } from './examples/platform-time-picker-template-example.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformTimePickerHeaderComponent,
        children: [
            { path: '', component: PlatformTimePickerDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.timePicker } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SegmentedButtonModule,
        SharedDocumentationPageModule,
        FdDatetimeModule,
        PlatformTimePickerModule,
        FdpFormGroupModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformTimePickerDocsComponent,
        PlatformTimePickerHeaderComponent,
        PlatformTimePickerBasicExampleComponent,
        PlatformTimePickerReactiveExampleComponent,
        PlatformTimePickerTemplateExampleComponent
    ]
})
export class PlatformTimePickerDocsModule {}
