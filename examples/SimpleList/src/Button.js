'use strict';

import React from 'react/addons';
import {Mixin} from 'isocortex';

const button = React.createFactory('button');

export default React.createClass({
	displayName: 'Button',

	mixins: [Mixin],

	actions: {
		'create': 'list.add'
	},

	_handleClick: function() {
		this.actions.create('whoooo');
	},

	render: function() {
		return button({
			onClick: this._handleClick
		}, 'Add');
	}
});
