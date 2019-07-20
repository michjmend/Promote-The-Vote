import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './CreatePost.css';

class CreatePost extends Component {
    constructor(props) {
        super();

        this.onChangePostTitle = this.onChangePostTitle.bind(this);
        this.onChangePostReview = this.onChangePostReview.bind(this);
        this.onChangePostPicture = this.onChangePostPicture.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            review: '',
            picture: ''
        }
    }

    onChangePostTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangePostReview(e) {
        this.setState({
            review: e.target.value
        });
    }

    onChangePostPicture(e) {
        this.setState({
            picture: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        /// apply submit logic here
        console.log('Form Submitted');
        console.log('Title : ${this.state.title}');
        console.log('Review : ${this.state.review}');
        console.log('Picture URL : ${this.state.picture}');

        this.setState({
            title: '',
            review: '',
            picture: ''
        })
    }

    render() {
        return (
            <div className="card" style={{ magrinTop: 20 }}>
                <Container id="CreatePostContent">
                    <h3 className="text-center">Post</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>Title:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangePostTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Review:</label>
                            <textarea className="form-control" value={this.state.review} onChange={this.onChangePostReview} rows="3"></textarea>
                            {/* <input type="text"
                            className="form-control"
                            value={this.state.review}
                            onChange={this.onChangePostReview}
                            /> */}
                        </div>
                        <div className="form-group">
                            <label>Picture:</label>
                            <div class="input-group mb-3">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile02"
                                        value={this.state.picture}
                                        onChange={this.onChangePostPicture}
                                    />
                                    <label className="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                </div>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                </div>
                            </div>
                            {/* <label>Picture:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.picture}
                            onChange={this.onChangePostPicture}
                        /> */}
                        </div>

                        <div className="form-group">
                            <input type="submit" value="SUBMIT" className="btn btn-danger btn-lg btn-block" />
                        </div>

                    </form>
                </Container>
            </div>
        )
    }
}
export default CreatePost
