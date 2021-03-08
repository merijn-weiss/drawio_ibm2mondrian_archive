(function()
{
	Sidebar.prototype.IBM2MondrianBaseShape = {
		SHAPE_TYPE: {
			ACTOR: 'actor',
			TARGET_SYSTEM: 'ts',
			LOGICAL_NODE: 'ln',
			LOGICAL_COMPONENT: 'lc',
			PRESCRIBED_NODE: 'pn',
			PRESCRIBED_COMPONENT: 'pc',
			GROUP: 'group',
		},

		SHAPE_LAYOUT: {
			EXPANDED: 'expanded',
			COLLAPSED: 'collapsed',
		},

		SHAPE_CONTAINER: {
			YES: 'container',
			YES_TRANSPARENT: 'container_transparent',
			NO: 'no_container',
			NO_TRANSPARENT: 'no_container_transparent',
		},

		COLOR_FAMILY: {
			RED: 'red',
			MAGENTA: 'magenta',
			PURPLE: 'purple',
			CYAN: 'cyan',
			BLUE: 'blue',
			TEAL: 'teal',
			GREEN: 'green',
			BLACK: 'black',
			GRAY: 'gray',
			NO_COLOR: 'noColor'
		}
	}

	Sidebar.prototype.addIBM2MondrianPalette = function()
	{
		const dt = 'ibm mondrian ';
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

		const stencils = 
		[
		    [['Base Shapes'],
				['Actor',								'default',			MBS.SHAPE_TYPE.ACTOR, 				MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.COLLAPSED, MBS.SHAPE_CONTAINER.NO],
				['Target System (Collapsed)',			'default',			MBS.SHAPE_TYPE.TARGET_SYSTEM, 		MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.COLLAPSED, MBS.SHAPE_CONTAINER.NO],
				['Logical Node (Collapsed)',			'default',			MBS.SHAPE_TYPE.LOGICAL_NODE, 		MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.COLLAPSED, MBS.SHAPE_CONTAINER.NO],
				['Logical Component (Collapsed)',		'default',			MBS.SHAPE_TYPE.LOGICAL_COMPONENT, 	MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.COLLAPSED, MBS.SHAPE_CONTAINER.NO],
				['Prescribed Node (Collapsed)',			'default',			MBS.SHAPE_TYPE.PRESCRIBED_NODE, 	MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.COLLAPSED, MBS.SHAPE_CONTAINER.NO],
				['Prescribed Component (Collapsed)',	'default',			MBS.SHAPE_TYPE.PRESCRIBED_COMPONENT, MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.COLLAPSED, MBS.SHAPE_CONTAINER.NO],

				['Target System (Expanded)',			'default',			MBS.SHAPE_TYPE.TARGET_SYSTEM, 		MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.NO],
				['Logical Node (Expanded)',				'default',			MBS.SHAPE_TYPE.LOGICAL_NODE, 		MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.NO],
				['Logical Component (Expanded)',		'default',			MBS.SHAPE_TYPE.LOGICAL_COMPONENT, 	MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.NO],
				['Prescribed Node (Collapsed)',			'default',			MBS.SHAPE_TYPE.PRESCRIBED_NODE, 	MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.NO],
				['Prescribed Component (Collapsed)',	'default',			MBS.SHAPE_TYPE.PRESCRIBED_COMPONENT, MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.NO],

				['Group (Container)',					'default',			MBS.SHAPE_TYPE.GROUP, 				MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.YES_TRANSPARENT],
				['Group (No Container)',				'default',			MBS.SHAPE_TYPE.GROUP, 				MBS.COLOR_FAMILY.BLUE, MBS.SHAPE_LAYOUT.EXPANDED, MBS.SHAPE_CONTAINER.NO_TRANSPARENT],
	   	    ],
		];

		stencils.forEach((section, stencil_index) => {
			var header = '';
			var entries = [];
			section.forEach((stencil, section_index) => {
				if (section_index == 0)
					header = stencil[0];
				else
					entries.push(this.addEntry(dt + name.toLowerCase(), function() { 
						var shapeName = stencil[0];
						var iconName = stencil[1];
						var shapeType = stencil[2];
						var shapeColor = stencil[3];
						var shapeLayout = stencil[4];
						var shapeContainer = stencil[5];
			
						var styleFont = '';
						var extraStyle = '';
						var shapeId = '';
			
						var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shapeType, shapeLayout, shapeColor, shapeContainer, styleFont, extraStyle, shapeId, shapeName, iconName);
						   return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, shapeName);
					}))
			});
			this.setCurrentSearchEntryLibrary('ibm2mondrian', 'ibm2' + header);
			this.addPaletteFunctions('ibm2mondrian' + header, 'IBM 2.0 / ' + header, false, entries);
		});

		this.setCurrentSearchEntryLibrary();
	};

	Sidebar.prototype.addIBM2MondrianVertexTemplateFactory = function(shapeType, shapeLayout, shapeColor, shapeContainer, styleFont, shapeExtraStyle, shapeId, shapeName, iconName)
	{
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;
		const gn = 'mxgraph.ibm2mondrian';
		const default_icon = '';
		var styleOther = 'metaEdit=1;strokeWidth=1' + shapeExtraStyle;
		var styleFont = (styleFont == '') ? ';fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14' : styleFont;
		var styleText = 'html=1;whiteSpace=wrap' + styleFont;
		var shapeWidth = null;
		var shapeHeight = null;
	
		if(shapeLayout === MBS.SHAPE_LAYOUT.EXPANDED)
		{
			shapeHeight = (shapeType == MBS.SHAPE_TYPE.GROUP) ? 152 : 48;
			shapeWidth = 240;
			styleText = styleText + ';verticalAlign=middle;align=left;spacing=0;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0';
		}
		else if(shapeLayout === MBS.SHAPE_LAYOUT.COLLAPSED)
		{
			shapeHeight = 48;
			shapeWidth = (shapeType === MBS.SHAPE_TYPE.TARGET_SYSTEM) ? 64 : 48;
			styleText = styleText + ';verticalAlign=top;align=center;spacing=0;spacingLeft=0;spacingRight=0;spacingTop=4;spacingBottom=0;verticalLabelPosition=bottom;labelPosition=center;positionText=bottom';
		}

		if(shapeContainer === MBS.SHAPE_CONTAINER.YES || shapeContainer === MBS.SHAPE_CONTAINER.YES_TRANSPARENT)
			styleOther = styleOther + ';container=1;collapsible=0;recursiveResize=0';
		else if(shapeContainer === MBS.SHAPE_CONTAINER.NO || shapeContainer === MBS.SHAPE_CONTAINER.NO_TRANSPARENT)
			styleOther = styleOther + ';container=0;collapsible=0;recursiveResize=0';

		if(shapeContainer === MBS.SHAPE_CONTAINER.YES_TRANSPARENT || shapeContainer === MBS.SHAPE_CONTAINER.NO_TRANSPARENT)
			styleOther = styleOther + ';colorFillText=noColor;colorFillContainer=noColor';			

		var bg = new mxCell('', 
			new mxGeometry(0, 0, shapeWidth, shapeHeight), 
				"shape=" + gn + ".base" + ";shapeType=" + shapeType + ";shapeLayout=" + shapeLayout + ";colorFamily=" + shapeColor + ";" + styleText + ";" + styleOther + ";" + "image=" + default_icon);
		bg.vertex = true;
		bg.setValue(mxUtils.createXmlDocument().createElement('UserObject'));
		bg.setAttribute('placeholders', '1');
		bg.setAttribute('label', '%Element-Name%<BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
		bg.setAttribute('Element-ID', shapeId);
		bg.setAttribute('Element-Name', shapeName);
		bg.setAttribute('Icon-Name', iconName);
		
		return bg;
	}
})();
