import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { featureLazyRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureLazyRoutes)],
  declarations: [LazyParentComponent],
})
export class FeatureLazyModule {}
