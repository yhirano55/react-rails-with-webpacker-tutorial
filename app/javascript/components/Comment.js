var React = require("react")
var Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
module.exports = Comment
