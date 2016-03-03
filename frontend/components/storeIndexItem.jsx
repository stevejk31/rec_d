var React = require('react');
var History = require('react-router').History;
var FilterActions = require('../actions/filterActions.js');


var StoreIndexItem = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return ({
      isHovered: false
    });
  },

  showDetail: function () {
    this.history.pushState(null, '/store/' + this.props.store.id, {});
    window.scrollTo(0, 0);

  },

  mouserOver: function() {
    this.setState({isHovered: true});
  },

  mouseOut: function() {
    this.setState({isHovered: false});
  },
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
                    href="#"><font color="#0f006f"><u>
                      {tags[i].tag}</u>{" "}
                    </font></a>
                );
    }
    return (
      <div className="categories">
        Tag(s): {tempTags}
      </div>
    );
  },

  render: function() {
    if (this.state.isHovered) {
      var toggleClassName = "store-index-item list-group-item active";
    } else {
      var toggleClassName = "store-index-item list-group-item";

    }
    return (
      <li role="presentation"
        className={toggleClassName}
        onMouseOver={this.mouserOver}
        onMouseOut={this.mouseOut}
       >
        <div className="container-fluid">
          <div className="store-index-item-logo" onClick={this.showDetail}>
            <img className="store-index-item-logo-image"
              height="130px" width="130px"
              src={this.props.store.basicInfo.imageUrl}
              />
          </div>
          <div className="store-index-item-header store-index-item-info">
            <h4 className="store-index-name" onClick={this.showDetail}>
              {this.props.store.basicInfo.name}
            </h4>
            {this.renderTags(this.props.store.basicInfo.tags)}
            <div onClick={this.showDetail} className="review_count">
              Review Count: {this.props.store.basicInfo.reviewCount}
            </div>
            <div onClick={this.showDetail} className="rating"
              data-stars={this.props.store.basicInfo.rating}>
            </div>
          </div>
          <div onClick={this.showDetail}
            className="store-index-item-basic-info store-index-item-info">
            <div className="street">
              Street: {this.props.store.basicInfo.street}
            </div>
            <div className="neighborhood">
              Neighborhood: {this.props.store.basicInfo.neighborhood}
            </div>
            <div className="city">
              City: {this.props.store.basicInfo.city}
            </div>
            <div className="phone">
              Phone: {this.props.store.basicInfo.phone}
            </div>
          </div>
        </div>
      </li>
    );
  }

});

module.exports = StoreIndexItem;
