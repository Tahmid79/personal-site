import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AntDesignModule } from './ant-design/ant-design.module';

const exports:any = [MaterialModule, SharedComponentsModule,FlexLayoutModule, AntDesignModule] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: exports
})
export class SharedModule { }
