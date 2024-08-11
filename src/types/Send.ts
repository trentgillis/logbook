export type SendType = 'redpoint' | 'flash' | 'fotg';

export type Send = {
  id: number;
  name: string;
  grade: number;
  area: string;
  state: string;
  type: SendType;
  date: number;
};
