import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpFileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, decimals?: number) {
    if (size === 0) {
      return '0 Bytes';
    }
    const base = 1024;
    const decimalPlace = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(size) / Math.log(base));
    const formattedResult =
      Math.ceil((size / Math.pow(base, i)) * Math.pow(10, decimalPlace)) /
      Math.pow(10, decimalPlace);
    return `${formattedResult.toFixed(decimalPlace)} ${sizes[i]}`;
  }
}
