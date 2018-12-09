import React, { Component } from 'react';
import axios from 'axios';
import CollapsibleTitle from './CollapsibleTitle';
import Carousel from './Carousel';

// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!');
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      list: [],
      zipCode: '',
      isExpanded: false,
      showPopup: false,
      clickedContent: '',
    };
  }

  componentDidMount() {
    axios.get('/nearbyHomes', {}).then((homes) => {
      this.setState({
        list: homes.data,
        zipCode: homes.data[0].zipCode,
      });
    });
  }

  toggleCollapsibleTitle = () => {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  };

  handleContentCloseClick = () => {
    const { showPopup } = this.state;
    this.setState({ showPopup: false });
  };

  handleContentClick = param => (e) => {
    const { clickedContent, showPopup } = this.state;
    this.setState({
      clickedContent: param,
      showPopup: true,
    });
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      currIndex: prevState.currIndex + 1,
    }));
  };

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currIndex: prevState.currIndex - 1,
    }));
  };

  render() {
    const {
      currIndex, isExpanded, showPopup, list, zipCode, clickedContent,
    } = this.state;

    return (
      <div className="collapsible-title-container">
        <div className="collapsible-title-inner-layout">
          <CollapsibleTitle
            isExpanded={isExpanded}
            zipCode={zipCode}
            toggleCollapsibleTitle={this.toggleCollapsibleTitle}
          />
          {isExpanded ? (
            <div className="collapsible-content">
              <Carousel
                homes={list}
                currIndex={currIndex}
                showPopup={showPopup}
                clickedContent={clickedContent}
                goToNextSlide={this.goToNextSlide}
                goToPrevSlide={this.goToPrevSlide}
                handleContentClick={this.handleContentClick}
                handleContentCloseClick={this.handleContentCloseClick}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default App;

// App.propTypes = {

// }
