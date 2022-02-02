export default function Footer() {

  return (
    <>
        <footer className="bg-gray-900">
            <div className="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">
                <div className="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
                <span className="block w-10 h-1 bg-indigo-500 rounded"></span>

                <p className="mt-4 text-2xl font-medium text-white">Request a Demo</p>

                <form className="mt-6">
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative inline-block">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="h-12 py-0 pl-3 pr-16 text-sm placeholder-gray-500 bg-gray-800 border-none rounded-lg"
                    />

                    <button
                        type="submit"
                        className="absolute p-2.5 -mt-5 text-white bg-indigo-500 rounded-md top-1/2 right-1"
                    >
                        <span className="sr-only">Submit</span>
                        <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    </div>
                </form>
                </div>

                <div className="px-4 py-16 space-y-12 lg:pr-12">
                <div className="md:flex md:justify-between">
                    <span className="inline-block w-32 h-10 bg-gray-700 rounded-lg"></span>

                    <p className="text-sm text-gray-500 max-w-[25ch] mt-4 md:mt-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, incidunt!
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div>
                    <p className="font-bold text-white">Helpful</p>

                    <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                        <a href="">Contact</a>
                        <a href="">Live Chat</a>
                        <a href="">Resources</a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-bold text-white">Solutions</p>

                    <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                        <a href="">Instant Checkout</a>
                        <a href="">Product Upsells</a>
                        <a href="">Slideout Cart</a>
                        <a href="">User Dashboards</a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-bold text-white">About</p>

                    <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                        <a href="">About Us</a>
                        <a href="">Meet the Team</a>
                        <a href="">History</a>
                        <a href="">Careers</a>
                    </nav>
                    </div>
                </div>

                <div className="flex space-x-6 text-xs text-white">
                    <p>&copy; 2022 Big Company</p>
                    <a href="" className="underline">Privacy Policy</a>
                    <a href="" className="underline">Terms & Conditions</a>
                    <a href="" className="underline">Cookies</a>
                </div>
                </div>
            </div>
        </footer>
    </>
  );
};