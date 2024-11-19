import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionManagerModel, MainModule, SubModule } from './subscriptionmanager.model';
import { WebModuleDto, WebsubModuleDto } from '../modle/WebModuleDto';
import { GenericApiService } from '../../../service/generic-api-service.service';

@Component({
  selector: 'app-subscriptionmanager',
  templateUrl: './subscription-manager.component.html',
  styleUrls: ['./subscription-manager.component.css']
})
export class SubscriptionmanagerComponent{
  /******sub checkbox list*******/

  // checkboxesDataList: any = [];
  // item: any = "";
  // /*************************/
  // subscriptionForm: FormGroup =[];
  // form: FormGroup | undefined;
  // selectedModuleIds = '';
  // selectedSubModulesIds = '';
  // submitted = false;
  // currentDate: string="";
  // subscriptions: SubscriptionManagerModel[] = [];
  // subscriptionsfilter: any[]=[];
  // filteredSubscriptions: SubscriptionManagerModel[] = [];
  // modulemasterlist: WebModuleDto[] = [];
  // selectedmasterModules: WebsubModuleDto[] = []
  // mainFilteredModule: MainModule[] = [];
  // selectedModules: MainModule[] = [];
  // mainModule: MainModule[] = [];
  // websubModuleDto: any;

  // constructor(
  //   public fb: FormBuilder,
  //   private toastr: ToastrService,
  //   public subscriptionService: GenericApiService
  // ) { }

  // ListSubscriptionModule() {
  //   this.subscriptionService.getList('/Subscription/GetAllSubscription/').subscribe((data:any) => {
  //     this.subscriptions = data;
  //   });

  // }

  // ListModule(id : number) {
  //   this.modulemasterlist = [];
  //   this.subscriptionService.getList('/WebModule/GetAllWebModule/' + id).subscribe((data: any) => {
  //     var module = data.table;
  //     this.modulemasterlist = module.filter((x:any) => x.menuLevel === 0);

  //     for (let i = 0; i < this.modulemasterlist.length; i++) {
  //       this.websubModuleDto = [];
  //       this.websubModuleDto = module.filter((x: any) => x.parentID === this.modulemasterlist[i].id && x.id !== this.modulemasterlist[i].id);

  //       if (this.websubModuleDto.length > 0) {
  //         this.modulemasterlist[i].subModules = this.websubModuleDto;

  //       }
  //       else {
  //         this.modulemasterlist[i].subModules = [];
  //       }


  //     } 

  //   });
  // }

  // keyPress(event: any) {
  //   const pattern = /[0-9\.]/;
  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (!pattern.test(inputChar) && event.charCode !== '0') {
  //     event.preventDefault();
  //   }
  // }

  // get totalRows(): number {
  //   return this.subscriptions.length;
  // }

  // get f() { return this.subscriptionForm.controls; }

  // resetForm() {
  //   this.submitted = false;
  //   this.subscriptionForm = this.fb.group({
  //     id: [0],
  //     moduleName: ['', Validators.required],
  //     defaultPrice: ['', Validators.required],
  //     subscriptionType: ['', Validators.required],
  //     maintanceCostPercentage: ['', Validators.required],
  //     status: ['true', Validators.required],
  //   });
  //   this.ListModule(0);
  // }

  // private formatDate(date : any) {
  //   const d = new Date(date);
  //   let month = '' + (d.getMonth() + 1);
  //   let day = '' + d.getDate();
  //   const year = d.getFullYear();
  //   if (month.length < 2) { month = '0' + month; }
  //   if (day.length < 2) { day = '0' + day; }
  //   return [day, month, year].join('-');
  // }

  // setCurrentDate() {
  //   const x = new Date();
  //   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   this.currentDate = days[x.getDay()] + ' ' + this.formatDate(x);
  // }

  // onModuleKeyUp(event: any) {
  //   this.filter(event.target.value);
  // }

  // filter(keyword: any) {
  //   if (keyword === '') {
  //     this.mainFilteredModule = this.mainModule;
  //   } else {
  //     this.mainFilteredModule = this.mainModule
  //       .filter((module: MainModule) =>
  //         module.moduleName.toLocaleLowerCase()
  //           .includes(keyword.toLocaleLowerCase())
  //       );
  //   }
  // }

  // onKeyUp(event: any) {
  //   this.filterSearch(event.target.value);
  // }

  // filterSearch(keyword: any) {
  //   if (keyword === '') {
  //     this.mainFilteredModule = this.mainModule;
  //   } else {
  //     this.mainFilteredModule = this.mainModule
  //       .filter((module: MainModule) =>
  //         module.moduleName.toLocaleLowerCase()
  //           .includes(keyword.toLocaleLowerCase())
  //       );
  //   }
  // }

  // submitForm() {

  //   this.submitted = true;

  //   if (this.subscriptionForm.invalid) {
  //     return;
  //   }

  //   this.selectedModules = [];

  //   for (let i = 0; i < this.modulemasterlist.length; i++) {

  //     if (this.modulemasterlist[i].subModules.length == 0) {
  //       this.selectedmasterModules.push(this.modulemasterlist[i])
  //     }
  //     else {

  //       for (let k = 0; k < this.modulemasterlist[i].subModules.length; k++) {
  //         this.selectedmasterModules.push(this.modulemasterlist[i].subModules[k])
  //       }
  //     }



  //   }



  //   if (this.modulemasterlist.length === 0) {
  //     this.toastr.warning('Please select Module', 'WARN!', {
  //       timeOut: 3000
  //     });
  //     return;
  //   }

  //   const subscription = {} as SubscriptionManagerModel;
  //   subscription.id = this.subscriptionForm.get('id').value ;
  //   subscription.moduleName = this.subscriptionForm.get('moduleName').value;
  //   subscription.defaultPrice = this.subscriptionForm.get('defaultPrice').value;
  //   subscription.maintanceCostPercentage = this.subscriptionForm.get('maintanceCostPercentage').value;
  //   subscription.status = this.subscriptionForm.get('status').value;
  //   subscription.subscriptionType = this.subscriptionForm.get('subscriptionType').value;
  //   subscription.subscriptionDetails = this.selectedModules;
  //   subscription.SubscriptionModuleDetails = this.selectedmasterModules


  //   if (this.subscriptionForm.get('id').value === 0) {
  //     console.log(this.subscriptionForm.value);
  //     this.subscriptionService.create(subscription).subscribe(res => {
  //       console.log('Employee created!');
  //       this.ListSubscriptionModule();
  //       this.toastr.success('Records has been sucessfully saved', 'SUCCESS!', {
  //         timeOut: 3000
  //       });
  //       this.submitted = false;
  //       this.resetForm();
  //     });
  //   } else {
  //     this.subscriptionService.update(this.subscriptionForm.get('id').value, subscription).subscribe(res => {
  //       console.log('Employee updated!');
  //       this.ListSubscriptionModule();
  //       this.toastr.success('Records has been sucessfully updated', 'SUCCESS!', {
  //         timeOut: 3000
  //       });
  //       this.submitted = false;
  //       this.resetForm();
  //     });
  //   }


  // }

  // updateForm(id: number) {
  //   this.subscriptionService.getList('/Subscription/' + id).subscribe((data: any) => {
  //     this.ListModule(id)
 
  //     this.subscriptionForm = this.fb.group({
  //       id: [data.id],
  //       moduleName: [data.moduleName, Validators.required],
  //       defaultPrice: [data.defaultPrice, Validators.required],
  //       subscriptionType: [data.subscriptionType, Validators.required],
  //       maintanceCostPercentage: [data.maintanceCostPercentage, Validators.required],
  //       status: [data.status.toString(), Validators.required],
  //     });


  //   });
  //   // this.resetForm();
  //   // this.ListServices();
  // }

  // checkAllCheckBox(ev:any, position: any) {
  //   this.modulemasterlist[position].subModules.forEach(x => x.checked = ev.target.checked);
  // }

  // isAllCheckBoxChecked(position:any) {
  //   return this.modulemasterlist[position].subModules.every(p => p.checked);
  // }

  // checkEveryCheckBox(ev:any) {
  //   this.modulemasterlist.forEach(x => {
  //     x.checked = ev.target.checked;
  //     x.subModules.forEach(y => y.checked = ev.target.checked);
  //   });
  // }

  // isEveryCheckBoxChecked() {
  //   return this.mainModule.every(p => p.checked);
  // }

  // getNextLetter(num:any): string {
  //   const code: number = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charCodeAt(num);
  //   return String.fromCharCode(code);
  // }
  // ngOnInit(): void {
  //   this.ListSubscriptionModule();
  //   this.ListModule(0);
  //   this.setCurrentDate();
  //   this.subscriptionForm = this.fb.group({
  //     id: [0],
  //     moduleName: ['', Validators.required],
  //     defaultPrice: ['', Validators.required],
  //     subscriptionType: ['', Validators.required],
  //     maintanceCostPercentage: ['', Validators.required],
  //     status: ['true', Validators.required],
  //   });

  // }

}
