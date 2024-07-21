import type { IItems } from '@/types/items.interface'
import axios from 'axios'

export const ItemService = {
  async getAll() {
    const response = await axios.get<IItems[]>('http://localhost:3000/items')
    return response.data
  },
  async decreaseCount(id: string, count: number) {
    if (count > 1) {
      const response = await axios.patch(`http://localhost:3000/items/${id}`, {
        count: count
      })
      return response.data[0]
    } else {
      const response = await axios.delete(`http://localhost:3000/items/${id}`)

      return response.data[0]
    }
  },
  async getById(id: string) {
    const response = await axios.get<IItems[]>(`http://localhost:3000/items/${id}`)
    console.log(response.data[0])
    return response.data[0]
  }

  //   async create(data: IItemsData) {
  //     return axios.post('http://localhost:3000/items', data)
  //   }
}
