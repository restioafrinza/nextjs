import Layout from '../components/content'

export default function Profil() {
    return (
        <Layout title='Profil'>
            <section className="bg-blue-50">
                <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8 lg:items-start">
                        <div className="max-w-xl">
                            <a className="block overflow-hidden bg-white shadow-xl rounded-2xl" href="">
                                <img className="object-cover w-full h-56" src="https://www.hyperui.dev/photos/university-4.jpeg" alt="" />

                                <div className="relative pt-20 text-center">
                                    <div className=" absolute w-24 h-24 bg-gray-900 rounded-lg shadow-xl transform -translate-x-1/2 -top-10 left-1/2 " >
                                        ...
                                    </div>

                                    <div className="px-6 sm:px-12">
                                        <h5 className="text-xl font-bold text-gray-900">
                                            Lorem ipsum dolor sit amet.
                                        </h5>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
                                            commodi eligendi officiis laboriosam autem eveniet.
                                        </p>
                                    </div>

                                    <dl className=" flex flex-col items-center justify-center px-6 py-4 mt-6 border-t border-gray-100 sm:flex-row sm:items-start sm:px-12 " >
                                        <div className="flex items-center">
                                            <span className="flex-shrink-0 p-1 text-white bg-green-600 rounded-full">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" ></path>
                                                </svg>
                                            </span>

                                            <span className=" flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse " >
                                                <dt>Reviews</dt>
                                                <dd className="order-first">12,540</dd>
                                            </span>
                                        </div>

                                        <div className="flex items-center mt-3 sm:ml-6 sm:mt-0">
                                            <span className="flex-shrink-0 p-1 text-white bg-green-600 rounded-full">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" ></path>
                                                </svg>
                                            </span>

                                            <span className=" flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse " >
                                                <dt>Students</dt>
                                                <dd className="order-first">1,520,404</dd>
                                            </span>
                                        </div>
                                    </dl>
                                </div>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
                            <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
                                <span className="inline-block p-2 bg-blue-50 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
                                </p>
                            </a>

                            <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
                                <span className="inline-block p-2 bg-blue-50 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
                                </p>
                            </a>

                            <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
                                <span className="inline-block p-2 bg-blue-50 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
                                </p>
                            </a>

                            <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
                                <span className="inline-block p-2 bg-blue-50 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};