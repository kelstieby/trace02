function Intro() {
    return (
        <div id="intro" class="body-font bg-purple-300 text-white">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div class="text-center lg:w-2/3 w-full">
                    <p class="text-2xl mb-6 leading-relaxed font-bold">Hello, my name is...</p>
                </div>
                <img class="w-5/6 md-w-4/6 object-center rounded" src="./kelsey1.jpg"/>
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="sm:text-6xl text-6xl mb-4 font-bold p-4">Kelsey Stieby</h1>
                    <p class="mb-6 leading-relaxed text-xl">I am from Charleston, SC</p>
                    <p class="mb-6 leading-relaxed text-xl">I plan to graduate from Clemson in 2023 with a major in Computer Science 
                    and a minor in Management Information Systems.</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;