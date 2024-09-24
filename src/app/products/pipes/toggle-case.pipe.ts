import { Pipe, PipeTransform } from '@angular/core';

// juan martin | toggleCase = 'JUAN MARTIN'
// JUAN MARTIN | toggleCase = 'juan martin'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ) : string {

    return ( toUpper ) ? value.toUpperCase() : value.toLowerCase();
  }
}
