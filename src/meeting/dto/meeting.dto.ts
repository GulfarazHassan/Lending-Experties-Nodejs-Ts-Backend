export interface CreateMeetingDto {
  user_id?: string;
  finance_user_id?: string;
  type_to_discuss?: string;
  description?: string;
  upload_documents?: [string];
  meeting_status?: string;
  meeting_id?: Number;
}
