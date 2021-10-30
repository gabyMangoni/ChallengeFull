const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
var moment = require('moment');

const Voucher = db.Voucher;
const Type = db.Type;
const Category = db.Category;

let operationsController = {
    index: (req, res) => {
        res.render('index');
    },
    list: async (req, res) =>{
        try{ 
            let operations = await Voucher.findAll({ 
                order: [
                    ['id', 'DESC']
                ],
                include: [ 'category', 'type' ]});
            console.log("Entre al listado de Operaciones");
            console.log("URL: " + req.params.types);

            const types = req.params.types;
            
            return res.render('operations', {operations, types});
            
        }
        catch(error){
            console.log(error);
        }
    },
    listOut: async (req, res) =>{
        try{ 
            let operations = await Voucher.findAll({ 
                include: [ 'category', 'type' ],
                where: {
                    categoryTypetId : '2'
                },
                order: [
                    ['id', 'DESC']
                ]
                
                });
            console.log("Entre al listado de Egresos");
            console.log("URL: " + req.params.types);
            
            return res.render('operationsType', {operations});
            
        }
        catch(error){
            console.log(error);
        }
    },
    listIn: async (req, res) =>{
        try{ 
            let operations = await Voucher.findAll({ 
                include: [ 'category', 'type' ],
                where: {
                    categoryTypetId : '1'
                },
                order: [
                    ['id', 'DESC']
                ]
                
                });
            console.log("Entre al listado de Egresos");
            console.log("URL: " + req.params.types);
            
            return res.render('operationsType', {operations});
            
        }
        catch(error){
            console.log(error);
        }
    },
    add: (req, res) =>{
        let promTypes = Type.findAll();
        let promCategories = Category.findAll();
        Promise
        .all([promTypes, promCategories])
        .then(([allTypes, allCategories]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'create'), {allTypes, allCategories})})
        .catch(error => res.send(error))
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
                });
                res.redirect('/');
//hasta aca try
        } catch (error) {
            res.send(error)
        }
    },
    edit: (req, res) =>{
        console.log('entre a Detail')
        console.log('----------------------------')
        let operationsId = req.params.id;
        let promOperations = Voucher.findByPk(operationsId);
        let promCategories = Category.findAll();
        let promTypes = Type.findAll();
        console.log('entre a Detail2')
        console.log('----------------------------')
        Promise
        .all([promOperations, promCategories, promTypes])
        .then(([operations, allCategories, allTypes]) => {
            return res.render('edit', {operations, allCategories, allTypes, moment:moment})
            
          })

        .catch(error => res.send(error))
           
    },
    update: async (req, res) =>{
        console.log('entre en el Edit')
        console.log('----------------------------')
        let operations = req.body;
        try {
            const operationsId = req.params.id;
            await Voucher.update(
                    {
                    concept: req.body.concept,
                    amount: req.body.amount,
                    date: req.body.date,
                    categoryId: req.body.categoryId,
                    categoryTypetId: req.body.typeId,
                    },
                    {
                        where: {id: operationsId}
                    }
                );
                return res.redirect('/');
            
                         
            } catch (error) {
                res.send(error)
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
            console.log(error);
        }
       },
   
}

module.exports = operationsController;