import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

import ReactDOMServer from 'react-dom/server';

var componentConfig = {
  iconFiletypes: ['.csv', '.tab', '.xlsx'],
  showFiletypeIcon: true,
  postUrl: 'no-url',
};

var djsConfig = {
  autoProcessQueue: false,
  acceptedFiles: '.csv,.tab,.xlsx',
  showFiletypeIcon: true,
  params: {
    myParam: 'Hello from a parameter!',
    dictRemoveFile: 'lol',
    anotherParam: 43,
  },
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview">
      <div className="uploaded-files">
        <div className="dz-details">
          <div className="dz-file-description">
            <div className="dz-filename"><span data-dz-name="true" /></div>
            <div className="dz-remove dz-remove-icon" data-dz-remove>
              <img src={'./assets/icons/delete.png'} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default class D extends React.Component {
  render() {
    var eventHandlers = {
      addedfile: file => {
        this.props.handleFile(file);
      },
    };
    return (
      <div>
        <DropzoneComponent
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
      </div>
    );
  }
}
