export interface UpdateFinancialGuideDto {
  profile_image?: string;
  cover_image?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  birthday?: string;
  city?: string;
  State?: string;
  zipCode?: string;
  is_work_for_some_financial_institute?: boolean;
  employer_name?: string;
  are_you_bilingual?: boolean;
  areas_of_financial_knowledge?: [string];
  phone_number?: string;
  nonprofit_boards_services?: [
    {
      nonprofit_name?: string;
      board_title?: string;
      address?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      is_services_to_51_or_more_lmi_families?: boolean;
      is_board_service_to_church?: boolean;
      is_your_personal_family_church?: boolean;
      is_board_service_to_school?: boolean;
      is_your_children_family_attend_this_school?: boolean;
    }
  ];
}
