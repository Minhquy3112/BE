

import express from "express";
import { getTotalPriceByMonth, getTotalPriceByWeek, getTotalPriceByYear } from "../controllers/static";

const router = express.Router();
// router.get("/bydate", getTotalPriceByDay);
router.get(`/bymonth`, getTotalPriceByMonth);
router.get(`/byweek`, getTotalPriceByWeek);
router.get(`/byyear`, getTotalPriceByYear);

export default router;

