import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

    public nameLower : string = 'juan martín';
    public nameUpper : string = 'JUAN MARTÍN';
    public fullName : string = 'JuAn MaRtín';
}
