import React from 'react'
import DropzoneComponent from 'react-dropzone-component'
var ReactDOMServer = require('react-dom/server')

var componentConfig = {
  iconFiletypes: ['.csv', '.tab', '.xlsx'],
  showFiletypeIcon: true,
  postUrl: '/uploadHandler'
}

var djsConfig = {
  acceptedFiles: '.csv,.tab',
  showFiletypeIcon: true,
  params: {
    myParam: 'Hello from a parameter!',
    dictRemoveFile: 'lol',
    anotherParam: 43
  },
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className='dz-preview dz-file-preview'>
      <div className='uploaded-files'>
        <div className='dz-details'>
          <div className='dz-file-description'>
            <div className='dz-filename'><span data-dz-name='true'></span></div>
            <div className='dz-remove dz-remove-icon' data-dz-remove><img src={'./assets/icons/delete.png'} alt='' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

var eventHandlers = { addedfile: (file) => console.log(file) }

export default class D extends React.Component {
  render () {
    return (
      <div>
        <DropzoneComponent
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig} />
      </div>
    )
  }
}
