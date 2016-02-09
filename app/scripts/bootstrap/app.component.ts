import {Component} from 'angular2/core';
import {Location, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DashboardComponent} from './../dashboard/dashboard.component';
import {WorkflowComponent} from './../workflow/workflow.component';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html',
  styleUrls: ['app/css/navigation.css', 'app/css/footer.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[HTTP_PROVIDERS]
  
})

@RouteConfig([
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true}, 
  {path: '/workflow', name: 'Workflow', component: WorkflowComponent}
])

export class AppComponent {
  public title = 'Tour of Heroes';
  constructor(location: Location) {
    location.go(location.path());
  }
}