import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teb3Page } from './teb3.page';

const routes: Routes = [
  {
    path: '',
    component: Teb3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
