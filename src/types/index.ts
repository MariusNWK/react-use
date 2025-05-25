export interface Todo {
  id: number;
  title: string;
  completed?: boolean;
  userId?: number;
}

export interface Tab {
  href: string;
  title: string;
}

export interface DataFetchingOptions {
  revalidate?: number;
  tags?: string[];
  cache?: RequestCache;
}
