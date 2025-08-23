import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from "./shared/components/app-footer/app-footer.component";
import { TopMenuComponent } from "./country/components/top-menu/top-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFooterComponent, TopMenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'country-app';
}
