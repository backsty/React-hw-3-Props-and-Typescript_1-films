import spederman from '@/assets/img/Spider-man has no way home.jpg';
import avengers from '@/assets/img/Marvel Avengers Final.jpeg';
import fastX from '@/assets/img/Fast and Furious 10.png';

export interface IMovie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  price: number;
  image: string;
  isLiked?: boolean;
}

export const movies: IMovie[] = [
  {
    id: 1,
    title: 'Мстители: Финал',
    genre: 'Боевик',
    rating: 5,
    price: 500,
    image: avengers,
    isLiked: false,
  },
  {
    id: 2,
    title: 'Человек-паук: Нет пути домой',
    genre: 'Боевик',
    rating: 5,
    price: 450,
    image: spederman,
    isLiked: false,
  },
  {
    id: 3,
    title: 'Форсаж X',
    genre: 'Боевик',
    rating: 4,
    price: 400,
    image: fastX,
    isLiked: false,
  },
];
