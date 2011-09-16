from Acquisition import aq_inner

from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from Products.CMFCore.utils import getToolByName

from plone.app.layout.viewlets.common import ViewletBase
from plone.memoize.instance import memoize

from datetime import date
from DateTime import DateTime

from random import shuffle

class FooterViewlet(ViewletBase):
    index = ViewPageTemplateFile('templates/footer.pt')
    
    def year(self):
        return date.today().year
    
    def greeting(self):
        """return greeting based on time"""
        
        hour = DateTime().strftime('%H')
        if hour in ['03','04','05','06','07','08','09','10','11']:
            return 'Sie sehen gut aus heute Morgen'
        
        if hour in ['12','13','14','15','16','17']:
            return 'Sie sehen gut aus heute'
        
        if hour in ['18','19','20','21','22','23','00','01','02']:
            return 'Sie sehen gut aus heute Abend'