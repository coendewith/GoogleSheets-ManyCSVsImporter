function importCSVs() {
  var folderId = "1Pb6rS5RP7KCPa5pe4i8GbVUH3t9FDfiK"; // Replace with the ID of the folder containing your CSV files
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByType(MimeType.CSV);
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var decemberSheet = spreadsheet.getSheetByName("Mon26Feb");

  while (files.hasNext()) {
    var file = files.next();
    var csvData = Utilities.parseCsv(file.getBlob().getDataAsString());
    var range = decemberSheet.getRange(decemberSheet.getLastRow() + 1, 1, csvData.length, csvData[0].length);
    range.setValues(csvData);
  },j
}