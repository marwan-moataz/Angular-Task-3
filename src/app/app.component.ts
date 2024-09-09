import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { ServerStatusComponent } from './components/dashboards/server-status/server-status.component';
import { TrafficComponent } from './components/dashboards/traffic/traffic.component';
import { TicketsComponent } from './components/dashboards/tickets/tickets.component';
import { DashboardItemComponent } from './components/dashboards/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
