(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bars = function() {
	this.initialize(img.bars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.eplLogo = function() {
	this.initialize(img.eplLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,273);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,70);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mct1col1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AhFEnIAApNICLAAIAAJNg");
	this.shape.setTransform(7,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mct1col1, new cjs.Rectangle(0,0,14,59), null);


(lib.mclogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-17.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mclogo, new cjs.Rectangle(-65.5,-17.5,131,35), null);


(lib.mceplLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eplLogo();
	this.instance.parent = this;
	this.instance.setTransform(-50,-27,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mceplLogo, new cjs.Rectangle(-50,-27,100,54.6), null);


(lib.mcbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcbg, new cjs.Rectangle(-175,-145.8,350,291.7), null);


(lib.mcbars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bars();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcbars, new cjs.Rectangle(-150,-125,300,250), null);


(lib.mct1group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.col3 = new lib.mct1col1();
	this.col3.name = "col3";
	this.col3.parent = this;
	this.col3.setTransform(12.8,-25.9,0.641,0.73,0,20,0);

	this.col2 = new lib.mct1col1();
	this.col2.name = "col2";
	this.col2.parent = this;
	this.col2.setTransform(-12.8,26.5,0.462,1.109,0,20,0,-0.1,58.6);

	this.col1 = new lib.mct1col1();
	this.col1.name = "col1";
	this.col1.parent = this;
	this.col1.setTransform(-10.4,-4.7,0.641,0.73,0,20,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.col1},{t:this.col2},{t:this.col3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mct1group, new cjs.Rectangle(-25,-34.6,46.8,70.4), null);


// stage content:
(lib.Dynamic_Team_Colours_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		teams = [
			["Arsenal", "#e20613", "#a1853e", "#003671", "ARS"],
			["Aston", "#660033", "#ffe600", "#94bee5", "AVL"],
			["Norwich", "#00a650", "#241f20", "#fff200", "NOR"],
			["Watford", "#ffea00", "#12100b", "#e20d18", "WAT"],
			//[],
			["Tottenham", "#131f53", "#FFFFFF","#3db7e4", "TOT"] //#111836
		];
		
		
		
		//teamA = "Arsenal";
		//teamB = "Watford";
		
		counters = [this.txtOdds1, this.txtOddsDraw, this.txtOdds2]
		
		this.txtOddsDraw.text = oddsDraw;
		
		for (i = 0; i < teams.length; i++) {
			if (teams[i][0] == teamA) {
				this.team1.col1.shape.graphics._fill.style = teams[i][1];
				this.team1.col2.shape.graphics._fill.style = teams[i][2];
				this.team1.col3.shape.graphics._fill.style = teams[i][3];
				this.txtTeam1.text = teams[i][4];
				this.txtOdds1.text = teamAOdds;
			}
			if (teams[i][0] == teamB) {
				this.team2.col1.shape.graphics._fill.style = teams[i][1];
				this.team2.col2.shape.graphics._fill.style = teams[i][2];
				this.team2.col3.shape.graphics._fill.style = teams[i][3];
				this.txtTeam2.text = teams[i][4];
				this.txtOdds2.text = teamBOdds;
			}
		
		
		}
		
		
		//Default Parameters
		
		t1col1scaleY = this.team1.col1.scaleY;
		t1col2scaleY = this.team1.col2.scaleY;
		t1col3scaleY = this.team1.col3.scaleY;
		
		t1scaleX = this.team1.scaleX;
		t1scaleY = this.team1.scaleY;
		
		t1x = this.team1.x;
		t1y = this.team1.y;
		t2x = this.team2.x;
		t2y = this.team2.y;
		logoX = this.logo.x;
		logoY = this.logo.y;
		
		//this.txtTeam1.alpha = 0;
		//this.txtTeam2.alpha = 0;
		
		
		
		//functions
		
		
		function roundPartial(places) {
			var p = Math.pow(10, places || 0);
			return function (value) {
				return Math.round(value * p) / p;
			}
		}
		
		
		function counter(mov, startVal, endVal) {
		
			var Cont = {
				val: startVal
			}, NewVal = endVal;
		
			TweenLite.to(Cont, 2, {
				val: NewVal,
				ease: Expo.easeInOut,
				delay: 2.25+(mov*.4),
				onUpdate: function () {
					counters[mov].text = Cont.val.toFixed(2);
				}
			});
		}
		
		
		
		var tl = new TimelineLite();
		
		tl.addLabel("#one", "+=.75");
		tl.addLabel("#two", "+=2.75");
		
		
		//team1 anim
		tl.staggerFromTo([this.team1.col1, this.team2.col1], 0.75, {
			//scaleX: 0,
			scaleY: 0,
			alpha: 1
		}, {
			//scaleX: circ2Scale,
			scaleY: t1col1scaleY,
			ease: Expo.easeInOut
		}, .1, "#one");
		
		tl.staggerFromTo([this.team1.col2, this.team2.col2], 0.75, {
			//scaleX: 0,
			scaleY: 0,
			alpha: 1
		}, {
			//scaleX: circ2Scale,
			scaleY: t1col2scaleY,
			ease: Expo.easeInOut
		}, .1, "#one+=.2");
		
		tl.staggerFromTo([this.team1.col3, this.team2.col3], 0.75, {
			//scaleX: 0,
			scaleY: 0,
			alpha: 1
		}, {
			//scaleX: circ2Scale,
			scaleY: t1col3scaleY,
			ease: Expo.easeInOut
		}, .1, "#one+=.4");
		
		
		tl.add(TweenLite.fromTo(this.team1, 0.75, {
			scaleX: t1scaleX * 4,
			scaleY: t1scaleY * 4,
			x: t1x - 50,
			y: t1y - 120,
			alpha: 1,
			immediateRender: true
		}, {
			scaleX: t1scaleX,
			scaleY: t1scaleY,
			x: t1x,
			y: t1y,
			ease: Expo.easeInOut
		}), "#two");
		
		
		//team2 anim
		
		
		
		tl.add(TweenLite.fromTo(this.team2, 0.75, {
			scaleX: t1scaleX * 4,
			scaleY: t1scaleY * 4,
			x: t2x + 68,
			y: t2y + 55,
			alpha: 1,
			immediateRender: true
		}, {
			scaleX: t1scaleX,
			scaleY: t1scaleY,
			x: t2x,
			y: t2y,
			ease: Expo.easeInOut
		}), "#two");
		
		
		//bg elements
		
		tl.add(TweenLite.fromTo(this.bars, 0.75, {
			scaleX: 1.2,
			scaleY: 1.2,
			alpha: 1,
			immediateRender: true
		}, {
			scaleX: 1,
			scaleY: 1,
			ease: Expo.easeInOut
		}), "#two");
		
		
		tl.add(TweenLite.fromTo(this.bgCol, 0.75, {
			scaleX: 1.5,
			scaleY: 1.5,
			alpha: 1,
			immediateRender: true
		}, {
			scaleX: 1,
			scaleY: 1,
			ease: Expo.easeInOut
		}), "#two");
		
		
		tl.add(TweenLite.fromTo(this.logo, 0.5, {
			scaleX: 1.5,
			scaleY: 1.5,
			alpha: 1,
			y:125,
			immediateRender: true
		}, {
			scaleX: 1,
			scaleY: 1,
			alpha: 0,
			//y: logoY,
			ease: Expo.easeInOut
		}), "#two");
		
		tl.add(TweenLite.fromTo(this.logo, 0.35, {
			y: logoY,
			alpha: 0,
			immediateRender: false
		}, {
			alpha: 1,
			//y: logoY,
			ease: Expo.easeInOut
		}), "#two+=.5");
		
		
		tl.add(TweenLite.fromTo(this.eplLogo, 0.35, {
			alpha: 0,
			immediateRender: true
		}, {
			alpha: 1,
			ease: Expo.easeInOut
		}), "#two+=.5");
		
		
		
		/*tl.add(TweenLite.fromTo([this.txtTeam1,this.txtTeam2, this.txtDraw], 0.3, {
			alpha: 0,
			immediateRender: true
		}, {
			alpha: 1,
			ease: Expo.easeInOut
		}), "#one+=1.75");*/
		
		tl.staggerFromTo([this.txtTeam1, this.txtDraw, this.txtTeam2, this.txtOdds1, this.txtOddsDraw, this.txtOdds2], .5, {
			alpha: 0,
			scaleX: 1.7,
			scaleY: 1.7,
			immediateRender: true,
			onStart: startCounter()
		}, {
			alpha: 1,
			scaleX: 1,
			scaleY: 1,
			ease: Expo.easeOut
		}, 0.1, "#two+=.5");
		
		/*
		tl.add(TweenLite.to(this.txtOdds1, 3, {
		  textContent: teamAOdds,
		  modifiers: {
		    innerHTML: roundPartial(2)
		  }
		}), "#one+=2");
			
		
		*/
		
		
		
		
		
		function startCounter() {
			console.log("startCounter");
			counter(0, 0, teamAOdds);
			counter(1, 0, oddsDraw);
			counter(2, 0, teamBOdds);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// uLogo
	this.logo = new lib.mclogo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(150.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// eplLogo
	this.eplLogo = new lib.mceplLogo();
	this.eplLogo.name = "eplLogo";
	this.eplLogo.parent = this;
	this.eplLogo.setTransform(150.5,219.1);

	this.timeline.addTween(cjs.Tween.get(this.eplLogo).wait(1));

	// team2
	this.team2 = new lib.mct1group();
	this.team2.name = "team2";
	this.team2.parent = this;
	this.team2.setTransform(200.4,133.7,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.team2).wait(1));

	// team1
	this.team1 = new lib.mct1group();
	this.team1.name = "team1";
	this.team1.parent = this;
	this.team1.setTransform(97.3,133.7,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.team1).wait(1));

	// bg_bars
	this.bars = new lib.mcbars();
	this.bars.name = "bars";
	this.bars.parent = this;
	this.bars.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.bars).wait(1));

	// txtfields
	this.txtOddsDraw = new cjs.Text("DRAW", "34px 'Unibet Pro (superstar edit)'", "#FFFFFF");
	this.txtOddsDraw.name = "txtOddsDraw";
	this.txtOddsDraw.lineHeight = 36;
	this.txtOddsDraw.lineWidth = 100;
	this.txtOddsDraw.parent = this;
	this.txtOddsDraw.setTransform(117.5,128.1);

	this.txtOdds2 = new cjs.Text("TEAM2", "34px 'Unibet Pro (superstar edit)'", "#FFFFFF");
	this.txtOdds2.name = "txtOdds2";
	this.txtOdds2.lineHeight = 36;
	this.txtOdds2.lineWidth = 100;
	this.txtOdds2.parent = this;
	this.txtOdds2.setTransform(228.5,128.1);

	this.txtOdds1 = new cjs.Text("TEAM1", "34px 'Unibet Pro (superstar edit)'", "#FFFFFF");
	this.txtOdds1.name = "txtOdds1";
	this.txtOdds1.lineHeight = 36;
	this.txtOdds1.lineWidth = 100;
	this.txtOdds1.parent = this;
	this.txtOdds1.setTransform(19.5,128.1);

	this.txtDraw = new cjs.Text("DRAW", "24px 'Unibet Pro (superstar edit)'", "#44CB3F");
	this.txtDraw.name = "txtDraw";
	this.txtDraw.textAlign = "center";
	this.txtDraw.lineHeight = 26;
	this.txtDraw.lineWidth = 100;
	this.txtDraw.parent = this;
	this.txtDraw.setTransform(160,98.1);

	this.txtTeam2 = new cjs.Text("TEAM2", "24px 'Unibet Pro (superstar edit)'", "#39AA35");
	this.txtTeam2.name = "txtTeam2";
	this.txtTeam2.textAlign = "center";
	this.txtTeam2.lineHeight = 26;
	this.txtTeam2.lineWidth = 100;
	this.txtTeam2.parent = this;
	this.txtTeam2.setTransform(256,98.1);

	this.txtTeam1 = new cjs.Text("TEAM1", "24px 'Unibet Pro (superstar edit)'", "#39AA35");
	this.txtTeam1.name = "txtTeam1";
	this.txtTeam1.textAlign = "center";
	this.txtTeam1.lineHeight = 26;
	this.txtTeam1.lineWidth = 100;
	this.txtTeam1.parent = this;
	this.txtTeam1.setTransform(47,98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtTeam1},{t:this.txtTeam2},{t:this.txtDraw},{t:this.txtOdds1},{t:this.txtOdds2},{t:this.txtOddsDraw}]}).wait(1));

	// bg
	this.bgCol = new lib.mcbg();
	this.bgCol.name = "bgCol";
	this.bgCol.parent = this;
	this.bgCol.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.bgCol).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,125,335.5,250);
// library properties:
lib.properties = {
	id: '9C023ABD76014BDA9DF6907F8AFA2304',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bars.png?1562650455901", id:"bars"},
		{src:"images/bg.png?1562650455901", id:"bg"},
		{src:"images/eplLogo.png?1562650455901", id:"eplLogo"},
		{src:"images/logo.png?1562650455901", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C023ABD76014BDA9DF6907F8AFA2304'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;