//--------------------------------------//
//   現在のページにjquery追加
//--------------------------------------//


function call_jquery(){
  var d = document;
  var s = d.createElement('script');
  s.src = 
  'http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js';
  d.body.appendChild(s)
};
call_jquery();


//--------------------------------------//
//   putItemsToNewWindow()
//--------------------------------------//
function putItemsToNewWindow(nw){
	var items;
	//itemを配列として取得する。 一秒ディレイを入れている
	setTimeout(function(){console.log('dummy' + j);},1000);
	items = $('tbody.itemWrapper');
	console.log(items.length);
	//新しいウィンドウにitemをhtmlとして追加する
	for(var i = 0; i < items.length;i++){   
	    nw.body.insertAdjacentHTML('afterend',items[i].outerHTML);
	}
}


// Groval Variable 
var url_pre="";
var url_post="";
//--------------------------------------//
//   makeUrlParts();
//--------------------------------------//
function makeUrlParts(){
    var url1strt = 0
    var url1length = pagdiv_a[2].href.indexOf('_page_',0)+6;
    var url2strt = url1length+1
    var url2length = pagdiv_a[2].href.indexOf('page=',0)+5 - url2strt;
    url_pre = pagdiv_a[2].href.substr(url1strt,url1length);
    url_post = pagdiv_a[2].href.substr(url2strt,url2length);
}

//--------------------------------------//
//   MAIN
//--------------------------------------//


//新しいウィンドウを作る
nw = window.open().document;
//ページリンクを取得する
pagdiv_a = $('div.pagDiv a');

//Url用文字列部品を作る。
makeUrlParts();

//最終ページ番号を取得する
var lastpagenum = pagdiv_a[pagdiv_a.length-2].attributes.getNamedItem("page").nodeValue;
console.log(lastpagenum);
for(var pageNum=2 ;pageNum <= lastpagenum ; pageNum++){
	console.log(pageNum);
    url = url_pre + pageNum + url_post + pageNum;
	console.log(url);
	document.location = url;
	$(function(){
	    setTimeout('console.log("main_setTimeout")',3000);
	    call_jquery();
	    putItemsToNewWindow(nw);
	});
}