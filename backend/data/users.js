import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Tarek',
        email: 'tarek@la.store',
        password : bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name: 'User',
        email: 'user@la.store',
        password : bcrypt.hashSync('usr123',10),
        isAdmin : false
    }
];

export default users