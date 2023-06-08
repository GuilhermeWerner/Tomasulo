import '@/styles/globals.css'
import { ProgramContextProvider } from '../src/ProgramContext';

export default function App({ Component, pageProps }) {
    return <ProgramContextProvider><Component {...pageProps} /></ProgramContextProvider>
}
