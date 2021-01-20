import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.sass']
})
export class MainContactComponent implements OnInit {

  sended
  errors

  constructor() {
    this.sended = false
    this.errors = []
  }

  ngOnInit(): void {
  }

  submitForm(event) {
    event.preventDefault()

    fetch("/manage_contact.php", { method: 'POST', body: new FormData(event.target), mode: 'cors', cache: 'default' })
        .then((response) => response.json())
        .then((json) => {
            this.sended = json.sended;
            this.errors = json.errors;
            console.log(json)
        });

    return false
  }

}
