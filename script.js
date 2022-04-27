 require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Legend"], (MapView, WebMap, Legend) => {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "334190376a6b41e096a5446163335b99"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        const view = new MapView({
          map: webmap,
          container: "viewDiv",
          zoom: 1
        });
        view.ui.add(new Legend({ view: view }), "bottom-left");
        
       
        });
