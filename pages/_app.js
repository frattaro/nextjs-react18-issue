import '../styles/globals.css'
import {useState} from "react";


function MyApp({ Component, ssrParam, pageProps }) {
  const [test] = useState(ssrParam || window.clientInformation);
  return <Component {...pageProps} />
}

export default MyApp
