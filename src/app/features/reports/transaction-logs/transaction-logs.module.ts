import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionLogsComponent } from "./features/transaction-logs.component";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { DataTableComponent } from "../../../shared/ui";
import { SharedModule } from "../../../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import {
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter,
  NgxMatDateFormats,
  NgxMatDatetimePickerModule,
} from "@angular-material-components/datetime-picker";
import { NgxMatMomentAdapter } from "@angular-material-components/moment-adapter";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { Ng2SearchPipeModule } from "ng2-search-filter";

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

const MY_NGX_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS",
  },
  display: {
    dateInput: "DD.MM.yyyy HH:mm",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@NgModule({
  declarations: [TransactionLogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: TransactionLogsComponent },

      {
        path: "transactions-log",
        component: TransactionLogsModule,
      },
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
  ],

  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: NgxMatMomentAdapter, //Moment adapter
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: MY_NGX_DATE_FORMATS },
  ],
})
export class TransactionLogsModule {}
