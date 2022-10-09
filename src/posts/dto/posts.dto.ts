export interface CreatePostDto {
  post_type?: string;
  user_id?: string;
  post_title?: string;
  post_description?: string;
  post_images_link?: [string];
}

export interface UpdatePostDto {
  post_type?: string;
  post_title?: string;
  post_description?: string;
  post_images_link?: [string];
}

export interface UpdatePostCommentsLikesDto {
  post_comments?: [
    {
      user_id: string;
      text: string;
    }
  ];
  post_total_comments_count?: number;
  post_likes?: [string];
  post_total_likes_count?: number;
}
