import Framework7 from "framework7/lite-bundle";
import Framework7React, { App, View } from "framework7-react";
import { useRouter } from "next/router";
import { routes } from 'utils/routes';

import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";
import 'framework7/css/bundle';
import "framework7-icons/css/framework7-icons.css";
import "material-icons/iconfont/material-icons.css";
import "@/assets/scss/app.scss";

Framework7.use(Framework7React);

function MyApp({ Component, pageProps, userAgent }) {
  
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;
  return (
    <App theme="aurora" routes={routes} userAgent={userAgent} url={url}>
      <View
        main
        browserHistory
        browserHistorySeparator=""
        browserHistoryInitialMatch={true}
        browserHistoryStoreHistory={false}
        animate={false}
        stackedPages={false}
        url="/"
      >
        <Header/>
        <Component initialPage {...pageProps} />
        {/*<Footer/>*/}
      </View>
    </App>
  );
}

/*
  Required for server-side device detection based on user-agent.
  Comment this code if you don't need it.
*/
MyApp.getInitialProps = async ({ctx}) => {
  if (ctx && ctx.req && ctx.req.headers) {
    return {
      userAgent: ctx.req.headers['user-agent']
    }
  }
  return {};
}

export default MyApp;
