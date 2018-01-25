import React, { Component, Fragment } from 'react'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
			shown: true,
		};
  }

  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}


  render() {

    var show = {
			display: this.state.shown ? "block" : "none"
		};

		var hidden = {
			display: this.state.shown ? "none" : "block"
		}

    return (
      <Fragment>
        <div className="container row">
          <button style={ hidden } className="btn back" onClick={this.toggle.bind(this)}>Back</button>
          <div className="main col">
            <h2>How long is the drive?</h2>
            <div className="content col">
              <form>
                <div className="col">
                  <label>Origin:</label>
                  <input type="text" name="IP1" value="" style={ show } />
                  <div style={ hidden }>
                    <p><span>1 West</span>New York, NY 10011</p>
                  </div>
                </div>
                <div className="col">
                  <label>Destination:</label>
                  <input type="text" name="IP2" value="" style={ show } />
                  <div style={ hidden }>
                    <p><span>10 Bowery</span>New York, NY 10011</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="button-result row">
          <button style={ show } className="btn" onClick={this.toggle.bind(this)}>Gimme the Distance!</button>
          <div className="result" style={ hidden }>
            <h2>22 min</h2>
            <p>Well, that ain't far</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
