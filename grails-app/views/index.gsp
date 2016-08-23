<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>

    <asset:stylesheet src="application.css"/>

    <asset:link rel="icon" href="camaron.png" type="image/x-ico" />

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>
</head>

<body ng-app="ngstore" ng-controller="IndexController as vm">

    <div ui-view="header" class="header"></div>

    <toaster-container toaster-options="
            {
                'position-class': 'toast-top-center',
                'time-out': { 'toast-success': 5000 },
                'close-button': { 'toast-error': true, 'toast-warning': true }
            }">
    </toaster-container>

    <div ui-view="content" id="content" role="main"></div>

    <div ui-view="footer" class="footer" role="contentinfo"></div>

    <div id="spinner" class="spinner" style="display:none;">
        <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <asset:javascript src="/ngstore/ngstore.js" />
</body>
</html>
