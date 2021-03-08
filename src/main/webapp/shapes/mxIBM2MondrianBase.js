/**
 * Copyright (c) 2020, Merijn Weiss
 */
/**
 * Class: mxIBM2MondrianBase
 *
 * Extends <mxShape> to implement an shapes which are compliant with the IBM Mondrian Design Method
 * 
 * Constructor: mxMondrianBase
 * 
 * Parameters:
 * 
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
function mxIBM2MondrianBase(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this, bounds, fill, stroke, strokewidth);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxIBM2MondrianBase, mxShape);

mxIBM2MondrianBase.prototype.cst = {
	MONDRIAN_BASE : 'mxgraph.ibm2mondrian.base',
	MONDRIAN_VERSION: 'version',
	MONDRIAN_VERSION_DEFAULT: 'v1a',

	SHAPE_TYPE : 'shapeType',
	SHAPE_TYPE_DEFAULT : 'pn',
	SHAPE_LAYOUT : 'shapeLayout',
	SHAPE_LAYOUT_DEFAULT : 'expanded',

	SHAPE_MULTIPLICITY : 'shapeMultiplicity',
	SHAPE_MULTIPLICITY_DEFAULT : false,

	ICON_IMAGE : 'iconImage',
	ICON_IMAGE_DEFAULT : 'stencilIcon',

	COLOR_FAMILY : 'colorFamily',
	COLOR_FAMILY_DEFAULT : 'blue',
	COLOR_FILL_ICON : 'colorFillIcon', 
	COLOR_FILL_ICON_DEFAULT : 'medium', 
	COLOR_FILL_TEXT : 'colorFillText', 
	COLOR_FILL_TEXT_DEFAULT : 'white',
	COLOR_FILL_CONTAINER : 'colorFillContainer', 
	COLOR_FILL_CONTAINER_DEFAULT : 'white',

	POSITION_TEXT : 'positionText', 
	POSITION_TEXT_DEFAULT : 'bottom',
};

//**********************************************************************************************************************************************************
// IBM Design Language Color Definitions https://www.ibm.com/design/language/color/#specifications
//**********************************************************************************************************************************************************
mxIBM2MondrianBase.prototype.getSelectedColorSpecification = function(colorFamily) {
	switch(colorFamily) {
		case 'red':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#fff1f1', swatch_20: '#ffd7d9', swatch_30: '#ffb3b8', swatch_40: '#ff8389', swatch_50: '#fa4d56', swatch_60: '#da1e28', swatch_70: '#a2191f', swatch_80: '#750e13', swatch_90: '#520408', swatch_100: '#2d0709'};
		case 'magenta':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#fff0f7', swatch_20: '#ffd6e8', swatch_30: '#ffafd2', swatch_40: '#ff7eb6', swatch_50: '#ee5396', swatch_60: '#d02670', swatch_70: '#9f1853', swatch_80: '#740937', swatch_90: '#510224', swatch_100: '#2a0a18'};
		case 'purple':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f6f2ff', swatch_20: '#e8daff', swatch_30: '#d4bbff', swatch_40: '#be95ff', swatch_50: '#a56eff', swatch_60: '#8a3ffc', swatch_70: '#6929c4', swatch_80: '#491d8b', swatch_90: '#31135e', swatch_100: '#1c0f30'};
		case 'cyan':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#e5f6ff', swatch_20: '#bae6ff', swatch_30: '#82cfff', swatch_40: '#33b1ff', swatch_50: '#1192e8', swatch_60: '#0072c3', swatch_70: '#00539a', swatch_80: '#003a6d', swatch_90: '#012749', swatch_100: '#061727'};
		case 'blue':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#edf5ff', swatch_20: '#d0e2ff', swatch_30: '#a6c8ff', swatch_40: '#78a9ff', swatch_50: '#4589ff', swatch_60: '#0f62fe', swatch_70: '#0043ce', swatch_80: '#002d9c', swatch_90: '#001d6c', swatch_100: '#001141'};
		case 'teal':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#d9fbfb', swatch_20: '#9ef0f0', swatch_30: '#3ddbd9', swatch_40: '#08bdba', swatch_50: '#009d9a', swatch_60: '#007d79', swatch_70: '#005d5d', swatch_80: '#004144', swatch_90: '#022b30', swatch_100: '#081a1c'};
		case 'green':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#defbe6', swatch_20: '#a7f0ba', swatch_30: '#6fdc8c', swatch_40: '#42be65', swatch_50: '#24a148', swatch_60: '#198038', swatch_70: '#0e6027', swatch_80: '#044317', swatch_90: '#022d0d', swatch_100: '#071908'};
		case 'black':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f2f4f8', swatch_20: '#dde1e6', swatch_30: '#000000', swatch_40: '#000000', swatch_50: '#000000', swatch_60: '#000000', swatch_70: '#000000', swatch_80: '#000000', swatch_90: '#000000', swatch_100: '#000000'};
		case 'gray':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f2f4f8', swatch_20: '#dde1e6', swatch_30: '#c1c7cd', swatch_40: '#a2a9b0', swatch_50: '#878d96', swatch_60: '#697077', swatch_70: '#4d5358', swatch_80: '#343a3f', swatch_90: '#21272a', swatch_100: '#121619'};
	}
}

// A color swatch of 60 or higher is considered 'dark'
mxIBM2MondrianBase.prototype.isDarkColor = function(paletteVersion,color,colorSwatch)
{
	if(color === '#000000') // black
		return true;
	else if(color === '#ffffff') // white
		return false;
	else
	{
		var swatch = null; 
		if(colorSwatch != null)
			swatch = colorSwatch.split("_")[1];
		if(swatch != null)
			if(paletteVersion === 'v2')
				return parseInt(swatch) >= 50;
			else
				return parseInt(swatch) >= 60;
		else
			return false;	
	}
}

mxIBM2MondrianBase.prototype.colorIntensity = {
	NO_COLOR: 'noColor',
	WHITE: 'white',
	VERY_LIGHT: 'veryLight',
	LIGHT: 'light',
	MEDIUM: 'medium',
	DARK: 'dark'
}

mxIBM2MondrianBase.prototype.getColorSwatch = function(paletteVersion, colorFamily, colorIntensity, shapePart, shapeLayout, shapeType)
{
	if(shapeType === 'group' && shapePart === 'corner')
	{
		return mxIBM2MondrianBase.prototype.colorIntensity.NO_COLOR; // the icon in a group never has a fill
	}
	else
	{
		if(paletteVersion === 'v2')
		{
			if(shapePart === 'outerLine')// TODO: after v1/v2 decision made this must be fixed. Now you the color is determined by the Icon (Fill)
			{
				switch(colorIntensity) 
				{
					case mxIBM2MondrianBase.prototype.colorIntensity.DARK:
						if(colorFamily === 'blue' || colorFamily === 'red' || colorFamily === 'gray') // TODO: check with Diana since the spec says Black for Gray
							return 'swatch_80';
						else
							return 'swatch_70';
					default:
						if(colorFamily === 'blue' || colorFamily === 'gray')
							return 'swatch_60';
						else
							return 'swatch_50';	
						}
			}
			else
			{
				switch(colorIntensity)
				{
					case mxIBM2MondrianBase.prototype.colorIntensity.NO_COLOR:
						return mxIBM2MondrianBase.prototype.colorIntensity.NO_COLOR;
					case mxIBM2MondrianBase.prototype.colorIntensity.WHITE:
						return mxIBM2MondrianBase.prototype.colorIntensity.WHITE;
					case mxIBM2MondrianBase.prototype.colorIntensity.VERY_LIGHT:
					case mxIBM2MondrianBase.prototype.colorIntensity.LIGHT:
						return 'swatch_10';
					case mxIBM2MondrianBase.prototype.colorIntensity.MEDIUM:
						if(colorFamily === 'blue' || colorFamily === 'gray')
							return 'swatch_60';
						else
							return 'swatch_50';
					case mxIBM2MondrianBase.prototype.colorIntensity.DARK:
						if(colorFamily === 'blue' || colorFamily === 'red' || colorFamily === 'gray') // TODO: check with Diana since the spec says Black for Gray
							return 'swatch_80';
						else
							return 'swatch_70';
				}	
			}
		}
		else // paletteVersion === 'v1a' || paletteVersion === 'v1b'
		{
			if (shapePart === 'outerLine' && paletteVersion === 'v1b')
				return 'swatch_60'
			else if (shapePart === 'outerLine' && shapeLayout === 'expanded')
				return 'swatch_60'
			else if(shapePart === 'outerLine' && shapeLayout === 'collapsed' && (colorIntensity === 'noColor' || colorIntensity === 'white'))
				return 'swatch_60';
			else
			{
				switch(colorIntensity)
				{
					case mxIBM2MondrianBase.prototype.colorIntensity.NO_COLOR:
						return mxIBM2MondrianBase.prototype.colorIntensity.NO_COLOR;
					case mxIBM2MondrianBase.prototype.colorIntensity.WHITE:
						return mxIBM2MondrianBase.prototype.colorIntensity.WHITE;
					case mxIBM2MondrianBase.prototype.colorIntensity.VERY_LIGHT:
						return 'swatch_10';
					case mxIBM2MondrianBase.prototype.colorIntensity.LIGHT:
						return 'swatch_30';
					case mxIBM2MondrianBase.prototype.colorIntensity.MEDIUM:
						return 'swatch_40';
					case mxIBM2MondrianBase.prototype.colorIntensity.DARK:
						return 'swatch_50';
				}
			}
		}	
	}
}


// The ShapeVisualDefinition contains all properties that define color of various parts of the Shape
mxIBM2MondrianBase.prototype.getShapeVisualDefinition = function (mondrianVersion, shapeType, shapeLayout,
							colorFamily, colorFillIcon, colorFillText, colorFillContainer) {	
	// basic colors
	const WHITE = '#ffffff';
	const BLACK = '#000000';
	const paletteVersion = mondrianVersion;

	// VD properties
	let shapeVD = {
		outerLine: {color: null, colorSwatch: null},
		bar: {color: null, visible: false, width: null},
		corner: {color: null, colorSwatch: null},
		icon: {color: null, colorSwatch: null},
		titleBar: {color: null, colorSwatch: null},
		dividerLine: {color: null, colorSwatch: null},
		container: {color: null, colorSwatch: null},
		decorator: {component: {color: WHITE, colorSwatch: null},}
	};

	// Shape Type Specific
	if(shapeType === 'group') {
		shapeVD.bar.visible = (shapeType === 'group' && colorFillIcon != 'noColor'); // color fill is a workaround to enable hiding the bar
		shapeVD.bar.width = (shapeVD.bar.visible) ? 6 : 0;
	}

	// Get the Swatches for each Shape part
	//outerline
	shapeVD.outerLine.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillIcon, 'outerLine', shapeLayout, shapeType);

	//bar
	shapeVD.bar.colorSwatch = shapeVD.outerLine.colorSwatch;

	//corner
	shapeVD.corner.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillIcon, 'corner', shapeLayout, shapeType);

	//titleBar
	shapeVD.titleBar.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillText, 'titleBar', shapeLayout, shapeType);

	//dividerLine		
	shapeVD.dividerLine.colorSwatch = (shapeVD.titleBar.colorSwatch === 'swatch_10') ? 'swatch_30' : 'swatch_20';

	//container
	shapeVD.container.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillContainer, 'container', shapeLayout, shapeType);

	// Get the HEX values for each Shape part
	shapeVD.outerLine.color = this.getSelectedColorSpecification(colorFamily)[shapeVD.outerLine.colorSwatch];
	shapeVD.bar.color = this.getSelectedColorSpecification(colorFamily)[shapeVD.bar.colorSwatch];
	shapeVD.corner.color = this.getSelectedColorSpecification(colorFamily)[shapeVD.corner.colorSwatch];
	shapeVD.titleBar.color = this.getSelectedColorSpecification(colorFamily)[shapeVD.titleBar.colorSwatch];
	shapeVD.dividerLine.color = this.getSelectedColorSpecification(colorFamily)[shapeVD.dividerLine.colorSwatch];
	shapeVD.container.color = this.getSelectedColorSpecification(colorFamily)[shapeVD.container.colorSwatch];

	shapeVD.icon.color = (this.isDarkColor(paletteVersion, shapeVD.corner.color, shapeVD.corner.colorSwatch)) ?  WHITE : BLACK;
	shapeVD.decorator.component.color = WHITE;

	return shapeVD;
};

mxIBM2MondrianBase.prototype.customProperties = [
	{name:'version', dispName: '[TMP: Visual Standard]', type:'enum', defVal:'v1a',
		enumList:[{val:'v1a', dispName: 'v1a - 3-color intensities, no outerline for collapsed'}, {val:'v1b', dispName: 'v1b - 3-color intensities, outerline for collapsed'}, {val:'v2', dispName: 'v2 - 2-color intensities'}]},
	{name:'shapeType', dispName:'Type', type:'enum', defVal:'pn',
		enumList:[{val:'actor', dispName: 'Actor'}, {val:'ts', dispName: 'Target System'}, {val:'ln', dispName: 'Logical Node'}, {val:'lc', dispName: 'Logical Component'}, {val:'pn', dispName: 'Prescribed Node'}, {val:'pc', dispName: 'Prescribed Component'}, {val:'group', dispName: 'Group'}]},
	{name:'shapeLayout', dispName:'Layout', type:'enum', defVal:'expanded',
		enumList:[{val:'collapsed', dispName: 'Collapsed'},{val:'expanded', dispName: 'Expanded'},{val:'custom', dispName: 'Custom'}]},
	{name: 'shapeMultiplicity', dispName: 'Multiplicity', type: 'bool', defVal: false},
	{name:'iconImage', dispName:'Icon (Image)', type:'enum', defVal:'stencilIcon',
		enumList:[{val:'noIcon', dispName: '[no icon]'}, {val:'stencilIcon', dispName: '[stencil icon]'}, {val:'imageIcon', dispName: '[image icon]'}]},
	{name:'colorFamily', dispName:'Color', type:'enum', defVal:'blue',
		enumList:[{val:'blue', dispName: 'Blue'}, {val:'black', dispName: 'Black'}, {val:'cyan', dispName: 'Cyan'}, {val:'green', dispName: 'Green'}, {val:'gray', dispName: 'Gray'}, {val:'magenta', dispName: 'Magenta'}, {val:'purple', dispName: 'Purple'}, {val:'red', dispName: 'Red'}, {val:'teal', dispName: 'Teal'}]},
	{name:'colorFillIcon', dispName:'Fill (Icon)', type:'enum', defVal:'medium',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'light', dispName: 'Light'}, {val:'medium', dispName: 'Medium'}, {val:'dark', dispName: 'Dark'}]},
	{name:'colorFillText', dispName:'Fill (Text)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'veryLight', dispName: 'Very Light'}]},
	{name:'colorFillContainer', dispName:'Fill (Container)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'veryLight', dispName: 'Very Light'}]},
	{name:'positionText', dispName:'Position (Text)', type:'enum', defVal:'bottom',
		enumList:[{val:'bottom', dispName: 'Bottom'}, {val:'top', dispName: 'Top'}, {val:'left', dispName: 'Left'}, {val:'right', dispName: 'Right'}]},
	];

mxCellRenderer.registerShape(mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE, mxIBM2MondrianBase);

/**
 * Variable: cornerRadius
 *
 * Default radius for rounded Logical elements. Default is 8.
 */
mxIBM2MondrianBase.prototype.cornerRadius = 8;

/**
 * Variable: textSpacing
 *
 * Default value for text spacing. Default is 4.
 */
mxIBM2MondrianBase.prototype.textSpacing = 4;

/**
 * Variable: targetSystemRadius
 *
 * Default radius for rounded corner of Target System element. Default is 20.
 */
mxIBM2MondrianBase.prototype.targetSystemRadius = 20;

/**
 * Variable: textSpacingTop
 *
 * Default value for text spacing. Default is 12.
 */
mxIBM2MondrianBase.prototype.textSpacingTop = 12;

/**
 * Variable: textSpacingLeft
 *
 * Default value for text spacing. Default is 12.
 */
mxIBM2MondrianBase.prototype.textSpacingLeft = 12;

/**
 * Variable: textSpacingRight
 *
 * Default value for text spacing. Default is 16.
 */
mxIBM2MondrianBase.prototype.textSpacingRight = 16;

/**
 * Variable: iconSize
 *
 * Default width and height for the icon. Default is 24.
 */
mxIBM2MondrianBase.prototype.iconSize = 24;

/**
 * Variable: iconSpacing
 *
 * Default width and height for the icon. Default is 12.
 */
mxIBM2MondrianBase.prototype.iconSpacing = 12;

/**
 * Variable: titleBarHeight
 *
 * Default width and height for the titleBarHeight. Default is 48.
 */
mxIBM2MondrianBase.prototype.titleBarHeight = 48;

/**
 * Variable: shapeWidthIconView
 *
 * Default width and height for the titleBarHeight. Default is 48.
 */
mxIBM2MondrianBase.prototype.shapeWidthIconView = 48;

/**
 * Variable: shapeHeightIconView
 *
 * Default width and height for the titleBarHeight. Default is 48.
 */
mxIBM2MondrianBase.prototype.shapeHeightIconView = 48;

/**
 * Variable: titleBarWidthMinimum
 *
 * Default width and height for the titleBarWidthMinimum. Default is 144.
 */
mxIBM2MondrianBase.prototype.titleBarWidthMinimum = 144;

/**
 * Function: init
 *
 * Initializes the shape and the <indicator>.
 */
mxIBM2MondrianBase.prototype.init = function(container)
{
	if(Editor.config != null && Editor.config[mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE])
	{
		for (var key in Editor.config[mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE]['icon_stencil_libraries']) {
			mxStencilRegistry.loadStencilSet(
				Editor.config[mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE]['icon_stencil_libraries'][key]);
		}
	}

	mxShape.prototype.init.apply(this, arguments);

	this.templateConversion();

	this.cellID = this.state.cell.id;
	this.installListeners();
};

/* temporary function to support coversion of old diagrams  */
mxIBM2MondrianBase.prototype.colorConversion = function(colorValue)
{
	switch(colorValue)
	{
		case 'swatch_10':
			return 'veryLight';
		case 'swatch_30':
			return 'light';
		case 'swatch_40':
			return 'medium';
		case 'swatch_50':
			return 'dark';
		default:
			return colorValue;
	}
}

mxIBM2MondrianBase.prototype.templateConversion = function()
{
	try {
		if(this.state != null)
		{
			let styleCurrent = null;
			let styleUpdate = false;
		
			if(this.state.view.graph.model != null && this.state.cell != null)
				styleCurrent = this.state.view.graph.model.getStyle(this.state.cell);
		
			//const shapeVersion = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.MONDRIAN_VERSION);
		
			//if(shapeVersion == 'undefined')
			//{
			//}
			if(styleCurrent != null)
				styleUpdate = (styleCurrent.indexOf('swatch_') > 0)
		
			if(styleUpdate)
			{
				newStyle = styleCurrent.replace(/swatch_10/g, 'veryLight');
				newStyle = newStyle.replace(/swatch_30/g, 'light');
				newStyle = newStyle.replace(/swatch_40/g, 'medium');
				newStyle = newStyle.replace(/swatch_50/g, 'dark');
		
				//console.log(newStyle);
				this.state.view.graph.model.beginUpdate();
				try
				{
					if(this.state.style['colorFillIcon'] != null)
						this.state.style['colorFillIcon'] = this.colorConversion(this.state.style['colorFillIcon']);
					if(this.state.style['colorFillText'] != null)
						this.state.style['colorFillText'] = this.colorConversion(this.state.style['colorFillText']);
					if(this.state.style['colorFillContainer'] != null)
						this.state.style['colorFillContainer'] = this.colorConversion(this.state.style['colorFillContainer']);

					this.state.view.graph.model.setStyle(this.state.cell, newStyle);
				}
				catch(err)
				{
					console.log(err);
				}
				finally
				{
					this.state.view.graph.model.endUpdate();
				}
			}			
		}			
	} catch (error) {
		console.log(error);
	}

}

mxIBM2MondrianBase.prototype.installListeners = function()
{
	if (this.changeListener == null)
	{
		this.changeListener = mxUtils.bind(this, function(sender, evt)
		{
			try
			{
				if(evt.properties.change.constructor.name === 'mxValueChange' && (evt.properties.change.cell.id === this.cellID))
				{
					const currentIconAttribute = evt.properties.change.value.attributes.getNamedItem('Icon-Name');
					const previousIconAttribute = evt.properties.change.previous.attributes.getNamedItem('Icon-Name');
	
					const currentIconName = (currentIconAttribute != null) ? currentIconAttribute.value : null;
					const previousIconName = (previousIconAttribute != null) ?  previousIconAttribute.value : null;
					
					if(currentIconName != previousIconName)
						this.redraw();
				}
				else if(evt.properties.change.constructor.name === 'mxStyleChange' && (evt.properties.change.cell.id === this.cellID))
				{
					const styleCurrent = evt.properties.change.style;
					
					const isMondrianShape = (styleCurrent.indexOf(mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE) > 0);
					if(isMondrianShape)
					{
						const stylePrevious = evt.properties.change.previous;
	
						const shapeTypeCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE);
						const shapeTypePrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE);
	
						const shapeLayoutCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT);
						const shapeLayoutPrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT);
	
						const positionTextCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT);
						const positionTextPrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT);
	
						const iconImageCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE);
						const iconImagePrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE);
	
						var styleMustUpdate = (shapeTypeCurrent != shapeTypePrevious) || (shapeLayoutCurrent != shapeLayoutPrevious || (positionTextCurrent != positionTextPrevious) || iconImageCurrent != iconImagePrevious);
						if(styleMustUpdate)
						{
							// Define the new style
							var styleNew = styleCurrent;
							styleNew = mxIBM2MondrianBase.prototype.getStyle(styleNew, shapeTypeCurrent, shapeLayoutCurrent, positionTextCurrent, iconImageCurrent);
							styleMustUpdate = mxIBM2MondrianBase.prototype.cellMustRestyle(styleCurrent, styleNew);
						}
						
						var geoMustUpdate = (shapeTypeCurrent != shapeTypePrevious) || (shapeLayoutCurrent != shapeLayoutPrevious);
						if(geoMustUpdate)
						{
							//Define the new Geometery
							const geoCurrent = evt.properties.change.cell.geometry;
							var newRect = mxIBM2MondrianBase.prototype.getRectangle(
								new mxRectangle(geoCurrent.x, geoCurrent.y, geoCurrent.width, geoCurrent.height), 
									shapeTypeCurrent, shapeLayoutCurrent, 'change listener');
					
							geoMustUpdate = mxIBM2MondrianBase.prototype.cellMustResize(geoCurrent, newRect);
						}
	
						if(styleMustUpdate || geoMustUpdate)
						{
							this.state.view.graph.model.beginUpdate();
							try
							{				
								if(styleMustUpdate)
								{
									this.state.view.graph.model.setStyle(this.state.cell, styleNew);
								}
									
								if(geoMustUpdate)
								{
									this.state.view.graph.model.setGeometry(this.state.cell, 
										new mxGeometry(newRect.x, newRect.y, newRect.width, newRect.height));
								}
							}
							finally
							{
								this.state.view.graph.model.endUpdate();
							}
						}
					}
				}
				else
				{
					// do nothing
				}
			}
			catch(err)
			{
				// do nothing
			}
		});

		this.state.view.graph.model.addListener(mxEvent.EXECUTED, this.changeListener);
	}
}

mxIBM2MondrianBase.prototype.getStyleValue = function(style, key)
{
	var value = 'undefined';
	var keyIndex = style.indexOf(key);

	if(keyIndex > 0)
	{	
		var valueSeparator = style.indexOf('=', keyIndex + 1);
		var keySeparator = style.indexOf(';', valueSeparator + 1);

		if(keySeparator < 0)
			keySeparator = style.length;
		
		value = style.substring(valueSeparator + 1, keySeparator);
	}

	return value;
}

/**
 * Function: redraw
 *
 * Reconfigures this shape. This will update the attributees of the Shape.
 */
mxIBM2MondrianBase.prototype.redraw = function()
{
	this.version = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.MONDRIAN_VERSION, mxIBM2MondrianBase.prototype.cst.MONDRIAN_VERSION_DEFAULT);	
	this.shapeType = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE_DEFAULT);	
	this.shapeLayout = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	this.shapeMultiplicity = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_MULTIPLICITY, mxIBM2MondrianBase.prototype.cst.SHAPE_MULTIPLICITY_DEFAULT);
	this.iconImage = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE_DEFAULT);
	this.colorFamily = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY_DEFAULT);
	this.colorFillIcon = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON_DEFAULT);
	this.colorFillText = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT_DEFAULT);
	this.colorFillContainer = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER_DEFAULT);
	this.positionText = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT_DEFAULT);

	mxShape.prototype.redraw.apply(this, arguments);
};

mxIBM2MondrianBase.prototype.cellMustResize = function(currentGeo, newGeo)
{
	if(currentGeo.width != newGeo.width)
		return true;
	else if(currentGeo.height != newGeo.height)
		return true;
	else
		return false;
}

mxIBM2MondrianBase.prototype.cellMustRestyle = function(currentStyle, newStyle)
{
	return newStyle != currentStyle;
}

mxIBM2MondrianBase.prototype.paintVertexShape = function(c, x, y, w, h)
{
	this.shapeVisualDefinition = mxIBM2MondrianBase.prototype.getShapeVisualDefinition(
		this.version,
		this.shapeType, this.shapeLayout,
		this.colorFamily, this.colorFillIcon, this.colorFillText, this.colorFillContainer);

	c.translate(x, y);
	
	this.paintContainer(c, x, y, w, h);
	this.paintTitleBar(c, x, y, w, h);
	this.paintIconBox(c, x, y, w, h);
	this.paintIcon(c, x, y, w, h);
	this.paintShape(c, x, y, w, h);
};

/**
 * Function: paintContainer
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintContainer = function(c, x, y, w, h)
{
	const endContainer = h - this.titleBarHeight;
	const startContainer = this.titleBarHeight;

	if(this.shapeLayout != 'collapsed' && endContainer > 0)
	{
		if(this.shapeType === 'ln' || this.shapeType === 'lc')
		{
			c.setFillColor(this.shapeVisualDefinition.container.color);
			c.begin();
			c.moveTo(0, startContainer);
			c.lineTo(w, startContainer);
			c.lineTo(w, h - this.cornerRadius);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, w - this.cornerRadius, h);
			c.lineTo(this.cornerRadius, h);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, h - this.cornerRadius);
			c.lineTo(0, startContainer);
			c.close();
			c.fill();
		}
		else {
			c.setFillColor(this.shapeVisualDefinition.container.color);
			c.rect(0, startContainer, w, endContainer);
			c.fill();
		}	
	}
};

/**
 * Function: paintTitleBar
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintTitleBar = function(c, x, y, w, h)
{
	if(this.shapeLayout === 'expanded' && this.shapeVisualDefinition.titleBar.color != 'none')
	{
		const minHeight = Math.min(h, this.titleBarHeight);
		if(this.shapeType === 'ln' || this.shapeType === 'lc')
		{
			
			if (h > this.titleBarHeight)
			{
				c.setFillColor(this.shapeVisualDefinition.titleBar.color);
				c.begin();
				c.moveTo(this.cornerRadius, 0);
				c.lineTo(w - this.cornerRadius, 0);
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, w, this.cornerRadius);
				c.lineTo(w, minHeight);
				c.lineTo(0, minHeight);
				c.lineTo(0, this.cornerRadius);
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, this.cornerRadius, 0);
				c.close();
				c.fill();
			}
			else
			{
				c.setFillColor(this.shapeVisualDefinition.titleBar.color);
				c.roundrect(0, 0, w, minHeight, this.cornerRadius, this.cornerRadius);
				c.fill();
			}
		}
		else if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'group')
		{
			c.setFillColor(this.shapeVisualDefinition.titleBar.color);
			c.rect(0, 0, w, minHeight);
			c.fill();
		}
		else if(this.shapeType === 'ts')
		{
			c.setFillColor(this.shapeVisualDefinition.titleBar.color);
			c.begin();
			c.moveTo(this.targetSystemRadius, 0);
			c.lineTo(w - this.targetSystemRadius, 0);
			c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, w - this.targetSystemRadius, minHeight);
			c.lineTo(this.targetSystemRadius, minHeight);
			c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
			c.close();
			c.fill();
		}
		else {
			//do nothing
		}	
	}
};

/**
 * Function: paintIconBox
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintIconBox = function(c, x, y, w, h)
{
	const minWidth = Math.min(w, this.getIconBoxWidth());
	const minHeight = Math.min(h, this.titleBarHeight);

	if(minWidth > 0)
	{
		c.setFillColor(this.shapeVisualDefinition.corner.color);

		if(this.shapeType === 'actor')
		{
			c.ellipse(0, 0, minWidth, minHeight);
		}
		else if(this.shapeType === 'ts')
		{
			if(w <= 64)
			{
				c.begin();
				c.moveTo(this.targetSystemRadius, 0);
				c.lineTo(minWidth - this.targetSystemRadius, 0);
				c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, minWidth - this.targetSystemRadius, minHeight);
				c.lineTo(this.targetSystemRadius, minHeight);
				c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
				c.close();
			}
			else
			{
				c.begin();
				c.moveTo(this.targetSystemRadius, 0);
				c.lineTo(minWidth, 0);
				c.lineTo(minWidth, minHeight);
				c.lineTo(this.targetSystemRadius, minHeight);
				c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
				c.close();
			}
		}
		else if(this.shapeType === 'ln' || this.shapeType === 'lc') // Logical Node or Logical Component
		{
			if(w <= this.shapeWidthIconView)
			{
				c.roundrect(0, 0, minWidth, minHeight, this.cornerRadius, this.cornerRadius);
			}
			else
			{
				c.begin();
				c.moveTo(this.cornerRadius, 0);
				c.lineTo(minWidth, 0);
				c.lineTo(minWidth, minHeight);
				if (h > this.titleBarHeight)
				{
					c.lineTo(0, minHeight);
				}
				else
				{
					c.lineTo(this.cornerRadius, minHeight);
					c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, minHeight - this.cornerRadius);
				}
				c.lineTo(0, this.cornerRadius);	
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, this.cornerRadius, 0);
				c.close();	
			}		
		}
		else if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'group')
		{
			c.rect(0, 0, minWidth, minHeight);
		}
		
		c.fill();
	}
};

/**
 * Function: paintShape
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintShape = function(c, x, y, w, h)
{
	var shapeWidth = w;
	var shapeHeigth = h;
	var componentDecoratorOffset = -4;
	var componentDecoratorHeight = 4;
	var componentDecoratorWidth = 8;

	if(this.shapeLayout == 'collapsed' || this.shapeType === 'actor')
	{
		shapeWidth = this.getIconBoxWidth();
		shapeHeigth = this.getIconBoxWidth();
	}
	
	if(this.shapeType === 'actor')
	{
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);
		c.ellipse(0, 0, shapeWidth, shapeHeigth);
		c.stroke();
	}
	else if(this.shapeType === 'ts')
	{
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);
		c.begin();
		c.moveTo(this.targetSystemRadius, 0);
		c.lineTo(shapeWidth - this.targetSystemRadius, 0);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, shapeWidth - this.targetSystemRadius, this.titleBarHeight);
		c.lineTo(this.targetSystemRadius, this.titleBarHeight);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
		c.close();
		c.stroke();
	}
	else if(this.shapeType === 'ln' || this.shapeType === 'lc') // Logical Node or Logical Component
	{
		if (h > this.titleBarHeight)
		{
			c.setStrokeColor(this.shapeVisualDefinition.dividerLine.color);
			c.begin();
			c.moveTo(0, this.titleBarHeight);
			c.lineTo(shapeWidth, this.titleBarHeight);		
			c.stroke();
		}
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);
		c.roundrect(0, 0, shapeWidth, shapeHeigth, this.cornerRadius, this.cornerRadius);
		c.stroke();
		
		this.paintShapeMultiplicity(c, shapeWidth, shapeHeigth, 'rounded');

		if(this.shapeType === 'lc')
		{
			c.setFillColor(this.shapeVisualDefinition.decorator.component.color);
			c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
			c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
		}
	}
	else if(this.shapeType === 'pn' || this.shapeType === 'pc') // Prescribed Node or Prescribed Component
	{
		if (h > this.titleBarHeight)
		{
			c.setStrokeColor(this.shapeVisualDefinition.dividerLine.color);
			c.begin();
			c.moveTo(0, this.titleBarHeight);
			c.lineTo(shapeWidth, this.titleBarHeight);		
			c.stroke();
		}
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);
		c.rect(0, 0, shapeWidth, shapeHeigth);
		c.stroke();

		this.paintShapeMultiplicity(c, shapeWidth, shapeHeigth, 'rectangular');

		if(this.shapeType === 'pc')
		{
			c.setFillColor(this.shapeVisualDefinition.decorator.component.color);
			c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
			c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
		}
	}
	else if(this.shapeType === 'group')
	{
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);
		c.rect(0, 0, shapeWidth, shapeHeigth);
		c.stroke();

		this.paintShapeMultiplicity(c, shapeWidth, shapeHeigth, 'rectangular');

		if(this.shapeVisualDefinition.bar.visible)
		{
			c.setFillColor(this.shapeVisualDefinition.outerLine.color);
			c.rect(0, 0, this.shapeVisualDefinition.bar.width, this.titleBarHeight);
			c.fill();	
		}
	}
};

mxIBM2MondrianBase.prototype.paintShapeMultiplicity = function(c, shapeWidth, shapeHeigth, shapeOuterShape)
{
	if(this.shapeMultiplicity)
	{
		const multiplicityOffset = 8;
		const multiplicitySpacing = 4;
		const cornerRadius = 8;

		if(shapeOuterShape === 'rectangular')
		{
			c.begin();
			c.moveTo(multiplicityOffset, -1 * multiplicitySpacing);
			c.lineTo(shapeWidth + multiplicitySpacing, -1 * multiplicitySpacing);
			c.lineTo(shapeWidth + multiplicitySpacing, shapeHeigth - multiplicityOffset);	
	
			c.moveTo(2 * multiplicityOffset, -2 * multiplicitySpacing);
			c.lineTo(shapeWidth + 2 * multiplicitySpacing, -2 * multiplicitySpacing);
			c.lineTo(shapeWidth + 2 * multiplicitySpacing, shapeHeigth - 2 * multiplicityOffset);	
			c.stroke();
		}
		else if(shapeOuterShape === 'rounded')
		{
			c.begin();
			c.moveTo(multiplicityOffset, -1 * multiplicitySpacing);
			c.lineTo(shapeWidth + multiplicitySpacing - cornerRadius, -1 * multiplicitySpacing);
			c.arcTo(cornerRadius, cornerRadius, 0, 0, 1, shapeWidth + multiplicitySpacing, cornerRadius -1 * multiplicitySpacing);
			c.lineTo(shapeWidth + multiplicitySpacing, shapeHeigth - multiplicityOffset);	
	
			c.moveTo(2 * multiplicityOffset, -2 * multiplicitySpacing);
			c.lineTo(shapeWidth + 2 * multiplicitySpacing - cornerRadius, -2 * multiplicitySpacing);
			c.arcTo(cornerRadius, cornerRadius, 0, 0, 1, shapeWidth + 2 * multiplicitySpacing, cornerRadius -2 * multiplicitySpacing);
			c.lineTo(shapeWidth + 2 * multiplicitySpacing, shapeHeigth - 2 * multiplicityOffset);	
			c.stroke();
		}
	}
}

/**
 * Function: paintIcon
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintIcon = function(c, x, y, w, h)
{
	var positionX = this.iconSpacing;
	var positionY = this.iconSpacing;

	if(this.shapeType === 'ts')
	{
		if(this.shapeLayout === 'collapsed')
			positionX = this.targetSystemRadius;
		else
			positionX = h - (this.targetSystemRadius * 2);
	}
	else if(this.shapeType === 'group')
	{
		positionX = this.shapeVisualDefinition.bar.width + this.iconSpacing;
	}

	if(this.iconImage === 'stencilIcon')
	{
		var iconStencilName = this.state.cell.getAttribute('Icon-Name',null);
		if(iconStencilName != null && iconStencilName != '')
		{
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2mondrian.' + iconStencilName);
			if(bgSt1 == null)
				bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2mondrian.undefined');

			c.save();
			c.setStrokeColor('none');
			c.setFillColor(this.shapeVisualDefinition.icon.color);
			c.setDashed(false);
			bgSt1.strokewidth = 1;
			bgSt1.drawShape(c, this, positionX, positionY, this.iconSize, this.iconSize);
			c.restore();
		}
	}
	else if(this.iconImage === 'imageIcon' && this.image != null && this.image != '')
	{
		c.image(positionX, positionY, this.iconSize, this.iconSize, this.image, true, false, false);
	}
	else
	{
		// do nothing
	}
};

mxIBM2MondrianBase.prototype.getIconBoxWidth = function()
{
	if(this.iconImage === 'noIcon')
	{
		return this.shapeVisualDefinition.bar.width;
	}
	else
	{
		switch(this.shapeType)
		{
			case 'ts':
				if(this.shapeLayout === 'collapsed')
					return (2 * this.targetSystemRadius + this.iconSize);
				else
					return (2 * this.iconSpacing + this.iconSize - 4);
			case 'group':
				return (this.iconSpacing + this.iconSize + this.shapeVisualDefinition.bar.width);
			default:
				return (2 * this.iconSpacing + this.iconSize);
		}
	}
};


/**
 * Function: getStyle
 * 
 * Returns the style based on shapeType & shapeLayout.
 */
var shapeStyle = {};
mxIBM2MondrianBase.prototype.getStyle = function(style, shapeType, shapeLayout, positionText, iconImage)
{
	if(shapeType === 'group')
	{
		style = mxUtils.setStyle(style, 'container', 1);
		style = mxUtils.setStyle(style, 'collapsible', 0);
		style = mxUtils.setStyle(style, 'recursiveResize', 0);

		if(shapeLayout === 'collapsed') // a group can only be expanded so should ignore the shapeLayout setting
			style = mxUtils.setStyle(style, 'shapeLayout', 'expanded');
	}
	else if(shapeType === 'actor')
	{
		if(shapeLayout === 'expanded') // an actor can only be expanded so should ignore the shapeLayout setting
			style = mxUtils.setStyle(style, 'shapeLayout', 'collapsed');
	}

	if(shapeLayout === 'collapsed' || shapeLayout === 'expanded')
	{
		if(shapeLayout === 'expanded')
		{
			shapeStyle.verticalLabelPosition = mxConstants.ALIGN_MIDDLE;
			shapeStyle.labelPosition = mxConstants.ALIGN_CENTER;
			shapeStyle.verticalAlign = mxConstants.ALIGN_MIDDLE;
			if(shapeType === 'ts' && iconImage === 'noIcon') // Target Shape without Icon has text centered
				shapeStyle.align = mxConstants.ALIGN_CENTER;
			else
				shapeStyle.align = mxConstants.ALIGN_LEFT;

			shapeStyle.spacing = 0;
			shapeStyle.spacingLeft = this.textSpacingLeft;
			shapeStyle.spacingRight = this.textSpacingRight;
			shapeStyle.spacingTop = 0;//this.textSpacingTop;
			shapeStyle.spacingBottom = 0;
			style = mxUtils.setStyle(style, mxConstants.STYLE_LABEL_WIDTH, null); // remove the label width since this is controlled by the bounding box
			shapeStyle.positionText = null;			
		}
		else if(shapeLayout === 'collapsed')
		{
			if(positionText === 'top')
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_TOP;
				shapeStyle.labelPosition = mxConstants.ALIGN_CENTER;
				shapeStyle.verticalAlign = mxConstants.ALIGN_BOTTOM;
				shapeStyle.align = mxConstants.ALIGN_CENTER;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = 0;
				shapeStyle.spacingRight = 0;
				shapeStyle.spacingTop = 0;
				shapeStyle.spacingBottom = this.textSpacing;
				//shapeStyle.labelWidth = labelWidth;
				shapeStyle.positionText = positionText;
			}
			else if(positionText === 'left')
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_MIDDLE;
				shapeStyle.labelPosition = mxConstants.ALIGN_LEFT;
				shapeStyle.verticalAlign = mxConstants.ALIGN_MIDDLE;
				shapeStyle.align = mxConstants.ALIGN_RIGHT;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = 0;
				shapeStyle.spacingRight = this.textSpacing;
				shapeStyle.spacingTop = 0;
				shapeStyle.spacingBottom = 0;
				//shapeStyle.labelWidth = labelWidth;
				shapeStyle.positionText = positionText;
			}		
			else if(positionText === 'right')
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_MIDDLE;
				shapeStyle.labelPosition = mxConstants.ALIGN_RIGHT;
				shapeStyle.verticalAlign = mxConstants.ALIGN_MIDDLE;
				shapeStyle.align = mxConstants.ALIGN_LEFT;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = this.textSpacing;
				shapeStyle.spacingRight = 0;
				shapeStyle.spacingTop = 0;
				shapeStyle.spacingBottom = 0;
				//shapeStyle.labelWidth = labelWidth;
				shapeStyle.positionText = positionText;
			}		
			else // default is bottom
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_BOTTOM;
				shapeStyle.labelPosition = mxConstants.ALIGN_CENTER;
				shapeStyle.verticalAlign = mxConstants.ALIGN_TOP;
				shapeStyle.align = mxConstants.ALIGN_CENTER;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = 0;
				shapeStyle.spacingRight = 0;
				shapeStyle.spacingTop = this.textSpacing;
				shapeStyle.spacingBottom = 0;
				//shapeStyle.labelWidth = labelWidth;
				shapeStyle.positionText = 'bottom';
			}
		}

		style = mxUtils.setStyle(style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, shapeStyle.verticalLabelPosition);
		style = mxUtils.setStyle(style, mxConstants.STYLE_LABEL_POSITION, shapeStyle.labelPosition);
		style = mxUtils.setStyle(style, mxConstants.STYLE_VERTICAL_ALIGN, shapeStyle.verticalAlign);
		style = mxUtils.setStyle(style, mxConstants.STYLE_ALIGN, shapeStyle.align);

		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING, shapeStyle.spacing);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_LEFT, shapeStyle.spacingLeft);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_RIGHT, shapeStyle.spacingRight);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_TOP, shapeStyle.spacingTop);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_BOTTOM, shapeStyle.spacingBottom);

		style = mxUtils.setStyle(style, 'positionText', shapeStyle.positionText);
	}
	else // custom does not control these styles so you can use the UI to change it yourselves
	{
	}

	return style;
}
/**
 * Function: getRectangle
 * 
 * Returns the rectangle based on shapeType & shapeLayout.
 */
mxIBM2MondrianBase.prototype.getRectangle = function(rect, shapeType, shapeLayout, whoCalled)
{
	if(shapeType != null)
	{
		if(shapeType === 'actor') // Actor is always 48x48.
	 	{
			rect.width = mxIBM2MondrianBase.prototype.titleBarHeight;
			rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
		}
		else if(shapeType === 'ts') // Target System is always 48 height.
		{
			if(shapeLayout === 'collapsed')
			{
				rect.width = 64;
				rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
			}
			else if(shapeLayout === 'expanded')
			{
				rect.width = Math.max(64, mxIBM2MondrianBase.prototype.titleBarWidthMinimum, rect.width);
				rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
			}
			else // custom, do nothing
			{

			}
		}
		else if(shapeType === 'group')
		{
			if(shapeLayout === 'collapsed' || shapeLayout === 'expanded')
			{
				rect.width = Math.max(mxIBM2MondrianBase.prototype.titleBarWidthMinimum, rect.width);
				rect.height = Math.max(mxIBM2MondrianBase.prototype.titleBarHeight, rect.height);	
			}
			else
			{

			}
		}
		else
		{
			if(shapeLayout === 'collapsed')
			{
				rect.width = mxIBM2MondrianBase.prototype.titleBarHeight;
				rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
			}
			else if(shapeLayout === 'expanded')
			{
				rect.width = Math.max(mxIBM2MondrianBase.prototype.titleBarWidthMinimum, rect.width);
				rect.height = Math.max(mxIBM2MondrianBase.prototype.titleBarHeight, rect.height);
			}
			else // custom, do nothing
			{

			}
		}
	}

	return rect;
};

/**
 * Function: getLabelBounds
 * 
 * Returns the bounds for the label.
 */
mxIBM2MondrianBase.prototype.getLabelBounds = function(rect)
{
	return new mxRectangle(rect.x + this.getIconBoxWidth() * this.scale, 
					rect.y,
					rect.width -  (this.getIconBoxWidth() * this.scale),
					this.titleBarHeight * this.scale);
};

/**
 * Function: getConstraints
 * 
 * Returns the Connection Constraints for the shape.
 */
mxIBM2MondrianBase.prototype.getConstraints = function(style, w, h)
{
	var constr = [];

	if(this.shapeType === 'actor')
	{
		var step = 30;
		var h = 0.5; // x coordinate of circle center
		var k = 0.5; // y coordinate of circle center
		var r = 0.5; // radius of circle
		for(var angle=0;  angle < 360;  angle+=step)
		{ 
			var x = h + r*Math.cos(angle * (Math.PI/180));
			var y = k - r*Math.sin(angle * (Math.PI/180));
			constr.push(new mxConnectionConstraint(new mxPoint(x,y), false));
		}
	}
	else
	{
		const connectionPositions = [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.9];
		const dXoffSet = (this.shapeType != 'ts' && this.shapeMultiplicity) ? 8 : 0;
		const dYoffSet = (this.shapeType != 'ts' && this.shapeMultiplicity) ? 8 : 0;
		
		var connectionConstraint = null;
		// Left side
		for (pointPosition of connectionPositions) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(0, pointPosition), false);
			constr.push(connectionConstraint);	
		}

		// Right side
		for (pointPosition of connectionPositions) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(1, pointPosition), false);
			connectionConstraint.dx = dXoffSet;
			constr.push(connectionConstraint);	
		}

		// Top side
		for (pointPosition of connectionPositions) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(pointPosition, 0), false);
			connectionConstraint.dy = -1 * dYoffSet;
			constr.push(connectionConstraint);	
		}

		// Bottom side
		for (pointPosition of connectionPositions) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(pointPosition, 1), false);
			constr.push(connectionConstraint);	
		}

	}

	return (constr);
}

mxIBM2MondrianBase.prototype.destroy = function()
{
	mxShape.prototype.destroy.apply(this, arguments);

	if(this.changeListener != null)
	{
		this.state.view.graph.model.removeListener(this.changeListener);
		this.changeListener = null;
	}
}

var vertexHandlerUnion = mxVertexHandler.prototype.union;
mxVertexHandler.prototype.union = function(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
{
  var rect = vertexHandlerUnion.apply(this, arguments);

  if(this.state.style['shape'] === mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE)
  {
	const shapeType = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE_DEFAULT);
	const shapeLayout = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	rect = mxIBM2MondrianBase.prototype.getRectangle(rect, shapeType, shapeLayout, 'mxVertexHandler');
  }

  return rect;
};

//mxVertexHandler.prototype.livePreview = true;
mxVertexHandler.prototype.createCustomHandles = function()
{
	if(this.state.style['shape'] === mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE)
	{
		// Implements the handle for the first divider
		var cursor = 'ew-resize'
		var textHandle = new mxHandle(this.state, cursor);
		
		textHandle.getPosition = function(bounds)
		{
			var labelWidth = Math.max(48, parseFloat(mxUtils.getValue(this.state.style, 'labelWidth', 100)));
						
			switch(mxUtils.getValue(this.state.style, 'positionText', null)) {
				case 'left':
					return new mxPoint(bounds.x - labelWidth - mxIBM2MondrianBase.prototype.textSpacing, bounds.getCenterY());
				case 'right':
					return new mxPoint(bounds.x + bounds.width + labelWidth + mxIBM2MondrianBase.prototype.textSpacing, bounds.getCenterY());
				case 'top':
					return new mxPoint(bounds.getCenterX() - labelWidth/2, bounds.y - mxIBM2MondrianBase.prototype.textSpacing);
				case 'bottom':
					return new mxPoint(bounds.getCenterX() - labelWidth/2, bounds.y + bounds.height + mxIBM2MondrianBase.prototype.textSpacing);
				default:
					return null;
				}
		};
		
		textHandle.setPosition = function(bounds, pt)
		{		
			switch(mxUtils.getValue(this.state.style, 'positionText', null)) {
				case 'left':
					this.state.style['labelWidth'] = Math.round(bounds.x - pt.x - mxIBM2MondrianBase.prototype.textSpacing);
					break;
				case 'right':
					this.state.style['labelWidth'] = Math.round(pt.x - bounds.x - bounds.width - mxIBM2MondrianBase.prototype.textSpacing);
					break;
				case 'top':
					this.state.style['labelWidth'] = Math.round((bounds.getCenterX() - pt.x) * 2);
					break;
				case 'bottom':
					this.state.style['labelWidth'] = Math.round((bounds.getCenterX() - pt.x) * 2);
					break;
				default:
					return null;
				}
		};
		
		textHandle.execute = function()
		{
			this.copyStyle('labelWidth');
		}

		textHandle.ignoreGrid = true;

		return [textHandle];
	}

	return null;
};