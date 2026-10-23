export type AccountCredentials = {
  emailAddress: string;
  userName: string;
  password: string;
};

export interface AccountInformation {
  title: 'mr' | 'mrs';
  dateOfBirth: Date;
  newsletter?: boolean;
  specialOffers?: boolean;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}