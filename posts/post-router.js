const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
	db.select('*').from('posts') //all knex commands return a promise
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(error => {
			res.status(500).json(error);
		})
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {
	const postData = req.body;
	//you want to always validate the data coming from the client haven't done that here but I should have
	///always with insert have an id for the 2nd argument 
	db('posts').insert(postData, 'id');
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;