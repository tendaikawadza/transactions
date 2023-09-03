import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BulkResolveDetailComponent } from "./feature/bulk-resolve-detail.component";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [BulkResolveDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: BulkResolveDetailComponent,
      },
    ]),
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class BulkResolveDetailModule {}
