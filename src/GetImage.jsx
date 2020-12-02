import React, { Component } from "react";
import App from "./App";
// import "./getImage.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import PreviewResults from "./GetImage/PreviewResult";

const a =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
class GetImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      urls: [],
      isDragging: false,
      next: false,
      image: "",
      cropped: false,
      cropData: "#",
      cropper: "",
    };
  }

  ChangeFiles = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        image: reader.result,
        cropped: false,
      });
    };
    reader.readAsDataURL(files[0]);
  };

  getCropData = () => {
    if (typeof this.state.cropper !== "undefined") {
      this.setState({
        cropped: true,
        cropData: this.state.cropper.getCroppedCanvas().toDataURL(),
      });
    }
  };

  handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  Next = () => {
    // if (
    //   this.state.name !== "" &&
    //   this.state.institution !== "" &&
    //   !this.state.image ===
    //     "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
    // ) {
    this.setState({
      next: true,
    });
    // } else {
    //   this.setState({
    //     next: false,
    //   });
    // }
  };

  Prev = () => {
    this.setState({
      next: false,
    });
  };
  render() {
    let i;
    const Sector = [
      "Select Sector",
      "CENTRAL SECTOR",
      "GREATER ACCRA SECTOR",
      "WINNEBA SECTOR",
      "PENTVARS",
      "LOWER VOLTA SECTOR",
      "UPPER VOLTA SECTOR",
      "NORTHERN SECTOR",
      "KOFORIDUA SECTOR",
      "TAKORADI SECTOR",
      "UPPER EAST SECTOR",
      "UPPER WEST SECTOR",
      "B/A SECTOR",
      "ASOKWA SECTOR",
      "SUHUM SECTOR",
      "KWADASO SECTOR",
      "TARKWA SECTOR",
      "MAMPONG SECTOR",
      "FOREIGNER",
      "OTHER",
    ];
    const Upload = (
      <div className="uploadInput">
        <input type="file" onChange={this.ChangeFiles} />
        {this.state.cropped ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.Next()}
          >
            Preview
          </button>
        ) : (
          ""
        )}
      </div>
    );
    const screenshot = () => {
      const name = this.state.name;
      const label = `${name}.png`;
      domtoimage.toBlob(document.getElementById("node")).then(function (blob) {
        saveAs(blob, label);
      });
    };
    // eslint-disable-next-line
    const Preview = (
      <div className="container responsive">
        <div className="imagePreviewContainer">
          <img
            style={{ width: "100%" }}
            src={this.state.cropData}
            alt="cropped"
          />
        </div>
      </div>
    );
    const ImageCropper = (
      <div style={{ width: "100%" }}>
        {Upload}
        <br />
        <Cropper
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={1}
          preview=".img-preview"
          src={this.state.image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            this.setState({
              cropper: instance,
            });
          }}
        />
        {this.state.image ? (
          <button type="button" onClick={this.getCropData}>
            Crop Image
          </button>
        ) : (
          ""
        )}
      </div>
    );
    // eslint-disable-next-line
    ImageData = (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Sector</label>
                <select
                  name="institution"
                  onChange={this.handleChange}
                  className="form-control"
                >
                  {Sector.map((e) => (
                    <option key={i++} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Sector"
                  name="institution"
                  value={this.state.institution}
                  onChange={this.handleChange}
                  required
                /> */}
              </div>
              {ImageCropper}
              {/* {this.state.image ? Preview : ""} */}
            </form>
          </div>
        </div>
      </div>
    );

    return (
      <div className="container mx-auto" style={{ marginTop: "20px" }}>
        {!this.state.next ? (
          ImageData
        ) : (
          <>
            {/* <App screenshot={screenshot} data={this.state} /> */}
            <PreviewResults data={this.state} screenshot={screenshot} />
            <div style={{ width: "50%" }} className="mx-auto">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.Prev()}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default GetImage;
