import React, { Component } from 'react';
import axios from 'axios';
import './Outlet.css';
import { findFlag } from './Helpers.js';

class Outlet extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    this.getSources();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ value: nextProps.default });
      this.getSources();
    }
  }

  getSources() {
    // Make HTTP reques with Axios
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=bbfd0222e2354d2bbb4b5c92862941e2`).then(res => {
      // Set state with result
      this.setState({ data: res.data.articles });
    });
  }

  render() {
    return (
      <div className="outletSection">
        <h4>
          Outlet Description{' '}
          <span role="img" aria-label="Newspaper Emoji">
            📰
          </span>
        </h4>

        {this.state.data.map((item, y) => {
          if (item.id === this.state.value) {
            return (
              <div key={y} className="singleNew">
                <div className="generalInfo">
                  <h4>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </h4>
                  <img className="flagCode" src={findFlag(item.country)} alt="flag" />
                  <p>{item.country.toUpperCase()}</p>
                  <p>{item.category.replace(/\b\w/g, l => l.toUpperCase())}</p>
                  <p>{item.language.toUpperCase()}</p>
                </div>
                <p>{item.description}</p>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    );
  }
}

export default Outlet;