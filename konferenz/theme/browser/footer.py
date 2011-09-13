from Acquisition import aq_inner

from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from Products.CMFCore.utils import getToolByName

from plone.app.layout.viewlets.common import ViewletBase
from plone.memoize.instance import memoize

from datetime import date
from random import shuffle

class FooterViewlet(ViewletBase):
    index = ViewPageTemplateFile('templates/footer.pt')
    
    def year(self):
        return date.today().year    