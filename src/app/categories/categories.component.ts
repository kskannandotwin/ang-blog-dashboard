import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category
    }
    console.log(categoryData);
  }
}
