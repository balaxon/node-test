export interface Car {
  color: string;
  id: number;
  name: string;
}

export interface SmallCar {
  color: string;
  name: string;
}

export interface Engine {
  velocity: number;
  distance: number;
}

export interface ElementInterface {
  tag: string;
  id?: string;
  classNote?: string;
  content?: string;
  disable?: boolean;
}

export interface InputElement {
  type: string;
  id?: string;
  classNote?: string;
  value?: string;
  content?: string;
  name?: string;
  disable?: boolean;
}

export interface TimeSpeed {
  time: number;
  speed: number;
}

export interface GetWinners {
  page: number;
  limit?: number;
  sort?: string;
  order?: string;
}

export interface Winners {
  id: number;
  wins: number;
  time: number;
}

export interface UpdateWinner {
  wins: number;
  time: number;
}
