window.addEventListener("load", function(){
	
	
	var isMobile = false;

	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
		isMobile = true;
	}

	const $body = document.getElementsByTagName("body")[0];


	function sticky_func(_targetWrap){

		const $sticy_sec = _targetWrap;
		const $elm_header = document.getElementsByTagName("header")[0];
		const $btn_wrap = document.querySelector($sticy_sec +" > div.btn_wrap");
		const $view_mask = document.querySelector($sticy_sec +" .view_mask");


		window.addEventListener("scroll", function(e){
			var e = e ? e : window.event;
			stcky_start();
		});


		function stcky_start(){
			let st_pos = window.scrollY || document.querySelector("html").scrollTop;
			let $elm_visual_end = document.querySelector(".visual").offsetTop + document.querySelector(".visual").offsetHeight;

			$btn_wrap.style.top = $elm_header.offsetHeight + "px";

			if(st_pos >= $elm_visual_end){
				$btn_wrap.style.borderBottom = "1px solid #bbb";
				$btn_wrap.style.background = "rgba(255, 255, 255, 0.9)";
			}
			else {
				$btn_wrap.style.borderBottom = "none";
				$btn_wrap.style.background = "none";
			}
		}
	}//sticky_func 종료


	function blind(_wrapper, _targetElm){ 
		const $elm_blind = document.querySelectorAll(_wrapper + " " + _targetElm);

		for(var i = 0; i < $elm_blind.length; i++){
			$elm_blind[i].children[0].classList.add("blind");
		}
	}//blind 종료


	function SlideShow_Tabs(_targetWrap, _useTab){

		const $wrap = _targetWrap;
		const $wrap_el = document.querySelector($wrap);
		const $view_mask = document.querySelector($wrap +" .view_mask");
		let $inner_div = document.querySelector($wrap +" .view_mask > div.main");
		let $inner_div_child = $inner_div.children;

		let $tab_btns = document.querySelectorAll($wrap +" .tabs_wrap > button");
		let $div_all = document.querySelector($wrap +" .view_mask > div.div_all");


		(function(){
			init();
		})();


		function init(){
			for(var i = 0; i < $inner_div_child.length; i++){
				$inner_div_child[i].style.position = "relative";
			}
			$inner_div.style.position = "relative";
		}

		
		if($tab_btns && $tab_btns.length){
			for(var i = 0; i < $tab_btns.length; i++){
				$tab_btns[i].index = i;
				$tab_btns[i].addEventListener("click", function(){
					for(var i = 0; i < $tab_btns.length; i++){
						$tab_btns[i].classList.remove("active");
					}
					$tab_btns[this.index].classList.add("active");
					div_change(this.classList[0]);
				});
			}
		}

		function div_change(_cate_name){
			while ($inner_div.firstChild) {
				$inner_div.removeChild($inner_div.lastChild);
			}

			var clone_div = $div_all.getElementsByClassName(_cate_name);

			for(var i = 0; i < clone_div.length; i++){
				$inner_div.appendChild(clone_div[i].cloneNode(true));
				$inner_div.firstElementChild.classList.remove(_cate_name);
			}
			init();
		}

	}// SlideShow_Tabs 종료 



	if(!isMobile){

		let tab_show_01 = SlideShow_Tabs("section.content", true)
		let sticky_func_01 = sticky_func("section.content");
		let span_blind_01 = blind("section.content", "h3");
	
	}
	else {


		if(screen.width >= 768){
			
			let tab_show_01 = SlideShow_Tabs("section.content", true)
			let sticky_func_01 = sticky_func("section.content");
			let span_blind_01 = blind("section.content", "h3");

		}
		else {

			const $blind_con = document.querySelector("section.content .div_all")
			
			$blind_con.classList.remove("blind");
			
		}

	}

});