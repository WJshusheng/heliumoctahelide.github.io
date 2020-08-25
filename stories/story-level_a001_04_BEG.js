var story = [
    [
        "bg_caveentrance",
        "avg_npc_010",
        "char_220_grani_4",
        "avg_npc_003",
        "char_220_grani_5",
        "char_220_grani_3",
        "avg_npc_008",
        "char_1002_nsabr_2",
        "char_1002_nsabr_1"
    ],
    [
        "m_dia_street_loop",
        "m_dia_street_intro",
        "m_dia_mist_loop",
        "m_dia_mist_intro"
    ],
    [
        "background.showImage({image:'bg_caveentrance', fadetime:1});voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.6,crossfade:1});playground.drawDialog({name:'',text:'晴 \\ 能见度 14公里'});",
        "playground.drawDialog({name:'',text:'塔拉特山坑道'});",
        "playground.clearDialog();playground.drawCharacter({});delay(1);playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'进了这个坑道就安全了。前面出去就是莫蒂卡山，从那里开始赏金猎人的数量会明显减少。'});",
        "playground.drawDialog({name:'大鲍勃',text:'至于斯卡蒂————以前听到其他人把她形容成山崩，我一直都笑得很大声。结果我今天才见识到。'});",
        "playground.drawDialog({name:'大鲍勃',text:'本来以为只是一个比一般人强一点点的家伙，真没想到那些风言风语竟然不是在开玩笑。'});",
        "playground.drawDialog({name:'大鲍勃',text:'难怪在酒吧里，我笑的时候他们都一脸惊恐地看着我。'});",
        "playground.drawDialog({name:'大鲍勃',text:'现在轮到我惊恐了，哈。'});",
        "playground.drawCharacter({name:'char_220_grani_4'});playground.drawDialog({name:'格拉尼',text:'是真的！在罗德岛的时候，大家也都是这么传来传去的啊。'});",
        "playground.drawDialog({name:'格拉尼',text:'我也没和她一起出过任务，只知道她很厉害就是了，根本没想到会变成今天这样......'});",
        "playground.drawDialog({name:'格拉尼',text:'我是头次知道她是赏金猎人。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:1});playground.drawDialog({name:'大鲍勃',text:'赏金猎人中的大明星之一了。'});",
        "playground.drawDialog({name:'大鲍勃',text:'这次，就连她也是冲着宝藏来的，就真的太麻烦了。'});",
        "playground.drawDialog({name:'大鲍勃',text:'我们两个能不能从她嘴里抢到一成，都很难说。'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'那样的话，我的村子岂不是......'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:1});playground.drawDialog({name:'大鲍勃',text:'别担心，我觉得她会赶走所有赏金猎人的。'});",
        "playground.drawDialog({name:'大鲍勃',text:'顺带，再毁掉几个村子吧。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'呜......'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'我觉得她并不是冲着宝藏来的，我不能让这种事发生。'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'所以，你们这个什么罗德岛，收人也是来者不拒啊？'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'没有一个罗德岛干员会为了私人的利益，去毫无顾忌地伤害别人。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'大鲍勃',text:'哼，你帮过我，谢谢你。但是你们罗德岛又养着斯卡蒂这种只懂得破坏的灾星，我看也未必真的是为感染者好。'});",
        "playground.drawDialog({name:'大鲍勃',text:'而且，我一个得了矿石病的人，也没见你们罗德岛做了啥能给我们好处的事，还不是四处被人追打。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:2});playground.drawDialog({name:'格拉尼',text:'鲍勃大叔......'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:1});playground.drawDialog({name:'大鲍勃',text:'怎么，哑口无言了？我是不知道你到底相信你们那个罗德岛什么地方。'});",
        "playground.drawDialog({name:'大鲍勃',text:'照我看来，嘴上说着为感染者争取这个那个的，到头来，都是见钱眼开。'});",
        "playground.drawDialog({name:'大鲍勃',text:'哼，什么罗德岛，在这个世上，再没有比我手上这个小小金币更重要的东西！'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:2});playground.drawDialog({name:'格拉尼',text:'抱歉。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:1});playground.drawDialog({name:'大鲍勃',text:'抱什么歉？你还是个小孩子，弄不清理想和现实的年纪，不知道自己究竟几斤几两，这无所谓，都很正常。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:2});playground.drawDialog({name:'格拉尼',text:'不，我不是要说这个。我知道自己的力量还不足。'});",
        "playground.drawDialog({name:'格拉尼',text:'不管是作为骑警，还是作为罗德岛干员，我都接触过很多感染者。'});",
        "playground.drawDialog({name:'格拉尼',text:'......我没能救下他们所有人，这都是我力量还不足的缘故。'});",
        "playground.drawDialog({name:'格拉尼',text:'罗德岛也是一样的。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:1});playground.drawDialog({name:'大鲍勃',text:'也就是没什么用？哈!'});",
        "playground.drawDialog({name:'大鲍勃',text:'也是，感染者们在地下城里受苦的时候，被关进隔离城区，被人无端杀害的时候，罗德岛人在哪儿呢？'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:2});playground.drawDialog({name:'格拉尼',text:'我也好，罗德岛也好，就算有时候拼劲全力，也总有力不能及的地方。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'但就算这样，我依然不会放弃任何一位我见到的无辜感染者。'});",
        "playground.drawDialog({name:'格拉尼',text:'罗德岛，也是一样的。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'大鲍勃',text:'哼。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:2});playground.drawDialog({name:'格拉尼',text:'抱歉......鲍勃大叔。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_4',focus:1});playground.drawDialog({name:'大鲍勃',text:'......我说了，你还是个小孩子，我刁难你有什么用？'});",
        "playground.drawDialog({name:'大鲍勃',text:'可那个斯卡蒂，你的同事，现在不惜对你刀剑相向也要抓走可萝尔夺走宝藏。'});",
        "playground.drawDialog({name:'大鲍勃',text:'你肯定这种人也会相信你们拯救感染者那一套，甚至去帮你们做这种事？'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'我还不了解斯卡蒂究竟想做什么，所以我不能在这里下结论。'});",
        "playground.drawDialog({name:'格拉尼',text:'但我相信，罗德岛接受了她，她肯定也有自己的理由才这样做的。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'大鲍勃',text:'我刚才话太多了，你忘了吧。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'没关系。'});",
        "playground.drawDialog({name:'格拉尼',text:'总之当务之急，果然还是要快点帮可萝尔小姐拿到宝藏。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'大鲍勃',text:'我伤了腿，已经是你们的累赘了。真没想到我居然要拖两个小姑娘的后腿，呿。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'鲍勃大叔，只有一种情况会让你拖累我们。'});",
        "playground.drawDialog({name:'格拉尼',text:'那就是你不想把宝藏给我们。'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'哼，哈哈哈哈。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'鲍勃先生，我没有嫌恶你的意思，只是我刚才......还是有些害怕。'});",
        "playground.drawDialog({name:'可萝尔',text:'我是个乡下人，没有亲眼见过感染者，但我多少还是能看出来......你是有苦衷的人。'});",
        "playground.drawDialog({name:'可萝尔',text:'如果我之前有什么冒犯的地方，请见谅。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:1});playground.drawDialog({name:'大鲍勃',text:'没关系。哈，小姑娘，你只要在拿到宝藏后，付给我我需要的那份报酬就够了。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'嗯......宝藏对我们村子来说很重要。但只要能解决我们的问题，鲍勃先生是一定可以拿到应有的酬劳的。'});",
        "playground.drawDialog({name:'可萝尔',text:'所以，我和格拉尼，既需要你的协助，也会帮助你。'});",
        "playground.drawDialog({name:'可萝尔',text:'对吧，格拉尼？'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'格拉尼',text:'那当然。不管怎么样，我们也该动身了。'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'小姑娘，下个目标地点，差不多是莫蒂卡山了吧，那座山的名字，是某个死了不知道多少年的骑士的封号。'});",
        "playground.drawDialog({name:'大鲍勃',text:'如果我没猜错，这个什么骑士宝藏，就是在那里吧？'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'可上面的洞窟也够找上好几个星期了。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:1});playground.drawDialog({name:'大鲍勃',text:'那当然了。所以没有你，不行。我们可不会把你交给那个红眼女啊。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'就麻烦你带路了。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:1});playground.drawDialog({name:'大鲍勃',text:'就这么办。'});",
        "playground.drawCharacter({name:'avg_npc_010'});voice.stopMusic({fadetime:1});playground.drawDialog({name:'大鲍勃',text:'等等。'});",
        "playground.drawDialog({name:'大鲍勃',text:'出口有动静——'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.6, block:true});delay(1);voice.playMusic({intro:'m_dia_mist_intro', key:'m_dia_mist_loop', volume:0.6, crossfade:1.5});playground.drawDialog({name:'？？？',text:'啊——'});",
        "playground.drawCharacter({name:'avg_npc_008',fadetime:0.5});playground.drawDialog({name:'“上尉”',text:'谁......救救......我......'});",
        "playground.drawDialog({name:'“上尉”',text:'是......感染......者......'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_1002_nsabr_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'整合运动A',text:'.......你下手那么重？'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1',fadetime:1});delay(1);playground.drawDialog({name:'整合运动B',text:'我什么都没做呀，他自己跌倒......'});",
        "playground.drawDialog({name:'整合运动B',text:'啊。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_1',focus:1});playground.drawDialog({name:'整合运动A',text:'————'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'他们是......整合运动？'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'你们——'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'大鲍勃，你要干什么？'});",
        "playground.drawDialog({name:'格拉尼',text:'这些家伙可不是一般的——'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'别多说，开战！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动',text:'......'});",
        "playground.drawDialog({name:'整合运动',text:'快，快把他们全都抓起来！'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];