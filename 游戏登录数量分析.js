$(function () {
    $('#container').highcharts({
        series: [{
            type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '22px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: [
            
            {
                id: 'A',
                name: '边锋',
                color:"#F8FF01"
                
            }, {
                id: 'B',
                name: '浩方',
               color:"#04D215"
            }, {
                id: 'O',
                name: '三国杀',
                color:"#FF0F00"
            },{
                name: '边锋',
                parent: 'A',
                value: 5466716
            },{
                name: '2133网页游戏',
                parent: 'A',
                value: 1239770
            }, {
                name: '边锋官网',
                parent: 'A',
                value: 8912678
            },  {
                name: '主公受惊了',
                parent: 'A',
                value: 1635860
            }, {
                name: '浩方忍村',
                parent: 'B',
                value: 2684140
            }, {
                name: '浩方战灵',
                parent: 'B',
                value: 766261
            }, {
                name: '浩方新平台',
                parent: 'B',
                value: 922217
            },{
                name: '浩方电竞平台',
                parent: 'B',
                value: 8284422
            }, {
                name: '三国杀传奇',
                parent: 'O',
                value: 3629800
            },  {
                name: '三国杀霸业',
                parent: 'O',
                value: 2309370
            }, {
                name: '三国杀online',
                parent: 'O',
                value: 51189441
            }, {
                name: '移动三国杀',
                parent: 'O',
                value: 13065940
            }, {
                name: '游戏茶苑',
                parent: '游戏茶苑',
                value: 20822958,
                
                
            }]
        }],
        title: {
            text: '游戏热门程度分析'
        }
    });
});