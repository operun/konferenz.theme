from Acquisition import aq_inner

from Products.Five.browser import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from Products.CMFCore.utils import getToolByName
from Products.CMFPlone.interfaces.siteroot import IPloneSiteRoot

from plone.app.layout.viewlets.common import ViewletBase
from plone.memoize.instance import memoize

from zope.component import getMultiAdapter

from random import shuffle

from DateTime.DateTime import DateTime


class PanelView(BrowserView):

    __call__ = ViewPageTemplateFile('templates/panel.pt')


    def available(self):
        """ check if necessary
        """
        return True
        
    @memoize
    def _data(self):
        context = aq_inner(self.context)
        catalog = getToolByName(context, 'portal_catalog')
        state = 'published'
        return catalog(portal_type='Sponsor',
                       review_state=state,
                       )

    def sponsors(self):
        
        result = []
        for r in self._data():
            result.append(r)
        shuffle(result)
        
        sponsors = []
        for t in result:
            sponsors.append(t.getObject())
                
        groups = []
        group = 5
        for i in range(0, len(sponsors), group):
            groups.append(sponsors[i:i+group])
            
        return groups    