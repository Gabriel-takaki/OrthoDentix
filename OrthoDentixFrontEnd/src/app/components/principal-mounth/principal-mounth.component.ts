import { Component, OnInit } from '@angular/core';

export interface PacienteInformation {
  id: 'string',
  name: 'string',
  lastName: 'string',
  age: 'number',
  archInfo: 'array'
}

export interface ArchData {
  number: 'number',
  name: 'string',
  region: 'string',
  ageGroup: 'number',
}

@Component({
  selector: 'app-principal-mounth',
  templateUrl: './principal-mounth.component.html',
  styleUrls: ['./principal-mounth.component.css']
})
export class PrincipalMounthComponent implements OnInit {

  pacienteInformation: PacienteInformation = {
    id: 'string',
    name: 'string',
    lastName: 'string',
    age: 'number',
    archInfo: 'array'
  }

  archData : any[] =[
    {
      number: 11,
      name: 'Incisivo Central Superior Direito', 
      region: 'Superior Direito',
    },
    {
      number: 12,
      name: 'Incisivo Lateral Superior Direito',
      region: 'Superior Direito',
    },
    {
      number: 13,
      name: 'Canino Superior Direito',
      region: 'Superior Direito',
    },
    {
      number: 14,
      name: 'Primeiro Pré-Molar Superior Direito',
      region: 'Superior Direito',
    }
  ]

  // 0 is for 0-12 years old, 1 to 12 to 18 and 2 to 18 to 100

  pacientAgeGroup: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.treatePacientData();
  }


  treatePacientData() {
  }

}
