sap.ui.controller("coreViews.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5-demo.main
*/
	onInit: function() {
		var oResourceModel = new sap.ui.model.resource.ResourceModel({bundleName : 'models.i18n'});
		this.oResourceModel = oResourceModel;
		var oRouter = new sap.ui.core.routing.Router([
		         new sap.ui.core.routing.Route({
		        	 pattern : 'text',
		        	 view : 'coreViews.text',
		        	 targetControl : 'viewContainer'
		         },
		         new sap.ui.core.routing.Route({
		        	 pattern : 'table',
		        	 view : 'coreViews.table',
		        	 targetControl : 'viewContainer'
		         }))    
              ], {
				viewType : 'XML'
		});
	},
	
	openAboutDialog : function(){
		if(!this.oAbout){
			this.oAbout = new sap.ui.xmlfragment(
				{
					fragmentName : 'ui5-demo.about'
				},
				{
					closeAboutDialog : function(){
						this.getParent().close();
					}
				});
		};
		this.oAbout.open();
	},
	


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5-demo.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5-demo.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5-demo.main
*/
//	onExit: function() {
//
//	}

});