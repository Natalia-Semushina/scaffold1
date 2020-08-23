import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructuralNgxHide]'
})
export class StructuralNgxHideDirective {

  constructor(private templateRef: TemplateRef<any>, // TemplateRef получает доступ к шаблону директивы
              private viewContainer: ViewContainerRef) {// ViewContainerRef объект рендерера

  }
// с помощью сеттера, к которому применяется декоратор Input,
// получаем из вне некоторое булевое значение,
// которое может использоваться при содании разметки html
  @Input () set appStructuralNgxHide(condition: boolean) {
    // если condition = true,
    if (!condition){
      // то производим рендеринг шаблона через вызов
      this.viewContainer.createEmbeddedView(this.templateRef);
      // на веб-странице появится элемент, к которому применена директива
    } else {
      // иначе, удаляем элемент из разметки с помощью
      this.viewContainer.clear();
    }
  }
}
