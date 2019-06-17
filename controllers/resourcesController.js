const Resource = require('../models/resource');
const mongoose = require('mongoose');

exports.index = (req, res) => {
	Resource.find()
	.then(resources =>{
		res.render('resources/index',{
			resources: resource
		});
	})
	.catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.show = (req, res) => {
	Resource.findById(req.params.id)
    .then(resource => {
      res.render('resources/show', {
        Alias: alias
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.new = (req, res) => {
	res.render('resources/new', {
    title: `New resource`
  });
};


exports.edit = (req, res) => {
	Resource.findById(req.params.id)
    .then(blog => {
      res.render('resources/edit', {
        title: `Edit ${resource.alias}`
      })
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.create = (req, res) => {
	Resource.create(req.body.resource)
    .then(() => {
      res.redirect('/resources');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}


exports.update = (req, res) => {
	Resource.updateOne({
      _id: req.body.id
    }, req.body.resource, {
      runValidators: true
    })
    .then(() => {
      res.redirect('/resources');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.destroy = (req, res) => {
	Resource.deleteOne({
      _id: req.body.id
    })
    .then(() => {
      res.redirect('/resources');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};