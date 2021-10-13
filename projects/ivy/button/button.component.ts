import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ivy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input() type: string = 'button';
  @Input() size: 'small'|'medium'|'large' = 'medium';
  @Input() label: string = '';
  @Input() color: 'primary'|'secondary'|'success'|'info'|'warning'|'danger'|'dark' = 'primary';
  @Input() rounded: boolean = false;
  @Input() textUppercase: boolean = true;
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
  @Input() full: boolean = false;
  @Input() loading: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

}
