var story = [
    [
        "bg_sportsbar",
        "avg_npc_101",
        "avg_npc_120_2",
        "avg_npc_101_2",
        "avg_npc_120",
        "avg_npc_064_weapon_6",
        "avg_npc_061_2",
        "avg_npc_107",
        "avg_npc_064_weapon_2",
        "avg_npc_061_3",
        "avg_npc_064_weapon_5",
        "avg_npc_061_5",
        "avg_npc_064_weapon_1",
        "avg_npc_107_2",
        "avg_npc_120_3",
        "avg_npc_061_7",
        "avg_npc_107_3",
        "avg_npc_109_2",
        "avg_npc_109",
        "avg_npc_109_4",
        "avg_npc_064_weapon_4",
        "avg_npc_109_3",
        "bg_black",
        "avg_npc_106",
        "bg_arena_2",
        "avg_npc_121",
        "avg_npc_121_3",
        "avg_npc_104",
        "ac13_7"
    ],
    [
        "m_avg_relax_loop",
        "m_avg_relax_intro",
        "d_gen_livecrowd",
        "d_gen_fightgeneral",
        "d_gen_dooropenquite",
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "d_gen_rungeneral",
        "d_gen_doorclosequite",
        "m_avg_batmeeting_loop",
        "m_avg_batmeeting_intro"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_sportsbar',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playMusic({intro:'m_avg_relax_intro', key:'m_avg_relax_loop', volume:0.4});voice.playSound({key:'d_gen_livecrowd', volume:0.2, loop:false, channel:'people'});playground.drawDialog({name:'众人',text:'干杯——！'});",
        "delay(1);playground.drawCharacter({name:'avg_npc_101'});playground.drawDialog({name:'老工匠',text:'恭喜丫头获胜，真是精彩的表现，比现在的老弗强多了！'});",
        "playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'那是比我强多了——但轮不到你说这个话！'});",
        "playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_101_2', focus:2});playground.drawDialog({name:'老工匠',text:'啊啊！？'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_fightgeneral'});playground.drawCharacter({name:'avg_npc_101'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral'});playground.drawCharacter({name:'avg_npc_120'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});delay(1);playground.drawCharacter({name:'avg_npc_064_weapon_6'});playground.drawDialog({name:'佐菲娅',text:'怎么又动起手来了......喂，别吵到旁边的客人。'});",
        "playground.drawCharacter({name:'avg_npc_061_2'});playground.drawDialog({name:'玛莉娅',text:'啊哈哈......都开始扳手腕了......'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:1});playground.drawDialog({name:'光头马丁',text:'打得不错，孩子，这杯敬你。'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:2});playground.drawDialog({name:'玛莉娅',text:'啊.....谢谢！'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:1});playground.drawDialog({name:'光头马丁',text:'在那种场合还能找出瑟奇亚克的弱点，而且一击制胜，你做得很好。'});",
        "playground.drawDialog({name:'光头马丁',text:'战斗持续了接近二十分钟，一直处于劣势的玛莉娅能在关键的一击中找出反败为胜的方法——'});",
        "playground.drawDialog({name:'光头马丁',text:'——很了不起。'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:2});playground.drawDialog({name:'玛莉娅',text:'没、没有的事啦......如果不是他穿着那种缺陷型号的护甲，可能还真的无从下手......'});",
        "playground.drawDialog({name:'玛莉娅',text:'Jack2型号是我从来没有听说过的产品......冷却系统会导致装甲极短的瘫痪，那根本就是试验品。'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:1});playground.drawDialog({name:'光头马丁',text:'——但瑟奇亚克是个经验老道的竞赛骑士，这种事情并不罕见，他把宣传品的缺点掩饰得很好。'});",
        "playground.drawDialog({name:'光头马丁',text:'也不用太谦虚了，虽然很粗暴，但骑士竞技向来都是结果论的。'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:2});playground.drawDialog({name:'玛莉娅',text:'好、好的......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_2', focus:2});playground.drawDialog({name:'佐菲娅',text:'......玛莉娅！'});",
        "playground.drawCharacter({name:'avg_npc_061_3', name2:'avg_npc_064_weapon_2', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'玛莉娅',text:'在！'});",
        "playground.drawCharacter({name:'avg_npc_061_3', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'不要高兴得太早！'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'是！'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'你要刻意地去控制心态——不是保持平常心就好了的，你要去主动反省，主动平复心情......'});",
        "playground.drawDialog({name:'佐菲娅',text:'......自负自满这种东西啊，你越是觉得自己没有，越危险，胜利带来的影响是你自己都意识不到的......'});",
        "playground.drawDialog({name:'佐菲娅',text:'而这份大意......会......麻痹你！'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'明、明白！'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});delay(0.6);playground.drawDialog({name:'玛莉娅',text:'......姑母？你喝醉了？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_2', focus:2});playground.drawDialog({name:'佐菲娅',text:'我没有！别叫我姑母！'});",
        "playground.clearDialog();playground.drawCharacter({});delay(1);playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_101_2', focus:2});playground.drawDialog({name:'老工匠',text:'——我赢了！！'});",
        "playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_101_2', focus:1});playground.drawDialog({name:'老骑士',text:'该死，科瓦尔，你为什么比半年前还结实了！？'});",
        "playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'修水管修的，不服啊？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'嘁......'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_2', focus:2});playground.drawDialog({name:'玛莉娅',text:'科瓦尔叔叔，弗格瓦尔德叔叔，佐菲娅姐姐是不是？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_1', focus:2});playground.drawDialog({name:'佐菲娅',text:'玛莉娅......别喊姑母......'});",
        "playground.drawCharacter({name:'avg_npc_101', name2:'avg_npc_064_weapon_1', focus:1});playground.drawDialog({name:'老工匠',text:'哦.....真的喝醉了，真难得。'});",
        "playground.drawCharacter({name:'avg_npc_101', name2:'avg_npc_064_weapon_2', focus:2});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'佐菲娅',text:'我......我才没！'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'得了吧！玛莉娅，把你姑母抬到后面的沙发上睡会。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'玛莉娅',text:'欸......好，好的，姑母......麻烦你抬一下脚......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_1', focus:2});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'佐菲娅',text:'别喊姑母！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'“鞭刃”佐菲娅在这里还有一个绰号叫做“千杯”佐菲娅来着......虽然比不过我就是了。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'是是是，“万两”弗伦丁，和炎国人喝过一顿以后你就这么嘚瑟？和年轻姑娘比喝酒，老脸不红？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107', focus:2});playground.drawDialog({name:'光头马丁',text:'她的压力很大......第一次以教练的身份盯着赛场，听着那个大嘴莫布絮絮叨叨。'});",
        "playground.drawDialog({name:'光头马丁',text:'真让人怀念......唉，玛莉娅获胜之后我总是这么感叹，我是不是也老了呢？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107', focus:1});playground.drawDialog({name:'老骑士',text:'想什么呢？我们不是平辈吗？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107', focus:2});playground.drawDialog({name:'光头马丁',text:'那看来是真的老了。'});",
        "playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_107', focus:1});playground.drawDialog({name:'老骑士',text:'喂。'});",
        "playground.drawCharacter({name:'avg_npc_120_2', name2:'avg_npc_107', focus:2});playground.drawDialog({name:'光头马丁',text:'......是啊，离我第一次看着佐菲娅上阵，过去多久了？十二年？十五年？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107', focus:1});playground.drawDialog({name:'老骑士',text:'你老了我是没意见，日子都记不清了，但佐菲娅可没那么老啊......'});",
        "playground.drawDialog({name:'老骑士',text:'九年前的事情吧。血骑士，耀骑士，黑骑士......三届之前了。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107_2', focus:2});playground.drawDialog({name:'光头马丁',text:'黑骑士......那个卡普里尼啊，感觉已经是上个时代的名字了呢。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107_2', focus:1});playground.drawDialog({name:'老骑士',text:'毕竟再往前三届也全都是她。媒体们也经常把她当做“时代的标杆”。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_2', focus:2});playground.drawDialog({name:'玛莉娅',text:'啊，是那个前所未有的三连冠？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'是啊，一般的骑士封号可不会用那么宽泛的字眼，不然肯定会重复的，叫起来多麻烦。'});",
        "playground.drawDialog({name:'老工匠',text:'但那个莱塔尼亚女人，的确值得夺走“黑”这个字。她根本就是个怪物。'});",
        "playground.drawDialog({name:'老工匠',text:'听说现在跟着某家境外财阀混了，啧啧啧......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'那样的根本不算骑士......根本不算。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_5', focus:2});playground.drawDialog({name:'玛莉娅',text:'是、是这样......'});",
        "playground.drawCharacter({name:'avg_npc_120_3', name2:'avg_npc_061_5', focus:1});playground.drawDialog({name:'老骑士',text:'......玛莉娅，佐菲娅她和你说过她的竞赛生涯吗？'});",
        "playground.drawCharacter({name:'avg_npc_120_3', name2:'avg_npc_061_5', focus:2});playground.drawDialog({name:'玛莉娅',text:'不，虽然特锦赛每年都有录像和记录，但我从没听她自己说起......'});",
        "playground.drawCharacter({name:'avg_npc_120_3', name2:'avg_npc_061_7', focus:2});playground.drawDialog({name:'玛莉娅',text:'我记得，我记得那年佐菲娅姑母在十六进八的比赛中......'});",
        "playground.drawCharacter({name:'avg_npc_120_3', name2:'avg_npc_061_7', focus:1});playground.drawDialog({name:'老骑士',text:'受了重伤，对。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_7', focus:1});playground.drawDialog({name:'老骑士',text:'对方是那个“裂隙”骑士，哈，说起来他今年参赛了吗？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107_3', focus:2});playground.drawDialog({name:'光头马丁',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_101_2', focus:2});playground.drawDialog({name:'老工匠',text:'......欸！怎么了怎么了，好好的庆功宴怎么开始回忆往事了？'});",
        "playground.drawDialog({name:'老工匠',text:'反正都不是什么好事，就别回忆了吧！'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'玛莉娅',text:'我......我其实还挺想知道的......'});",
        "playground.drawDialog({name:'玛莉娅',text:'虽然侥幸赢下来了，但是佐菲娅姐姐......好像不太高兴......刚才也没怎么说话，就一个劲喝酒......'});",
        "playground.drawDialog({name:'玛莉娅',text:'她一定为我想了很多，我不想辜负她......我想知道她的过去，我想知道她是怎么想的。'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'哦......这方面你倒是挺像你姐姐的。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'玛莉娅',text:'我？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_2', focus:1});playground.drawDialog({name:'老骑士',text:'是啊，总能敏锐地察觉到那些不好的事情，然后想把事情变好。'});",
        "playground.drawDialog({name:'老骑士',text:'最后的那一剑，是佐菲娅教你的吗？'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_2', focus:2});playground.drawDialog({name:'玛莉娅',text:'不、不是，其实是——'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:1});playground.drawDialog({name:'光头马丁',text:'是模仿玛嘉烈的？'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_7', focus:2});playground.drawDialog({name:'玛莉娅',text:'欸？啊，嗯......很明显吗？'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_2', focus:1});playground.drawDialog({name:'光头马丁',text:'哈哈哈，当然，你们姐妹俩简直一模一样，我是不会忘记那一天的。'});",
        "playground.drawDialog({name:'光头马丁',text:'最年轻的冠军，耀骑士的奇迹。她靠着一己之力做到了那一步。'});",
        "playground.drawDialog({name:'光头马丁',text:'虽然不是表露得非常明显，但是佐菲娅也是非常仰慕玛嘉烈的哦。'});",
        "playground.drawDialog({name:'光头马丁',text:'本来只是陪侍的她，只为了给自己争一口气，来找我们这些老家伙锻炼......'});",
        "playground.drawDialog({name:'光头马丁',text:'她参战，她获胜，她入围特锦赛......但是从头到尾，她都没有接受任何一家公司的赞助，也没有向别人开口求助。'});",
        "playground.drawDialog({name:'光头马丁',text:'呵呵......即使我去拜托了过去认识的一些小企业，她也都委婉拒绝了。'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'......都是些垃圾，拒绝了也好。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'你闭嘴，所以佐菲娅才会被“裂隙”那种人给打败。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_061_5', focus:2});playground.drawDialog({name:'玛莉娅',text:'姑母她......？'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_061_5', focus:1});playground.drawDialog({name:'光头马丁',text:'玛莉娅，你还不清楚竞技骑士究竟需要多少资源......武器和装备的差距是不可弥补的。'});",
        "playground.drawDialog({name:'光头马丁',text:'瑟奇亚克输给你，也许是因为他被迫穿上了那套有着设计缺陷的护甲——'});",
        "playground.drawDialog({name:'光头马丁',text:'那假如，他身上的是一套完全没有破绽，甚至性能更加卓越的骑士护甲，你该怎么办？你赢的了吗？'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_061_7', focus:2});playground.drawDialog({name:'玛莉娅',text:'我......'});",
        "playground.drawDialog({name:'玛莉娅',text:'......应该赢不了吧......'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_061_7', focus:1});playground.drawDialog({name:'光头马丁',text:'佐菲娅就是面对这样的对手，完美的盔甲、武器、后勤应援，差距极大。'});",
        "playground.drawDialog({name:'光头马丁',text:'自己攒的装备，自己磨练的技巧，自己打拼的人脉，她这么孤立无援地拼着命。'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_101_2', focus:2});playground.drawDialog({name:'老工匠',text:'......唉。'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_101_2', focus:1});playground.drawDialog({name:'光头马丁',text:'我们什么都没为她做到，眼睁睁看着她负伤，退赛。'});",
        "playground.drawDialog({name:'光头马丁',text:'我们能做到什么？'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_061_7', focus:2});playground.drawDialog({name:'玛莉娅',text:'马丁叔......'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_101_2', focus:2});playground.drawDialog({name:'老工匠',text:'至少你能帮佐菲娅培养这个丫头，马丁。'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_101_2', focus:1});playground.drawDialog({name:'光头马丁',text:'哈哈哈，玛莉娅会接受一个丢了胳膊，还害得佐菲娅受伤的老马丁去教她？'});",
        "playground.drawCharacter({name:'avg_npc_107', name2:'avg_npc_061_5', focus:2});playground.drawDialog({name:'玛莉娅',text:'不——没有的事！我一直都很尊敬各位！真的！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_dooropenquite', volume:0.6});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.4});playground.drawCharacter({name:'avg_npc_107'});playground.drawDialog({name:'光头马丁',text:'唔？居然除了你们还有别的客人，真稀奇......'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_107', focus:1});playground.drawDialog({name:'老骑士',text:'你这样会倒闭的吧。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_109_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'企业员工',text:'......呃。'});",
        "playground.drawDialog({name:'企业员工',text:'请问......您是骑士玛莉娅·临光阁下吗？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'啊......没错。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:2});playground.drawDialog({name:'企业员工',text:'幸会，玛莉娅阁下，请问您现在有时间吗？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'没关系，请问有什么可以帮到您的吗？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:2});playground.drawDialog({name:'企业员工',text:'您好，我是斯沃玛公司的代表.......这是我的名片......请骑士阁下过目。'});",
        "playground.drawDialog({name:'企业员工',text:'很抱歉，之前我司代表送往贵宅邸的邀请函全都没有回音，迫于无奈，这才唐突造访。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'啊......宅邸啊......没关系的，也许是......邮箱出了点问题，哈哈......'});",
        "playground.drawDialog({name:'玛莉娅',text:'那么，找我的原因是？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:2});playground.drawDialog({name:'企业员工',text:'是这样，我司参与赞助的“群月”骑士团团长非常欣赏阁下先前与瑟奇亚克先生一战时的表现。'});",
        "playground.drawDialog({name:'企业员工',text:'在得知阁下尚无所属后，立刻联系商务部门，希望能与阁下洽谈入团事宜......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'......入团？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:2});playground.drawDialog({name:'企业员工',text:'是的......事实上，斯沃玛公司的首席执行官也迫切希望玛莉娅·临光阁下能够加盟......'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'（科瓦尔，斯沃玛公司是那个稻草商标的食品公司吗？）'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'（你去看看你刚才吃的苏打饼干反面印着的是啥，老糊涂。）'});",
        "playground.drawDialog({name:'老工匠',text:'（“群月”也是百强骑士团之一......不过根本不是靠竞赛，是一群靠广告和赞助过活的无聊的商人......）'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_4', focus:2});playground.drawDialog({name:'企业员工',text:'当然不止如此，玛尔特卡西米尔总部的宣传部门也允诺，如果玛莉娅·临光阁下点头同意，会与斯沃玛共同赞助骑士团的发展......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_4', focus:1});playground.drawDialog({name:'玛莉娅',text:'玛、玛尔特，是那个玛尔特吗？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:2});playground.drawDialog({name:'企业员工',text:'没错，如果阁下还有什么疑问，可以随时咨询我......'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_064_weapon_5',fadetime:1,block:true});delay(1);playground.drawDialog({name:'佐菲娅',text:'唔......我居然......我睡了多久？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'啊，佐菲娅姐姐，你醒了。'});",
        "playground.drawDialog({name:'玛莉娅',text:'也没多久啦，才十分钟而已......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'这可不行，特锦赛之前的积分还需要规划，必须要在这个月获得——唔？'});",
        "playground.drawCharacter({name:'avg_npc_064_weapon_6'});playground.drawDialog({name:'佐菲娅',text:'你是......'});",
        "playground.drawCharacter({name:'avg_npc_109_2', name2:'avg_npc_064_weapon_6', focus:1});playground.drawDialog({name:'企业员工',text:'......佐菲娅？是、是你？'});",
        "playground.drawCharacter({name:'avg_npc_109_2', name2:'avg_npc_064_weapon_1', focus:2});playground.drawDialog({name:'佐菲娅',text:'啊啊。我对你有印象，你是那个年轻的小经理......'});",
        "playground.drawCharacter({name:'avg_npc_109_2', name2:'avg_npc_064_weapon_1', focus:1});playground.drawDialog({name:'企业员工',text:'不不......不再是了，我只是个......为斯沃玛跑腿的无名小卒......'});",
        "playground.drawCharacter({name:'avg_npc_109_4', name2:'avg_npc_064_weapon_1', focus:1});playground.drawDialog({name:'企业员工',text:'原来是这样，玛莉娅阁下的教练正是鞭刃骑士，那就更好不过了。'});",
        "playground.drawDialog({name:'企业员工',text:'“群月”骑士团全部都是像二位这样的年轻骑士，比起单纯的战斗，企业商务部门有更多方法让各位彰显价值......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'可听上去......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'......就是当明星，偶像，变成城际网络大红人，没人会在意你的竞赛成绩，他们只会看到你的脸，然后大把掏钱。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'这样也行......？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'市场就是这样的，用九成预算请个代言人，找个剽窃对象，打点虚假造势的广告......'});",
        "playground.drawDialog({name:'佐菲娅',text:'简单，而且有效得超乎你的想象。你都不知道到底是谁有问题。'});",
        "playground.drawCharacter({name:'avg_npc_109', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'企业员工',text:'......浅显一些理解的话，是这样。但斯沃玛公司可以代表商业联合会向阁下承诺，依旧会颁发骑士勋位与封号给阁下......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'......怎么办？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'这么突然，我也......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'说真的......也许你可以接受，玛莉娅。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'欸？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'不需要受伤也能保住临光家的贵族地位，这不是挺好的吗？说不定明年你就能买一处比我家还大的花园了哦？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'佐菲娅姐姐的花园都是那个样了，就算我买个更大的，也只会变成草场吧......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_4', focus:2});playground.drawDialog({name:'佐菲娅',text:'嗯？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_4', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'玛莉娅',text:'没、没什么。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:2});playground.drawDialog({name:'企业员工',text:'只要玛莉娅阁下现在点头答应，立刻就有一份价值不菲的合同可以签署，这点请一定放心。'});",
        "playground.drawCharacter({name:'avg_npc_061_7', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'......'});",
        "playground.drawDialog({name:'玛莉娅',text:'我......'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'抱歉......我不想让临光家的族徽成为商业公司的附属品。至少，我想靠自己的实力......'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_109_3', focus:2});playground.drawDialog({name:'企业员工',text:'......呃？'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'玛莉娅？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'嗯，佐菲娅姐姐，我知道的。'});",
        "playground.drawDialog({name:'玛莉娅',text:'虽然我并不喜欢玛恩纳叔叔的做法，但我也不能让姐姐和爷爷的坚持失去意义。'});",
        "playground.drawDialog({name:'玛莉娅',text:'所以......抱歉，我认为自己并不适合您提出的道路......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_3', focus:2});playground.drawDialog({name:'企业员工',text:'......您......阁下做出这种判断，的确出乎预料......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_2', focus:2});playground.drawDialog({name:'企业员工',text:'但、但是，商业联合会为您准备了更多的合同——您可以一一过目。'});",
        "playground.drawCharacter({name:'avg_npc_109_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'......商业联合会？这种事不是协会负责吗？'});",
        "playground.drawCharacter({name:'avg_npc_109_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'企业员工',text:'呃......您、您能明白吗？这也是首席执行官坚持希望您能加盟我们的原因......'});",
        "playground.drawCharacter({name:'avg_npc_109_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109', focus:1});playground.drawDialog({name:'玛莉娅',text:'嗯......但是，抱歉，恕我婉拒。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_2', focus:2});playground.drawDialog({name:'企业员工',text:'是、是的，我听到了，对，您拒绝了......呃......'});",
        "playground.drawDialog({name:'企业员工',text:'那个，佐菲娅阁下，玛莉娅阁下......这已经是公务之外的事情了，请二位听我一言......'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_2', focus:1});playground.drawDialog({name:'玛莉娅',text:'呃，您好像在牙齿打颤......别、别哭啊？拒绝你也不至于这么严重吧......？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_109_2', focus:2});playground.drawDialog({name:'企业员工',text:'呃，没、没有，我只是希望，如果之后还有人来找二位，特别是来找玛莉娅阁下洽谈的话，请——'});",
        "playground.drawDialog({name:'企业员工',text:'——请尽量考虑答应下来！真的！这对我们都很重要......'});",
        "playground.drawCharacter({name:'avg_npc_109_3'});playground.drawDialog({name:'企业员工',text:'那、那么，在我失态之前，容我告退......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_rungeneral', volume:0.9});voice.playSound({key:'d_gen_doorclosequite', volume:0.6});delay(1);playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:2});playground.drawDialog({name:'老工匠',text:'哪有还要帮别家公司说话的道理......真是奇怪。'});",
        "playground.drawCharacter({name:'avg_npc_120', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'老骑士',text:'是啊......真是奇怪。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'......玛莉娅，下一场比赛是什么时候？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'三天之后。'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'对手是谁？协会有通知过你吗？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'玛莉娅',text:'呃......好像没有？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'我们回去吧，玛莉娅，根据这次的表现，你还有很多地方需要纠正。'});",
        "playground.drawCharacter({name:'avg_npc_101'});playground.drawDialog({name:'老工匠',text:'现在？庆功宴还没好好地庆祝呢！'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_101', focus:1});playground.drawDialog({name:'光头马丁',text:'科瓦尔，先让她俩走吧。'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_064_weapon_5', focus:1});playground.drawDialog({name:'光头马丁',text:'佐菲娅，记得多留个心眼。'});",
        "playground.drawCharacter({name:'avg_npc_107_2', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'——我知道，走了，玛莉娅。'});",
        "playground.drawCharacter({name:'avg_npc_061_2'});playground.drawDialog({name:'玛莉娅',text:'好的，等等我啊——！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_black',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_106',fadetime:1,block:true});delay(1);playground.drawDialog({name:'？？？',text:'......英格拉？“锈铜”英格拉？国民院又放过他了？'});",
        "playground.drawDialog({name:'？？？',text:'真不愧是被大企业赞助的骑士......被他打成残废的维多利亚人一定会愤愤不平吧。'});",
        "playground.drawDialog({name:'？？？',text:'不过......倒也正好。'});",
        "voice.stopMusic({fadetime:2});playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});background.showImage({image:'bg_arena_2',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playMusic({intro:'m_avg_batmeeting_intro', key:'m_avg_batmeeting_loop', volume:0.4});delay(1);voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawCharacter({name:'avg_npc_121'});playground.drawDialog({name:'大嘴莫布',text:'先生们，女士们！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'没有保障，没有规则，没有限制！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'这里除了有两个自带铠甲的骑士和一个赛场，没有任何其他多余的东西！规则，条款，善后，防护措施，全都没有！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'作为卡西米尔骑士竞标赛最重要的预赛项目，我们的选拔赛事已经进行了三个月之久，但参赛者依然源源不绝！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'但就算这样，我也要说，今天我们要看到的和以往可不一样！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'我们面前的，可是两位来自古老家族的骑士！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'喔，喔，我听到各位的嘘声了。不要紧！比赛的趣味性，我可以拿自己所有的职业素养来保证！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'只要听到他们的名字，你们就一定会欢呼！我就是敢这么保证！'});",
        "playground.drawCharacter({name:'avg_npc_121_3'});playground.drawDialog({name:'大嘴莫布',text:'让我们看一看，这一方的选手——是英格拉家的幺子，奥尔默·英格拉！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_104',fadetime:1,block:true});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});delay(2);playground.drawCharacter({name:'avg_npc_121'});playground.drawDialog({name:'大嘴莫布',text:'没错，没错，就是无数次因为把人打成残废进了审判堂，却又无数次凭着企业献金被侍从国民院一致判为无罪的“锈铜”英格拉！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'来自沸血骑士团的竞技场屠夫，从未让对手安然退场的残暴骑士！！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'他的铠甲，他的施暴，以及他的残忍，会打进每一个对手的心里！以及骨头里！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'而另一边，另一边——'});",
        "playground.drawDialog({name:'大嘴莫布',text:'哦~哦~！现存最古老的骑士家族之一！临光！让我们呼喊他们的名字，临光！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'凭一人的智慧对抗莱塔尼亚的卡西米尔英雄，刺杀侍从叛国者的无光骑士，明明身为耀骑士却因感染了矿石病而被流放的耻辱象征！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'这些，都出自她的家族！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'什么？对历史不感兴趣？好！那么在之前，尚未赢得封号就击败了呼啸骑士团大先锋瑟奇亚克的人，是谁？'});",
        "playground.drawDialog({name:'大嘴莫布',text:'有着呼啸竞技场月度最高人气的骑士，是谁！？'});",
        "playground.drawCharacter({name:'avg_npc_121'});playground.drawDialog({name:'大嘴莫布',text:'这一切，是否会在这场比赛发生改变？那张精致的贵族脸蛋，会不会被“锈铜”殴打到面目全非？'});",
        "playground.drawCharacter({name:'avg_npc_121_3'});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'大嘴莫布',text:'让我们欢迎——玛莉娅·临光——！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_061_2',fadetime:1,block:true});delay(3);playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({image:'ac13_7',xscale:1, yscale:1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:true});playground.drawDialog({name:'大嘴莫布',text:'那么这场战斗最后的结果会是什么？究竟会是谁的胜利？点开你们座位旁的终端，为他们投票吧！'});",
        "playground.drawDialog({name:'大嘴莫布',text:'老规矩！虽然付费支持也不能决定比赛的结果，但能决定你们的钱夹会是空空如也还是鼓起大包！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawImage({});blocker.blocker({a:0, fadetime:1, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_064_weapon_2'});playground.drawDialog({name:'佐菲娅',text:'——玛莉娅！'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_2', focus:1});playground.drawDialog({name:'玛莉娅',text:'欸？'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_6', focus:2});playground.drawDialog({name:'佐菲娅',text:'能不能......能不能放弃？听姐姐这一次吧，至少这一战.....'});",
        "playground.drawCharacter({name:'avg_npc_061_2', name2:'avg_npc_064_weapon_6', focus:1});playground.drawDialog({name:'玛莉娅',text:'......姑母？'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_064_weapon_6', focus:1});playground.drawDialog({name:'玛莉娅',text:'既然已经上阵......骑士不应当退缩。'});",
        "playground.drawCharacter({name:'avg_npc_061_5', name2:'avg_npc_064_weapon_5', focus:2});playground.drawDialog({name:'佐菲娅',text:'......你说得对。'});",
        "playground.drawDialog({name:'佐菲娅',text:'加油吧，玛莉娅。'});",
        "playground.drawDialog({name:'佐菲娅',text:'让所有人看看你的本事。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});playground.drawImage({});"
    ]
];