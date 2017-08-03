//app.component.ts and app.component.html form the root component i the architecture.
//the root component's ts file contains metadata, methods, properties basically the logic stuff while the html file is the template


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //you can write direct code in ` ` also (inline template)
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
