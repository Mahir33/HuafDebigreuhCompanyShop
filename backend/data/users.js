import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Huaf Debigreuh',
    email: 'hdcompanyboss@gmail.com',
    password: bcrypt.hashSync('5454823000', 10),
    isAdmin: true,
  },
]

export default users
