const express = require('express');
const Player = require('../models/players');
const players = require('../models/players');
const router = express.Router();


// Rota para adicionar um novo jogador
router.post('players', async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para listar todos os jogadores
router.get('/players', async(req, res) => {
  try {
    const player = await Player.find();
    res.status(200).send(players);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rota para atualizar um jogador
router.put('/players/:id', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send();
      }
      res.send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Rota para deletar um jogador
router.delete('/players/:id', async (req, res) => {
  try {
      const player = await Player.findByIdAndDelete(req.params.id);
      if (!player) {
          return res.status(404).send();
      }
      res.send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

module.exports = router;
