(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF33").s().p("AlzF0IAArnILnAAIAALng");
	this.shape.setTransform(37.225,37.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,74.5,74.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#543B29").s().p("AlzF0IAArnILnAAIAALng");
	this.shape.setTransform(37.225,37.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,74.5,74.5), null);


(lib.Beam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.012,1],0,350.9,0,-350.9).s().p("EgDgA3PMgIIhudIXRAAMgIJBudg");
	this.shape.setTransform(74.5,353.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,707);


(lib.Beams = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Beam("synched",0);
	this.instance.setTransform(791.25,637.6,0.934,1.145,-107.7009,0,0,74.5,706);

	this.instance_1 = new lib.Beam("synched",0);
	this.instance_1.setTransform(791.1,638.15,0.3008,0.8574,76.493,0,0,74.2,705.9);

	this.instance_2 = new lib.Beam("synched",0);
	this.instance_2.setTransform(791.2,638,0.3008,0.7216,-157.738,0,0,74.4,706.1);

	this.instance_3 = new lib.Beam("synched",0);
	this.instance_3.setTransform(791.1,638,0.5817,0.9172,163.3459,0,0,74.7,706.1);

	this.instance_4 = new lib.Beam("synched",0);
	this.instance_4.setTransform(791.2,638.05,0.5817,0.9172,-14.4621,0,0,74.8,706.1);

	this.instance_5 = new lib.Beam("synched",0);
	this.instance_5.setTransform(791.1,638.05,0.3669,1.1303,-46.1935,0,0,74.5,706.2);

	this.instance_6 = new lib.Beam("synched",0);
	this.instance_6.setTransform(791.1,638.05,0.3669,1.1303,-76.1932,0,0,74.5,706.2);

	this.instance_7 = new lib.Beam("synched",0);
	this.instance_7.setTransform(791.3,637.7,0.934,1.1451,102.4872,0,0,74.5,706);

	this.instance_8 = new lib.Beam("synched",0);
	this.instance_8.setTransform(791.35,637.75,0.934,1.1451,-53.5497,0,0,74.5,706);

	this.instance_9 = new lib.Beam("synched",0);
	this.instance_9.setTransform(791.3,637.7,1.0831,0.9281,-143.5499,0,0,74.5,706.1);

	this.instance_10 = new lib.Beam("synched",0);
	this.instance_10.setTransform(791.25,637.85,0.4456,0.9281,-117.5526,0,0,74.4,706.1);

	this.instance_11 = new lib.Beam("synched",0);
	this.instance_11.setTransform(791.3,637.95,0.4456,1.0843,42.752,0,0,74.5,706.1);

	this.instance_12 = new lib.Beam("synched",0);
	this.instance_12.setTransform(791.15,638.05,0.5481,0.8577,123.7506,0,0,74.4,706.4);

	this.instance_13 = new lib.Beam("synched",0);
	this.instance_13.setTransform(790.6,637.85,0.9108,0.9108,15.9515,0,0,74.5,707.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1595.7,1270.9);


(lib.GlobeaniCORRECT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Beams("synched",0);
	this.instance.setTransform(255,81.55,1,1,116.0012,0,0,795.6,633.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:797.8,regY:635.4,rotation:117.803,x:252.5,y:82.75},0).wait(1).to({rotation:119.605,x:252.45,y:82.65},0).wait(1).to({rotation:121.407,x:252.4,y:82.6},0).wait(1).to({rotation:123.209,y:82.5},0).wait(1).to({rotation:125.011,y:82.4},0).wait(1).to({rotation:126.813,x:252.3,y:82.3},0).wait(1).to({rotation:128.615,y:82.2},0).wait(1).to({rotation:130.417,y:82.15},0).wait(1).to({rotation:132.219,x:252.25,y:82.1},0).wait(1).to({rotation:134.0211,y:81.95},0).wait(1).to({rotation:135.8231,y:81.9},0).wait(1).to({rotation:137.6251,y:81.75},0).wait(1).to({rotation:139.4271,y:81.65},0).wait(1).to({rotation:141.2291,x:252.2,y:81.6},0).wait(1).to({rotation:143.0311,x:252.25,y:81.55},0).wait(1).to({rotation:144.8331,x:252.2,y:81.45},0).wait(1).to({rotation:146.6351,x:252.25,y:81.35},0).wait(1).to({rotation:148.4371,y:81.25},0).wait(1).to({rotation:150.2391,y:81.15},0).wait(1).to({rotation:152.0411,x:252.3,y:81.05},0).wait(1).to({rotation:153.8431,x:252.25,y:81},0).wait(1).to({rotation:155.6451,y:80.9},0).wait(1).to({rotation:157.4471,x:252.3,y:80.85},0).wait(1).to({rotation:159.2491,x:252.35,y:80.7},0).wait(1).to({rotation:161.0511,y:80.65},0).wait(1).to({rotation:162.8531,y:80.55},0).wait(1).to({rotation:164.6551,x:252.45,y:80.45},0).wait(1).to({rotation:166.4571,y:80.35},0).wait(1).to({rotation:168.2591,x:252.5},0).wait(1).to({rotation:170.0612,x:252.6,y:80.25},0).wait(1).to({rotation:171.8632,y:80.15},0).wait(1).to({rotation:173.6652,x:252.65},0).wait(1).to({rotation:175.4672,x:252.7,y:80.05},0).wait(1).to({rotation:177.2692,x:252.75,y:79.95},0).wait(1).to({rotation:179.0712,y:79.9},0).wait(1).to({rotation:180.8732,x:252.85,y:79.85},0).wait(1).to({rotation:182.6752,x:252.9,y:79.75},0).wait(1).to({rotation:184.4772,x:252.95,y:79.7},0).wait(1).to({rotation:186.2792,x:253,y:79.6},0).wait(1).to({rotation:188.0812,y:79.55},0).wait(1).to({rotation:189.8832,x:253.1,y:79.5},0).wait(1).to({rotation:191.6852,x:253.2,y:79.45},0).wait(1).to({rotation:193.4872,x:253.25,y:79.4},0).wait(1).to({rotation:195.2892,x:253.35,y:79.35},0).wait(1).to({rotation:197.0912,x:253.4,y:79.25},0).wait(1).to({rotation:198.8932,x:253.5},0).wait(1).to({rotation:200.6952,x:253.55,y:79.15},0).wait(1).to({rotation:202.4972},0).wait(1).to({rotation:204.2992,x:253.7,y:79.1},0).wait(1).to({rotation:206.1013,x:253.75,y:79.05},0).wait(1).to({rotation:207.9033,x:253.85},0).wait(1).to({rotation:209.7053,x:253.9,y:78.95},0).wait(1).to({rotation:211.5073,x:254},0).wait(1).to({rotation:213.3093,x:254.1},0).wait(1).to({rotation:215.1113,x:254.2},0).wait(1).to({rotation:216.9133,y:78.85},0).wait(1).to({rotation:218.7153,x:254.3,y:78.8},0).wait(1).to({rotation:220.5173,x:254.4},0).wait(1).to({rotation:222.3193,x:254.5,y:78.85},0).wait(1).to({rotation:224.1213,x:254.6,y:78.8},0).wait(1).to({rotation:225.9233,x:254.65,y:78.75},0).wait(1).to({rotation:227.7253,x:254.8,y:78.8},0).wait(1).to({rotation:229.5273,x:254.85},0).wait(1).to({rotation:231.3293,x:254.95,y:78.75},0).wait(1).to({rotation:233.1313,x:255,y:78.8},0).wait(1).to({rotation:234.9333,x:255.1,y:78.75},0).wait(1).to({rotation:236.7353,x:255.2,y:78.8},0).wait(1).to({rotation:238.5373,x:255.25,y:78.75},0).wait(1).to({rotation:240.3393,x:255.4,y:78.8},0).wait(1).to({rotation:242.1414,x:255.45},0).wait(1).to({rotation:243.9434,x:255.55,y:78.85},0).wait(1).to({rotation:245.7454,x:255.65},0).wait(1).to({rotation:247.5474,x:255.8,y:78.9},0).wait(1).to({rotation:249.3494,x:255.85,y:78.85},0).wait(1).to({rotation:251.1514,x:255.9,y:78.95},0).wait(1).to({rotation:252.9534,x:256.05},0).wait(1).to({rotation:254.7554,x:256.15,y:79},0).wait(1).to({rotation:256.5574,x:256.2},0).wait(1).to({rotation:258.3594,x:256.3,y:79.05},0).wait(1).to({rotation:260.1614,x:256.35,y:79.1},0).wait(1).to({rotation:261.9634,x:256.4},0).wait(1).to({rotation:263.7654,x:256.5,y:79.15},0).wait(1).to({rotation:265.5674,x:256.6,y:79.25},0).wait(1).to({rotation:267.3694,x:256.65,y:79.3},0).wait(1).to({rotation:269.1714,x:256.7},0).wait(1).to({rotation:270.9734,x:256.75,y:79.35},0).wait(1).to({rotation:272.7754,x:256.85,y:79.4},0).wait(1).to({rotation:274.5774,y:79.45},0).wait(1).to({rotation:276.3794,x:256.95,y:79.55},0).wait(1).to({rotation:278.1815,x:257,y:79.6},0).wait(1).to({rotation:279.9835,x:257.05,y:79.7},0).wait(1).to({rotation:281.7855,x:257.15},0).wait(1).to({rotation:283.5875,y:79.8},0).wait(1).to({rotation:285.3895,x:257.25,y:79.85},0).wait(1).to({rotation:287.1915,x:257.3,y:79.95},0).wait(1).to({rotation:288.9935,x:257.35,y:80},0).wait(1).to({rotation:290.7955,x:257.4,y:80.1},0).wait(1).to({rotation:292.5975,x:257.45,y:80.15},0).wait(1).to({rotation:294.3995,x:257.5,y:80.2},0).wait(1).to({rotation:296.2015,x:257.55,y:80.35},0).wait(1).to({rotation:298.0035,x:257.6,y:80.4},0).wait(1).to({rotation:299.8055,y:80.5},0).wait(1).to({rotation:301.6075,x:257.65,y:80.55},0).wait(1).to({rotation:303.4095,x:257.7,y:80.65},0).wait(1).to({rotation:305.2115,y:80.7},0).wait(1).to({rotation:307.0135,y:80.8},0).wait(1).to({rotation:308.8155,x:257.75,y:80.9},0).wait(1).to({rotation:310.6175,y:80.95},0).wait(1).to({rotation:312.4195,y:81.05},0).wait(1).to({rotation:314.2216,y:81.15},0).wait(1).to({rotation:316.0236,x:257.8,y:81.25},0).wait(1).to({rotation:317.8256,y:81.3},0).wait(1).to({rotation:319.6276,x:257.85,y:81.35},0).wait(1).to({rotation:321.4296,x:257.8,y:81.45},0).wait(1).to({rotation:323.2316,x:257.85,y:81.6},0).wait(1).to({rotation:325.0336,y:81.7},0).wait(1).to({rotation:326.8356,y:81.8},0).wait(1).to({rotation:328.6376,y:81.9},0).wait(1).to({rotation:330.4396,x:257.75,y:81.95},0).wait(1).to({rotation:332.2416,x:257.8,y:82.1},0).wait(1).to({rotation:334.0436,x:257.75,y:82.15},0).wait(1).to({rotation:335.8456,y:82.2},0).wait(1).to({rotation:337.6476,y:82.3},0).wait(1).to({rotation:339.4496,x:257.65,y:82.4},0).wait(1).to({rotation:341.2516,y:82.5},0).wait(1).to({rotation:343.0536,y:82.55},0).wait(1).to({rotation:344.8556,x:257.6,y:82.65},0).wait(1).to({rotation:346.6576,x:257.55,y:82.75},0).wait(1).to({rotation:348.4596,x:257.5,y:82.8},0).wait(1).to({rotation:350.2617,x:257.45,y:82.9},0).wait(1).to({rotation:352.0637,x:257.4,y:82.95},0).wait(1).to({rotation:353.8657,y:83.05},0).wait(1).to({rotation:355.6677,x:257.35,y:83.15},0).wait(1).to({rotation:357.4697,x:257.3,y:83.25},0).wait(1).to({rotation:359.2717},0).wait(1).to({rotation:361.0737,x:257.2,y:83.35},0).wait(1).to({rotation:362.8757},0).wait(1).to({rotation:364.6777,x:257.1,y:83.45},0).wait(1).to({rotation:366.4797,x:257.05,y:83.5},0).wait(1).to({rotation:368.2817,x:256.95,y:83.55},0).wait(1).to({rotation:370.0837,x:256.9,y:83.65},0).wait(1).to({rotation:371.8857,x:256.85},0).wait(1).to({rotation:373.6877,x:256.8,y:83.7},0).wait(1).to({rotation:375.4897,x:256.7,y:83.75},0).wait(1).to({rotation:377.2917,x:256.65,y:83.9},0).wait(1).to({rotation:379.0937,x:256.55},0).wait(1).to({rotation:380.8957,x:256.5,y:83.95},0).wait(1).to({rotation:382.6977,x:256.4,y:84},0).wait(1).to({rotation:384.4997,x:256.3,y:84.05},0).wait(1).to({rotation:386.3018,x:256.25},0).wait(1).to({rotation:388.1038,x:256.2,y:84.1},0).wait(1).to({rotation:389.9058,x:256.1,y:84.15},0).wait(1).to({rotation:391.7078,x:256},0).wait(1).to({rotation:393.5098,x:255.95,y:84.25},0).wait(1).to({rotation:395.3118,x:255.85},0).wait(1).to({rotation:397.1138,x:255.75,y:84.3},0).wait(1).to({rotation:398.9158,x:255.65},0).wait(1).to({rotation:400.7178,x:255.5,y:84.35},0).wait(1).to({rotation:402.5198,x:255.45,y:84.3},0).wait(1).to({rotation:404.3218,x:255.35,y:84.35},0).wait(1).to({rotation:406.1238,x:255.3,y:84.3},0).wait(1).to({rotation:407.9258,x:255.2,y:84.4},0).wait(1).to({rotation:409.7278,x:255.1,y:84.35},0).wait(1).to({rotation:411.5298,x:255.05},0).wait(1).to({rotation:413.3318,x:254.9},0).wait(1).to({rotation:415.1338,x:254.8,y:84.4},0).wait(1).to({rotation:416.9358,x:254.75,y:84.35},0).wait(1).to({rotation:418.7378,x:254.65},0).wait(1).to({rotation:420.5398,x:254.55},0).wait(1).to({rotation:422.3419,x:254.5},0).wait(1).to({rotation:424.1439,x:254.45,y:84.3},0).wait(1).to({rotation:425.9459,x:254.4},0).wait(1).to({rotation:427.7479,x:254.2,y:84.25},0).wait(1).to({rotation:429.5499,y:84.2},0).wait(1).to({rotation:431.3519,x:254.1,y:84.15},0).wait(1).to({rotation:433.1539,x:254,y:84.2},0).wait(1).to({rotation:434.9559,x:253.9,y:84.1},0).wait(1).to({rotation:436.7579,x:253.85,y:84.15},0).wait(1).to({rotation:438.5599,x:253.8,y:84.05},0).wait(1).to({rotation:440.3619,x:253.7},0).wait(1).to({rotation:442.1639,x:253.6,y:84},0).wait(1).to({rotation:443.9659,x:253.55,y:83.95},0).wait(1).to({rotation:445.7679,x:253.45,y:83.9},0).wait(1).to({rotation:447.5699,x:253.35},0).wait(1).to({rotation:449.3719,y:83.8},0).wait(1).to({rotation:451.1739,x:253.25},0).wait(1).to({rotation:452.9759,x:253.2,y:83.65},0).wait(1).to({rotation:454.7779,x:253.1},0).wait(1).to({rotation:456.5799,y:83.6},0).wait(1).to({rotation:458.382,x:253,y:83.5},0).wait(1).to({rotation:460.184,x:252.95,y:83.4},0).wait(1).to({rotation:461.986,x:252.9},0).wait(1).to({rotation:463.788,x:252.8,y:83.3},0).wait(1).to({rotation:465.59,y:83.25},0).wait(1).to({rotation:467.392,x:252.75,y:83.15},0).wait(1).to({rotation:469.194,x:252.7,y:83.1},0).wait(1).to({rotation:470.996,x:252.65,y:83},0).wait(1).to({rotation:472.798,x:252.55,y:82.95},0).wait(1).to({rotation:474.6,y:82.9},0).wait(1).to({rotation:476.402,x:252.5,y:82.8},0).wait(1).to({rotation:478.204,x:252.45,y:82.7},0).wait(1).to({rotation:480.006,y:82.6},0).wait(1).to({rotation:481.808,x:252.4},0).wait(1).to({rotation:483.61,y:82.45},0).wait(1).to({rotation:485.412,x:252.3,y:82.4},0).wait(1).to({rotation:487.214,x:252.35,y:82.3},0).wait(1).to({rotation:489.016,x:252.25,y:82.2},0).wait(1).to({rotation:490.818,y:82.1},0).wait(1).to({rotation:492.62,x:252.3,y:82.05},0).wait(1).to({rotation:494.4221,x:252.25,y:81.95},0).wait(1).to({rotation:496.2241,y:81.85},0).wait(1).to({rotation:498.0261,y:81.7},0).wait(1).to({rotation:499.8281,x:252.2,y:81.65},0).wait(1).to({rotation:501.6301,y:81.55},0).wait(1).to({rotation:503.4321,y:81.5},0).wait(1).to({rotation:505.2341,y:81.4},0).wait(1).to({rotation:507.0361,x:252.25,y:81.3},0).wait(1).to({rotation:508.8381,x:252.2,y:81.25},0).wait(1).to({rotation:510.6401,x:252.3,y:81.1},0).wait(1).to({rotation:512.4421,x:252.25,y:81.05},0).wait(1).to({rotation:514.2441,y:80.95},0).wait(1).to({rotation:516.0461,x:252.3,y:80.9},0).wait(1).to({rotation:517.8481,y:80.75},0).wait(1).to({rotation:519.6501,x:252.35,y:80.7},0).wait(1).to({rotation:521.4521,x:252.4,y:80.6},0).wait(1).to({rotation:523.2541,x:252.45,y:80.55},0).wait(1).to({rotation:525.0561,y:80.45},0).wait(1).to({rotation:526.8581,x:252.5,y:80.4},0).wait(1).to({rotation:528.6601,y:80.3},0).wait(1).to({rotation:530.4622,x:252.55,y:80.25},0).wait(1).to({rotation:532.2642,x:252.6,y:80.15},0).wait(1).to({rotation:534.0662,x:252.65,y:80.1},0).wait(1).to({rotation:535.8682,x:252.75,y:79.95},0).wait(1).to({rotation:537.6702,x:252.7},0).wait(1).to({rotation:539.4722,x:252.8,y:79.9},0).wait(1).to({rotation:541.2742,x:252.85,y:79.75},0).wait(1).to({rotation:543.0762,x:252.9,y:79.7},0).wait(1).to({rotation:544.8782,x:252.95,y:79.65},0).wait(1).to({rotation:546.6802,x:253,y:79.6},0).wait(1).to({rotation:548.4822,x:253.05,y:79.55},0).wait(1).to({rotation:550.2842,x:253.15,y:79.45},0).wait(1).to({rotation:552.0862,x:253.2,y:79.4},0).wait(1).to({rotation:553.8882,x:253.25},0).wait(1).to({rotation:555.6902,x:253.35,y:79.35},0).wait(1).to({rotation:557.4922,x:253.45,y:79.25},0).wait(1).to({rotation:559.2942,y:79.2},0).wait(1).to({rotation:561.0962,x:253.6},0).wait(1).to({rotation:562.8982,x:253.65,y:79.15},0).wait(1).to({rotation:564.7002,x:253.7,y:79.1},0).wait(1).to({rotation:566.5023,x:253.8,y:79},0).wait(1).to({rotation:568.3043,x:253.9,y:78.95},0).wait(1).to({rotation:570.1063,x:253.95},0).wait(1).to({rotation:571.9083,x:254.05,y:78.9},0).wait(1).to({rotation:573.7103,x:254.1,y:78.95},0).wait(1).to({rotation:575.5123,x:254.2,y:78.9},0).wait(1).to({rotation:577.3143,x:254.25,y:78.85},0).wait(1).to({rotation:579.1163,x:254.3},0).wait(1).to({rotation:580.9183,x:254.4,y:78.8},0).wait(1).to({rotation:582.7203,x:254.55},0).wait(1).to({rotation:584.5223,x:254.6},0).wait(1).to({rotation:586.3243,x:254.7},0).wait(1).to({rotation:588.1263,x:254.85},0).wait(1).to({rotation:589.9283,x:254.9,y:78.75},0).wait(1).to({rotation:591.7303,x:255},0).wait(1).to({rotation:593.5323,x:255.05},0).wait(1).to({rotation:595.3343,x:255.1,y:78.8},0).wait(1).to({rotation:597.1363,x:255.25},0).wait(1).to({rotation:598.9383,x:255.35,y:78.75},0).wait(1).to({rotation:600.7403,x:255.4,y:78.8},0).wait(1).to({rotation:602.5424,x:255.45},0).wait(1).to({rotation:604.3444,x:255.6},0).wait(1).to({rotation:606.1464,x:255.7,y:78.85},0).wait(1).to({rotation:607.9484,x:255.8},0).wait(1).to({rotation:609.7504,x:255.9,y:78.9},0).wait(1).to({rotation:611.5524,x:255.95,y:78.95},0).wait(1).to({rotation:613.3544,x:256.05},0).wait(1).to({rotation:615.1564,x:256.1,y:79},0).wait(1).to({rotation:616.9584,x:256.2},0).wait(1).to({rotation:618.7604,x:256.25,y:79.05},0).wait(1).to({rotation:620.5624,x:256.4,y:79.1},0).wait(1).to({rotation:622.3644,x:256.45,y:79.2},0).wait(1).to({rotation:624.1664,x:256.5,y:79.15},0).wait(1).to({rotation:625.9684,x:256.55,y:79.25},0).wait(1).to({rotation:627.7704,x:256.6,y:79.3},0).wait(1).to({rotation:629.5724,x:256.75},0).wait(1).to({rotation:631.3744,y:79.4},0).wait(1).to({rotation:633.1764,x:256.85,y:79.45},0).wait(1).to({rotation:634.9784,x:256.95,y:79.5},0).wait(1).to({rotation:636.7804,x:257,y:79.55},0).wait(1).to({rotation:638.5825,x:257.05,y:79.6},0).wait(1).to({rotation:640.3845,x:257.1,y:79.7},0).wait(1).to({rotation:642.1865,x:257.2,y:79.8},0).wait(1).to({rotation:643.9885},0).wait(1).to({rotation:645.7905,x:257.25,y:79.85},0).wait(1).to({rotation:647.5925,y:79.95},0).wait(1).to({rotation:649.3945,x:257.35,y:80},0).wait(1).to({rotation:651.1965,x:257.4,y:80.15},0).wait(1).to({rotation:652.9985,x:257.45},0).wait(1).to({rotation:654.8005,x:257.5,y:80.25},0).wait(1).to({rotation:656.6025,x:257.55,y:80.3},0).wait(1).to({rotation:658.4045,y:80.4},0).wait(1).to({rotation:660.2065,x:257.6,y:80.55},0).wait(1).to({rotation:662.0085,x:257.65,y:80.6},0).wait(1).to({rotation:663.8105,x:257.7,y:80.65},0).wait(1).to({rotation:665.6125,y:80.75},0).wait(1).to({rotation:667.4145,y:80.85},0).wait(1).to({rotation:669.2165,x:257.75,y:80.95},0).wait(1).to({rotation:671.0185},0).wait(1).to({rotation:672.8205,y:81.1},0).wait(1).to({rotation:674.6226,x:257.8},0).wait(1).to({rotation:676.4246,y:81.25},0).wait(1).to({rotation:678.2266,x:257.85,y:81.3},0).wait(1).to({rotation:680.0286,y:81.45},0).wait(1).to({rotation:681.8306,x:257.8,y:81.5},0).wait(1).to({rotation:683.6326,y:81.6},0).wait(1).to({rotation:685.4346,y:81.75},0).wait(1).to({rotation:687.2366,y:81.8},0).wait(1).to({rotation:689.0386,y:81.9},0).wait(1).to({rotation:690.8406,y:82},0).wait(1).to({rotation:692.6426,x:257.75,y:82.1},0).wait(1).to({rotation:694.4446,y:82.2},0).wait(1).to({rotation:696.2466,y:82.25},0).wait(1).to({rotation:698.0486,x:257.7,y:82.35},0).wait(1).to({rotation:699.8506,x:257.65,y:82.45},0).wait(1).to({rotation:701.6526,y:82.5},0).wait(1).to({rotation:703.4546,x:257.6,y:82.6},0).wait(1).to({rotation:705.2566,y:82.65},0).wait(1).to({rotation:707.0586,y:82.75},0).wait(1).to({rotation:708.8606,x:257.5,y:82.85},0).wait(1).to({rotation:710.6627,x:257.45},0).wait(1).to({rotation:712.4647,x:257.4,y:83},0).wait(1).to({rotation:714.2667,x:257.35,y:83.05},0).wait(1).to({rotation:716.0687,x:257.3,y:83.1},0).wait(1).to({rotation:717.8707,y:83.2},0).wait(1).to({rotation:719.6727,y:83.3},0).wait(1).to({rotation:721.4747,x:257.2},0).wait(1).to({rotation:723.2767,x:257.15,y:83.4},0).wait(1).to({rotation:725.0787,x:257.05,y:83.45},0).wait(1).to({rotation:726.8807,y:83.5},0).wait(1).to({rotation:728.6827,x:257,y:83.6},0).wait(1).to({rotation:730.4847,x:256.9,y:83.65},0).wait(1).to({rotation:732.2867,x:256.8,y:83.7},0).wait(1).to({rotation:734.0887,y:83.8},0).wait(1).to({rotation:735.8907,x:256.7},0).wait(1).to({rotation:737.6927,x:256.6,y:83.85},0).wait(1).to({rotation:739.4947,x:256.55,y:83.9},0).wait(1).to({rotation:741.2967,x:256.5,y:83.95},0).wait(1).to({rotation:743.0987,x:256.45,y:84},0).wait(1).to({rotation:744.9007,x:256.3,y:84.05},0).wait(1).to({rotation:746.7028,x:256.25,y:84.1},0).wait(1).to({rotation:748.5048,x:256.2},0).wait(1).to({rotation:750.3068,x:256.05,y:84.15},0).wait(1).to({rotation:752.1088,x:255.95,y:84.2},0).wait(1).to({rotation:753.9108,x:255.9},0).wait(1).to({rotation:755.7128,x:255.8,y:84.25},0).wait(1).to({rotation:757.5148,x:255.7,y:84.3},0).wait(1).to({rotation:759.3168,x:255.6},0).wait(1).to({rotation:761.1188,x:255.5},0).wait(1).to({rotation:762.9208,x:255.4,y:84.35},0).wait(1).to({rotation:764.7228,x:255.35},0).wait(1).to({rotation:766.5248,x:255.25,y:84.4},0).wait(1).to({rotation:768.3268,x:255.2,y:84.35},0).wait(1).to({rotation:770.1288,x:255.1},0).wait(1).to({rotation:771.9308,x:255,y:84.4},0).wait(1).to({rotation:773.7328,x:254.95,y:84.35},0).wait(1).to({rotation:775.5348,x:254.9,y:84.3},0).wait(1).to({rotation:777.3368,x:254.75,y:84.35},0).wait(1).to({rotation:779.1388,x:254.65},0).wait(1).to({rotation:780.9408,x:254.6,y:84.3},0).wait(1).to({rotation:782.7429,x:254.45},0).wait(1).to({rotation:784.5449,x:254.4},0).wait(1).to({rotation:786.3469,x:254.3,y:84.25},0).wait(1).to({rotation:788.1489,x:254.25,y:84.3},0).wait(1).to({rotation:789.9509,x:254.15,y:84.25},0).wait(1).to({rotation:791.7529,x:254.05,y:84.2},0).wait(1).to({rotation:793.5549,x:254},0).wait(1).to({rotation:795.3569,x:253.95,y:84.15},0).wait(1).to({rotation:797.1589,x:253.8,y:84.1},0).wait(1).to({rotation:798.9609,x:253.75,y:84.05},0).wait(1).to({rotation:800.7629,x:253.65},0).wait(1).to({rotation:802.5649,x:253.6,y:83.95},0).wait(1).to({rotation:804.3669,x:253.5,y:83.9},0).wait(1).to({rotation:806.1689,x:253.45,y:83.85},0).wait(1).to({rotation:807.9709,x:253.4},0).wait(1).to({rotation:809.7729,x:253.3,y:83.8},0).wait(1).to({rotation:811.5749,x:253.25,y:83.75},0).wait(1).to({rotation:813.3769,x:253.15,y:83.7},0).wait(1).to({rotation:815.1789,x:253.1,y:83.65},0).wait(1).to({rotation:816.9809,x:253.05,y:83.6},0).wait(1).to({rotation:818.783,x:253,y:83.5},0).wait(1).to({rotation:820.585,x:252.9,y:83.45},0).wait(1).to({rotation:822.387,x:252.85,y:83.35},0).wait(1).to({rotation:824.189,y:83.3},0).wait(1).to({rotation:825.991,x:252.75,y:83.25},0).wait(1).to({rotation:827.793,x:252.7,y:83.2},0).wait(1).to({rotation:829.595,x:252.65,y:83.1},0).wait(1).to({rotation:831.397,x:252.6,y:83},0).wait(1).to({rotation:833.199,y:82.95},0).wait(1).to({rotation:835.001,x:252.55,y:82.85},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Beams("synched",0);
	this.instance_1.setTransform(255,81.5,1,1,0,0,0,797.8,635.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:0.9023,x:255.05},0).wait(1).to({rotation:1.8045},0).wait(1).to({rotation:2.7068,x:255},0).wait(1).to({rotation:3.609},0).wait(1).to({rotation:4.5113},0).wait(1).to({rotation:5.4135,x:255.05},0).wait(1).to({rotation:6.3158,x:255},0).wait(1).to({rotation:7.218},0).wait(1).to({rotation:8.1203,x:255.05},0).wait(1).to({rotation:9.0226},0).wait(1).to({rotation:9.9248,y:81.55},0).wait(1).to({rotation:10.8271,y:81.5},0).wait(1).to({rotation:11.7293},0).wait(1).to({rotation:12.6316},0).wait(1).to({rotation:13.5338,x:255},0).wait(1).to({rotation:14.4361,y:81.55},0).wait(1).to({rotation:15.3383,y:81.5},0).wait(1).to({rotation:16.2406},0).wait(1).to({rotation:17.1429},0).wait(1).to({rotation:18.0451,x:255.05},0).wait(1).to({rotation:18.9474,x:255},0).wait(1).to({rotation:19.8496,x:255.05,y:81.55},0).wait(1).to({rotation:20.7519,x:255,y:81.5},0).wait(1).to({rotation:21.6541,x:255.05,y:81.55},0).wait(1).to({rotation:22.5564,x:255},0).wait(1).to({rotation:23.4586},0).wait(1).to({rotation:24.3609,y:81.5},0).wait(1).to({rotation:25.2632,x:255.05},0).wait(1).to({rotation:26.1654,x:255,y:81.55},0).wait(1).to({rotation:27.0677,y:81.5},0).wait(1).to({rotation:27.9699,y:81.45},0).wait(1).to({rotation:28.8722,y:81.5},0).wait(1).to({rotation:29.7744,x:255.05},0).wait(1).to({rotation:30.6767,x:255},0).wait(1).to({rotation:31.5789,y:81.55},0).wait(1).to({rotation:32.4812,x:255.05},0).wait(1).to({rotation:33.3835},0).wait(1).to({rotation:34.2857,x:255,y:81.5},0).wait(1).to({rotation:35.188,y:81.55},0).wait(1).to({rotation:36.0902,y:81.5},0).wait(1).to({rotation:36.9925,y:81.55},0).wait(1).to({rotation:37.8947,x:254.95,y:81.5},0).wait(1).to({rotation:38.797},0).wait(1).to({rotation:39.6992},0).wait(1).to({rotation:40.6015,x:255,y:81.55},0).wait(1).to({rotation:41.5038,x:254.95,y:81.5},0).wait(1).to({rotation:42.406},0).wait(1).to({rotation:43.3083},0).wait(1).to({rotation:44.2105,x:255,y:81.55},0).wait(1).to({rotation:45.1128,x:254.95},0).wait(1).to({rotation:46.015,y:81.5},0).wait(1).to({rotation:46.9173,x:255},0).wait(1).to({rotation:47.8195,y:81.55},0).wait(1).to({rotation:48.7218,x:254.95},0).wait(1).to({rotation:49.6241,y:81.5},0).wait(1).to({rotation:50.5263,y:81.55},0).wait(1).to({rotation:51.4286,x:255,y:81.5},0).wait(1).to({rotation:52.3308,y:81.55},0).wait(1).to({rotation:53.2331,y:81.5},0).wait(1).to({rotation:54.1353},0).wait(1).to({rotation:55.0376},0).wait(1).to({rotation:55.9398,x:254.95},0).wait(1).to({rotation:56.8421},0).wait(1).to({rotation:57.7444,x:255,y:81.55},0).wait(1).to({rotation:58.6466,y:81.5},0).wait(1).to({rotation:59.5489,x:254.95},0).wait(1).to({rotation:60.4511,x:255,y:81.55},0).wait(1).to({rotation:61.3534,y:81.5},0).wait(1).to({rotation:62.2556},0).wait(1).to({rotation:63.1579,x:254.95,y:81.55},0).wait(1).to({rotation:64.0602,x:255,y:81.5},0).wait(1).to({rotation:64.9624},0).wait(1).to({rotation:65.8647,x:254.95},0).wait(1).to({rotation:66.7669,x:255},0).wait(1).to({rotation:67.6692,x:254.95},0).wait(1).to({rotation:68.5714,x:255,y:81.55},0).wait(1).to({rotation:69.4737},0).wait(1).to({rotation:70.3759,y:81.5},0).wait(1).to({rotation:71.2782,x:254.95,y:81.55},0).wait(1).to({rotation:72.1805,x:255,y:81.5},0).wait(1).to({rotation:73.0827},0).wait(1).to({rotation:73.985,x:254.95,y:81.55},0).wait(1).to({rotation:74.8872,x:255,y:81.5},0).wait(1).to({rotation:75.7895,y:81.55},0).wait(1).to({rotation:76.6917,x:254.95,y:81.5},0).wait(1).to({rotation:77.594,x:255},0).wait(1).to({rotation:78.4962,x:254.95},0).wait(1).to({rotation:79.3985,x:255,y:81.55},0).wait(1).to({rotation:80.3008},0).wait(1).to({rotation:81.203,y:81.5},0).wait(1).to({rotation:82.1053,x:254.95},0).wait(1).to({rotation:83.0075,x:255},0).wait(1).to({rotation:83.9098},0).wait(1).to({rotation:84.812,y:81.55},0).wait(1).to({rotation:85.7143,y:81.5},0).wait(1).to({rotation:86.6165,x:254.95},0).wait(1).to({rotation:87.5188,x:255},0).wait(1).to({rotation:88.4211,x:254.95},0).wait(1).to({rotation:89.3233,y:81.55},0).wait(1).to({rotation:90.2256},0).wait(1).to({rotation:91.1278,x:255},0).wait(1).to({rotation:92.0301},0).wait(1).to({rotation:92.9323,y:81.5},0).wait(1).to({rotation:93.8346},0).wait(1).to({rotation:94.7368},0).wait(1).to({rotation:95.6391},0).wait(1).to({rotation:96.5414},0).wait(1).to({rotation:97.4436},0).wait(1).to({rotation:98.3459,y:81.55},0).wait(1).to({rotation:99.2481},0).wait(1).to({rotation:100.1504},0).wait(1).to({rotation:101.0526},0).wait(1).to({rotation:101.9549},0).wait(1).to({rotation:102.8571,x:254.95,y:81.5},0).wait(1).to({rotation:103.7594,x:255,y:81.55},0).wait(1).to({rotation:104.6617},0).wait(1).to({rotation:105.5639,y:81.5},0).wait(1).to({rotation:106.4662,x:254.95,y:81.55},0).wait(1).to({rotation:107.3684,x:255},0).wait(1).to({rotation:108.2707},0).wait(1).to({rotation:109.1729},0).wait(1).to({rotation:110.0752,x:254.95},0).wait(1).to({rotation:110.9774},0).wait(1).to({rotation:111.8797},0).wait(1).to({rotation:112.782,y:81.5},0).wait(1).to({rotation:113.6842,x:255},0).wait(1).to({rotation:114.5865,x:254.95,y:81.55},0).wait(1).to({rotation:115.4887,x:255,y:81.5},0).wait(1).to({rotation:116.391},0).wait(1).to({rotation:117.2932},0).wait(1).to({rotation:118.1955,x:254.95,y:81.55},0).wait(1).to({rotation:119.0977,x:255,y:81.5},0).wait(1).to({rotation:120},0).wait(1).to({rotation:120.9023,y:81.55},0).wait(1).to({rotation:121.8045},0).wait(1).to({rotation:122.7068,y:81.5},0).wait(1).to({rotation:123.609,x:254.95,y:81.55},0).wait(1).to({rotation:124.5113,x:255,y:81.5},0).wait(1).to({rotation:125.4135,x:254.95},0).wait(1).to({rotation:126.3158,y:81.55},0).wait(1).to({rotation:127.218},0).wait(1).to({rotation:128.1203,y:81.5},0).wait(1).to({rotation:129.0226,x:255,y:81.55},0).wait(1).to({rotation:129.9248,y:81.5},0).wait(1).to({rotation:130.8271,x:254.95,y:81.55},0).wait(1).to({rotation:131.7293,x:255},0).wait(1).to({rotation:132.6316,x:254.95,y:81.5},0).wait(1).to({rotation:133.5338,x:255},0).wait(1).to({rotation:134.4361,x:254.95},0).wait(1).to({rotation:135.3383,y:81.55},0).wait(1).to({rotation:136.2406,x:255,y:81.5},0).wait(1).to({rotation:137.1429,y:81.45},0).wait(1).to({rotation:138.0451,x:254.95},0).wait(1).to({rotation:138.9474,x:255,y:81.5},0).wait(1).to({rotation:139.8496},0).wait(1).to({rotation:140.7519},0).wait(1).to({rotation:141.6541,y:81.45},0).wait(1).to({rotation:142.5564,y:81.5},0).wait(1).to({rotation:143.4586,y:81.45},0).wait(1).to({rotation:144.3609},0).wait(1).to({rotation:145.2632,y:81.5},0).wait(1).to({rotation:146.1654,x:254.95,y:81.45},0).wait(1).to({rotation:147.0677},0).wait(1).to({rotation:147.9699},0).wait(1).to({rotation:148.8722,x:255},0).wait(1).to({rotation:149.7744,y:81.5},0).wait(1).to({rotation:150.6767,x:255.05,y:81.45},0).wait(1).to({rotation:151.5789,x:255,y:81.5},0).wait(1).to({rotation:152.4812,x:254.95,y:81.45},0).wait(1).to({rotation:153.3835,x:255,y:81.5},0).wait(1).to({rotation:154.2857,x:254.95},0).wait(1).to({rotation:155.188},0).wait(1).to({rotation:156.0902,x:255},0).wait(1).to({rotation:156.9925,x:254.95,y:81.45},0).wait(1).to({rotation:157.8947,x:255},0).wait(1).to({rotation:158.797},0).wait(1).to({rotation:159.6992,x:254.95},0).wait(1).to({rotation:160.6015,y:81.5},0).wait(1).to({rotation:161.5038,x:255},0).wait(1).to({rotation:162.406,x:254.95},0).wait(1).to({rotation:163.3083},0).wait(1).to({rotation:164.2105},0).wait(1).to({rotation:165.1128,x:255},0).wait(1).to({rotation:166.015},0).wait(1).to({rotation:166.9173},0).wait(1).to({rotation:167.8195,y:81.45},0).wait(1).to({rotation:168.7218,y:81.5},0).wait(1).to({rotation:169.6241,x:254.95},0).wait(1).to({rotation:170.5263,x:255.05,y:81.45},0).wait(1).to({rotation:171.4286,x:254.95},0).wait(1).to({rotation:172.3308,x:255},0).wait(1).to({rotation:173.2331,y:81.5},0).wait(1).to({rotation:174.1353},0).wait(1).to({rotation:175.0376},0).wait(1).to({rotation:175.9398,x:254.95},0).wait(1).to({rotation:176.8421,y:81.45},0).wait(1).to({rotation:177.7444,y:81.5},0).wait(1).to({rotation:178.6466,x:255},0).wait(1).to({rotation:179.5489},0).wait(1).to({rotation:180.4511},0).wait(1).to({rotation:181.3534},0).wait(1).to({rotation:182.2556,x:254.95},0).wait(1).to({rotation:183.1579,y:81.45},0).wait(1).to({rotation:184.0602,x:255},0).wait(1).to({rotation:184.9624,x:254.95,y:81.5},0).wait(1).to({rotation:185.8647},0).wait(1).to({rotation:186.7669},0).wait(1).to({rotation:187.6692,x:255},0).wait(1).to({rotation:188.5714,x:254.95},0).wait(1).to({rotation:189.4737,y:81.45},0).wait(1).to({rotation:190.3759,x:255},0).wait(1).to({rotation:191.2782,x:254.95},0).wait(1).to({rotation:192.1805,y:81.5},0).wait(1).to({rotation:193.0827,y:81.45},0).wait(1).to({rotation:193.985,y:81.5},0).wait(1).to({rotation:194.8872,x:255},0).wait(1).to({rotation:195.7895},0).wait(1).to({rotation:196.6917,x:254.95},0).wait(1).to({rotation:197.594},0).wait(1).to({rotation:198.4962},0).wait(1).to({rotation:199.3985,x:255,y:81.55},0).wait(1).to({rotation:200.3008,x:254.95,y:81.45},0).wait(1).to({rotation:201.203},0).wait(1).to({rotation:202.1053,y:81.5},0).wait(1).to({rotation:203.0075},0).wait(1).to({rotation:203.9098},0).wait(1).to({rotation:204.812,x:255,y:81.45},0).wait(1).to({rotation:205.7143,y:81.5},0).wait(1).to({rotation:206.6165,x:254.95,y:81.45},0).wait(1).to({rotation:207.5188,x:255,y:81.5},0).wait(1).to({rotation:208.4211,x:254.95},0).wait(1).to({rotation:209.3233,y:81.45},0).wait(1).to({rotation:210.2256,y:81.5},0).wait(1).to({rotation:211.1278,x:255},0).wait(1).to({rotation:212.0301},0).wait(1).to({rotation:212.9323},0).wait(1).to({rotation:213.8346},0).wait(1).to({rotation:214.7368},0).wait(1).to({rotation:215.6391},0).wait(1).to({rotation:216.5414},0).wait(1).to({rotation:217.4436},0).wait(1).to({rotation:218.3459,x:254.95,y:81.45},0).wait(1).to({rotation:219.2481,x:255,y:81.5},0).wait(1).to({rotation:220.1504,x:254.95},0).wait(1).to({rotation:221.0526,x:255},0).wait(1).to({rotation:221.9549,y:81.45},0).wait(1).to({rotation:222.8571,x:254.9},0).wait(1).to({rotation:223.7594,x:254.95,y:81.55},0).wait(1).to({rotation:224.6617,x:255,y:81.45},0).wait(1).to({rotation:225.5639,y:81.5},0).wait(1).to({rotation:226.4662},0).wait(1).to({rotation:227.3684},0).wait(1).to({rotation:228.2707},0).wait(1).to({rotation:229.1729,x:254.95,y:81.45},0).wait(1).to({rotation:230.0752,y:81.5},0).wait(1).to({rotation:230.9774,x:255},0).wait(1).to({rotation:231.8797,y:81.45},0).wait(1).to({rotation:232.782,y:81.5},0).wait(1).to({rotation:233.6842,y:81.45},0).wait(1).to({rotation:234.5865},0).wait(1).to({rotation:235.4887,x:254.95},0).wait(1).to({rotation:236.391,x:255},0).wait(1).to({rotation:237.2932},0).wait(1).to({rotation:238.1955,y:81.5},0).wait(1).to({rotation:239.0977},0).wait(1).to({rotation:240,x:254.95},0).wait(1).to({rotation:240.9023,x:255},0).wait(1).to({rotation:241.8045,x:254.95,y:81.45},0).wait(1).to({rotation:242.7068,x:255,y:81.5},0).wait(1).to({rotation:243.609,x:254.95,y:81.45},0).wait(1).to({rotation:244.5113,x:255},0).wait(1).to({rotation:245.4135,x:254.95,y:81.5},0).wait(1).to({rotation:246.3158,x:255.05,y:81.45},0).wait(1).to({rotation:247.218,x:255,y:81.5},0).wait(1).to({rotation:248.1203,x:255.05,y:81.45},0).wait(1).to({rotation:249.0226,y:81.5},0).wait(1).to({rotation:249.9248,y:81.45},0).wait(1).to({rotation:250.8271,y:81.5},0).wait(1).to({rotation:251.7293,x:255,y:81.45},0).wait(1).to({rotation:252.6316,y:81.55},0).wait(1).to({rotation:253.5338,y:81.45},0).wait(1).to({rotation:254.4361,x:255.05},0).wait(1).to({rotation:255.3383,y:81.5},0).wait(1).to({rotation:256.2406,x:255},0).wait(1).to({rotation:257.1429,y:81.45},0).wait(1).to({rotation:258.0451,y:81.5},0).wait(1).to({rotation:258.9474},0).wait(1).to({rotation:259.8496},0).wait(1).to({rotation:260.7519,x:255.05,y:81.45},0).wait(1).to({rotation:261.6541,x:255,y:81.5},0).wait(1).to({rotation:262.5564,x:255.05},0).wait(1).to({rotation:263.4586,y:81.45},0).wait(1).to({rotation:264.3609,x:255},0).wait(1).to({rotation:265.2632,x:255.1,y:81.5},0).wait(1).to({rotation:266.1654,x:255},0).wait(1).to({rotation:267.0677},0).wait(1).to({rotation:267.9699,x:255.05},0).wait(1).to({rotation:268.8722,x:255},0).wait(1).to({rotation:269.7744,y:81.45},0).wait(1).to({rotation:270.6767},0).wait(1).to({rotation:271.5789},0).wait(1).to({rotation:272.4812,x:255.05},0).wait(1).to({rotation:273.3835,x:255,y:81.5},0).wait(1).to({rotation:274.2857},0).wait(1).to({rotation:275.188,x:255.05,y:81.45},0).wait(1).to({rotation:276.0902,x:255},0).wait(1).to({rotation:276.9925,y:81.5},0).wait(1).to({rotation:277.8947,x:254.95,y:81.45},0).wait(1).to({rotation:278.797,x:255},0).wait(1).to({rotation:279.6992},0).wait(1).to({rotation:280.6015,x:255.05},0).wait(1).to({rotation:281.5038,y:81.5},0).wait(1).to({rotation:282.406,x:255},0).wait(1).to({rotation:283.3083,x:255.05},0).wait(1).to({rotation:284.2105,x:255},0).wait(1).to({rotation:285.1128,y:81.45},0).wait(1).to({rotation:286.015,x:255.05},0).wait(1).to({rotation:286.9173,x:255,y:81.5},0).wait(1).to({rotation:287.8195},0).wait(1).to({rotation:288.7218,y:81.45},0).wait(1).to({rotation:289.6241,x:255.05,y:81.5},0).wait(1).to({rotation:290.5263},0).wait(1).to({rotation:291.4286,x:255},0).wait(1).to({rotation:292.3308,y:81.45},0).wait(1).to({rotation:293.2331,y:81.5},0).wait(1).to({rotation:294.1353,y:81.45},0).wait(1).to({rotation:295.0376,x:255.05,y:81.5},0).wait(1).to({rotation:295.9398},0).wait(1).to({rotation:296.8421,x:255,y:81.45},0).wait(1).to({rotation:297.7444,x:255.05,y:81.5},0).wait(1).to({rotation:298.6466,x:255,y:81.45},0).wait(1).to({rotation:299.5489},0).wait(1).to({rotation:300.4511},0).wait(1).to({rotation:301.3534},0).wait(1).to({rotation:302.2556,x:255.05},0).wait(1).to({rotation:303.1579},0).wait(1).to({rotation:304.0602,x:255},0).wait(1).to({rotation:304.9624,y:81.5},0).wait(1).to({rotation:305.8647,y:81.45},0).wait(1).to({rotation:306.7669,x:255.05},0).wait(1).to({rotation:307.6692,y:81.5},0).wait(1).to({rotation:308.5714,x:255,y:81.45},0).wait(1).to({rotation:309.4737,x:254.95},0).wait(1).to({rotation:310.3759,x:255,y:81.5},0).wait(1).to({rotation:311.2782},0).wait(1).to({rotation:312.1805,x:255.05,y:81.45},0).wait(1).to({rotation:313.0827,x:255},0).wait(1).to({rotation:313.985,x:255.05},0).wait(1).to({rotation:314.8872},0).wait(1).to({rotation:315.7895,x:255,y:81.5},0).wait(1).to({rotation:316.6917,x:255.05},0).wait(1).to({rotation:317.594,x:255},0).wait(1).to({rotation:318.4962},0).wait(1).to({rotation:319.3985,x:255.05},0).wait(1).to({rotation:320.3008,x:254.95,y:81.45},0).wait(1).to({rotation:321.203,y:81.5},0).wait(1).to({rotation:322.1053,x:255,y:81.45},0).wait(1).to({rotation:323.0075},0).wait(1).to({rotation:323.9098,x:255.05},0).wait(1).to({rotation:324.812,x:255,y:81.5},0).wait(1).to({rotation:325.7143},0).wait(1).to({rotation:326.6165},0).wait(1).to({rotation:327.5188},0).wait(1).to({rotation:328.4211},0).wait(1).to({rotation:329.3233,x:255.05,y:81.45},0).wait(1).to({rotation:330.2256,y:81.55},0).wait(1).to({rotation:331.1278,x:255},0).wait(1).to({rotation:332.0301,y:81.5},0).wait(1).to({rotation:332.9323,y:81.55},0).wait(1).to({rotation:333.8346,x:255.05},0).wait(1).to({rotation:334.7368,x:255,y:81.5},0).wait(1).to({rotation:335.6391,y:81.6},0).wait(1).to({rotation:336.5414,y:81.55},0).wait(1).to({rotation:337.4436,y:81.5},0).wait(1).to({rotation:338.3459},0).wait(1).to({rotation:339.2481,x:255.05,y:81.6},0).wait(1).to({rotation:340.1504,x:255,y:81.5},0).wait(1).to({rotation:341.0526},0).wait(1).to({rotation:341.9549,y:81.55},0).wait(1).to({rotation:342.8571,x:255.05,y:81.5},0).wait(1).to({rotation:343.7594,x:255,y:81.55},0).wait(1).to({rotation:344.6617,x:254.95,y:81.5},0).wait(1).to({rotation:345.5639,x:255,y:81.55},0).wait(1).to({rotation:346.4662,x:255.05,y:81.5},0).wait(1).to({rotation:347.3684},0).wait(1).to({rotation:348.2707,x:255,y:81.6},0).wait(1).to({rotation:349.1729,y:81.55},0).wait(1).to({rotation:350.0752},0).wait(1).to({rotation:350.9774,x:255.05},0).wait(1).to({rotation:351.8797,x:255,y:81.5},0).wait(1).to({rotation:352.782},0).wait(1).to({rotation:353.6842,y:81.55},0).wait(1).to({rotation:354.5865,x:255.05},0).wait(1).to({rotation:355.4887,x:254.95,y:81.5},0).wait(1).to({rotation:356.391,x:255,y:81.55},0).wait(1).to({rotation:357.2932},0).wait(1).to({rotation:358.1955},0).wait(1).to({rotation:359.0977,y:81.5},0).wait(1).to({rotation:360},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563.2,-736.6,1636.4,1636.3000000000002);


(lib.Shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	mask.setTransform(1140.7,764.2);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFF2B5","rgba(255,242,181,0)"],[0,1],-12.8,-108.8,-12.8,300.2).s().p("Eg0EAv1Qp3u1AAy6QAA5pSJyJQSJyIZpAAQZqAASJSIQSJSJAAZpQAAS6p2O1g");
	this.shape.setTransform(1144.8,835.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(400));

	// Globe_ani_CORRECT
	this.instance = new lib.GlobeaniCORRECT("synched",0);
	this.instance.setTransform(1114.95,1001.95,1.2294,0.8693,0,0,0,239.3,239.4);
	this.instance.alpha = 0.7383;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(400));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_1.setTransform(1140.7,764.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(400));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500.7,404.2,1280,720);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var puzzlepieces = [this.p1, this.p2, this.p3, this.p4, this.p5];
		var dropspots = [this.s1, this.s2, this.s3, this.s4, this.s5];
		var startA = [];
		var startDrag = startDragF.bind(this);
		
		
		for (var i = 0; i < puzzlepieces.length; i++) {
			startA[i] = [puzzlepieces[i].x, puzzlepieces[i].y];
			puzzlepieces[i].addEventListener("mousedown", startMouseDown.bind(this))
			puzzlepieces[i].addEventListener("pressmove", startDrag);
			puzzlepieces[i].addEventListener("pressup", stopDragF.bind(this));
		}
		
		var differenceX;
		var differenceY;
		
		function startMouseDown(e) {
			var pt = stage.globalToLocal(e.stageX, e.stageY);
			differenceX = (e.currentTarget.x - pt.x);
			differenceY = (e.currentTarget.y - pt.y);
		}
		
		function startDragF(e) {
			var p = stage.globalToLocal(e.stageX, e.stageY);
			e.currentTarget.x = p.x + differenceX;
			e.currentTarget.y = p.y + differenceY;
		}
		
		
		function stopDragF(e) {
			var i = puzzlepieces.indexOf(e.currentTarget);
			var pt = e.currentTarget.localToLocal(0, 0, dropspots[i]);
			if (dropspots[i].hitTest(pt.x, pt.y)) {
				e.currentTarget.x = dropspots[i].x;
				e.currentTarget.y = dropspots[i].y;
				e.currentTarget.removeEventListener("pressmove", startDrag);
			} else {
				e.currentTarget.x = startA[i][0];
				e.currentTarget.y = startA[i][1];
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.p4 = new lib.Symbol1();
	this.p4.name = "p4";
	this.p4.setTransform(348,113.25,1,1,0,0,0,37.2,37.2);

	this.p5 = new lib.Symbol1();
	this.p5.name = "p5";
	this.p5.setTransform(432,113.25,1,1,0,0,0,37.2,37.2);

	this.p3 = new lib.Symbol1();
	this.p3.name = "p3";
	this.p3.setTransform(263,113.25,1,1,0,0,0,37.2,37.2);

	this.p2 = new lib.Symbol1();
	this.p2.name = "p2";
	this.p2.setTransform(175.25,113.25,1,1,0,0,0,37.2,37.2);

	this.p1 = new lib.Symbol1();
	this.p1.name = "p1";
	this.p1.setTransform(88.25,113.25,1,1,0,0,0,37.2,37.2);

	this.s1 = new lib.Symbol2();
	this.s1.name = "s1";
	this.s1.setTransform(88.25,218.25,1,1,0,0,0,37.2,37.2);

	this.s5 = new lib.Symbol2();
	this.s5.name = "s5";
	this.s5.setTransform(432,218.25,1,1,0,0,0,37.2,37.2);

	this.s4 = new lib.Symbol2();
	this.s4.name = "s4";
	this.s4.setTransform(348,218.25,1,1,0,0,0,37.2,37.2);

	this.s2 = new lib.Symbol2();
	this.s2.name = "s2";
	this.s2.setTransform(175.25,218.25,1,1,0,0,0,37.2,37.2);

	this.s3 = new lib.Symbol2();
	this.s3.name = "s3";
	this.s3.setTransform(263,218.25,1,1,0,0,0,37.2,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s3},{t:this.s2},{t:this.s4},{t:this.s5},{t:this.s1},{t:this.p1},{t:this.p2},{t:this.p3},{t:this.p5},{t:this.p4}]}).wait(1));

	// Shine
	this.instance = new lib.Shine();
	this.instance.setTransform(394.6,384.35,0.6401,0.8911,0,0,0,1131.2,865.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(168.8,52.3,855.6000000000001,889.3000000000001);
// library properties:
lib.properties = {
	id: 'FDD901CA40B04848B6974A874BA03134',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['FDD901CA40B04848B6974A874BA03134'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;