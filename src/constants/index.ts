export const conditionMap = new Map ([
  ['not_specified', ''],
  ['new', 'Nuevo'],
  ['used', 'Usado']
])

type routesType = {
  [key: string]: string;
}

export const routes: routesType = {
  home: '/',
  items: '/items',
  itemDetail: '/items/:id' 
}

type RoutesData = Map<string, (params: { [key: string]: string | number }) => string>;

export const routesData: RoutesData = new Map([
  [routes.items, ({ search }) => `/api/items?q=${search}`],
  [routes.itemDetail, ({ id }) => `/api/items/${id}`]
]);

type RoutesTitle = Map<string, (params: { [key: string]: string | number | ItemResult }) => string>;

export const routesTitle: RoutesTitle = new Map([
  [routes.items, ({ search }) => `${search} | Mercado`],
  [routes.itemDetail, ({ data }) => isItemResult(data) ? `${data?.item?.title}` : '']
]);


export type ItemType = {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: boolean,
  neighborhood: string
}


export type SearchResult = {
  author: {
    name: string,
    lastname: string
  },
  categories: string[],
  items: ItemType[]
}

export type ItemResult = Pick<SearchResult, "author"> & {
  item: ItemType & {
    sold_quantity: number
    description: string
  }
}

const isItemResult = (data: any): data is ItemResult => {
  return typeof data === 'object' &&
         data.item !== null &&
         data.description !== null;
}
