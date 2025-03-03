package gg.jte.generated.ondemand;
public final class JteindexGenerated {
	public static final String JTE_NAME = "index.jte";
	public static final int[] JTE_LINE_INFO = {0,0,0,0,30,30,30,31,31,31,31,31,31,31,31,31,33,33,33,36,36,36,39,39,48,48,48,0,0,0,0};
	public static void render(gg.jte.html.HtmlTemplateOutput jteOutput, gg.jte.html.HtmlInterceptor jteHtmlInterceptor, java.util.List<dev.danvega.conference.session.Session> sessions) {
		jteOutput.writeContent("\n<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <title>Session List</title>\n</head>\n<body class=\"max-w-6xl mx-auto\">\n\n<h1 class=\"text-3xl font-bold mt-8 mb-8\">\n    DevNexus 2025 Sessions\n</h1>\n\n<div class=\"\">\n    <div class=\"mt-8 flow-root\">\n        <div class=\"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8\">\n                <table class=\"min-w-full divide-y divide-gray-300\">\n                    <thead>\n                    <tr>\n                        <th scope=\"col\" class=\"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\">Title</th>\n                        <th scope=\"col\" class=\"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0\">Name</th>\n                    </tr>\n                    </thead>\n                    <tbody class=\"divide-y divide-gray-200\">\n                    ");
		for (var s : sessions) {
			jteOutput.writeContent("\n                        <tr");
			var __jte_html_attribute_0 = s.title().contains("Workshop") ? "bg-green-100" : "";
			if (gg.jte.runtime.TemplateUtils.isAttributeRendered(__jte_html_attribute_0)) {
				jteOutput.writeContent(" class=\"");
				jteOutput.setContext("tr", "class");
				jteOutput.writeUserContent(__jte_html_attribute_0);
				jteOutput.setContext("tr", null);
				jteOutput.writeContent("\"");
			}
			jteOutput.writeContent(">\n                            <td class=\"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0\">\n                                ");
			jteOutput.setContext("td", null);
			jteOutput.writeUserContent(s.title());
			jteOutput.writeContent("\n                            </td>\n                            <td class=\"whitespace-nowrap px-3 py-4 text-sm text-gray-500\">\n                                ");
			jteOutput.setContext("td", null);
			jteOutput.writeUserContent(s.getSpeakersAsString());
			jteOutput.writeContent("\n                            </td>\n                        </tr>\n                    ");
		}
		jteOutput.writeContent("\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n</body>\n</html>");
	}
	public static void renderMap(gg.jte.html.HtmlTemplateOutput jteOutput, gg.jte.html.HtmlInterceptor jteHtmlInterceptor, java.util.Map<String, Object> params) {
		java.util.List<dev.danvega.conference.session.Session> sessions = (java.util.List<dev.danvega.conference.session.Session>)params.get("sessions");
		render(jteOutput, jteHtmlInterceptor, sessions);
	}
}
