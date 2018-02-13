import React from 'react';




class Card extends React.Component{ 

    
    render(){
        return(<article className="card">
        <div className="card-header">
            <h1> {this.props.title} </h1>
        </div>
        <div className="card-details">
            <p>{this.props.text}</p>
        </div>
        <div className="card-tags">
        {this.props.tags.map(tag=>{
            return <span className="tag"> {tag}</span>;
        })}
        </div>
        <div className="card-footer">
        date: {this.props.date} 
        </div>
        </article>)
    }
}

export default Card