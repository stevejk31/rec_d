var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <div className="welcome-box-image">
        <div className="welcome-box">
          <br/>

          <h3>
            <font color="#F5D04C">
              {"Rec'd is the best way to find great coffee shops in San Fransisco"}
            </font>
          </h3>
          <br/>
          <div>{"People use Rec'd to search for new coffee places in the city by location or by name."}</div>
          <div>{"What will you uncover in your neighborhood next?"}</div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
            {"This is an attempt to create a single page web app much like "}
            <a href="https://www.yelp.com">Yelp</a>
          </div>
          <div>
            {"using Facbook's famous front visual infrastructure: "}
            <a href="https://facebook.github.io/react/">REACT</a>
          </div>
          <div>
            {"using Facbook's famous front end architecture:"}
            <a href="https://facebook.github.io/flux/">FLUX</a>
          </div>
          <div>
            {"and the intuitive and easy to use backend environement: "}
            <a href="http://rubyonrails.org/">Ruby on Rails</a>
          </div>

          <br/>
          <br/>

        </div>
      </div>
    );
  }

});

module.exports = About;
