import * as React from "react";
import { DropDown, Panel } from "../../../components";
import { Layout } from "../../../containers";
// import * as actionTypes from "../../../store/actions";

import { connect } from 'react-redux';
import { fetchPosts } from '../../../redux/actions/postActions'

import './style.css';

class Main extends React.Component {
    // state = {
    //     headLine: 'the best message ever'
    // }
    componentWillMount() {
      this.props.fetchPosts();
    }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <Layout>
        
        <h1>{postItems}</h1>

        <DropDown>
          <option>here</option>
          <option>there</option>
          <option>where</option>
        </DropDown>
      </Layout>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onPostAdded: (arg) => dispatch ({type: actionTypes.ADD_POST, postName: arg}),
//     onPostRemoved: (arg) => dispatch ({type: actionTypes.REMOVE_POST, postName: arg})
//   };
// }

const mapStateToProps = state => ({
  // return {
    posts: state.posts.items
  // };
});

export default connect(mapStateToProps, { fetchPosts }) (Main);