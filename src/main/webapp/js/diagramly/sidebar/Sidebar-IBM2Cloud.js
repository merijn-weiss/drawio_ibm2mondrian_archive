(function()
{
    Sidebar.prototype.addIBM2CloudPalette = function()
    {
        const dt = 'ibm mondrian ';
	const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

	// Text Dictionaries -
	//   font: Custom Font or
	//         None (defaults to fontFamily=IBM Plex Sans, fontColer=#000000, fontSize=14)
	//   position: Bottom, Top, Left, Right
	const DEFAULT_LABEL = {font: '', position: null};

	// Tag Dictionaries -
	//   type: None, Circle, Diamond, Square, Triangle, Hexagon, Octagon
	//   color: Red, Magenta, Purple, Cyan, Blue, Teal, Green, Black, Gray
	//   fill: White, Light, Medium, Dark
	const DEFAULT_TAG = {type: null, color: null, fill: null};

	// Shape Dictionaries -
	//   type: Actor, Target System, Logical Node, Logical Component, 
	//         Prescribed Node, Prescribed Component, Group 
	//   layout: Collapsed, Expanded, Custom
	//   style: Solid, Strikethrough, Dashed
	//   container: Yes, No, Yes Transparent, No Transparent
	//   multiplicity: true, false
	const ACTOR_SHAPE = {type: MBS.SHAPE_TYPE.ACTOR, layout: MBS.SHAPE_LAYOUT.COLLAPSED, style: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT, multiplicity: false};
	const GROUP_SHAPE = {type: MBS.SHAPE_TYPE.GROUP, layout: MBS.SHAPE_LAYOUT.EXPANDED, style: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT, multiplicity: false};
	const GROUP_SHAPE_NOCONTAINER = {type: MBS.SHAPE_TYPE.GROUP, layout: MBS.SHAPE_LAYOUT.EXPANDED, style: null, container: MBS.SHAPE_CONTAINER.NO_TRANSPARENT, multiplicity: false};
	const LOGICAL_SHAPE = {type: MBS.SHAPE_TYPE.LOGICAL_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, style: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT, multiplicity: false};
	const LOGICAL_SHAPE_EXPANDED = {type: MBS.SHAPE_TYPE.LOGICAL_NODE, layout: MBS.SHAPE_LAYOUT.EXPANDED, style: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT, multiplicity: false};
	const PRESCRIBED_SHAPE = {type: MBS.SHAPE_TYPE.PRESCRIBED_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, style: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT, multiplicity: false};
	const PRESCRIBED_SHAPE_EXPANDED = {type: MBS.SHAPE_TYPE.PRESCRIBED_NODE, layout: MBS.SHAPE_LAYOUT.EXPANDED, style: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT, multiplicity: false};

	// Color Dictionaries -
	//   family: Red, Magenta, Purple, Cyan, Blue, Teal, Green, Black, Gray
	//   fillCorner: None, Light, Medium, Dark
	//   fillTitle: None, White, Very Light
	//   fillContainer: None, White, Very Light
	const APPLICATIONS_COLOR = {family: MBS.COLOR_FAMILY.PURPLE, fillCorner: null, fillTitle: null, fillContainer: null};
	const COMPUTE_COLOR = {family: MBS.COLOR_FAMILY.MAGENTA, fillCorner: null, fillTitle: null, fillContainer: null};
	const DATA_COLOR = {family: MBS.COLOR_FAMILY.CYAN, fillCorner: null, fillTitle: null, fillContainer: null};
	const DEVOPS_COLOR = {family: MBS.COLOR_FAMILY.GRAY, fillCorner: null, fillTitle: null, fillContainer: null};
	const MANAGEMENT_COLOR = {family: MBS.COLOR_FAMILY.TEAL, fillCorner: null, fillTitle: null, fillContainer: null};
	const NETWORK_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillCorner: null, fillTitle: null, fillContainer: null};
	const SECURITY_COLOR = {family: MBS.COLOR_FAMILY.RED, fillCorner: null, fillTitle: null, fillContainer: null};
	const SERVICES_COLOR = {family: MBS.COLOR_FAMILY.GREEN, fillCorner: null, fillTitle: null, fillContainer: null};
	const STORAGE_COLOR = {family: MBS.COLOR_FAMILY.CYAN, fillCorner: null, fillTitle: null, fillContainer: null};
	const USER_COLOR = {family: MBS.COLOR_FAMILY.BLACK, fillCorner: null, fillTitle: null, fillContainer: null};

	// Stencil dictionaries
	const stencils = {
	    'Groups': { 
		'Cloud Groups' : {
			'IBM Cloud': {id: '', icon: {name: 'ibm-cloud', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Region': {id: '', icon: {name: 'location', rotate: null}, shape: GROUP_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Zone': {id: '', icon: {name: 'data--base--alt', rotate: null}, shape: GROUP_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Cloud Services': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Classic Infrastructure': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Account': {id: '', icon: {name: 'user', rotate: null}, shape: GROUP_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Access Group': {id: '', icon: {name: 'credentials', rotate: null}, shape: GROUP_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Resource Group': {id: '', icon: {name: 'collaborate', rotate: null}, shape: GROUP_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
	      	},

		'VPC Groups' : {
			'IBM VPC': {id: '', icon: {name: 'virtual-private-cloud--alt', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'General VPC': {id: '', icon: {name: 'virtual-private-cloud', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Subnet': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Subnet : ACL': {id: '', icon: {name: 'locked', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Instance Group': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Endpoints': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Security Group': {id: '', icon: {name: 'security', rotate: null}, shape: GROUP_SHAPE_NOCONTAINER, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
	      	},

		'Kubernetes Groups' : {
			'Kubernetes Cluster': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'OpenShift Cluster': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Kubernetes Service': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Kubernetes Replica Set': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Kubernetes Pod': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Kubernetes Namespace': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},

		'Network Groups' : {
			'Public Network': {id: '', icon: {name: 'events', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Enterprise Network': {id: '', icon: {name: 'enterprise', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Cloud Foundry': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Data Center': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Point of Presence': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Overlay Network': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'VLAN': {id: '', icon: {name: 'default', rotate: null}, shape: GROUP_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Applications': {
		'*': {
			'Application': {id: '', icon: {name: 'application', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Automation': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'CLI App': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Web App': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Microservice': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Mobile App': {id: '', icon: {name: 'mobile', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Serverless App': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: APPLICATIONS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Compute': {
		'*': {
			'Virtual Server': {id: '', icon: {name: 'virtual-machine', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Virtual Server (Expanded)': {id: '', icon: {name: 'virtual-machine', rotate: null}, shape: LOGICAL_SHAPE_EXPANDED, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Instance Group': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
		
		'Compute Devices': {
			'Physical Server': {id: '', icon: {name: 'archive', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Physical Server (Expanded)': {id: '', icon: {name: 'archive', rotate: null}, shape: LOGICAL_SHAPE_EXPANDED, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Dedicated Host': {id: '', icon: {name: 'archive', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Mobile Device': {id: '', icon: {name: 'mobile', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Tablet Device': {id: '', icon: {name: 'tablet', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Laptop Device': {id: '', icon: {name: 'laptop', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Desktop Computer': {id: '', icon: {name: 'devices', rotate: null}, shape: LOGICAL_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Web Browser': {id: '', icon: {name: 'terminal', rotate: null}, shape: ACTOR_SHAPE, color: COMPUTE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Data': {
		'*': {
			'Database': {id: '', icon: {name: 'data--base', rotate: null}, shape: LOGICAL_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Block Volume': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'File System': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Object Bucket': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'BLOB': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},

		'Databases': {
			'DataStax DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'EDB DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'ETCD DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Mongo DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'PostreSQL DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Rabbit DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Redis DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Elastc DB': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: DATA_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'DevOps': {
		'*': {
			'Source Repository': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Artifacts Repository': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Continuous Integration': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Continuous Deployment': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Build Tool': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Test Tool': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: DEVOPS_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Industry': {
		'Automotive Industry': {
			'Mobility Services': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Vehicle Services': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'In-Vehicle API': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Connected Car': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Connect Vehicle Insights': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},

		'Finance Industry': {
			'Clearinghouse': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Management': {
		'*': {
			'Alerting': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'IT Service Management': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Logging': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Monitoring': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: MANAGEMENT_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Network': {
		'*': {
			'Floating IP': {id: '', icon: {name: 'connect', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'CDN': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'DNS': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'VLAN': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Hybrid Networking': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Internet': {id: '', icon: {name: 'wikis', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Transit Gateway': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Internet Services': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Direct Link': {id: '', icon: {name: 'default', rotate: null}, shape: PRESCRIBED_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},

		'Network Devices': {
			'Application LB': {id: '', icon: {name: 'parent-child', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Network LB': {id: '', icon: {name: 'parent-child', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Global LB': {id: '', icon: {name: 'network--2', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'LB Listener': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'LB Pool': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Public Gateway': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Edge Node': {id: '', icon: {name: 'edge-node', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Router': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Backend Router': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Backend Router Group': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: '', multiplicity: true},
			'Switch': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Backend Switch': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: NETWORK_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Security': {
		'*': {
			'Code Signing Service': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Two-Factor Authentication': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'ID Management': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'File Integrity Management': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'VPN Connection': {id: '', icon: {name: 'VPN', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'VPN Policy': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Rules': {id: '', icon: {name: 'rule', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Network ACL': {id: '', icon: {name: 'rule', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Security Services': {id: '', icon: {name: 'rule', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Certificate': {id: '', icon: {name: 'policy', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Credentials': {id: '', icon: {name: 'credentials', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'IAM': {id: '', icon: {name: 'fingerprint-recognition', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},

		'Security Devices': {
			'VPN Gateway': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'IDS': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'IPS': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Bastion Host': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'HSM': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Security Gateway': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Firewall': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SECURITY_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Services': {
		'*': {
			'Message Queue': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'API Gateway': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Container Registry': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Virtual Image Repository': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: SERVICES_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Storage': {
		'*': {
			'Object Storage Accessor': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: STORAGE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Object Storage Slicestor': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: STORAGE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},

		'Storage Devices': {
			'Block Storage': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: STORAGE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'File Storage': {id: '', icon: {name: 'default', rotate: null}, shape: LOGICAL_SHAPE, color: STORAGE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Object Storage': {id: '', icon: {name: 'object-storage', rotate: null}, shape: LOGICAL_SHAPE, color: STORAGE_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },

	    'Users': {
		'*': {
			'User': {id: '', icon: {name: 'user', rotate: null}, shape: ACTOR_SHAPE, color: USER_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Users': {id: '', icon: {name: 'group', rotate: null}, shape: ACTOR_SHAPE, color: USER_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Events': {id: '', icon: {name: 'events', rotate: null}, shape: ACTOR_SHAPE, color: USER_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
			'Collaborate': {id: '', icon: {name: 'collaborate', rotate: null}, shape: ACTOR_SHAPE, color: USER_COLOR, label: DEFAULT_LABEL, tag: DEFAULT_TAG, extra: ''},
		},
	    },
	};

	for (let category in stencils) {
		const sections = stencils[category];
		var entries = [];

		for (let section in sections) {
			if (section != '*')
			{
				entries.push(this.addEntry(dt + section.toLowerCase(), this.createSection(section)));
			}

			const group = sections[section];

			for (let name in group) {
				entries.push(this.addEntry(dt + name.toLowerCase(), function() {
					const stencil = group[name];
					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(stencil.shape.type, stencil.shape.layout, stencil.color.family, stencil.shape.container, stencil.label.font, stencil.extra, stencil.id, name, stencil.icon.name);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
				}));
			}
		}
		this.setCurrentSearchEntryLibrary('ibm2cloud', 'ibm2cloud' + category)
		this.addPaletteFunctions('ibm2cloud' + category, 'IBM / ' + category, false, entries);
	}

	this.setCurrentSearchEntryLibrary();
    };
})();
