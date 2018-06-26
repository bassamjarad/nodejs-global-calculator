
module.exports.calculate = function( exp )
{
    let result = eval( exp );
    console.log( "calculating %s", exp );
    console.log( result );
};
