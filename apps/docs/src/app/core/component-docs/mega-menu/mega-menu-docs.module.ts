import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { MegaMenuHeaderComponent } from './mega-menu-header/mega-menu-header.component';
import { MegaMenuDocsComponent } from './mega-menu-docs.component';
import {
    MegaMenuExampleComponent,
    MegaMenuGroupExampleComponent,
    MegaMenuPositionExampleComponent
} from './examples/mega-menu-examples.component';
import { MegaMenuModule, MessageStripModule } from '@fundamental-ngx/core';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';

const routes: Routes = [
    {
        path: '',
        component: MegaMenuHeaderComponent,
        children: [
            { path: '', component: MegaMenuDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.megaMenu } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, MegaMenuModule, MessageStripModule],
    exports: [RouterModule],
    declarations: [
        MegaMenuDocsComponent,
        MegaMenuHeaderComponent,
        MegaMenuExampleComponent,
        MegaMenuGroupExampleComponent,
        MegaMenuPositionExampleComponent
    ]
})
export class MegaMenuDocsModule {}
