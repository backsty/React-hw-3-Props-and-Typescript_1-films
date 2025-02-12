export interface IMovieCard {
  id: number;
  title: string;
  genre: string;
  rating: number;
  price: number;
  image: string;
  isLiked?: boolean;
}
