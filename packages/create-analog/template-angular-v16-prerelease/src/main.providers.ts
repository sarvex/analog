/**
 * Common providers shared with client and server-side.
 */

import { Provider } from '@angular/core';
import { provideFileRouter } from '@analogjs/router';

export const mainProviders: Provider = [provideFileRouter()];
