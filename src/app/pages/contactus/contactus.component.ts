import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm = this.fb.group({   //Crear variable para el formulario
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    }),
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  constructor(private fb: FormBuilder) { } //Crear variable para llamar a FormBuilder

  __onSubmit(){
    if(this.contactusForm.valid){
      console.log(this.contactusForm.value); //Este método va escribir en la consola los datos que tenga el formulario
    } else {
      alert("Formulario no valido");
    }

  }

  ngOnInit(): void {
  }

}
