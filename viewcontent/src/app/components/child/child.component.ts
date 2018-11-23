import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends ItemComponent implements OnInit {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    view: ViewContainerRef
  ) {
    super(componentFactoryResolver, view);
  }

  ngOnInit() {
  }

}
