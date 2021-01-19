import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div>
                 <div className="filter_bar" style={{marginLeft:'20px'}} >
        <div className="sidebar">
          <div>
            <h2 style={{ color: "crimson" }}>Filters</h2>
            <h3>Skin Tone</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="fair"
                name="skin_tone"
                checked={this.props.tone === "fair"}
                value="fair"
                onChange={(e) => {
                  this.props.settonehandler(e);
                }}
              ></input>
              <label for="fair">Fair-Medium</label>
            </div>{" "}
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="dark"
                checked={this.props.tone === "brown"}
                name="skin_tone"
                value="brown"
                onChange={(e) => {
                  this.props.settonehandler(e);
                }}
              ></input>
              <label for="dark">Medium-dark</label>
            </div>
          </div>
          <div>
            <h3>Body Type</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="slim"
                name="body_type"
                checked={this.props.body === "slim"}
                value="slim"
                onChange={(e) => {
                  this.props.setbodyhandler(e);
                }}
              ></input>
              <label for="slim">Slim-Fit</label>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="fat"
                checked={this.props.body === "fat"}
                name="body_type"
                value="fat"
                onChange={(e) => {
                  this.props.setbodyhandler(e);
                }}
              ></input>
              <label for="fat">Fit-Heavy</label>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              // setData([]);
             this.props. clearFilter();
            }}
          >
            Clear All
          </button>
          <button className="btn" onClick={() => this.props.filter()}>
            Apply
          </button>
        </div>
        </div>
                
            </div>
        )
    }
}

export default Filter
