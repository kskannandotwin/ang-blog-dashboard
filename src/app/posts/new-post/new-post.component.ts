import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink: string = '';
  imgSrc: any = './assets/placeholder-image.png';
  selectedImg: any;

  categories: Array<object> | any;
  postForm: FormGroup | any;

  constructor(private categoryService: CategoriesService, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: [''],
      permalink: [{value: '', disabled: true}],
      excerpt: [''],
      category: [''],
      postImg: [''],
      content: ['']
    });
  }

  ngOnInit() {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val;
    });
  }

  onTitleChanged($event: any) {
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imgSrc = e.target.result;
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

}
