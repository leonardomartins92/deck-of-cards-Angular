import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-not-authenticated',
  templateUrl: './not-authenticated.component.html',
  styleUrls: ['./not-authenticated.component.scss']
})
export class NotAuthenticatedComponent implements OnInit {

    
  authForm = this.formBuilder.group({
    name:'',
    password: ''
  });

  msg='Usuário não autenticado';
  sub='Não possui permissão de ver página';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.authForm.reset();
  }

}
