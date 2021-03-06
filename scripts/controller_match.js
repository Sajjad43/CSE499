var app=angular.module('match',["highcharts-ng"])

     .controller('map',['$scope',function($scope){

            AmCharts.makeChart( "mapdiv", {
               
                    "type": "map",
                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true
                    },
                    "areasSettings": {
                        "autoZoom": true,
                        "selectedColor": "#CC0000"
                    },
                    
                    "smallMap": {}
                  });

        }])
    
      .controller('pagination',['$scope',function($scope){

           
            $scope.team1='./views/match_bat_2.html';
            $scope.team2='./views/match_bat_1.html';
            $scope.item=0;
        
            $scope.changePage=function(name){
                $scope.team1='./views/'+name;
                console.log(name);
            };
            $scope.changePage1=function(name){
                $scope.team2='./views/'+name;
            };
            
            

     }])
     
     .controller('match_bowl_3',['$scope',function($scope){
       
         $scope.chartOptions={
               
               options:{
                chart:{}
               },
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
                            color:'black'
                        }
                    }]
                },
                loading:false,
                series: [{
                    type: 'column',
                    name: 'Jane',
                    data: [3, 2, 1, 3]
                },{
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

        };
        
       
    }])

    .controller('match_bowl_2',['$scope',function($scope){

             $scope.chartOptions={

                    options:{
                            chart:{
                                 type:'heatmap',
                                  marginTop: 40,
                                  marginBottom: 80,
                                  plotBorderWidth: 1

                              },

                            colorAxis: {
                                    min: 0,
                                    minColor: '#FFFFFF',
                                    maxColor: Highcharts.getOptions().colors[0]
                             },

                            legend: {
                                align: 'right',
                                layout: 'vertical',
                                margin: 0,
                                verticalAlign: 'top',
                                y: 25,
                                symbolHeight: 280
                            },
                          
                      },
                      title:{
                         text:"Batsman VS Bowler"
                      },
                      xAxis:{
                        categories:['Shoaib','Khalid','Sami','Razzaq','Shafiq','Azhar','Yaqat','Hayes','Nana'],
                          title:{
                              text:'Batsaman'
                          }
                      },
                      yAxis:{
                        categories:['Balaji','RP Singh','Yuvraj','Dravid'],
                        title:{
                            text:'Bowler'
                        }  
                      },
                    loading:false,
                 
                    series:[{
                      name:'Batsman and Bowler',
                      borderWidth:1,
                      data:[[0,0,33],[0,1,42],[0,2,34],[0,3,94],
                            [1,0,23],[1,1,4],[1,2,54],[1,3,54],
                            [2,0,23],[2,1,2],[2,2,24],[2,3,24],
                            [3,0,2],[3,1,24],[3,2,54],[3,3,34],
                            [4,0,2],[4,1,24],[4,2,54],[4,3,34],
                            [5,0,2],[5,1,24],[5,2,54],[5,3,34],
                            [6,0,2],[6,1,24],[6,2,54],[6,3,34],
                            [7,0,2],[7,1,24],[7,2,54],[7,3,34],
                            [8,0,2],[8,1,24],[8,2,54],[8,3,34],
                            
                          ],
                      dataLabels:{
                         enabled:true,
                         color:'#000000'
                       }
                    }]

            };


    }])

    .controller('match_bat_3',['$scope',function($scope){
       
        var marker={
                           
                    fillColor:'white',
                    lineWidth:2,
                    radius:6,
                    states:{
                        hover:{
                             fillColor:'white',
                             lineWidth:2,
                              lineColor:Highcharts.getOptions().colors[7]
                             }

                    },
                    lineColor: Highcharts.getOptions().colors[7]
                };
                
        $scope.chartOptions={

            
            
            options:{
                chart:{
            
                }
            },
            title:{
              text:"Run comparison analysis"
            },

            xAxis:{

                title:{
                    text:'Overs'
                },
                type:"linear",
                tickInterval:10,
                min:0,
                max:50
                
            },
            yAxis:{
                title:{
                    text:'Runs'
                }
            },
            series:[
                 {
                    name:'team 1',
                    data:[[0,0],{
                        x:10,        
                        y: 40,
                        marker:marker
            
                    },[20,60],{
                        x:30,        
                        y: 120,
                        marker:marker
            
                    },[40,200],[50,250]]

                },{
                    name:'team 2',
                    data:[[0,0],{
                        x:5,        
                        y: 40.5,
                        marker:marker
            
                    },[10,35],[20,43],[30,56],{
                        x:40,        
                        y: 205,
                        marker:marker }]

                }]

        };
       
    }])

     .controller('match_bowl_1',['$scope',function($scope){
  
          $scope.chartOptions={
                    
                    options:{
                         chart:{
                             type:'bar'
                         }
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
                             data:[{x:0,y:23},{x:2,y:45}]
                        },{
                             name:"Inzamam",
                            data:[0,4,25,134,0]
                        },{
                             name:"Shoaib khan",
                            data:[{x:2,y:25},{x:0,y:47},{x:4,y:23}]
                        },{
                             name:"Waqar",
                            data:[0,14,39,24,4]

                        },{
                             name:"Amir",
                            data:[0,4,4,15,41]

                        }]
                };
        
     }])

    .controller('match_bat_2',['$scope',function($scope){
        
            $scope.chartOptions={
                    
                options:{
                        chart:{
                            type:'column',
                        }
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
                        },column:{
                            pointPadding:0.5
                        }
                    },

				 series: [{
                            name:"Shoaib",
                            data:[{x:0,y:23},{x:2,y:45}]
                        },{
                             name:"Inzamam",
                             data:[{x:2,y:25},{x:0,y:47},{x:4,y:23}]
                        },{
                             name:"Shoaib khan",
                             data:[0,61,0,4]
                          },{
                            name:"Razzaq khan",
                            data:[0,0,0,4]
                        },{
                            name:"Sajjad",
                            data:[{x:9,y:35}]
                     }]
            };
     
    }])

    .controller('match_bat_1',function($scope){
        
        $scope.chartOptions={

                options:{
                    chart:{
                        type:'bar'
                    
                    }
                },
                title:{
                        text:'Run contribution of each batsman'
                    },
                xAxis: {
                        categories: ['10', '20', '30', '40', '50'],
                        title:{
                          text:'Per 10 overs'
                        },
                      
                      
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
                loading:false,
				series: [{
                            name:"Yasir",
                            data:[{x:0,y:6},{x:4,y:7}]
                        },{
                             name:"Inzamam",
                            data:[54,4,5,3,0]
                        },{
                             name:"Imran khan",
                            data:[0,4,0,0,4]
                          },{
                            name:"Sayeed Anwar",
                            data:[0,5,10,0,0]
                          },{
                            name:"Shoaib malik",
                            data:[0,0,10,20,4]
                          },{
                             name:"Hussain Anwar",
                            data:[0,0,10] 
                          },{
                              name:"Afridi Anwar",
                            data:[0,0,19]
                          }]
				};
            
      });



