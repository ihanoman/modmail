const process = require("process");

module.exports = {
  client: {
    token:
      "MTIwODAwMzYwMjcxNTc3OTEwMg.Ggryl5.SHNWTifnOad2EtlL9lE1ZRVhsUcreEXfbW4rtw", // ← Your bot token (.env IS RECOMMENDED)
    id: "1208003602715779102", // ← Your bot ID
  },
  modmail: {
    guildId: "1211696189687468083", // ← Your server ID
    categoryId: "1211697890200658043", // ← The modmail category ID
    staffRoles: ["1211778080352370829"], // ← The modmail staff roles IDs
    mentionStaffRolesOnNewMail: true, // ← Mention staff roles when there is a new mail?
  },
  logs: {
    webhookURL:
      "https://discord.com/api/webhooks/1212901894356209746/dd-5KOuAYfO_6k3kyUyZWfd32e11TmKjAlQ9E-ymM6hssE_gTUd0smVZFIRsa_YcLMKy", // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
  },
};
