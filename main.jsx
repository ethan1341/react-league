// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    );
  }
});

var NavBrand = React.createClass({
  render: function(){
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    ); 
  }
});

var NavMenu = React.createClass({
  render: function(){
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} />
        );
      }
      else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
});

var NavLinkDropdown = React.createClass({
  render: function(){
    var links = this.props.links.map(function(link){
      return (
        <NavLink linkTo={link.linkTo} text={link.text} />
      );
    });
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
});

var NavLink = React.createClass({
  render: function(){
    return(
      <li><a href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
});

// set data
var navbar = {};
navbar.brand = {linkTo: "#", text: "React Bootstrap Navbar"};
navbar.links = [
  {linkTo: "#", text: "Link 1"},
  {linkTo: "#", text: "Link 2"},
  {dropdown: true, text: "Dropdown", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2"}
  ]}
];

// render NavBar
React.render(
  <NavBar {...navbar} />,
  document.getElementById("navbar")
);