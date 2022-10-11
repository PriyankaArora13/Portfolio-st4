import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="https://png.pngtree.com/png-vector/20190702/ourlarge/pngtree-female-user-avatars-flat-style-women-profession-vector-png-image_1529171.jpg"
                alt="priyanka"
              />
            </div>
            <div className="banner-text">
              <h1>Aspiring Frontend Developer</h1>
              <hr />
              <p>
                HTML | CSS | BOOTSTRAP | C# 
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                {/* { <a }
                  href="http://facebook.com/ismail96.12"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a> */}
                {/* LinkedIn */}
                {/* <a
                  href="https://twitter.com/ismail_miah_2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a> */}
                {/* LinkedIn */}
                <a

                  href="https://github.com/PriyankaArora13"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                {/* <a
                  href="https://www.linkedin.com/in/ismaelmiah/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a> */}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
