// JavaScript Document
$(document).ready(function(){
	var curUrl=window.location.href;
	if(curUrl.indexOf('/'+_htmlBaseDir+'/kj/') != -1) $('#nLi3').addClass('on');
	else if(curUrl.indexOf('/rq/') != -1) $('#nLi2').addClass('on');
	else if(curUrl.indexOf('/history/') != -1) $('#nLi3').addClass('on');
		else if(curUrl.indexOf('/zs/') != -1||curUrl.indexOf('/table/') != -1||curUrl.indexOf('/charts/') != -1) $('#nLi1').addClass('on');
		else $('#nLi4').addClass('on');

	jQuery("#nav").slide({type:"menu", titCell:".nLi", targetCell:".sub", effect:"slideDown", delayTime:300, triggerTime:0, defaultIndex:4, returnDefault:true});
});

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F4f7003a0b94fdf42444dfe37c9cde253' type='text/javascript'%3E%3C/script%3E"));