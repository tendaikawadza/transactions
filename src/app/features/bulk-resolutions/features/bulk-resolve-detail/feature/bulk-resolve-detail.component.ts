import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bulk-resolve-detail",
  templateUrl: "./bulk-resolve-detail.component.html",
  styles: [],
})
export class BulkResolveDetailComponent implements OnInit {
  refs: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.refs = this.route.snapshot.queryParams["refs"].split(",");
  }
}
