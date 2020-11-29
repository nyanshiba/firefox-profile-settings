// https://support.mozilla.org/bm/questions/965842

// enable userChrome
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// https://www.reddit.com/r/FirefoxCSS/comments/gk93p2/help_in_creating_a_transparent_userchromecss/
user_pref("gfx.webrender.all", false);

// change user agent
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0
// https://docs.microsoft.com/en-us/microsoft-edge/web-platform/user-agent-string
// https://support.mozilla.org/en-US/kb/how-reset-default-user-agent-firefox
// user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36");

// change sync interval
user_pref("services.sync.syncInterval", 60000); // default: 600000ms(10min)

// disable smooth scroll
user_pref("general.smoothScroll.mouseWheel", false);

// enable color management
// https://developer.mozilla.org/ja/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
user_pref("gfx.color_management.mode", 2);
//user_pref("gfx.color_management.display_profile", "C:\\Windows\\System32\\spool\\drivers\\color\\sRGB Color Space Profile.icm");
//user_pref("gfx.color_management.display_profile", "C:\\Users\\sbn\\Pictures\\icc\\DCI-P3-D65.icc");
user_pref("gfx.color_management.display_profile", "C:\\Users\\sbn\\Pictures\\icc\\DisplayP3Compat-v4.icc");
user_pref("gfx.color_management.enablev4", true);

// nvdec
// Firefox 82で修正？ https://bugzilla.mozilla.org/show_bug.cgi?id=1570046
// https://www.reddit.com/r/firefox/comments/dx5rml/is_there_any_way_to_stop_the_crash_guard_from/
user_pref("media.hardware-video-decoding.force-enabled", true); // defalut: false
user_pref("media.wmf.vp9.enabled", true); // default: false trueでは↓が3になってしまう
user_pref("gfx.crash-guard.status.wmfvpxvideo", 0); // クラッシュガードが無効化～はこれが3の場合

// font
user_pref("font.name.monospace.ja", "Consolas");
user_pref("font.name.sans-serif.ja", "BIZ UDPゴシック");
user_pref("font.name.serif.ja", "BIZ UDP明朝");

// DirectWrite
user_pref("layers.acceleration.disabled", false);            // default: false
user_pref("layers.acceleration.force-enabled", true);        // default: false
user_pref("gfx.direct2d.disabled", false);                   // default: false
user_pref("gfx.direct2d.force-enabled", true);               // default: false

user_pref("gfx.font_rendering.cleartype.always_use_for_content", true);    // default: false
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);     // default: -1
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", -1);       // default: -1
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5;        // default: -1
user_pref("gfx.font_rendering.directwrite.enabled", true);                 // default: true
user_pref("gfx.use_text_smoothing_setting", true);                         // default: false 

user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);   // default: -1 0は掠れたマジック 50~100が綺麗
user_pref("gfx.font_rendering.cleartype_params.gamma", 3000);   // default: -1 1000 極太マジック ~ 3000 綺麗
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 15);   // default: 15
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");   // default: Arial,Consolas,Courier New,Microsoft Sans Serif,Segoe UI,Tahoma,Trebuchet MS,Verdana
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);   // default: true

// enable userContext
// https://support.mozilla.org/ja/kb/containers
user_pref("privacy.userContext.enabled", true);
