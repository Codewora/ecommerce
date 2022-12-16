
type ICategory = {
  name: string,
  children: string[]
}[]
export const categoryDetails: ICategory = [
  {
    name: 'Clothes',
    children: ['T-Shirts', 'Formal T-Shirts', 'Full T-Shirts', 'Half T-Shirts']
  },
  {
    name: 'Accessories',
    children: ['Charger', 'Back Cover', 'Mobile', 'Laptop']
  },
  {
    name: 'Jewelry',
    children: ['Belly chain', 'Breastplate', 'Brooch', 'Earring']
  },
  {
    name: 'Top Brand',
    children: ['Puma', 'Levi', 'Monty Carlo']
  }
]