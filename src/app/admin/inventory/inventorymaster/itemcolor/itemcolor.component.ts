import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { GenericApiService } from '../../../../service/generic-api-service.service';

@Component({
  selector: 'app-itemcolor',
  templateUrl: './itemcolor.component.html',
  styleUrls: ['./itemcolor.component.css']
})
export class ItemcolorComponent implements OnInit {
  ColortypeForm: FormGroup;
  color: any[] = [];
  itemcolorFilteredList: any[] = [];
  submitted = false;

  constructor(
    private genericApiService: GenericApiService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.ColortypeForm = this.fb.group({
      id: [0],
      value: ['', Validators.required],
      description: ['', Validators.required],
      status: [true]
    });
  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(): void {
    this.genericApiService.getList('api/colors').subscribe((data: any) => {
      this.itemcolorFilteredList = this.color = data;
    });
  }

  filter(keyword: string): void {
    this.itemcolorFilteredList = keyword
      ? this.color.filter((item: any) =>
          item.value.toLowerCase().includes(keyword.toLowerCase())
        )
      : this.color;
  }

  onKeyUpEvent(event: any): void {
    this.filter(event.target.value);
  }

  resetForm(): void {
    this.submitted = false;
    this.ColortypeForm.reset({
      id: 0,
      value: '',
      description: '',
      status: true
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.ColortypeForm.invalid) return;

    const formData = this.ColortypeForm.value;

    if (formData.id === 0) {
      this.genericApiService.postData('api/colors', formData).subscribe(() => {
        this.toastr.success('Color created successfully!', 'Success');
        this.getColors();
        this.resetForm();
      });
    } else {
      this.genericApiService.putData( 'api/colors/' , this.ColortypeForm.value, this.ColortypeForm.get('id')?.value).subscribe(() => {
        this.toastr.success('Color updated successfully!', 'Success');
        this.getColors();
        this.resetForm();
      });
    }
  }

  updateForm(id: number): void {
    this.genericApiService.getList('api/colors/' + id).subscribe((data: any) => {
      this.ColortypeForm.patchValue(data);
    });
  }

  deleteForm(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.genericApiService.deleteData( 'api/colors/',id).subscribe(() => {
          this.toastr.success('Color deleted successfully!', 'Success');
          this.getColors();
        });
      }
    });
  }
}
