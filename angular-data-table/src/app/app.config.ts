// import { provideHttpClient } from '@angular/common/http';
// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Add this line

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Add this line
  ]
};