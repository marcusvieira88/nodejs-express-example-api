var express = require('express');
var router = express.Router();
var UserBusiness = require('../business/UserBusiness');

router.get('/', async function(req, res, next) {
  try {
      const users = await UserBusiness.getAll(req);
      res.status(200).json(users);
  } catch (error) {
      next(error);
  }
});

router.post('/', async function(req, res, next) {
  try {
      const user = await UserBusiness.create(req);
      res.status(200).json(user);
  } catch (error) {
      next(error);
  }
});

router.route('/:id')
  .get(async function(req, res, next) {
      try {
          const user = await UserBusiness.getById(req.params.id);
          res.status(200).json(user);
      } catch (error) {
          next(error);
      }
  })

  .put(async function(req, res, next) {
      try {
          const user = await UserBusiness.update(req);
          res.status(200).json(user);
      } catch (error) {
          next(error);
      }
  })

  .delete(async function(req, res, next) {
      try {
          const user = await UserBusiness.deleteById(req.params.id);
          res.status(200).json(user);
      } catch (error) {
          next(error);
      }
  });

module.exports = router;
