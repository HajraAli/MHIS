webpackJsonp([6],{1345:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e){var t=e.programIndicator,r=n(e,["programIndicator"]),i="programIndicator",l=r.params.groupName,s=a.i(_.get)("name",t),d=a.i(_.get)("program.displayName",t);return o.a.createElement("div",{style:j.navigationWrap},o.a.createElement("div",{style:j.heading},o.a.createElement(m.a,{schema:i,groupName:l},a.i(c.camelCaseToUnderscores)(i)),o.a.createElement(u.a,null,s&&d?s+" for "+d:"")),o.a.createElement(p.a,null),o.a.createElement(g.a,f({schema:i},r)),o.a.createElement(O,null,o.a.createElement(v.a,{groupName:l,schema:i})))}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),o=a.n(i),c=a(293),l=(a.n(c),a(87)),s=a.n(l),m=a(1368),u=a(1398),p=a(1524),g=a(1525),d=a(316),_=a(11),h=(a.n(_),a(202)),y=a(153),v=a(1523),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},S=a.i(h.a)(y.b),b=a.i(h.b)(y.c),O=a.i(h.c)(b,S),T=s()(function(e){return e.combineLatest(d.a,function(e,t){return f({},e,{programIndicator:t.programIndicator})})}),j={heading:{display:"flex",flexDirection:"column",marginBottom:"1rem"}};t.default=T(r)},1354:function(e,t,a){"use strict";function n(e){var t=e.major,a=e.minor;return e.snapshot?"master":t+"."+a}function r(e,t){var n=new Map([["objectType",t]]),r=new Map([["objectType",a.i(u.camelCaseToUnderscores)(t)]]),o=Object.keys(m.a).find(function(t){var a=i(t,n);return new RegExp(a).test(e)});return o&&m.a[o]?i(m.a[o],r):""}function i(e,t){var a=/\$\{(.+?)\}/g;return e.replace(a,function(e,a,n){return t.has(a)&&t.get(a)?t.get(a):".+?"})}function o(e,t){var a=e.schema,i=t.d2,o=window.location.hash.replace(/^#/,"").replace(/\?.+?$/,""),c="https://ci.dhis2.org/docs/"+n(i.system.version),s=r(o,a);return s?React.createElement(l.a,{href:""+c+s,target:"_blank",rel:"noopener noreferrer",tooltip:i.i18n.getTranslation("open_user_guide"),tooltipPosition:"bottom-center",iconClassName:"material-icons",iconStyle:{top:-2}},"help_outline"):null}t.a=o;var c=a(46),l=a.n(c),s=a(1355),m=a.n(s),u=a(293);a.n(u);o.contextTypes={d2:React.PropTypes.object}},1355:function(e,t){e.exports={"/edit/categorySection/categoryOptionGroupSet":"/en/user/html/manage_category.html#create_category_option_group_set","/edit/categorySection/categoryOptionGroup":"/en/user/html/manage_category.html#create_category_option_group","/edit/categorySection/categoryOptionCombo":"/en/user/html/manage_category.html#assign_code_category_option_combo","/edit/categorySection/categoryOption":"/en/user/html/manage_category.html#create_category_option","/edit/categorySection/categoryCombo":"/en/user/html/manage_category.html#create_category_combination","/edit/categorySection/category":"/en/user/html/manage_category.html#create_category","/list/categorySection":"/en/user/html/manage_category.html","/edit/dataElementSection/dataElementGroupSet":"/en/user/html/manage_data_element.html#create_data_element_group_set","/edit/dataElementSection/dataElementGroup":"/en/user/html/manage_data_element.html#create_data_element_group","/edit/dataElementSection/dataElement":"/en/user/html/manage_data_element.html#create_data_element","/list/dataElementSection":"/en/user/html/manage_data_element.html","/edit/dataSetSection/dataSet":"/en/user/html/manage_data_set.html#create_data_set","/list/dataSetSection/dataSet":"/en/user/html/manage_data_set.html","/edit/indicatorSection/indicatorGroupSet":"/en/user/html/manage_indicator.html#create_indicator_group_set","/edit/indicatorSection/indicatorGroup":"/en/user/html/manage_indicator.html#create_indicator_group","/edit/indicatorSection/indicatorType":"/en/user/html/manage_indicator.html#create_indicator_type","/edit/indicatorSection/indicator":"/en/user/html/manage_indicator.html#create_indicator","/list/indicatorSection":"/en/user/html/manage_indicator.html","/edit/organisationUnitSection/organisationUnitGroupSet":"/en/user/html/manage_organisation_unit.html#create_organisation_unit_group_set","/edit/organisationUnitSection/organisationUnitGroup":"/en/user/html/manage_organisation_unit.html#create_organisation_unit_group","/edit/organisationUnitSection/organisationUnitLevel":"/en/user/html/manage_organisation_unit.html#name_organisation_unit_level","/edit/organisationUnitSection/organisationUnit":"/en/user/html/manage_organisation_unit.html#create_organisation_unit","/list/organisationUnitSection":"/en/user/html/manage_organisation_unit.html","/edit/programSection/trackedEntityAttributeGroup":"/en/user/html/manage_program_metadata.html#create_tracked_entity_attribute_group","/edit/programSection/trackedEntityAttribute":"/en/user/html/manage_program_metadata.html#create_tracked_entity_attribute","/edit/programSection/relationshipType":"/en/user/html/manage_program_metadata.html#create_relationship_type","/edit/programSection/trackedEntity":"/en/user/html/manage_program_metadata.html#create_tracked_entity","/list/programSection":"/en/user/html/manage_program_metadata.html","/edit/validationSection/validationNotificationTemplate":"/en/user/html/manage_validation_rule.html#create_validation_notification","/edit/validationSection/validationRuleGroup":"/en/user/html/manage_validation_rule.html#create_validation_rule_group","/edit/validationSection/validationRule":"/en/user/html/manage_validation_rule.html#create_validation_rule","/list/validationSection":"/en/user/html/manage_validation_rule.html","/edit/otherSection/legendSet":"/en/user/html/manage_legend.html#create_legend","/list/otherSection/legendSet":"/en/user/html/manage_legend.html","/edit/otherSection/pushAnalysis":"/en/user/html/manage_push_report.html#create_push_report","/list/otherSection/pushAnalysis":"/en/user/html/manage_push_report.html","/edit/otherSection/externalMapLayer":"/en/user/html/manage_external_maplayer.html#create_external_map_layer","/list/otherSection/externalMapLayer":"/en/user/html/manage_external_maplayer.html","/edit/otherSection/${objectType}":"/en/user/html/manage_${objectType}.html#create_${objectType}","/list/otherSection/${objectType}":"/en/user/html/manage_${objectType}.html"}},1356:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var a=t.d2,r=e.isValid,i=e.isSaving,c=e.onClick,s=n(e,["isValid","isSaving","onClick"]),u=i?a.i18n.getTranslation("saving"):a.i18n.getTranslation("save");return o.a.createElement(l.a,m({},s,{primary:!0,onClick:c,label:u,disabled:i||!r}))}var i=a(0),o=a.n(i),c=a(116),l=a.n(c),s=a(33),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};r.propTypes={isSaving:o.a.PropTypes.bool,isValid:o.a.PropTypes.bool,onClick:o.a.PropTypes.func.isRequired},t.a=a.i(s.a)(r)},1366:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var a=e.onClick,r=(e.isPristine,n(e,["onClick","isPristine"])),i=function(){m.a.getState()&&m.a.getState().dirty?confirm(t.d2.i18n.getTranslation("abandon_unsaved_changes"))&&a.apply(void 0,arguments):a.apply(void 0,arguments)};return o.a.createElement(l.a,u({},r,{onClick:i,secondary:m.a.getState()&&m.a.getState().dirty,label:t.d2.i18n.getTranslation("cancel")}))}var i=a(0),o=a.n(i),c=a(34),l=a.n(c),s=a(33),m=a(117),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};r.propTypes={onClick:o.a.PropTypes.func.isRequired},t.a=a.i(s.a)(r)},1367:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var a=e.tooltip,r=e.onClick,i=n(e,["tooltip","onClick"]),c=function(){u.a.getState()&&u.a.getState().dirty?confirm(t.d2.i18n.getTranslation("abandon_unsaved_changes"))&&r.apply(void 0,arguments):r.apply(void 0,arguments)};return o.a.createElement(l.a,p({tooltip:a||t.d2.i18n.getTranslation("back"),tooltipPosition:"bottom-right",onClick:c},i,{iconClassName:"material-icons"}),"")}var i=a(0),o=a.n(i),c=a(85),l=a.n(c),s=a(33),m=a(13),u=(a.n(m),a(117)),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};r.propTypes={tooltip:o.a.PropTypes.string},t.a=a.i(s.a)(r)},1368:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var r=e.level,i=e.schema,c=e.children,g=e.groupName,d=n(e,["level","schema","children","groupName"]);return o.a.createElement(l.a,p({},d,{level:r||2}),o.a.createElement(m.a,{onClick:function(){return a.i(u.a)("/list/"+g+"/"+i)},iconStyle:{top:3}}),t.d2.i18n.getTranslation(c),i&&o.a.createElement(s.a,{schema:i}))}var i=a(0),o=a.n(i),c=a(33),l=a(150),s=a(1354),m=a(1367),u=a(101),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};r.propTypes={children:o.a.PropTypes.string,level:o.a.PropTypes.number},t.a=a.i(c.a)(r)},1397:function(e,t,a){"use strict";function n(e){var t=e.onSaveAction,a=e.onCancelAction;return o.a.createElement("div",null,o.a.createElement(u.a,{onClick:t,isValid:!0}),o.a.createElement(p.a,{onClick:a,style:d.cancelButton}))}function r(e){var t=function(e,t){return function(){return a.i(g.a)("/list/"+e+"/"+t)}};return a.i(m.compose)(s()(function(e){var a=e.groupName,n=e.schema;return{onCancelAction:t(a,n)}}),a.i(c.a)(void 0,e))(n)}t.a=r;var i=a(0),o=a.n(i),c=a(50),l=a(214),s=a.n(l),m=a(11),u=(a.n(m),a(1356)),p=a(1366),g=a(101),d={cancelButton:{marginLeft:"1rem"}}},1398:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e){var t=e.level,a=e.children,r=n(e,["level","children"]),i=Object.assign({},s,r.style);return o.a.createElement(c.a,l({},r,{style:i,level:t||3}),a)}var i=a(0),o=a.n(i),c=a(150),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s={fontSize:"1.25rem",paddingTop:".5rem",fontWeight:100};r.propTypes={children:o.a.PropTypes.string,level:o.a.PropTypes.number},t.a=r},1523:function(e,t,a){"use strict";var n=a(0),r=(a.n(n),a(38)),i=a(153),o=a(1397),c=function(e){return a.i(r.a)({onSaveAction:i.d},e)},l=a.i(o.a)(c);t.a=l},1524:function(e,t,a){"use strict";var n=a(202),r=a(513),i=a(50),o=a(512),c=a(153),l=a(38),s=function(e){return{activeStep:a.i(r.a)(e)}},m=function(e){return a.i(l.a)({stepperClicked:c.f},e)},u=a.i(i.a)(s,m)(a.i(n.e)(o.a));t.a=u},1525:function(e,t,a){"use strict";var n=a(50),r=a(202),i=a(513),o=a(512),c=a(47),l=a.n(c),s=a(87),m=a.n(s),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=Observable.of({}),g=function(e){return{activeStep:a.i(i.a)(e)}},d=l()(a.i(n.a)(g),m()(function(e){return e.combineLatest(p,function(e,t){var a=t.program;return u({},e,{modelToEdit:a})})}))(a.i(r.d)(o.a));t.a=d}});
//# sourceMappingURL=6-7b4b72284bb16785357b.js.map