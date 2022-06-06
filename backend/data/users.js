import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Huaf Debigreuh',
    email: 'hdcompanyboss@gmail.com',
    password: bcrypt.hashSync('5454823000', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
