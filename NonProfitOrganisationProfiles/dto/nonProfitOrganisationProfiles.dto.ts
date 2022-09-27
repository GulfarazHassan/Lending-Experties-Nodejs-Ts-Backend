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
  nonprofit_name?: string;
  organization_ein?: string;
  your_title?: string;
  is_services_to_51_or_more_lmi_families?: boolean;
  phone_number?: string;
}
