import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "upload-batch",
        loadChildren: async () => (await import("./features/upload-batch")).UploadBatchModule,
      },

      {
        path: "batch-details",
        loadChildren: async () =>
          (await import("./features/bulk-resolve-detail")).BulkResolveDetailModule,
      },
    ]),
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  declarations: [],
  exports: [],
})
export class BulkResolutionModule {}
