const Follow = require("../models/Follow");

exports.addFollow = function (req, res) {
  let follow = new Follow(req.params.username, req.visitorId);
  follow
    .create()
    .then(() => {
      res.json({ success: `Successfully followed ${req.params.username}` });
    })
    .catch((errors) => {
      res.status(404).json(errors);
    });
  };
  
  exports.removeFollow = function (req, res) {
    let follow = new Follow(req.params.username, req.visitorId);
    follow
    .delete()
    .then(() => {
      res.json({
        success: `Successfully stopped following ${req.params.username}`,
      });
      req.session.save(() => res.redirect(`/profile/${req.params.username}`));
    })
    .catch((errors) => {
      res.status(404).json(errors);
      req.session.save(() => res.redirect("/"));
    });
};
