export class CreateGameDto {
  name: string;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
  categories: number[];
}
