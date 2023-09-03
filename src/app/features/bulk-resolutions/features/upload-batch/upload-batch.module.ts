import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadBatchComponent } from "./feature/upload-batch.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../../shared/shared.module";
import { DataTableComponent } from "../../../../shared/ui";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import {
  NgxMatDateAdapter,
  NgxMatDatetimePickerModule,
} from "@angular-material-components/datetime-picker";
import { NgxMatMomentAdapter } from "@angular-material-components/moment-adapter";
import { MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatRadioModule } from "@angular/material/radio";

const MatModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  FormsModule, //Required for form controls
  NgxMatDatetimePickerModule, //Datetime picker module
  MatInputModule, //Required for material input
];

@NgModule({
  declarations: [UploadBatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: UploadBatchComponent,
      },

      /* {
         path: "batch-details",
         component: BulkResolveDetailComponent,
       },*/
    ]),

    ReactiveFormsModule,
    ...MatModules,
    SharedModule,
    DataTableComponent,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    MatProgressBarModule,
    MaterialFileInputModule,
    MatRadioModule,
  ],

  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: NgxMatMomentAdapter, //Moment adapter
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
  ],
})
export class UploadBatchModule {}
