import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  han = {name: 'Han Solo', isJedi: false}
  leia = {name: 'Leia', isJedi: false}
}
