import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fd-notification-footer',
    templateUrl: './notification-footer.component.html',
    styleUrls: ['./notification-footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationFooterComponent {
    /** @hidden */
    @HostBinding('class.fd-notification__footer')
    fdNotificationFooterClass = true;
}
