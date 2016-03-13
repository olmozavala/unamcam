/**
 * This function defines how many zoom layers are available for each type of 
 * matrixset. If other types of matrixset get added then it is necessary
 * to update the list with the new zoom levels 
 * @param {string} matrixSet Contains a string with a summary of the projection
 * and resolution of the layer.
 * @returns {Number} Number of zoom levels
 */
function obtainZoomLevels(matrixSet){
	switch(matrixSet){
		case "EPSG4326_250m":
			return 9;
		case "EPSG4326_500m":
			return 8;
		case "EPSG4326_1km":
			return 7;
		case "EPSG4326_2km":
			return 6;
	}
	return 9; // by default
}

/**
 * This function receives a 'map' of key values 
 * that represent url parameters and returns
 * the corresponding string "par1=val1&par2=val2&..."
 * @param params - parameter list to add to url
 * @return urlstr - returns the url containing key and value pair. 
 */
function paramsToUrl(params){
	urlstr = '';
	for (var key in params) {
		urlstr += key+"="+ params[key] +"&";
	}
	return urlstr;
};

function makeUnique(inputArray){
	var outputArray = [];
	for (var i = 0; i < inputArray.length; i++) {
		if (($.inArray(inputArray[i], outputArray)) === -1) {
			outputArray.push(inputArray[i]);
		}
	}
	
	return outputArray;
}

/**
 * Function used to sort integer arrays 
 * @param {int} a
 * @param {int} b
 * @returns {int} If a>b postive else negative
 */
function sortNumber(a,b){
	// If a>b postive else negative
	return a-b;
}