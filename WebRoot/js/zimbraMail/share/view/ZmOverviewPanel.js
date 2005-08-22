/*
***** BEGIN LICENSE BLOCK *****
Version: ZPL 1.1

The contents of this file are subject to the Zimbra Public License Version 1.1 ("License");
You may not use this file except in compliance with the License. You may obtain a copy of
the License at http://www.zimbra.com/license

Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY
OF ANY KIND, either express or implied. See the License for the specific language governing
rights and limitations under the License.

The Original Code is: Zimbra Collaboration Suite.

The Initial Developer of the Original Code is Zimbra, Inc.
Portions created by Zimbra are Copyright (C) 2005 Zimbra, Inc.
All Rights Reserved.
Contributor(s): ______________________________________.

***** END LICENSE BLOCK *****
*/

function ZmOverviewPanel(parent, className, posStyle, appCtxt) {

	DwtComposite.call(this, parent, className, posStyle);

	this._appCtxt = appCtxt;
	this.setScrollStyle(DwtControl.CLIP);
	this._createFolderTree();
}

ZmOverviewPanel.prototype = new DwtComposite();
ZmOverviewPanel.prototype.constructor = ZmOverviewPanel;

ZmOverviewPanel.prototype.toString = 
function() {
	return "ZmOverviewPanel";
}

ZmOverviewPanel.prototype.getFolderTree =
function() {
	return this._tree;
}

ZmOverviewPanel.prototype.reset =
function() {
	this._treePanel.dispose();
	this._treePanel = null;
	this._tree.dispose();
	this._tree = null;
	this._createElements();
}

ZmOverviewPanel.prototype._createElements =
function() {
	this._createFolderTree();
}

ZmOverviewPanel.prototype._createFolderTree =
function() {
	this._treePanel = new DwtComposite(this, "OverviewTreePanel", DwtControl.RELATIVE_STYLE);
	this._treePanel.setScrollStyle(DwtControl.SCROLL);
	this._tree = new DwtTree(this._treePanel, DwtTree.SINGLE_STYLE, "OverviewTree", DwtControl.STATIC_STYLE);
}
