const request = require("request")
module.exports = async options => {
	for ( var i = 0; i < options.attemps || 5; i++ ) {
		var make = await new Promise(resolve => 
			request(options, (error, response, body) => 
				resolve({ error: error, response: response, body: body })
			)
		)
		if( options.hasOwnProperty("attempFunc") ? options.attempFunc.call(make) : make.error == null ) break
	}

	return make
}

module.exports.jar = request.jar;