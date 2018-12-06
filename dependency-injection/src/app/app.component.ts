import { Component, Inject } from '@angular/core';
import { UserService } from './services/user.service';

const URL_TOKEN = 'some_url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(
    private userService: UserService,
    // @Inject(URL_TOKEN) base_url
  ) {}
}
