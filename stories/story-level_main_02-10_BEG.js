var story = [
    [
        "bg_lungmen_r",
        "char_106_franka_1",
        "char_107_liskam_1",
        "char_1002_nsabr_2",
        "char_002_amiya_1",
        "char_1500_skulsr",
        "char_002_amiya_7"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro",
        "e_skill_skulsrsword",
        "e_imp_sword_h",
        "e_skill_skulsrshot"
    ],
    [
        "background.showImage({image:'bg_lungmen_r', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'雷蛇！防线还撑得住吗？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'我这边，没有问题！'});",
        "playground.drawDialog({name:'雷蛇',text:'芙兰卡，注意敌人侧翼进攻！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'真是没完没了......！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'这样的防御你们就别想打破了。'});",
        "playground.drawDialog({name:'整合运动成员',text:'看我就这样把你撞......'});",
        "voice.playSound({key:'sound_beta_2/enemy/e_skill/e_skill_skulsrsword', volume:0.6});background.cameraShake({duration:1, xstrength:6, ystrength:10, vibrato:50, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'整合运动成员',text:'唔？！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'呃，呃呃呃啊！'});",
        "playground.drawDialog({name:'整合运动成员',text:'这是什么？！'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'是铝热剑哦。'});",
        "playground.drawDialog({name:'芙兰卡',text:'切开算打破吗？'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2,block:true});delay(0.5);blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'烦人......'});",
        "playground.drawDialog({name:'芙兰卡',text:'医疗组！这里有伤员！'});",
        "playground.drawDialog({name:'芙兰卡',text:'转移他们的时候，动作轻点！'});",
        "playground.drawCharacter({fadetime:0});playground.drawDialog({name:'医疗干员',text:'这我还是知道的！'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'阿米娅！'});",
        "playground.drawDialog({name:'芙兰卡',text:'你的情况呢？'});",
        "playground.drawCharacter({ name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'我们这里好像出了些小情况。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'芙兰卡......'});",
        "playground.drawDialog({name:'阿米娅',text:'敌方的首领......就出现在我和雷蛇面前！'});",
        "playground.drawCharacter({name:'char_1500_skulsr'});playground.drawDialog({name:'碎骨',text:'————'});",
        "voice.playSound({key:'e_imp_sword_h', volume:0.7});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});voice.playSound({key:'e_imp_sword_h', volume:0.5});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:1, xstrength:6, ystrength:10, vibrato:50, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_1500_skulsr'});playground.drawDialog({name:'碎骨',text:'你们还想藏到哪里去？'});",
        "playground.drawDialog({name:'碎骨',text:'逃不掉的，罗德岛。'});",
        "playground.drawDialog({name:'碎骨',text:'我会粉碎你们——'});",
        "playground.drawDialog({name:'碎骨',text:'——彻彻底底的粉碎你们。'});",
        "playground.drawDialog({name:'碎骨',text:'你们这些......感染者的叛徒！'});",
        "voice.playSound({key:'e_skill_skulsrshot', volume:0.5});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:50, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'哦~这家伙终于亲自登场了。'});",
        "playground.drawDialog({name:'芙兰卡',text:'虽然听起来还是蛮寒酸的......呢。'});",
        "playground.drawCharacter({ name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'阿米娅，我们好像——'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'啊，死胡同！'});",
        "playground.drawDialog({name:'芙兰卡',text:'我好像跑过头了？！'});",
        "playground.drawCharacter({ name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'芙兰卡那里也是.....'});",
        "playground.drawDialog({name:'雷蛇',text:'我们被整合运动逼入死路了。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({ name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'只能硬上了。'});",
        "playground.drawDialog({name:'雷蛇',text:'我觉得，我们完全有击溃敌人的实力。'});",
        "playground.drawDialog({name:'雷蛇',text:'稍稍用力一些也......'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'这你就不懂了啊雷蛇。'});",
        "playground.drawDialog({name:'芙兰卡',text:'无论我们展现出多少实力，可都不能让近卫局感到有威胁哦？'});",
        "playground.drawCharacter({ name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'总不能看着自己陷入危机吧！'});",
        "playground.drawDialog({name:'雷蛇',text:'重装小组，守住阵地！'});",
        "playground.drawCharacter({name:'char_1500_skulsr'});playground.drawDialog({name:'碎骨',text:'罗德岛的领导人......吗。'});",
        "playground.drawDialog({name:'碎骨',text:'身为感染者，却帮助龙门杀害感染者！'});",
        "playground.drawDialog({name:'碎骨',text:'多少同胞的性命，你们都得血债血偿！'});",
        "voice.playSound({key:'e_skill_skulsrshot', volume:0.5});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:50, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'碎骨',text:'给我进攻！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'————'});",
        "playground.drawDialog({name:'阿米娅',text:'整合运动————'});",
        "playground.drawDialog({name:'阿米娅',text:'先结仇的、先伤害别人的、先使用暴力的——'});",
        "playground.drawDialog({name:'阿米娅',text:'可是切尔诺伯格的你们！！'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];