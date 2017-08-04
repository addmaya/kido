jQuery(document).ready(function($) {
    
    $('.c-profiler-nav .is-active').removeClass('is-active');
    $('#c-profiler-nav__3').addClass('is-active');

    var stepValue = $('#toleranceStep .o-step__value');
    var newScore = 4;

    var scores = [];
    var tolerances = [];
    var portfolios = [];
    var portfolio = newScore;
    var portfolioRange = [];
    var investor = '';
    var scoreIndex = 0;
    
    var tolerance = newScore;
    var riskRange = [];
    
    var allocation = [];
	var score = newScore;
    var timeHorizon = 'long_term';   
    
    var cashColor = '#659dd5';
    var bondsColor = '#1995b2';
    var domesticColor = '#58c3bd';
    var regionalColor = '#9dc366';
     
    var sigma = [];
    var lowerRate = 0;
    var upperRate = 0;
    var averageRate = 0;
    
    var investmentHorizon = 20;
    var initialInvestment = 1000000;
    var monthlyInvestment = 300000;
	var annualInvestments = [];
	var investmentYears = [];
    
    var lowerReturns = [];
    var upperReturns = [];
    var averageReturns = [];
    
    var averageReturnSeries = [];
	var returnRangeSeries = [];
	var annualInvestmentSeries = [];
    
    $('#initialInvestment').html(numberWithCommas(initialInvestment));
    $('#monthlyInvestment').html(numberWithCommas(monthlyInvestment));
    $('#investmentHorizon').html(investmentHorizon);
 
    function getLowerRate(r, p){
    	return (r - (2*sigma[p - 1]));
    }

    function getUpperRate(r, p){
    	return (r + (2*sigma[p - 1]));
    }

    function between(x, min, max) {
        return x >= min && x <= max;
    }

    function setShortAllocation(folio){
    	switch (folio){
			case 1:
				allocation = [25.00, 75.00, 0.00, 0.00];
				averageRate = 8.12;
				lowerRate = getLowerRate(averageRate, 1);
				upperRate = getUpperRate(averageRate, 1);
				break;
			case 2:
				allocation = [22.50, 72.50, 2.50, 2.50];
				averageRate = 8.53;
				lowerRate = getLowerRate(averageRate, 2);
				upperRate = getUpperRate(averageRate, 2);
				break;
			case 3:
				allocation = [20.00, 70.00, 5.00, 5.00];
				averageRate = 9.12;
				lowerRate = getLowerRate(averageRate, 3);
				upperRate = getUpperRate(averageRate, 3);
				break;
			case 4:
				allocation = [17.10, 69.40, 5.40, 8.10];
				averageRate = 9.67;
				lowerRate = getLowerRate(averageRate, 4);
				upperRate = getUpperRate(averageRate, 4);
				break;
			case 5:
				allocation = [16.50, 68.50, 6.00, 9.00];
				averageRate = 10.15;
				lowerRate = getLowerRate(averageRate, 5);
				upperRate = getUpperRate(averageRate, 5);
				break;
			case 6:
				allocation = [15.75, 68.00, 6.75, 9.50];
				averageRate = 10.86;
				lowerRate = getLowerRate(averageRate, 6);
				upperRate = getUpperRate(averageRate, 6);
				break;
			case 7:
				allocation = [15.00, 67.50, 7.50, 10.00];
				averageRate = 11.52;
				lowerRate = getLowerRate(averageRate, 7);
				upperRate = getUpperRate(averageRate, 7);
				break;
			case 8:
				allocation = [12.48, 67.13, 7.85, 12.54];
				averageRate = 12.09;
				lowerRate = getLowerRate(averageRate, 8);
				upperRate = getUpperRate(averageRate, 8);
				break;
			case 9:
				allocation = [12.07, 66.47, 8.26, 13.20];
				averageRate = 12.94;
				lowerRate = getLowerRate(averageRate, 9);
				upperRate = getUpperRate(averageRate, 9);
				break;
			case 10:
				allocation = [10.00, 65.00, 10.33, 14.67];
				averageRate = 13.71;
				lowerRate = getLowerRate(averageRate, 10);
				upperRate = getUpperRate(averageRate, 10);
				break;
			default:
				allocation = [];
		}
    }

    function setLongAllocation(folio){
        switch (folio){
			case 1:
				allocation = [20.44, 79.56, 0.00, 0.00];
				averageRate = 9.22;
				lowerRate = getLowerRate(averageRate, 1);
				upperRate = getUpperRate(averageRate, 1);
				break;
			case 2:
				allocation = [14.00, 71.00, 6.44, 8.56];
				averageRate = 9.68;
				lowerRate = getLowerRate(averageRate, 2);
				upperRate = getUpperRate(averageRate, 2);
				break;
			case 3:
				allocation = [13.60, 69.40, 8.00, 9.00];
				averageRate = 10.36;
				lowerRate = getLowerRate(averageRate, 3);
				upperRate = getUpperRate(averageRate, 3);
				break;
			case 4:
				allocation = [11.60, 68.40, 10.00, 10.00];
				averageRate = 10.98;
				lowerRate = getLowerRate(averageRate, 4);
				upperRate = getUpperRate(averageRate, 4);
				break;
			case 5:
				allocation = [11.40, 66.40, 9.60, 12.60];
				averageRate = 11.53;
				lowerRate = getLowerRate(averageRate, 5);
				upperRate = getUpperRate(averageRate, 5);
				break;
			case 6:
				allocation = [9.00, 65.00, 12.00, 14.00];
				averageRate = 12.34;
				lowerRate = getLowerRate(averageRate, 6);
				upperRate = getUpperRate(averageRate, 6);
				break;
			case 7:
				allocation = [7.90, 60.00, 14.10, 18.00];
				averageRate = 13.08;
				lowerRate = getLowerRate(averageRate, 7);
				upperRate = getUpperRate(averageRate, 7);
				break;
			case 8:
				allocation = [6.34, 58.00, 15.66, 20.00];
				averageRate = 13.73;
				lowerRate = getLowerRate(averageRate, 8);
				upperRate = getUpperRate(averageRate, 8);
				break;
			case 9:
				allocation = [5.50, 45.74, 21.44, 27.32];
				averageRate = 14.69;
				lowerRate = getLowerRate(averageRate, 9);
				upperRate = getUpperRate(averageRate, 9);
				break;
			case 10:
				allocation = [5.00, 35.91, 25.19, 33.90];
				averageRate = 15.57;
				lowerRate = getLowerRate(averageRate, 10);
				upperRate = getUpperRate(averageRate, 10);
				break;
			default:
				allocation = [];
		}
    }

    for (y=0; y<(investmentHorizon+1); y++) {
    	investmentYears[y] = (new Date().getFullYear()) + y; 
    	if(y != 0){
    		annualInvestments[y] = initialInvestment + monthlyInvestment*12*y;	
    	} else {
    		annualInvestments[y] = initialInvestment;
    	}
    	annualInvestmentSeries[y] = [investmentYears[y], annualInvestments[y]];
    }
    
    if(timeHorizon == 'long_term'){
		sigma[0] = 0.6;
    	for(i=1; i<10; i++){
	    	sigma[i] = sigma[i-1] + 0.12;
	    }
        setLongAllocation(newScore);
        updateaverageReturns();
    } 

    if(timeHorizon == 'short_term') {
    	sigma[0] = 0.36;
    		for(i=1; i<10; i++){
	    		sigma[i] = sigma[i-1] + 0.1;
	    }
        setShortAllocation(newScore);
        updateaverageReturns();
    }
  	
  	//set defaults
    tolerance = Math.round(newScore);
    riskRange = [tolerance - 1, tolerance, tolerance + 1];
    portfolioRange = [portfolio - 1, portfolio, portfolio + 1];
    stepValue.html(tolerance);
    stepValue.attr('data-index', 1);
    
    $('#asset-a').css({backgroundColor: cashColor});
    $('#asset-b').css({backgroundColor: bondsColor});
    $('#asset-c').css({backgroundColor: domesticColor});
    $('#asset-d').css({backgroundColor: regionalColor});

    //draw allocation pie chart
    var portfolioAllocation = Highcharts.chart('portfolio_allocation', {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    title: {
	        text: null
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    credits: {
	        enabled: false
	    },
	    exporting:{
	        enabled: false
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                distance: -23,
	                format: '{point.percentage:.1f}%',
	                style:{"color": "white", "fontSize": "12px", "fontWeight":"normal", "fontFamily":"Arial", "textOutline": "none" }
	            },
	            showInLegend: true
	        }
	    },
	    legend:{
	        verticalAlign: 'middle',
	        layout: 'vertical',
	        itemMarginBottom: 18,
	        itemStyle: {'fontFamily':'Arial', 'fontWeight':'normal', 'color':'#757575'}
	    },
	    series: [{
	        type: 'pie',
	        name: 'Portfolio Allocation',
	        innerSize: '70%',
	        data: [
			    {y:allocation[0], name: 'Cash', color: cashColor},
			    {y:allocation[1], name: 'Bonds', color: bondsColor},
			    {y:allocation[2], name: 'Domestic Equities', color: domesticColor},
			    {y:allocation[3], name: 'Regional Equities', color: regionalColor}
			]
	    }]
	});


	//draw banded graph
	var portfolioGrowth = Highcharts.chart('portfolio_growth', {
		title: {
		    text: null
		},
	    xAxis: {
	        categories: investmentYears
	    },
	    yAxis: {
	        title: {
            	text: 'Millions (USh)'
	        },
	        labels: {
	            formatter: function () {
	                return this.value / 1000000;
	            }
	        },
	        min: 0
	    },
	    tooltip: {
	        crosshairs: true,
	        shared: true, 
	        formatter: function(){
	        	var s = '<b>' + this.x + '</b>';
	        	var i = _.indexOf(investmentYears, this.x);

	        	s += '<br/> <span style="color:#3fb78b">\u25CF</span>  <b>Contributions: '+ numberWithCommas(Math.round(this.points[0].y))+'</b>';
	        	s += '<br/><span style="color:#238cad">\u25CF</span>  <b>Most Likely: '+ numberWithCommas(Math.round(this.points[1].y))+'</b>';
	            s += '<br/> Best Case: '+ numberWithCommas(Math.round(upperReturns[i]));
	            s += '<br/> Worst Case: '+  numberWithCommas(Math.round(lowerReturns[i]));
            	return s;
	        }
	    },
	    credits: {
	        enabled: false
	    },
	    series: [
	    {
	    	name: 'Contributions',
	        data: annualInvestmentSeries,
	        zIndex: 2,
	        color: '#3fb78b',
	        marker: {
	            lineWidth: 1,
	            lineColor: 'white'
	        }
	    },
	    {
	        name: 'Average Returns',
	        data: averageReturnSeries,
	        zIndex: 1,
	        marker: {
	            fillColor: 'white',
	            lineWidth: 1,
	            lineColor: Highcharts.getOptions().colors[0]
	        }
	    }, 
	    {
	        name: 'Range',
	        data: returnRangeSeries,
	        type: 'arearange',
	        lineWidth: 0,
	        linkedTo: ':previous',
	        color: Highcharts.getOptions().colors[0],
	        fillOpacity: 0.3,
	        zIndex: 0
	    }
	    ]
	});

	function updatePortfolioAllocation(folio){
		debugger;
		averageReturnSeries = [];
		returnRangeSeries = [];
		if(timeHorizon == 'long_term'){
			setLongAllocation(folio);
			updateaverageReturns();

			
			portfolioGrowth.series[1].setData(averageReturnSeries);
			portfolioGrowth.series[2].setData(returnRangeSeries);
			portfolioAllocation.series[0].setData(allocation);
			
		}
		if(timeHorizon == 'short_term'){
			setShortAllocation(folio);
			updateaverageReturns();

			portfolioGrowth.series[1].setData(averageReturnSeries);
			portfolioGrowth.series[2].setData(returnRangeSeries);
			portfolioAllocation.series[0].setData(allocation);
		}
	}


	function updateaverageReturns(){
		for (t=0; t<(investmentHorizon + 1); t++) {

			if(t != 0){
				averageReturns[t] = (12*monthlyInvestment) + averageReturns[t-1] * (1+ (averageRate/100));
				lowerReturns[t] = (12*monthlyInvestment) + lowerReturns[t-1] * (1 + (lowerRate/100));
				upperReturns[t] = (12*monthlyInvestment) + upperReturns[t-1] * (1 + (upperRate/100));


			} else {
				averageReturns[t] = annualInvestments[0];
				lowerReturns[t] = annualInvestments[0];
				upperReturns[t] = annualInvestments[0];
			}

			averageReturnSeries[t] = [investmentYears[t], averageReturns[t]]; 
			returnRangeSeries[t] = [investmentYears[t], lowerReturns[t], upperReturns[t]];
		}

		$('#lowerReturns').html(numberWithCommas(Math.round(lowerReturns[averageReturns.length - 1])));
		$('#upperReturns').html(numberWithCommas(Math.round(upperReturns[averageReturns.length - 1])));
	}


	//step up or down the risk tolerance
	var prevIndex = 0;
	var nextIndex = 2;
	$('#toleranceStep').on('click', 'a', function(e) {
	    e.preventDefault();
	    var me = $(this);
	    
	    var nextButton = $('#toleranceStep .s--plus');
	    var prevButton = $('#toleranceStep .s--minus');

	    //logResults();

	    if(me.hasClass('s--plus')){
	        if(riskRange[nextIndex]){
	            stepValue.html(riskRange[nextIndex]);
	            stepValue.attr('data-index', nextIndex);
	            
	            updatePortfolioAllocation(portfolioRange[nextIndex]);
	         
	            nextIndex += 1;
	            prevIndex += 1;
	        }
	    }
	    else{
	        if(riskRange[prevIndex]){
	            stepValue.html(riskRange[prevIndex]);
	            stepValue.attr('data-index', prevIndex);

	            updatePortfolioAllocation(portfolioRange[prevIndex]);
	            
	            nextIndex -= 1;
	            prevIndex -= 1;
	        }
	    }

	    if(nextIndex > 2){
	        nextButton.removeClass('is-active');
	    }
	    else {
	        nextButton.addClass('is-active');
	    }

	    if(prevIndex < 0){
	        prevButton.removeClass('is-active');
	    }
	    else {
	        prevButton.addClass('is-active');
	    }
	});

    
    function logResults(){
	    console.log('score: '+score+'\n'+'horizon: '+timeHorizon+'\n'+'portfolio: '+portfolio+'\n'+'tolerance: '+tolerance+'\n'+'investor: '+investor+'\n'+'Upper Rate:'+upperRate+'\n'+'Lower Rate:'+lowerRate+'\n'+'Average Rate:'+averageRate);
	
	    console.log('years: '+ investmentYears);
	    console.log('Contributions: '+ annualInvestments);
	    console.log('lower returns: '+ lowerReturns);
	    console.log('upper returns: '+ upperReturns);
	    console.log('average returns: '+ averageReturns);;
    }

    //logResults();
});