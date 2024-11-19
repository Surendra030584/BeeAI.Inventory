import { WebsubModuleDto } from "../modle/WebModuleDto";


export interface SubscriptionManagerModel {
  id: number;
  moduleName: string;
  defaultPrice: string;
  subscriptionType: string;
  maintanceCostPercentage: string;
  status: string;
  subscriptionDetails: MainModule[];
  SubscriptionModuleDetails: WebsubModuleDto[];
}

export interface MainModule {
  id: number;
  moduleName: string;
  subModuleNames: string;
  checked?: boolean;
  subModules: SubModule[];
}

export interface SubModule {
  subModuleName: string;
  checked?: boolean;
}




