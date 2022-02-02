import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
// import Footer from './Footer'

interface typeLayout { 
    children: JSX.Element | JSX.Element[],
    title?: string
}


export default function Index({ title, children }:typeLayout) {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}