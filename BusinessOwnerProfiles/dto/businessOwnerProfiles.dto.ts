export interface CreateDto {
  email: string;
  user_id: any;
  user_type?: string;
}

export interface UpdateDto {
  profile_image?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  birthday?: string;
  city?: string;
  State?: string;
  zipCode?: string;
  business_name?: string;
  business_address?: string;
  business_ein?: string;
  anual_revenue?: string;
  business_owned?: string;
  are_you_bilingual?: boolean;
  other_languages?: [string];
  phone_number?: string;
}
