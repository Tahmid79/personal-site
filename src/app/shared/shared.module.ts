import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";

const exports:any = [MaterialModule] ;


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: exports
})
export class SharedModule { }
