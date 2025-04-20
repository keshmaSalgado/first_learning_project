import { proxy } from 'valtio'

const state = proxy({
  color: '#ffffff',
  seatcolor: '#333333',
  rimcolor: '#333333',
  colors: ['#ccc', '#EFBD4E', '#71797E', '#726DE8', '#EF674E', '#353934', 'black', '#550000'],
  seatcolors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934', 'black', '#800000'],
  rimcolors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934', 'black', '#800000'],
})

export { state }
