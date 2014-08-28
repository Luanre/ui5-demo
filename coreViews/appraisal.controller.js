sap.ui.controller("coreViews.appraisal", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf coreViews.table
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel()
		oModel.loadData('models/appraisal.json');
		this.getView().setModel(oModel, 'appraisal');
	},
	
	buttonsFactory : function(sId, oCtx){
		return new sap.ui.commons.Button({
			text : oCtx.getProperty('text'),
			customData : [{
				key : 'buttonId',
				value : oCtx.getProperty('buttonId')
			}]
		});
	},
	
	selectIndividualQualification : function(e){
		var oParams = e.getParameters(),
			oTable = e.getSource(),
			oLayout = this.getView().byId("individualGoadContent");
		if(!oTable['contents' + oParams.rowIndex]){
			var oFragment = sap.ui.xmlfragment('menu.appraisal.qualification',{
				actionsFactory : function(sId, oCtx){
					var oPanel = new sap.ui.commons.Panel({
						title : oCtx.getProperty('title')
					});
					return oPanel;
				}		
			});
			oFragment.setBindingContext(oParams.rowContext);
			oTable['contents' + oParams.rowIndex] = oFragment;
		}
		oLayout.removeAllContent();
		oLayout.addContent(oTable['contents' + oParams.rowIndex]);
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf coreViews.table
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf coreViews.table
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf coreViews.table
*/
//	onExit: function() {
//
//	}

});