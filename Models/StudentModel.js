const Mysql = require('../Config/dbConnection')

class StudentModel {

    static async index(){
        return new Promise((resolve, reject) => {
            const query = 'select * from students'

            Mysql.query(query, function(err, result){
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async findData(id){
        return new Promise((resolve, reject) => {
            const query = 'select * from students where id = ?'

            Mysql.query(query, [id], function(err, result){
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async updateData(data, id){
        return new Promise((resolve, reject) => {
            const query = 'update students set ? where id = ?'

            Mysql.query(query, [data, id], function(err, result){
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async createData(data){
        return new Promise((resolve, reject) => {
            const query = 'insert into students set ?'

            Mysql.query(query, [data], function(err, result){
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async deleteData(id){
        return new Promise((resolve, reject) => {
            const query = 'delete from students where id = ?'

            Mysql.query(query, [id], function(err, result){
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
        
    }

}

module.exports = StudentModel