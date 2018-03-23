//banner
{
	$(".pagebox li").click(function(){
		$(".pagebox li").removeClass("active");
		$(this).addClass("active");
		let index=$(this).index();
		$(".imgbox li").removeClass("active").eq(index).addClass("active");
	})
	let n=0;
	let flag=true;
	$(".next").click(function(){
		if(flag){
			flag=false;
			n++;
			if(n===$(".imgbox li").length){
				n=0;
			}
			$(".pagebox li").removeClass("active").eq(n).addClass("active");
			$(".imgbox li").removeClass("active").eq(n).addClass("active");
			$(".imgbox li").animate({},3000,function(){
				flag=true;
			})
		}
	})
	$(".prev").click(function(){
		if(flag){
			flag=false;
			n--;
			if(n<0){
				n=$(".imgbox li").length-1;
			}
			$(".pagebox li").removeClass("active").eq(n).addClass("active");
			$(".imgbox li").removeClass("active").eq(n).addClass("active");
				$(".imgbox li").animate({},3000, function(){
				flag=true;
			})
		}
			
	})
	$("#dbanner").mouseleave(function(){
		var t=setInterval(function(){
			n++;
			if(n===$(".imgbox li").length){
				n=0;
			}
			if(n<0){
				n=$(".imgbox li").length-1;
			}
			$(".imgbox li").each(function (){
				$(".pagebox li").removeClass("active").eq(n).addClass("active");
				
				$(".imgbox li").removeClass("active").eq(n).addClass("active");
			})
		},3000)
	})
	$("#dbanner").mouseenter(function(){
		// clearInterval(t);
	})
}
// 单品
{
	let n=0;
	$(".star_next").click(function(){
		n++;
		$(".star_prev").removeClass("disable");
		if(n===3){
			$(this).addClass("disable");
		}
		if(n===4){
			n=3;
			return;
		}
		$(".star_inner").css("marginLeft",-n*992);
	})
	$(".star_prev").click(function(){
		n--;
		$(".star_next").addClass("disable");
		if(n===0){
			$(this).addClass("disable");
		}
		if(n===-1){
			n=0;
			return;
			}
		$(".star_inner").css("marginLeft",-n*992);
	})
}
//搭配
{
	// $(".dapei").each(function (){
		$(".type").mouseenter(function () {
			$(".type").removeClass("active").filter(this).addClass("active");
 			var index=$(this).index();
        	$(".goodlist").removeClass("active").eq(index).addClass("active");
	        
		})
	// })
}