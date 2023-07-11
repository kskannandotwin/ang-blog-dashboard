import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryArray: Array<object> | any;
  formCategory: string | undefined;
  formStatus: string = 'Add';
  categoryID: string | undefined;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    this.categoryService.loadData().subscribe((val: any) => {
      console.log(val);
      this.categoryArray = val;
    });
  }

  onSubmit(formData: any) {
    let categoryData: Category = {
      category: formData.value.category
    }

    if (this.formStatus == 'Add') {
      this.categoryService.saveData(categoryData);
      formData.reset();
    } else if (this.formStatus == 'Edit') {
      this.categoryService.updateData(this.categoryID, categoryData);
      formData.reset();
      this.formStatus = 'Add';
    }




    // let subCategoryData = {
    //   subCategory: 'subCategory1'      
    // }

    // this.afs.collection('categories').add(categoryData).then(docRef => {
    //   console.log(docRef);
    //   // this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData)
    //   this.afs.collection('categories').doc(docRef.id).collection('subcategoreis').add(subCategoryData).then(docRef1 => {
    //     console.log(docRef1);

    //     this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`).collection('subsubcategories').add(subCategoryData)
    //     // this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}/subsubcategories/`).add(subCategoryData)

    //       this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(docRef2 => {
    //         console.log('Second level subcategory saved successfully');
    //       })       
    //   })
    // }).catch(err => {
    //   console.log(err);
    // })
  }

  onEdit(category: any, id: any) {
    this.formCategory = category;
    this.formStatus = 'Edit';
    this.categoryID = id;
  }

  onDelete(id: any) {
    this.categoryService.deleteData(id);
  }
}
