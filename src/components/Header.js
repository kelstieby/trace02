function Header() {

    return (
        <header class="text-gray-600 bg-purple-400 Sbody-font">
            <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">Kelsey Stieby</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900" href="#intro">Intro</a>
                    <a class="mr-5 hover:text-gray-900" href="#hobbies">Hobbies</a>
                    <a class="mr-5 hover:text-gray-900" href="#family">Family</a>
                    <a class="mr-5 hover:text-gray-900" href="#maya">Maya</a>
                </nav>
                <button className='btn' class="inline-flex bg-purple-200 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href="https://www.linkedin.com/in/kelsey-stieby-1b92821bb/" href="https://www.linkedin.com/in/kelsey-stieby-1b92821bb/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                    <h2>Connect</h2>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;