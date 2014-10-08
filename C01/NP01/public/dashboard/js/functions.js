$(function() {

    //===== Top panel search field =====//

    $('.userNav a.search').click(function () {
        $('.topSearch').fadeToggle(150);
    });

    //===== 2 responsive buttons (320px - 480px) =====//

    $('.iTop').click(function () {
        $('#sidebar').slideToggle(100);
    });

    $('.iButton').click(function () {
        $('.altMenu').slideToggle(100);
    });

    $("ul.userNav li a.sidebar").click(function() {
        $(".secNav").toggleClass('display');
    });


    //===== Tags =====//
    $('.tags').tagsInput({width:'100%'});








	//===== Form elements styling =====//
	
//	$("select, .check, .check :checkbox, input:radio, input:file").uniform();
});

	
