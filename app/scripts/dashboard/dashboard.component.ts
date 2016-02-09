import {Component, OnInit} from 'angular2/core';
import {Workflow} from './workflow';
import {WorkflowComponent} from './../workflow/workflow.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/views/dashboard.component.html',
  directives:[WorkflowComponent]
})

export class DashboardComponent implements OnInit {
  public name = 'Arjun!!';
}