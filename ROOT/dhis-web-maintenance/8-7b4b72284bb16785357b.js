webpackJsonp([8],{1342:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n.n(i),l=n(15),c=n.n(l),d=n(502),u=n(150),h=n(296),p=n(297),f=n.n(p),m=n(294),y=n.n(m),g=n(1513),v=n(1512),b=n(67),T=n(117),C=n(1360),S=function(){function e(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w={heading:{paddingBottom:18},fab:{textAlign:"right",marginTop:"1rem",bottom:"1.5rem",right:"1.5rem",position:"fixed",zIndex:10}},O=function(e){function t(e,n){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={categoryCombos:null,editSectionModel:!1,greyFieldSectionModel:!1},Promise.all([n.d2.Api.getApi().get(["dataSets",e.params.modelId,"categoryCombos"].join("/"),{fields:"id,displayName",paging:!1})]).then(function(e){var t=S(e,1),n=t[0];r.setState({sections:T.a.state.sections.toArray().sort(function(e,t){return e.sortOrder-t.sortOrder}),categoryCombos:n.categoryCombos.map(function(e){return{value:e.id,text:"default"===e.displayName?r.getTranslation("none"):e.displayName}})})}),r.handleAddSectionClick=r.handleAddSectionClick.bind(r),r.handleEditSectionClick=r.handleEditSectionClick.bind(r),r.handleSectionSaved=r.handleSectionSaved.bind(r),r.handleDeleteSectionClick=r.handleDeleteSectionClick.bind(r),r.handleTranslateSectionClick=r.handleTranslateSectionClick.bind(r),r.handleTranslationSaved=r.handleTranslationSaved.bind(r),r.handleTranslationErrored=r.handleTranslationErrored.bind(r),r.handleSectionGreyFieldsClick=r.handleSectionGreyFieldsClick.bind(r),r.swapSections=r.swapSections.bind(r),r.moveSectionUp=r.moveSectionUp.bind(r),r.moveSectionDown=r.moveSectionDown.bind(r),r.getTranslation=n.d2.i18n.getTranslation.bind(n.d2.i18n),r}return r(t,e),E(t,[{key:"handleAddSectionClick",value:function(){var e=this.context.d2.models.sections.create();this.setState(function(t){return{editSectionModel:Object.assign(e,{dataSet:{id:T.a.state.id},sortOrder:t.sections.reduce(function(e,t){return Math.max(t.sortOrder,e)},0)+1})}})}},{key:"handleEditSectionClick",value:function(e){this.setState({editSectionModel:e})}},{key:"handleSectionSaved",value:function(e){var t=this;this.setState(function(t){var n=!1,a=t.sections.map(function(t){return t.id===e.id?(n=!0,e):t}).sort(function(e,t){return e.sortOrder-t.sortOrder});return n||a.push(e),T.a.setState(Object.assign(T.a.state,{sections:a})),{editSectionModel:!1,greyFieldSectionModel:!1,sections:a}},function(){t.forceUpdate()})}},{key:"handleDeleteSectionClick",value:function(e){var t=this;b.a.show({message:this.getTranslation("confirm_delete_section")+" "+e.displayName,action:"confirm",onActionTouchTap:function(){e.delete().then(function(){var n=T.a.state.sections;T.a.setState(Object.assign(T.a.state,{sections:(Array.isArray(n)?n:n.toArray()).filter(function(t){return t.id!==e.id})})),b.a.show({message:t.getTranslation("section_deleted")}),t.setState(function(t){return{sections:t.sections.filter(function(t){return t.id!==e.id})}})}).catch(function(e){b.a.show({message:t.getTranslation("failed_to_delete_section"),action:"ok"}),c.a.warn("Failed to delete section",e)})}})}},{key:"handleTranslateSectionClick",value:function(e){this.setState({translationModel:e})}},{key:"handleTranslationSaved",value:function(){b.a.show({message:"translation_saved",translate:!0})}},{key:"handleTranslationErrored",value:function(e){c.a.error(e),b.a.show({message:"translation_save_error",action:"ok",translate:!0})}},{key:"handleSectionGreyFieldsClick",value:function(e){this.setState({greyFieldSectionModel:e})}},{key:"swapSections",value:function(e,t){var n=this;this.setState(function(a){var o=e.sortOrder;return e.sortOrder=t.sortOrder,t.sortOrder=o,Promise.all([e.save(),t.save()]).then(function(){b.a.show({message:n.getTranslation("section_moved")})}).catch(function(e){c.a.warn("Failed to swap sections:",e),b.a.show({message:n.getTranslation("failed_to_move_section"),action:"ok"})}),{sections:a.sections.sort(function(e,t){return e.sortOrder-t.sortOrder})}})}},{key:"moveSectionUp",value:function(e){var t=this.state.sections.indexOf(e);if(t>0){var n=this.state.sections[t-1];this.swapSections(n,e)}}},{key:"moveSectionDown",value:function(e){var t=this.state.sections.indexOf(e);if(t<this.state.sections.length-1){var n=this.state.sections[t+1];this.swapSections(n,e)}}},{key:"render",value:function(){var e=this,t={edit:this.handleEditSectionClick,delete:this.handleDeleteSectionClick,translate:this.handleTranslateSectionClick,manage_grey_fields:this.handleSectionGreyFieldsClick,move_up:this.moveSectionUp,move_down:this.moveSectionDown},n={edit:"edit",move_up:"arrow_upward",move_down:"arrow_downward",manage_grey_fields:"do_not_disturb"},a=function(t,n){return"move_up"===n?e.state.sections.indexOf(t)>0:"move_down"!==n||e.state.sections.indexOf(t)<e.state.sections.length-1};return void 0===this.state.sections?s.a.createElement(d.a,null):s.a.createElement("div",null,s.a.createElement(u.a,{style:w.heading},T.a.state.displayName," ",this.getTranslation("section_management")),s.a.createElement(h.a,{columns:["name"],rows:this.state.sections,contextMenuActions:t,contextMenuIcons:n,primaryAction:t.edit,isContextActionAllowed:a}),s.a.createElement(g.a,{open:!!this.state.editSectionModel,sectionModel:this.state.editSectionModel,categoryCombos:this.state.categoryCombos,onRequestClose:function(){e.setState({editSectionModel:!1})},onSaveSection:this.handleSectionSaved}),s.a.createElement(v.a,{open:!!this.state.greyFieldSectionModel,sectionModel:this.state.greyFieldSectionModel,onRequestClose:function(){e.setState({greyFieldSectionModel:!1})},onRequestSave:this.handleSectionSaved}),this.state.translationModel?s.a.createElement(C.a,{objectToTranslate:this.state.translationModel,objectTypeToTranslate:this.state.translationModel&&this.state.translationModel.modelDefinition,open:!!this.state.translationModel,onTranslationSaved:this.handleTranslationSaved,onTranslationError:this.handleTranslationErrored,onRequestClose:function(){e.setState({translationModel:null})},fieldsToTranslate:["name"]}):null,s.a.createElement("div",{style:w.fab},s.a.createElement(f.a,{onClick:this.handleAddSectionClick},s.a.createElement(y.a,{className:"material-icons"},"add"))))}}]),t}(s.a.Component);O.propTypes={params:s.a.PropTypes.any.isRequired},O.contextTypes={d2:s.a.PropTypes.any.isRequired},t.default=O},1359:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(118),i=n.n(r),s=n(84),l=n.n(s),c=n(100),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=o.a.createClass({displayName:"LocaleSelector.component",propTypes:{value:o.a.PropTypes.string,locales:o.a.PropTypes.arrayOf(o.a.PropTypes.shape({name:o.a.PropTypes.string.isRequired,locale:o.a.PropTypes.string.isRequired})).isRequired,onChange:o.a.PropTypes.func.isRequired},mixins:[c.a],render:function(){var e=[{payload:"",text:""}].concat(this.props.locales).map(function(e,t){return o.a.createElement(l.a,{key:t,primaryText:e.name,value:e.locale})});return o.a.createElement(i.a,d({fullWidth:!0},this.props,{value:this.state&&this.state.locale,hintText:this.getTranslation("select_locale"),onChange:this._localeChange}),e)},_localeChange:function(e,t,n){this.setState({locale:n}),this.props.onChange(n,e)}})},1360:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(13),s=(n.n(i),n(292)),l=n.n(s),c=n(0),d=n.n(c),u=n(1361),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();i.config.i18n.strings.add("close"),i.config.i18n.strings.add("sharing_settings");var f=function(e){function t(e,r){a(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return i.i18n=r.d2.i18n,i.state={TranslationForm:n.i(u.a)(i.props.objectToTranslate)},i.translationSaved=i.translationSaved.bind(i),i.translationError=i.translationError.bind(i),i.closeSharingDialog=i.closeSharingDialog.bind(i),i}return r(t,e),p(t,[{key:"render",value:function(){return d.a.createElement(l.a,h({title:this.i18n.getTranslation("translation_dialog_title"),autoDetectWindowHeight:!0,autoScrollBodyContent:!0},this.props),d.a.createElement(this.state.TranslationForm,{onTranslationSaved:this.translationSaved,onTranslationError:this.translationError,onCancel:this.closeSharingDialog,fieldsToTranslate:this.props.fieldsToTranslate}))}},{key:"componentWillReceiveProps",value:function(e){e.objectToTranslate&&this.setState({TranslationForm:n.i(u.a)(e.objectToTranslate)})}},{key:"closeSharingDialog",value:function(){this.props.onRequestClose()}},{key:"translationSaved",value:function(){this.props.onTranslationSaved(),this.closeSharingDialog()}},{key:"translationError",value:function(){this.props.onTranslationError()}}]),t}(c.Component);t.a=f,f.propTypes={objectToTranslate:d.a.PropTypes.shape({id:d.a.PropTypes.string.isRequired}).isRequired,onTranslationSaved:d.a.PropTypes.func.isRequired,onTranslationError:d.a.PropTypes.func.isRequired,open:d.a.PropTypes.bool,onRequestClose:d.a.PropTypes.func.isRequired,fieldsToTranslate:d.a.PropTypes.array},f.contextTypes={d2:c.PropTypes.object}},1361:function(e,t,n){"use strict";function a(e){var t=v.a.create();return n.i(u.a)(e).subscribe(function(e){t.setState(e)}),g.Observable.combineLatest(n.i(u.b)(),t,function(){for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return Object.assign.apply(Object,[{objectToTranslate:e,setTranslations:function(e){t.setState({translations:e})}}].concat(a))})}function o(e){return n.i(f.a)(a(e),T)}t.a=o;var r=n(0),i=n.n(r),s=n(45),l=n.n(s),c=n(100),d=n(1359),u=n(1362),h=n(82),p=n.n(h),f=n(201),m=n(116),y=n.n(m),g=n(14),v=(n.n(g),n(23)),b=n(83),T=i.a.createClass({displayName:"TranslationForm",propTypes:{onTranslationSaved:i.a.PropTypes.func.isRequired,onTranslationError:i.a.PropTypes.func.isRequired,objectToTranslate:i.a.PropTypes.shape({id:i.a.PropTypes.string.isRequired}),fieldsToTranslate:i.a.PropTypes.arrayOf(i.a.PropTypes.string)},mixins:[c.a],getInitialState:function(){return{loading:!0,translations:{},translationValues:{},currentSelectedLocale:""}},getDefaultProps:function(){return{fieldsToTranslate:["name","shortName","description"]}},getLoadingdataElement:function(){return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(b.a,{mode:"indeterminate"}))},renderFieldsToTranslate:function(){var e=this;return this.props.fieldsToTranslate.filter(function(e){return e}).map(function(t){return i.a.createElement("div",{key:t},i.a.createElement(l.a,{floatingLabelText:e.getTranslation(p()(t)),value:e.getTranslationValueFor(t),fullWidth:!0,onChange:e._setValue.bind(e,t)}),i.a.createElement("div",null,e.props.objectToTranslate[t]))})},renderForm:function(){return i.a.createElement("div",null,this.renderFieldsToTranslate(),i.a.createElement(y.a,{label:this.getTranslation("save"),primary:!0,onClick:this._saveTranslations}),i.a.createElement(y.a,{style:{marginLeft:"1rem"},label:this.getTranslation("cancel"),onClick:this.props.onCancel}))},renderHelpText:function(){return i.a.createElement("div",null,i.a.createElement("p",null,this.getTranslation("select_a_locale_to_enter_translations_for_that_language")))},render:function(){return this.props.locales||this.props.translations?i.a.createElement("div",{style:{minHeight:250}},i.a.createElement(d.a,{locales:this.props.locales,onChange:this.setCurrentLocale}),Boolean(this.state.currentSelectedLocale)?this.renderForm():this.renderHelpText()):this.getLoadingdataElement()},getTranslationValueFor:function(e){var t=this,n=this.props.translations.find(function(n){return n.locale===t.state.currentSelectedLocale&&n.property.toLowerCase()===p()(e)});if(n)return n.value},setCurrentLocale:function(e){this.setState({currentSelectedLocale:e})},_setValue:function(e,t){var n=this,a=[].concat(this.props.translations),o=a.find(function(t){return t.locale===n.state.currentSelectedLocale&&t.property.toLowerCase()===p()(e)});o?t.target.value?o.value=t.target.value:a=a.filter(function(e){return e!==o}):(o={property:p()(e).toUpperCase(),locale:this.state.currentSelectedLocale,value:t.target.value},a.push(o)),this.props.setTranslations(a)},_saveTranslations:function(){n.i(u.c)(this.props.objectToTranslate,this.props.translations).subscribe(this.props.onTranslationSaved,this.props.onTranslationError)}})},1362:function(e,t,n){"use strict";function a(){return a.localePromise||(a.localePromise=n.i(s.getInstance)().then(function(e){return e.Api.getApi().get("locales/db")}).then(function(e){return{locales:e}})),l.Observable.fromPromise(a.localePromise)}function o(e){return e.href?e.href:e.modelDefinition.apiEndpoint+"/"+e.id}function r(e){return l.Observable.of(e).flatMap(function(e){var t=e.modelDefinition;return t||t.name?n.i(s.getInstance)().then(function(t){return t.Api.getApi().get(o(e)+"/translations")}):Promise.reject(new Error("Can not find modelDefinition for "+e.id))})}t.b=a,t.a=r,n.d(t,"c",function(){return d});var i=n(37),s=n(13),l=(n.n(s),n(14)),c=(n.n(l),function(){function e(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),d=i.a.create("saveTranslations");d.subscribe(function(e){var t=c(e.data,2),a=t[0],r=t[1],i=e.complete,l=e.error,d=o(a)+"/translations";n.i(s.getInstance)().then(function(e){e.Api.getApi().update(d,{translations:r},{dataType:"text"}).then(i).catch(l)})})},1512:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),l=n.n(s),c=n(15),d=n.n(c),u=n(292),h=n.n(u),p=n(68),f=n.n(p),m=n(116),y=n.n(m),g=n(211),v=n.n(g),b=n(69),T=n(67),C=n(117),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w={dialogContent:{maxWidth:"none"},dialogDiv:{overflowX:"auto",overflowY:"hidden"},table:{borderSpacing:0,borderCollapse:"collapse",margin:"32px auto"},th:{whiteSpace:"nowrap",textAlign:"center",border:"1px solid #e0e0e0",padding:6},thDataElements:{whiteSpace:"nowrap",border:"1px solid #e0e0e0",background:"#f0f0f0",textAlign:"left",padding:6},td:{whiteSpace:"nowrap",padding:2,border:"1px solid #e0e0e0",minWidth:105},tdDataElement:{whiteSpace:"nowrap",padding:6,border:"1px solid #e0e0e0"}},O=function(e){function t(e,n){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.state={categories:[]},a.closeDialog=a.closeDialog.bind(a),a.handleSaveClick=a.handleSaveClick.bind(a),a.getTranslation=n.d2.i18n.getTranslation.bind(n.d2.i18n),a}return i(t,e),E(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.context.d2;if(e.sectionModel){if(e.sectionModel.dataElements.toArray().length<1)return d.a.info("Section "+e.sectionModel.displayName+" contains no data elements"),T.a.show({message:this.getTranslation("this_section_has_no_data_elements"),action:"ok"}),void this.props.onRequestClose();var a={},o=function(e){for(var t=null,n=function(e,n){var a=e;return a[n.id]=t,a};e.length>0;)t=e.pop().categoryOptions.toArray().reduce(n,{});return t},r=function e(t,n,a){return n.length>0?Object.keys(t).reduce(function(o,r){var i=o,s=n.indexOf(r);return-1!==s?(n.splice(s,1),i[r]=e(t[r],n,a),i):(i[r]=t[r],i)},{}):a};n.models.categoryCombos.list({filter:"id:in:["+e.sectionModel.categoryCombos.toArray().map(function(e){return e.id})+"]",paging:!1,fields:["id,displayName","categories[id,displayName,categoryOptions[id,displayName]]","categoryOptionCombos[id,displayName","categoryOptions[id,displayName]]"].join(",")}).then(function(n){n.forEach(function(e){Object.assign(a,JSON.parse(JSON.stringify(o(e.categories.toArray())))),e.categoryOptionCombos.toArray().forEach(function(e){var t=e.categoryOptions.toArray().map(function(e){return e.id});a=r(a,t,{id:e.id,displayName:e.displayName})})});var i=e.sectionModel.greyedFields.reduce(function(e,t){if(e.hasOwnProperty(t.dataElement.id))return e[t.dataElement.id].push(t.categoryOptionCombo.id),e;var n=e;return n[t.dataElement.id]=[t.categoryOptionCombo.id],n},{});t.setState({currentCategoryCombo:n.toArray()[0].id,categoryCombos:n,optionCount:n.toArray().reduce(function(e,t){return e[t.id]=t.categories.toArray().map(function(e){return e.categoryOptions.size}),e},{}),cocMap:a,greyedFields:i})})}}},{key:"closeDialog",value:function(){this.props.onRequestClose()}},{key:"handleSaveClick",value:function(){var e=this,t=[];Object.keys(this.state.greyedFields).forEach(function(n){e.state.greyedFields[n].forEach(function(e){t.push({dataElement:{id:n},categoryOptionCombo:{id:e}})})});var n=Object.assign(this.props.sectionModel,{greyedFields:t});n.save().then(function(t){d.a.info("Section updated",t),T.a.show({message:e.getTranslation("section_saved")}),e.props.onRequestSave(n)}).catch(function(t){d.a.error("Failed to save section:",t),T.a.show({message:e.getTranslation("failed_to_save_section"),action:"ok"})})}},{key:"renderTableHeader",value:function(){var e=this,t=1;return this.state.currentCategoryCombo&&this.state.categoryCombos.get(this.state.currentCategoryCombo).categories.toArray().map(function(n,a){var o=e.state.optionCount[e.state.currentCategoryCombo].slice(a+1).reduce(function(e,t){return t*e},1),r=a===e.state.categoryCombos.get(e.state.currentCategoryCombo).categories.size-1,i=l.a.createElement("tr",{key:a},l.a.createElement("th",{style:w.thDataElements},r&&e.getTranslation("data_element")),Array.apply(null,Array(t)).map(function(e,t){return n.categoryOptions.toArray().map(function(e,n){return l.a.createElement("th",{key:n+"."+t,colSpan:o,style:w.th},"default"===e.displayName?"":e.displayName)})}));return t*=n.categoryOptions.size,i})}},{key:"renderCheckbox",value:function(e,t,n){var a=this,o=function e(t,n){return 0===n.length?t:e(t[n.shift()],n)}(this.state.cocMap,t),r=this.state.greyedFields.hasOwnProperty(e.id)&&-1!==this.state.greyedFields[e.id].indexOf(o.id),i=function(e,t,n,o){a.setState(function(n){var a=(n.greyedFields[e]||[]).slice();o?a.includes(t)&&a.splice(a.indexOf(t),1):a.includes(t)||a.push(t);var r=Object.keys(n.greyedFields).reduce(function(t,o){var r=t;return r[o]=o===e?a:n.greyedFields[o],r},{});return a.length>0&&!r.hasOwnProperty(e)&&(r[e]=a),{greyedFields:r}})}.bind(this,e.id,o.id);return l.a.createElement("td",{key:n,style:w.td},l.a.createElement(v.a,{checked:!r,label:r?this.getTranslation("disabled"):this.getTranslation("enabled"),labelPosition:"right",labelStyle:{whiteSpace:"nowrap"},onCheck:i}))}},{key:"renderDataElements",value:function(){var e=this,t=function(){return e.state.categoryCombos.get(e.state.currentCategoryCombo).categories.toArray().reduce(function(e,t){if(e.length>0){var n=[];return e.forEach(function(e){t.categoryOptions.toArray().forEach(function(t){var a=e.slice();a.push(t.id),n.push(a)})}),n}return t.categoryOptions.toArray().forEach(function(t){e.push([t.id])}),e},[])},n=this.props.sectionModel.dataElements.toArray().map(function(e){return e.id});return this.state.currentCategoryCombo?C.a.state.dataSetElements.filter(function(e){return n.includes(e.dataElement.id)}).filter(function(t){return(t.categoryCombo?t.categoryCombo.id:t.dataElement.categoryCombo.id)===e.state.currentCategoryCombo}).sort(function(e,t){return n.indexOf(e.dataElement.id)-n.indexOf(t.dataElement.id)}).map(function(n,a){var o=t();return l.a.createElement("tr",{key:a,style:{background:a%2==0?"none":"#f0f0f0"}},l.a.createElement("td",{style:w.tdDataElement},n.dataElement.displayName),o.map(function(t,a){return e.renderCheckbox(n.dataElement,t,a)}))}):null}},{key:"render",value:function(){var e=this,t=this.props.sectionModel.displayName,n=this.props,o=n.open,r=a(n,["open"]),i=[],s=[],c=[];return this.props.sectionModel&&(s=this.props.sectionModel.dataElements.toArray().map(function(e){return e.id}),c=C.a.state.dataSetElements.filter(function(e){return s.includes(e.dataElement.id)}).map(function(e){return e.categoryCombo||e.dataElement.categoryCombo}).reduce(function(e,t){return i.includes(t.id)||(i.push(t.id),e.push(t)),e},[]).sort(function(e,t){return e.displayName.localeCompare(t.displayName)})),l.a.createElement(h.a,S({autoScrollBodyContent:!0,autoDetectWindowHeight:!0,title:this.getTranslation("manage_grey_fields")+": "+t,style:{maxWidth:"none"},contentStyle:w.dialogContent,open:o&&this.props.sectionModel.dataElements.size>0},r,{actions:[l.a.createElement(f.a,{label:this.getTranslation("cancel"),onTouchTap:this.closeDialog,style:{marginRight:16}}),l.a.createElement(y.a,{primary:!0,label:this.getTranslation("save"),onTouchTap:this.handleSaveClick})],onRequestClose:this.closeDialog}),this.props.sectionModel&&this.props.sectionModel.categoryCombos&&this.props.sectionModel.categoryCombos.size>1?l.a.createElement(b.a,{options:c.map(function(t){return{value:t.id,text:"default"===t.displayName?e.getTranslation("none"):t.displayName}}),labelText:this.getTranslation("category_combo"),value:this.state.currentCategoryCombo,onChange:function(t){return e.setState({currentCategoryCombo:t.target.value})},style:{width:"33%"},isRequired:!0}):null,l.a.createElement("div",{style:w.dialogDiv},l.a.createElement("table",{style:w.table},l.a.createElement("tbody",null,this.renderTableHeader(),this.state.currentCategoryCombo&&this.props.sectionModel&&this.renderDataElements()))))}}]),t}(l.a.Component);O.contextTypes={d2:l.a.PropTypes.any.isRequired},O.propTypes={open:l.a.PropTypes.bool.isRequired,sectionModel:l.a.PropTypes.any.isRequired,onRequestClose:l.a.PropTypes.func.isRequired,onRequestSave:l.a.PropTypes.func.isRequired},t.a=O},1513:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=n(15),c=n.n(l),d=n(292),u=n.n(d),h=n(68),p=n.n(h),f=n(116),m=n.n(f),y=n(45),g=n.n(y),v=n(533),b=n(23),T=n(163),C=n.n(T),S=n(69),E=n(67),w=n(117),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),k=b.a.create(),x=b.a.create(),A=b.a.create(),P=b.a.create(),M=function(e){function t(e,n){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={categoryCombo:!1},k.setState([]),x.setState([]),A.setState([]),P.setState([]),r.handleCategoryComboChange=r.handleCategoryComboChange.bind(r),r.handleFilterChange=r.handleFilterChange.bind(r),r.handleNameChange=r.handleNameChange.bind(r),r.handleCodeChange=r.handleCodeChange.bind(r),r.handleDescriptionChange=r.handleDescriptionChange.bind(r),r.assignDataElements=r.assignDataElements.bind(r),r.removeDataElements=r.removeDataElements.bind(r),r.setAssignedDataElements=r.setAssignedDataElements.bind(r),r.assignIndicators=r.assignIndicators.bind(r),r.removeIndicators=r.removeIndicators.bind(r),r.setAssignedIndicators=r.setAssignedIndicators.bind(r),r.saveSection=r.saveSection.bind(r),r.handleRowTotalsChange=function(e,t){r.setState({showRowTotals:t})},r.handleColumnTotalsChange=function(e,t){r.setState({showColumnTotals:t})},r.getTranslation=n.d2.i18n.getTranslation.bind(n.d2.i18n),r}return r(t,e),_(t,[{key:"componentDidMount",value:function(){var e=this;this.subscriptions=[],this.subscriptions.push(x.subscribe(function(){e.forceUpdate()}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.sectionModel){var n=e.sectionModel.id,a=w.a.state.sections,o=Array.isArray(a)?a:a.toArray(),r=o.filter(function(e){return e.id!==n}),i=r.reduce(function(e,t){return e.concat((Array.isArray(t.dataElements)?t.dataElements:t.dataElements.toArray()).map(function(e){return e.id}))},[]);x.setState(e.sectionModel.dataElements&&e.sectionModel.dataElements.toArray().map(function(e){return e.id})||[]),A.setState(w.a.state.indicators.toArray().map(function(e){return{value:e.id,text:e.displayName}}).sort(function(e,t){return e.text.localeCompare(t.text)})),P.setState(e.sectionModel.indicators&&e.sectionModel.indicators.toArray().map(function(e){return e.id})||[]),this.setState({name:e.sectionModel.name,code:e.sectionModel.code,nameError:"",codeError:"",description:e.sectionModel.description,showRowTotals:e.sectionModel.showRowTotals,showColumnTotals:e.sectionModel.showColumnTotals,filterText:"",filterDataElementIds:i},function(){t.handleCategoryComboChange({target:{value:!1}}),t.forceUpdate()})}}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})}},{key:"handleCategoryComboChange",value:function(e){var t=this,n=e.target.value;w.a.state.dataSetElements&&k.setState(w.a.state.dataSetElements.filter(function(e){return!n||(e.categoryCombo?e.categoryCombo.id===n:e.dataElement.categoryCombo.id===n)}).filter(function(e){return!t.state.filterDataElementIds||!t.state.filterDataElementIds.includes(e.dataElement.id)}).map(function(e){return{value:e.dataElement.id,text:e.dataElement.displayName}}).sort(function(e,t){return e.text.localeCompare(t.text)})),this.setState({categoryCombo:n})}},{key:"handleFilterChange",value:function(e){this.setState({filterText:e.target.value})}},{key:"handleNameChange",value:function(e){var t=this,n=Array.isArray(w.a.getState().sections)?w.a.getState().sections:w.a.getState().sections.toArray(),a=n.filter(function(e){return e.id!==t.props.sectionModel.id}).reduce(function(t,n){return t||n.name===e.target.value},!1);this.setState({name:e.target.value,nameError:a?this.getTranslation("value_not_unique"):""})}},{key:"handleCodeChange",value:function(e){var t=this,n=Array.isArray(w.a.getState().sections)?w.a.getState().sections:w.a.getState().sections.toArray(),a=n.filter(function(e){return e.id!==t.props.sectionModel.id}).reduce(function(t,n){return t||n.code&&n.code===e.target.value},!1);this.setState({code:e.target.value,codeError:a?this.getTranslation("value_not_unique"):""})}},{key:"handleDescriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"assignDataElements",value:function(e){return x.setState(x.state.concat(e)),Promise.resolve()}},{key:"removeDataElements",value:function(e){return x.setState(x.state.filter(function(t){return-1===e.indexOf(t)})),Promise.resolve()}},{key:"setAssignedDataElements",value:function(e){x.setState(e)}},{key:"assignIndicators",value:function(e){return P.setState(P.state.concat(e)),Promise.resolve()}},{key:"removeIndicators",value:function(e){return P.setState(P.state.filter(function(t){return-1===e.indexOf(t)})),Promise.resolve()}},{key:"setAssignedIndicators",value:function(e){P.setState(e)}},{key:"saveSection",value:function(){var e=this;if(!this.state.name||0===this.state.name.trim().length)return void E.a.show({message:this.getTranslation("name_is_required"),action:this.getTranslation("ok")});var t=this.props.sectionModel.id?this.props.sectionModel:this.props.sectionModel.modelDefinition.create();Object.assign(t,{dataSet:{id:w.a.state.id},name:this.state.name,code:this.state.code,description:this.state.description,showRowTotals:this.state.showRowTotals,showColumnTotals:this.state.showColumnTotals,dataElements:x.state.map(function(e){return{id:e}}),indicators:P.state.map(function(e){return{id:e}}),sortOrder:this.props.sectionModel.sortOrder||w.a.state.sections.toArray().reduce(function(e,t){return Math.max(e,t.sortOrder+1)},0)}),t.save().then(function(t){E.a.show({message:e.getTranslation("section_saved")}),e.context.d2.models.sections.get(t.response.uid,{fields:[":all,dataElements[id,categoryCombo[id,displayName]]","greyedFields[categoryOptionCombo,dataElement]"].join(",")}).then(function(t){e.props.onSaveSection(t)})}).catch(function(t){c.a.warn("Failed to save section:",t),E.a.show({message:e.getTranslation("failed_to_save_section"),action:e.getTranslation("ok")})})}},{key:"renderFilters",value:function(){var e=[{value:!1,text:this.getTranslation("no_filter")}].concat(this.props.categoryCombos.sort(function(e,t){return e.text.localeCompare(t.text)}));return s.a.createElement("div",{style:{minWidth:605}},s.a.createElement(S.a,{options:e,labelText:this.getTranslation("category_combo_filter"),onChange:this.handleCategoryComboChange,value:this.state.categoryCombo,isRequired:!0,disabled:1===this.props.categoryCombos.length,style:{width:284}}),s.a.createElement(g.a,{floatingLabelText:this.getTranslation("filter"),onChange:this.handleFilterChange,style:{float:"right",marginRight:34,width:284}}))}},{key:"renderAvailableOptions",value:function(){var e={position:"relative",display:"block",width:"100%",lineHeight:"24px",color:"rgba(0,0,0,0.3)",marginTop:"1.25rem",fontSize:16};return s.a.createElement("div",null,s.a.createElement("div",{style:{marginBottom:80}},s.a.createElement("label",{style:e},this.getTranslation("data_elements")),s.a.createElement(v.a,{itemStore:k,assignedItemStore:x,onAssignItems:this.assignDataElements,onRemoveItems:this.removeDataElements,onOrderChanged:this.setAssignedDataElements,height:250,filterText:this.state.filterText})),A.state.length?s.a.createElement("div",{style:{marginBottom:80}},s.a.createElement("label",{style:e},this.getTranslation("indicators")),s.a.createElement(v.a,{itemStore:A,assignedItemStore:P,onAssignItems:this.assignIndicators,onRemoveItems:this.removeIndicators,onOrderChanged:this.setAssignedIndicators,height:250,filterText:this.state.filterText})):null)}},{key:"render",value:function(){var e=this,t=this.getTranslation("add_section"),n=null;this.props.sectionModel.id&&(t=this.getTranslation("edit_section"),n=s.a.createElement("div",{style:{float:"left",padding:8,color:"rgba(0,0,0,0.5)"}},this.getTranslation("section_id"),":",s.a.createElement("span",{style:{fontFamily:"monospace"}},this.props.sectionModel.id)));var a=function(t){e.setState({nameError:t.target.value.trim().length>0?"":e.getTranslation("value_required")})};return s.a.createElement(u.a,O({autoScrollBodyContent:!0,title:t,actions:[n,s.a.createElement(p.a,{label:this.getTranslation("cancel"),onTouchTap:this.props.onRequestClose,style:{marginRight:24}}),s.a.createElement(m.a,{primary:!0,label:this.getTranslation("save"),onTouchTap:this.saveSection})]},this.props),s.a.createElement(g.a,{floatingLabelText:this.getTranslation("name")+" *",value:this.state.name||"",style:{width:"100%"},onChange:this.handleNameChange,errorText:this.state.nameError,onBlur:a}),s.a.createElement(g.a,{floatingLabelText:this.getTranslation("code"),value:this.state.code||"",style:{width:"100%"},onChange:this.handleCodeChange,errorText:this.state.codeError}),s.a.createElement(g.a,{floatingLabelText:this.getTranslation("description"),value:this.state.description||"",style:{width:"100%"},multiLine:!0,onChange:this.handleDescriptionChange}),s.a.createElement(C.a,{label:this.getTranslation("show_row_totals"),checked:this.state.showRowTotals,style:{margin:"16px 0"},onCheck:this.handleRowTotalsChange}),s.a.createElement(C.a,{label:this.getTranslation("show_column_totals"),checked:this.state.showColumnTotals,style:{margin:"16px 0"},onCheck:this.handleColumnTotalsChange}),this.renderFilters(),this.renderAvailableOptions())}}]),t}(s.a.Component);M.propTypes={open:s.a.PropTypes.bool.isRequired,sectionModel:s.a.PropTypes.any.isRequired,categoryCombos:s.a.PropTypes.array.isRequired,onRequestClose:s.a.PropTypes.func.isRequired,onSaveSection:s.a.PropTypes.func.isRequired},M.contextTypes={d2:s.a.PropTypes.any.isRequired},t.a=M}});
//# sourceMappingURL=8-7b4b72284bb16785357b.js.map