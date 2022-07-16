import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/usersetting';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Abi',
    emailOffers: true,
    interfaceStyle: "medium",
    subscriptionType: "Lifetime",
    notes: "Some Notes...."
  }

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor() { }

  ngOnInit(): void {
  }

}
