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
	console.log('putItemsToNewWindow');
	var items;
	//itemを配列として取得する。 一秒ディレイを入れている
	console.log('putItemsToNewWindow2');
	setTimeout(function(){console.log('dummy');},1000);
	items = $('tbody.itemWrapper');
	console.log('putItemsToNewWindow3');
	console.log(items.length);
	//新しいウィンドウにitemをhtmlとして追加する
	for(var i = 0; i < items.length;i++){   
	console.log('putItemsToNewWindowLOOP');
		    nw.body.insertAdjacentHTML('afterend',items[i].outerHTML);
	}
}

//--------------------------------------//
//   MAIN
//--------------------------------------//


//新しいウィンドウを作る
nw = window.open().document;
console.log('ok');
//ページリンクを取得する
pagdiv_a = $('div.pagDiv a');

//最終ページ番号を取得する
var lastpagenum = pagdiv_a[pagdiv_a.length-2].attributes.getNamedItem("page").nodeValue;
console.log(lastpagenum);
for(var j=2 ;j <= lastpagenum ; j++){
	console.log(j);
	call_jquery();
	pagdiv_a = $('div.pagDiv a');
	pagdiv_a[j].click;
	console.log('before pIT');
	setTimeout(putItemsToNewWindow(nw),3000);
}
