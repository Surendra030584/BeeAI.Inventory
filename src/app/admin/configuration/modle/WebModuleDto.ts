
export interface WebModuleDto {
    invalid: any;
    id: string,
    moduleName: string,
    parentID: string,
    menulevel: number,
    mSno: number,
    icon: string,
    url: string,
    isActive: boolean
    checked: boolean
    subModules: WebsubModuleDto[];
  }
  export interface WebsubModuleDto {
    id: string,
    moduleName: string,
    parentID: string,
    menulevel: number,
    mSno: number,
    icon: string,
    url: string,
    isActive: boolean,
    checked: boolean
  
  }
  