type AnimeTitlesObject = {
  en: string;
  en_jp: string;
  ja_jp: string;
}

type AnimeImageObject = {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: {
    dimensions: {
      tiny: {
        width: string,
        height: string,
      },
      small: {
        width: string,
        height: string,
      },
      medium: {
        width: string,
        height: string,
      },
      large: {
        width: string,
        height: string,
      },
      original: {
        width: string,
        height: string,
      }
    }
  }
}

export type AnimeAttributes = {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffSet: number;
  titles: AnimeTitlesObject;
  canonicalTitle: string;
  abbreviatedTitles: Array<string>;
  averageRating: string;
  ratingFrequencies: object;
  userCount: number;
  favoritesCount: number;
  startData: string;
  endData: string;
  popularityRank: number;
  ageRating: any; // TODO: Enum type?
  ageRatingGuide: string;
  status: any; // TODO: Enum type?
  tba: string;
  posterImage: AnimeImageObject;
  coverImage: AnimeImageObject;
  episodeCount: number;
  episodeLength: number;
  youtubeVidId: string;
  showType: any; // TODO: Enum type?
  nsfw: boolean;
}

export type AnimeData = {
  id: string;
  links: {
    self: string
  };
  attributes: AnimeAttributes;
  relashionships: any; // TODO?: Huge object
  type: string;
}

export type InitialStateAnimes = {
  loading: string;
  data: Array<AnimeData>; // TODO: Type checking
  errors: undefined | string; // TODO: Type checking
  next: string;
}

export interface RootState {
  _persist: {
    rehydrated: boolean,
    version: number,
  },
  animes: InitialStateAnimes,
}