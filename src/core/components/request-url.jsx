import React, { PropTypes } from "react"

export default class RequestUrl extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    getComponent: PropTypes.func.isRequired
  }

  handleFocus(e) {
    e.target.select()
    document.execCommand("copy")
  }

  openRequestUrl(e, url) {
    window.open(url)
  }
  
  copyRequestUrl(e) {
    var ta = e.target.parentElement.parentElement.getElementsByTagName("textarea")
    if (ta.length == 1) {
      ta = ta[0]
      ta.select()
      document.execCommand("copy")
    } else {
      console.log("Unable to find textarea to select.")
      return null
    }
  }

  render() {
    let { url, getComponent } = this.props

    const buttonDivStyle = {
      float: 'right',
      marginTop: '5px'
    }
    const Button = getComponent("Button")

    return (
      <div>
        <h4>Request URL</h4>
        <div className="copy-paste">
          <textarea ref='content' onFocus={this.handleFocus} className="request-url" style={{ whiteSpace: "normal" }} value={ url }></textarea>
        </div>
        <div class="btn-group" style={ buttonDivStyle }>
          <Button className="btn" onClick={ (e) => this.openRequestUrl(e, url) } title={ "Open Request URL" }>Open Request URL</Button>
        </div>
      </div>
    )
  }
}
