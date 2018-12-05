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
import { Banner2Component } from '../banner2/banner2.component';

// ! ngTemplateOutlet - directive used to place content in some container
// ! *ngComponentOutlet - directive used to display selected component in this node element

@Component({
  selector: 'app-item',
  template: `
    <div>
      <div appHost ></div>
      <div #host2></div>

      <ng-container *ngComponentOutlet="myComponent">
      </ng-container>

      <h2>item works!</h2><br>
      <ng-content selector="h1"></ng-content>
      <ng-content selector="main"></ng-content>

      <ng-template #template>
        <h1 appColory #c="appColory">Interesting Template</h1>
        <button (click)="c.changeColor('Green')">Do green!</button>
      </ng-template>

      <ng-container *ngTemplateOutlet="template">
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

  public myComponent;

  // ! Content decorators
  @ContentChild('h') headerElement: ElementRef;
  @ContentChild(NestedComponent) nestedComponent: NestedComponent; // * get component instance  from ng - content

  // * get query list of components
  @ContentChildren(NestedComponent, { read: NestedComponent }) nestedComponents: QueryList<NestedComponent>;
 //  @ContentChildren(NestedComponent) nestedComponents: QueryList<NestedComponent>; // * get query list of components

  // ! View decorators
  @ViewChild(HostDirective) host: HostDirective;
  @ViewChild('host2', { read: ViewContainerRef }) host2: ViewContainerRef;
 // @ViewChildren()

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private view: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    // ! Called after content init
  }

  ngAfterContentInit(): void {
    // console.log(this.headerElement.nativeElement);
    // console.log(this.nestedComponent.doSomeThing());
    // console.log(this.nestedComponents.toArray().forEach(item => item.doSomeThing()));
  }

  ngOnInit() {
    this.myComponent = BannerComponent;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    // this.view.createComponent(componentsFactory);
    const component = this.host.view.createComponent(componentFactory); // * Show banner component inside element with a appHost directive;
    console.log('Host2:', this.host2);

    const component2 = this.host2.createComponent(componentFactory); // * Show banner component inside node element

    setTimeout(() => {
      component.instance.banner = 'ALARM DATA Change!';
      component2.instance.banner = 'All data in safe';
    }, 1000);

    setTimeout(() => {
      this.myComponent = Banner2Component;
    }, 2000);
  }

}
