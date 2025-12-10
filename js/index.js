var header = document.getElementById("header");


var meals =[
    {
        rate:["4.9","187 reviews"],
        prep:"10 ",
        cook:"15 ",
        serving:"2 people",
        firstt:"Easy",
        secondt:"Seafood",
        name:"Honey Garlic Salmon",
        desc:"Pan-seared salmon with a sweet and savory glaze",
        ingrediants : {
            1:"2 salmon fillets (6oz each)",
            2:"3 tablespoons honey",
            3:"2 tablespoons soy sauce",
            4:"4 cloves garlic, minced",
            5:"1 tablespoon olive oil",
            6:"1 teaspoon fresh ginger, grated",
            7:"Sesame seeds for garnish",
            8:"Green onions, sliced",
        },
        Instructions : {
            1:"Pat salmon fillets dry with paper towels. Season with salt and pepper.",
            2:"In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
            3:"Heat olive oil in a large skillet over medium-high heat.",
            4:"Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
            5:"Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
            6:"Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
           
        },
        Calories:"380 kcal",
        Carbohydrates:"28g",
        Fiber:"0g",
        Protein:"35g",
        Fat:"14g",
        Sodium:"720mg",

        chef:[
            "Don't overcook salmon - it should be slightly pink in the center",
            "Use wild-caught salmon for best flavor and nutrition",
            "Let the sauce caramelize slightly for deeper flavor",
            "Pair with steamed broccoli or asparagus for a complete meal",
        ],
        imgUrl:"images/photo-1.jpeg",

    },


    {
        rate:["4.8","234 reviews"],
        prep:"60 ",
        cook:"20 ",
        serving:"4 people",
        firstt:"Easy",
        secondt:"Italian",
        name:"Creamy Spaghetti Carbonara",
        desc:"A classic Italian pasta dish with eggs, cheese, and pancetta",
        ingrediants : {
            1:"400g spaghetti pasta",
            2:"200g pancetta or guanciale, diced",
            3:"4 large eggs",
            4:"100g Pecorino Romano cheese, grated",
            5:"50g Parmesan cheese, grated",
            6:"Freshly ground black pepper",
            7:"Salt for pasta water",
            // 8:"Green onions, sliced",
        },
        Instructions : {
            1:"Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            2:"While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
            3:"In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
            4:"Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
            5:"Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
            6:"Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
           
        },
        Calories:"520 kcal",
        Carbohydrates:"62g",
        Fiber:"3g",
        Protein:"28g",
        Fat:"18g",
        Sodium:"680mg",

        chef:[
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water - it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-20.jpg",

    },


    {
        rate:["4.8","445 reviews"],
        prep:"20 ",
        cook:"15 ",
        serving:"2 people",
        firstt:"Intermediate",
        secondt:"Asian",
        name:"Pad Thai",
        desc:"Popular Thai stir-fried noodles with shrimp and peanuts",
        ingrediants : {
            1:"200g rice noodles",
            2:"200g shrimp, peeled",
            3:"2 eggs",
            4:"3 tablespoons tamarind paste",
            5:"2 tablespoons fish sauce",
            6:"1 tablespoon palm sugar",
            7:"Bean sprouts",
            8:"Crushed peanuts",
            9:"Lime wedges and cilantro",

        },
        Instructions : {
            1:"Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            2:"Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            3:"Heat wok over high heat. Scramble eggs and set aside.",
            4:"Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            5:"Add scrambled eggs and bean sprouts. Toss everything together.",
            6:"Serve topped with crushed peanuts, lime wedges, and cilantro!",
           
        },
        Calories:"540 kcal",
        Carbohydrates:"62g",
        Fiber:"4g",
        Protein:"32g",
        Fat:"16g",
        Sodium:"1120mg",

        chef:[
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook",
            // "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-30.jpg",

    },


    {
        rate:["4.5","156 reviews"],
        prep:"50 ",
        cook:"35 ",
        serving:"2 people",
        firstt:"Easy",
        secondt:"Mediterranean",
        name:"Mediterranean Quinoa Bowl",
        desc:"Healthy bowl with quinoa, vegetables, and tahini dressing",
        ingrediants : {
            1:"1 cup quinoa",
            2:"Cherry tomatoes, halved",
            3:"Cucumber, diced",
            4:"Red onion, sliced",
            5:"Kalamata olives",
            6:"Feta cheese, crumbled",
            7:"Fresh parsley",
            8:"Tahini dressing",
            // 9:"Lime wedges and cilantro",

        },
        Instructions : {
            1:"Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            2:"While quinoa cooks, prepare all vegetables and set aside.",
            3:"For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            4:"Fluff cooked quinoa with a fork and let cool slightly.",
            5:"Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            6:"Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing!",
           
        },
        Calories:"480 kcal",
        Carbohydrates:"58g",
        Fiber:"10g",
        Protein:"18g",
        Fat:"20g",
        Sodium:"540mg",

        chef:[
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein",
            // "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-40.jpg",

    },


    {
        rate:["4.4","198 reviews"],
        prep:"15 ",
        cook:"0 ",
        serving:"2 people",
        firstt:"Easy",
        secondt:"Mediterranean",
        name:"Caesar Salad",
        desc:"Classic salad with crispy romaine and creamy dressing",
        ingrediants : {
            1:"1 large romaine lettuce",
            2:"1/2 cup Caesar dressing",
            3:"1/2 cup parmesan cheese, shaved",
            4:"1 cup croutons",
            5:"2 anchovy fillets (optional)",
            6:"Lemon wedges",
            7:"FresBlack pepperh parsley",
            // 8:"Tahini dressing",
            // 9:"Lime wedges and cilantro",

        },
        Instructions : {
            1:"Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            2:"Place lettuce in a large salad bowl.",
            3:"Add Caesar dressing and toss until evenly coated.",
            4:"Add croutons and half the parmesan cheese. Toss gently.",
            5:"Top with remaining parmesan shavings and anchovies if using.",
            6:"Serve immediately with lemon wedges and fresh black pepper!",
           
        },
        Calories:"320 kcal",
        Carbohydrates:"18g",
        Fiber:"3g",
        Protein:"12g",
        Fat:"22g",
        Sodium:"680mg",

        chef:[
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve",
            // "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-50.jpg",

    },


    {
        rate:["4.5","324 reviews"],
        prep:"15 ",
        cook:"15 ",
        serving:"4 people",
        firstt:"Easy",
        secondt:"Asian",
        name:"Chicken Stir-Fry",
        desc:"Quick and healthy stir-fry with colorful vegetables",
        ingrediants : {
            1:"500g chicken breast, sliced",
            2:"2 bell peppers, sliced",
            3:"1 broccoli head, florets",
            4:"2 carrots, julienned",
            5:"3 tablespoons soy sauce",
            6:"2 tablespoons oyster sauce",
            7:"1 tablespoon sesame oil",
            8:"2 cloves garlic, minced",
            9:"Fresh ginger, grated",

        },
        Instructions : {
            1:"Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            2:"Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            3:"Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            4:"Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            5:"Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
            6:"Serve immediately over steamed rice or noodles!",
           
        },
        Calories:"320 kcal",
        Carbohydrates:"18g",
        Fiber:"5g",
        Protein:"34g",
        Fat:"12g",
        Sodium:"320mg",

        chef:[
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch",
            // "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-60.jpg",

    },


    {
        rate:["4.8","356 reviews"],
        prep:"10 ",
        cook:"15 ",
        serving:"2 people",
        firstt:"Easy",
        secondt:"Seafood",
        name:"Shrimp Scampi",
        desc:"Garlicky shrimp in white wine butter sauce",
        ingrediants : {
            1:"400g large shrimp, peeled",
            2:"300g linguine pasta",
            3:"6 cloves garlic, minced",
            4:"1/2 cup white wine",
            5:"4 tablespoons butter",
            6:"2 tablespoons olive oil",
            7:"Fresh parsley, chopped",
            8:"Lemon juice and zest",
            9:"Red pepper flakes",

        },
        Instructions : {
            1:"Cook linguine according to package directions. Reserve 1 cup pasta water.",
            2:"Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            3:"Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            4:"Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            5:"Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            6:"Garnish with parsley, lemon zest, and serve immediately!",
           
        },
        Calories:"520 kcal",
        Carbohydrates:"24g",
        Fiber:"3g",
        Protein:"36g",
        Fat:"18g",
        Sodium:"620mg",

        chef:[
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste",
            // "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-40.jpg",

    },


    {
        rate:["4.6","289 reviews"],
        prep:"20 ",
        cook:"30 ",
        serving:"4 people",
        firstt:"Easy",
        secondt:"Asian",
        name:"Vegetable Curry",
        desc:"Hearty vegetarian curry with coconut milk",
        ingrediants : {
            1:"2 potatoes, cubed",
            2:"1 cauliflower, florets",
            3:"2 carrots, sliced",
            4:"1 can chickpeas",
            5:"400ml coconut milk",
            6:"3 tablespoons curry powder",
            7:"1 onion, diced",
            8:"3 cloves garlic, minced",
            9:"Fresh spinach",

        },
        Instructions : {
            1:"Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
            2:"Add potatoes and carrots, cook for 5 minutes.",
            3:"Pour in coconut milk and 1 cup water. Bring to simmer.",
            4:"Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
            5:"Stir in fresh spinach and cook until wilted.",
            6:"Serve hot over basmati rice or with naan bread",
           
        },
        Calories:"380 kcal",
        Carbohydrates:"48g",
        Fiber:"12g",
        Protein:"14g",
        Fat:"16g",
        Sodium:"480mg",

        chef:[
            "Add vegetables in order of cooking time needed",
            "Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired",
            // "Never add cream - authentic carbonara is made with eggs only",

        ],
        imgUrl:"images/photo-80.jpg",

    },

]

function test(){
    var r = Math.floor(Math.random()*meals.length);


    var ingr="";
    var keysing = Object.keys(meals[r].ingrediants);
    for(var i=0 ; i <keysing.length ; i++){
        ingr +=`
        <div class="ingred rounded-3 p-3 m-3">
                <div class="d-flex  align-items-center ">
                  <span class="second2 px-2 me-2 rounded-circle text-white fs-6 ">${i+1}</span>
                  <p class="lead par2 mb-0">${meals[r].ingrediants[keysing[i]]}</p>
                </div>
              </div>`
    }


    var ins="";
    var keysins = Object.keys(meals[r].Instructions);
    for(var i=0 ; i <keysins.length ; i++){
        ins +=`

        <div class="d-flex  align-items-center overflow-y-auto m-3">
                  <span class="second2 p-2 px-3 me-2 rounded-4 text-white fs-4 fw-bold">${i+1}</span>
                  <p class="lead par2 mb-0">${meals[r].Instructions[keysins[i]]}</p>
                </div>`
        
    }

    var ch="";
    var kech = Object.keys(meals[r].chef);
    for(var i=0 ; i <kech.length ; i++){
        ch +=`
        <div class="chef rounded-3 p-3 py-4 overflow-auto m-3">
                <div class="d-flex  align-items-center ">
                  <span class="second3 px-1 me-2 rounded-circle text-white  "><i class="fa-solid fa-check fa-xs"></i></span>
                  <p class="lead par2 mb-0">${meals[r].chef[kech[i]]}</p>
                </div>
                

              </div>

        `
        
    }

    header.innerHTML =`

    <header class="min-vh-100 " id="header">
    <div class="container py-5">
      <div class="row mx-4 g-0 le h-100">
        <div class="col-md-4 col-12 position-relative lef">
          <span class="">
            <img class=" image " src="${meals[r].imgUrl}" alt="">
          </span>
          <div class="top position-absolute  rounded-pill bg-white row   align-items-center justify-content-center p-2">
            <span class="text-warning col-2"><i class="fa-solid fa-star"></i></span>
            <p class=" col-2 mb-0">${meals[r].rate[0]}</p>
            <p class=" lead pp col-8 mb-0">${meals[r].rate[1]}</p>
          </div>
          <div class="bottom position-absolute  rounded-4 bg-white row  align-items-center justify-content-center px-2 py-3">
            <div class="col-3 text-center">
              <span class=" second mx-auto"><i class="fa-solid fa-lg fa-clock second-color"></i></span>
              <p class=" lead pp  mb-0">Prep Time</p>
              <p class=" mb-0 fw-bold">${meals[r].prep} min </p>

            </div>

            <div class="col-3 text-center mx-4">
              <span class="red-icon second mx-auto"><i class="fa-solid fa-lg fa-fire-burner second-color"></i></span>
              <p class=" lead pp  mb-0">Cook Time</p>
              <p class=" mb-0 fw-bold">${meals[r].cook} min </p>

            </div>

            <div class="col-3 text-center">
              <span class="blue-icon second mx-auto"><i class="fa-solid fa-lg fa-users second-color"></i></span>
              <p class=" lead pp  mb-0">Servings</p>
              <p class=" mb-0 fw-bold">${meals[r].serving}</p>

            </div>
          </div>
        </div>


        <div class="col-md-8 col-12  bg-white p-3 overflow-auto rig">
          

          <div class="row mt-3 mx-2 align-items-center justify-content-between ">

            <div class="col-8">
              <span class="px-3 py-1 gr rounded-pill me-2">${meals[r].firstt}</span>
              <span class="px-3  py-1 bl rounded-pill ">${meals[r].secondt}</span>
              <h1 class="mt-3 mb-2 fw-bold ,=main-t-color">${meals[r].name}</h1>
              <p class="lead par">${meals[r].desc}</p>
            </div>

            <div class="col-4 ms-auto text-end">
              <span class="rounded-3 icon-r p-3 ms-auto"><i class="fa-solid second fa-bookmark fa-lg"></i></span>
              <span class="rounded-3 icon-r p-3"><i class="fa-solid second fa-share-nodes fa-lg"></i></span>

            </div>

          
          </div>

          <div class="d-flex re rounded-3 p-3 align-items-center m-4 alert ${meals[r].prep <45 ? "d-none" : "d-block"}">
            <span class=" px-1 me-2 rounded-circle re1"><i class="fa-solid fa-triangle-exclamation fa-lg"></i></span>

            <div class="par">
              <p class="lead par2 mb-0 te1">Extended Preparation Time</p>
              <p class=" te2 mb-0">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
            </div>
            
          </div>

          <ul class="nav nav-tabs m-3 text-center " id="myTab" role="tablist">
            <li class="nav-item mx-4 mb-4" role="presentation">
              <button class="nav-link active" id="Ingredients-tab" data-bs-toggle="tab" data-bs-target="#Ingredients-tab-pane" type="button" role="tab" aria-controls="Ingredients-tab-pane" aria-selected="true"><span><i class="fa-solid fa-list-check"></i></span> Ingredients</button>
            </li>
            <li class="nav-item mx-4" role="presentation">
              <button class="nav-link" id="Instructions-tab" data-bs-toggle="tab" data-bs-target="#Instructions-tab-pane" type="button" role="tab" aria-controls="Instructions-tab-pane" aria-selected="false"><span><i class="fa-solid fa-book-open"></i></span> Instructions</button>
            </li>
            <li class="nav-item mx-4" role="presentation">
              <button class="nav-link" id="Nutrition-tab" data-bs-toggle="tab" data-bs-target="#Nutrition-tab-pane" type="button" role="tab" aria-controls="Nutrition-tab-pane" aria-selected="false"><span><i class="fa-solid fa-chart-pie"></i></span> Nutrition</button>
            </li>
            <li class="nav-item mx-4 me-4" role="presentation">
              <button class="nav-link" id="Chef-tab" data-bs-toggle="tab" data-bs-target="#Chef-tab-pane" type="button" role="tab" aria-controls="Chef-tab-pane" aria-selected="false"><span><i class="fa-solid fa-lightbulb"></i></span> Chef's Tips</button>
            </li>
            
          </ul>


          <div class="tab-content mx-3 " id="myTabContent">
            <div class="tab-pane fade show heigh active" id="Ingredients-tab-pane" role="tabpanel" aria-labelledby="Ingredients-tab" tabindex="0">

              ${ingr}
        
            </div>



            <div class="tab-pane fade heigh" id="Instructions-tab-pane" role="tabpanel" aria-labelledby="Instructions-tab" tabindex="0">

              <div class="ins p-3">
                ${ins}
              </div>
              
              

            </div>



            <div class="tab-pane fade heigh" id="Nutrition-tab-pane" role="tabpanel" aria-labelledby="Nutrition-tab" tabindex="0">

              <div class="nut p-3">
                <div class="row g-3  align-items-center ">
                  <div class="col-12 col-md-6 ">

                    <div class="inner rounded-3 p-3 coll">
                      <div class="d-flex align-items-center">
                        <span class=" p-2 rounded-2 or me-3">
                          <i class="fa-solid fa-fire fa-lg"></i>
                        </span>
                        <p class="lead par3 mb-0">Calories</p>
                        <h4 class="text-end ms-auto fw-bold">${meals[r].Calories}</h4>
  
                      </div>
                    </div>
                    
                  </div>

                  <div class="col-12 col-md-6 ">

                    <div class="inner rounded-3 p-3 coll">
                      <div class="d-flex align-items-center">
                        <span class=" p-2 rounded-2 bl me-3">
                          <i class="fa-solid fa-dumbbell fa-lg"></i>
                        </span>
                        <p class="lead par3 mb-0">Protein</p>
                        <h4 class="text-end ms-auto fw-bold">${meals[r].Protein}</h4>
  
                      </div>
                    </div>
                    
                  </div>

                  <div class="col-12 col-md-6 ">

                    <div class="inner rounded-3 p-3 coll">
                      <div class="d-flex align-items-center">
                        <span class=" p-2 rounded-2 ye me-3">
                          <i class="fa-solid fa-wheat-awn fa-lg"></i>
                        </span>
                        <p class="lead par3 mb-0">Carbohydrates</p>
                        <h4 class="text-end ms-auto fw-bold">${meals[r].Carbohydrates}</h4>
  
                      </div>
                    </div>
                    
                  </div>

                  <div class="col-12 col-md-6 ">

                    <div class="inner rounded-3 p-3 coll">
                      <div class="d-flex align-items-center">
                        <span class=" p-2 rounded-2 pi me-3">
                          <i class="fa-solid fa-droplet fa-lg"></i>
                        </span>
                        <p class="lead par3 mb-0">Fat</p>
                        <h4 class="text-end ms-auto fw-bold">${meals[r].Fat}</h4>
  
                      </div>
                    </div>
                    
                  </div>

                  <div class="col-12 col-md-6 ">

                    <div class="inner rounded-3 p-3 coll">
                      <div class="d-flex align-items-center">
                        <span class=" p-2 rounded-2 gr me-3">
                          <i class="fa-solid fa-seedling fa-lg"></i>
                        </span>
                        <p class="lead par3 mb-0">Fiber</p>
                        <h4 class="text-end ms-auto fw-bold">${meals[r].Fiber}</h4>
  
                      </div>
                    </div>
                    
                    
                  </div>

                  <div class="col-12 col-md-6 ">

                    <div class="inner rounded-3 p-3 coll">
                      <div class="d-flex align-items-center">
                        <span class=" p-2 rounded-2 ppi me-3">
                          <i class="fa-solid fa-cube fa-lg"></i>
                        </span>
                        <p class="lead par3 mb-0">Sodium</p>
                        <h4 class="text-end ms-auto fw-bold">${meals[r].Sodium}</h4>
  
                      </div>
                    </div>
                    
                  </div>

                  
                </div>
              </div>

            </div>



            <div class="tab-pane fade heigh" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab" tabindex="0">
              
              ${ch}

            </div>

          </div>

          <div class="row  border-top mx-3 ">
            
          </div>
          <button class="btn  btn-danger mx-auto my-4 ms-3 align-text-bottom" onclick="test()">
            <span><i class="fa-solid fa-arrows-rotate"></i></span>
            Try Another Recipe
          </button>
          

        </div>
      </div>
      

    </div>
  </header>
    `


}