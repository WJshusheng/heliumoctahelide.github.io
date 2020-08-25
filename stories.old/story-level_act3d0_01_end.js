var story = [
    [
        "bg_hotel",
        "char_145_prove_1",
        "char_348_ceylon_7",
        "char_166_skfire_1",
        "char_348_ceylon_4",
        "char_166_skfire_2",
        "bg_forest",
        "char_166_skfire_3",
        "char_348_ceylon_2",
        "char_348_ceylon_5",
        "char_348_ceylon_8"
    ],
    [
        "m_dia_farce_loop",
        "m_dia_farce_intro"
    ],
    [
        "background.showImage({image:'bg_hotel',screenadapt:'coverall', fadetime:1});playground.clearDialog();playground.drawCharacter({});delay(1);playground.Decision({options:[['原来是这样......']]});",
        "predicate = ['1'];",
        "voice.playMusic({intro:'m_dia_farce_intro', key:'m_dia_farce_loop', volume:0.8, crossfade:1.5});playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'就是如此，我们在火山脚下的森林里，碰到了锡兰小姐。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_348_ceylon_7',fadetime:1,block:true});delay(1);playground.drawDialog({name:'锡兰',text:'我有一个问题。'});",
        "playground.drawDialog({name:'锡兰',text:'有必要把你们解救我之前的过程描述得这么详细吗？'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'我觉得这位大小姐说得对，而且大尾巴你是不是还提到了你觉得我很麻烦？'});",
        "playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'欸，啊，是你的错觉！'});",
        "playground.Decision({options:[['不管怎么说，大家平安无事就好。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_348_ceylon_4'});playground.drawDialog({name:'锡兰',text:'嗯，那么，虽然比较晚了，请容我正式自我介绍一下。'});",
        "playground.drawDialog({name:'锡兰',text:'我的名字是锡兰·道尔科斯，维多利亚国立大学毕业，专攻方向是源石研究，也是这座城市市长的女儿。'});",
        "playground.Decision({options:[['市长的女儿？！']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'谁会想到市长的女儿会独自去未开发的火山林地呢。'});",
        "playground.drawCharacter({name:'char_348_ceylon_4'});playground.drawDialog({name:'锡兰',text:'那也是因为不得不做一些学者必须要去尝试的冒险......'});",
        "playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'继续说回到刚才在火山脚下......'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_forest'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_348_ceylon_7'});playground.drawDialog({name:'锡兰',text:'咳、咳咳。'});",
        "playground.drawDialog({name:'锡兰',text:'谢谢你们，陌生人。'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'不用客气。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'不过，你为什么会一个人来这里？'});",
        "playground.drawDialog({name:'普罗旺斯',text:'如果只是在沙滩上散步的话，你走得稍微有些远了呢。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'唔，从你身上带的工具来看......'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'普罗旺斯，她也和我们一样，是来查看状况。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:1});playground.drawDialog({name:'普罗旺斯',text:'咦，是这样吗？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:2});playground.drawDialog({name:'天火',text:'带着笔记，却穿着洋装和靴子。'});",
        "playground.drawDialog({name:'天火',text:'如果不是单纯的傻子的话，那就只能是————'});",
        "playground.drawDialog({name:'天火',text:'忽然产生了灵感，忘记换衣服直接冲出家门，等遇到了麻烦才发现穿着问题。'});",
        "playground.drawDialog({name:'天火',text:'我不记得因为这样的事情烧毁过多少裙子了。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:1});playground.drawDialog({name:'普罗旺斯',text:'唔，我觉得这似乎不是应该用理所当然的口吻来描述的事？'});",
        "playground.drawCharacter({name:'char_348_ceylon_2'});playground.drawDialog({name:'锡兰',text:'姑且不论裙子的事情，大体上你的判断没有错。'});",
        "playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'该说什么好呢，这么做还是有些危险的哦......没有准备完全的话。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:2});playground.drawDialog({name:'天火',text:'没事。只要我在，哪怕是两手空空出门也会很安全。'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'总之，谢谢你们救了我。'});",
        "playground.drawDialog({name:'锡兰',text:'等回到市内时，可以来找我，我会报答你们。'});",
        "playground.drawDialog({name:'锡兰',text:'但抱歉，现在我很忙，我有重要的事要做。'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'哦哦原来你还有事，那就不耽误你时间了，不过最好还是不要独自再去火山那里了。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'你刚才才被这些源石虫袭击了，一个人很危险的。'});",
        "playground.drawCharacter({name:'char_348_ceylon_2',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'不，刚才的事我认为只是个意外。当时我急着上山了，没有注意附近情况。'});",
        "playground.drawDialog({name:'锡兰',text:'我在这座城市长大，如果这里的源石虫真的有那么危险，那市长应该早就采取对策了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_2',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'......呃，好吧。不过，我觉得，或许它们的聚集是有原因的。'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'这里一直都是这样，怎么会......'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'等等，因为环境改变带来的狂躁化......原来如此，谢谢你，我的证据又多了一条！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'......普罗旺斯，看起来她和你发现了一样的东西。'});",
        "playground.drawDialog({name:'天火',text:'虽然我对火山没有那么熟悉，但是作为一名专业而全面的学者，大致的了解还是有的。'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'难道说，你们也是来寻找证据的吗？'});",
        "playground.drawDialog({name:'锡兰',text:'寻找这座火山可能会爆发的证据？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_hotel'});blocker.blocker({a:0, fadetime:2, block:true});playground.Decision({options:[['火山爆发？！', '开玩笑吧？！']]});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'特殊的刺激性气味，加上异常的气温、狂躁化的源石虫.....'});",
        "playground.drawDialog({name:'普罗旺斯',text:'况且在火山周围能遇到这种感染生物，也说明这火山也不太一般。要知道如果这山内有源石的话，矿业开采商可是会挤破头的。'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'火山的实际情况并没有多少人知道，而且通常也被市政厅和相关机构管理着。'});",
        "playground.drawDialog({name:'锡兰',text:'因为环境改变带来的生物狂躁化......至少对比以前的状况，我多少也能对现在的异变有些猜测。'});",
        "playground.drawDialog({name:'锡兰',text:'为了保障市民和城市的安全，我一直在到处寻找对此方面有专业经验的人。'});",
        "playground.drawDialog({name:'锡兰',text:'希望你们务必要帮助我，帮助我让汐斯塔市度过这个难关。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];