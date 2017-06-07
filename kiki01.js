var kiki01Layer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var size  = cc.winSize;

        var mylabel = new cc.LabelTTF('First view of y','Arial',40,
            cc.size(260,60),
            cc.TEXT_ALIGNMENT_CENTER,
            cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        mylabel.x = size.width/2;
        mylabel.y = size.height/2;
        mylabel.setColor(cc.color(0,0,255));
        this.addChild(mylabel,1);

        var mybgcolor = new cc.LayerColor(cc.color(255,255,0),260,60);
        mybgcolor.x = size.width /2;
        mybgcolor.y = size.height /2;
        mybgcolor.ignoreAnchorPointForPosition(false);
        this.addChild(mybgcolor,0);

    }
});

var txtScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new kiki01Layer();
        this.addChild(layer);
    }
});
