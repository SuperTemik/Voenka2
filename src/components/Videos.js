const React = require('react');
const Video = require('components/Video');

const RTO = require('../../public/video/RTO.mp4');

const Videos = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <Video src={RTO} title="Ghbdtn"/>
        </div>
        <div className="row">
          //<Video src={drl} title="ДРЛ ТТХ"/>
          //<Video src={prl} title="ПРЛ ТТХ"/>
        </div>
      </div>
    );
  }
});

module.exports = Videos;
