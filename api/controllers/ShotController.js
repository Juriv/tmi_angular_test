module.exports = {
	find: function( req, res ) {
		var page = parseInt( req.query.page ) - 1 || 0;
		var limit = parseInt( req.query.limit ) || 10;

		if( page < 0 ) {
			return res.json( {
				success: false
			} );
		}

		Shot.find( {
			limit: limit,
			skip: page * limit
		} ).exec( function( err, images ) {
			if( err ) {
				return res.serverError();
			}

			res.json( images );
		} );
	},
	count: function( req, res ) {
		Shot.count().exec( function( err, count ) {
			if( err ) {
				return res.serverError();
			}

			res.json( count );
		} );
	}
};