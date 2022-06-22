window.onload = function() {
    
    new WOW().init();

    $(document).on('click', '.qa-item', function(e) {
        let _this = $(this)
        
        if(_this.find('.qa-content').is(':visible')) {
            _this.find('.qa-content').slideToggle(function() {
                _this.find('.qa-head').css('border-bottom-left-radius', '10px')
                _this.find('.qa-head').css('border-bottom-right-radius', '10px')
            })
            _this.find('img').attr('src', 'images/qa-down.png')
        } else { 
            _this.find('.qa-content').slideToggle()
            _this.find('.qa-head').css('border-bottom-left-radius', 0)
            _this.find('.qa-head').css('border-bottom-right-radius', 0)
            _this.find('img').attr('src', 'images/qa-up.png')
          
        }
    })
    $(document).on('click', '#header .bar', function(e) {
        if ($('#header .menu').is(':visible')) {
            $('#header .menu').slideToggle()
            $(this).html('<span></span><span></span><span></span>').removeClass('close')
        } else {
            $('#header .menu').slideToggle()
            $(this).html('&times;').addClass('close')
        }
    })

    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 

    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

    // $(document).on('click touchstart', function (e) {
    //     if ($(e.target).closest("#header .menu").length === 0 && $(e.target).closest("#header .menu").length === 0) {
    //         $("#header .menu").css('display', 'none');
    //     }
    // })

}