// JavaScript Document
$(document).ready(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();
		$(tabtit).find("li").click(function(e){
			e.preventDefault();
		})
		$(tabtit).find("li").bind(shijian,function(){
			new ChangerTab().Start(this,tabtit,tab_conbox);
		  /*$(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();*/
			return false;
		});
	};
	/*调用方法如下�?*/
	$.jqtab("#tabs","#tab_conbox","click");
	
	$.jqtab("#tabs2","#tab_conbox2","mousemove");
	
});

function ChangerTab(){
	var iTime=0;
	this.Start=function(othis,tabtit,tab_conbox){		
		iTime = window.setTimeout(function(){			
			$(othis).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(othis);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
		},300);
		
		$(othis).mouseout(function(){
			window.clearTimeout(iTime);
		});
	}
}