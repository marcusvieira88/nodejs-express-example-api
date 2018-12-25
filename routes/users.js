var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
      const users = await UserController.getAll(req);
      res.status(200).json(users);
  } catch (error) {
      next(error);
  }
});

router.post('/', async function(req, res, next) {
  try {
      const user = await UserController.create(req);
      res.status(200).json(user);
  } catch (error) {
      next(error);
  }
});

router.route('/:id')
  .get(async function(req, res, next) {
      try {
          const user = await UserController.getById(req.params.id);
          res.status(200).json(user);
      } catch (error) {
          next(error);
      }
  })

  .put(async function(req, res, next) {
      try {
          const user = await UserController.update(req);
          res.status(200).json(user);
      } catch (error) {
          next(error);
      }
  })

  .delete(async function(req, res, next) {
      try {
          const user = await UserController.deleteById(req.params.id);
          res.status(200).json(user);
      } catch (error) {
          next(error);
      }
  });

module.exports = router;
