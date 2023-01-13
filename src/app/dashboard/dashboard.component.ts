import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialog, MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  dashboardForm!: FormGroup;

  ngOnInit() {
  
    this.dashboardForm = this.fb.group({
      "searchRole": new FormControl(''),
    });

  }
}
