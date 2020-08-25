var story = [
    [
        "char_002_amiya_4",
        "bg_wild_a",
        "char_136_hsguma",
        "char_002_amiya_5",
        "char_002_amiya_6",
        "char_002_amiya_1",
        "char_1002_nsabr_2",
        "char_002_amiya_7",
        "char_1504_cqbw"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro",
        "p_imp_blunt_h",
        "p_imp_grenade_n"
    ],
    [
        "voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:`${nickname}博士......`});",
        "playground.drawDialog({name:'阿米娅',text:'我......我不是......我......'});",
        "background.showImage({image:'bg_wild_a', width:1, height:1, fadetime:1});delay(1);playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'雾散了。'});",
        "playground.drawDialog({name:'星熊',text:'近卫局发来通讯，他们发现了更多整合运动的踪迹。'});",
        "playground.drawDialog({name:'星熊',text:'说是在跟踪一个敌人，女性，白发——'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_136_hsguma', focus:2});playground.drawDialog({name:'星熊',text:'阿米娅，老陈催促我，让你......'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_002_amiya_4'});delay(1);playground.drawCharacter({name:'char_002_amiya_4', name2:'char_136_hsguma', focus:2});playground.drawDialog({name:'星熊',text:'......'});",
        "playground.drawDialog({name:'星熊',text:'——你脸色不太好。'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_136_hsguma', focus:-1});playground.Decision({options:[['交给我吧']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'那......'});",
        "playground.drawDialog({name:'星熊',text:`那就交给你了，${nickname}博士。`});",
        "playground.drawDialog({name:'星熊',text:'最好能在五分钟内出发。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0.6});delay(0.6);playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:`——${nickname}博士——`});",
        "playground.drawCharacter({name:'char_002_amiya_5', focus:-1});playground.Decision({options:[['你是在害怕吗？', '......难道说，你不喜欢这种力量？', '阿米娅，没有必要后悔。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'啊......？我......'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'博士......我没有在害怕什么......'});",
        "playground.drawDialog({name:'阿米娅',text:'当然，我害怕，害怕再一次失去......所以才......'});",
        "playground.drawDialog({name:'阿米娅',text:'不，我只是不想的......'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'我......我不知道......'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'我不知道该不该这么说......但我......'});",
        "playground.drawDialog({name:'阿米娅',text:'它不应该光是......伤害别人。'});",
        "playground.drawDialog({name:'阿米娅',text:'我不想让博士看到我，这么近的看到我......'});",
        "playground.drawDialog({name:'阿米娅',text:'......夺走生命。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'我没有后悔。'});",
        "playground.drawDialog({name:'阿米娅',text:'不，我是说......'});",
        "playground.drawDialog({name:'阿米娅',text:'我就是会为了博士而使用力量，无论他背负着什么，我不后悔杀死他。'});",
        "playground.drawDialog({name:'阿米娅',text:'但是，当然......原本，应该会有更好的办法吧。'});",
        "playground.drawDialog({name:'阿米娅',text:'因为没能找到那个办法，所以他死去了。'});",
        "playground.drawDialog({name:'阿米娅',text:'这一点......我很后悔。'});",
        "playground.drawDialog({name:'阿米娅',text:'我不希望......'});",
        "playground.drawDialog({name:'阿米娅',text:'不希望{@Nickname}你看到这样的我。'});",
        "playground.drawDialog({name:'阿米娅',text:'明明说着让这片大地的感染者从痛苦中脱身......'});",
        "playground.drawDialog({name:'阿米娅',text:'关键时刻，却还是要一次又一次的，说服自己，去剥夺感染者的生命。'});",
        "playground.drawDialog({name:'阿米娅',text:'我真是，太弱了。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_4', focus:-1});playground.Decision({options:[['阿米娅，至少你保护了我。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'——————'});",
        "playground.drawDialog({name:'阿米娅',text:'......这是我应该做的。'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'我明白了。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'我从来都不认为，有什么事情真的命中注定。'});",
        "playground.drawDialog({name:'阿米娅',text:'只是，无论如何......无论我会走到哪一步......'});",
        "playground.drawDialog({name:'阿米娅',text:'我都会保护你的，博士。'});",
        "playground.drawDialog({name:'阿米娅',text:'我保证。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2',focus:1});playground.drawDialog({name:'整合运动成员',text:'不行！'});",
        "playground.drawDialog({name:'整合运动成员',text:'你们先走！'});",
        "playground.drawDialog({name:'整合运动成员',text:'我得去......得去把碎骨救回来！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2',focus:2});playground.drawDialog({name:'整合运动成员',text:'你疯了？'});",
        "playground.drawDialog({name:'整合运动成员',text:'你这是自投罗网......要去，就大家一起去！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2',focus:1});playground.drawDialog({name:'整合运动成员',text:'好！'});",
        "playground.drawDialog({name:'整合运动成员',text:'我可不能，不能让他在这荒野中......'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2',focus:2});playground.drawDialog({name:'整合运动成员',text:'那就上吧！'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'怎么会——'});",
        "playground.drawDialog({name:'星熊',text:'整合运动......折返了？'});",
        "playground.drawDialog({name:'星熊',text:'他们要做什么——？！'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_002_amiya_7', focus:2});playground.drawDialog({name:'阿米娅',text:'星熊警官！快回撤！'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'近卫局，别懈怠！'});",
        "playground.drawDialog({name:'星熊',text:'准备好防御对方的攻击！'});",
        "voice.playSound({key:'p_imp_blunt_h', volume:0.7});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'掩护！掩护我！'});",
        "playground.drawDialog({name:'整合运动成员',text:'那个女人......'});",
        "playground.drawDialog({name:'整合运动成员',text:'不行，那个女人的盾，我们是越不过去的！'});",
        "playground.drawDialog({name:'整合运动成员',text:'快！迂回！趁他们还没反应过来......'});",
        "playground.drawDialog({name:'整合运动成员',text:'先把碎骨，把碎骨——'});",
        "playground.drawDialog({name:'整合运动成员',text:'把他抢回来！！'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'罗德岛！他们在转移目标，你们要注意！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'不好！'});",
        "playground.drawDialog({name:'阿米娅',text:'星熊警官！小心你的右边！'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'——嗯——？'});",
        "voice.playSound({key:'p_imp_grenade_n', volume:0.7});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_136_hsguma', name2:'char_1504_cqbw', focus:2});playground.drawDialog({name:'W',text:'呼呼，用盾挡开了？有些意思——'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_1504_cqbw', focus:1});playground.drawDialog({name:'星熊',text:'爆炸？整合运动的偷袭？！'});",
        "playground.drawCharacter({name:'char_136_hsguma', name2:'char_1504_cqbw', focus:2});playground.drawDialog({name:'W',text:'当然不止是偷袭哦~'});",
        "playground.drawDialog({name:'W',text:'就请你在这里乖乖呆着，别向后去了哦？'});",
        "background.cameraShake({duration:1, xstrength:14, ystrength:20, vibrato:30, randomness:90, fadeout:false});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:true});voice.playSound({key:'p_imp_grenade_n', volume:0.7});blocker.blocker({a:0, fadetime:0.3, block:false});playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'啧——哪来的混蛋！'});",
        "playground.drawDialog({name:'星熊',text:'又是爆炸！'});",
        "playground.drawDialog({name:'星熊',text:'阿米娅！我遭到整合运动远程火力的压制！'});",
        "playground.drawDialog({name:'星熊',text:'其余的整合运动，正朝你们的方向快速移动！'});",
        "playground.drawCharacter({name:'char_1504_cqbw'});playground.drawDialog({name:'W',text:'唔，这面盾还挺厚实的。'});",
        "playground.drawDialog({name:'W',text:'我似乎有点自找麻烦的意思呢......'});",
        "playground.drawDialog({name:'W',text:'算了，就当我帮整合运动一点小忙吧。'});",
        "playground.drawDialog({name:'W',text:'要让我看到有趣的事情哦。可别让我太失望了~'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'是切城的那个叫W的人！'});",
        "playground.drawDialog({name:'阿米娅',text:'难道说，陈长官他们被她甩掉了吗？！'});",
        "playground.drawDialog({name:'阿米娅',text:'小心敌人的突袭！迅速援护星熊警官！'});",
        "playground.drawDialog({name:'阿米娅',text:'还有很多敌人埋伏在周围！'});",
        "playground.drawDialog({name:'阿米娅',text:'只有暴露他们的踪迹，我们才能取得优势！'});",
        "playground.drawDialog({name:'阿米娅',text:'博士！请指挥各小队应对敌人的袭击！'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];