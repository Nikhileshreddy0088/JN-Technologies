var NOTIFY = "connect.jntechnologies@gmail.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var name = String(data.name || "").trim();
    var email = String(data.email || "").trim();
    var service = String(data.service || "").trim();
    var message = String(data.message || "").trim();
    if (!name || !email || !message) {
      return json_({ ok: false });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    if (!sheet.getRange(1, 6).getValue()) {
      sheet.getRange(1, 6).setValue("Time");
    }
    var serial = Math.max(sheet.getLastRow(), 1);
    var time = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, h:mm a");
    sheet.appendRow([serial, name, email, service, message, time]);

    try {
      MailApp.sendEmail({
        to: NOTIFY,
        replyTo: email,
        subject: "Website enquiry from " + name,
        body:
          "Time: " + time + "\n" +
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "What do you need help with?: " + service + "\n\n" +
          message
      });
    } catch (mailError) {}

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false });
  }
}

function doGet() {
  return ContentService.createTextOutput("JN Technologies enquiry sheet is ready.");
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
