import Page from '@/components/page';
import * as React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';


const home = () => {


    return (
        <Page>
            <div className='wrapper'>
                <header>
                    <img src='/Mountain.png' className='background'/>
                    <img src='/Trees.png' className='foreground '/>
                    <h1 className='title'>Home</h1>
                    {/* <Image
                        src="/desertSand.png"
                        width={500}
                        height={500}
                        alt="Picture of the desert"
                    /> */}
                </header>
                <section>
                    lorem 300
                    loremipsum.loremipsum. loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.loremipsum.
                    loremipsum.loremipsum.

                </section>
            </div>

        </Page>
    )
}

export default home;
