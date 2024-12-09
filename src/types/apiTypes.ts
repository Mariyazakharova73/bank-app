export interface ConversionRates {
  [currency: string]: number;
}
export interface CurrencyApiResponse {
  conversion_rates: ConversionRates;
}

interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsApiResponse {
  articles: Article[];
}
