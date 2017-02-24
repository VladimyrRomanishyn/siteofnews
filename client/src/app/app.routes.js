"use strict";
var comoposed_component_1 = require("./composed-component/comoposed.component");
var notfound_component_1 = require("./notfound-component/notfound.component");
exports.appRoutes = [
    { path: '', component: comoposed_component_1.ComposedComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map