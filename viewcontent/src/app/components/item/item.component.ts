import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
  ContentChildren,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { NestedComponent } from '../nested/nested.component';
import { BannerComponent } from '../banner/banner.component';
import { HostDirective } from '../../directives/host.directive';

// ! ngTemplateOutlet - directive used to place content in some container

@Component({
  selector: 'app-item',
  template: `
    <div>
      <div appHost ></div>

      <h2>item works!</h2><br>
      <ng-content selector="h1"></ng-content>
      <ng-content selector="main"></ng-content>

      <ng-template #t>
        <h1 appColory #c="appColory">Interesting Template</h1>
        <button (click)="c.changeColor('Green')">Do green!</button>
      </ng-template>

      <ng-container *ngTemplateOutlet="t">
      </ng-container>

      <ul>
        <li *ngFor="let item of [1, 2, 3, 4, 5]">
          <h2 *appDelay="item * 1000">Structural Directive</h2>
        </li>
      </ul>


    </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  // ! Content decorators
  @ContentChild('h') headerElement: ElementRef;
  @ContentChild(NestedComponent) nestedComponent: NestedComponent; // * get component instance  from ng - content

  // * get query list of components
  @ContentChildren(NestedComponent, { read: NestedComponent }) nestedComponents: QueryList<NestedComponent>;
 //  @ContentChildren(NestedComponent) nestedComponents: QueryList<NestedComponent>; // * get query list of components

  // ! View decorators
  @ViewChild(HostDirective) host: HostDirective;
 // @ViewChildren()

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private view: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    // ! Called after content init
  }

  ngAfterContentInit(): void {
    console.log(this.headerElement.nativeElement);
    console.log(this.nestedComponent.doSomeThing());
    console.log(this.nestedComponents.toArray().forEach(item => item.doSomeThing()));
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    // this.view.createComponent(componentsFactory);
    this.host.view.createComponent(componentFactory);
  }

}
