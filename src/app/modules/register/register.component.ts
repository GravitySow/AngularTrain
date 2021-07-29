import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  data: form [] = [];
  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', Validators.required],
    });
  }
  onSubmit(){
    if(!this.myForm.invalid){
      let f = new form;
      f.name = this.myForm.controls.name.value;
      f.surname = this.myForm.controls.name.value;
      f.username = this.myForm.controls.name.value;
      f.password = this.myForm.controls.name.value;
      f.confirmpassword = this.myForm.controls.name.value;

      this.data?.push(f);
    }
  }
}

export class form{
  name: String | undefined;
  surname: String | undefined;
  username: String | undefined;
  password: String | undefined;
  confirmpassword: String | undefined;
}