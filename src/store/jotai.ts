import { atom } from "jotai"

export const dataAtom = atom([
  {
    status: false,
    email: "dsadkm@gmail.com",
    id: 1,
  },
  {
    status: true,
    email: "dsadkm@gmail.com",
    id: 2,
  },
  {
    status: false,
    email: "dsadkm@gmail.com",
    id: 3,
  },
  {
    status: true,
    email: "dsadkm@gmail.com",
    id: 4,
  },
])

export const AddUserJ = atom((get, set, user) => {
  set(dataAtom, [...get(dataAtom), user])
})
