import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  submitUrl,
  deleteUrl,
  addUrl,
  deleteEndVideo,
} from "../actionCreators/action";


import YouTube from "react-youtube";
import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  position:"top-center"
});
const opts = {
  height: "490",
  width: "710",
  playerVars: {
    autoplay: 1,
  },
};
class Videoplayer extends Component {
  state = {
    url: "",
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { url } = this.state;
    const patt = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    const valid = patt.test(url);
    if (valid === true) {
      this.props.submitUrl(url);
      this.setState({
        url: "",
      });
    }
    else{
      toast.warn('Please enter correct URL')
    }
  };

  render() {
    
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <form
            className="form-group col-6"
            style={{ display: "flex" }}
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <input
              className="form-control"
              value={this.state.url}
              onChange={(e) => this.setState({ url: e.target.value })}
              type="text"
            />
            &nbsp;
            <button
              type="submit"
              disabled={!this.state.url}
              className="btn btn-success"
            >
              Add
            </button>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <YouTube
              videoId={this.props.currentUrl}
              opts={opts}
              onEnd={() =>
                this.props.deleteEndVideo(
                  `https://www.youtube.com/watch?v=${this.props.currentUrl}`
                )
              }
            />
          </div>
          <div className="col-md-5">
            <ul className="list">
              <h1 className=" text-center">Playlist</h1>
              <hr />
              {this.props.urlList.map((url, index) => (
                <li
                  key={index}
                  onClick={() => this.props.addUrl(url)}
                  className="list1"
                >
                  <img src={`https://img.youtube.com/vi/${url.split("=")[1]}/maxresdefault.jpg`} alt="thumbnails" width="100" height="70"/>
                 &nbsp;
                  {url}
                  <span>
                    <i
                      onClick={() => {
                        this.props.deleteUrl(index);
                      }}
                      className="fa fa-times-circle-o icon "
                      aria-hidden="true"
                    ></i>
                  </span>
                  <br/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { submitUrl, deleteUrl, addUrl, deleteEndVideo },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Videoplayer);
