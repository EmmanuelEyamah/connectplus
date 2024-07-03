export interface BlogPost {
  _id: string;
  title: string;
  short_desc: string;
  description: string | string[];
  author: string;
  date: string;
  tag: string;
  new: boolean;
  trending: boolean;
  image: string | string[];
}

export interface IServicesSkills {
  title: string;
  description: string;
}
export interface IServicesBenefits {
  title: string;
  description: string;
}

export interface IServicesStep {
  step: string;
  description: string;
}

export interface IServices {
  _id: string;
  title: string;
  short_desc: string;
  description: string;
  skills: IServicesSkills[];
  steps: IServicesStep[];
  benefits: IServicesBenefits[];
}
