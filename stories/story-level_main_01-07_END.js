var story = [
    [
        "bg_cher_7",
        "char_130_doberm_ex",
        "char_148_nearl_3",
        "char_002_amiya_5",
        "char_014_riope",
        "char_013_riop",
        "char_1002_nsabr_2",
        "char_016_medic",
        "char_002_amiya_7",
        "char_011_talula_2",
        "char_011_talula_1"
    ],
    [
        "m_bat_qiecheng_loop",
        "m_bat_qiecheng_intro",
        "d_gen_explo_n",
        "d_gen_soldiersrun",
        "m_dia_calamity_loop",
        "m_dia_calamity_intro",
        "d_gen_walk_n",
        "d_gen_thunders_amb"
    ],
    [
        "voice.playMusic({intro:'m_bat_qiecheng_intro', key:'m_bat_qiecheng_loop', volume:0.8, crossfade:1.5, delay:0.5});blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({image:'bg_cher_7', fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5,block:true});delay(0.3);voice.playSound({key:'d_gen_explo_n'});background.cameraShake({duration:1, xstrength:3, ystrength:5, vibrato:30, randomness:90, fadeout:false});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'哈，哈，哈.....'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'成功了......！'});",
        "playground.drawDialog({name:'临光',text:'我们不仅击退了整合运动......'});",
        "playground.drawDialog({name:'临光',text:'灾势也在以肉眼可见的程度衰弱！'});",
        "playground.drawDialog({name:'临光',text:'情况太糟糕了......各位还是要多加小心！'});",
        "playground.drawCharacter({name:'char_002_amiya_5'});playground.drawDialog({name:'阿米娅',text:'天灾......'});",
        "playground.drawDialog({name:'阿米娅',text:'原本的街道都被倒塌的废墟掩盖，被摧毁的建筑，形成了障碍物......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'源石，已经开始疯长了吗......'});",
        "playground.drawDialog({name:'杜宾',text:'明明到了最后关头，所有事情却都在阻挠我们！'});",
        "playground.drawDialog({name:'杜宾',text:'如果我们能——'});",
        "playground.drawDialog({name:'杜宾',text:'......能......'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'——'});",
        "playground.drawDialog({name:'Ace',text:'来了。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'char_013_riop',focus:2});playground.drawDialog({name:'近卫干员',text:'什么来了？'});",
        "playground.drawDialog({name:'近卫干员',text:'整合运动？他们追上来了？！'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();voice.playSound({key:'d_gen_soldiersrun',volume:1});playground.drawCharacter({name:'char_1002_nsabr_2',fadetime:1});delay(2);playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'啊......'});",
        "playground.drawDialog({name:'医疗干员',text:'那么多的......整合运动......'});",
        "playground.drawCharacter({fadetime:0});voice.playSound({key:'d_gen_soldiersrun',volume:1});playground.clearDialog();delay(2);playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'他们......不是追上来了。'});",
        "playground.drawDialog({name:'杜宾',text:'他们是......'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'——从各个地方涌了出来。'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();voice.playSound({key:'d_gen_soldiersrun',volume:1});playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2',fadetime:1});delay(2);playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'广场，坡道，建筑......四处的废墟'});",
        "playground.drawDialog({name:'杜宾',text:'这个数量，呵......'});",
        "playground.drawDialog({name:'杜宾',text:'难怪除了那些真的要被砸成泥浆的人以外，他们一点都不惧怕天灾。'});",
        "playground.drawDialog({name:'杜宾',text:'哪怕天灾，说多些.......'});",
        "playground.drawDialog({name:'杜宾',text:'已经消灭了他们一半人——'});",
        "playground.drawDialog({name:'杜宾',text:'剩下的也够把我们在这里淹死十几次了。'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'——'});",
        "playground.drawDialog({name:'临光',text:'别停下脚步！继续顺着撤退路线行动！'});",
        "playground.drawDialog({name:'临光',text:'在开阔地带停下等于找死！至少到达广场出口处之后再整顿队形！'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:2});playground.drawDialog({name:'阿米娅',text:'临光......'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:1});playground.drawDialog({name:'临光',text:'必须战斗。破开突围口以后，趁对方队伍混乱立刻脱离。'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:2});playground.drawDialog({name:'阿米娅',text:'能行吗？'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:1});playground.drawDialog({name:'临光',text:'希望渺茫，但我们没有别的办法。只是......'});",
        "playground.drawDialog({name:'临光',text:'即使是数十倍于自己数量的敌人，如果只是些暴徒，罗德岛依然有机会！'});",
        "playground.drawDialog({name:'临光',text:'无需惊慌！备战姿态！防御阵形！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......啧。'});",
        "playground.drawDialog({name:'杜宾',text:'这样的数量，如果要拿下切尔诺伯格，也许......真的有可能。'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'太多了。'});",
        "playground.drawDialog({name:'临光',text:'实在......太多了。'});",
        "playground.drawDialog({name:'临光',text:'整合运动究竟......是从哪里纠集起这么多感染者的？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'这种包围网......'});",
        "playground.drawDialog({name:'杜宾',text:'整合运动是真的，很看得起我们啊。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'大，大群整合运动敌人......包围了广场！'});",
        "playground.drawDialog({name:'近卫干员',text:'敌人停止了行动！'});",
        "playground.drawDialog({name:'近卫干员',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'啊......'});",
        "voice.playMusic({intro:'m_dia_calamity_intro', key:'m_dia_calamity_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawCharacter({fadetime:0});voice.playSound({key:'d_gen_walk_n',volume:1});playground.clearDialog();playground.drawCharacter({fadetime:0});blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({image:'bg_cher_7', fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, block:true});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_011_talula_2',fadetime:1,block:true});delay(2);playground.drawCharacter({fadetime:1});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'有敌人一名，正在靠近罗德岛的阵线！'});",
        "playground.drawDialog({name:'近卫干员',text:'为什么，那个人会一个人，走向我们......'});",
        "playground.drawDialog({name:'近卫干员',text:'难道敌人派出了使者？不可能......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});blocker.blocker({a:1, r:0, g:0, b:0, block:true});blocker.blocker({a:0, r:0, g:0, b:0, block:true});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'她......'});",
        "playground.drawDialog({name:'阿米娅',text:'她......她是资料上，整合运动的......'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'——'});",
        "playground.drawDialog({name:'临光',text:'她身上，有某种气味。'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'......临光......'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'临光',text:'我不清楚，但是......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({image:'bg_cher_7', fadetime:0});playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, block:true});voice.playSound({key:'d_gen_walk_n',volume:1});playground.drawCharacter({name:'char_011_talula_2',fadetime:2});background.showImage({image:'bg_cher_7',x:0, y:0, xscale:1.1, yscale:1.1, fadetime:1});background.showImage({xfrom:0, yfrom:0, xto:0, yto:0, xscalefrom:1.1, yscalefrom:1.1, xscaleto:1, yscaleto:1, duration:4, block:true});blocker.blocker({a:1, r:0, g:0, b:0, block:true});playground.drawCharacter({});background.showImage({image:'bg_cher_7', fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, block:true});playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'那是......钢铁和硫磺的味道。'});",
        "playground.drawDialog({name:'临光',text:'有什么东西在焚烧。'});",
        "playground.drawDialog({name:'临光',text:'如果是火焰的话......'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'罗德岛的各位干员......最高警戒状态。'});",
        "playground.drawDialog({name:'阿米娅',text:'......她就是......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'整合运动的暴君......'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'......塔露拉。'});",
        "voice.playSound({key:'d_gen_thunders_amb'});background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:90, block:false});voice.stopMusic({fadetime:2});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, block:true, fadetime:1});background.showImage({});blocker.blocker({a:1, initr:2, r:1, g:1, b:1, block:true, fadetime:0.3});blocker.blocker({a:0, fadetime:0.3, block:false});playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'......'});",
        "playground.drawDialog({name:'塔露拉',text:'............'});",
        "blocker.blocker({a:1, initr:2, r:0, g:0, b:0, block:true, fadetime:1});playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'大概......是能烧尽整片大地的火焰吧。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];