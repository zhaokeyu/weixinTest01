var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var Event = laya.events.Event;
var Tween = Laya.Tween;
var Ease = Laya.Ease;
var Sprite = Laya.Sprite;
var Stage = Laya.Stage;
var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Rectangle = Laya.Rectangle;

var objs;

function prompt() {
	var self = this;
	promptUI.super(this);
}
var ls_anim = true;
var lNum = 1;
var lenght = 21;

function p1() {
	var self = this;
	p1UI.super(this);

	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);
		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});

	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);

		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
	});

}
function p0() {
	var self = this;
	p0UI.super(this);

	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});

}
function p2() {
	var self = this;
	p2UI.super(this);

	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});

}

function p3() {
	var self = this;
	p3UI.super(this);

	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});
}

function p4() {
	var self = this;
	p4UI.super(this);
	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});

}

function p5() {
	var self = this;
	p5UI.super(this);
	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});

}

function p6() {
	var self = this;
	p6UI.super(this);
	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});
}

function p7() {
	var self = this;
	p7UI.super(this);
	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});

}
function p8() {
	var self = this;
	p8UI.super(this);
	//上次记录的两个触模点之间距离
	var lastDistance = 0;
	var sp = self.p1;
	setTimeout(function() {
		objs = self;
	}, 1100);
	var dragRegion;
	var fg = true;

	sp.on(Event.MOUSE_DOWN, this, onStartDrag);
	sp.on(Event.MOUSE_DOWN, this, onMouseDown);
	sp.on(Event.MOUSE_UP, this, onMouseUp);
	sp.on(Event.MOUSE_OUT, this, onMouseUp);

	showDragRegion();

	setInterval(function() {

		if (sp && sp.scaleX <= 1.1) {
			Tween.to(sp, {
				x: 320,
				y: 518
			}, 200);

		}
	}, 100);

	function showDragRegion() {
		//拖动限制区域
		var dragWidthLimit = 850 * 3;
		var dragHeightLimit = 400 * 3;;
		dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);

		//画出拖动限制区域
		//Laya.stage.graphics.drawRect(dragRegion.x, dragRegion.y, dragRegion.width, dragRegion.height,null, "#FFFFFF", 2);
	}

	function onStartDrag(e) {
		setTimeout(function() {

			if (!fg || sp.scaleX == 1) return;
			//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
			sp.startDrag(dragRegion, false, 100);

		}, 100);
	}

	function onMouseDown(e) {
		var touches = e.touches;
		if (touches && touches.length == 2) {

			lastDistance = getDistance(touches);
			Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
		}
	}

	function onMouseMove(e) {
		fg = false;
		var distance = getDistance(e.touches);
		//判断当前距离与上次距离变化，确定是放大还是缩小
		const factor = 0.005;
		sp.scaleX += (distance - lastDistance) * factor;
		sp.scaleY += (distance - lastDistance) * factor;
		if (sp.scaleX < 1) {
			sp.scale(1, 1);
		} else if (sp.scaleX > 3) {
			sp.scale(3, 3);
		}
		lastDistance = distance;
	}

	function onMouseUp(e) {
		setTimeout(function() {
			fg = true;
		}, 100);
		Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;
			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.on(Event.MOUSE_DOWN, this, function(e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	var boolS = true;
	self.on(Event.MOUSE_UP, this, function(e) {

		if (!boolS) return;
		boolS = false;
		setTimeout(function() {
			boolS = true;
		}, 1200);
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if ((up + 20) < down && ls_anim && fg && sp.scaleX == 1) {
			downFun();
		}
		if ((up - 20) > down && ls_anim && fg && sp.scaleX == 1) {
			topFun();
		}
	});

}

function topFun() {

	if (!objs) return;
	if (lNum > 1) {
		var nums = lNum - 1;
		var p = new gArr[(nums - 1)](); 
		Laya.stage.addChildAt(p, 1);
		p.alpha = 0;
		p.y = -1036;
		Tween.to(p, {
			alpha: 1,
			y: 0
		}, 800, Ease['linearIn']);

		Tween.to(objs, {
			alpha: 0
		}, 800, Ease['linearIn'], Handler.create(this, function() {

			lNum = nums;
			Laya.stage.removeChild(objs);
		}));

	}

}

function downFun() { 
	if (!objs) return;
	if (lNum > 9) {
		return;
	}

	var nums = lNum + 1;
	var p = new gArr[(nums - 1)](); 
	Laya.stage.addChildAt(p, 1);
		Laya.stage.addChildAt(p, 1);
	p.alpha = 0;
	p.y = 1036;
	Tween.to(p, {alpha: 1,y: 0}, 800, Ease['linearIn']);
	Tween.to(objs, {
		alpha: 0
	}, 800, Ease['linearIn'], Handler.create(this, function() {
		lNum = nums;
		Laya.stage.removeChild(objs);
	}));

}

function page() {
	var self = this;
	pageUI.super(this);

	self.left.on(Event.MOUSE_UP, this, topFun);

	self.right.on(Event.MOUSE_UP, this, downFun);

}
var loadObj = null;

function load() {
	var self = this;
	loadUI.super(this);
	loadObj = this;

}

Laya.class(load, "load", loadUI);
Laya.class(p1, "p1", p1UI);
Laya.class(p0, "p0", p0UI);
Laya.class(p2, "p2", p2UI);
Laya.class(p3, "p3", p3UI);
Laya.class(p4, "p4", p4UI);
Laya.class(p5, "p5", p5UI);
Laya.class(p6, "p6", p6UI);
Laya.class(p7, "p7", p7UI);
Laya.class(p8, "p8", p8UI);

Laya.class(page, "page", pageUI);


var gArr = [p1, p0, p2, p3, p4, p5, p6, p7, p8];
Laya.init(640, 1036);
Laya.stage.scaleMode = 'fixedheight';
Laya.stage.alignH = "center";
//  Laya.stage.screenMode = "vertical";
Laya.stage.screenMode = Stage.SCREEN_VERTICAL;

Laya.loader.load("js/load.json", Handler.create(this, loading), null, Loader.ATLAS);

var num = 0;
var count = 1;
var obj = null;

function loading() {
	Laya.stage.addChildAt(new load(), 0); 
	Laya.loader.load("js/content.json", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
}

//进度条界面
function onAssetLoaded() {
	num++;
	S = num / count; //计算百分比
	loadObj.t.text = parseInt(S * 100) + "%"; //文字百分比 
	if (num >= count) {
		setTimeout(function() {
			Laya.stage.removeChild(loadObj)
			obj = document.getElementById('page');
			Laya.stage.addChildAt(new p1(), 0);
			Laya.stage.addChildAt(new page(), 1);
			Laya.stage.removeChild(obj)
		}, 2000);
	}

}

var tm = setInterval(function() {
	var myWidth = document.body.clientWidth;
	var myHeight = document.body.clientHeight;
	if (!obj) return;
	if (myWidth < myHeight) {
		obj.style.display = 'block';
		bool = true;
	} else {
		obj.style.display = 'none';
		bool = false;
		index = 1;
	}
	setTimeout(function() {
		clearInterval(tm);
		obj.style.display = 'none';
	}, 300);
}, 100);

var tm2 = setInterval(function() {
	var myWidth = document.body.clientWidth;
	var myHeight = document.body.clientHeight;
	if (!obj) return;
	if (myWidth < myHeight) {

	} else {

	}
}, 100);