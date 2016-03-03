var React = require('react');

var StoreBusinessInfo = React.createClass({

  render: function() {
    return (
      <ul className="store-business-info list-group">
        <h3>More Business Information</h3>
        <li className="list-group-item">
          <span className="info-attr">Accepts Apple Pay:</span>
          <span className="info-value">{this.props.businessInfo.acceptsApple}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Accepts Android Pay:</span>
          <span className="info-value">{this.props.businessInfo.acceptsApple}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Accepts Cash:</span>
          <span className="info-value">{this.props.businessInfo.acceptsCash}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Accepts Credit:</span>
          <span className="info-value">{this.props.businessInfo.acceptsCredit}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Parking:</span>
          <span className="info-value">{this.props.businessInfo.parking}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Bike Parking:</span>
          <span className="info-value">{this.props.businessInfo.bikeParking}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Has TV:</span>
          <span className="info-value">{this.props.businessInfo.hasTv}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Noise Level:</span>
          <span className="info-value">{this.props.businessInfo.noiseLevel}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Outdoor Seating:</span>
          <span className="info-value">{this.props.businessInfo.outdoorSeating}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">Waiter Service:</span>
          <span className="info-value">{this.props.businessInfo.waiterService}</span>
        </li>
        <li className="list-group-item">
          <span className="info-attr">WiFi:</span>
          <span className="info-value">{this.props.businessInfo.wifi}</span>
        </li>
      </ul>
    );
  }

});

module.exports = StoreBusinessInfo;
