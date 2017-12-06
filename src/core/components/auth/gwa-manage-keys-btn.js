import React from "react"
import PropTypes from "prop-types"

export default class GwaManageKeysBtn extends React.Component {
  openWindow =() => {
    window.open("https://gwa.apps.gov.bc.ca/", "_blank")
  }

  render() {
    return (
      <div className="auth-wrapper">
        <button onClick={ this.openWindow } className={ "btn authorize" }>
          <span>Manage API Keys</span>
        </button>
      </div>
    )
  }
}
