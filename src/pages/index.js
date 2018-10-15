import React from 'react'
import Layout from '../components/layout'
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: undefined }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state, props) => {
        return { user: { id: '0001' } }
      })
    }, 3000)
  }

  render() {
    return (
      <Layout>
        <div>
          {!this.state.user && (
            <div style={{ backgroundColor: 'green' }}>
              <div style={{ backgroundColor: 'yellow' }}>
                <p>Hello</p>
              </div>
            </div>
          )}
          {this.state.user && (
            <div style={{ backgroundColor: 'red' }}>
              <div style={{ backgroundColor: 'pink' }}>
                <p>Hello Again</p>
              </div>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
