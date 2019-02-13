import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import MessageModal from './MessageModal';

class Drawing extends React.Component {
    state = {
      width: 400,
      height: 400,
      brushRadius: 20,
      lazyRadius: 5,
      message: "This feature is coming soon",
      showMessage: false
    };
    handleClearMessage = () => {
      this.setState({showMessage: false})
    }
    handleShowMessage = () => {
      this.setState({showMessage: true})
    }

    render() {
      return (
        <div>

        
        <div className="digit-recognizer">
          <div className="buttons">
            <button
              onClick={() => {
                localStorage.setItem(
                  "savedDrawing",
                  this.saveableCanvas.getSaveData()
                );
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                this.saveableCanvas.clear();
              }}
            >
              Clear
            </button>
            <button
              onClick={() => {
                this.saveableCanvas.undo();
              }}
            >
              Undo
            </button>
            <button
              onClick={() => {
                const imgUrl = this.saveableCanvas.canvasContainer.children[1].toDataURL("image/png");
                window.location.href = imgUrl;
              }}
            >
              Download
            </button>
            <button
              onClick={() => {
                const imgUrl = this.saveableCanvas.canvasContainer.children[1].toDataURL("image/png");
                upload(imgUrl);
              }}
            >
              Upload
            </button>
            <button
              onClick={() => {
                this.saveableCanvas.loadSaveData(
                  localStorage.getItem("savedDrawing")
                );
              }}
            >
              Load 
            </button>
            <button onClick={this.handleShowMessage}>
              Predict
            </button>
          </div>

          <div className="canvas-drawing">

            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor="#777"
              hidegrid={false}
              background
              brushRadius={this.state.brushRadius}
              lazyRadius={this.state.lazyRadius}
              canvasWidth={this.state.width}
              canvasHeight={this.state.height}
              gridColor="#F7F7F7"
              saveData={localStorage.getItem("savedDrawing")}
              back
            />
          </div>
          </div>
          <MessageModal
            message={this.state.message}
            showMessage={this.state.showMessage}
            handleClearMessage={this.handleClearMessage}
          />

        </div>
        
      );
    }
  }
  
  export default Drawing;