var React = require('react');
var History = require('react-router').History;
var FilterActions = require('../actions/filterActions.js');


var StoreBasicInfo = React.createClass({
  mixins: [History],

  handleTagClick: function(tag, e){
    e.preventDefault();
    FilterActions.setTag(tag);
    window.scrollTo(0, 0);
    this.history.pushState({}, '/stores/', {});

  },
  renderTags: function(tags) {
    var tempTags = [];
    for (var i = 0; i < tags.length; i++) {
      tempTags.push(<a key={i}
                    onClick={this.handleTagClick.bind(this, tags[i].tag)}
                    href="#"><font color="#0f006f">
                      <u>{tags[i].tag}</u>{" "}
                    </font></a>
                );
    }
    return (
      <li className="list-group-item categories">
        Tag(s): {tempTags}
      </li>
    );
  },

  render: function() {
    return (
      <ul className="store-info list-group">
        <h2>{this.props.basicInfo.name}</h2>
        <li className="list-group-item street">
          Street: {this.props.basicInfo.street}
        </li>
        <li className="list-group-item neighborhood">
          Neighborhood: {this.props.basicInfo.neighborhood}
        </li>
        <li className="list-group-item city">
          City: {this.props.basicInfo.city}
        </li>
        <li className="list-group-item phone">
          Phone: {this.props.basicInfo.phone}
        </li>
        <li className="list-group-item review_count">
          Review Count: {this.props.basicInfo.reviewCount}
        </li>
        <li className="list-group-item">
          <div className="store-info-rating">
            <span className=" rating" data-stars={this.props.basicInfo.rating}/>
          </div>
        </li>
        {this.renderTags(this.props.basicInfo.tags)}
      </ul>
    );
  }

});

module.exports = StoreBasicInfo;
