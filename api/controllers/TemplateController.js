module.exports = {
	findOne: function( req, res ){
		res.view( req.path.substring(1) );
	}
};