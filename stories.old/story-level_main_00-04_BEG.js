var story = [
    [
        "bg_cher_5",
        "char_130_doberm_ex",
        "char_014_riope",
        "char_1002_nsabr_2",
        "char_002_amiya_4",
        "char_002_amiya_1",
        "char_002_amiya_7"
    ],
    [
        "d_gen_soldiersrun",
        "m_dia_escape_loop",
        "m_dia_escape_intro",
        "m_dia_calamity_loop",
        "m_dia_calamity_intro",
        "d_sp_ballista"
    ],
    [
        "voice.playSound({key:'d_gen_soldiersrun',volume:0.5});background.showImage({screenadapt:'coverall', image:'bg_cher_5',fadetime:1,screenadapt:'coverall'});voice.playMusic({intro:'m_dia_escape_intro', key:'m_dia_escape_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'Ace！'});",
        "playground.drawCharacter({fadetime:0.5});playground.drawCharacter({name:'char_014_riope' ,fadetime:0.6});delay(0.65);playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'看来，你们都平安无事。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'这里还没到汇合点......怎么只有你一个人？'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'他们就是那支从核心区出逃的人！别放他们走！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'呿，穷追不舍！'});",
        "playground.drawDialog({name:'杜宾',text:'E2小队，应敌——'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'杜宾，不要恋战，优先后撤！'});",
        "playground.drawDialog({name:'Ace',text:`阿米娅，Dr.${nickname}！快！`});",
        "playground.drawCharacter({});voice.playSound({key:'d_gen_soldiersrun',volume:0.5});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'这里也不安全。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'是的，我们还要继续向下一个汇合点移动。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'你的小队呢？'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'藏到哪去了？把他们找出来！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'又来了吗！'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:`Dr.${nickname}，请下命令吧。`});",
        "playground.drawDialog({name:'Ace',text:'就像以前那样。'});",
        "playground.Decision({options:[['......？']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'啊，Ace......'});",
        "playground.drawDialog({name:'阿米娅',text:'其实有些，小小的变故。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士......意外失去了记忆。'});",
        "playground.drawCharacter({name:'char_002_amiya_4',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'......原来如此。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'抱歉，Ace......事情和以前相比，有不小的区别。'});",
        "playground.drawCharacter({name:'char_002_amiya_4',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'是吗。你没必要向我道歉。'});",
        "playground.drawDialog({name:'Ace',text:'博士的指挥能力，有没有因为失忆受到影响？'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_014_riope',focus:1});playground.drawDialog({name:'阿米娅',text:'......和以前一样。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士的决策依旧十分可靠，我保证。'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'那就好。我听从博士的指挥。'});",
        "playground.drawDialog({name:'Ace',text:'失去了的东西是可以找回来的。'});",
        "playground.drawDialog({name:'Ace',text:'眼下有更棘手的问题等着我们去解决。'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'他们在这儿！快，快攻击！！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'聊天还没结束？我已经开始战斗了！'});",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:`Dr.${nickname}，请下命令吧。`});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'放，把那些畜生放出来，让他们尝尝被撕咬的滋味！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'博士！Ace！敌人近在眼前了！'});",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'——'});",
        "playground.Decision({options:[['立刻出动！', '......好的。', '趁现在，破坏敌人的计划吧。']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'明白。'});",
        "playground.drawDialog({name:'Ace',text:'E3小队！支援杜宾！'});",
        "voice.playMusic({intro:'m_dia_calamity_intro', key:'m_dia_calamity_loop', volume:1, crossfade:1.5});playground.drawCharacter({fadetime:0});playground.clearDialog();voice.playSound({key:'d_sp_ballista',volume:0.7});blocker.blocker({a:1, r:100, g:100, b:100, fadetime:0.1,block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.3, block:true});background.cameraShake({duration:1.5, xstrength:7, ystrength:5, vibrato:30, randomness:90, fadeout:true, block:false});delay(1);playground.drawDialog({name:'整合运动成员',text:'埋伏？！！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'E3小队......一直隐藏着行踪，就是等着和我们配合，夹击敌人吗。'});",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'在通讯受到干扰的情况下，小队应该在汇合点附近行动，这样，即使是我或者侦查干员发生了意外......'});",
        "playground.drawDialog({name:'Ace',text:'整体的撤退计划，依然能够正常实施。这是我的判断。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'也就是说，Ace你把小队留在汇合点，一个人......'});",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'毕竟最重要的，是去除汇合点周围的威胁。'});",
        "playground.drawDialog({name:'Ace',text:'优先确认你们的状况是一种冒险。我不能带上整个小队一起。'});",
        "playground.drawDialog({name:'Ace',text:'小队存在的目的，本来就是为了让战术更有效，而不是固步自封，成为拖累。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'哈。接下来，用实战去解决了整合运动再说吧！'});",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'阿米娅，拜托你。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'知道了！我会辅佐博士，通过法术支援你们的！'});",
        "playground.drawCharacter({name:'char_014_riope' });playground.drawDialog({name:'Ace',text:'终于......'});",
        "playground.drawDialog({name:'Ace',text:`Dr.${nickname}，请你，指挥罗德岛。`});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];