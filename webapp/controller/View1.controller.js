sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device"
],
    function (Controller, Device) {
        "use strict";

        return Controller.extend("com.app.rfhuasn.controller.View1", {
            onInit: function () {

            },
            //Back function 
            onPressASNdetailsBackButton: function () {
                this.getView().byId("IdpageScanning1").setVisible(true);
                this.getView().byId("icon2").setVisible(false);
                this.getView().byId("idASNdetailsBackButton").setVisible(false);

            },

            Onpresssubmit: function () {

                this.getView().byId("IdpageScanning1").setVisible(false);
                this.getView().byId("icon2").setVisible(true);
                this.getView().byId("idASNdetailsBackButton").setVisible(true);

            },

            onHUListPresshubyASN: function () {
                this.getView().byId("icon3").setVisible(true);
                this.getView().byId("idAsnHuListBackButton").setVisible(true);
                this.getView().byId("icon2").setVisible(false);
                this.getView().byId("idASNdetailsBackButton").setVisible(false);

            },
            //Back function 
            OnpressAsnHuListBackButton: function () {
                this.getView().byId("icon2").setVisible(true);
                this.getView().byId("icon3").setVisible(false);
                this.getView().byId("idASNdetailsBackButton").setVisible(true);
                this.getView().byId("idAsnHuListBackButton").setVisible(false);
                this.getView().byId("IdpageScanning1").setVisible(false);
            },

            onNewHUPresshubyASN:function(){
                this.getView().byId("icon4").setVisible(true);
                this.getView().byId("idAsnNewhuBackButton").setVisible(true);
                this.getView().byId("icon2").setVisible(false);
                this.getView().byId("icon3").setVisible(false);
                this.getView().byId("idASNdetailsBackButton").setVisible(false);
                this.getView().byId("idAsnHuListBackButton").setVisible(false);
                this.getView().byId("IdpageScanning1").setVisible(false);
            },
            //Back Functio
            OnpressAsnNewHUBackButton:function(){
                this.getView().byId("icon3").setVisible(false);
                this.getView().byId("idAsnHuListBackButton").setVisible(false);
                this.getView().byId("icon4").setVisible(false);
                this.getView().byId("idAsnNewhuBackButton").setVisible(false);
                this.getView().byId("icon2").setVisible(true);
                this.getView().byId("idASNdetailsBackButton").setVisible(true);
                this.getView().byId("IdpageScanning1").setVisible(false);

            },
            onPressEnter:function(){
                this.getView().byId("icon5").setVisible(true);
                this.getView().byId("idAsnDetailsBackButton").setVisible(true);
                this.getView().byId("icon3").setVisible(false);
                this.getView().byId("idAsnHuListBackButton").setVisible(false);
                this.getView().byId("icon4").setVisible(false);
                this.getView().byId("idAsnNewhuBackButton").setVisible(false);
                this.getView().byId("icon2").setVisible(false);
                this.getView().byId("idASNdetailsBackButton").setVisible(false);
                this.getView().byId("IdpageScanning1").setVisible(false);
            },
            //Backfunction
            OnpressAsnDetailsBackButton:function(){
                this.getView().byId("icon4").setVisible(true);
                this.getView().byId("idAsnNewhuBackButton").setVisible(true);
                this.getView().byId("icon2").setVisible(false);
                this.getView().byId("icon3").setVisible(false);
                this.getView().byId("idASNdetailsBackButton").setVisible(false);
                this.getView().byId("idAsnHuListBackButton").setVisible(false);
                this.getView().byId("IdpageScanning1").setVisible(false);
                this.getView().byId("icon5").setVisible(false);
                this.getView().byId("idAsnDetailsBackButton").setVisible(false);

            }
        });
    });
