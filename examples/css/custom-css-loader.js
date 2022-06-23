var globalStyle = `body {
  margin: 0; 
}

`;

module.exports = function (content) {
  const callback = this.async();
  console.log(content);
  callback(null, globalStyle + content);
};
