var React = require("react")
class Thanks extends React.Component {
  render () {
    return (
      <div>
        <div>Message: {this.props.message}</div>
      </div>
    );
  }
}

Thanks.propTypes = {
  message: React.PropTypes.string
};
module.exports = Thanks
