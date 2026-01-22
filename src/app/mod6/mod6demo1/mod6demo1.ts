import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
})
export class Mod6demo1 {

  public form: FormGroup
  public name? : string

  constructor() {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        //minuscule, majuscule, ou numérique, au moins 8 caractères
        password: new FormControl(null, [Validators.pattern(/^[a-z0-9]{8,}$/i), Validators.required]),
        birthdate: new FormControl(null, [Validators.required, this.dateValidator]),
        newsletter: new FormControl(true),
        job: new FormControl('dev', [Validators.pattern(/(admin|dev|chef)/)]),
        note: new FormControl(5, [Validators.min(0), Validators.max(10)])
      }
    );
  }

  dateValidator(control: AbstractControl) {
    if (control && control.value) {
      if (new Date() < new Date(control.value)) {
        return {greaterThan: true}
      }
    }
    return null;
  }

  onSubmit(){
    if(this.form.valid){
      //on récupère et on envoie à un service
      console.log(this.form.value)
    }else{
      console.log("C'est pas bon !")
      this.form.markAllAsTouched()
    }
  }


  checkName(event : Event) {
    console.log(event)
    if(this.name?.trim().length == 0){
      console.log('Champs requis')
    }
  }
}
