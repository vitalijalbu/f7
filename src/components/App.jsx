import React, { useState, useEffect, useRef } from 'react';
import {
  App,
  View,
  Views,
  Page,
  f7
} from 'framework7-react';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import routes from '../js/routes';
import store from '../js/store/';



const MyApp = () => {



  // Framework7 Parameters
  const f7params = {
    version: '1.0.0',
    language: 'it',
    online: true,
    debugger: import.meta.env.VITE_APP_DEBUG,
    name: 'Turo', // App name
      theme: 'aurora', // Automatic theme detection
      // App routes
            // App routes
            routes: routes,
            publicPath: '/',
            pushStateSeparator: '/'
            
  };
  //const router = f7router();
  const url = import.meta.env.VITE_BASE_URL;
  console.log('url', url);
  return (
    <App { ...f7params } url={url}>
     
     <Header />
    {/* Your main view, should have "view-main" class url="/"*/}
    <View 
        main
        masterDetailBreakpoint={768} 
        passRouteParamsToRequest={true}
        browserHistory
        browserHistorySeparator=""
        browserHistoryInitialMatch={true}
        browserHistoryStoreHistory={false}>
    </View>
   
    <Footer />
  </App>
  )
}
export default MyApp;