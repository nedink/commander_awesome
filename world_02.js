var world2=function() {
	rw.newRule('map', new mapScroll())
	.newRule('fireRule', new fireRule())
	.newRule('statRule',new statRule())
	.newRule('enterStore', new enterStore())
	.newMap('00-00','01-00-00','png',640,640).moveTo(-336,-336).display().end()
	.newMap('01-00','01-01-00','png',640,640).moveTo(304,-336).display().end()
	.newMap('02-00','01-02-00','png',640,640).moveTo(944,-336).display().end()
	.newMap('00-01','01-00-01','png',640,640).moveTo(-336,304).display().end()
	.newMap('01-01','01-01-01','png',640,640).moveTo(304,304).display().end()
	.newMap('02-01','01-02-01','png',640,640).moveTo(944,304).display().end()
	.newMap('00-02','01-00-02','png',640,640).moveTo(-336,944).display().end()
	.newMap('01-02','01-01-02','png',640,640).moveTo(304,944).display().end()
	.newMap('02-02','01-02-02','png',640,640).moveTo(944,944).display().end()
	.func(makeStatBar())
	.newEnt(new wall(32,96)).base.display('',272,304).end()
	.newEnt(new wall(96,32)).base.display('',400,304).end()
	.newEnt(new wall(196,32)).base.display('',304,368).end()
	.newEnt(new wall(288,32)).base.display('',304,272).end()
	.newEnt(new wall(512,32)).base.display('',592,240).end()
	.newEnt(new wall(208,128)).base.display('',272,576).end()
	.newEnt(new wall(320,128)).base.display('',416,608).end()
	.newEnt(new wall(112,160)).base.display('',704,640).end()
	.newEnt(new wall(240,160)).base.display('',848,640).end()
	.newEnt(new wall(64,64)).base.display('',1024,576).end()
	.newEnt(new wall(32,1024)).base.display('',1088,272).end()
	.newEnt(new wall(32,896)).base.display('',240,400).end()
	.newEnt(new wall(864,32)).base.display('',240,1264).end()
	.newEnt(new commander())
		.base.display('d1l',304,304,304).end()
    .newEnt(new sting('d'))
        .base.display('d1',624,304,304).end()
	.newEnt(new store())
		.base.display('d',368,304).end()
	.newEnt(new shades('u'))
		.base.display('u1',524,524,524).end()
	.newEnt(new shades('u'))
		.base.display('u1',588,492,492).end()
	.newEnt(new shades('u'))
		.base.display('u1',556,524,524).end()
	.newEnt(new baldo('u'))
		.base.display('u1',716,524,524).end()
	.newEnt(new baldo('l'))
		.base.display('l1',748,492,492).end()
	.newEnt(new baldo('l'))
		.base.display('l1',748,336,336).end()
}
/*
	.newMap('01','01','gif',1920,1920).moveTo(-336,-336).display().end()

*/
