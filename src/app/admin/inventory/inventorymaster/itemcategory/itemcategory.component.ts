import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericApiService } from '../../../../service/generic-api-service.service';

declare var $: any;

@Component({
  selector: 'app-itemcategory',
  templateUrl: './itemcategory.component.html',
  styleUrls: ['./itemcategory.component.css']
})
export class ItemcategoryComponent implements OnInit {

  itemcategoryForm: FormGroup;
  itemGroups: any[] = [];
  itemcategories: any[] = [];
  itemcategoriesFilteredList: any[] = [];
  submitted = false;
  searchText: string = '';

  constructor(public genericservice: GenericApiService,
    public fb: FormBuilder,
    private toastr: ToastrService) { 

      this.itemcategoryForm = this.fb.group({
        itemGroupId: ['',Validators.required],
        id: [0],
        name: ['', Validators.required],
        description: [''],
        status:[true]
      }
    );
    }

  ngOnInit(): void {
    this.ListItemCategories();
    this.getItemGroups();
  
  }
  ListItemCategories() {
    this.genericservice.getList('').subscribe((data: any) => {
      console.log('Categories');
      
      this.itemcategoriesFilteredList = this.itemcategories = data;
    });
} 
getItemGroups() {
  this.genericservice.getList('').subscribe((data: any) => {
    
    this.itemGroups = data;
  });
} 
// searchItems(searchString){
//   this.itemcategoriesFilteredList = this.itemcategories.filter(x =>
//     x.name.toLowerCase().indexOf(searchString.trim().toLowerCase()) !== -1)
// }
onKeyUpEvent(event: any) {
  this.filter(event.target.value);
}

filter(keyword: string) {
  if ( keyword === '') {
    this.itemcategoriesFilteredList = this.itemcategories;
  } else {
  this.itemcategoriesFilteredList = this.itemcategories
                              .filter((itemcategory: any) => itemcategory.name.toLocaleLowerCase()
                              .includes(keyword.toLocaleLowerCase())||itemcategory.itemGroupName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
  }
}
get totalRows(): number {
  return this.itemcategoriesFilteredList.length;
}

get f() { return this.itemcategoryForm.controls; }
resetForm() {
  this.submitted = false;
  this.itemcategoryForm = this.fb.group({
    itemGroupId: ['',Validators.required],
    id: [0],
    name: ['', Validators.required],
    // startDate: ['', Validators.required],
    // endDate: ['', Validators.required],
    // isCurrentAcademicYear: ['', Validators.required]
    description: [''],
    status:[true]
  }, {
    // validator:  this.validateDate('startDate', 'endDate')
});
}

submitForm() {
  this.submitted = true;
  if (this.itemcategoryForm.invalid) {
    // if (this.f.endDate.errors.mustMatch) {
    //   this.toastr.warning('End date should not less than start date ', 'WARNING!!!', {
    //     timeOut: 3000
    //   });
    // }
    return;
  }
  if (this.itemcategoryForm.get('id')?.value === 0) {
    
      this.genericservice.postData('' ,this.itemcategoryForm.value).subscribe(res => {
        this.ListItemCategories();
        this.toastr.success('Records has been sucessfully saved', 'SUCCESS!', {
          timeOut: 3000
        });
        // this.submitted = false;
        // this.itemgroupForm.reset();
        this.resetForm();
      });
    
  } else {
    this.genericservice.putData('' ,this.itemcategoryForm.get('id')?.value, this.itemcategoryForm.value).subscribe(res => {
      console.log('Item Category updated!');
      this.ListItemCategories();
      this.toastr.success('Records has been sucessfully updated', 'SUCCESS!', {
        timeOut: 3000
      });
      // this.submitted = false;
      // this.itemgroupForm.reset();
      this.resetForm();
    });
  }
}

updateForm(id: number) {
  this.genericservice.getList('' + id).subscribe((data: any) => {
    
    this.itemcategoryForm = this.fb.group({
      itemGroupId:[data.itemGroupId],
      id: [data.id],
      name: [data.name, Validators.required],
      description: [data.description],
      status: [data.status]
    }, {
      // validator:  this.validateDate('startDate', 'endDate')
  });
  });

}

deleteForm(id: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this.genericservice.deleteData('' ,id).subscribe(res => {
        Swal.fire(
          'Deleted!',
          'Item Category has been deleted.',
          'success'
        );
        this.ListItemCategories();
        this.resetForm();
      });
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    );
    }
  });
}
}
