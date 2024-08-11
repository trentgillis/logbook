export type SendRating = 1 | 2 | 3 | 4 | 5;

export type SendType = 'redpoint' | 'flash' | 'fotg';

export type Send = {
  id: number;
  name: string;
  grade: number;
  area: string;
  state: string;
  type: SendType;
  rating: SendRating;
  date: number;
};
