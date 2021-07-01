import React from 'react';
class Comments extends React.Component {
    render(){
        return (
            <div className="ui container comments" key={this.props.i}>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={this.props.userimg} />
                    </a>
                    <div className="content">
                        <a href="/" className="author" style={{marginLeft:"1% "}}>
                            {this.props.username}
                        </a>
                        <div className="metadata">
                            <span className="date">{this.props.posttime}</span>
                        </div>
                        <div className="text">{this.props.usercomment}</div>
                        <hr style={{color: "#d2c6c6", height: "0px"}} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Comments;