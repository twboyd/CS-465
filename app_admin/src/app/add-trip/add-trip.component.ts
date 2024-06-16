import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
 editForm!: FormGroup;
 submitted = false;
constructor(
   private formBuilder: FormBuilder,
   private router: Router,
   private tripService: TripDataService
 ) { }
 ngOnInit() :void {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
        alert("Something wrong, couldn't find where I stashed tripCode!");
        this.router.navigate([""]);
        return;
    }

    console.log('EditTripComponent::ngOnInit');
    console.log('tripcode:' + tripCode);
    
   this.editForm = this.formBuilder.group({
     _id: [],
     code: ['', Validators.required],
     name: ['', Validators.required],
     length: ['', Validators.required],
     start: ['', Validators.required],
     resort: ['', Validators.required],
     perPerson: ['', Validators.required],
     image: ['', Validators.required],
     description: ['', Validators.required],
   })
 }
 public onSubmit() {
   this.submitted = true;
if(this.editForm.valid){
     this.tripService.addTrip(this.editForm.value)
.subscribe( {
      next: (data: any) => {
       console.log(data);
       this.router.navigate(['']);
     },
     error: (error: any) => {
console.log('Error: ' + error);
     }});
   }
 }
 // get the form short name to access the form fields
get f() { return this.editForm.controls; }
}
