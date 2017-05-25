var React = require("react")
var CommentList = require("./CommentList")
var CommentContainer = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    fetch(this.props.url)
      .then(function(response) {
        if (!response.ok) throw new Error("invalid");
        return response.json();
      })
      .then(function(result) {
        this.setState({ data: result.data });
      }.bind(this))
      .catch(function(err) {
        console.error(err);
      }.bind(this));
  },
  render: function() {
    return (
      <div className="CommentContainer">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
      </div>
    );
  }
});
module.exports = CommentContainer
