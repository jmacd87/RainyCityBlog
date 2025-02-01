type StoryTextItem =
  | string
  | { content: string; title?: string; quote?: string };

export interface Post {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  storyText: StoryTextItem[];
  imageUrl: string;
  thumbnail: string;
}
