from Acquisition import aq_inner

from Products.CMFCore.utils import getToolByName

from Products.Five.browser import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from zope.component import getMultiAdapter
from plone.app.layout.viewlets import ViewletBase


class ToolbarViewlet(ViewletBase):

    index = ViewPageTemplateFile('templates/toolbar.pt')
    
    def anonymous(self):
        context = aq_inner(self.context)
        portal_state = getMultiAdapter((context, self.request), name=u'plone_portal_state')
        
        return portal_state.anonymous()
    
    def folder(self):
        context = aq_inner(self.context)
        context_state = getMultiAdapter((context, self.request), name=u'plone_context_state')
        
        folder = context_state.folder()
        folder_path = '/'.join(folder.getPhysicalPath())
        
        return folder_path
        