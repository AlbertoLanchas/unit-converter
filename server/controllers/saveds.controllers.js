import router from "../routes/saveds.routes.js";
import Saved from "../models/saveds.models.js";

export const getSaveds = (req, res) => {
  Saved.find().then((allSaveds) => res.send(allSaveds));
};

export const getSaved = (req, res) => {
  res.send("Get one saved");
};

export const createSaved = (req, res) => {
  res.send("Add saved");
};

export const updateSaved = (req, res) => {
  res.send("Update saved");
};

export const deleteSaved = (req, res) => {
  res.send("Delete saved");
};
