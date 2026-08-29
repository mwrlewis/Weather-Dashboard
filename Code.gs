function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle("Mike's Weather Dashboard")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
