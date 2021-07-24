var mychart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            '世界観・設定',
            'キャラクター',
            'エンターテイメント性',
            'ストーリー',
            'おもしろさ'
        ],
        datasets: [{
            label: 'ジャンル',
            data: [
                90,100,80,75,80
            ],
            backgroundColor: 'rgba(241, 107, 141, 0.5)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            pointBackgroundColor: 'rgb(46,106,177)',
        }]
    },
    options: {
        title: {
            display: true,
            text: 'サンプルグラフ',
        },
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 10,
                callback: function(value, index, values){
                    return  value +  '単位'
                }
            },
        }
    }
});


