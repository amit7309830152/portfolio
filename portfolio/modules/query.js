let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://portfolio:9450533280@cluster-l8bd3.mongodb.net/portfolio_query?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

// mongodb+srv://portfolio:<password>@cluster-l8bd3.mongodb.net/<dbname>?retryWrites=true&w=majority
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected');
});

var query_schema = new mongoose.Schema({
    name: String,
    email: String,
    query: String,
    date: { type: Date, default: Date.now },
});

var query_model = mongoose.model('query_model', query_schema);
module.exports.query_model = query_model;