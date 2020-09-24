var story = [
    [
        "bg_laccolith",
        "bg_county_1",
        "char_350_surtr_3",
        "char_219_meteo_1",
        "char_350_surtr_6",
        "avg_npc_006",
        "bg_rhodescom",
        "char_003_kalts_1",
        "char_350_surtr_1",
        "bg_caveentrance",
        "char_350_surtr_5",
        "bg_cave_2",
        "bg_black"
    ],
    [
        "m_dia_path_loop",
        "m_dia_path_intro",
        "d_gen_walk_n",
        "d_gen_rungeneral",
        "m_avg_drift_loop",
        "m_avg_drift_intro",
        "d_sp_ballista",
        "m_avg_nervous_loop",
        "m_avg_nervous_intro",
        "e_skill_skulsrsword"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);voice.playMusic({intro:'m_dia_path_intro', key:'m_dia_path_loop', volume:0.4});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_laccolith',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});delay(1);playground.drawDialog({text:'7:10 A.M.  天气/晴'});",
        "playground.drawDialog({text:'卡兹戴尔远郊'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_county_1',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_350_surtr_3',fadetime:1,blo:true});delay(2);playground.drawDialog({name:'史尔特尔',text:'任务目的地是这儿？'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_219_meteo_1',fadetime:1,blo:true});delay(2);playground.drawDialog({name:'陨星',text:'按照图像指示看来，应该就是这里，移动村庄——贝罗尼村。'});",
        "playground.drawDialog({name:'陨星',text:'比起移动村庄，不如说整个村子就是一个大型矿车。'});",
        "playground.drawDialog({name:'陨星',text:'依靠源石驱动自带的钻井进行采掘，达成自给自足的同时，多余资源出售给附近的其他城市也能获得营收。'});",
        "playground.drawDialog({name:'陨星',text:'如果发现了大型遗迹更是能向周围的大型移动城市寻求开采的赞助费。'});",
        "playground.drawCharacter({name:'char_350_surtr_6',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'史尔特尔',text:'就算你这么说，这村子也太破了吧。'});",
        "playground.drawDialog({name:'史尔特尔',text:'遍地的灰尘，栅栏也破破烂烂。明明有人来往，但是却不愿意翻修翻修。'});",
        "playground.drawDialog({name:'史尔特尔',text:'看起来也并不是什么很有趣的地方。'});",
        "playground.drawCharacter({name:'char_350_surtr_6',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'泰拉的大部分地方都不有趣，但是那些居住在无趣地方的人也有他们自己的生活。'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_rungeneral', volume:0.9});playground.drawDialog({name:'瘦弱的小孩',text:'等一下，还给我！'});",
        "playground.drawDialog({name:'顽皮的小孩',text:'干嘛！不是你说好的这些雪糕要大家分着吃的吗！'});",
        "playground.drawDialog({name:'瘦弱的小孩',text:'别跑！都还没到家你都要把它捏化了！'});",
        "playground.drawDialog({name:'瘦弱的小孩',text:'白痴，快给我！'});",
        "playground.drawDialog({name:'顽皮的小孩',text:'那不行，我比你跑得更快，得让我来把这些带回去给老爸！'});",
        "playground.drawDialog({name:'瘦弱的小孩',text:'等等我啊！！'});",
        "voice.playSound({key:'d_gen_rungeneral', volume:0.9});playground.drawCharacter({});playground.clearDialog();delay(1);playground.drawCharacter({name:'char_350_surtr_6',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'在这样糟糕环境中努力生存着的人们不少，但是这并不意味着他们不幸福。'});",
        "playground.drawCharacter({name:'char_350_surtr_6',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'史尔特尔',text:'为了一份普通的雪糕跑来跑去，不顾周围的人吵吵嚷嚷，一直到长大成人也都是这样。'});",
        "playground.drawDialog({name:'史尔特尔',text:'这样也幸福？'});",
        "playground.drawCharacter({name:'char_350_surtr_6',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'......你是不是生气了。'});",
        "playground.drawCharacter({name:'char_350_surtr_3',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'史尔特尔',text:'我怎么会因为被这些小孩子不顾别人胡乱跑过扬起灰尘发脾气。'});",
        "playground.drawCharacter({name:'char_350_surtr_3',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'（这可不就是生气了吗。）'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'avg_npc_006',fadetime:1,blo:true});delay(2);playground.drawDialog({name:'村长',text:'不好意思不好意思，两位就是罗德岛特派过来的干员吗。'});",
        "playground.drawDialog({name:'村长',text:'让两位久等了。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'啊是的，您好，请问您就是本地的对接人员吗。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'村长',text:'啊啊是的，敝人就是现在贝罗尼村的村长。由我来给大家带路，来，别在这里站着，咱们往里走吧，这边。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'麻烦您了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_rhodescom',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawDialog({text:'任务出发前'});",
        "playground.drawDialog({text:'罗德岛指挥室'});",
        "playground.drawCharacter({name:'char_003_kalts_1',fadetime:1,blo:true});delay(1);playground.drawDialog({name:'凯尔希',text:'地处卡兹戴尔边界的贝罗尼村是典型的矿区村庄，几个月前因为开采导致了塌方，矿场完全封闭了起来。'});",
        "playground.drawDialog({name:'凯尔希',text:'塌方不仅破坏了矿场，还封住了村子的移动路线，贝罗尼村一直以来的通商通道也被阻拦。'});",
        "playground.drawDialog({name:'凯尔希',text:'村子近几个月以来一直在向临近的移动城市求助，不过并没有愿意去帮他们解决情况的城市出现。'});",
        "playground.drawDialog({name:'凯尔希',text:'这次希望陨星你能去现场进行初步探查，确定当地受困情况。'});",
        "playground.drawDialog({name:'凯尔希',text:'将第一波数据带回来后，我们就可以展开救助计划。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'了解，听起来并不是特别困难的任务。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'村子的问题看起来并没有牵扯到天灾和矿石病，但是也要小心行事。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'收到，不过......'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'......'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'史尔特尔也要一起？这次任务没有这么困难吧。'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'这次任务地点有我想去确认的东西。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'史尔特尔因为一些个人需求申请了任务的同行，经过确认我们通过了此次申请。'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'我不会成为累赘，不用在意我就行。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'......'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_county_1',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'村长',text:'村子不大，麻烦两位先在这里等一等，我进去先拿一些工具。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'啊，基本的勘探工具我们都携带好了。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'村长',text:'村子边缘的矿区入口现在被我们用特殊的锁定设备封锁了。'});",
        "playground.drawDialog({name:'村长',text:'如果不是特殊解锁工具的话是没办法打开的，倒不是我自夸，咱们村子在采掘方面还是很有经验的。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'可是不也困在这里了。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'村长',text:'哈哈哈确实是这样。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'啊啊抱歉她不是有心的。喂这也太没礼貌了吧。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:1});playground.drawDialog({name:'村长',text:'也是惭愧，村子虽然在采掘方面有经验，但是确实没有预料到如此大规模的塌方事件。'});",
        "playground.drawDialog({name:'村长',text:'钻井部分陷在塌方区域里面，为了安全着想，村子也不敢安排人员接近。'});",
        "playground.drawDialog({name:'村长',text:'即使这次能得到罗德岛的帮助，以后我们也得多钻研钻研应对手段。'});",
        "playground.drawDialog({name:'村长',text:'两位先休息休息，稍等我去准备准备。'});",
        "playground.drawCharacter({name:'avg_npc_006',name2:'char_219_meteo_1',focus:2});playground.drawDialog({name:'陨星',text:'好的，您先去忙吧。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});delay(2);playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'......'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'......'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'所以，你对别人也太不客气了吧。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_6',focus:2});playground.drawDialog({name:'史尔特尔',text:'只不过说说事实而已。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'唔......唔......'});",
        "playground.drawDialog({name:'陨星',text:'（好尴尬啊。）'});",
        "playground.drawDialog({name:'陨星',text:'（虽然早就听说史尔特尔很难相处了，但是没想到根本找不到话说。）'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'......（记录）'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'你是在记录村子的情况吗。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'并不是。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'那是......'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'......'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'............'});",
        "voice.stopMusic({fadetime:2});playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'......你难道不知道吗，我还以为我的档案大家都能看到。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'看过确实是看过，只是......'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});voice.playMusic({intro:'m_avg_drift_intro', key:'m_avg_drift_loop', volume:0.4});playground.drawDialog({text:'史尔特尔，档案中提到了这个孩子。'});",
        "playground.drawDialog({text:'因为未知原因出现的记忆障碍，导致认知障碍。'});",
        "playground.drawDialog({text:'好像对她来说，脑中有大量记忆同时存在。因为数量过多，导致史尔特尔完全无法分辨哪些是真实的哪些是虚假的。'});",
        "playground.drawDialog({text:'于是这个孩子一直在一个一个寻找着记忆中的场所。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'所以凯尔希医生说的私人原因，果然也是因为在这个村子的附近有你记忆中接近的地方吗。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'凯尔希医生告诉我这附近的情报是，对这个地区产生了熟悉感。'});",
        "playground.drawDialog({name:'史尔特尔',text:'照片和记录中也出现了大量似曾相识的画面。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'到了实地，看到了村子后，有想起什么来吗？'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'什么都没有。走过村子的时候，看着路过的孩子，看着残破的小屋，虽然接近记忆里的画面，但是又完全不一样。'});",
        "playground.drawDialog({name:'史尔特尔',text:'我也不知道为什么。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'村子每个地方都调查过了吗？'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'一眼看过去，并没有什么漏掉的地方。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'不如一会儿问问村民们好了，说不定你印象中的村子是几年前的样子？现在已经改建过了？'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'......可能吧。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'空气中干燥植物的味道确实也跟回忆中并无二致。'});",
        "playground.drawDialog({text:'闭上眼，仿佛就身处在熟悉的街道里一样。'});",
        "playground.drawDialog({text:'身边跑过的孩童的脚步声，仿佛也是回忆里好友之间追逐的声音。'});",
        "playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'可是睁开眼，眼前景色却依然是陌生的样子。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'凯尔希医生既然把这个任务安排给我了，我也来帮你一起做探查吧。'});",
        "playground.drawDialog({name:'陨星',text:'等到矿区塌方事件调查结束后，让我也帮你一起在村里寻找线索。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'大可不必，我自己就可以。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'......'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'......'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'......找不到过去找不到家的感觉，我也大概有所了解。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'......'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'为了萨卡兹的地位，为了萨卡兹的家，我与其他不少同伴一起，也在一直尝试努力。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'我的情况并不一样。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'说不定不一样，说不定也是一样的呢？'});",
        "playground.drawDialog({name:'陨星',text:'说不定我们都只是在寻找一个归所而已。'});",
        "playground.drawDialog({name:'陨星',text:'但是，在一个人看着未知的前方寻找着什么的时候，注意不到身边别的事物可不行。'});",
        "playground.drawDialog({name:'陨星',text:'这是阿米娅让我理解到的。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'不好意思两位久等了，我们现在就出发吧！'});",
        "playground.drawDialog({name:'村长',text:'我已经准备好了！'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'不管怎么说，我们先优先完成我们的任务吧。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_caveentrance',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'这里就是......'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'是的，这里就是塌方的位置了。两位千万小心脚下。'});",
        "playground.drawDialog({name:'村长',text:'挖掘口就在此，之前因为塌方导致周边地层下陷，现在这一带已经全部封住了。'});",
        "playground.drawDialog({name:'村长',text:'这个洞口本来也是跟邻村的通道，闭塞了之后也没办法跟邻村进行物资交互了。'});",
        "playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'......！'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'史尔特尔？'});",
        "playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'这条路，我好像有印象。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'村长，这邻村跟咱们村子关系如何？'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'邻村算是跟我们村同规格的采掘村。因为附近几个村子都做着相同的产业，大家也算是经常有所往来。'});",
        "playground.drawDialog({name:'村长',text:'双方来回交流，甚至是来回搬家也是有可能的。'});",
        "playground.drawDialog({name:'村长',text:'不过这次矿区塌方，我们村子的联络道路阻塞。隔壁村子应该也就自己开采自己的去了吧。'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0.5, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'这个道路的轨迹，这个方向。'});",
        "playground.drawDialog({text:'越来越熟悉了。'});",
        "playground.drawDialog({text:'过去，确实是经常在这里来回出入。'});",
        "playground.drawDialog({text:'熟悉的孩子们身影仿佛就在身旁跑过，一刹那间就消失在了眼前堵塞的岩石之中。'});",
        "playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'你们想去邻村吗？'});",
        "playground.drawDialog({name:'村长',text:'如果道路开放之后，应该就能很快联络上他们了。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'那实在是太好了......史尔特尔？'});",
        "playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'我可不准备等那么长的时间了。'});",
        "voice.stopMusic({fadetime:1});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'啊？'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'啊？？'});",
        "playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'你们都先让开！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0.5, r:0, g:0, b:0, fadetime:1, block:true});playground.clearDialog();voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:1.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_avg_nervous_intro', key:'m_avg_nervous_loop', volume:0.4});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'史尔特尔，等等！我知道你急着想搞清楚，但是现在矿井一点都不安全啊！'});",
        "playground.drawDialog({name:'陨星',text:'你这样往里深入可能会让自己陷入危险！'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'陨星，你就在外面等着我，帮我守好洞口就行！'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'这个孩子！竟然打破了塌方的洞口直接冲进去了！？'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'喂，等一下！'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'不行！你可不能也再进去了！'});",
        "playground.drawDialog({name:'村长',text:'里面可能还会产生新的塌方！'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'可恶！史尔特尔！'});",
        "voice.stopMusic({fadetime:1});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({});background.showImage({image:'bg_cave_2',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playMusic({intro:'m_avg_drift_intro', key:'m_avg_drift_loop', volume:0.4});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_350_surtr_1',fadetime:1,block:true});delay(3);playground.drawCharacter({});playground.drawDialog({text:'深入矿井中，机械开采的痕迹清晰可见。'});",
        "playground.drawDialog({text:'道路蜿蜒向前，仿佛指引着史尔特尔前进。'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'......这里就是通往邻村的道路吧。'});",
        "playground.clearDialog();voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_350_surtr_6'});playground.drawDialog({name:'史尔特尔',text:'竟然已经完全变成了源石虫巢穴。'});",
        "playground.drawDialog({name:'史尔特尔',text:'看来几个月过来，开采出的空洞已经被这些家伙彻底占领。'});",
        "playground.drawDialog({name:'史尔特尔',text:'麻烦。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'这是......'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'牵着手的小孩子们，从眼前的道路穿过。'});",
        "playground.drawDialog({text:'绕过了数不清的源石虫的痕迹。'});",
        "playground.drawDialog({text:'消失在了黑暗的前方。'});",
        "playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'啊？'});",
        "playground.clearDialog();voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});background.cameraShake({duration:1.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_caveentrance',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'这个爆炸声是！'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'难道又是塌方！'});",
        "playground.drawDialog({name:'村长',text:'那位小姑娘有危险了！这可怎么办啊！？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_black',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});playground.clearDialog();playground.drawDialog({text:'记忆中的街道，充满了泥土味，而不是干燥的植物味。'});",
        "playground.drawDialog({text:'记忆中的同伴，也不会拿着雪糕来回追赶。'});",
        "playground.drawDialog({text:'房屋虽然很像，但是并不相同。'});",
        "playground.drawDialog({text:'并不只是设计的细微不同，而是，材质、结构都完全不同。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_cave_2',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_350_surtr_3'});playground.drawDialog({name:'史尔特尔',text:'啊，受伤了。疼，手掌心这不是擦伤了吗。'});",
        "playground.drawDialog({name:'史尔特尔',text:'没想到我也会有因为分心被源石虫偷袭的一天。'});",
        "playground.drawDialog({name:'史尔特尔',text:'啧。'});",
        "playground.drawCharacter({name:'char_350_surtr_5'});playground.drawDialog({name:'史尔特尔',text:'这，这是......'});",
        "playground.drawDialog({name:'史尔特尔',text:'在矿坑下面，还有另一个地下大空洞？'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0.5, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'悉悉索索，是源石虫的声音。'});",
        "playground.drawDialog({text:'悉悉索索。'});",
        "playground.drawDialog({text:'悉悉索索。'});",
        "playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'大空洞里面的这是，城市遗迹吗......'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0.5, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'史尔特尔身处在地下更深处的空洞之中。'});",
        "playground.drawDialog({text:'除了源石虫的亮光，依稀能看清一些的房屋轮廓，横七竖八地掩埋在岩石间。'});",
        "playground.drawDialog({text:'路上的砖石，墙体的砖石。'});",
        "playground.drawDialog({text:'怎么看，都是已经被掩埋了很长很长时间了。'});",
        "playground.drawDialog({text:'几十年？几百年？'});",
        "playground.drawDialog({text:'史尔特尔也不知道，但是对她来说，确实是找到了自己想要找到的东西。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_caveentrance',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'就是这里！'});",
        "playground.clearDialog();voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});background.cameraShake({duration:1.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'！！'});",
        "playground.drawDialog({name:'陨星',text:'史尔特尔！'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_350_surtr_1',fadetime:1,block:true});delay(2);playground.drawDialog({name:'史尔特尔',text:'啊，多亏了陨星你帮我定好了位，这样也方便我从里面打破岩层出来。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'你做了什么！干嘛要自己一个人深入危险的地方！'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'我这不是，进去做探查吗。'});",
        "playground.drawDialog({name:'史尔特尔',text:'顺便，我找到了内部塌方的原因，是因为在矿井下面有源石虫巢穴，里面有一个巨大的空洞。'});",
        "playground.drawDialog({name:'史尔特尔',text:'挖掘导致了下方支撑压力扩大，于是整个塌方掉了。'});",
        "playground.drawDialog({name:'史尔特尔',text:'为了解决问题，我已经把下面源石虫巢穴全毁，并且利用塌方把整个空洞都封了起来。'});",
        "playground.drawDialog({name:'史尔特尔',text:'虽然跳过了基础探测，应该算是解决了问题了。'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'啊!'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'啊？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({});background.showImage({image:'bg_county_1',screenadapt:'coverall'});delay(1);blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'所以，恰好你自己就这样把问题全解决了，也没找到去邻村的路？'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'恩，我在路上就发现了，邻村也是错的，这里也是错的。'});",
        "playground.drawDialog({name:'史尔特尔',text:'看来是我搞错了，这里并没有我想要找的回忆。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'一向记录得这么详细的你也会搞错？'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'大概吧。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'......我以前也遇到过这样的事情。'});",
        "playground.drawDialog({name:'陨星',text:'在寻找目标的路上，总会在接近目标的时候遇到各种失败。'});",
        "playground.drawDialog({name:'陨星',text:'不过我也是依靠了身边的人，至少才能让我坚持到现在。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'对我来说倒也是习以为常了。'});",
        "playground.drawDialog({name:'史尔特尔',text:'毕竟这也不是第一次发现记忆中的地方产生了偏差。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'不过，就算今天没有找到，也并不意味着无家可回不是吗。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:2});playground.drawDialog({name:'史尔特尔',text:'所以你的意思是，我也可以依靠你吗？'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'char_350_surtr_1',focus:1});playground.drawDialog({name:'陨星',text:'呃，也不是说不是这个意思......'});",
        "playground.drawCharacter({name:'avg_npc_006'});playground.drawDialog({name:'村长',text:'两位！我已经通知过村里其他人了！'});",
        "playground.drawDialog({name:'村长',text:'正式的探查队已经在准备了！如果真如小姑娘你所说，那么现在矿坑就可以开始准备恢复工作了。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'avg_npc_006',focus:1});playground.drawDialog({name:'陨星',text:'请务必等我们把现有数据带回罗德岛本舰后再进行深入勘探。'});",
        "playground.drawDialog({name:'陨星',text:'一旦再发生新事故就得不偿失了。'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'avg_npc_006',focus:2});playground.drawDialog({name:'村长',text:'哈哈没问题，大家都太开心了。真得感谢小姑娘你们了啊。'});",
        "playground.drawDialog({name:'村长',text:'如果不介意的话，今天就留在村里吧。'});",
        "playground.drawDialog({name:'村长',text:'让我们好好招待你们一次！'});",
        "playground.drawCharacter({name:'char_219_meteo_1',name2:'avg_npc_006',focus:1});playground.drawDialog({name:'陨星',text:'这......'});",
        "playground.drawCharacter({name:'char_350_surtr_1'});playground.drawDialog({name:'史尔特尔',text:'我们还得赶快回去，看来是没办法接受招待了。'});",
        "playground.drawDialog({name:'史尔特尔',text:'不过......'});",
        "playground.drawDialog({name:'史尔特尔',text:'能给我一份雪糕吗？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({});"
    ]
];