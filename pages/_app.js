import { useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style.scss';
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
