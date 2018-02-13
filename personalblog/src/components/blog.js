import React from 'react'
import Card from './card'
import Header from './header'

const tempdata = [
    {title: "first", date: "12-12-12", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    , tags: ["html","javascript","css"]},
    {title: "second", date: "11-11-11", text: "balbalbal", tags: ["html","javascript","css"]},
    {title: "third", date: "19-02-19", text: "gkldfhglkdfhgdfkjgdfkg", tags: ["html","javascript","css"]}
]


class Blog extends React.Component{
    render(){
        return(<div>
            <Header headertext="My personal Blog"/>
            <Card title={tempdata[0].title} date={tempdata[0].date} text={tempdata[0].text} tags={tempdata[0].tags}/>
        <Card title={tempdata[1].title} date={tempdata[1].date} text={tempdata[1].text} tags={tempdata[1].tags}/>
        <Card title={tempdata[2].title} date={tempdata[2].date} text={tempdata[2].text} tags={tempdata[2].tags}/>
        </div>)
    }
}

export default Blog