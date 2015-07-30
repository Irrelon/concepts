angular.module('oblique.app-templates', ['auth/auth.tpl.html', 'charts/chartjs.tpl.html', 'charts/charts.tpl.html', 'charts/highchart.tpl.html', 'home/home.tpl.html', 'stats/stats.tpl.html']);

angular.module("auth/auth.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.tpl.html",
    "<form novalidate class=\"form-horizontal\" role=\"form\" name=\"loginForm\" ng-submit=\"login()\">\n" +
    "	<div class=\"cover-header\">\n" +
    "		<h1>{{'states.auth.title' | translate}}</h1>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-3 control-label\">Email</label>\n" +
    "		<div class=\"col-sm-9\">\n" +
    "			<input ng-model=\"user.email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required />\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-3 control-label\">Password</label>\n" +
    "		<div class=\"col-sm-9\">\n" +
    "			<input ng-model=\"user.password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required />\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<div class=\"col-sm-offset-3 col-sm-9\">\n" +
    "			<div class=\"checkbox\">\n" +
    "				<label>\n" +
    "					<input type=\"checkbox\">Remember me\n" +
    "				</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<div class=\"col-sm-offset-3 col-sm-9\">\n" +
    "			<button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n" +
    "			<button type=\"reset\" class=\"btn btn-link\">Forgot password?</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "<form novalidate role=\"form\" name=\"registerForm\" ng-submit=\"register()\">\n" +
    "	<h3 class=\"page-header\" translate translate-values=\"{'title': appController.title}\">states.auth.register.title</h3>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input type=\"email\" ng-model=\"user.email\" placeholder=\"Email\" required=\"\" class=\"form-control\"/>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input type=\"password\" ng-model=\"user.password\" placeholder=\"Password\" required=\"\" class=\"form-control\"/>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input type=\"text\" ng-model=\"user.firstname\" placeholder=\"First Name\" class=\"form-control\"/>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input type=\"text\" ng-model=\"user.lastname\" placeholder=\"Last Name\" required=\"\" class=\"form-control\"/>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">{{'states.auth.register.submit' | translate}}</button>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("charts/chartjs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("charts/chartjs.tpl.html",
    "<canvas class=\"chart-base\" chart-type=\"chartjsConfig.type\"\n" +
    "        data=\"chartjsConfig.data\" labels=\"chartjsConfig.labels\" series=\"chartjsConfig.series\"\n" +
    "        legend=\"false\" click=\"onClick\" colours=\"chartjsColors\" options=\"chartjsConfig.options\">\n" +
    "</canvas>\n" +
    "");
}]);

angular.module("charts/charts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("charts/charts.tpl.html",
    "<div class=\"column-layout column-layout-3 spacer-top\">\n" +
    "\n" +
    "	<div class=\"column-left hidden-print\" data-column=\"left\" role=\"complementary\">\n" +
    "        <div class=\"default-layout\">\n" +
    "            <div class=\"panel-group\" id=\"series\" role=\"tablist\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <h4 class=\"panel-title\">\n" +
    "                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#series\" href=\"#seriesBody\">Series</a>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "                    <div id=\"seriesBody\" class=\"panel-collapse collapse in\" role=\"tabpanel\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <labeled-checkbox ng-repeat=\"serie in series\"\n" +
    "                                              ng-model=\"selection.series\"\n" +
    "                                              value=\"serie\" label=\"{{serie.title}}\" checkbox-id=\"{{serie.id}}\"\"></labeled-checkbox>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"column-main\">\n" +
    "        <div class=\"default-layout\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <ul class=\"list-unstyled list-inline  navbar-controls pull-right\" role=\"menu\">\n" +
    "                        <li role=\"menuitem\" tooltip=\"Grafik speichern\">\n" +
    "                            <a href=\"\" role=\"button\">\n" +
    "                                <span class=\"fa fa-save fa-2x\"></span>\n" +
    "                                <span class=\"control-label\">Grafik speichern</span>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                        <li role=\"menuitem\" tooltip=\"Datei exportieren\">\n" +
    "                            <a href=\"\" role=\"button\">\n" +
    "                                <span class=\"fa fa-file-excel-o fa-2x\"></span>\n" +
    "                                <span class=\"control-label\">Datei exportieren</span>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                        <li role=\"menuitem\" tooltip=\"Drucken\">\n" +
    "                            <a href=\"\" role=\"button\">\n" +
    "                                <span class=\"fa fa-print fa-2x\"></span>\n" +
    "                                <span class=\"control-label\">Drucken</span>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <h3 class=\"panel-title\">\n" +
    "                        Ausgaben nach Aufgabengebieten (in Mio.)\n" +
    "                    </h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div ui-view></div>\n" +
    "                </div>\n" +
    "                <div class=\"panel-footer\">\n" +
    "                    <label>Zeitraum</label>\n" +
    "                    <range-slider min=\"{{range.min}}\" max=\"{{range.max}}\" step=\"1\" ng-model=\"range.current\"></range-slider>\n" +
    "                </div>\n" +
    "                <div class=\"panel-footer\">\n" +
    "                    <label>Darstellung</label>\n" +
    "                    <div class=\"radio radio-inline\">\n" +
    "                        <div class=\"radio\">\n" +
    "                            <input type=\"radio\" ng-model=\"chartjsConfig.type\" value=\"Line\" id=\"chart-type-line\">\n" +
    "                            <label for=\"chart-type-line\">Lines</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <input type=\"radio\" ng-model=\"chartjsConfig.type\" value=\"Bar\" id=\"chart-type-bar\">\n" +
    "                            <label for=\"chart-type-bar\">Bars</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"column-right hidden-print\" data-column=\"left\" role=\"complementary\">\n" +
    "        <div class=\"default-layout\">\n" +
    "            <ul class=\"list-unstyled\" data-provides=\"activable\">\n" +
    "                <li class=\"strate-item panel panel-secondary\">\n" +
    "                    <a href=\"#\" class=\"strate-heading panel-heading\">\n" +
    "                        <span class=\"strate-icon toggle\"></span>\n" +
    "                        <span>Allgemeine Erl&auml;uterungen</span>\n" +
    "                    </a>\n" +
    "                    <div class=\"strate-panel strate-extension\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <p>\n" +
    "                                <span>Das Aufgabengebiet Beziehungen zum Ausland - Internatio-nale Zusammenarbeit umfasst schwergewichtig die Ent-wicklungshilfe (60% der Ausgaben), ...</span>\n" +
    "                                <a href=\"#\" class=\"pull-right\">\n" +
    "                                    <span>mehr</span>\n" +
    "                                    <span class=\"fa fa-chevron-right\"></span>\n" +
    "                                </a>\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                <span>Im Aufgabengebiet Landwirtschaft werden Direktzahlungen an die Bauernbetriebe geleistet (60% der Ausgaben), Produktion und Absatz...</span>\n" +
    "                                <a href=\"#\" class=\"pull-right\">\n" +
    "                                    <span>mehr</span>\n" +
    "                                    <span class=\"fa fa-chevron-right\"></span>\n" +
    "                                </a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"strate-item panel panel-secondary\">\n" +
    "                    <a href=\"#\" class=\"strate-heading panel-heading\">\n" +
    "                        <span class=\"strate-icon toggle\"></span>\n" +
    "                        <span>Kommentar zum Budget 2015</span>\n" +
    "                    </a>\n" +
    "                    <div class=\"strate-panel strate-extension\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <p>\n" +
    "                                <span>Die Beziehungen zum Ausland sind wie in den Vorjahren gepr&auml;gt durch den markanten Anstieg der Ausgaben f&uuml;r die Entwicklungszusammen-arbeit. D&auml;mpfend auf das Wachstum wirkt sich...</span>\n" +
    "                                <a href=\"#\" class=\"pull-right\">\n" +
    "                                    <span>mehr</span>\n" +
    "                                    <span class=\"fa fa-chevron-right\"></span>\n" +
    "                                </a>\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                <span>Die Ausgaben f&uuml;r die Landwirtschaft und Ern&auml;hrung sinken um 3,6 Prozent. Dies aufgrund der teilweisen Umsetzung des KAP 2014, der Kompensation von Mindereinnahmen...</span>\n" +
    "                                <a href=\"#\" class=\"pull-right\">\n" +
    "                                    <span>mehr</span>\n" +
    "                                    <span class=\"fa fa-chevron-right\"></span>\n" +
    "                                </a>\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                <a role=\"button\">\n" +
    "                                    <span class=\"fa fa-file-pdf-o fa-3x pull-left text-danger\"></span>\n" +
    "                                    <span>Gesamter Text zu den Aufgabengebieten herunterladen</span>\n" +
    "                                    <span class=\"fa fa-download\"></span>\n" +
    "                                </a>\n" +
    "                                <span class=\"text-muted\">(3 Seiten)</span>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("charts/highchart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("charts/highchart.tpl.html",
    "<highchart config=\"highchartConfig\"></highchart>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"headline headline-lg\">\n" +
    "	<h1>\n" +
    "		<img src=\"./images/oblique-small.png\" alt=\"{{'application.longName' | translate}}\">\n" +
    "		<span class=\"nowrap\">{{'application.longName' | translate}}</span>\n" +
    "	</h1>\n" +
    "	<p class=\"lead\">{{'application.description' | translate}}</p>\n" +
    "	<button class=\"btn btn-primary btn-lg\" ui-sref=\"charts.chartjs\">\n" +
    "		<span class=\"fa fa-line-chart\"></span>\n" +
    "		<span>Charts</span>\n" +
    "	</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("stats/stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stats/stats.tpl.html",
    "<div class=\"default-layout centered-layout\">\n" +
    "    <section class=\"section-breath-bottom\">\n" +
    "        <h2 class=\"section-title\">\n" +
    "            Loading-time for series data\n" +
    "        </h2>\n" +
    "        <p class=\"section-subtitle\">\n" +
    "            Time to download data for a given serie (5o years). Each serie's data is stored in a different JSON file.\n" +
    "        </p>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Network</th>\n" +
    "                    <th>Time [ms] - Average of 10 measurement</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"data in loadingData\">\n" +
    "                    <td>{{data.network}}</td>\n" +
    "                    <td>{{data.time}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"section-breath-bottom\">\n" +
    "        <h2 class=\"section-title\">\n" +
    "            Rendering performance\n" +
    "        </h2>\n" +
    "        <p class=\"section-subtitle\">\n" +
    "            Time needed to render the chart (15 years) using two different libraries (<a href=\"http://www.chartjs.org/\">Chart.js</a> and <a href=\"http://www.highcharts.com/\">Highchart</a>). Tested on Windows 8 (32 GB RAM, Intel i7 QuadCore 2.40GHz) with Chrome v44.\n" +
    "        </p>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th>Series</th>\n" +
    "                <th>Chart.js [ms]</th>\n" +
    "                <th>Highchart [ms]</th>\n" +
    "                <th>Chart.js (Bar) [ms]</th>\n" +
    "                <th>Highchart (Bar) [ms]</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"data in renderingData\">\n" +
    "                <td>{{data.series}}</td>\n" +
    "                <td>{{data.chartjs}}</td>\n" +
    "                <td>{{data.highchart}}</td>\n" +
    "                <td>{{data.chartjs_bar}}</td>\n" +
    "                <td>{{data.highchart_bar}}</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <canvas class=\"chart-base\" chart-type=\"chart.type\"\n" +
    "                data=\"chart.data\" labels=\"chart.labels\" series=\"chart.series\"\n" +
    "                legend=\"true\" click=\"onClick\" colours=\"chartjsColors\">\n" +
    "        </canvas>\n" +
    "    </section>\n" +
    "</div>");
}]);
