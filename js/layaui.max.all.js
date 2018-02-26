var CLASS$ = Laya.class;
var STATICATTR$ = Laya.static;
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var loadUI = (function(_super) {
	function loadUI() {

		this.t = null;

		loadUI.__super.call(this);
	}

	CLASS$(loadUI, 'ui.test.loadUI', _super);
	var __proto__ = loadUI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(loadUI.uiView);
	}

	STATICATTR$(loadUI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 0,
					"x": 0,
					"skin": "img/bg.png"
				}
			}, {
				"type": "Label",
				"props": {
					"y": 482,
					"x": 209,
					"width": 222,
					"var": "t",
					"valign": "middle",
					"text": "0%",
					"height": 72,
					"fontSize": 30,
					"color": "#ffffff",
					"bold": true,
					"align": "center" 
				}
			}]
		};
	}]);
	return loadUI;
})(View);

var p1UI = (function(_super) {
	function p1UI() {

		this.p1 = null;

		p1UI.__super.call(this);
	}

	CLASS$(p1UI, 'ui.test.p1UI', _super);
	var __proto__ = p1UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p1UI.uiView);
	}

	STATICATTR$(p1UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 0,
					"x": 0,
					"width": 640,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-01.jpg",
					"pivotY": 518,
					"pivotX": 320,
					"height": 1036
				}
			}]
		};
	}]);
	return p1UI;
})(View);
var p0UI = (function(_super) {
	function p0UI() {

		this.p1 = null;

		p0UI.__super.call(this);
	}

	CLASS$(p0UI, 'ui.test.p2UI', _super);
	var __proto__ = p0UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p0UI.uiView);
	}

	STATICATTR$(p0UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-02.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p0UI;
})(View);
var p2UI = (function(_super) {
	function p2UI() {

		this.p1 = null;

		p2UI.__super.call(this);
	}

	CLASS$(p2UI, 'ui.test.p2UI', _super);
	var __proto__ = p2UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p2UI.uiView);
	}

	STATICATTR$(p2UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-03.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p2UI;
})(View);
var p3UI = (function(_super) {
	function p3UI() {

		this.p1 = null;

		p3UI.__super.call(this);
	}

	CLASS$(p3UI, 'ui.test.p3UI', _super);
	var __proto__ = p3UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p3UI.uiView);
	}

	STATICATTR$(p3UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-04.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p3UI;
})(View);
var p4UI = (function(_super) {
	function p4UI() {

		this.p1 = null;

		p4UI.__super.call(this);
	}

	CLASS$(p4UI, 'ui.test.p4UI', _super);
	var __proto__ = p4UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p4UI.uiView);
	}

	STATICATTR$(p4UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-05.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p4UI;
})(View);
var p5UI = (function(_super) {
	function p5UI() {

		this.p1 = null;

		p5UI.__super.call(this);
	}

	CLASS$(p5UI, 'ui.test.p5UI', _super);
	var __proto__ = p5UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p5UI.uiView);
	}

	STATICATTR$(p5UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-06.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p5UI;
})(View);
var p6UI = (function(_super) {
	function p6UI() {

		this.p1 = null;

		p6UI.__super.call(this);
	}

	CLASS$(p6UI, 'ui.test.p6UI', _super);
	var __proto__ = p6UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p6UI.uiView);
	}

	STATICATTR$(p6UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-07.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p6UI;
})(View);
var p7UI = (function(_super) {
	function p7UI() {

		this.p1 = null;

		p7UI.__super.call(this);
	}

	CLASS$(p7UI, 'ui.test.p7UI', _super);
	var __proto__ = p7UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p7UI.uiView);
	}

	STATICATTR$(p7UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-08.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p7UI;
})(View);
var p8UI = (function(_super) {
	function p8UI() {

		this.p1 = null;

		p8UI.__super.call(this);
	}

	CLASS$(p8UI, 'ui.test.p8UI', _super);
	var __proto__ = p8UI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(p8UI.uiView);
	}

	STATICATTR$(p8UI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"height": 1036
			},
			"child": [{
				"type": "Image",
				"props": {
					"y": 518,
					"x": 320,
					"width": 640,
					"height": 1036,
					"var": "p1",
					"skin": "picture/QuickDrive_180211-09.jpg",
					"pivotY": 518,
					"pivotX": 320
				}
			}]
		};
	}]);
	return p8UI;
})(View);

var pageUI = (function(_super) {
	function pageUI() {

		this.ani1 = null;
		this.ani2 = null;
		this.ani3 = null;
		this.left = null;
		this.right = null;

		pageUI.__super.call(this);
	}

	CLASS$(pageUI, 'ui.test.pageUI', _super);
	var __proto__ = pageUI.prototype;
	__proto__.createChildren = function() {

		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(pageUI.uiView);
	}

	STATICATTR$(pageUI, ['uiView', function() {
		return this.uiView = {
			"type": "View",
			"props": {
				"width": 640,
				"mouseThrough": true,
				"mouseEnabled": true,
				"height": 1036
			}, 
			"child": [{
				"type": "Image",
				"props": {
					"y": 30,
					"x": 360,
					"width": 68,
					"var": "left",
					"skin": "img/arrow.png",
					"rotation": 90,
					"pivotY": -2.3255813953488484,
					"height": 67
				},
				"compId": 3
			}, {
				"type": "Image",
				"props": {
					"y": 1000,
					"x": 290,
					"width": 68,
					"var": "right",
					"skin": "img/arrow.png",
					"rotation": -90,
					"height": 67,
					"alpha": 0.6
				},
				"compId": 4
			}],
			"animations": [{
				"nodes": [{
					"target": 2,
					"keyframes": {
						"alpha": [{
							"value": 0,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 2,
							"key": "alpha",
							"index": 0
						}, {
							"value": 1,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 2,
							"key": "alpha",
							"index": 15
						}, {
							"value": 0.6,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 2,
							"key": "alpha",
							"index": 30
						}]
					}
				}],
				"name": "ani1",
				"id": 1,
				"frameRate": 24,
				"action": 2
			}, {
				"nodes": [{
					"target": 3,
					"keyframes": {
						"alpha": [{
							"value": 0.6,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 3,
							"key": "alpha",
							"index": 0
						}, {
							"value": 1,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 3,
							"key": "alpha",
							"index": 15
						}, {
							"value": 0.6,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 3,
							"key": "alpha",
							"index": 30
						}]
					}
				}],
				"name": "ani2",
				"id": 2,
				"frameRate": 24,
				"action": 2
			}, {
				"nodes": [{
					"target": 4,
					"keyframes": {
						"alpha": [{
							"value": 0.6,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 4,
							"key": "alpha",
							"index": 0
						}, {
							"value": 1,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 4,
							"key": "alpha",
							"index": 15
						}, {
							"value": 0.6,
							"tweenMethod": "linearNone",
							"tween": true,
							"target": 4,
							"key": "alpha",
							"index": 30
						}]
					}
				}],
				"name": "ani3",
				"id": 3,
				"frameRate": 24,
				"action": 2
			}]
		};
	}]);
	return pageUI;
})(View);