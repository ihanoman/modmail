const process = require("process");

module.exports = {
  client: {
    token:
      "", // ← Your bot token (.env IS RECOMMENDED)
    id: "1208003602715779102", // ← Your bot ID
  },
  modmail: {
    guildId: "1188156317311959100", // ← Your server ID
    categoryId: "1206579488666947584", // ← The modmail category ID
    staffRoles: ["1206579427140575263"], // ← The modmail staff roles IDs
    mentionStaffRolesOnNewMail: true, // ← Mention staff roles when there is a new mail?
  },
  logs: {
    webhookURL:
      "https://discord.com/api/webhooks/1212901894356209746/dd-5KOuAYfO_6k3kyUyZWfd32e11TmKjAlQ9E-ymM6hssE_gTUd0smVZFIRsa_YcLMKy", // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
  },
};
