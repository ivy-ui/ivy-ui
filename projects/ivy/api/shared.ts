import {NgModule,EventEmitter,Directive,Input,Output,ContentChildren,ContentChild,TemplateRef,AfterContentInit,QueryList} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
    selector: 'ivy-header',
    template: '<ng-content></ng-content>'
})
export class Header {}

@Component({
    selector: 'ivy-footer',
    template: '<ng-content></ng-content>'
})
export class Footer {}

@Directive({
    selector: '[ivyTemplate]',
    host: {
    }
})
export class IvyTemplate {

    @Input() type: string = '';

    @Input('ivyTemplate') name: string = '';

    constructor(public template: TemplateRef<any>) {}

    getType(): string {
        return this.name;
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [Header, Footer, IvyTemplate],
    declarations: [Header, Footer, IvyTemplate]
})
export class SharedModule { }
