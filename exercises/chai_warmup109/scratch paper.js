     id="ProductSection-product-template" data-section-id="product-template" data-section-type="product"
     data-enable-history-state="true">
    <meta itemprop="name" content="{{ product.title }}">
    <meta itemprop="url" content="{{ shop.url }}{{ product.url }}">
    <meta itemprop="image" content="{{ product.featured_image.src | img_url: '800x' }}">

    <div class="container container--media">

        <div class="product-single row">

            {% section 'product-template' %}

            <div class="static-wrapper col-sm-12">
                <div class="container">
                    <div class="row">


                        <div class="odd col-sm-12">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-5 col-xs-12">
                                        {% if product.metafields.sf_product_details.product_details_1_circle_image %}
                                            <div class="img-wrapper"
                                                 style="background-image: url('{{ product.metafields.sf_product_details.product_details_1_circle_image }}');"></div>
                                        {% endif %}
                                    </div>
                                    <div class="context-wrapper col-sm-7 col-xs-12">
                                        {% if product.metafields.sf_product_details.product_details_1_heading %}
                                            <h3>{{ product.metafields.sf_product_details.product_details_1_heading }}</h3>
                                        {% endif %}
                                        <div class="text-wrapper">
                                            {% if product.metafields.sf_product_details.product_details_1_text %}
                                                {{ product.metafields.sf_product_details.product_details_1_text }}
                                            {% endif %}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="even col-sm-12">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-5 col-xs-12">
                                        {% if product.metafields.sf_product_details.product_details_2_circle_image %}
                                            <div class="img-wrapper"
                                                 style="background-image: url('{{ product.metafields.sf_product_details.product_details_2_circle_image }}');"></div>
                                        {% endif %}
                                    </div>
                                    <div class="context-wrapper col-sm-7 col-xs-12">
                                        {% if product.metafields.sf_product_details.product_details_2_heading %}
                                            <h3>{{ product.metafields.sf_product_details.product_details_2_heading }}</h3>
                                        {% endif %}

                                        <div class="text-wrapper">
                                            {% if product.metafields.sf_product_details.product_details_2_text %}
                                                {{ product.metafields.sf_product_details.product_details_2_text }}
                                            {% endif %}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="odd col-sm-12">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-5 col-xs-12">
                                        {% if product.metafields.sf_product_details.product_details_3_circle_image %}
                                            <div class="img-wrapper"
                                                 style="background-image: url('{{ product.metafields.sf_product_details.product_details_3_circle_image }}');"></div>
                                        {% endif %}
                                    </div>
                                    <div class="context-wrapper col-sm-7 col-xs-12">
                                        {% if product.metafields.sf_product_details.product_details_3_heading %}
                                            <h3>{{ product.metafields.sf_product_details.product_details_3_heading }}</h3>
                                        {% endif %}

                                        <div class="text-wrapper">
                                            {% if product.metafields.sf_product_details.product_details_3_text %}
                                                {{ product.metafields.sf_product_details.product_details_3_text }}
                                            {% endif %}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--<div class="black-block-wrapper video-section">
      {% if product.metafields.sf_video_section.video_id %}
        <div class="play-section">
          <div id="vimeo-video" data-video-id="{{ product.metafields.sf_video_section.video_id }}"></div>
          <div class="play-button-wrapper">
            <a id="video-play" href="#">
              <img src="{{ 'play_arrow.png' |  asset_url }}" alt="scroll-arrow"/>
            </a>
            {% if  product.metafields.sf_video_section.play_button_text %}
              <h5>{{ product.metafields.sf_video_section.play_button_text }}</h5>
            {% endif %}
          </div>
        </div>
      {% endif %}

    </div>-->
        </div>


    </div>

    <!-- Add class "video-section--horizontal" to remove section skew-->

    <div class="container container--media clearfix">
        <div class="row product-single">
            <div class="black-block-wrapper video-section product-video">
                <div class="video-section__inner">
                    <video playsinline loop muted id="section-video"
                           {% if product.metafields.sf_video_section.poster %}poster="{{ product.metafields.sf_video_section.poster }}" {% endif %}>
                        <source src="{{ product.metafields.sf_video_section.video_url }}" type="video/mp4">
                    </video>
                    <div class="video-section__play-button-wrapper">
                        <a id="video-play" class="video-section__play-arrow" href="#">
                            <img src="{{ 'play_arrow.png' |  asset_url }}" alt="scroll-arrow"/>
                        </a>
                        {% if  product.metafields.sf_video_section.play_button_text %}
                            <h5 class="video-section__title">
                                {{ product.metafields.sf_video_section.play_button_text }}
                            </h5>
                        {% endif %}
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container clearfix">
        <div class="design-block-wrapper">

            {% if product.metafields.sf_features.section_heading %}
                <h4>{{ product.metafields.sf_features.section_heading }}</h4>
            {% endif %}

            <ul class="shape-wrapper clearfix">
                <li>
                    <a href="{{ product.metafields.sf_features.feature_1_link }}">
                        {% if product.metafields.sf_features.feature_1_image %}
                            <div class="img-wrapper">
                                <img src="{{ product.metafields.sf_features.feature_1_image }}" alt="diamond"/>
                            </div>
                        {% endif %}
                        {% if product.metafields.sf_features.feature_1_heading %}
                            <label>{{ product.metafields.sf_features.feature_1_heading }}</label>
                        {% endif %}
                    </a>
                </li>

                <li>
                    <a href="{{ product.metafields.sf_features.feature_2_link }}">
                        {% if product.metafields.sf_features.feature_2_image %}
                            <div class="img-wrapper">
                                <img src="{{ product.metafields.sf_features.feature_2_image }}" alt="diamond"/>
                            </div>
                        {% endif %}
                        {% if product.metafields.sf_features.feature_2_heading %}
                            <label>{{ product.metafields.sf_features.feature_2_heading }}</label>
                        {% endif %}

                    </a>
                </li>
                <li>
                    <a href="{{ product.metafields.sf_features.feature_3_link }}">
                        {% if product.metafields.sf_features.feature_3_image %}
                            <div class="img-wrapper">
                                <img src="{{ product.metafields.sf_features.feature_3_image }}" alt="diamond"/>
                            </div>
                        {% endif %}
                        {% if product.metafields.sf_features.feature_3_heading %}
                            <label>{{ product.metafields.sf_features.feature_3_heading }}</label>
                        {% endif %}
                    </a>
                </li>
                <li>
                    <a href="{{ product.metafields.sf_features.feature_4_link }}">
                        {% if product.metafields.sf_features.feature_4_image %}
                            <div class="img-wrapper">
                                <img src="{{ product.metafields.sf_features.feature_4_image }}" alt="diamond"/>
                            </div>
                        {% endif %}
                        {% if product.metafields.sf_features.feature_4_heading %}
                            <label>{{ product.metafields.sf_features.feature_4_heading }}</label>
                        {% endif %}
                    </a>
                </li>
                <li>
                    <a href="{{ product.metafields.sf_features.feature_5_link }}">
                        {% if product.metafields.sf_features.feature_5_image %}
                            <div class="img-wrapper">
                                <img src="{{ product.metafields.sf_features.feature_5_image }}" alt="diamond"/>
                            </div>
                        {% endif %}
                        {% if product.metafields.sf_features.feature_5_heading %}
                            <label>{{ product.metafields.sf_features.feature_5_heading }}</label>
                        {% endif %}
                    </a>
                </li>
                <li>
                    <a href="{{ product.metafields.sf_features.feature_6_link }}">
                        {% if product.metafields.sf_features.feature_6_image %}
                            <div class="img-wrapper">
                                <img src="{{ product.metafields.sf_features.feature_6_image }}" alt="diamond"/>
                            </div>
                        {% endif %}
                        {% if product.metafields.sf_features.feature_6_heading %}
                            <label>{{ product.metafields.sf_features.feature_6_heading }}</label>
                        {% endif %}
                    </a>
                </li>
            </ul>
        </div>
    </div>


    <div class="container container--media clearfix">
        <div class="row">
            <div class="bottom-block-wrapper">
                <div class="bottom-block-content change-bg-image-on-mobile-wrapper" {% if product.metafields.sf_bottom_banner.image %} style="background-image: url('{{ product.metafields.sf_bottom_banner.image }}');" {% endif %}>
                    <div class="change-bg-image-on-mobile"
                            {% if product.metafields.sf_bottom_banner.image_mobile %}
                        style="background-image: url('{{ product.metafields.sf_bottom_banner.image_mobile }}');"
                            {% elsif product.metafields.sf_bottom_banner.image %}
                        style="background-image: url('{{ product.metafields.sf_bottom_banner.image }}');"
                            {% endif %}></div>
                </div>
            </div>
        </div>
    </div>

    {% section 'product-details' %}

</div>
</div>

<script>
    // Override default values of shop.strings for each template.
    // Alternate product templates can change values of
    // add to cart button, sold out, and unavailable states here.
    theme.productStrings = {
        addToCart: {{ 'products.product.add_to_cart' | t | json }},
        soldOut: {{ 'products.product.sold_out' | t | json }},
        unavailable: {{ 'products.product.unavailable' | t | json }}
    }
  // Override default values of shop.strings for each template.
  // Alternate product templates can change values of
  // add to cart button, sold out, and unavailable states here.
  theme.productStrings = {
    addToCart: {{ 'products.product.add_to_cart' | t | json }},
    soldOut: {{ 'products.product.sold_out' | t | json }},
    unavailable: {{ 'products.product.unavailable' | t | json }}
  }
</script>