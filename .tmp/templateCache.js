angular.module('kolobashkinApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"filters-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <div class=\"back-btn\"> <a href=\"/catalog\"><span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span> Catalog </a> </div> </div> </div> </div> <div class=\"catalog-block product-wrapper\"> <div class=\"row\"> <div class=\"col-md-6 image_gallery\"> <ul> <li class=\"repeat-animation\" ng-repeat=\"image in currentArrayMaterial.images\"> <a href=\"{{image.link}}\" data-lightbox=\"kolobashkin_images\"><img ng-src=\"{{image.link}}\"></a> </li> </ul> </div> <div class=\"col-md-6 item_description\"> <div class=\"showing-materials\" ng-repeat=\"item in currentArray.materials\"> <a ng-show=\"item.isShown\" href=\"/{{aboutItem}}/{{item.name}}\"> <p class=\"product-mat\" ng-class=\"{active : currentMaterial == item.name}\" ng-show=\"item.name == 'oak'\">{{globals.materials_en[0]}}</p> <p class=\"product-mat\" ng-class=\"{active : currentMaterial == item.name}\" ng-show=\"item.name == 'beech'\">{{globals.materials_en[1]}}</p> <p class=\"product-mat\" ng-class=\"{active : currentMaterial == item.name}\" ng-show=\"item.name == 'birch'\">{{globals.materials_en[2]}}</p> <p class=\"product-mat\" ng-class=\"{active : currentMaterial == item.name}\" ng-show=\"item.name == 'pine'\">{{globals.materials_en[3]}}</p> </a> </div> <small>{{globals.text_vendor_code_en}}</small> <h1>{{currentArrayMaterial.vendor_code}}</h1> <div class=\"buy-block\"> <h1><strike ng-show=\"{{!currentArrayMaterial.oldPrice}}\"><font class=\"oldPrice\">{{currentArrayMaterial.oldPrice / globals.exchange_usd | currency}}</font></strike>{{currentArrayMaterial.price}} <span style=\"font-family: Arial\">&#8381;</span> <font color=\"gray\">~{{currentArrayMaterial.price / globals.exchange_usd | currency}}/~{{currentArrayMaterial.price / globals.exchange_euro | currency:'€'}}</font></h1> <div class=\"buy-button\"> <ngcart-addtocart id=\"{{currentArrayMaterial.vendor_code}}\" name=\"{{currentArrayMaterial.vendor_code}}\" price=\"{{currentArrayMaterial.price}}\" quantity=\"1\" quantity-max=\"30\" data=\"[currentArrayMaterial.images[0].link, URL]\"></ngcart-addtocart> </div> </div> <h4>{{globals.text_sizes_en}}</h4> <div class=\"product-sizes\"> <div ng-show=\"currentArray.diameter_top\"> <p>{{globals.text_diameter_top_en}}</p> <p>{{currentArray.diameter_top}}&#8202;mm</p> <hr> </div> <div ng-show=\"currentArray.diameter_bottom\"> <p>{{globals.text_diameter_bottom_en}}</p> <p>{{currentArray.diameter_bottom}}&#8202;mm</p> <hr> </div> <div ng-show=\"currentArray.length_bottom\"> <p>{{globals.text_length_bottom_en}}</p> <p>{{currentArray.length_bottom}}&#8202;mm</p> <hr> </div> <div ng-show=\"currentArray.width_bottom\"> <p>{{globals.text_width_bottom_en}}</p> <p>{{currentArray.width_bottom}}&#8202;mm</p> <hr> </div> <div ng-show=\"currentArray.height\"> <p>{{globals.text_height_en}}</p> <p>{{currentArray.height}}&#8202;mm</p> <hr> </div> </div> <h4 ng-show=\"currentArray.length_top && currentArray.width_top\">{{globals.text_surface_en}}</h4> <div class=\"product-sizes\"> <div ng-show=\"currentArray.length_top\"> <p>{{globals.text_lenght_top_en}}</p> <p>{{currentArray.length_top}}&#8202;mm</p> <hr> </div> <div ng-show=\"currentArray.width_top\"> <p>{{globals.text_width_top_en}}</p> <p>{{currentArray.width_top}}&#8202;mm</p> <hr> </div> </div> <h4 ng-show=\"currentArrayMaterial.weight\">{{globals.text_mass_en}}</h4> <div class=\"product-sizes\"> <div ng-show=\"currentArrayMaterial.weight\"> <p>{{globals.text_weight_en}}</p> <p>{{currentArrayMaterial.weight}}&#8202;g</p> <hr> </div> </div> <h3><strong>{{globals.text_cover_en}}</strong> {{currentArrayMaterial.cover_en}}</h3> <h2 ng-bind-html=\"currentArrayMaterial.description\"></h2> <h2>{{globals.text_product_1_en}}<a href=\"mailto:info@woodybase.com\">info@woodybase.com</a></h2> <h2>{{globals.text_product_2_en}}</h2> </div> </div> </div>"
  );


  $templateCache.put('views/boxes.html',
    "<div class=\"boxes-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Колпаки</h1> </div> </div> <div class=\"row\"> <div class=\"col-md-8 col-sm-8\"> <h4 class=\"margin-helper\">Мы производим и доставляем колпаки из оргстекла под наши подставки. Колпаки доступны для определенных моделей. Они отличаются по толщине (2 мм или 3 мм) и размеру. На данный момент колпаки доступны для следующих моделей: </h4> <div class=\"table-responsive\"> <table class=\"table table-hover table-striped\"> <thead> <tr> <th>Модель</th> <th>Высота</th> <th>Толщина</th> <th>Цена</th> </tr> </thead> <tbody> <tr> <td><a href=\"/S26/oak\" target=\"_blank\">S26B</a></td> <td>100 мм</td> <td>2 мм</td> <td>900 руб.</td> </tr> <tr> <td><a href=\"/S215/beech\" target=\"_blank\">S215B</a></td> <td>100 мм</td> <td>2 мм</td> <td>1500 руб.</td> </tr> <tr> <td><a href=\"/S231/beech\" target=\"_blank\">S231B</a></td> <td>75 мм</td> <td>2 мм</td> <td>1700 руб.</td> </tr> <tr> <td><a href=\"/S218/beech\" target=\"_blank\">S218B</a></td> <td>100 мм</td> <td>2 мм</td> <td>1650 руб.</td> </tr> <tr> <td><a href=\"/S225/beech\" target=\"_blank\">S225B</a></td> <td>150 мм</td> <td>2 мм</td> <td>2000 руб.</td> </tr> <tr> <td><a href=\"/S230U/beech\" target=\"_blank\">S230UB</a></td> <td>150 мм</td> <td>2 мм</td> <td>1800 руб.</td> </tr> <tr> <td><a href=\"/S230/beech\" target=\"_blank\">S230B</a></td> <td>150 мм</td> <td>2 мм</td> <td>3000 руб.</td> </tr> <tr> <td><a href=\"/S235/beech\" target=\"_blank\">S235B</a></td> <td>150 мм</td> <td>2 мм</td> <td>3300 руб.</td> </tr> <tr> <td><a href=\"/S255/beech\" target=\"_blank\">S255B</a></td> <td>170 мм</td> <td>3 мм</td> <td>5000 руб.</td> </tr> <tr> <td><a href=\"/S275/beech\" target=\"_blank\">S275B</a></td> <td>280 мм</td> <td>3 мм</td> <td>6000 руб.</td> </tr> </tbody> </table> </div> <h5 lass=\"margin-helper\">(!) Стоимость указана за подставку с колпаком.</h5> <h5 lass=\"margin-helper\">Колпаки изготавливаются под заказ, есть возможность их изготовить произвольных размеров.</h5> <div class=\"row\"> <div class=\"col-md-8\"> <form class=\"forma-zayavki\" action=\"send.php\" method=\"POST\"> <div class=\"form-group\"> <label>Имя:</label> <input type=\"text\" name=\"name\" placeholder=\"Иванов Иван Иванович\" class=\"form-control\"> </div> <div class=\"form-group\"> <label>E-mail:</label> <input type=\"text\" name=\"email\" placeholder=\"example@mail.ru\" class=\"form-control\" required> </div> <div class=\"form-group\"> <label>Контактный телефон:</label> <input type=\"text\" name=\"tel\" placeholder=\"89213456789\" class=\"form-control\"> </div> <div class=\"form-group\"> <label>Сообщение:</label> <textarea rows=\"10\" class=\"form-control\" name=\"message\" placeholder=\"Напишите необходимые параметры для изготовления колпака: длина, ширина, высота, толщина (2мм или 3мм)\" required></textarea> </div> <button type=\"submit\" class=\"btn btn-primary\">Отправить</button> </form> </div> </div> </div> <div class=\"col-md-4 col-sm-4\"> <a href=\"/S218/beech\"><img src=\"images/9.jpg\" title=\"Колпак под модель S218B\"></a> <p><small>Колпак под модель S218B</small></p> <a href=\"/S230/beech\"><img src=\"images/2.jpg\" title=\"Колпак под модель S230B\"></a> <p><small>Колпак под модель S230B</small></p> <a href=\"/S255/beech\"><img src=\"images/8.jpg\" title=\"Колпак под модель S255\"></a> <p><small>Колпак под модель S255B</small></p> <a href=\"/S275/beech\"><img src=\"images/7.jpg\" title=\"Колпак под модель S275B\"></a> <p><small>Колпак под модель S275B</small></p> </div> </div> </div>"
  );


  $templateCache.put('views/cart.html',
    "<div class=\"cart-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1> Cart </h1> <ngcart-cart></ngcart-cart> <ngcart-checkout service=\"http\" settings=\"{ url:'/checkout' }\"></ngcart-checkout> </div> </div> </div>"
  );


  $templateCache.put('views/catalog.html',
    "<div class=\"filters-block\"> <div class=\"row\"> <div class=\"col-md-4\"> <p><a class=\"filters-btn\" ng-class=\"{active: (mainFilter == '')}\" ng-click=\"mainFilter = ''\">All</a></p> <p><a class=\"filters-btn\" ng-class=\"{active: (mainFilter == 'plinth')}\" ng-click=\"mainFilter = 'plinth'\">Pedestals</a></p> <p><a class=\"filters-btn\" ng-class=\"{active: (mainFilter == 'round')}\" ng-click=\"mainFilter = 'round'\">Round</a></p> <p><a class=\"filters-btn\" ng-class=\"{active: (mainFilter == 'square')}\" ng-click=\"mainFilter = 'square'\">Rectangular</a></p> </div> <div class=\"col-md-4\"> <p><a class=\"filters-btn\" ng-class=\"{active: (mainSort == 'sortCount')}\" ng-click=\"mainSort = 'sortCount'\">Default</a></p> <p><a class=\"filters-btn\" ng-class=\"{active: (mainSort == 'default_settings.price')}\" ng-click=\"mainSort = 'default_settings.price'\">From low to high</a></p> <p><a class=\"filters-btn\" ng-class=\"{active: (mainSort == '-default_settings.price')}\" ng-click=\"mainSort = '-default_settings.price'\">From high to low</a></p> </div> <div class=\"col-md-1\"> <p><a class=\"sale-btn\" ng-class=\"{active: (mainSale !== undefined)}\" ng-click=\"useSale()\">Sale</a></p> </div> <div class=\"col-md-1\"> <p><a class=\"reduction-btn\" ng-class=\"{active: (mainReduction !== undefined)}\" ng-click=\"useReduction()\">Markdown</a></p> </div> <div class=\"col-md-2\"> <input type=\"text\" class=\"form-control search-form\" placeholder=\"Search by vendor code\" ng-model=\"search\"> </div> </div> </div> <div class=\"catalog-block\"> <div class=\"row\"> <div class=\"repeat-animation\" ng-repeat=\"item in items | orderBy: mainSort | filter: {type: mainFilter} | filter : {id: search} | filter: {sale: mainSale}| filter: {reduction: mainReduction}\"> <div class=\"col-md-3 col-sm-6\" ng-show=\"item.isShown\"> <div class=\"wrapper\"> <a href=\"/{{item.id}}/{{item.default_settings.material}}\"> <img ng-src=\"{{item.default_settings.image}}\" title=\"Подставка из бука {{item.id}}B\" ng-if=\"item.default_settings.material=='beech'\"> <img ng-src=\"{{item.default_settings.image}}\" title=\"Подставка из дуба {{item.id}}D\" ng-if=\"item.default_settings.material=='oak'\"> </a> <div class=\"item-description\"> <p><strike ng-show=\"{{item.default_settings.oldPrice}}\"><font class=\"salePrice\">{{item.default_settings.oldPrice / globals.exchange_usd | currency}} </font></strike>{{item.default_settings.price}} <span style=\"font-family: Arial\">&#8381;</span> <font color=\"gray\">~{{item.default_settings.price / globals.exchange_usd | currency}}/~{{item.default_settings.price / globals.exchange_euro | currency:'€'}}</font></p> </div> <div class=\"item-sizes\"> <p> <span ng-show=\"item.diameter_top\">&Oslash;&#8202;{{item.diameter_top}} x</span> <span ng-show=\"item.width_top\">{{item.width_top}} x</span> <span ng-show=\"item.length_top\">{{item.length_top}} x</span> <span ng-show=\"item.height\">{{item.height}} &#8202;mm</span> </p> </div> <div class=\"item-materials\"> <p> <span ng-repeat=\"material in item.materials\"> <a href=\"/{{item.id}}/oak\"><img src=\"/images/oak-texture.png\" class=\"texture\" title=\"Дуб\" ng-show=\"material.name == 'oak' && material.isShown\"></a> <a href=\"/{{item.id}}/beech\"><img src=\"/images/beech-texture.png\" class=\"texture\" title=\"Бук\" ng-show=\"material.name == 'beech' && material.isShown\"></a> <a href=\"/{{item.id}}/birch\"><img src=\"/images/birch-texture.png\" class=\"texture\" title=\"Береза\" ng-show=\"material.name == 'birch' && material.isShown\"></a> <a href=\"/{{item.id}}/pine\"><img src=\"/images/pine-texture.png\" class=\"texture\" title=\"Сосна\" ng-show=\"material.name == 'pine' && material.isShown\"></a> </span> </p> </div> <div class=\"item-new\" ng-show=\"item.promo\"> <p ng-show=\"item.promo\"> <span>{{item.promo}}</span></p> </div> <div class=\"item-exclusive\" ng-show=\"item.exclusive\"> <p ng-show=\"item.exclusive\"> <span>{{item.exclusive}}</span></p> </div> <div class=\"item-sale\" ng-show=\"item.sale\"> <p ng-show=\"item.sale\"> <span>{{item.sale}}</span></p> </div> <div class=\"item-reduction\" ng-show=\"item.reduction\"> <p ng-show=\"item.reduction\"> <span>{{item.reduction}}</span></p> </div> <div class=\"item-id\"> <p>{{item.id}}</p> </div> <div class=\"item-action\"> <a href=\"/{{item.id}}/{{item.default_settings.material}}\"><span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span></a> </div> </div> </div> </div> </div> </div>"
  );


  $templateCache.put('views/completed.html',
    "<div class=\"complited-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Thank you for your order!</h1> <a href=\"/\">Back to the mainpage</a> </div> </div> </div>"
  );


  $templateCache.put('views/contacts.html',
    "<div class=\"contacts-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Contacts</h1> </div> </div> <div class=\"row\"> <div class=\"col-md-8\"> <h4>Russia, Saint-Petersburg</h4> <p>email: <a href=\"mailto:info@woodybase.com\">info@woodybase.com</a></p> <p>vk.com: <a href=\"https://vk.com/kolobashkin_ru\" target=\"_blank\">vk.com/kolobashkin_ru</a></p> <!--<p>Instagram: <a href=\"https://www.instagram.com/kolobashkin.ru/\" target=\"_blank\">instagram.com/kolobashkin.ru</a></p> --> <p>Site: <a href=\"http://woodybase.com/\" target=\"_blank\">Woodybase.com</a></p> <h4 class=\"tel-opt\">Wholesale:</h4> <p><a href=\"tel: +79995280010\">+7 999 528-00-10</a></p> </div> <div class=\"col-md-4\"> <h4>Speshneva Vera</h4> <p>INN 110605439307 </p> <p>OGRNIP 315784700224782</p> <p>Payment account № 40802810370110006307</p> <!--      <p>к/с 30101810645250000092</p> --> </div> </div> </div>"
  );


  $templateCache.put('views/delivery.html',
    "<div class=\"delivery-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Delivery</h1> </div> </div> <div class=\"row\"> <div class=\"col-md-8\"> <p>Please <a href=\"/post\">contact us</a> for the worldwide delivery or send email to <a href=\"mailto:info@woodybase.com\">info@woodybase.com</a>, we will glad to calculate the cost</p> </div> </div> </div>"
  );


  $templateCache.put('views/gallery.html',
    "<div class=\"gallery-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Gallery</h1> </div> </div> <!--  <div class=\"col-md-6 col-sm-6\">\n" +
    "      <img src=\"images/13.jpg\">\n" +
    "      <p><small>Йол и шлюпка, производители - Мастер-корабел и Фальконет</small></p>\n" +
    "    </div>\n" +
    "--> <div class=\"row\"> <div class=\"col-md-6 col-sm-6\"> <a href=\"images/14.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/14.jpg\" title=\"Подставка S230B\"></a> <p><small><a href=\"/S230/beech\">S230B</a>, Т-90А from Dmitruy Scursis (ZVEZDA + refinement)</small></p> </div> <div class=\"col-md-3 col-sm-3\"> <a href=\"images/6.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/6.jpg\" title=\"Подставка S212B\"></a> <p><small><a href=\"/S212/beech\">S212B</a>, model: «Stalker», Evolution Miniatures, author: Menelay</small></p> </div> <div class=\"col-md-3 col-sm-3\"> <a href=\"images/1.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/1.jpg\" title=\"Подставка S235B\"></a> <p><small><a href=\"/S235/beech\">S235B</a>, model: Т-90, ZVEZDA, author: Fedorov Alexander</small></p> <a href=\"images/3.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/3.jpg\" title=\"Подставки P130B\"></a> <p><small><a href=\"/P130/beech\">P130B</a></small></p> </div> </div> <div class=\"row\"> <div class=\"col-md-3 col-sm-6\"> <a href=\"images/11.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/11.jpg\" title=\"Подставка S215B\"></a> <p><small><a href=\"/S215/beech\">S215B</a>, \"КВ-1\", scale 1/48, author: Vyacheslav Ermakov</small></p> <a href=\"images/12.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/12.jpg\" data-lightbox=\"kolobashkin_images\"></a> <p><small><a href=\"/S210/beech\">S210B</a>, scale 1/16, author: Vyacheslav Ermakov</small></p> </div> <div class=\"col-md-3 col-sm-6\"> <a href=\"images/5.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/5.jpg\" title=\"Подставка P460D\"></a> <p><small><a href=\"/P460/oak\">P460D</a>, model: «The Scotsman», author: Alexander Snegirev</small></p> </div> <div class=\"col-md-3 col-sm-6\"> <a href=\"images/4.jpg\" data-lightbox=\"kolobashkin_images\"> <img src=\"images/4.jpg\" title=\"Подставка R560B\"></a> <p><small><a href=\"/R560/beech\">R560B</a>, Kharkiv. 1943г., scale 1/16. Resin. Manufacturer - Quasar Miniatures. Sculptor Menelay, author: Maksim Veretelnikov</small></p> </div> <div class=\"col-md-3 col-sm-6\"> <a href=\"images/10.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/10.jpg\" title=\"Подставка R1120B\"></a> <p><small><a href=\"/R1120/beech\">R1120B</a>, \"Pobeda\", scale 1/43, author: Vyacheslav Ermakov</small></p> <a href=\"images/15.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/15.jpg\" title=\"Подставка S230B\"></a> <p><small><a href=\"/S230/beech\">S230B</a>, Т-10М from Meng, author: Vyacheslav Ermakov</small></p> <a href=\"images/17.jpg\" data-lightbox=\"kolobashkin_images\"><img src=\"images/17.jpg\" title=\"Подставка P460CD\"></a> <p><small><a href=\"/P460C/oak\">P460CD</a>, scale 1\\10 Manufacturer - ALTORES STUDIO, author: Vyacheslav Ermakov</small></p> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"row main-block hidden-xs\"> <div class=\"col-md-12 col-sm-12\"> <ul rn-carousel rn-carousel-controls rn-carousel-auto-slide rn-carousel-controls-allow-loop class=\"main-slider\"> <li ng-repeat=\"image in sliderImages\"> <a ng-href=\"{{ image.href }}\"><img class=\"img-responsive\" ng-src=\"{{ image.src }}\"></a> </li> </ul> </div> <!-- <div rn-carousel-indicators ng-if=\"sliderImages.length > 1\" slides=\"sliderImages\" rn-carousel-index=\"carouselIndex\"></div> --> <!-- <a class=\" hover-block\" href=\"/catalog\">\n" +
    "                <div class=\"promo-1 main-promo\">\n" +
    "                    <img src=\"/images/promo-main.png\">\n" +
    "                    <h4>Final trait for you model</h4></div>\n" +
    "            </a> --> </div> <div class=\"row main-block\"> <div class=\"col-md-8 col-md-offset-2 col-sm-12 col-xs-12 main-description\"> <!-- <p><b>We are really glad to see you on our site</b></p> --> <h1>We are young company from Saint-Petersburg, Russia. You can find different interesting bases in our <a href=\"/catalog\">catalog</a><br>If you have any questions about our products or want to make a new order, please <a href=\"/post\">contact us</a> or send email to <a href=\"mailto:info@woodybase.com\">info@woodybase.com</a></h1> <!--<p class=\"pull-right\">Sincerely yours,  «<b>Woodybase.com</b>»</p> --> </div> </div> <div class=\"row main-block\"> <div class=\"col-md-4 col-sm-6 col-xs-12 item-main-page\"> <a class=\"\" href=\"/catalog\"> <img class=\"img-responsive\" src=\"/images/main-page/solidity.jpg\"> </a> <p class=\"text-center\">Presents solidity</p> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 item-main-page\"> <a class=\"\" href=\"/P130/beech\"> <img class=\"img-responsive\" src=\"/images/main-page/42.jpg\"> </a> <p class=\"text-center\">Starts from <strong>~€4</strong></p> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 item-main-page\"> <a class=\"\" href=\"/R1120/beech\"> <img class=\"img-responsive\" src=\"/images/main-page/fits.jpg\"> </a> <p class=\"text-center\">Bases fits to each minuature</p> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 item-main-page\"> <a class=\"\" href=\"/S235/beech\"> <img class=\"img-responsive\" src=\"/images/main-page/each.jpg\"> </a> <p class=\"text-center\">Each size you want</p> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 item-main-page\"> <a class=\"\" href=\"/P460C/oak\"> <img class=\"img-responsive\" src=\"/images/main-page/best.jpg\"> </a> <p class=\"text-center\">Best models — best bases</p> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 item-main-page\"> <a class=\"\" href=\"/S218/beech\"> <img class=\"img-responsive\" src=\"/images/main-page/final.jpg\"> </a> <p class=\"text-center\">Final trait for you model</p> </div> </div> <div class=\"row\"> <div class=\"col-md-3 col-sm-6 main-margin\"> <a class=\"hover-block\" href=\"/delivery\"> <div class=\"promo-2 bottom-promo\"> <img src=\"/images/package.svg\"> <h4>Delivery over the world</h4></div> </a> </div> <div class=\"col-md-3 col-sm-6 main-margin\"> <a class=\"hover-block\" href=\"/shops\"> <div class=\"promo-2 bottom-promo\"> <img src=\"/images/restaurant.svg\"> <h4>Offline distributors</h4></div> </a> </div> <div class=\"col-md-3 col-sm-6 main-margin\"> <a class=\"hover-block\" href=\"/payment\"> <div class=\"promo-2 bottom-promo\"> <img src=\"/images/credit-card.svg\"> <h4>Pay from the site</h4></div> </a> </div> <div class=\"col-md-3 col-sm-6 main-margin\"> <a class=\"hover-block\" href=\"/contacts\"> <div class=\"promo-2 bottom-promo\"> <img src=\"/images/business.svg\"> <h4>Wholesale</h4></div> </a> </div> </div>"
  );


  $templateCache.put('views/news.html',
    "<div class=\"news-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Свежие новости</h1> </div> </div> <div class=\"row news\"> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_235\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?135\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_235\", -100461189, 235, 'H_043B8QiORsUDy_nmY1CSwBog', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_234\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?135\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_234\", -100461189, 234, 'ptwdoBreghhx256j70l3DrtucA', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_232\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?135\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_232\", -100461189, 232, 'tOKdqhzGla0kvy11HTE_5HFRhA', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_230\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_230\", -100461189, 230, 'O4i-iEpkhiTUJV8jkNprp2RlXw', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_228\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_228\", -100461189, 228, '8kIoxdCuDhXtNl7Hu-6fUM_m_g', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_224\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_224\", -100461189, 224, 'fsjxArlK66S2i4A8ynnDvs0nfw', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_222\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_222\", -100461189, 222, 'U-t8MOtuUYPqorc85dJgGmzB8A', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_219\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_219\", -100461189, 219, 'Uy2tFg8np6hUXor7EfGo7h-UIQ', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_218\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_218\", -100461189, 218, 'LP5_KHP11bHLMAVfPrC4ntaXlQ', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_215\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_215\", -100461189, 215, 'FGuQAT0G3gRgfcrXMqE7HBqheQ', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_213\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_213\", -100461189, 213, 'tca6L5Kd2_hvw52DYdzpL6OuTA', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_212\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_212\", -100461189, 212, '7y2I1XWxIib-vHfvzHAt0U3WLQ', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> <div class=\"col-md-8\"> <div id=\"vk_post_-100461189_207\"></div><script type=\"text/javascript\">(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//vk.com/js/api/openapi.js?133\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));  (function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post(\"vk_post_-100461189_207\", -100461189, 207, 'kbOdrE6X-HGl_PrBg-OhpMQlrA', {width: 'auto'})) setTimeout(arguments.callee, 50);  }());</script> </div> </div> </div>"
  );


  $templateCache.put('views/payment.html',
    "<div class=\"payments-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Payment</h1> </div> </div> <div class=\"row\"> <div class=\"col-md-6\"> <form method=\"POST\" name=\"paymentForm\" action=\"https://money.yandex.ru/eshop.xml\"> <input type=\"hidden\" name=\"shopId\" value=\"127548\"> <input type=\"hidden\" name=\"scid\" value=\"93824\"> <input type=\"hidden\" name=\"customerNumber\" size=\"64\"> <div class=\"form-group\"> <label>Total cost in rubles:</label> <input class=\"form-control\" type=\"number\" name=\"sum\" size=\"20\" placeholder=\"Total cost in rubles\" ng-model=\"main.sum\" ng-class=\"{ 'has-error' : paymentForm.sum.$invalid && !paymentForm.sum.$pristine }\" ng-model=\"main.sum\" required> </div> <div class=\"form-group\"> <label for=\"custName\">First Name, Last name:</label> <input type=\"text\" name=\"custName\" maxlength=\"80\" placeholder=\"Your name\" class=\"form-control\" ng-class=\"{ 'has-error' : paymentForm.custName.$invalid && !paymentForm.custName.$pristine }\" ng-model=\"main.custName\" required> </div> <div class=\"form-group\"> <label for=\"custAddr\">Address:</label> <input type=\"text\" name=\"custAddr\" maxlength=\"300\" placeholder=\"Delivery address\" class=\"form-control\" ng-class=\"{ 'has-error' : paymentForm.custAddr.$invalid && !paymentForm.custAddr.$pristine }\" ng-model=\"main.custAddr\" required> </div> <div class=\"form-group\"> <label for=\"custEmail\">E-mail:</label> <input type=\"email\" name=\"custEmail\" maxlength=\"300\" placeholder=\"Email\" class=\"form-control\" ng-class=\"{ 'has-error' : paymentForm.custEmail.$invalid && !paymentForm.custEmail.$pristine }\" ng-model=\"main.custEmail\" required> </div> <div class=\"form-group\"> <label for=\"orderDetails\">Details of the order, telephone number:</label> <textarea type=\"text\" name=\"orderDetails\" rows=\"10\" cols=\"60\" placeholder=\"Your order\" class=\"form-control\" ng-class=\"{ 'has-error' : paymentForm.orderDetails.$invalid && !paymentForm.orderDetails.$pristine }\" ng-model=\"main.orderDetails\" required></textarea> </div> <div class=\"radio\"> <label> <input type=\"radio\" name=\"paymentType\" checked value=\"AC\"> Using credit card/debet card </label> </div> <!--\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"PC\">\n" +
    "              Со счета в Яндекс.Деньгах (яндекс кошелек)\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"WM\">\n" +
    "              Оплата cо счета WebMoney\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"AB\">\n" +
    "              Оплата через Альфа-Клик\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"QW\">\n" +
    "              Оплата через Qiwi\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"KV\">\n" +
    "              КупиВкредит\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"GP\">\n" +
    "              Оплата по коду через терминал\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"MA\">\n" +
    "              Оплата через MasterPass\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"PB\">\n" +
    "              Оплата через Промсвязьбанк\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "            <label>\n" +
    "              <input type=\"radio\" name=\"paymentType\" value=\"QP\">\n" +
    "              Куппи.ру\n" +
    "            </label>\n" +
    "          </div>\n" +
    "\n" +
    "          --> <button type=\"submit\" ng-disabled=\"paymentForm.$invalid\" class=\"btn btn-primary\">Send</button> </form> <!--\n" +
    "\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"cps_phone\">Телефон:</label>\n" +
    "          <input type=\"tel\" name=\"cps_phone\" placeholder=\"Номер телефона\" class=\"form-control\" ng-class=\"{ 'has-error' : paymentForm.cps_phone.$invalid && !paymentForm.cps_phone.$pristine }\" ng-model=\"main.cps_phone\" required>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <br> Способ оплаты:\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"AC\" type=\"radio\" checked=\"checked\"> С банковской карты\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"PC\" type=\"radio\"> Со счета в Яндекс.Деньгах (яндекс кошелек)\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"GP\" type=\"radio\"> Оплата по коду через терминал\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"WM\" type=\"radio\"> Оплата cо счета WebMoney\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"AB\" type=\"radio\"> Оплата через Альфа-Клик\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"PB\" type=\"radio\"> Оплата через Промсвязьбанк\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"MA\" type=\"radio\"> Оплата через MasterPass\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"QW\" type=\"radio\"> Оплата через Qiwi\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"QP\" type=\"radio\"> Куппи.ру\n" +
    "        <br>\n" +
    "        <input name=\"paymentType\" value=\"KV\" type=\"radio\"> КупиВкредит\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <input type=\"submit\" value=\"Оплатить\">\n" +
    "        <br>\n" +
    "--> <!--\n" +
    "Ниже перечислены доступные формы оплаты.\n" +
    "Перечисленные методы оплаты могут быть доступны в боевой среде после подписания Договора.\n" +
    "Какие именно методы доступны для вашего Договора, вы можете уточнить у своего персонального менеджера.\n" +
    "\n" +
    "AB - Альфа-Клик\n" +
    "AC - банковская карта\n" +
    "GP - наличные через терминал\n" +
    "MA - MasterPass\n" +
    "MC - мобильная коммерция\n" +
    "PB -интернет-банк Промсвязьбанка\n" +
    "PC - кошелек Яндекс.Денег\n" +
    "SB - Сбербанк Онлайн\n" +
    "WM - кошелек WebMoney\n" +
    "WQ - Qiwi\n" +
    "QP - Куппи.ру\n" +
    "KV - КупиВкредит\n" +
    "\n" +
    "<input name=\"paymentType\" value=\"GP\" type=\"radio\">Оплата по коду через терминал<br>\n" +
    "<input name=\"paymentType\" value=\"WM\" type=\"radio\">Оплата cо счета WebMoney<br>\n" +
    "<input name=\"paymentType\" value=\"AB\" type=\"radio\">Оплата через Альфа-Клик<br>\n" +
    "<input name=\"paymentType\" value=\"PB\" type=\"radio\">Оплата через Промсвязьбанк<br>\n" +
    "<input name=\"paymentType\" value=\"MA\" type=\"radio\">Оплата через MasterPass<br>\n" +
    "<input name=\"paymentType\" value=\"QW\" type=\"radio\">Оплата через Qiwi<br>\n" +
    "<input name=\"paymentType\" value=\"QP\" type=\"radio\">Куппи.ру<br>\n" +
    "<input name=\"paymentType\" value=\"KV\" type=\"radio\">КупиВкредит<br>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "Перечисление всех методов оплаты https://tech.yandex.ru/money/doc/payment-solution/ref..\n" +
    "--> <!--\n" +
    "EPS и PNG файлы яндекс.кошелька\n" +
    "https://money.yandex.ru/partners/doc.xml?id=522991\n" +
    "\n" +
    "EPS и PNG других платежных методов\n" +
    "https://money.yandex.ru/doc.xml?id=526421\n" +
    "--></div></div></div>"
  );


  $templateCache.put('views/post.html',
    "<div class=\"post-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Mail Us</h1> </div> </div> <div class=\"row\"> <div class=\"col-md-6 col-sm-6\"> <form action=\"send.php\" method=\"POST\"> <div class=\"form-group\"> <label>Name:</label> <input type=\"text\" name=\"name\" placeholder=\"Your name\" class=\"form-control\"> </div> <div class=\"form-group\"> <label>E-mail:</label> <input type=\"text\" name=\"email\" placeholder=\"example@mail.com\" class=\"form-control\" required> </div> <div class=\"form-group\"> <label>Telephone number: </label> <input type=\"text\" name=\"tel\" placeholder=\"Your telephone number\" class=\"form-control\"> </div> <div class=\"form-group\"> <label>Message: </label> <textarea rows=\"10\" class=\"form-control\" name=\"message\" required></textarea> </div> <button type=\"submit\" class=\"btn btn-primary\">Send</button> </form> </div> </div> </div>"
  );


  $templateCache.put('views/shops.html',
    "<div class=\"shop-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Disctributors</h1> </div> </div> <div class=\"row\"> <div class=\"col-md-8\"> <h4 class=\"margin-helper\">Shops in Saint-Petersburg:</h4> <p><strong>«Солдатики» </strong><a href=\"http://magazin-soldatikov.ru/\" target=\"_blank\">magazin-soldatikov.ru</a></p> <p><strong>«Военный коллекционер» </strong><a href=\"http://www.militaria-centre.com/\" target=\"_blank\">www.militaria-centre.com</a></p> <p><strong>«Интересный магазин»</strong><a href=\"http://mymodelizm.ru/\" target=\"_blank\">mymodelizm.ru</a></p> <h4 class=\"tel-opt margin-helper\">Shops in Moscow:</h4> <p><strong>«Startset» </strong><a href=\"http://startset.ru/\" target=\"_blank\">startset.ru</a></p> <h4 class=\"tel-opt margin-helper\">Shops in other regions:</h4> <dl> <dt><p><em>Arkhangelsk:</em></p></dt> <dd> <p><strong>«Солдатиков.нет» </strong><a href=\"http://soldatikov.net/\" target=\"_blank\">soldatikov.net</a></p> </dd> <dt><p><em>Voronezh:</em></p></dt> <dd> <p><strong>Хобби-Центр «Илья Муромец» </strong><a href=\"https://vk.com/iliamurometz\" target=\"_blank\">vk.com/iliamurometz</a></p> </dd> <dt><p><em>Tula:</em></p></dt> <dd> <p><strong>Хобби-Центр «Магазин Моделей» </strong><a href=\"http://magmodels.ru/\" target=\"_blank\">magmodels.ru</a></p> </dd> <dt><p><em>Naberezhnye Chelny:</em></p></dt> <dd> <p><strong>Отдел моделизма, хозтовары \"НАФАНЯ\" </strong><a href=\"https://vk.com/rat_nik\" target=\"_blank\">vk.com/rat_nik</a></p> </dd> </dl> </div> </div> </div>"
  );


  $templateCache.put('views/successful.html',
    "<div class=\"shop-block\"> <div class=\"row\"> <div class=\"col-md-12\"> <h3>Your message has been sent successfully!<br> Our manager should be contact you as soon as possible </h3></div> </div> </div>"
  );

}]);
