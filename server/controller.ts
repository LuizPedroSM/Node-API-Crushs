import model from "./model";

class Controller {
  constructor() {}

  // select
  public getCrushs() {
    return model.find();
  }

  public select(req, res) {
    this.getCrushs()
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
  // selectone
  public getCrushById(id) {
    return model.find(id);
  }

  public selectOne(req, res) {
    const id = { _id: req.params.id };
    this.getCrushById(id)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }

  // delete
  public deleteById(id) {
    return model.deleteOne(id);
  }

  public delete(req, res) {
    const id = { _id: req.params.id };
    this.deleteById(id)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
  // update
  public updateCrush(id, data) {
    return model.findOneAndUpdate(id, data);
  }

  public update(req, res) {
    const id = { _id: req.params.id };
    const crush = req.body;
    this.updateCrush(id, crush)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
  // insert
  public createCrush(data) {
    return model.create(data);
  }

  public insert(req, res) {
    const crush = req.body;
    this.createCrush(crush)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
}
export default Controller;
