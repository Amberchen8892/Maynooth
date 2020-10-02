import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Duc Nguyen',
    email: 'ducnguyen@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Minh Nguyen',
    email: 'minhnguyen@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
export default users;
