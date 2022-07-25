import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';

const exports: any = [NzImageModule] ;


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: exports
})
export class AntDesignModule { }
