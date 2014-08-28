sap.ui.controller("coreViews.table", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf coreViews.table
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel(),
			oTable = this.getView().byId('tableEmployees');
		oModel.loadData('models/employees.json');
		this.getView().setModel(oModel);
		oTable.bindRows('/');
	},
	
	formatDate: function(iValue) {
		if(iValue){
			var oDate = new Date(iValue);
			return ("0" + oDate.getDate()).slice(-2) + "." + ("0" + (oDate.getMonth() + 1)).slice(-2) + "." + oDate.getFullYear();
		} else {
			return "";
		}
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