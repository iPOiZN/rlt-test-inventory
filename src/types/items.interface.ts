export interface IItems {
  id: string
  color: string
  count: number
  position: number
}

export interface IItemsData extends Omit<IItems, 'id'> {}
