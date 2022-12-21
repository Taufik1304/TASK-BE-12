const StudentController = require('../Controllers/StudentController')

exports.use = function(app){
    app.get('/students', StudentController.index);
    app.get('/students/:id', StudentController.find);
    app.put('/students/:id', StudentController.update);
    app.post('/students', StudentController.create);
    app.delete('/students/:id', StudentController.destroy);
}