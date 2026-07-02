import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-routing-component',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './routing-component.html',
  styleUrl: './routing-component.css',
})
export class RoutingComponent {}
