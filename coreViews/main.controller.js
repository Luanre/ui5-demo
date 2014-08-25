sap.ui.controller("coreViews.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf coreViews.main
*/
	onInit: function() {
		var oResourceModel = new sap.ui.model.resource.ResourceModel({bundleName : 'models.i18n'});
		sap.ui.getCore().setModel(oResourceModel, 'i18n');
	},
	
/**
* Navigates among core views.
* @param {oEventProvider} e - Event-object.
* @memberOf coreViews.main
*/
	navigate : function(e){
		var sSelectedTab = e.getParameters().itemId,
			oContainer = this.getView().byId('viewContainer');
		switch(sSelectedTab){
		case 'main--navTextEditor': 
			if(!this.oTextEditor){
				this.oTextEditor = new sap.ui.view({viewName : 'coreViews.textEditor', type : 'XML'});
			}
			oContainer.removeAllContent();
			oContainer.addContent(this.oTextEditor);
			break;
		case 'main--navTable': 
			if(!this.oTable){
				this.oTable = new sap.ui.view({viewName : 'coreViews.table', type : 'XML'});
			}
			oContainer.removeAllContent();
			oContainer.addContent(this.oTable);
			break;
		}
	},
	
	switchLanguage : function(e){
		var sLocale = e.getSource().getSelectedKey(),
			oResourceModel = new sap.ui.model.resource.ResourceModel({
				bundleName : 'models.i18n',
				bundleLocale : sLocale
			});
		sap.ui.getCore().setModel(oResourceModel, 'i18n');
	},
	
	switchTheme : function(e){
		var sKey = e.getSource().getSelectedKey();
		sap.ui.getCore().applyTheme(sKey);
	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf coreViews.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf coreViews.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf coreViews.main
*/
//	onExit: function() {
//
//	}

});