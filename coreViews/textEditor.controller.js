sap.ui.controller("coreViews.textEditor", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf coreViews.textEditor
*/
	onInit: function() {
		//Calculates client area for a layout of text editor
		var oMainView = sap.ui.getCore().byId("main"),
			oLayout = this.getView().byId('textEditorLayout'),
			iHeaderHeight = 0;
		iHeaderHeight += oMainView.byId('appHeader').$().height();
		iHeaderHeight += oMainView.byId('appNav').$().height();
		oLayout.setHeight( ( $(window).height() - iHeaderHeight ) + "px" );
	},
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf coreViews.textEditor
*/
	openAboutDialog : function(){
		if(!this.oAbout){
			//Creates the dialog if it's not presents
			this.oAbout = new sap.ui.xmlfragment(
				{
					fragmentName : 'menu.help.about'
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
* @memberOf coreViews.textEditor
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf coreViews.textEditor
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf coreViews.textEditor
*/
//	onExit: function() {
//
//	}

});