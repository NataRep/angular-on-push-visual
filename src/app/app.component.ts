import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
// import { DynamicComponent } from './components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lean Angular Course 2025';

  private dynamicComponents: ComponentRef<unknown>[] = [];
  private cachedComponent: any = null;

  @ViewChild('wrapper', { read: ViewContainerRef }) private wrapper!: ViewContainerRef;

  constructor() {}

  /*
//Синхронный способ создания динамического компонента

  showComponent() {
     const componentRef = this.wrapper.createComponent(DynamicComponent);
     this.dynamicComponents.push(componentRef);
  }

  ngAfterViewInit() {
    const newComponent = this.wrapper.createComponent(DynamicComponent);
    newComponent.setInput('name', 'new name');
  }*/

  //Способ создания динамического компонента с асинхронной подргузкой для тяжелых бандлов
  async asyncShowComponent() {
    if (!this.cachedComponent) {
      const { DynamicComponent } = await import('./components/dynamic/dynamic.component');
      this.cachedComponent = DynamicComponent;
    }

    const componentRef = this.wrapper.createComponent(this.cachedComponent);
    this.dynamicComponents.push(componentRef);
  }

  destroyAllDynamicComponents() {
    this.dynamicComponents.forEach((component) => component.destroy());
    this.dynamicComponents = [];
  }

  ngOnDestroy() {
    this.destroyAllDynamicComponents();
  }
}
