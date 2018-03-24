
{
	//banner
	let banner=document.querySelector("#banner");
	$(".banner_pagerbox li").each(function(index){
		$(this).click(function(){
			$(".banner_pagerbox li").removeClass("active")
              	.eq(index).addClass("active");
			$(".banner_pagerbox li").removeClass("active")
				.eq(index).addClass("active");
		})
	});
	var n=0;
    $(".next").click(function(){
		n++;
        if(n===$(".banner_img li").length){
                n=0;
        }
        if(n<0){
            n=$(".banner_img li").length-1;
        }
		$(".banner_pagerbox li").removeClass("active")
			.eq(n).addClass("active");
		$(".banner_img li").removeClass("active")
			.eq(n).addClass("active");

		})
	$(".prev").click(function(){
	    n--;
		if(n===$(".banner_img li").length){
			n=0;
		}
		if(n<0){
			n=$(".banner_img li").length-1;
		}
		$(".banner_pagerbox li").removeClass("active")
			.eq(n).addClass("active");
		$(".banner_img li").removeClass("active")
			.eq(n).addClass("active");
	})

	function move(){
		n++;
		if(n===$(".banner_img li").length){
			n=0;
		}
		if(n<0){
			n=$(".banner_img li").length-1;
		}
		$(".banner_pagerbox li").removeClass("active")
			.eq(n).addClass("active");
		$(".banner_img li").removeClass("active")
			.eq(n).addClass("active");
	}

	let t=setInterval(move,3000);

	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
}

		// 小米单品
{	
	var n = 0;
	$(".star_next").click(function(){
		n++;
		$(".star_prev").removeClass("disable");
		if (n===2){
			$(this).addClass("disable");
		}
		if (n===3){
			n=2;
			return;
		}
	    $(".star_inner").animate({"marginLeft":-992*n+"px"}, 500,"linear");
	});
	$(".star_prev").click(function(){
		n--;
		$(".star_next").removeClass("disable");
		if (n===0){
			$(this).addClass("disable");
		}
		if (n===-1){
			n=0;
			return;
		}
		$(".star_inner").animate({"marginLeft":-992*n+"px"}, 500,"linear");
	});
}


//搭配
{
	$(".type").each(function(index){

		$(this).mouseenter(function(){
			$(".type").removeClass("active").eq(index).addClass("active");
            $(".dapei_rlist").removeClass("active").eq(index).addClass("active")
		})
	})
}

