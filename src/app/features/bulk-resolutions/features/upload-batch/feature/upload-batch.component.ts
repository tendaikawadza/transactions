import { Component, OnInit } from "@angular/core";
import { UploadBatchService } from "../upload-batch.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Papa } from "ngx-papaparse";
import { FileInput } from "ngx-material-file-input";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-upload-batch",
  templateUrl: "./upload-batch.component.html",
  styles: [],
})
export class UploadBatchComponent implements OnInit {
  form = this.fb.group({
    status: "",
    narrative: "",
    references: [[""], Validators.required],
    file: "",
  });

  refs: string[] = [];

  constructor(
    private uploadBatchService: UploadBatchService,
    private parser: Papa,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.form.controls.status.valueChanges.subscribe((value) => {
      this.uploadBatchService
        .bulkResolveCompleted(
          String(value),
          String(this.form.value.narrative),
          this.form.value.references as string[],
        )
        .subscribe((response) => {
          // Handle the response
          console.log(response);
        });
    });
  }

  async onFileInputChange(fileInput: FileInput) {
    const file = fileInput.files[0];
    const csv: string[][] = await new Promise((resolve) =>
      this.parser.parse(file, {
        worker: true,
        complete: function (results) {
          resolve(results.data);
        },
      }),
    );

    this.refs = csv.map((entry) => entry[0]);
    this.form.controls.references.setValue(this.refs);
  }

  onSubmit() {
    if (this.form.valid) {
      const references = this.form.value.references as string[];
      const status = this.form.value.status as string;

      // this.uploadBatchService.sendFormData({}).subscribe({
      //   next: (data) => {},
      // });

      this.router.navigate(["/bulk-resolutions/batch-details"], {
        queryParams: { refs: this.refs.join(",") },
      });
      console.log(status, references);
    }
  }

  onRadioChange(event: any) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    this.uploadBatchService
      .bulkResolveCompleted(
        selectedValue,
        String(this.form.value.narrative),
        this.form.value.references as string[],
      )
      .subscribe((response) => {
        // Handle the response
        console.log(response);
      });
  }
}
