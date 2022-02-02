import Layout from '../components/content'

export default function Home() {
    return (
        <Layout title='Beranda'>
            <section className="relative text-white bg-center bg-no-repeat bg-cover bg-[url('https://www.hyperui.dev/photos/house-1.jpeg')]" role="banner" >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-screen-xl px-4 py-24 mx-auto  sm:px-6 lg:px-8 sm:py-36 lg:items-center lg:flex lg:h-screen">
            <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase">&mdash; About</p>

            <h1 className="mt-2 text-3xl font-bold sm:text-5xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h1>

            <p className="max-w-lg mt-4 sm:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fuga quam
                quae sequi cupiditate voluptas, eligendi ad iure at saepe?
            </p>
            </div>
        </div>
        </section>

        <div className="grid md:grid-cols-4 gap-4 py-3 px-3 hover:grid">
            <div className="relative px-8 py-16 text-center text-white bg-blue-600 rounded-lg shadow-2xl">
                <p className="text-2xl font-medium sm:text-3xl">New product launch 🚀</p>
                <p className="mt-4 text-sm text-blue-100">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="relative px-8 py-16 text-center text-white bg-blue-600 rounded-lg shadow-2xl">
                <p className="text-2xl font-medium sm:text-3xl">New product launch 🚀</p>
                <p className="mt-4 text-sm text-blue-100">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="relative px-8 py-16 text-center text-white bg-blue-600 rounded-lg shadow-2xl">
                <p className="text-2xl font-medium sm:text-3xl">New product launch 🚀</p>
                <p className="mt-4 text-sm text-blue-100">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="relative px-8 py-16 text-center text-white bg-blue-600 rounded-lg shadow-2xl">
                <p className="text-2xl font-medium sm:text-3xl">New product launch 🚀</p>
                <p className="mt-4 text-sm text-blue-100">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 lg:items-center">
                <div className="max-w-lg px-4 mx-auto text-center lg:text-left lg:mx-0 lg:px-0">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam molestia.
                    </h2>

                    <p className="mt-4 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque qui fugiat illum? Nam possimus vero
                    id quibusdam repudiandae debitis exercitationem dolorem dolorum! Error corporis iure eum, repellat molestiae
                    cum?
                    </p>

                    <a className="inline-block px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg" href="">
                    Get started today
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:order-first">
                    <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl" href="">
                    <span className="inline-block p-3 text-gray-900 rounded-lg bg-gray-50">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                        </svg>
                    </span>

                    <h6 className="mt-2 font-medium text-gray-900">Accountant</h6>
                    <p className="hidden mt-1 text-sm text-gray-500 sm:block">Lorem ipsum dolor sit amet consectetur.</p>
                    </a>

                    <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl" href="">
                    <span className="inline-block p-3 text-gray-900 rounded-lg bg-gray-50">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                        </svg>
                    </span>

                    <h6 className="mt-2 font-medium text-gray-900">Accountant</h6>
                    <p className="hidden mt-1 text-sm text-gray-500 sm:block">Lorem ipsum dolor sit amet consectetur.</p>
                    </a>

                    <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl" href="">
                    <span className="inline-block p-3 text-gray-900 rounded-lg bg-gray-50">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                        </svg>
                    </span>

                    <h6 className="mt-2 font-medium text-gray-900">Accountant</h6>
                    <p className="hidden mt-1 text-sm text-gray-500 sm:block">Lorem ipsum dolor sit amet consectetur.</p>
                    </a>

                    <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl" href="">
                    <span className="inline-block p-3 text-gray-900 rounded-lg bg-gray-50">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                        </svg>
                    </span>

                    <h6 className="mt-2 font-medium text-gray-900">Accountant</h6>
                    <p className="hidden mt-1 text-sm text-gray-500 sm:block">Lorem ipsum dolor sit amet consectetur.</p>
                    </a>

                    <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl" href="">
                    <span className="inline-block p-3 text-gray-900 rounded-lg bg-gray-50">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                        </svg>
                    </span>

                    <h6 className="mt-2 font-medium text-gray-900">Accountant</h6>
                    <p className="hidden mt-1 text-sm text-gray-500 sm:block">Lorem ipsum dolor sit amet consectetur.</p>
                    </a>

                    <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl" href="">
                    <span className="inline-block p-3 text-gray-900 rounded-lg bg-gray-50">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                        </svg>
                    </span>

                    <h6 className="mt-2 font-medium text-gray-900">Accountant</h6>
                    <p className="hidden mt-1 text-sm text-gray-500 sm:block">Lorem ipsum dolor sit amet consectetur.</p>
                    </a>
                </div>
                </div>
            </div>
        </section>

        </Layout>
    );
}
