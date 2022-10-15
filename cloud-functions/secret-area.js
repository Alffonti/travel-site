exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        boyd: "Welcome to our super secret area"
    })
}