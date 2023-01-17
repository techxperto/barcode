import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.scss'],
})
export class LectorComponent {

  myForm = new FormGroup({
    texto: new FormControl('')
  })

  @ViewChild("texto") textoField: ElementRef;
  ngAfterViewInit() {
    this.textoField.nativeElement.focus();
  }

  onSubmit() {
    console.warn(this.myForm.value);
    this.myForm.reset()
  }

}
