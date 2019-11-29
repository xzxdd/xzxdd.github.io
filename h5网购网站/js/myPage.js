$(function(){
	var k = $(window).height();

	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown()
	});
    $('#fullpage').fullpage({
    	navigation:true,
    	scrollingSpeed:1200,
    	afterLoad:function(anchorLink,index){
    		if(index == 2){
    			$(".next").fadeOut();
    			$(".search").show().animate({"right":370},300,"easeOutBack",function(){
    				$(".search-wrods").animate({"opacity":1},500,function(){
    					$(".search").hide();
    				$(".search-02-1").show().animate({"height":30,"bottom":452,"right":250},1000,function(){
    						$(".next").fadeIn();
    					});
    					$(".goods-02").show().animate({"height":218},500);
    					$(".words-02").animate({"opacity":1},800);
    				})  
    			});
    		}
    	},
    	onLeave:function(index,nextIndex,direction){
    		$(".next").fadeOut();
    		// 第二到第三个屏幕的过渡
    		if(index == 2&&nextIndex == 3){
    			$(".shirt-02").show().animate({"bottom":-(k-250),"left":260,"width":207},1000,function(){
    				$(".img-01-a").animate({"opacity":1},500,function(){
    					$(".btn-01-a").animate({"opacity":1},500,function(){
    						$(".next").fadeIn();
    					});
    				});	    
    			});
    			$(".cover").show();

    		}
    		// 第三到第四个屏幕的过渡
    		if(index == 3&&nextIndex == 4){
    			 $(".shirt-02").hide();
    			 $(".t1f").show().animate({"bottom":-(k-250+50),"left":246},900,"easeInCirc",function(){
    			 	$(this).hide();
    			 	$(".car-img").show();
    			 	$(".car").show().animate({"left":"120%"},2000,"easeInOutElastic",function(){
    			 		$(".note").show();
    			 	    $(".note-img,.words-04-a").animate({"opacity":1},1000,function(){
    						$(".next").fadeIn();
    					});
    			 	})
    			 });
    		}
    		// 第四到第五个屏幕的过渡
    		if(index == 4&&nextIndex == 5){
    			//小手
    			$(".hand-05").animate({"bottom":0},1500,function(){
    				//点击鼠标
    				$(".mouse-05-a").animate({"opacity":1},500,function(){
    					//沙发
    					$(".t1f-05").show().animate({"bottom":80},500,function(){
    						//文稿
    						$(".order-05").animate({"bottom":390},500,function(){
    						$(".next").fadeIn();
    					});
    						//文字添加样式
    						$(".words-05").addClass("words-05-a");
    					});

    				});
    			})
    		}
    		// 第五到第六个屏幕的过渡
    		if(index == 5&&nextIndex == 6){
    			$(".t1f-06").show().animate({"bottom":-(k-500),"width":70,"left":"40%"},1200,function(){
    				$(".t1f-06").hide();	
    			});
    			$(".box-06").animate({"left":"38%"},1200,function(){
    				$(this).animate({"bottom":20},500,function(){
    					$(this).hide();
    					//车跑，实际是图移动
    					$(".section6").animate({"backgroundPositionX":"100%"},2500,function(){
    						$(".boy").animate({"height": 305,"bottom": 116,"right": 500},500,function(){
    							$(".pop-07").show();
    							$(".door").animate({"opacity":1},500,function(){
    								$(".girl").show().animate({"right":350,"height":306},500,function(){
    									$(".next").fadeIn();
    								});
    							})
   
    						})
    					});
    					//地址
    					$(".pop-06").show();
    					//字体
    					$(".words-06-a").show().animate({"left": "30%"},2000, "easeOutElastic");
    				});
    			});
    		}

    		// 第六到第七个屏幕的过渡
    		if(index == 6&&nextIndex == 7){
    			setTimeout(function(){
    				$(".star").animate({"width":120},500,function(){
    				$(".good-07").show();
    				$(".next").fadeIn();
    			});
    			},1000)	
    			
    		}
    		// 第七到第八个屏幕的过渡
    		$(".beginShoping").hover(function(event){
    			$(".btn-08-a").toggle();
    		});
    		$(document).mousemove(function(event){//给鼠标添加移事件
    			var x = event.pageX - $(".hand-08").width()/2;//获取鼠标水平移动的值
    			var y = event.pageY +10;//获取鼠标垂直移动的值
    			var miny = k - $(".hand-08").height();
    			if(y < miny){//
    				y = miny;
    			}
    			$(".hand-08").css({"left":x,"top":y})
    		});
    			//再来一次
			$(".again").click(function(){
				$.fn.fullpage.moveTo(1);
				$("img,.move").attr("style","");
			});
    	}
    	
    });
});