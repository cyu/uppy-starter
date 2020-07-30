const Uppy = require('@uppy/core')
const XHRUpload = require('@uppy/xhr-upload')
const Dashboard = require('@uppy/dashboard')

require('file-loader?name=[name].[ext]!./index.html');

// And their styles (for UI plugins)
require('@uppy/core/dist/style.css')
require('@uppy/dashboard/dist/style.css')

const uppy = new Uppy().use(Dashboard, {trigger: '#drag-drop-area'}).use(XHRUpload, {endpoint: 'https://api2.transloadit.com'})

uppy.on('complete', (result) => {
    console.log('Upload complete! We’ve uploaded these files:', result.successful)
})
