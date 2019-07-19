import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class CreatePost extends Component {
        constructor(props){
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
          <div style={{magrinTop: 20}}>
              <h3>Create Post</h3>
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
                      <input type="text"
                             className="form-control"
                             value={this.state.review}
                             onChange={this.onChangePostReview}
                             />
                  </div>
                  <div className="form-group">
                      <label>Picture:</label>
                      <input type="text"
                             className="form-control"
                             value={this.state.picture}
                             onChange={this.onChangePostPicture}
                             />
                  </div>

                    <div className="form-group">
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>

              </form>
          </div>

        )
    }
}
export default CreatePost