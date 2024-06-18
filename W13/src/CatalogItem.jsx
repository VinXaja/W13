import React from "react";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.item[0],
            author: this.props.item[1],
            publisher: this.props.item[2],
            year: this.props.item[3],
            bookmark: false,
            total_like: Math.floor(Math.random() * 10),
            like: false,
        }
        this.check_bookmark = this.check_bookmark.bind(this);
        this.check_like = this.check_like.bind(this);
    }

    check_bookmark() {
        this.setState((state) => {
            return {
                bookmark: !state.bookmark
            }
        })
    }

    check_like() {
        this.setState((state) => {
            const newTotalLike = state.like ? state.total_like - 1 : state.total_like + 1;
            return {
                like: !state.like,
                total_like: newTotalLike
            }
        })
    }

    render() {
        return (
            <div className="card px-0 py-0">
                <div className="card-body">
                    <h5 className="card-title title">{this.state.title}</h5>
                    <p className="card-text author">{this.state.author}</p>
                    <p className="card-text text-muted publisher">
                        {this.state.publisher}
                        <small>{this.state.year}</small>
                    </p>
                </div>
                <div className="card-footer text-muted d-flex">
                    <p className="flex-grow-1 text-start" onClick={this.check_like}>
                        {this.state.like ? <AiTwotoneLike /> : <AiOutlineLike />}
                        {this.state.total_like}
                    </p>

                    <p className="text-end" onClick={this.check_bookmark}>
                        {this.state.bookmark ? <FaBookmark /> : <FiBookmark />}
                    </p>
                </div>
            </div>
        )
    }
}

export default CatalogItem