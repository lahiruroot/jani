import { Component, OnInit } from '@angular/core';
import { EmpolyedataComponent } from '../datapss/empolyedata/empolyedata.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empolye',
  templateUrl: './empolye.component.html',
  styleUrls: ['./empolye.component.css']
})
export class EmpolyeComponent implements OnInit {
  panelOpenState = false;

  constructor(
    public dialog: MatDialog,
    private afs: AngularFirestore,
    public route: Router,
    public snack:MatSnackBar,
  ) { }

  openDialog() {
    this.dialog.open(EmpolyedataComponent);
  }

  model = [];

  ngOnInit(): void {

    this.afs.collection("employeeData").get().subscribe(data => {
      data.docs.forEach(employeeData => {
        this.model.push(employeeData.data());
      })
    })
  }

}
