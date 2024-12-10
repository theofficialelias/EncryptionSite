function encode() {
  document.getElementById("output").value = "";
  var keyValue = document.getElementById("encode-key").value;
  var rawText = document.getElementById("encode-message").value;

  if (keyValue === "" || rawText === "") return;

  var encryptedAES = CryptoJS.AES.encrypt(rawText, keyValue);

  document.getElementById("output").value = encryptedAES;
}

function decode() {
  document.getElementById("output").value = "";
  var keyValue = document.getElementById("decode-key").value;
  var rawText = document.getElementById("decode-message").value;

  if (keyValue === "" || rawText === "") return;

  var decryptedBytes = CryptoJS.AES.decrypt(rawText, keyValue);
  var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);

  document.getElementById("output").value = plaintext;
}
