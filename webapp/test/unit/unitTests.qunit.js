/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zalm_users_ffs/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
