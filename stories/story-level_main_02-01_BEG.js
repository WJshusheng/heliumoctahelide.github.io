var story = [
    [
        "bg_2_call",
        "bg_bridge",
        "char_002_amiya_2",
        "char_130_doberm_ex",
        "char_002_amiya_4",
        "bg_0_rhodes3"
    ],
    [
        "d_gen_transmissionget",
        "d_gen_walk_n",
        "d_gen_soldiersrun",
        "m_dia_street_loop",
        "m_dia_street_intro"
    ],
    [
        "voice.stopMusic({});playground.drawDialog({name:'',text:'5:57 a.m. \\ 多云 \\ 能见度 17公里'});",
        "playground.drawDialog({name:'',text:'龙门外环外4公里，荒漠'});",
        "playground.drawDialog({name:'',text:'切尔诺伯格营救行动 结束后4天'});",
        "playground.clearDialog();delay(1);voice.playSound({key:'d_gen_transmissionget',volume:0.6});playground.drawImage({image:'bg_2_call', fadetime:2});playground.drawDialog({name:'PRTS',text:`Dr.${nickname}, 早上好。您已经休息了99999999————`});",
        "playground.drawDialog({name:'PRTS',text:'————个小时。'});",
        "playground.drawDialog({name:'PRTS',text:'虽然我知道您很不愿意起床，不过有人需要您立刻前往作战会议室。'});",
        "playground.drawDialog({name:'PRTS',text:'另外来自凯尔希医生的医学建议，希望您多开窗保持通风，并且进入甲板晒太阳以平衡维生素D。'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_transmissionget',volume:0.6});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0, block:true});playground.drawImage({fadetime:0});voice.playSound({key:'d_gen_walk_n',volume:0.6});delay(1.5);background.showImage({image:'bg_bridge', width:1, height:1, fadetime:1, screenadapt:'coverall'});voice.playSound({key:'d_gen_soldiersrun',volume:0.4});delay(1.4);delay(2);voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.8, crossfade:1, delay:0.5});blocker.blocker({a:0, fadetime:2, block:true});delay(1.4);playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'啊，是博士！早啊。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:`${nickname}博士，你来了。`});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'博士身体好些了吗？'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'昨天看你好像还有些伤痛，行动不太方便。'});",
        "playground.Decision({options:[['1'], '我已经完全恢复了。你呢？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'感觉今天活力满满的，已经没什么问题了！'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'毕竟接下来，我们还有别的任务......'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'需要早点作好准备。博士也要把快速调整当成常态哦。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'博士。'});",
        "playground.drawDialog({name:'杜宾',text:'之前我们在切城的行动，虽然遭受了很大损失，但是获得了不少关于整合运动的情报，而且还救出了博士您。'});",
        "playground.drawDialog({name:'杜宾',text:'根据昨天会谈的结果，我们最近的移动城市————“龙门”，已向我们发送了一份合作框架协议，同意与我们交换情报。'});",
        "playground.drawDialog({name:'杜宾',text:'而有迹象显示“龙门”已经成为整合运动下一个行动目标。'});",
        "playground.drawDialog({name:'杜宾',text:'关于其他的内容，还需经过尚在龙门城内的凯尔希医生同意后，才能定下来。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'龙门暂时答应了我们停泊在城市附近的要求，然后他们愿意给予一部分我们在行动中损失的物资，以及消耗的补给。'});",
        "playground.drawDialog({name:'阿米娅',text:'作为交换，罗德岛需要协助龙门，进行城市外环的一些临时性防卫工作。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'不过今天这么早是因为......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'我来说吧，阿米娅。'});",
        "playground.drawDialog({name:'杜宾',text:'从昨天晚上开始，又有一波切尔诺伯格的幸存者在荒野中被发现，他们正在移动前往龙门，预计下午到达。'});",
        "playground.drawDialog({name:'杜宾',text:'和之前几天一样，我们仍然需要对龙门5区的外围进行防卫工作，只不过这次，可能会混入更多的整合运动。'});",
        "playground.drawDialog({name:'杜宾',text:'战况有所不同，我们在出发之前需要告诉您一种新的战术策略。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'那么博士，今天还请多多指教......'});",
        "playground.drawDialog({name:'阿米娅',text:'加油！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'那么......'});",
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawCharacter({fadetime:0});background.showImage({image:'bg_0_rhodes3', fadetime:0, screenadapt:'coverall', screenadapt:'coverall'});blocker.blocker({a:0, r:0,g:0, b:0, fadetime:1, block:true});playground.drawDialog({name:'杜宾',text:'请你们各自完成出发前的准备。博士请把准备好的编队配置命令下达给其他干员，让他们做好准备。'});",
        "playground.drawDialog({name:'杜宾',text:'完成演习后15分钟出发。'});",
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.clearDialog();playground.drawImage({fadetime:0});delay(0.4);playground.drawDialog({name:'杜宾',text:'这次，千万不要迟到。'});",
        ""
    ]
];