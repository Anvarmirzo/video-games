export interface IGame {
  background_image: string;
  name: string;
  id: number;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: IGenre[];
  parent_platforms: IParentPlatform[];
  publishers: IPublishers[];
  ratings: IRating[];
  screenshots: IScreenshots[];
  trailers: ITrailer[];
}

export interface APIResponse<T> {
  results: T[];
}

interface IGenre {
  name: string;
}

interface IParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface IPublishers {
  name: string;
}

interface IRating {
  id: number;
  count: number;
  title: string;
}

export interface IScreenshots {
  image: string;
}

export interface ITrailer {
  data: {
    max: string;
  };
}

