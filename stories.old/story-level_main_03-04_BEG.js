var story = [
    [
        "bg_wild_a",
        "char_103_angel_1",
        "char_002_amiya_2",
        "char_102_texas_1",
        "char_002_amiya_1",
        "char_106_franka_1",
        "char_136_hsguma",
        "char_010_chen_1",
        "char_107_liskam_1",
        "char_002_amiya_6",
        "char_1002_nsabr_2",
        "char_002_amiya_7"
    ],
    [
        "m_bat_game02_loop",
        "m_bat_game02_intro",
        "p_imp_sword_n",
        "d_gen_soldiersrun"
    ],
    [
        "background.showImage({image:'bg_wild_a', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_bat_game02_intro', key:'m_bat_game02_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'怎么样阿米娅，企鹅物流很不错吧？'});",
        "playground.drawCharacter({name:'char_103_angel_1',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'嗯，很厉害！'});",
        "playground.drawCharacter({name:'char_103_angel_1',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'能天使',text:'唔，唔啊！'});",
        "playground.drawDialog({name:'能天使',text:'被比自己年龄小的孩子直接这么夸奖，还有点不好意思。'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'她可是我们的雇主，稍微礼貌一些。'});",
        "playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'唉唉，不好意思！'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'没问题的，我还得谢谢你们呢！'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'这样一来，罗德岛这里也汇合了。'});",
        "playground.drawDialog({name:'德克萨斯',text:'下面要做什么？'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'char_002_amiya_1',focus:2});playground.drawDialog({name:'阿米娅',text:'可能需要近卫局先做判断，然后我才能给出意见。'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'德克萨斯',text:'是嘛。'});",
        "playground.drawDialog({name:'德克萨斯',text:'那我去问他们一下，让他们过来看看。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2,block:true});playground.drawCharacter({fadetime:0});delay(1.5);playground.drawDialog({name:'星熊',text:'这个地形......'});",
        "playground.drawDialog({name:'星熊',text:'整合运动应该是有意识把我们引到这里来的。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'黄沙、荒原、岩石。真是凑齐了一切野外作战的要素。'});",
        "playground.drawDialog({name:'芙兰卡',text:'唯一缺的东西，大概就是敌人了吧？'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_010_chen_1', focus:2});playground.drawDialog({name:'陈',text:'星熊，你留下帮罗德岛一把。'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_010_chen_1', focus:1});playground.drawDialog({name:'星熊',text:'啊？好的。'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_010_chen_1', focus:2});playground.drawDialog({name:'陈',text:'我带近卫局换个位置。'});",
        "playground.drawDialog({name:'陈',text:'如果就这么僵持下去，整合运动的路线很可能会脱离我们的控制。'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_010_chen_1', focus:1});playground.drawDialog({name:'星熊',text:'明白。'});",
        "playground.drawDialog({name:'星熊',text:'你自己也多加小心。'});",
        "playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'——唔哦，刚才那阵风好大。'});",
        "playground.drawDialog({name:'能天使',text:'唔唔，可视好差，有点施展不开呢......'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'不能再前进了。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'整合运动可能会等到我们都进入包围圈之后，再对我们发动攻击。'});",
        "playground.drawDialog({name:'雷蛇',text:'一定要避免陷入这种处境。'});",
        "playground.drawCharacter({name:'char_106_franka_1',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'芙兰卡',text:'这样吧，阿米娅。'});",
        "playground.drawDialog({name:'芙兰卡',text:'我先和雷蛇迂回作战，边侦察敌情，边尝试占领这片区域中的高地。'});",
        "playground.drawDialog({name:'芙兰卡',text:'在我们通知你之前，罗德岛最好先坚守阵地。'});",
        "playground.drawDialog({name:'芙兰卡',text:'可别因为我们战斗得太激烈就突然冲出来哦，阿米娅。'});",
        "playground.drawCharacter({name:'char_106_franka_1',name2:'char_002_amiya_1',focus:2});playground.drawDialog({name:'阿米娅',text:'我知道的，我会自己判断局势。'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'博士，你也要拉好她哦！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'保持联系。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'废墟空无一人，制高点也没人防守。'});",
        "playground.drawDialog({name:'芙兰卡',text:'有趣，整合运动难道没有指挥官？'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'芙兰卡，有什么问题吗？'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'明明是十分易守难攻的地形。'});",
        "playground.drawDialog({name:'芙兰卡',text:'整合运动肯定会埋伏我们——————'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'去死吧，感染者叛徒！'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'啧，真是不给面子啊。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'——芙兰卡！！小心侧面也有！！'});",
        "playground.drawDialog({name:'阿米娅',text:'我看见有整合运动从建筑下方——'});",
        "background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});voice.playSound({key:'p_imp_sword_n', volume:0.7});blocker.blocker({a:0, fadetime:1.5, block:false});delay(1);playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'咳......快剑......？！'});",
        "playground.drawDialog({name:'整合运动成员',text:'怎么......会......'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'呵呵。'});",
        "playground.drawDialog({name:'芙兰卡',text:'以为躲在废墟下方，就能从脚底偷袭我们？'});",
        "playground.drawDialog({name:'芙兰卡',text:'未免也太小看我了吧？'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'......黑钢......！'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0});voice.playSound({key:'d_gen_soldiersrun', volume:0.7});playground.drawDialog({name:'整合运动',text:'撤退！快撤退！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'我还真以为会有大批整合运动埋伏在这，弄得我一路都是踮着脚尖走过来的呢。'});",
        "playground.drawDialog({name:'芙兰卡',text:'结果就是一批胆小鬼而已，真让人有些泄气。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'别因为这点小事泄气啊！'});",
        "playground.drawDialog({name:'雷蛇',text:'不能让他们这么轻易就逃脱，我们理当追击敌人！'});",
        "playground.drawDialog({name:'雷蛇',text:'阿米娅，你觉得呢？'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'我觉得，还是不能冒进！'});",
        "playground.drawDialog({name:'阿米娅',text:'先让企鹅物流的二位帮你们稳定局势之后再做打算比较好。'});",
        "playground.drawDialog({name:'阿米娅',text:'能天使，能优先确保制高点吗？'});",
        "playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:' 能天使',text:'好嘞！那我就去咯？'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'好的，尽量压制住敌人，不要给整合运动丁点反击的机会！'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'——'});",
        "playground.drawDialog({name:'德克萨斯',text:'整合运动跑了一小段距离之后，就在那里重整阵形了。'});",
        "playground.drawDialog({name:'德克萨斯',text:'他们好像......还牵了个什么出来。'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'——'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'当心。'});",
        "playground.drawDialog({name:'阿米娅',text:'那个整合运动的暴徒......'});",
        "playground.drawDialog({name:'阿米娅',text:'可不是普通的战斗人员！'});",
        "playground.drawDialog({name:'阿米娅',text:'整合运动这些家伙，怎么还和......'});",
        "playground.drawCharacter({name:'char_106_franka_1',name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'芙兰卡',text:'会不会是......'});",
        "playground.drawCharacter({name:'char_106_franka_1',name2:'char_107_liskam_1',focus:2});playground.drawDialog({name:'雷蛇',text:'和什么？'});",
        "playground.drawDialog({name:'雷蛇',text:'......'});",
        "playground.drawDialog({name:'雷蛇',text:'确实，这个整合运动的成员，难道说，是魔......'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'难道说......'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'阿米娅',text:'（雷蛇，我们正和近卫局共事，今天可能......不太适合讨论这样敏感的问题！）'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_107_liskam_1',focus:2});playground.drawDialog({name:'雷蛇',text:'（啊，明白。）'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'阿米娅',text:'（下次我会再和你谈谈我的猜想！）'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'......唔哦。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'大家，请做好准备！'});",
        "playground.drawDialog({name:'阿米娅',text:'可能......会是场十分艰巨的战斗！'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];