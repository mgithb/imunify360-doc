(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{375:function(a,t,s){"use strict";s.r(t);var e=s(34),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ids-integrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ids-integrations","aria-hidden":"true"}},[a._v("#")]),a._v(" IDS Integrations")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#csf-integration"}},[a._v("CSF Integration")])]),s("li",[s("a",{attrs:{href:"#cxs-integration"}},[a._v("CXS Integration")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"csf-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csf-integration","aria-hidden":"true"}},[a._v("#")]),a._v(" CSF Integration")]),a._v(" "),s("p",[a._v("It is possible to use "),s("span",{staticClass:"notranslate"},[s("a",{attrs:{href:"https://www.configserver.com/cp/csf.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ConfigServer Security & Firewall (CSF)"),s("OutboundLink")],1)]),a._v("  along with Imunify360.")]),a._v(" "),s("p",[a._v("Imunify360 automatically detects that CSF is running (you can enable it anytime). Imunify360 "),s("RouterLink",{attrs:{to:"/dashboard/#blocked-ports"}},[a._v("Blocked Ports")]),a._v(", "),s("RouterLink",{attrs:{to:"/dashboard/#dos-protection"}},[a._v("DoS Protection")]),a._v(" and "),s("RouterLink",{attrs:{to:"/dashboard/#smtp-traffic-manager"}},[a._v("SMTP Traffic Manager")]),a._v(" features are automatically disabled in this case. In general:")],1),a._v(" "),s("ul",[s("li",[s("span",{staticClass:"notranslate"},[a._v("Black List, Gray List")]),a._v(", and "),s("span",{staticClass:"notranslate"},[a._v("White List")]),a._v(" can be managed in Imunify360 regardless of "),s("span",{staticClass:"notranslate"},[a._v("CSF")]),a._v(".")]),a._v(" "),s("li",[s("span",{staticClass:"notranslate"},[a._v("CSF Allow, Deny")]),a._v(" and "),s("span",{staticClass:"notranslate"},[a._v("Ignore Lists")]),a._v(" are not automatically imported from "),s("span",{staticClass:"notranslate"},[a._v("CSF")]),a._v(". They can still be managed using "),s("span",{staticClass:"notranslate"},[a._v("CSF")]),a._v(" interface.")]),a._v(" "),s("li",[a._v("Imunify360 will not block addresses from "),s("span",{staticClass:"notranslate"},[a._v("CSF Allow")]),a._v(" and "),s("span",{staticClass:"notranslate"},[a._v("Ignore Lists")]),a._v(".")])]),a._v(" "),s("p",[a._v("To check that running "),s("span",{staticClass:"notranslate"},[a._v("CSF")]),a._v(" is detected, go to "),s("span",{staticClass:"notranslate"},[a._v("Imunify360 → Firewall tab → White List")]),a._v(" section and check if there is a warning message "),s("span",{staticClass:"notranslate"},[a._v('"'),s("em",[a._v("CSF is enabled. Please manage IPs whitelisted in CSF using CSF user interface or config file")]),a._v('"')]),a._v(".")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/firewallblacklistwarning_zoom70.png",alt:""}})]),a._v(" "),s("p",[s("strong",[s("span",{staticClass:"notranslate"},[a._v("Mod_security")]),a._v(" recommendations")])]),a._v(" "),s("p",[a._v("When "),s("span",{staticClass:"notranslate"},[a._v("mod_security")]),a._v(" is configured with "),s("span",{staticClass:"notranslate"},[a._v("SecRuleEngine On")]),a._v(" (blocking mode), "),s("span",{staticClass:"notranslate"},[a._v("CSF")]),a._v(" blocks IP addresses by "),s("span",{staticClass:"notranslate"},[a._v("mod_security")]),a._v(" events. The number of events to block IP address is defined by "),s("span",{staticClass:"notranslate"},[s("code",[a._v("LF_MODSEC")])]),a._v(" variable in "),s("span",{staticClass:"notranslate"},[s("code",[a._v("csf.conf")])]),a._v(". This can lead to a large number of false positives.")]),a._v(" "),s("p",[a._v("We recommend to set "),s("span",{staticClass:"notranslate"},[s("code",[a._v("LF_MODSEC")])]),a._v(" variable to 0.")]),a._v(" "),s("p",[a._v("In this case, Imunify360 will block IPs only by "),s("span",{staticClass:"notranslate"},[a._v("mod_security")]),a._v(" events with high severity.")]),a._v(" "),s("h4",{attrs:{id:"_3-rd-party-integration-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-rd-party-integration-mode","aria-hidden":"true"}},[a._v("#")]),a._v(" 3-rd Party Integration mode")]),a._v(" "),s("p",[a._v("The main setting that defines how Imunify360 works along with CSF is "),s("a",{attrs:{href:"https://docs.imunify360.com/dashboard/#_3-rd-party-integration",target:"_blank",rel:"noopener noreferrer"}},[a._v("3-rd Party Integration"),s("OutboundLink")],1),a._v(" switch. (The "),s("RouterLink",{attrs:{to:"/config_file_description/"}},[a._v("config file")]),a._v(" equivalent is "),s("code",[a._v("CSF_INTEGRATION.catch_lfd_events")]),a._v("). When this mode is "),s("strong",[a._v("disabled")]),a._v(" (default), CSF and Imunify360 work as two independent solutions (with redundant modules disabled on the Imunify360 side - see above).")],1),a._v(" "),s("p",[a._v("When 3-rd Party Integration mode is "),s("strong",[a._v("enabled")]),a._v(" Imunify360 uses "),s("span",{staticClass:"notranslate"},[a._v("Login Failure Daemon (LFD)")]),a._v(" as source for security events instead of "),s("span",{staticClass:"notranslate"},[s("a",{attrs:{href:"https://www.ossec.net",target:"_blank",rel:"noopener noreferrer"}},[a._v("OSSEC"),s("OutboundLink")],1)]),a._v(". To get events from "),s("span",{staticClass:"notranslate"},[a._v("Login Failure Daemon (LFD)")]),a._v(", Imunify360 automatically replaces "),s("span",{staticClass:"notranslate"},[s("code",[a._v("BLOCK_REPORT")])]),a._v(" variable to the file path of Imunify360 script.\nWhen some IP address is blocked by "),s("span",{staticClass:"notranslate"},[a._v("LFD, Imunify360")]),a._v(" adds this IP address to its "),s("span",{staticClass:"notranslate"},[a._v("Graylist")]),a._v(" and then "),s("strong",[a._v("removes it from "),s("span",{staticClass:"notranslate"},[a._v("CSF deny/tempdeny lists")])]),a._v(". The latter is done to allow the IP to have access to the Captcha and to store all automatically blocked IP addresses in a single place. Thus, no IP is automatically added to "),s("span",{staticClass:"notranslate"},[a._v("CSF deny/tempdeny lists")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"cxs-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cxs-integration","aria-hidden":"true"}},[a._v("#")]),a._v(" CXS Integration")]),a._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("a",{attrs:{href:"https://configserver.com/cp/cxs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ConfigServer eXploit Scanner"),s("OutboundLink")],1),a._v(" (CXS)")]),a._v(" has different types of malware scanning, which affects "),s("span",{staticClass:"notranslate"},[a._v("Imunify360 Malware Scanner")]),a._v(" functionality. Below we describe how to make "),s("span",{staticClass:"notranslate"},[a._v("Imunify360 Malware Scanner")]),a._v(" work properly. These functionalities can be configured at "),s("span",{staticClass:"notranslate"},[s("RouterLink",{attrs:{to:"/dashboard/#settings"}},[a._v("Malware Scanner settings")])],1),a._v(" page, but "),s("span",{staticClass:"notranslate"},[a._v("CXS")]),a._v(" itself must be configured  as follows:")]),a._v(" "),s("ol",[s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[a._v("Automatically scan all modified files")])])]),a._v(" "),s("p",[s("span",{staticClass:"notranslate"},[a._v("CXS Watch")]),a._v(" daemon must be disabled.")])]),a._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[a._v("Automatically scan any files uploaded using web")])])]),a._v(" "),s("p",[s("span",{staticClass:"notranslate"},[a._v("CXS ModSecurity")]),a._v(" vendor should be disabled.")])]),a._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[a._v("Automatically scan any file uploaded using ftp")])])]),a._v(" "),s("p",[a._v("Imunify360 supports only "),s("span",{staticClass:"notranslate"},[s("a",{attrs:{href:"https://www.pureftpd.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pure-FTPd"),s("OutboundLink")],1)]),a._v(". For "),s("span",{staticClass:"notranslate"},[a._v("Pure-FTPd CXS")]),a._v(" launches pure-uploadscript for the scan. Any pure-uploadscript used by "),s("span",{staticClass:"notranslate"},[a._v("CXS")]),a._v(" must be disabled. You can use the following commands to do that:")])])]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl stop pure-uploadscript.service\n")])])])]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl disable pure-uploadscript.service\n")])])])]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl restart imunify360\n")])])])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[a._v("On-Demand scanning")])])]),a._v(" "),s("p",[a._v("This type of scanning can be always run by Imunify360 and "),s("span",{staticClass:"notranslate"},[a._v("CXS")]),a._v(" separately. No special actions required.")])])]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),s("p",[a._v("Imunify360 doesn’t make any imports from "),s("span",{staticClass:"notranslate"},[a._v("CXS")]),a._v(".")])])])},[],!1,null,null,null);t.default=n.exports}}]);