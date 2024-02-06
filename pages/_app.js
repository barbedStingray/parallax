import { useRouter } from 'next/router';
import { motion as m, AnimatePresence } from 'framer-motion';
import './global.css';

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    return (
        <AnimatePresence
            mode='wait'
        >
            <Component {...pageProps} />

        </AnimatePresence>
    )
}

export default App;
