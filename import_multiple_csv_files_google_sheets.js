function importCSVs() {
  var folderId = "ENTER_GOOGLE_DRIVE_FOLDER_ID"; // Replace with the ID of the folder containing your CSV files
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByType(MimeType.CSV);
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var decemberSheet = spreadsheet.getSheetByName("ENTER_TAB_NAME"); // Replace with the name of the tab where you want to import the csvs

  while (files.hasNext()) {
    var file = files.next();
    var csvData = Utilities.parseCsv(file.getBlob().getDataAsString());
    var range = decemberSheet.getRange(decemberSheet.getLastRow() + 1, 1, csvData.length, csvData[0].length);
    range.setValues(csvData);
  },j
}
