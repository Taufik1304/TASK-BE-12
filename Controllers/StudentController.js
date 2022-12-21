const Model = require('../Models/StudentModel')

class StudentConteoller {
    async index(req, res) {
        try {
            const data = await Model.index()

            if (data.length == 0) {
                let result = {
                    message: 'Data students tidak tersedia'
                }
                res.json(result)
            } else {
                let result = {
                    message: 'Success: berhasil mendapatkan data students!',
                    data: data
                }
                res.json(result)
            }
        } catch (error) {
            const result = {
                message: 'Failed: gagal mendapatkan data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async find(req, res) {
        try {
            const {id} = req.params
            const data = await Model.findData(id)
            if (data.length == 0) {
                let result = {
                    message: 'Data students tidak tersedia'
                }
                res.json(result)
            } else {
                let result = {
                    message: 'Success: berhasil mendapatkan data students!',
                    data: data[0]
                }
                res.json(result)
            }

        } catch (error) {
            const result = {
                message: 'Failed: gagal mendapatkan data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async update(req, res){
        try {
            const {id} = req.params
            const {name, nim, address, email} = req.body

            const validate = await Model.findData(id)
            if (validate.length == 0) {
                let result = {
                    message: 'Failed: ID tidak ditemukan!'
                }
                return res.json(result)
            }
            if (name.length == 0) {
                let result = {
                    message: 'Name cannot be null'
                }
                return res.json(result)
            }
            if (nim.length == 0) {
                let result = {
                    message: 'Nim cannot be null'
                }
                return res.json(result)
            }
            if (address.length == 0) {
                let result = {
                    message: 'address cannot be null'
                }
                return res.json(result)
            }
            if (email.length == 0) {
                let result = {
                    message: 'email cannot be null'
                }
                return res.json(result)
            }

            const params = {
                name: name,
                nim: nim,
                email: email,
                address: address
            }
            await Model.updateData(params, id)
            const _get = await Model.findData(id)

            let result = {
                message: 'Success: berhasil mengubah data!',
                data: _get[0]
            }

            res.json(result)
        } catch (error) {
            const result = {
                message: 'Failed: gagal mengubah data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async create(req, res){
        try {
            const {name, nim, address, email} = req.body

            if (name.length == 0) {
                let result = {
                    message: 'Name cannot be null'
                }
                return res.json(result)
            }
            if (nim.length == 0) {
                let result = {
                    message: 'Nim cannot be null'
                }
                return res.json(result)
            }
            if (address.length == 0) {
                let result = {
                    message: 'address cannot be null'
                }
                return res.json(result)
            }
            if (email.length == 0) {
                let result = {
                    message: 'email cannot be null'
                }
                return res.json(result)
            }

            const params = {
                name, nim, email, address
            }
            await Model.createData(params)

            let result = {
                message: 'Success: berhasil menabahkan data students!'
            }

            res.json(result)

        } catch (error) {
            const result = {
                message: 'Failed: gagal menambahkan data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async destroy(req, res){
        try {
            const {id} = req.params
            const validate = await Model.findData(id)
            if (validate.length == 0) {
                let result = {
                    message: 'Failed: ID tidak ditemukan!'
                }
                return res.json(result)
            }

            await Model.deleteData(id)

            let result = {
                message: 'Success: berhasil menghapus data students!'
            }

            res.json(result)
        } catch (error) {
            const result = {
                message: 'Failed: gagal menghapus data students!',
                error: error.message
            }

            res.json(result)
        }
    }
}

const object = new StudentConteoller()

module.exports = object