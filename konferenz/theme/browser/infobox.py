from Acquisition import aq_inner

from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from Products.CMFCore.utils import getToolByName

from plone.app.layout.viewlets.common import ViewletBase
from plone.memoize.instance import memoize

from datetime import date
from DateTime import DateTime

from random import shuffle

class InfoboxViewlet(ViewletBase):
    index = ViewPageTemplateFile('templates/infobox.pt')

    def _query(self):
        context = aq_inner(self.context)
        catalog = getToolByName(context, 'portal_catalog')
        path = '/'.join(context.getPhysicalPath())
        state = 'published'
        
        results = catalog(portal_type='Link', review_state=state)
        
        return results


    def infos(self):
        links = []
        for link in self._query():
            if link.id.startswith('infobox'):
                object = link.getObject()
                links.append({ 'title': link.Title, 'desc': link.Description, 'url': object.getRemoteUrl() })
        
        return links
    
    def static(self):
        if len(self.infos()) > 1:
            return 'scrollable'
        else:
            return 'static'
    
    
    def year(self):
        return date.today().year
    

    def countdown(self):
        """ return contdown day until given date
        """
        delta = date(2012, 2, 22) - date.today()
        days = delta.days
        
        if int(days) > 0:
            return days
        else:
            return False
    
        
    def greeting(self):
        """return greeting based on time"""
        
        hour = DateTime().strftime('%H')
        if hour in ['03','04','05','06','07','08','09','10','11']:
            return 'Sie sehen gut aus heute Morgen'
        
        if hour in ['12','13','14','15','16','17']:
            return 'Sie sehen gut aus heute'
        
        if hour in ['18','19','20','21','22','23','00','01','02']:
            return 'Sie sehen gut aus heute Abend'    