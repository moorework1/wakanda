
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var Acres = {};	// @textField
	var Claims = {};	// @textField
	var FlatPerc = {};	// @textField
	var FlatAge = {};	// @textField
	var MetalAge = {};	// @textField
	var ArchAge = {};	// @textField
	var TileAge = {};	// @textField
	var ShingleAge = {};	// @textField
	var HomeAge = {};	// @textField
	var coverA = {};	// @textField
// @endregion// @endlock
function variablegrab() {
	    var policytypevar = $$('PolicyType').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		var shinglevar = $$('Shingle').getValue(); 
		var trampolinevar = $$('Trampoline').getValue(); 
		var dogvar = $$('Dog').getValue(); 
		var farmanimalvar = $$('FarmAnimal').getValue(); 
		var poolslidevar = $$('PoolSlide').getValue();   
		var windpoolvar = $$('Windpool').getValue();   
		var tileagevar = $$('TileAge').getValue(); 
		var metalagevar = $$('MetalAge').getValue(); 
		var archagevar = $$('ArchAge').getValue(); 
		var flatagevar = $$('FlatAge').getValue(); 
		var flatpercvar = $$('FlatPerc').getValue();   
		var inspectedvar = $$('Inspected').getValue(); 
		var homeagevar = $$('HomeAge').getValue(); 
		var daylapsevar = $$('DayLapse').getValue(); 
		var conoccvar = $$('ConOcc').getValue(); 
		var nonconoccvar = $$('NonConOcc').getValue(); 
		var maxrentvar = $$('MaxRent').getValue();   
		var acresvar = $$('Acres').getValue(); 
		var claimsvar = $$('Claims').getValue(); 
		var bankruptcyvar = $$('Bankruptcy').getValue(); 
		var townhomevar = $$('Townhome').getValue(); 
		var gatevar = $$('Gate').getValue(); 
		var managervar = $$('Manager').getValue(); 
		var patrolvar = $$('Patrol').getValue(); 
		var nonevar = $$('None').getValue(); 
		var pc9var = $$('PC9').getValue(); 
		var pc10var = $$('PC10').getValue(); 
		var trustvar = $$('Trust').getValue(); 
		var crawlspacevar = $$('Crawlspace').getValue(); 
		var countyvar = $$('County').getValue(); 
		var freqrentvar = $$('FreqRent').getValue();  
		var piervar = $$('Pier').getValue(); 
		var federalpanelvar = $$('FederalPanel').getValue(); 
		var wiringvar = $$('Wiring').getValue(); 
		var foreclosurevar = $$('Foreclosure').getValue(); 
		var waterclaimvar = $$('WaterClaim').getValue();  
		var barriervar = $$('Barrier').getValue(); 
		var barsvar = $$('Bars').getValue(); 
		var windowacvar = $$('WindowAC').getValue(); 
		var llcvar = $$('LLC').getValue(); 
		var plumbingvar = $$('Plumbing').getValue(); 
		
};
function standardquery () {
	    
		sources.dataClass1.query('PolicyType = :1 AND SMaxShingle >= :2', { params: [(policytypevar + "*"),coveravar]});
};
function underwritingquery () {
	    
		sources.dataClass1.query('PolicyType = :1 AND SMaxShingle >= :2, AND STrampoline = :2         SMinCovA <= :2', { params: [(policytypevar + "*"),coveravar]});
};

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock


	};// @lock

	Acres.keyup = function Acres_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	Claims.keyup = function Claims_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	FlatPerc.keyup = function FlatPerc_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	FlatAge.keyup = function FlatAge_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	MetalAge.keyup = function MetalAge_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	ArchAge.keyup = function ArchAge_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	TileAge.keyup = function TileAge_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	ShingleAge.keyup = function ShingleAge_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	HomeAge.keyup = function HomeAge_keyup (event)// @startlock
	{// @endlock
		var policytypevar = $$('PolicyType').getValue(); 
		var carriervar = $$('carrier').getValue(); 
		var coveravar = $$('coverA').getValue(); 
		sources.dataClass1.query('PolicyType = :1 AND Carrier = :2 AND SMinCovA <= :3', { params: [(policytypevar + "*"),(carriervar + "*"),coveravar]});
	};// @lock

	coverA.keyup = function coverA_keyup (event)// @startlock
	{// @endlock
		variablegrab();
standardquery();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("Acres", "keyup", Acres.keyup, "WAF");
	WAF.addListener("Claims", "keyup", Claims.keyup, "WAF");
	WAF.addListener("FlatPerc", "keyup", FlatPerc.keyup, "WAF");
	WAF.addListener("FlatAge", "keyup", FlatAge.keyup, "WAF");
	WAF.addListener("MetalAge", "keyup", MetalAge.keyup, "WAF");
	WAF.addListener("ArchAge", "keyup", ArchAge.keyup, "WAF");
	WAF.addListener("TileAge", "keyup", TileAge.keyup, "WAF");
	WAF.addListener("ShingleAge", "keyup", ShingleAge.keyup, "WAF");
	WAF.addListener("HomeAge", "keyup", HomeAge.keyup, "WAF");
	WAF.addListener("coverA", "keyup", coverA.keyup, "WAF");
// @endregion
};// @endlock
