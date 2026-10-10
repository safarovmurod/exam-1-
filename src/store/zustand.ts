import { create } from "zustand"

// interface data {
//   id: number
//   name: string
//   img: string
// }
// interface User{
//     data:data[]
// }
export const data = [
  {
    name: "Jermaine Abbott",
    img: "https://avatars.githubusercontent.com/u/69587377",
    id: 1,
  },
  {
    name: "Drew Herman",
    img: "https://avatars.githubusercontent.com/u/98001694",
    id: 2,
  },
  {
    name: "Cora Hessel",
    img: "https://avatars.githubusercontent.com/u/15346942",
    id: 3,
  },
  {
    name: "Cedric Goldner",
    img: "https://avatars.githubusercontent.com/u/86756446",
    id: 4,
  },
]

export const useZustand = create((set) => ({
  data,
  Adduser: (user) => set((state) => {
    set(state.data=[...state.data,user])
  }),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))
