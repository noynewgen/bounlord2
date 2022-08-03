
module.exports = (app) => {
    const bounlordList = require("../controlor/bounlordController");

    app.route("/bounlord")
    .get(bounlordList.ListAllBounlord)
    .post(bounlordList.createNewBounlord);

    app.route("/bounlord/:id")
    .put(bounlordList.updateBounlord)
    .delete(bounlordList.deleteBounlord)
}