from Acquisition import aq_inner

from Products.Five.browser import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from Products.CMFCore.utils import getToolByName

from plone.memoize.instance import memoize

from DateTime.DateTime import DateTime

from random import shuffle

class FrontpageView(BrowserView):

    __call__ = ViewPageTemplateFile('templates/frontpage.pt')