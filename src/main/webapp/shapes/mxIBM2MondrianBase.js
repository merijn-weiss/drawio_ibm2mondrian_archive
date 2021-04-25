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
	MONDRIAN_VERSION_DEFAULT: 'v2',

	SHAPE_TYPE : 'shapeType',
	SHAPE_TYPE_DEFAULT : 'pn',
	SHAPE_LAYOUT : 'shapeLayout',
	SHAPE_LAYOUT_DEFAULT : 'expanded',
	SHAPE_STYLE : 'shapeStyle',
	SHAPE_STYLE_DEFAULT : 'solid',

	SHAPE_MULTIPLICITY : 'shapeMultiplicity',
	SHAPE_MULTIPLICITY_DEFAULT : false,

	ICON_IMAGE : 'iconImage',
	ICON_IMAGE_DEFAULT : 'stencilIcon',

	COLOR_FAMILY : 'colorFamily',
	COLOR_FAMILY_DEFAULT : 'blue',
	COLOR_FILL_ICON : 'colorFillIcon', 
	COLOR_FILL_ICON_DEFAULT : 'medium', 
	COLOR_FILL_BACKGROUND : 'colorBackground',
	COLOR_FILL_BACKGROUND_DEFAULT : 'noColor:noColor',

	COLOR_FILL_TEXT : 'colorFillText', // deprecated
	COLOR_FILL_TEXT_DEFAULT : 'white', // deprecated
	COLOR_FILL_CONTAINER : 'colorFillContainer', // deprecated
	COLOR_FILL_CONTAINER_DEFAULT : 'white', // deprecated
	
	POSITION_TEXT : 'positionText', 
	POSITION_TEXT_DEFAULT : 'bottom',

	TAG : 'tag',
	TAG_DEFAULT : 'noTag',
	TAG_COLOR_FAMILY : 'tagColorFamily',
	TAG_COLOR_FAMILY_DEFAULT : 'black',
	TAG_COLOR_FILL : 'tagColorFill', 
	TAG_COLOR_FILL_DEFAULT : 'medium', 
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
			return parseInt(swatch) >= 50;
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
	if((shapeType === 'pg' || shapeType === 'lg') && shapePart === 'corner')
	{
		return mxIBM2MondrianBase.prototype.colorIntensity.NO_COLOR;
	}
	else if(shapePart === 'outerLine' || shapePart === 'tagLine')
	{
		switch(colorIntensity) 
		{
			case mxIBM2MondrianBase.prototype.colorIntensity.DARK:
				if(colorFamily === 'blue' || colorFamily === 'red')
					return 'swatch_80';
				else
					return 'swatch_70';
			default:
				if(colorFamily === 'blue')
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
				if(colorFamily === 'blue' || colorFamily === 'red' || colorFamily === 'gray')
					return 'swatch_80';
				else
					return 'swatch_70';
		}	
	}
}


// The ShapeVisualDefinition contains all properties that define color of various parts of the Shape
mxIBM2MondrianBase.prototype.getShapeVisualDefinition = function (
							thisShape,
							mondrianVersion, 
							shapeType, shapeLayout, shapeStyle, width, height,
							colorFamily, colorFillIcon, colorFillText, colorFillContainer,
							iconImage) {
	// basic colors
	const WHITE = '#ffffff';
	const BLACK = '#000000';
	const paletteVersion = mondrianVersion;

	// VD properties
	let shapeVD = {
		shape: {type: shapeType, layout: shapeLayout, width: width, height: height, container: false},
		style: {type: shapeStyle, color: null},
		outerLine: {color: null, colorSwatch: null, 
			dashed: (shapeStyle === 'dashed'), secondLine: (shapeStyle === 'double')},
		bar: {color: null, visible: false, width: null},
		corner: {color: null, colorSwatch: null, visible: false, width: 48, height: 48},
		icon: {color: null, colorSwatch: null, visible: (iconImage != 'noIcon'), rotate: 0, flipH: false, flipV: false},
		titleBar: {color: null, colorSwatch: null},
		text: {color: null},
		dividerLine: {color: null, colorSwatch: null},
		container: {color: null, colorSwatch: null},
		decorator: {component: {color: WHITE, colorSwatch: null}},
		tag: {shape: 'circle', visible: false, fill: {color: null, colorSwatch: null}, line: {color: null, colorSwatch: null}, text: null, textColor: null},
	};

	//shape 
	shapeVD.shape.container = (shapeVD.shape.layout === 'expanded' && shapeType !== 'pg' && shapeType != 'lg') && (shapeVD.shape.height - this.titleBarHeight > 2); //

	//outerLine
	shapeVD.outerLine.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillIcon, 'outerLine', shapeLayout, shapeType);

	//titleBar
	if(shapeType === 'ts')
		shapeVD.titleBar.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillIcon, 'corner', shapeLayout, shapeType);
	else
		shapeVD.titleBar.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillText, 'titleBar', shapeLayout, shapeType);

	// icon
	switch(iconImage)
	{
		case 'stencilIcon_Rotate90':
			shapeVD.icon.rotate = 90;
			break;
		case 'stencilIcon_Rotate180':
			shapeVD.icon.rotate = 180;
			break;
		case 'stencilIcon_Rotate270':
			shapeVD.icon.rotate = 270;
			break;
		case 'stencilIcon_FlipH':
			shapeVD.icon.flipH = true;
			break;
		case 'stencilIcon_FlipV':
			shapeVD.icon.flipV = true;
			break;				
		}

	//bar & corner
	shapeVD.bar.colorSwatch = shapeVD.outerLine.colorSwatch;
	shapeVD.corner.colorSwatch = this.getColorSwatch(paletteVersion, colorFamily, colorFillIcon, 'corner', shapeLayout, shapeType);
	if(shapeType === 'pg' || shapeType === 'lg') {
		shapeVD.bar.visible = !(colorFillIcon === 'noColor'); // color fill is a workaround to enable hiding the bar
		shapeVD.bar.width = (shapeVD.bar.visible) ? 6 : 0;
		
		shapeVD.corner.visible = shapeVD.icon.visible;
		shapeVD.corner.width = (shapeVD.corner.visible) ? this.iconSpacing + this.iconSize + shapeVD.bar.width : shapeVD.bar.width;
	}
	else
	{
		if(shapeType === 'ts')
			shapeVD.corner.visible = shapeVD.icon.visible;
		else
			shapeVD.corner.visible = (shapeVD.corner.colorSwatch === 'noColor' && !shapeVD.icon.visible) ? false : true;
		
		if(shapeVD.corner.visible)
		{
			if(shapeType === 'ts')
				shapeVD.corner.width = (shapeLayout === 'collapsed') ? (2 * this.targetSystemRadius + 16) : (this.iconSpacing + this.iconSize - 4);
			else
				shapeVD.corner.width = (shapeVD.corner.colorSwatch === 'noColor' || shapeVD.corner.colorSwatch === shapeVD.titleBar.colorSwatch) ? this.iconSpacing + this.iconSize : shapeVD.corner.width;
		}
		else
		{
			shapeVD.corner.width = 0;
		}
	}

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

	if(shapeLayout === 'collapsed')
	{
		shapeVD.text.color = BLACK;
		shapeVD.style.color = (this.isDarkColor(paletteVersion, shapeVD.corner.color, shapeVD.corner.colorSwatch)) ?  WHITE : shapeVD.outerLine.color;

		if(shapeVD.outerLine.dashed)
			shapeVD.outerLine.secondLine = (this.isDarkColor(paletteVersion, shapeVD.corner.color, shapeVD.corner.colorSwatch));
	}
	else
	{
		shapeVD.text.color = (this.isDarkColor(paletteVersion, shapeVD.titleBar.color, shapeVD.titleBar.colorSwatch)) ?  WHITE : BLACK;
		shapeVD.style.color = shapeVD.outerLine.color;

		if(shapeType === 'ts')
		{
			if(shapeVD.style.type === 'strikethrough')
				shapeVD.style.color = (this.isDarkColor(paletteVersion, shapeVD.corner.color, shapeVD.corner.colorSwatch)) ?  WHITE : shapeVD.outerLine.color;
			else if(shapeVD.outerLine.dashed)
				shapeVD.outerLine.secondLine = (this.isDarkColor(paletteVersion, shapeVD.corner.color, shapeVD.corner.colorSwatch));
		}
	}

	shapeVD.decorator.component.color = WHITE;

	//  tag
	shapeVD.tag.shape = mxUtils.getValue(thisShape.style, mxIBM2MondrianBase.prototype.cst.TAG, mxIBM2MondrianBase.prototype.cst.TAG_DEFAULT);
	shapeVD.tag.visible = (shapeVD.tag.shape != 'noTag');
	if(shapeVD.tag.visible)
	{
		let tagColorFamily = mxUtils.getValue(thisShape.style, mxIBM2MondrianBase.prototype.cst.TAG_COLOR_FAMILY, mxIBM2MondrianBase.prototype.cst.TAG_COLOR_FAMILY_DEFAULT);
		let tagColorFill = mxUtils.getValue(thisShape.style, mxIBM2MondrianBase.prototype.cst.TAG_COLOR_FILL, mxIBM2MondrianBase.prototype.cst.TAG_COLOR_FILL_DEFAULT);
		
		shapeVD.tag.fill.colorSwatch = this.getColorSwatch(paletteVersion, tagColorFamily, tagColorFill, 'tag', shapeLayout, shapeType);
		shapeVD.tag.fill.color = this.getSelectedColorSpecification(tagColorFamily)[shapeVD.tag.fill.colorSwatch];

		shapeVD.tag.line.colorSwatch = this.getColorSwatch(paletteVersion, tagColorFamily, tagColorFill, 'tagLine', shapeLayout, shapeType);
		shapeVD.tag.line.color = this.getSelectedColorSpecification(tagColorFamily)[shapeVD.tag.line.colorSwatch];

		shapeVD.tag.text = thisShape.state.cell.getAttribute('Tag-Text',null);
		shapeVD.tag.textColor = (this.isDarkColor(paletteVersion, shapeVD.tag.fill.color, shapeVD.tag.fill.colorSwatch)) ?  WHITE : BLACK;
	}

	return shapeVD;
};

mxIBM2MondrianBase.prototype.customProperties = [
	{name:'shapeType', dispName:'Shape', type:'enum', defVal:'pn',
		enumList:[{val:'actor', dispName: 'Actor'}, {val:'ts', dispName: 'Target System'}, {val:'ln', dispName: 'Logical Node'}, {val:'lc', dispName: 'Logical Component'}, {val:'lg', dispName: 'Logical Group'}, {val:'pn', dispName: 'Prescribed Node'}, {val:'pc', dispName: 'Prescribed Component'}, {val:'pg', dispName: 'Prescribed Group'}]},
	{name:'shapeLayout', dispName:'Shape (Layout)', type:'enum', defVal:'expanded',
		enumList:[{val:'collapsed', dispName: 'Collapsed'},{val:'expanded', dispName: 'Expanded'},{val:'custom', dispName: 'Custom'}]},
	{name:'shapeStyle', dispName:'Shape (Style)', type:'enum', defVal:'solid',
		enumList:[{val:'solid', dispName: 'Solid'},{val:'strikethrough', dispName: 'Strikethrough'},{val:'double', dispName: 'Double'}, {val:'dashed', dispName: 'Dashed'}
		//,{val:'multiple', dispName: 'Multiple'}
	]},
	{name:'shapeMultiplicity', dispName: 'Multiplicity', type: 'bool', defVal: false},
	{name:'colorFamily', dispName:'Color', type:'enum', defVal:'blue',
		enumList:[{val:'blue', dispName: 'Blue'}, {val:'black', dispName: 'Black'}, {val:'cyan', dispName: 'Cyan'}, {val:'green', dispName: 'Green'}, {val:'gray', dispName: 'Gray'}, {val:'magenta', dispName: 'Magenta'}, {val:'purple', dispName: 'Purple'}, {val:'red', dispName: 'Red'}, {val:'teal', dispName: 'Teal'}]},
	{name:'colorFillIcon', dispName:'Color (Corner)', type:'enum', defVal:'medium',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'light', dispName: 'Light'}, {val:'medium', dispName: 'Medium'}, {val:'dark', dispName: 'Dark'}]},
	
	{name:'colorBackground', dispName:'Color (Background)', type:'enum', defVal:'noColor:noColor',
		enumList:[
		{val:'noColor:noColor', dispName: 'None'}, {val:'white:white', dispName: 'White'}, {val:'veryLight:veryLight', dispName: 'Very Light'},
		{val:'white:noColor', dispName: 'Bar: White, Container: None'},
		{val:'veryLight:noColor', dispName: 'Bar: Very Light, Container: None'},
		{val:'veryLight:white', dispName: 'Bar: Very Light, Container: White'}
	]},

/** {name:'colorFillText', dispName:'Color (Title bar)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'veryLight', dispName: 'Very Light'}]},
	{name:'colorFillContainer', dispName:'Color (Container)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'veryLight', dispName: 'Very Light'}]},
*/
	{name:'iconImage', dispName:'Icon', type:'enum', defVal:'stencilIcon',
		enumList:[{val:'noIcon', dispName: 'No'}, {val:'stencilIcon', dispName: 'Yes'}, 
		{val:'stencilIcon_Rotate90', dispName: 'Yes (Rotate 90)'}, {val:'stencilIcon_Rotate180', dispName: 'Yes (Rotate 180)'}, {val:'stencilIcon_Rotate270', dispName: 'Yes (Rotate 270)'},
		{val:'stencilIcon_FlipH', dispName: 'Yes (Flip Horizontal)'}, {val:'stencilIcon_FlipV', dispName: 'Yes (Flip Vertical)'},
		]},
	{name:'positionText', dispName:'Label (Position)', type:'enum', defVal:'bottom',
		enumList:[{val:'bottom', dispName: 'Bottom'}, {val:'top', dispName: 'Top'}, {val:'left', dispName: 'Left'}, {val:'right', dispName: 'Right'}]},

	// Tag
	{name:'tag', dispName:'Tag', type:'enum', defVal:'noTag',
		enumList:[
		{val:'noTag', dispName: 'None'}, {val:'circle', dispName: 'Circle'}, {val:'diamond', dispName: 'Diamond'}, 
		{val:'square', dispName: 'Square'}, {val:'triangle', dispName: 'Triangle'}, {val:'hexagon', dispName: 'Hexagon'}, {val:'octagon', dispName: 'Octagon'}]},
	{name:'tagColorFamily', dispName:'Tag (Color)', type:'enum', defVal:'black',
		enumList:[{val:'blue', dispName: 'Blue'}, {val:'black', dispName: 'Black'}, {val:'cyan', dispName: 'Cyan'}, {val:'green', dispName: 'Green'}, {val:'gray', dispName: 'Gray'}, {val:'magenta', dispName: 'Magenta'}, {val:'purple', dispName: 'Purple'}, {val:'red', dispName: 'Red'}, {val:'teal', dispName: 'Teal'}]},
	{name:'tagColorFill', dispName:'Tag (Fill)', type:'enum', defVal:'medium',
		enumList:[{val:'white', dispName: 'White'}, {val:'light', dispName: 'Light'}, {val:'medium', dispName: 'Medium'}, {val:'dark', dispName: 'Dark'}]},
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
 * Default radius for rounded corner of Target System element. Default is 24.
 */
mxIBM2MondrianBase.prototype.targetSystemRadius = 24;

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
	let mondrianAttributes = ['Element-ID', 'Element-Name','Icon-Name','Tag-Text'];
	for (attributeIndex = 0; attributeIndex < mondrianAttributes.length; attributeIndex++ ) {
		if(!this.state.cell.hasAttribute(mondrianAttributes[attributeIndex]))
		{
			this.state.cell.setAttribute(mondrianAttributes[attributeIndex],'')
		}
	}

	mxShape.prototype.init.apply(this, arguments);

	this.templateConversion();

	this.cellID = this.state.cell.id;
	this.installListeners();
};

/* temporary function to support coversion of old diagrams  */
mxIBM2MondrianBase.prototype.colorBackgroundConversion = function(colorFillText, colorFillContainer)
{
	colorFillText = (colorFillText == 'undefined') ? 'noColor' : colorFillText;
	colorFillContainer = (colorFillContainer == 'undefined') ? 'noColor' : colorFillContainer;

	if(colorFillContainer == 'veryLight')
		colorFillText = 'veryLight';
	else if(colorFillContainer == 'white' && colorFillText == 'noColor')
		colorFillText = 'white';

	return colorFillText + ':' + colorFillContainer;
}

// Function to convert diagrams to current version if breaking changes have been introduced
mxIBM2MondrianBase.prototype.templateConversion = function()
{
	try {
		if(this.state != null)
		{

			if(this.state.cell.hasAttribute('Modifier-Text'))
			{
				this.state.cell.setAttribute('Tag-Text', this.state.cell.getAttribute('Modifier-Text',''));
				this.state.cell.getValue().removeAttribute('Modifier-Text');
			}

			let styleCurrent = null;
			let styleUpdate = false;
			let modifierUpdate = false;
			let colorBackgroundUpdate = false;
			let groupUpdate = false;
		
			if(this.state.view.graph.model != null && this.state.cell != null)
				styleCurrent = this.state.view.graph.model.getStyle(this.state.cell);
		
			if(styleCurrent != null)
			{
				if (styleCurrent.indexOf('modifier') > 0)
				{
					styleUpdate = true;
					modifierUpdate = true;
				}
					
				if (styleCurrent.indexOf('colorFillText') > 0 || styleCurrent.indexOf('colorFillContainer') > 0)
				{
					styleUpdate = true;
					colorBackgroundUpdate = true;
				}

				if (this.state.style['shapeType'] == 'group')
				{
					styleUpdate = true;
					groupUpdate = true;
				}
			}
				
		
			if(styleUpdate)
			{
				newStyle = styleCurrent;
				// Modifier -> Tag
				if(modifierUpdate)
				{
					newStyle = newStyle.replace(/noModifier/g, 'noTag');
					newStyle = newStyle.replace(/modifier/g, 'tag');	
				}
				
				// Color Title Bar & Container -> Background

				this.state.view.graph.model.beginUpdate();
				try
				{
					if(modifierUpdate)
					{
						if(this.state.style['modifier'] != null)
							this.state.style['tag'] = this.state.style['modifier'].replace(/noModifier/g, 'noTag');

						if(this.state.style['modifierColorFamily'] != null)
							this.state.style['tagColorFamily'] = this.state.style['modifierColorFamily'];

						if(this.state.style['modifierColorFill'] != null)
							this.state.style['tagColorFill'] = this.state.style['modifierColorFill'];
					}

					if(colorBackgroundUpdate)
					{
						newStyle = mxUtils.setStyle(newStyle, 'colorBackground', mxIBM2MondrianBase.prototype.colorBackgroundConversion(this.state.style['colorFillText'], this.state.style['colorFillContainer']));
						this.state.style['colorBackground'] = mxIBM2MondrianBase.prototype.colorBackgroundConversion(this.state.style['colorFillText'], this.state.style['colorFillContainer']);

						newStyle = mxUtils.setStyle(newStyle, 'colorFillText', null);
						newStyle = mxUtils.setStyle(newStyle, 'colorFillContainer', null);
					}

					if(groupUpdate)
					{
						newStyle = mxUtils.setStyle(newStyle, 'shapeType', 'pg');
						this.state.style['shapeType'] = 'pg';
					}

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
					
					const currentCMTextAttribute = evt.properties.change.value.attributes.getNamedItem('Tag-Text');
					const previousCMTextAttribute = evt.properties.change.previous.attributes.getNamedItem('Tag-Text');
	
					const currentCMText = (currentCMTextAttribute != null) ? currentCMTextAttribute.value : null;
					const previousCMText = (previousCMTextAttribute != null) ?  previousCMTextAttribute.value : null;

					if(currentIconName != previousIconName || currentCMText != previousCMText)
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
	this.version = 'v2';//mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.MONDRIAN_VERSION, mxIBM2MondrianBase.prototype.cst.MONDRIAN_VERSION_DEFAULT);	
	this.shapeType = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE_DEFAULT);	
	this.shapeLayout = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	this.shapeStyle = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_STYLE, mxIBM2MondrianBase.prototype.cst.SHAPE_STYLE_DEFAULT);
	this.shapeMultiplicity = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_MULTIPLICITY, mxIBM2MondrianBase.prototype.cst.SHAPE_MULTIPLICITY_DEFAULT);
	this.iconImage = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE_DEFAULT);
	this.colorFamily = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY_DEFAULT);
	this.colorFillIcon = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON_DEFAULT);
	
	let colorFillBackground = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_BACKGROUND, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_BACKGROUND_DEFAULT).split(':');
	this.colorFillText = colorFillBackground[0];//mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT_DEFAULT); // deprecated
	this.colorFillContainer = colorFillBackground[1];//mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER_DEFAULT); // deprecated

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
		this,
		this.version,
		this.shapeType, this.shapeLayout, this.shapeStyle, w, h,
		this.colorFamily, this.colorFillIcon, this.colorFillText, this.colorFillContainer,
		this.iconImage);

	c.translate(x, y);

	this.paintContainer(c);
	this.paintTitleBar(c);
	this.paintCorner(c);
	this.paintIcon(c);
	this.paintShape(c);
	this.paintTag(c);

	// if the fontColor is Black or White the color is controlled by visualization rules
	fontColor = this.style.fontColor;
	if(fontColor != this.shapeVisualDefinition.text.color && (fontColor === '#000000' || fontColor === '#FFFFFF' || fontColor === '#ffffff' || fontColor === 'undefined'))
	{
		this.style.fontColor = this.shapeVisualDefinition.text.color;
		styleCurrent = this.state.view.graph.model.getStyle(this.state.cell);
		newStyle = mxUtils.setStyle(styleCurrent, 'fontColor', this.style.fontColor);
		this.state.view.graph.model.setStyle(this.state.cell, newStyle);
	}
};

/**
 * Function: paintContainer
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintContainer = function(c)
{
	const endContainer = this.shapeVisualDefinition.shape.height - this.titleBarHeight;
	const startContainer = this.titleBarHeight;
	const containerWidth = this.shapeVisualDefinition.shape.width;
	const containerHeight = this.shapeVisualDefinition.shape.height;

	if(this.shapeLayout != 'collapsed' && endContainer > 0)
	{
		if(this.shapeType === 'ln' || this.shapeType === 'lc')
		{
			c.setFillColor(this.shapeVisualDefinition.container.color);
			c.begin();
			c.moveTo(0, startContainer);
			c.lineTo(containerWidth, startContainer);
			c.lineTo(containerWidth, containerHeight - this.cornerRadius);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, containerWidth - this.cornerRadius, containerHeight);
			c.lineTo(this.cornerRadius, containerHeight);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, containerHeight - this.cornerRadius);
			c.lineTo(0, startContainer);
			c.close();
			c.fill();
		}
		else {
			c.setFillColor(this.shapeVisualDefinition.container.color);
			c.rect(0, startContainer, containerWidth, endContainer);
			c.fill();
		}	
	}
};

/**
 * Function: paintTitleBar
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintTitleBar = function(c)
{
	let titleBarWidth = this.shapeVisualDefinition.shape.width;
	let titleBarHeight = this.titleBarHeight;

	if((this.shapeLayout === 'expanded' || this.shapeType === 'ts') && this.shapeVisualDefinition.titleBar.color != 'none')
	{
		if(this.shapeType === 'ln' || this.shapeType === 'lc')
		{
			if (this.shapeVisualDefinition.shape.height > titleBarHeight)
			{
				c.setFillColor(this.shapeVisualDefinition.titleBar.color);
				c.begin();
				c.moveTo(this.cornerRadius, 0);
				c.lineTo(titleBarWidth - this.cornerRadius, 0);
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, titleBarWidth, this.cornerRadius);
				c.lineTo(titleBarWidth, titleBarHeight);
				c.lineTo(0, titleBarHeight);
				c.lineTo(0, this.cornerRadius);
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, this.cornerRadius, 0);
				c.close();
				c.fill();
			}
			else
			{
				c.setFillColor(this.shapeVisualDefinition.titleBar.color);
				c.roundrect(0, 0, titleBarWidth, titleBarHeight, this.cornerRadius, this.cornerRadius);
				c.fill();
			}
		}
		else if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'pg')
		{
			c.setFillColor(this.shapeVisualDefinition.titleBar.color);
			c.rect(0, 0, titleBarWidth, titleBarHeight);
			c.fill();
		}
		else if(this.shapeType === 'lg')
		{
			c.setFillColor(this.shapeVisualDefinition.titleBar.color);
			c.begin();
			c.moveTo(0, 0);
			c.lineTo(titleBarWidth - this.cornerRadius, 0);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, titleBarWidth, this.cornerRadius);
			c.lineTo(titleBarWidth, titleBarHeight);
			c.lineTo(0, titleBarHeight);
			c.lineTo(0, 0);
			c.close();
			c.fill();
		}
		else {
			//do nothing
		}	
	}
};

/**
 * Function: paitCorner
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintCorner = function(c)
{
	let cornerWidth = this.shapeVisualDefinition.corner.width;
	let cornerHeight = this.shapeVisualDefinition.corner.height;

	if(this.shapeVisualDefinition.corner.visible || this.shapeType === 'ts')
	{
		const doubleStyleOffset = (this.shapeVisualDefinition.outerLine.secondLine) ? 3 : 0;

		c.setFillColor(this.shapeVisualDefinition.corner.color);
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);

		if(this.shapeType === 'actor')
		{
			c.ellipse(doubleStyleOffset, doubleStyleOffset, cornerWidth-doubleStyleOffset*2, cornerHeight-doubleStyleOffset*2); 
		}
		else if(this.shapeType === 'ts')
		{
			cornerWidth = this.shapeVisualDefinition.shape.width;
			c.begin();
			c.moveTo(this.targetSystemRadius, doubleStyleOffset);
			c.lineTo(cornerWidth - this.targetSystemRadius, doubleStyleOffset);
			c.arcTo(this.targetSystemRadius - doubleStyleOffset, this.targetSystemRadius - doubleStyleOffset, 0, 0, 1, cornerWidth - this.targetSystemRadius, cornerHeight);
			c.lineTo(this.targetSystemRadius, cornerHeight - doubleStyleOffset);
			c.arcTo(this.targetSystemRadius - doubleStyleOffset, this.targetSystemRadius - doubleStyleOffset, 0, 0, 1, this.targetSystemRadius, doubleStyleOffset);
			c.close();
		}
		else if(this.shapeType === 'ln' || this.shapeType === 'lc') // Logical Node or Logical Component
		{
			if(this.shapeVisualDefinition.shape.layout === 'collapsed')
			{
				c.roundrect(doubleStyleOffset, doubleStyleOffset, this.shapeVisualDefinition.shape.width - 2*doubleStyleOffset, this.shapeVisualDefinition.shape.height - 2*doubleStyleOffset, this.cornerRadius - doubleStyleOffset, this.cornerRadius - doubleStyleOffset);
			}
			else
			{
				c.begin();
				c.moveTo(this.cornerRadius, 0);
				c.lineTo(cornerWidth, 0);
				c.lineTo(cornerWidth, cornerHeight);
				if (this.shapeVisualDefinition.shape.container)
				{
					c.lineTo(0, cornerHeight);
				}
				else
				{
					c.lineTo(this.cornerRadius, cornerHeight);
					c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, cornerHeight - this.cornerRadius);
				}
				c.lineTo(0, this.cornerRadius);	
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, this.cornerRadius, 0);
				c.close();	
			}		
		}
		else if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'pg' || this.shapeType === 'lg')
		{
			c.rect(doubleStyleOffset, doubleStyleOffset, cornerWidth - 2*doubleStyleOffset, cornerHeight - 2*doubleStyleOffset);
		}
		
		if(this.shapeVisualDefinition.shape.layout === 'expanded' && (this.shapeType != 'pg' && this.shapeType != 'lg' && this.shapeType != 'ts'))
			c.fillAndStroke();
		else
			c.fill();
	}
};

/**
 * Function: paintShape
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintShape = function(c)
{
	let shapeWidth = this.shapeVisualDefinition.shape.width;
	let shapeHeigth = this.shapeVisualDefinition.shape.height;
	let doRestore = false;
	
	c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);

// Style: Double
	if(this.shapeVisualDefinition.outerLine.secondLine)
	{
		const doubleStyleOffset = 3;
		const WHITE = '#ffffff';

		c.save();
		c.setDashed(false, false);

		// WHITE LINE 
		c.setStrokeWidth(doubleStyleOffset);
		c.setStrokeColor(WHITE);

		if(this.shapeType === 'actor')
		{
			c.ellipse(doubleStyleOffset/2, doubleStyleOffset/2, shapeWidth-doubleStyleOffset, shapeHeigth-doubleStyleOffset);
		}
		else if(this.shapeType === 'ts')
		{
			c.begin();
			c.moveTo(this.targetSystemRadius, doubleStyleOffset/2);
			c.lineTo(shapeWidth - this.targetSystemRadius, doubleStyleOffset/2);
			c.arcTo(this.targetSystemRadius - doubleStyleOffset/2, this.targetSystemRadius - doubleStyleOffset/2, 0, 0, 1, shapeWidth - this.targetSystemRadius, this.titleBarHeight - doubleStyleOffset/2);
			c.lineTo(this.targetSystemRadius, this.titleBarHeight - doubleStyleOffset/2);
			c.arcTo(this.targetSystemRadius - doubleStyleOffset/2, this.targetSystemRadius - doubleStyleOffset/2, 0, 0, 1, this.targetSystemRadius, doubleStyleOffset/2);
			c.close();	
		}
		else if(this.shapeType === 'ln' || this.shapeType === 'lc')
		{
			c.roundrect(doubleStyleOffset/2, doubleStyleOffset/2, shapeWidth - doubleStyleOffset, shapeHeigth - doubleStyleOffset, this.cornerRadius - doubleStyleOffset/2, this.cornerRadius - doubleStyleOffset/2);
		}
		else if(this.shapeType === 'lg')
		{
			let offSet = doubleStyleOffset/2;
			let innerRadius = this.cornerRadius - offSet;
			c.begin();
			c.moveTo(offSet, offSet);
			c.lineTo(shapeWidth - this.cornerRadius, offSet);
			c.arcTo(innerRadius, innerRadius, 0, 0, 1, shapeWidth - offSet, this.cornerRadius);
			c.lineTo(shapeWidth - offSet, shapeHeigth - this.cornerRadius);
			c.arcTo(innerRadius, innerRadius, 0, 0, 1, shapeWidth - this.cornerRadius, shapeHeigth - offSet);
			c.lineTo(this.cornerRadius, shapeHeigth - offSet);
			c.arcTo(innerRadius, innerRadius, 0, 0, 1, offSet, shapeHeigth - this.cornerRadius);
			c.lineTo(offSet, offSet);
			c.close();
		}
		else
		{
			c.rect(doubleStyleOffset/2, doubleStyleOffset/2, shapeWidth - doubleStyleOffset, shapeHeigth - doubleStyleOffset);
		}
		
		c.stroke();

		// DOUBLE LINE
		c.setStrokeWidth(1);
		c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);			

		if(this.shapeType === 'actor')
		{
			c.ellipse(doubleStyleOffset, doubleStyleOffset, shapeWidth + -2*doubleStyleOffset, shapeHeigth + -2*doubleStyleOffset);
		}
		else if(this.shapeType === 'ts')
		{
			c.begin();
			c.moveTo(this.targetSystemRadius, doubleStyleOffset);
			c.lineTo(shapeWidth - this.targetSystemRadius, doubleStyleOffset);
			c.arcTo(this.targetSystemRadius - doubleStyleOffset, this.targetSystemRadius - doubleStyleOffset, 0, 0, 1, shapeWidth - this.targetSystemRadius, this.titleBarHeight - doubleStyleOffset);
			c.lineTo(this.targetSystemRadius, this.titleBarHeight - doubleStyleOffset);
			c.arcTo(this.targetSystemRadius - doubleStyleOffset, this.targetSystemRadius - doubleStyleOffset, 0, 0, 1, this.targetSystemRadius, doubleStyleOffset);
			c.close();	
		}
		else if(this.shapeType === 'ln' || this.shapeType === 'lc')
		{
			c.roundrect(doubleStyleOffset, doubleStyleOffset, shapeWidth - 2*doubleStyleOffset, shapeHeigth - 2*doubleStyleOffset, this.cornerRadius - doubleStyleOffset, this.cornerRadius - doubleStyleOffset);
		}
		else if(this.shapeType === 'lg')
		{
			let offSet = doubleStyleOffset;
			let innerRadius = this.cornerRadius - offSet;
			c.begin();
			c.moveTo(offSet, offSet);
			c.lineTo(shapeWidth - this.cornerRadius, offSet);
			c.arcTo(innerRadius, innerRadius, 0, 0, 1, shapeWidth - offSet, this.cornerRadius);
			c.lineTo(shapeWidth - offSet, shapeHeigth - this.cornerRadius);
			c.arcTo(innerRadius, innerRadius, 0, 0, 1, shapeWidth - this.cornerRadius, shapeHeigth - offSet);
			c.lineTo(this.cornerRadius, shapeHeigth - offSet);
			c.arcTo(innerRadius, innerRadius, 0, 0, 1, offSet, shapeHeigth - this.cornerRadius);
			c.lineTo(offSet, offSet);
			c.close();
		}	
		else
		{
			c.rect(doubleStyleOffset, doubleStyleOffset, shapeWidth - 2*doubleStyleOffset, shapeHeigth - 2*doubleStyleOffset);
		}
			
		c.stroke();

		c.restore();
	}
		
// Container
	if (this.shapeVisualDefinition.shape.container)
	{
		c.save();
		c.setStrokeColor(this.shapeVisualDefinition.dividerLine.color);
		c.setDashed(false);
		c.setStrokeWidth(1);
		c.begin();
		c.moveTo(0, this.titleBarHeight);
		c.lineTo(shapeWidth, this.titleBarHeight);		
		c.stroke();
		c.restore();
	}
	
// Base
	if(this.shapeVisualDefinition.outerLine.dashed)
	{
		let dashPattern = '6 6';

		doRestore = true;
		c.save();
		c.setDashed(true, true);
		c.setDashPattern(dashPattern);
	}

	if(this.shapeType === 'actor')
	{
		c.ellipse(0, 0, shapeWidth, shapeHeigth);
	}
	else if(this.shapeType === 'ts')
	{
		c.begin();
		c.moveTo(this.targetSystemRadius, 0);
		c.lineTo(shapeWidth - this.targetSystemRadius, 0);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, shapeWidth - this.targetSystemRadius, this.titleBarHeight);
		c.lineTo(this.targetSystemRadius, this.titleBarHeight);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
		c.close();	
	}
	else if(this.shapeType === 'ln' || this.shapeType === 'lc')
	{
		c.roundrect(0, 0, shapeWidth, shapeHeigth, this.cornerRadius, this.cornerRadius);
	}
	else if(this.shapeType === 'lg')
	{
		c.begin();
		c.moveTo(0, 0);
		c.lineTo(shapeWidth - this.cornerRadius, 0);
		c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, shapeWidth, this.cornerRadius);
		c.lineTo(shapeWidth, shapeHeigth - this.cornerRadius);
		c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, shapeWidth - this.cornerRadius, shapeHeigth);
		c.lineTo(this.cornerRadius, shapeHeigth);
		c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, shapeHeigth - this.cornerRadius);
		c.lineTo(0, 0);
		c.close();
	}
	else
	{
		c.rect(0, 0, shapeWidth, shapeHeigth);
	}

	c.stroke();

	this.paintShapeMultiplicity(c);

	if(doRestore)
		c.restore();		

// Component decorator
	if(this.shapeType === 'lc' || this.shapeType === 'pc')
	{
		let componentDecoratorOffset = -4;
		let componentDecoratorHeight = 4;
		let componentDecoratorWidth = 8;
	
		c.save();
		c.setDashed(false);
		c.setFillColor(this.shapeVisualDefinition.decorator.component.color);
		c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
		c.fillAndStroke();
		c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
		c.fillAndStroke();
		c.restore();
	}
	
//Bar decorator
	if(this.shapeVisualDefinition.bar.visible)
	{
		c.setFillColor(this.shapeVisualDefinition.outerLine.color);
		c.rect(0, 0, this.shapeVisualDefinition.bar.width, this.titleBarHeight);
		c.fillAndStroke();
	}

	if(this.shapeVisualDefinition.style.type === 'strikethrough')
	{
		let leftCornerX = (this.shapeVisualDefinition.shape.layout === 'expanded') ? this.shapeVisualDefinition.corner.width : 0;
		let leftCornerY = 0;
		let rightCornerX = shapeWidth
		let rightCornerY = this.titleBarHeight;

		c.setStrokeColor(this.shapeVisualDefinition.style.color);
		c.begin();
		
		if(this.shapeType === 'actor')
		{
			let h = 24; // x coordinate of circle center
			let k = 24; // y coordinate of circle center
			let r = 24; // radius of circle
			let angle = 135;

			leftCornerX = h + r*Math.cos(angle * (Math.PI/180));
			leftCornerY = k - r*Math.sin(angle * (Math.PI/180));

			angle = 315;
			rightCornerX = h + r*Math.cos(angle * (Math.PI/180));
			rightCornerY = k - r*Math.sin(angle * (Math.PI/180));
		}
		else if(this.shapeType === 'ts')
		{
			if(this.shapeVisualDefinition.shape.layout === 'collapsed')
			{
				let h = 24; // x coordinate of circle center
				let k = 24; // y coordinate of circle center
				let r = 24; // radius of circle
				let angle = 125;
	
				leftCornerX = h + r*Math.cos(angle * (Math.PI/180));
				leftCornerY = k - r*Math.sin(angle * (Math.PI/180));
	
				h = 40;
				angle = 305;
				rightCornerX = h + r*Math.cos(angle * (Math.PI/180));
				rightCornerY = k - r*Math.sin(angle * (Math.PI/180));	
			}
			else
			{
				leftCornerX = this.targetSystemRadius;
				rightCornerX = rightCornerX - this.targetSystemRadius;
			}

		}
		else if(this.shapeType === 'ln' || this.shapeType === 'lc' || this.shapeType === 'lg')
		{
			let h = 8; // x coordinate of circle center
			let k = 8; // y coordinate of circle center
			let r = 8; // radius of circle
			let angle = 135;

			if(this.shapeType === 'lg')
			{
				leftCornerX = this.shapeVisualDefinition.bar.width;
				rightCornerY = this.shapeVisualDefinition.shape.height;	
			}
			else if(this.shapeVisualDefinition.shape.layout === 'expanded' && this.shapeVisualDefinition.corner.visible)
			{
				//do nothing
			}
			else
			{
				leftCornerX = h + r*Math.cos(angle * (Math.PI/180));
				leftCornerY = k - r*Math.sin(angle * (Math.PI/180));
			}

			h = rightCornerX - 8;
			k = rightCornerY - 8;

			angle = 315;
			rightCornerX = h + r*Math.cos(angle * (Math.PI/180));
			rightCornerY = k - r*Math.sin(angle * (Math.PI/180));
		}
		else if(this.shapeType === 'pg')
		{
			leftCornerX = this.shapeVisualDefinition.bar.width;
			rightCornerY = this.shapeVisualDefinition.shape.height;
		}

		c.moveTo(leftCornerX, leftCornerY);
		c.lineTo(rightCornerX, rightCornerY);
		c.stroke();
	}
};

mxIBM2MondrianBase.prototype.paintTag = function(c)
{
	if(this.shapeVisualDefinition.tag.visible)
	{
		let fontSize = 12;
		let characterWidth = (6/10) * fontSize;
		let tagOuterBoxSingle = {
			circle: {width: 14, height:14},
			diamond: {width: 14, height:14},
			square: {width: 12, height:12},
			triangle: {width: 14, height:13.5},
			hexagon: {width: 15, height:13},
			octagon: {width: 13, height:13},
		};
		let outerBoxSingleWidth = tagOuterBoxSingle[this.shapeVisualDefinition.tag.shape].width;
		let outerBoxSingleHeight = tagOuterBoxSingle[this.shapeVisualDefinition.tag.shape].height;

		let tagText = this.shapeVisualDefinition.tag.text;
		let textLength = (tagText != null) ? tagText.length : 0;
		let extraTextWidth = (textLength > 1) ? characterWidth * (textLength - 1) + 4 : 0;

		let tagHeight = outerBoxSingleHeight;
		let tagWidth = outerBoxSingleWidth + extraTextWidth;
		let topTagY = -1 * tagHeight/2;
		let bottomTagY = tagHeight/2;
		
		let rightTagX = (this.shapeVisualDefinition.shape.layout === 'collapsed') ? (this.shapeVisualDefinition.shape.width/2 + tagWidth/2) : this.shapeVisualDefinition.shape.width - 16;
		let leftTagX = rightTagX - tagWidth;
		let centerTagX = (rightTagX + leftTagX)/2;

		c.setFillColor(this.shapeVisualDefinition.tag.fill.color);
		c.setStrokeColor(this.shapeVisualDefinition.tag.line.color);
		c.setDashed(false);
		c.setStrokeWidth(1);

		if(this.shapeVisualDefinition.tag.shape === 'circle')
		{
			let circleRadius = 7;
			c.begin();
			c.moveTo(leftTagX + circleRadius, topTagY);
			c.lineTo(rightTagX - circleRadius, topTagY);
			c.arcTo(circleRadius/2, circleRadius/2, 0, 0, 1, rightTagX - circleRadius, bottomTagY);
			c.lineTo(leftTagX + circleRadius, bottomTagY);
			c.arcTo(circleRadius/2, circleRadius/2, 0, 0, 1, leftTagX + circleRadius, topTagY);
			c.close();
		}
		else if(this.shapeVisualDefinition.tag.shape === 'diamond')
		{
			c.begin();
			c.moveTo(leftTagX + outerBoxSingleWidth/2, topTagY);
			c.lineTo(rightTagX - outerBoxSingleWidth/2, topTagY);
			c.lineTo(rightTagX, 0);
			c.lineTo(rightTagX - outerBoxSingleWidth/2, bottomTagY);
			c.lineTo(leftTagX + outerBoxSingleWidth/2, bottomTagY);
			c.lineTo(leftTagX, 0);
			c.close();
		}
		else if(this.shapeVisualDefinition.tag.shape === 'square')
		{
			c.begin();
			c.moveTo(leftTagX, topTagY);
			c.lineTo(rightTagX, topTagY);
			c.lineTo(rightTagX, bottomTagY);
			c.lineTo(leftTagX, bottomTagY);
			c.lineTo(leftTagX, topTagY);
			c.close();
		}
		else if(this.shapeVisualDefinition.tag.shape === 'triangle')
		{
			c.begin();
			c.moveTo(leftTagX + outerBoxSingleWidth/2, topTagY);
			c.lineTo(rightTagX - outerBoxSingleWidth/2, topTagY);
			c.lineTo(rightTagX, bottomTagY);
			c.lineTo(leftTagX, bottomTagY);
			c.lineTo(leftTagX + outerBoxSingleWidth/2, topTagY);
			c.close();
		}
		else if(this.shapeVisualDefinition.tag.shape === 'hexagon')
		{
			c.begin();
			c.moveTo(leftTagX + outerBoxSingleWidth/4, topTagY);
			c.lineTo(rightTagX - outerBoxSingleWidth/4, topTagY);
			c.lineTo(rightTagX, 0);
			c.lineTo(rightTagX - outerBoxSingleWidth/4, bottomTagY);
			c.lineTo(leftTagX + outerBoxSingleWidth/4, bottomTagY);
			c.lineTo(leftTagX, 0);
			c.lineTo(leftTagX + outerBoxSingleWidth/4, topTagY);		
			c.close();
		}
		else if(this.shapeVisualDefinition.tag.shape === 'octagon')
		{
			c.begin();
			c.moveTo(leftTagX + outerBoxSingleWidth/4, topTagY);
			c.lineTo(rightTagX - outerBoxSingleWidth/4, topTagY);
			c.lineTo(rightTagX, topTagY + outerBoxSingleHeight/4);
			c.lineTo(rightTagX, bottomTagY - outerBoxSingleHeight/4);
			c.lineTo(rightTagX - outerBoxSingleWidth/4, bottomTagY);
			c.lineTo(leftTagX + outerBoxSingleWidth/4, bottomTagY);
			c.lineTo(leftTagX, bottomTagY - outerBoxSingleHeight/4);
			c.lineTo(leftTagX, topTagY + outerBoxSingleHeight/4);
			c.lineTo(leftTagX + outerBoxSingleWidth/4, topTagY);			
			c.close();
		}

		c.fillAndStroke();

		if(tagText != null)
		{
			c.setFontColor(this.shapeVisualDefinition.tag.textColor);
			c.setFontSize(fontSize);
			c.setFontFamily('IBM Plex Mono');
			c.text(centerTagX, -1, 0, 14, tagText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);	
		}
	}
}

mxIBM2MondrianBase.prototype.paintShapeMultiplicity = function(c)
{
	if(this.shapeMultiplicity)
	{
		const shapeWidth = this.shapeVisualDefinition.shape.width;
		const shapeHeigth = this.shapeVisualDefinition.shape.height;
		const multiplicitySpacing = 4;
		const cornerRadius = 8;
		const circleRadius = 24;

		let lineNumbers = [1, 2]; 

		//c.setStrokeColor(this.shapeVisualDefinition.outerLine.color);
		//if(this.shapeVisualDefinition.outerLine.dashed)
		//{
		//	c.setDashed(true, true);
		//	c.setDashPattern('6 6');
		//}

		if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'pg')
		{
			c.begin();
			for(let idx = 0; idx < lineNumbers.length; idx++)
			{
				c.moveTo((lineNumbers[idx] + 1) * multiplicitySpacing, -lineNumbers[idx] * multiplicitySpacing);
				c.lineTo(shapeWidth + lineNumbers[idx] * multiplicitySpacing, -lineNumbers[idx] * multiplicitySpacing);
				c.lineTo(shapeWidth + lineNumbers[idx] * multiplicitySpacing, shapeHeigth - (lineNumbers[idx] + 1) * multiplicitySpacing);	
			}
			c.stroke();
		}
		else if(this.shapeType === 'ln' || this.shapeType === 'lc' || this.shapeType === 'lg')
		{
			c.begin();
			for(let idx = 0; idx < lineNumbers.length; idx++)
			{
				c.moveTo((lineNumbers[idx] + 1) * multiplicitySpacing, -lineNumbers[idx] * multiplicitySpacing);
				c.lineTo(shapeWidth + lineNumbers[idx] * multiplicitySpacing - cornerRadius, -lineNumbers[idx] * multiplicitySpacing);
				c.arcTo(cornerRadius, cornerRadius, 0, 0, 1, shapeWidth + lineNumbers[idx] * multiplicitySpacing, cornerRadius - lineNumbers[idx] * multiplicitySpacing);
				c.lineTo(shapeWidth + lineNumbers[idx] * multiplicitySpacing, shapeHeigth - (lineNumbers[idx] + 1) * multiplicitySpacing);	
			}
			c.stroke();
		}
		else if(this.shapeType === 'actor')
		{
			c.begin();
			for(let idx = 0; idx < lineNumbers.length; idx++)
			{
				c.moveTo(shapeWidth/2 + lineNumbers[idx] * multiplicitySpacing, -lineNumbers[idx] * multiplicitySpacing);
				c.arcTo(circleRadius, circleRadius, 0, 0, 1, shapeWidth + lineNumbers[idx] * multiplicitySpacing, shapeHeigth/2 - lineNumbers[idx] * multiplicitySpacing);	
			}
			c.stroke();
		}
		else if (this.shapeType === 'ts')
		{
			c.begin();
			for(let idx = 0; idx < lineNumbers.length; idx++)
			{
				c.moveTo(circleRadius + (lineNumbers[idx] - 1) * multiplicitySpacing, -lineNumbers[idx] * multiplicitySpacing);
				c.lineTo(shapeWidth - circleRadius + lineNumbers[idx] * multiplicitySpacing, -lineNumbers[idx] * multiplicitySpacing);
				c.arcTo(circleRadius, circleRadius, 0, 0, 1, shapeWidth + lineNumbers[idx] * multiplicitySpacing, shapeHeigth/2 - lineNumbers[idx] * multiplicitySpacing);	
			}

			c.stroke();	
		}
	}
}

/**
 * Function: paintIcon
 * 
 * Generic background painting implementation.
 * Two options are provide to show an Icon:
 * 	  1) Via a Stencil, where the Icon-Name data attribute must contain the name of the shape available in the Stencil
 *    2) Via the image style property
 * 
 * Option 2 is deprecated and will be removed in future. If both options are used on the same Shape, the Stencil Icon is used 
 */
mxIBM2MondrianBase.prototype.paintIcon = function(c)
{
	let positionX = this.iconSpacing;
	let positionY = this.iconSpacing;

	if(this.shapeType === 'ts')
	{
		if(this.shapeLayout === 'collapsed')
			positionX = 20;
		else
			positionX = this.iconSpacing;
	}
	else if(this.shapeType === 'pg' || this.shapeType === 'lg')
	{
		positionX = this.shapeVisualDefinition.bar.width + this.iconSpacing;
	}

	if(this.shapeVisualDefinition.icon.visible)
	{
		let iconStencilName = this.state.cell.getAttribute('Icon-Name',null);
		let iconImageStyle = this.image || 'undefined';

		// Determine what Icon to show
		let showStencilIcon = (iconStencilName != null && iconStencilName != '');
		let stencilIconIsUndefined = (iconStencilName == 'undefined');

		let showImageIcon = (iconImageStyle != null && iconImageStyle != '' && iconImageStyle != 'undefined');

		// Retrieve the stencil from the registry 
		let iconStencil = null;
		if(showStencilIcon)
		{
			iconStencil = mxStencilRegistry.getStencil('mxgraph.ibm2mondrian.' + iconStencilName);

			if(iconStencil == null) // the iconStencilName cannot be found, so the 'undefined' Icon is retrieved
			{
				iconStencil = mxStencilRegistry.getStencil('mxgraph.ibm2mondrian.undefined');
				stencilIconIsUndefined = true;
			}

			showStencilIcon = (iconStencil != null); // only show the Icon if a stencil is found
		}

		// Make final call what Icon to show
		if(showStencilIcon && !stencilIconIsUndefined) // stencil is found and it is not the 'undefined' stencil -> never use the Image Style
			showImageIcon = false;
		else if(showStencilIcon && stencilIconIsUndefined && showImageIcon) // stencil is found, but it is the 'undefined stencil and there is an Image Style set -> use the Image Style
			showStencilIcon = false;
		

		if(showStencilIcon || showImageIcon)
		{
			c.save();
			let canvasCenterX = positionX + this.iconSize/2;
			let canvasCenterY = 24;
		
			// rotate icon
			c.rotate(this.shapeVisualDefinition.icon.rotate, this.shapeVisualDefinition.icon.flipH, this.shapeVisualDefinition.icon.flipV, 
				canvasCenterX, canvasCenterY);
			
			if(showStencilIcon)
			{
				c.setStrokeColor('none');
				c.setFillColor(this.shapeVisualDefinition.icon.color);
				c.setDashed(false);
	
				iconStencil.strokewidth = 1;
				iconStencil.drawShape(c, this, positionX, positionY, this.iconSize, this.iconSize);	
			}
			else if(showImageIcon)
			{
				c.image(positionX, positionY, this.iconSize, this.iconSize, this.image, true, false, false);
			}
			
			c.restore();
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
	if(shapeType === 'pg' || shapeType === 'lg')
	{
		style = mxUtils.setStyle(style, 'container', 1);
		style = mxUtils.setStyle(style, 'collapsible', 0);
		style = mxUtils.setStyle(style, 'recursiveResize', 0);
		style = mxUtils.setStyle(style, 'expand', 0);

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
			{
				shapeStyle.align = mxConstants.ALIGN_CENTER;
				shapeStyle.spacingLeft = this.textSpacingLeft;
				shapeStyle.spacingRight = shapeStyle.spacingLeft;
			}
			else
			{
				shapeStyle.align = mxConstants.ALIGN_LEFT;
				shapeStyle.spacingLeft = this.textSpacingLeft;
				shapeStyle.spacingRight = this.textSpacingRight;	
			}
				
			shapeStyle.spacing = 0;
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
				shapeStyle.spacingTop = this.textSpacing - 4; //draw.io adds 4px padding
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
		else if(shapeType === 'pg' || shapeType === 'lg')
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
	return new mxRectangle(
					rect.x + this.shapeVisualDefinition.corner.width * this.scale, 
					rect.y,
					rect.width -  (this.shapeVisualDefinition.corner.width * this.scale),
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
		for (pointIndex = 0; pointIndex < connectionPositions.length; pointIndex++) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(0, connectionPositions[pointIndex]), false);
			constr.push(connectionConstraint);	
		}

		// Right side
		for (pointIndex = 0; pointIndex < connectionPositions.length; pointIndex++) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(1, connectionPositions[pointIndex]), false);
			connectionConstraint.dx = dXoffSet;
			constr.push(connectionConstraint);	
		}

		// Top side
		for (pointIndex = 0; pointIndex < connectionPositions.length; pointIndex++) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(connectionPositions[pointIndex], 0), false);
			connectionConstraint.dy = -1 * dYoffSet;
			constr.push(connectionConstraint);	
		}

		// Bottom side
		for (pointIndex = 0; pointIndex < connectionPositions.length; pointIndex++) {
			connectionConstraint = new mxConnectionConstraint(new mxPoint(connectionPositions[pointIndex], 1), false);
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

let _union = mxVertexHandler.prototype.union;
mxVertexHandler.prototype.union = function(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
{  	
	let rect = _union.apply(this, arguments); 

	if(this.state.style['shape'] === mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE)
	{
		const shapeType = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE_DEFAULT);
		const shapeLayout = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
		rect = mxIBM2MondrianBase.prototype.getRectangle(rect, shapeType, shapeLayout, 'mxVertexHandler');
	}

	return rect;
};

let _createCustomeHandles = mxVertexHandler.prototype.createCustomHandles;
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

	return _createCustomeHandles.call(this);
};