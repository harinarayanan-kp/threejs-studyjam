
window.onload = function() {
	// document.getElementById('loading').style.display = 'none';
	// document.getElementById('inside').style.opacity = 1;
	var top = document.getElementsByClassName("top");
	var topCount;
	var bottom = document.getElementsByClassName("bottom");
	var bottomCount;
	var content = document.getElementsByClassName("content");
	var contentCount;
	var topWidth;
	var bottomWidth;

	// document.getElementById("showalllink").onclick = function() {
	// 	document.getElementById("showall").style.display = 'block';
	// };



	for (topCount = 0; topCount < top.length; topCount ++) {
	const topRect = top[topCount].getBoundingClientRect();
		if (topCount <= 0) {
			top[topCount].style.borderTopWidth = Math.round((window.innerHeight/2 - topRect.top) / 30 * 100)  / 100 + 'vh';
		} else {
			top[topCount].style.borderTopWidth = '0vh';
		};
	};

	for (bottomCount = 0; bottomCount < bottom.length; bottomCount ++) {
	const bottomRect = bottom[bottomCount].getBoundingClientRect();
		if (bottomCount <= 0) {
			bottom[bottomCount].style.borderBottomWidth = Math.round((bottomRect.top - window.innerHeight/2) / 20 * 100)  / 100 + 'vh';
		};
	};

	for (contentCount = 0; contentCount < content.length; contentCount ++) {
	const contentRect = content[contentCount].getBoundingClientRect();
  	content[contentCount].style.backgroundPositionY = Math.round((contentRect.top/document.documentElement.scrollHeight) * -window.innerHeight/1.5 + (window.innerHeight/11)) + 'px';
	};


document.addEventListener('scroll', function() {

	for (topCount = 0; topCount < top.length; topCount ++) {
		const topRect = top[topCount].getBoundingClientRect();
		if (topRect.top < window.innerHeight*1.5 && topRect.top > (window.innerHeight * -1.5)) {
		topWidth = Math.round((window.innerHeight/2 - topRect.top) / 30 * 100) / 100;
			if (topWidth > 0.35) {
			top[topCount].style.borderTopWidth = topWidth  + 'vh';
			} else { top[topCount].style.borderTopWidth = '0';}
		};
	};

	for (bottomCount = 0; bottomCount < bottom.length; bottomCount ++) {
		const bottomRect = bottom[bottomCount].getBoundingClientRect();
		if (bottomRect.top < window.innerHeight*1.5 && bottomRect.top > (window.innerHeight * -1.5)) {
		bottomWidth = Math.round((bottomRect.top - window.innerHeight/2) / 20 * 100)  / 100;
			if (bottomWidth > 0.35) {
			bottom[bottomCount].style.borderBottomWidth = bottomWidth + 'vh';
			} else { bottom[bottomCount].style.borderBottomWidth =  '0';}
		};
	};
	
	for (contentCount = 0; contentCount < content.length; contentCount ++) {
		const contentRect = content[contentCount].getBoundingClientRect();
		if (contentRect.top < window.innerHeight*1.5 && contentRect.top > (window.innerHeight * -1.5)) {
  		content[contentCount].style.backgroundPositionY = Math.round((contentRect.top/document.documentElement.scrollHeight) * -window.innerHeight/1.5 + (window.innerHeight/11)) + 'px';
		};
	};

  });




}