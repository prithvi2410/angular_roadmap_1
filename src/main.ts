import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { MainComponent } from './app/Component/main-component/main-component';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
