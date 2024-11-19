import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericApiService } from '../../../service/generic-api-service.service';
import { WebModuleDto } from '../modle/WebModuleDto';

@Component({
  selector: 'app-modulemaster',
  templateUrl: './modulemaster.component.html',
  styleUrl: './modulemaster.component.css'
})
export class ModulemasterComponent {


  menulevel: number = 0;
  parentID: string = '00000000-0000-0000-0000-000000000000';
  submitted = true;
  userForm: FormGroup [] =[];
  searchKeyword = '';
  pagetitle: string='';
  constructor(
    public router: Router,
    public route: ActivatedRoute, private toastr: ToastrService,
    public _genericApiService: GenericApiService,
  ) { }
 
  modulemasterFilteredList: WebModuleDto[] = [];
  modulemasterlist: WebModuleDto[]=[];
  modulemaster: WebModuleDto =
    {
      id: '00000000-0000-0000-0000-000000000000',
      moduleName: '',
      isActive: true,
      url: '',
      icon: '',
      mSno: 0,
      parentID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      menulevel: 0,
      checked: true,
      subModules: [],
      invalid: undefined
    }



  ngOnInit(): void {



    this.menulevel = this.route.snapshot.params['Id'];

    if (this.menulevel == 0) {
      this.parentID = '00000000-0000-0000-0000-000000000000';
      this.ListModule();
    }

    else {
      this.parentID = this.route.snapshot.queryParams['parentID'];
      this.ListModule();
    }

    this.ListwebMenu();
    

    
  }



  resetForm() {
    this.submitted = true;
    this.modulemaster.moduleName = '';
    this.modulemaster.url = '';
    this.modulemaster.icon = '';
    this.modulemaster.mSno = 0;
    this.ListModule();

  }
  searchKeyUp(evt: any) {
    if (this.searchKeyword === '') {
      this.modulemasterFilteredList = this.modulemasterlist;
    } else {
      this.modulemasterFilteredList = this.modulemasterlist
        .filter((module: WebModuleDto) => module.moduleName.toLocaleLowerCase()
          .includes(this.searchKeyword.toLocaleLowerCase()));
    }
  }

  onKeyUpEvent(event: any) {
    this.filter(event.target.value);
  }

  filter(keyword: any) {
    if (keyword === '') {
      this.modulemasterFilteredList = this.modulemasterlist;
    } else {
      this.modulemasterFilteredList = this.modulemasterlist
        .filter((module: WebModuleDto) => module.moduleName.toLocaleLowerCase()
          .includes(keyword.toLocaleLowerCase()));
    }
  }

  ListModule() {
    this._genericApiService.getList('api/WebModule/GetWebModule/' + this.menulevel + '/' + this.parentID)
      .toPromise().then((data: any) => {
        this.modulemasterFilteredList = this.modulemasterlist = data.table;
        console.log(this.modulemasterFilteredList);

      }).catch(
        error => {
          // this.alertService.error(error);
        }
    );

   
  }

  ListwebMenu() {
    this._genericApiService.getList('api/WebModule/GetInstitutionWebModule/1')
      .toPromise().then((data: any) => {
        
        console.log(data);

      }).catch(
        error => {
          // this.alertService.error(error);
        }
      );


  }
  updateForm(module: any) {

    this.submitted = false;
    this.modulemaster = module;
    this.modulemaster.mSno = module.mSno;
  }

  addsubmodule(module:any) {

    this.menulevel = module.menuLevel+1;
    this.parentID = module.id;
    this.pagetitle = module.moduleName;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'parentID': this.parentID      
      }
    };
    this.router.navigate(['erpadmin/erpadmin/configuration/modulemenu/' + this.menulevel], navigationExtras );

    this.ListModule();
  


  }

  resetTable() {
    this.modulemasterFilteredList = this.modulemasterlist;
  }
  search() {


    if (this.searchKeyword === '') {
      this.modulemasterFilteredList = this.modulemasterlist;
    } else {
      this.modulemasterFilteredList = this.modulemasterlist
        .filter((module: WebModuleDto) => module.moduleName.toLocaleLowerCase()
          .includes(this.searchKeyword.toLocaleLowerCase()));
    }
  }

  submitForm() {
    debugger;
    this.submitted = true;
    if (this.modulemaster.id === '00000000-0000-0000-0000-000000000000') {
      this.modulemaster.parentID = this.parentID;
      this.modulemaster.menulevel = this.menulevel;
      this._genericApiService.postData('api/WebModule/', this.modulemaster)
        .toPromise().then((x: any) => {
          this.toastr.success('Records has been sucessfully saved', 'SUCCESS!', {
            timeOut: 3000
          });
          this.ListModule();
          this.submitted = true;
          this.resetForm();

        }).catch(
          error => {
            // this.alertService.error(error);
          }
        );

    }
    else {
      this.modulemaster.parentID = this.parentID;
      this.modulemaster.menulevel = this.menulevel;
      this._genericApiService.putData('/WebModule/', this.modulemaster, this.modulemaster.id)
        .toPromise().then((x: any) => {
          this.toastr.success('Records has been sucessfully updated', 'SUCCESS!', {
            timeOut: 3000
          });
          this.ListModule();
          this.submitted = true;
          this.resetForm();

       }).catch(
        error => {
this.toastr.error(error);
         }
      );

   }

   }
}
