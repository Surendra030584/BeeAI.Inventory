



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GenericApiService } from '../../../../service/generic-api-service.service';
import Swal from 'sweetalert2'; 
 
@Component({
  selector: 'app-itemgroup' ,
  templateUrl:'./itemgroup.component.html',   
  styleUrls: ['./itemgroup.component.css']
})
export class ItemgroupComponent {
  
  itemgroupForm : FormGroup;
  itemgroups: any[] = []; 
  itemgroupFilteredList: any[] = [];   
  submitted = false;
  searchText: string =''; 
  constructor(
    public fb: FormBuilder,
    private toastr: ToastrService,  public _genericApiService: GenericApiService,){

      this.itemgroupForm = this.fb.group({
        id: [0], 
        name: ['', Validators.required],
        description: [''],
        status:[true]
      } 
    );

  }
 
  ngOnInit(): void {
    
      this.ListItemGroup();
      
   
  }
  ListItemGroup() {
    
    this._genericApiService.getList('api/itemgroups').subscribe((data: any) => {
      this.itemgroupFilteredList = this.itemgroups = data;
    });
}
onKeyUpEvent(event: any) {
  this.filter(event.target.value);
}

filter(keyword: any) {
  if ( keyword === '') {
    this.itemgroupFilteredList = this.itemgroups;
  } else {
  this.itemgroupFilteredList = this.itemgroups
                              .filter((itemgroup: any) => itemgroup.name.toLocaleLowerCase()
                              .includes(keyword.toLocaleLowerCase()));
  }
}
get totalRows(): number {
  return this.itemgroupFilteredList.length;
}
get f() { return this.itemgroupForm.controls; }
resetForm() {
  this.submitted = false;
  this.itemgroupForm = this.fb.group({
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
  if (this.itemgroupForm.invalid) {
    // if (this.f.endDate.errors.mustMatch) {
    //   this.toastr.warning('End date should not less than start date ', 'WARNING!!!', {
    //     timeOut: 3000
    //   });
    // }
    return;
  }
  if (this.itemgroupForm.get('id')?.value === 0) {
    
      this._genericApiService.postData('api/itemgroups/',JSON.stringify(this.itemgroupForm.value)).subscribe(res => {
        this.ListItemGroup();
        this.toastr.success('Records has been sucessfully saved', 'SUCCESS!', {
          timeOut: 3000
        });
        // this.submitted = false;
        // this.itemgroupForm.reset();
        this.resetForm();
      });
    
  } else {
    this._genericApiService.putData('api/itemgroups/',this.itemgroupForm.get('id')?.value, this.itemgroupForm.value).subscribe(res => {
      console.log(res);
      this.ListItemGroup();
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
    this._genericApiService.getList('api/itemgroups/'+id).subscribe((data: any) => {
      
      this.itemgroupForm = this.fb.group({
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
    }).then((result: any) => {
      if (result.value) {
        this._genericApiService.deleteData('api/itemgroups/', id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Item Group has been deleted.',
            'success'
          );
          this.ListItemGroup();
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
