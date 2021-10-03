(function()
{
    Sidebar.prototype.addIBM2CorePalette = function()
    {
		let baseURL = (new RegExp(/^.*\//)).exec(window.location.href)[0];
		let sidebarURL = baseURL + 'js/diagramly/sidebar/ibm/IBM2MondrianCore.json';
		let sideBarConfig = `{"id": "ibm2core", "name": "IBM" , "url": "${sidebarURL}" }`;

		this.addIBM2MondrianPalette([JSON.parse(sideBarConfig)], addSidebarBase = false);

		//let stencilURL = baseURL + 'stencils/ibm2cloud.xml';
		//mxStencilRegistry.loadStencilSet(stencilURL);
	};
})();
