import { Route } from '@angular/router';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';

export const featureLazyRoutes: Route[] = [
  {
    path: '',
    component: LazyParentComponent,
  },
];
