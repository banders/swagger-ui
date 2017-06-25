import React, { PropTypes } from "react"

export default class BcGwaApiKeyAuth extends React.Component {
  static propTypes = {
    authorized: PropTypes.object,
    getComponent: PropTypes.func.isRequired,
    errSelectors: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    authorizeState: PropTypes.func
  }

  constructor(props, context) {
    super(props, context)
    let { name, schema } = this.props
    let value = "first val"

    this.state = {
      name: name,
      schema: schema,
      value: value
    }
  }

  componentWillUnmount() {
    let { onChange, authorizeState } = this.props
    fetch("https://www.blameadam.com/api/getToken/")
    .then((response) => response.json())
    .then((responseJson) => {
      let newState = Object.assign({}, this.state, { value: responseJson.key })
      authorizeState(newState)
    })
    .catch((error) => {
      console.log("User not authenticated.")
    })
    
    
  }

  render() {
    let { schema, getComponent, errSelectors, name } = this.props
    const Input = getComponent("Input")
    const Row = getComponent("Row")
    const Col = getComponent("Col")
    const AuthError = getComponent("authError")
    const Markdown = getComponent( "Markdown" )
    const JumpToPath = getComponent("JumpToPath", true)
    let errors = errSelectors.allErrors().filter( err => err.get("authId") === name)

    let iframeStyle = {
      width: "100%",
      height: "400px"
    }
    
    return (
      <div>
        <iframe src="https://www.blameadam.com/api/admin/login/" style={iframeStyle} />
      </div>
    )
  }
}
