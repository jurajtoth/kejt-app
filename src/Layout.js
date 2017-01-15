import Header from './Header'
import React, {Component} from 'react'
import '../styles/Layout.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} />
                <div className="content-area">
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default Layout;