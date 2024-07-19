export interface IItems {
  id: string
  color: string
  count: number
}

export interface IItemsData extends Omit<IItems, 'id'> {}
