const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready',()=>{

    console.log('app is now ready');
    new BrowserWindow({

    });

});