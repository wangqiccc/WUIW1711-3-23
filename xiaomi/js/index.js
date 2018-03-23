//轮播图效果
{
    let imgs=document.querySelectorAll(".imgbox li");
    let pagers=document.querySelectorAll(".pagers li");
    let banner=document.querySelector("#banner");
    let banner_lbtn=document.querySelector(".banner_lbtn");
    let banner_rbtn=document.querySelector(".banner_rbtn");
    pagers.forEach(function(ele,index){

        ele.onclick=function()
        {
            for(let i=0;i<imgs.length;i++)
            {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active2");
            }
            imgs[index].classList.add("active");
            this.classList.add("active2");
            n=index;
        }
    })

    let t=setInterval(move,3000);
	let n=0;
    function move()
	{
		n++;
		if(n===imgs.length)
		{
			n=0;
		}
		if(n<0)
        {
            n=imgs.length-1;
        }
		for(let i=0;i<imgs.length;i++)
		{
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active2");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active2");
	}
	banner.onmouseenter=function(){
        // alert(1);
        clearInterval(t);
    }
	banner.onmouseleave=function()
	{
        t=setInterval(move,3000);
	}
	let flag=true;
    banner_rbtn.onclick=function()
    {
        if(flag)
        {
            flag=false;
            move();
        }

    }
    banner_lbtn.onclick=function()
    {
       if(flag)
       {
           flag=false;
           n-=2;
           move();
       }

    }
    imgs.forEach(function(ele,index){
       ele.addEventListener("transitionend",function()
       {
           flag=true;
       })
    })
}
//闪购效果
{
    const prev=document.querySelector(".star_btn_x");
    const next=document.querySelector(".star_btn_d");
    const inner=document.querySelector(".buy_inner");
    let n=0;
    next.onclick=function(){
        n++;
        prev.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }
    prev.onclick=function(){
        n--;
        next.classList.remove("disable");
        if(n===0){
            this.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }
}
//推荐
{
    const prevt=document.querySelector(".star_tj .star_btn_x");
    const nextt=document.querySelector(".star_tj .star_btn_d");
    const innert=document.querySelector(".tuijian_long");
    let n=0;
    nextt.onclick=function(){
        n++;
        prevt.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        innert.style.marginLeft=-1226*n+"px";
    }
    prevt.onclick=function(){
        n--;
        nextt.classList.remove("disable");
        if(n===0){
            this.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        innert.style.marginLeft=-1226*n+"px";
    }
}
//content 选项卡效果
{
    function content(parent){
        const types=parent.querySelectorAll(".dapei span");
        const goods=parent.querySelectorAll(".goodlist");
        types.forEach(function(ele,index){
            ele.onmouseenter=function(){
                for(let i=0;i<types.length;i++)
                {
                    types[i].classList.remove("active");
                    goods[i].classList.remove("active1");
                }
                this.classList.add("active");
                goods[index].classList.add("active1");
            }

        })
    }
    contentList=document.querySelectorAll(".dapei");
    contentList.forEach(function(ele){
        content(ele);
    });


}
//内容
{
    function neirongcontent(parent)
    {
        const prev=parent.querySelector(".neirong_left");
        const next=parent.querySelector(".neirong_right");
        const inner=parent.querySelector(".nerirong_long");
        const pagers=parent.querySelectorAll(".nr_page_famliy");
        const L=parent.querySelectorAll(".reping_bottom_1")
        console.log(L);
        console.log(pagers);
        let n=0;
        let obj=pagers[0];
        pagers.forEach(function (ele,index) {
            ele.onclick=function(){
                // console.log(index);
                // n=index;
                obj.classList.remove("dian_page");
                this.classList.add("dian_page");
                obj=this;
                inner.style.marginLeft=-296*index+"px";
                n=index;
            }
        })


        next.onclick=function(){
            n++;
            if(n===L.length){
                n=2;
                return;
            }
            console.log(n);
            inner.style.marginLeft=-296*n+"px";
            pagers[n-1].classList.remove("dian_page");
            pagers[n].classList.add("dian_page");
            obj=pagers[n];

        }
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=-296*n+"px";
            pagers[n].classList.add("dian_page");
            pagers[n+1].classList.remove("dian_page");
            obj=pagers[n];
         }

    }
   neirongcontentList=document.querySelectorAll(".nerirong_long_top");
    neirongcontentList.forEach(function(ele){
        neirongcontent(ele);
    });
}
//banner tan
{
    const lables=document.querySelectorAll(".banner_nav li");
    const menus=document.querySelectorAll(".banner_tan");
    let obj=menus[0];
    lables.forEach(function(ele,index) {
       ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
       }
       ele.onmouseleave=function()
       {
           menus[index].style.display="none";
       }
   })
}
//导航选项卡效果
{

    const navspans=document.querySelectorAll(".nav_wenzi .xspan");
    const navbox=document.querySelector(".nav_longbox");
    const navitem=document.querySelectorAll(".nav_logbox_content1");
    // const nav=document.querySelector(".bignav");
    const navspan2=document.querySelectorAll(".nav_wenzi a");
    let flag=0;
    navspan2.forEach(function(ele,index){
        ele.onmouseenter=function(){
            navbox.style.height="0";
        }
    })
    navbox.onmouseleave=function(){
        navbox.style.height="0";
        navbox.style.borderTop="none";
        // flag=1;
        // if(flag)
        // {
        //     navbox.addEventListener("transitionend",function()
        //     {
        //         navbox.style.borderTop="none";
        //     })
        //     flag=0;
        // }
    }


    // console.log(nav);
    console.log(navitem);
    navspans.forEach(function(ele,index){
        ele.onmouseenter=function(){
            navbox.style.height="229px";
            navbox.style.borderTop="1px solid #e0e0e0";
            for(var i=0;i<navitem.length;i++)
            {
                navitem[i].classList.remove("nav_index");
            }
            navitem[index].classList.add("nav_index");
        }

    })


}