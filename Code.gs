function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Cottonwood Canyons Weather Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
