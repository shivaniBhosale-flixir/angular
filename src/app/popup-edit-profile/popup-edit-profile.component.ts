import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-popup-edit-profile',
  templateUrl: './popup-edit-profile.component.html',
  styleUrls: ['./popup-edit-profile.component.scss']
})
export class PopupEditProfileComponent {

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router,
     public dialog: MatDialog,
    public route : ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialogRef: MatDialogRef<PopupEditProfileComponent>
  ) { dialogRef.disableClose = true; }

  editForm!: FormGroup;
  ngOnInit(): void { 
    this.editForm = this.fb.group({
      "description": new FormControl(''),
    });
  }
  popUpClose()
  {
    this.dialogRef.close();
  }
}
