var story = [
    [
        "bg_cherunder",
        "char_003_kalts_1",
        "avg_npc_012",
        "avg_npc_042"
    ],
    [
        "m_dia_darkness02_loop",
        "m_dia_darkness02_intro",
        "m_avg_batmeeting_loop",
        "m_avg_batmeeting_intro",
        "d_gen_walk_n"
    ],
    [
        "voice.stopMusic({});delay(1);playground.drawCharacter({});blocker.blocker({fadetime:1,block:true});playground.drawDialog({text:'切尔诺伯格地下基建'});",
        "playground.drawDialog({text:'10:30 a.m.'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_cherunder',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_darkness02_intro', key:'m_dia_darkness02_loop', volume:0.4});playground.drawCharacter({name:'char_003_kalts_1',fadetime:1,block:true});delay(1);playground.Decision({options:[['1'], '你在这，是在等我？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'是。'});",
        "playground.Decision({options:[['1'], '找你花了我很长时间。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'我们会在环境信息汇总完毕后开始行动。在这之前，更多地向你描述一些核心城内的现状会对你有帮助。'});",
        "playground.drawDialog({name:'凯尔希',text:'阿米娅还要处理现场，这次讨论，她就不参加了。'});",
        "playground.drawDialog({name:'凯尔希',text:'任务简报你都已经看过。但那些资料对于你的头脑来说，并不够多。'});",
        "playground.Decision({options:[['1', '2', '3'], '你终于意识到需要我了？', '......', '我还以为你当我只会战地指挥。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'如果最坏的情况发生，我不希望你牺牲的不明不白。'});",
        "predicate = ['2'];",
        "playground.drawDialog({name:'凯尔希',text:'如果你对我五官中的某个部分很在意，可以直接指出来。不用一直盯着我看。'});",
        "predicate = ['3'];",
        "playground.drawDialog({name:'凯尔希',text:'虽然你可能忘了，但我记得。我记得你相当擅长在凌晨四点时，用沸腾的饮用水直接在口腔中加热速食食品。'});",
        "playground.drawDialog({name:'凯尔希',text:'至于是不是真的，你也许可以试试。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'凯尔希',text:'不说闲话。我们的时间没有多充裕。'});",
        "playground.drawDialog({name:'凯尔希',text:'罗德岛与近卫局在龙门合作击败了整合运动，击溃了“梅菲斯特”和“弑君者”带领的武装力量。'});",
        "playground.drawDialog({name:'凯尔希',text:'这之后，整合运动在龙门的部署已经全部失效。'});",
        "playground.drawDialog({name:'凯尔希',text:'阿米娅向我报告过，你们与整合运动的特殊小队指挥官，别称“霜星”的感染者，在龙门城邦的底部展开了殊死搏斗。'});",
        "playground.drawDialog({name:'凯尔希',text:'战斗以你们的胜利告终。'});",
        "playground.Decision({options:[['1', '2', '3'], '没人赢。', '不。', '那不算是胜利。']});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'凯尔希',text:'可以理解。根据PRTS申报的数据，在干员的协力下，你正是在罗德岛处理了敌对感染者的遗体。'});",
        "playground.Decision({options:[['1'], '我不认为她是敌人。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:`Dr.${nickname}，“分清敌我”。`});",
        "playground.drawDialog({name:'凯尔希',text:'......不。也许这会让你会错意，请听我说完。'});",
        "playground.Decision({options:[['1'], '......？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:`我没有指责你，Dr.${nickname}。`});",
        "playground.drawDialog({name:'凯尔希',text:'我从阿米娅的讲述中了解了敌指挥官的情况。现场的判断属于你们，如何看待他们，只能由身在现场的你们决定。'});",
        "playground.drawDialog({name:'凯尔希',text:'我没有跳出职责来判断立场的权力。'});",
        "playground.drawDialog({name:'凯尔希',text:'你曾经尝试去理解感染者的行为动机，你愿意承担她——霜星——所作所为导致的所有后果。'});",
        "playground.drawDialog({name:'凯尔希',text:'你也这么做了。'});",
        "playground.drawDialog({name:'凯尔希',text:'如果你打算诚实地去了解这片大地，博士，我没有指责你的理由。'});",
        "playground.drawDialog({name:'凯尔希',text:`我甚至可以向罗德岛干员担保你的行为。坚持下去，Dr.${nickname}，做自己的决定，我会尽量不做干涉。`});",
        "playground.drawDialog({name:'凯尔希',text:'之后的后果，我会解决罗德岛应承担的那部分。'});",
        "playground.drawDialog({name:'凯尔希',text:'你的责任与权力相辅相成。“分清敌我”，是你自己的判断，不是我的。'});",
        "playground.drawDialog({name:'凯尔希',text:'......'});",
        "playground.drawDialog({name:'凯尔希',text:'（轻声）如果你真的与他们共呼吸。'});",
        "playground.Decision({options:[['1'], '我这么做......你其实完全认可？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'我没有这么说过。'});",
        "playground.drawDialog({name:'凯尔希',text:'言归正传。霜星及其率领的小队，也就是“雪怪小队”，从属于一支感染者游击队。'});",
        "playground.drawDialog({name:'凯尔希',text:'现在，整合运动能够驱策的精锐武装力量只剩下两支。感染者游击队是其中一支。'});",
        "playground.drawDialog({name:'凯尔希',text:'另一支，是由萨卡兹雇佣兵“W”带领的萨卡兹雇佣军。'});",
        "playground.drawDialog({name:'凯尔希',text:'据我所知，W依赖一系列手段，窃取了整合运动这支萨卡兹雇佣军的领头人地位。'});",
        "playground.drawDialog({name:'凯尔希',text:'因为我们没时间复习历史常识，所以我直截了当地告诉你——萨卡兹雇佣军并不可靠，对W，对整合运动，都一样。'});",
        "playground.drawDialog({name:'凯尔希',text:'萨卡兹雇佣军并不是普通的雇佣兵组织。他们是卡兹戴尔无处容放的军事力量在大地各处的流露。'});",
        "playground.drawDialog({name:'凯尔希',text:'妄图控制它，只会引来他们背后的牵线人。'});",
        "playground.Decision({options:[['1'], '你似乎对萨卡兹有很深的了解。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'这不是重点。'});",
        "playground.drawDialog({name:'凯尔希',text:'重点在于，雪怪小队所属的感染者游击队和雇佣兵全然不同。'});",
        "playground.drawDialog({name:'凯尔希',text:'形式，编制，行事方式以及信条，游击队和雇佣兵之间没有一点相似之处。'});",
        "playground.drawDialog({name:'凯尔希',text:'在成为整合运动的武装前，它是独立的感染者游击队，他们的威名在特定区域的感染者中比它的后起之秀整合运动更加响亮。'});",
        "playground.drawDialog({name:'凯尔希',text:'......在成为游击队之前，他们曾是乌萨斯强大军事力量的一部分。'});",
        "playground.Decision({options:[['1'], '是西北冻原的游击队？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'——'});",
        "playground.drawDialog({name:'凯尔希',text:'无论你从哪里得到了这条信息，博士，我都该为此夸赞你。'});",
        "playground.drawDialog({name:'凯尔希',text:'尽管这样的情报很基础，但你能主动去获取情报这一行为，让我感到欣慰。'});",
        "playground.Decision({options:[['1', '2', '3'], '夸我不用拐弯抹角。', '......', '我有点怀疑你在讽刺我？']});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'凯尔希',text:'点到为止。'});",
        "playground.drawDialog({name:'凯尔希',text:'我们身处切尔诺伯格核心城的基础工业结构处。'});",
        "playground.drawDialog({name:'凯尔希',text:'接下来，我们带领的这三支小队将穿过错综复杂的地下通道、下水管道与工业层，前往核心城的中央区域。'});",
        "playground.drawDialog({name:'凯尔希',text:'注意，哪怕是恰巧在这里巡逻的敌人，也不会是普通的整合运动暴徒。'});",
        "playground.drawDialog({name:'凯尔希',text:'我们会遇见经过严苛训练的......“士兵”。游击队以乌萨斯现役军的训练方式训练过的整合运动“士兵”。'});",
        "playground.drawDialog({name:'凯尔希',text:'侦查干员发现核心城内的通讯遭到了人为切断，或者说，整合运动并没有尝试维持城内的通讯。'});",
        "playground.drawDialog({name:'凯尔希',text:'这对于利用常规通讯手法进行交流的现代小队有着很强的制约力。'});",
        "playground.drawDialog({name:'凯尔希',text:'却也意味着，整合运动也有特殊的通讯手段，或者是他们完全没有准备好应战。'});",
        "playground.drawDialog({name:'凯尔希',text:'参照一个月前在切尔诺伯格发生的事件，后者的情况几乎不会发生。但是，切断通讯，底层的整合运动将不会收到任何直接命令。'});",
        "playground.drawDialog({name:'凯尔希',text:'大多数时间里，他们会自由行事。'});",
        "playground.drawDialog({name:'凯尔希',text:'恐怕他们还不知道，他们频道收不到的那个信号——那个只有国家与城邦才能辨别的信号，正在划定乌萨斯的疆域。'});",
        "playground.drawDialog({name:'凯尔希',text:'这是一座酝酿着风暴的城区。混乱，无论是无意还是故意，都会像沉重的烟雾一样四处弥漫。'});",
        "playground.drawDialog({name:'凯尔希',text:'先我一步，崩溃的种子已经被人播撒出去了。'});",
        "playground.Decision({options:[['1'], '结论呢？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'某种冲突正在整合运动内部孕育。'});",
        "playground.Decision({options:[['1'], '你很确定？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'类似的事情在这片大地上发生过无数遍。'});",
        "playground.Decision({options:[['1'], '你是不是还有什么没和我说？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'能说的差不多就这些，剩下的，等要讨论的时候再讨论。'});",
        "playground.drawDialog({name:'凯尔希',text:'即使我们只是在做战前准备工作，我们也要兼顾效率。'});",
        "playground.drawDialog({name:'凯尔希',text:'请你帮我通知R-4小队的成员，博士。请他们来取这批装置。'});",
        "playground.Decision({options:[['1'], '......等一等......？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'还有什么问题？'});",
        "playground.Decision({options:[['1'], '这些装置似乎是迷迭香的。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'是的。'});",
        "playground.drawDialog({name:'凯尔希',text:'那么，你与迷迭香干员的交流似乎并不局限于生物处理室里的谈话。'});",
        "playground.Decision({options:[['1'], '我看到她准备战斗的样子。']});",
        "predicate = ['1'];",
        "playground.Decision({options:[['1'], '很难想像她居然有使用这种装置的力量。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'事实上，每一个精英干员都具备相当的力量。他们必须独当一面。'});",
        "playground.drawDialog({name:'凯尔希',text:'......所以你还没来及了解迷迭香的战斗方式。'});",
        "playground.drawDialog({name:'凯尔希',text:'事先声明，有些事情不只该他们自己承担。罗德岛的战地指挥官身负多种职能，帮忙分担干员身上的压力，也是其中必要的一环。'});",
        "playground.drawDialog({name:'凯尔希',text:'在这之后的战斗中，你可能会被某些事实冲击。'});",
        "playground.Decision({options:[['1'], '啊......？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'很少有不会被迷迭香的战斗震慑住的人。'});",
        "playground.drawDialog({name:'凯尔希',text:'做好心理准备。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:2});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_cherunder',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});voice.playMusic({intro:'m_avg_batmeeting_intro', key:'m_avg_batmeeting_loop', volume:0.4});playground.drawCharacter({name:'avg_npc_012'});playground.drawDialog({name:'罗德岛干员',text:`Dr.${nickname}，你来了！`});",
        "playground.drawDialog({name:'罗德岛干员',text:'我们截住了敌人的巡逻小队，正在稳步处理中。'});",
        "playground.Decision({options:[['1'], '战斗已经开始了？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'罗德岛干员',text:'博士，你的位置有点危险......'});",
        "playground.drawDialog({name:'罗德岛干员',text:'我建议你不要站在那个位置。'});",
        "playground.Decision({options:[['1'], '我才刚刚到位。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'罗德岛干员',text:'你那里，那里是......'});",
        "playground.drawDialog({name:'罗德岛干员',text:'博士，她身边真的很危险！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'？？？',text:'......敌人。'});",
        "playground.Decision({options:[['1'], '难道说......']});",
        "predicate = ['1'];",
        "playground.Decision({options:[['1'], '......迷迭香？']});",
        "predicate = ['1'];",
        "voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'avg_npc_042',fadetime:1,block:true});delay(1);playground.drawDialog({name:'迷迭香',text:'敌人。'});",
        "playground.drawDialog({name:'迷迭香',text:'博士，那些是杀害我家人的......敌人！'});",
        "playground.Decision({options:[['1', '2', '3'], '你怎么这么凶？', '......？', '迷迭香？发生什么事......']});",
        "predicate = ['1', '2', '3'];",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawDialog({name:'迷迭香',text:'......'});",
        "playground.drawDialog({name:'迷迭香',text:'博士，让一让。不要呆在这条走道。'});",
        "playground.drawDialog({name:'迷迭香',text:'我和阿米娅不一样。阿米娅的法术能绕过家人，准确地惩罚别人......'});",
        "playground.drawDialog({name:'迷迭香',text:'我不能。我做不到。'});",
        "playground.drawDialog({name:'迷迭香',text:'所以，不要站在迷迭香和战场之间。'});",
        "playground.Decision({options:[['1'], '......']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'整合运动成员',text:'噫！！'});",
        "background.cameraShake({duration:0.4, xstrength:0, ystrength:8, vibrato:30, randomness:30, fadeout:true, block:false});playground.drawDialog({name:'整合运动成员',text:'那个背着大盒子的女孩，怎，怎，怎么......'});",
        "playground.drawDialog({name:'整合运动成员',text:'我的眼睛要看不到了，我的眼睛，我的头！！好痛！好痛！！'});",
        "playground.drawDialog({name:'整合运动成员',text:'有什么东西要把我捏碎了！'});",
        "playground.drawDialog({name:'迷迭香',text:'......'});",
        "playground.drawDialog({name:'迷迭香',text:'不会的。'});",
        "playground.drawDialog({name:'迷迭香',text:'我已经很久没捏死过人了。'});",
        "playground.drawDialog({name:'整合运动成员',text:'那些剑，那些剑——'});",
        "playground.clearDialog();playground.drawCharacter({});playground.Decision({options:[['1'], '迷迭香？！']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'迷迭香',text:'整合运动......'});",
        "playground.drawDialog({name:'迷迭香',text:'我不要你们留在我的记忆里。'});",
        "playground.drawDialog({name:'迷迭香',text:'我不要。'});",
        "playground.clearDialog();blocker.blocker({fadetime:2,block:true});playground.drawImage({});"
    ]
];