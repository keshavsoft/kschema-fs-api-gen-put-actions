import express from 'express';

import funcFrommodify from './modify/controller.js';

const tableName = "StockItems";
const tablePath = "Data/StockItems.json";
const configPath = "Config/Schemas/StockItems.json";

const router = express.Router();

router.put('/modify', express.json(), (req, res) => funcFrommodify({ req, res, inTablePath: tablePath, inConfigPath: configPath }));

export { router };