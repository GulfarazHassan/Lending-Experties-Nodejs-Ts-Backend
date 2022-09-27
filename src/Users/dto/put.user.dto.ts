export interface PutUserDto {
  email: string;
  password: string;
  user_type: string;
  community_member_profile_id: string;
  business_owners_profile_id: string;
  non_profit_organisation_profile_id: string;
  financial_guide_profile_id: string;
  business_owner_profile_id: string;
}
