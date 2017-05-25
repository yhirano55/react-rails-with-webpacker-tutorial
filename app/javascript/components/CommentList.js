var React = require("react")
var Comment = require("./Comment")
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="CommentList">
        <Comment author="alice">My name is Alice.</Comment>
        <Comment author="bob">My name is Bob.</Comment>
        <Comment author="carol">My name is Carol.</Comment>
      </div>
    );
  }
});
module.exports = CommentList
