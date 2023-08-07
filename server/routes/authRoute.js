var credentials = [
    { username: 'bob', birthdate: '2001-01-01', age: 22, email: 'bob@com.au', password: 'alice123', valid: true },
    { username: 'alice', birthdate: '2002-02-02', age: 21, email: 'alice@com.au', password: 'bob123', valid: true },
    { username: 'fred', birthdate: '2003-03-03', age: 23, email: 'fred@com.au', password: 'helloworld', valid: true },

]

module.exports = {
    route: (app) => {
        app.post('/api/login', (req,res) => {
            console.log(req.body)
            let validate = credentials.find(login => login.username == req.body.username && login.password == req.body.password) || null;
            console.log(validate)
            
            res.send(validate 
                ? {username: validate.username, birthdate: validate.birthdate, age: validate.age, email: validate.email, valid: true} 
                : {...req.body, valid: false})
        })
    }
}