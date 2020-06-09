const router = require('express').Router();
let Tag = require('../models/tag.model');

router.route('/').get((req, res) => {
    Tag.find()
        .then(tags => res.json(tags))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req, res) => {
    const id = req.params.id;
    Tag.findById(id)
        .then(tag => res.json(tag))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const {tag} = req.body;

    const newTag = new Tag({tag});

    newTag.save()
        .then((save) =>{
            
            return res.json(save)
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;