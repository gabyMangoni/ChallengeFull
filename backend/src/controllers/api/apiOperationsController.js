const path = require('path');
let db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
var moment = require('moment');

const Voucher = db.Voucher;
const Type = db.Type;
const Category = db.Category;

let apiOperationsController = {
    list: async (req, res) =>{
        try{ 
            let operations = await Voucher.findAll({ 
                attributes:[
                    'id', 'concept', 'amount', 'date', 'categoryTypetId', 'categoryId'
                ],
                include: [ 'category', 'type' ],
                order: [
                    ['id', 'DESC']
                ]
                // limit: 10,
                

                })
        
        let response = {
             data: {
                list: []
            }
        }
        const outcomeValue = [];
        const incomeValue = [];
        operations.forEach(operation => {
        operation.categoryTypetId === 2
                  ? outcomeValue.push(operation.amount)
                  : incomeValue.push(operation.amount);
              
 
     // aca poner el balance
        response.data.list.push({
                id: operation.id,
                concept: operation.concept,
                amount: Number(operation.amount),
                date: operation.date.toLocaleDateString(),
                category: operation.category.name,
                type: operation.categoryTypetId,
                details: req.headers.host + `/api/operations/${operation.id}`
            })

            // response.meta.balance.push({
            //     balanceTotal
            // })
            return (operation)
        });
        const spendingTotal = outcomeValue.reduce((acum, b) => acum + b, 0);
        const incomeTotal = incomeValue.reduce((acum, b) => acum + b, 0);
        const balanceTotal = incomeTotal - spendingTotal;

        return res.status(200).json({
            total: operations.length,
            balance: balanceTotal,
            response,
            status: 200,
          });
            
        }
        catch(error){
            console.log(error);
        }
    },

    // list: (req, res) => {
    //     Voucher.findAll({
    //       attributes: ['id', 'concept', 'amount', 'date', 'categoryTypetId', 'categoryId'],
    //     }).then((operations) => {
    //       //Resuelvo el balance en el back
    //       const outcomeValue = [];
    //       const incomeValue = [];
    //       operations.forEach(function (operations) {
    //         operations.categoryTypetId === 2
    //           ? outcomeValue.push(Number(operations.amount))
    //           : incomeValue.push(Number(operations.amount));
    //       });
    //       const spendingTotal = outcomeValue.reduce((a, b) => a + b, 0);
    //       const incomeTotal = incomeValue.reduce((a, b) => a + b, 0);
    //       const balanceTotal = incomeTotal - spendingTotal;
    
    //       return res.status(200).json({
    //         total: operations.length,
    //         balance: balanceTotal,

    //         data: operations,
    //         status: 200,
    //       });
    //     });
    //   },
   
    listOut: async (req, res) =>{
        try{ 
            let operations = await Voucher.findAll({ 
                attributes:[
                    'id', 'concept', 'amount', 'date'
                ],
                include: [ 'category', 'type' ],
                where: {
                    categoryTypetId : '2'
                },
                order: [
                    ['id', 'DESC']
                ]
                
                });
            // API que reemplaza a la funcion normal
        let response = {
            meta: {
                status : 200,
                total: operations.length,
                url: '/api/operations/out'
            },
            data: {
                list: []
            }
        }
        operations.forEach(operation => {
            response.data.list.push({
                id: operation.id,
                concept: operation.concept,
                amount: operation.amount,
                date: operation.date.toLocaleDateString(),
                category: operation.category.name,
                details: req.headers.host + `/api/operations/${operation.id}`
            })
            return operation
        });
       return res.json(response);
            
        }
        catch(error){
            res.send({ err: 'Not found' });
        }
    },
    listIn: async (req, res) =>{
        try{ 
            let operations = await Voucher.findAll({ 
                attributes:[
                    'id', 'concept', 'amount', 'date'
                ],
                include: [ 'category', 'type' ],
                where: {
                    categoryTypetId : '1'
                },
                order: [
                    ['id', 'DESC']
                ]
                
                });
                      // API que reemplaza a la funcion normal
        let response = {
            meta: {
                status : 200,
                total: operations.length,
                url: '/api/operations/in'
            },
            data: {
                list: []
            }
        }
        operations.forEach(operation => {
            response.data.list.push({
                id: operation.id,
                concept: operation.concept,
                amount: operation.amount,
                date: operation.date.toLocaleDateString(),
                category: operation.category.name,
                details: req.headers.host + `/api/operations/${operation.id}`
            })
            return operation
        });
       return res.json(response);
            
        }
        catch(error){
            res.send({ err: 'Not found' });
        }
    },
    add: (req, res) =>{
        let promTypes = Type.findAll();
        let promCategories = Category.findAll();
        Promise
        .all([promTypes, promCategories])
        .then(([allTypes, allCategories]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'create'), {allTypes, allCategories})})
        .catch(error => res.send({ err: 'Not found' }))
    },
    create: async (req, res) =>{
    const operations = await Voucher.findByPk(req.params.id);
    let allTypes = Type.findAll();
    let allCategories = Category.findAll();
        try{
            await Voucher.create({
                concept: req.body.concept,
                amount: req.body.amount,
                date: req.body.date,
                categoryId: req.body.categoryId,
                categoryTypetId: req.body.typeId,
                })
                .then(operations => {
                    return res.status(200).json({
                        operations: operations,
                        status: 200,
                        created: "ok"
                    })
                })
        //hasta aca try
        } catch(error){
            res.send({ err: 'Not found' });
        }
    },
    edit: (req, res) =>{
        let operationsId = req.params.id;
        let promOperations = Voucher.findByPk(operationsId);
        let promCategories = Category.findAll();
        let promTypes = Type.findAll();
        Promise
        .all([promOperations, promCategories, promTypes])
        .then(([operations, allCategories, allTypes]) => {
           return res.status(200).json({
            total: operations.length,
            operations: operations,
            category: allCategories,
            type: allTypes,
            status: 200
        })
          })
        .catch(error => res.send({ err: 'Not found' }))
           
    },
    update: async (req, res) =>{

        let operations = req.body;
        try {
            const operationsId = req.params.id;
            await Voucher.update(
                    {
                    concept: req.body.concept,
                    amount: req.body.amount,
                    date: req.body.date.toLocaleDateString(),
                    categoryId: req.body.categoryId,
                    categoryTypetId: req.body.typeId,
                    },
                    {
                        where: {id: operationsId}
                    }
                )
                .then((result) => res.status(200).json(result))
            
                         
            } catch(error){
                res.send({ err: 'Not found' });
            }
        },
        destroy: async function (req, res) { 
            try{ 
            let operationsId = req.params.id;
            Voucher.findByPk(operationsId);
           await Voucher.destroy({ where: { id: operationsId }, force: true });
           return res.redirect('/')
        }
        catch(error){
            res.send({ err: 'Not found' });
        }
       }
   
}

module.exports = apiOperationsController;