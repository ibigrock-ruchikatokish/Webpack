
const config = {
  context : __dirname + '/src',
  entry:  ["./fileA.js","./fileB.js","./Mickey_Mouse.jpg","./style.css"],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module:{
	rules: [
      {
          test: /\.js$/,
          use: [ 'script-loader' ],
          include: __dirname + '/src',
          exclude: /node_modules/
      },{
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
              'style-loader',
              'css-loader'
         ]
      },{
          test: /\.(jpg|png)$/, 
          loader: 'file-loader?name=[path][name].[ext]', 
          include: __dirname + '/src'
      }
    ]
}
};

module.exports = config;

