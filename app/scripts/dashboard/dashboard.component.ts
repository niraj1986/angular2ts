import {Component, OnInit} from 'angular2/core';
import {Workflow} from './workflow';
import {WorkflowComponent} from './../workflow/workflow.component';
import {DistributionComponent} from './../distribution/distribution.component';
import {AssetComponent} from './../asset/asset.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/views/dashboard.component.html',
  directives:[WorkflowComponent, DistributionComponent, AssetComponent]
})

export class DashboardComponent implements OnInit {
  public name = 'Arjun!!';
}