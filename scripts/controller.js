'use strict';

var myApp = angular.module('cricket', []);

    myApp.controller('team',['$scope',function($scope){
        Highcharts.chart('container', {

				    xAxis: {
				        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
				            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				    },

				    series: [{
				        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
				    }],
                   title:{
                       text:"Team Performance"
                   }
				});
    }])

    
        
        
    .controller('match_bowl_3',['$scope',function($scope){
          Highcharts.chart('match_bowl_3',{
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Run Concede', 'Dot Balls', 'Overs', 'Extras']
        },


        labels: {
            items: [{
                html: 'Wickets',
                style: {
                    left: '80px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9]
        },{
            type: 'column',
            name: 'KAMAL',
            data: [5, 12, 4, 5]
        },

        {
            type: 'column',
            name: 'Wore',
            data: [2, 6, 13, 19]
        },



        {
            type: 'pie',
            name: 'wickets',
            data: [{
                name: 'Jane',
                y: 13,

            }, {
                name: 'John',
                y: 23,

            }, {
                name: 'Joe',
                y: 19,

            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]


      });



    }])


    .controller('match_bowl_2',['$scope',function($scope){

        Highcharts.chart('match_bowl_2',{

              chart:{
                type:'heatmap',
                marginTop:40,
                marginBottom:80,
                plotBorderWidth:1
              },
              title:{
                text:"Batsman VS Bowler"
              },
              xAxis:{
                categories:['Shoaib','Khalid','Sami','Razzaq']
              },
              yAxis:{
                categories:['Balaji','RP Singh','Yuvraj','Dravid']
              },
              colorAxis: {
               min: 0,
               minColor: '#FFFFFF',
               maxColor: Highcharts.getOptions().colors[0]
             },

            series:[{
              name:'Batsman and Bowler',
              borderWidth:1,
              data:[[0,0,33],[0,1,42],[0,2,34],[0,3,94],
                    [1,0,23],[1,1,4],[1,2,54],[1,3,54],
                    [2,0,23],[2,1,2],[2,2,24],[2,3,24],
                    [3,0,2],[3,1,24],[3,2,54],[3,3,34]
                  ],
               dataLabels:{
                 enabled:true,
                 color:'#000000'
               }
            }]

        });



    }])

    .controller('pagination',['$scope',function($scope){

        $scope.page='./views/match_bat_1.html';

        $scope.changePage=function(name){
            $scope.page='./views/'+name;
            console.log(name);
        }


    }])
    
    
    
    
    
    
    .controller('player_bat_1',['$scope',function($scope){
        
        Highcharts.chart('player_bat_1',{
           
            title:{
                text:'Team Batting performance for consecutive matches'
            },
            xAxis:{
                categories:['1','2','3','4','5'],
                title:{
                    text:'Matches'
                }
            },
            yAxis:[
                {
                   labels:{
                       style:{
                        color:Highcharts.getOptions().colors[1]            
                       }
                   },
                   title:{
                        text:'Strike Rate',
                        style:{
                            color:Highcharts.getOptions().colors[1] 
                        }
                     }
                    
                },{
                   labels:{
                       style:{
                            color:Highcharts.getOptions().colors[0]            
                       }
                   },
                   title:{
                        text:'Boundary',
                        style:{
                            color:Highcharts.getOptions().colors[0] 
                        }
                    },
                    opposite:true
                    
                }],
            tooltip:{
              shared:true  
            },
            series:[{
                name:'Boundary',
              
                data:[3,5,6,7,8],
                yAxis:1
            },{
                name:'Strike rate',
               
              
                data:[5,6,16,37,48]
            }]
                
            
            
        });
        
    }])
    




    .controller('match_bat_3',['$scope',function($scope){

        Highcharts.chart('match_bat_3',{

            title:{
              text:"Run comparison analysis"
            },


            xAxis:{

                title:{
                    text:'Overs'
                },
                  categories: ['10', '20', '30', '40', '50']
            },
            yAxis:{
                title:{
                    text:'Runs'
                }
            },


            series:[
                {
                    name:'team 1',
                    data:[2,27,43,55,66]

                },{
                    name:'team 2',
                    data:[35,43,56,80,90]


                },{
                    name:'wicket fall of team 1',
                    type:'scatter',
                    color: 'rgba(223, 83, 83, .5)',
                    data:[
                        [0,20],[1,34],[1,36],[1,40],[2,34],[0,34],[4,32]

                    ]
                },{
                    name:'wicket fall of team 2',
                    type:'scatter',
                    color: 'rgba(65, 25, 253, .5)',
                    data:[
                        [0,25],[1,44],[0,54],[4,62],[2,12],[0,39],[4,23]

                    ]
                }

            ]





        });




    }])



     .controller('match_bowl_1',['$scope',function($scope){

        Highcharts.chart('match_bowl_1',{
                    chart:{
                        type:'bar'
                    },

                    title:{
                        text:'Run concede by each bowler over the 10overs interval'
                    },

                    xAxis: {

                        categories: ['10', '20', '30', '40', '50'],
                        title:{
                           text:'Over No'
                        }
                    },
                    yAxis:{
                        minTickInterval:10,
                        title:{
                            text:'Runs'
                        }
                    },

                     plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },

				    series: [{
                            name:"Shoaib",
                            data:[2,4,0,0,0]
                        },{
                             name:"Inzamam",
                            data:[0,4,25,134,0]
                        },{
                             name:"Shoaib khan",
                            data:[0,4,34,41,4]

                        },{
                             name:"Waqar",
                            data:[0,14,39,24,4]

                        },{
                             name:"Amir",
                            data:[0,4,4,15,41]

                        }]
            });


    }])



    .controller('match_bat_2',['$scope',function($scope){

        Highcharts.chart('match_bat_2',{
                    chart:{
                        type:'bar'
                    },

                    title:{
                        text:'Partnership Analysis of the team'
                    },

                    xAxis: {
                        categories:['1','2','3','4','5','6','7','8','9','10'],
                        title:{
                           text:'Partnership No'
                        }
                    },
                    yAxis:{
                        minTickInterval:10,
                        title:{
                            text:'Runs'
                        }
                    },

                     plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },

				    series: [{
                            name:"Shoaib",
                            data:[2,0,0,0]
                        },{
                             name:"Inzamam",
                            data:[40,5,0,0]
                        },{
                             name:"Shoaib khan",
                             data:[0,61,7,4]
                          },{
                            name:"Razzaq khan",
                            data:[0,0,17,4]
                          }]
            });


    }])




    .controller('match_bat_1',['$scope',function($scope){

        Highcharts.chart('match_bat_1', {

                    chart:{
                        type:'column'
                    },

                    title:{
                        text:'Run contribution of each batsman'
                    },

                    xAxis: {
                        categories: ['10', '20', '30', '40', '50'],
                        title:{
                          text:'Per 10 overs'
                        }
                    },
                    yAxis:{
                       type:'linear',
                        title:{
                            text:'Runs'
                        }
                    },

                     plotOptions: {
                        column: {
                            stacking: 'normal'
                        }
                    },

				    series: [{
                            name:"Yasir",
                            data:[2,4,0,0,0]
                        },{
                             name:"Inzamam",
                            data:[0,4,5,3,0]
                        },{
                             name:"Imran khan",
                            data:[0,4,0,4,4]
                          },{
                            name:"Sayeed Anwar",
                            data:[5,5,10,0,0]
                          },{
                            name:"Sayeed Anwar",
                            data:[0,0,10,20,4]

                          }


                      ]
				});

    }])





     .controller('match_team1',['$scope',function($scope){
           Highcharts.chart('team1', {

				   chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Historic World Population by Region'
                    },
                    subtitle: {
                        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
                    },
                    xAxis: {
                        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Population (millions)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' millions'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    name: 'Year 2012',
                    data: [1052, 954, 4250, 740, 38]
                }]
           });
         Highcharts.chart('team2',{
              chart: {
                  type: 'column'
                },
                title: {
                    text: 'Monthly Average Rainfall'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                }, {
                    name: 'Berlin',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

                }]
         });

     }])
    .controller('home',['$scope',function($scope){

            AmCharts.makeChart( "mapdiv", {
                    /**
                     * this tells amCharts it's a map
                     */
                    "type": "map",

                    /**
                     * create data provider object
                     * map property is usually the same as the name of the map file.
                     * getAreasFromMap indicates that amMap should read all the areas available
                     * in the map data and treat them as they are included in your data provider.
                     * in case you don't set it to true, all the areas except listed in data
                     * provider will be treated as unlisted.
                     */
                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true
                    },

                    /**
                     * create areas settings
                     * autoZoom set to true means that the map will zoom-in when clicked on the area
                     * selectedColor indicates color of the clicked area.
                     */
                    "areasSettings": {
                      "autoZoom": true,
                      "selectedColor": "#CC0000"
                    },

                    /**
                     * let's say we want a small map to be displayed, so let's create it
                     */
                    "smallMap": {}
                  } );

    }])
    .controller('player',function(){
        Highcharts.chart('container',{
             chart: {
                type: 'column'
             },

            title: {
                text: 'Batting Performance'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]

    });

    });
