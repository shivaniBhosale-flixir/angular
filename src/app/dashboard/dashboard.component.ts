import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialog, MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from "@angular/common/http";
import { PopupEditProfileComponent } from "../popup-edit-profile/popup-edit-profile.component";

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
  openEditProfilePopUp() {
    const dialogRef3 = this.dialog.open(PopupEditProfileComponent, {
      // width: "73%",
      // height: "65%", 
    });

    dialogRef3.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
