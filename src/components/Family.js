function Family() {
    return (
        <div id="family" class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                  <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div class="w-full sm:p-4 px-4 mb-6">
                      <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Family</h1>
                      <div class="leading-relaxed">An interesting fact about me is that I come from a very large family. My mom is one of 12 children
                        and my dad is one of 6 children, so from both sides combined I have over 50 cousins. I am the youngest
                        cousin on my mom's side, and I have been to a cousin wedding almost every summer since I was 10 years old.
                        This picture is from my cousin Marc's wedding this summer, including the cousins that were able to attend.</div>
                    </div>
                  </div>
                  <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img class="object-cover object-center w-full h-full" src="./cousins.JPG" alt="stats"/>
                  </div>
                </div>
            </div>
    );
}

export default Family;