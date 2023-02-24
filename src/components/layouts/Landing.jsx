import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Landing extends Component {
  render() {
    return (
      <>
      <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div>
            <Link to="/register" class="btn btn-primary">Sign Up</Link>
            <Link to="/ogin" class="btn">Sign In</Link>
          </div>
        </div>
      </div>
    </section>
      </>
    )
  }
}
