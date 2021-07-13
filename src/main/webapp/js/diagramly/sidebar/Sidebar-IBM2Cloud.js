(function()
{
    Sidebar.prototype.addIBM2CloudPalette = function()
    {
		let baseURL = (new RegExp(/^.*\//)).exec(window.location.href)[0];
		let sidebarURL = baseURL + 'js/diagramly/sidebar/IBM2MondrianCloud.json';
		let sideBarConfig = `{"id": "ibm2cloud", "name": "IBM" , "url": "${sidebarURL}" }`;

		this.addIBM2MondrianPalette([JSON.parse(sideBarConfig)], addSidebarBase = false);

		//let stencilURL = baseURL + 'stencils/ibm2cloud.xml';
		//mxStencilRegistry.loadStencilSet(stencilURL);
	};
})();
