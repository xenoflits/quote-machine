import React from 'react'

class Header extends React.Component {
    render() {
        return (<header className="container-fluid">
            <div className="HeaderImg" style={{backgroundImage: 'url(' + require('../images/blog.jpg') + ')'}}>
            <h1 className="text-center">{this.props.headertext}</h1>
            </div></header>)
    }
}

export default Header