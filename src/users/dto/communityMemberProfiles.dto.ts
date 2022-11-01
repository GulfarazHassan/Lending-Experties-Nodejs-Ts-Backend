export interface CreateDto {
  email: string;
  user_id: any;
  user_type?: string;
}

export interface UpdateCommunityMemberDto {
  profile_image?: string;
  cover_image?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  birthday?: string;
  city?: string;
  State?: string;
  zipCode?: string;
  income_range?: string;
  income_range_min?: number;
  income_range_max?: number;
  household_size?: number;
  referred_by_nonprofit_church_community?: boolean;
  are_you_bilingual?: boolean;
  phone_number?: string;
  is_phone_number_confirmed?: boolean;
}
