import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private afs: AngularFirestore) {}

  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category      
    }
    let subCategoryData = {
      subCategory: 'subCategory1'      
    }
    
    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);
      this.afs.collection('categories').doc(docRef.id).collection('subcategoreis').add(subCategoryData).then(docRef1 => {
        console.log(docRef1);
          this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(docRef2 => {
            console.log('Second level subcategory saved successfully');
          })       
      })
    }).catch(err => {
      console.log(err);
    })
  }
}
