from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import ZipcodeSerializer
from .models import Zipcode


# give city and state for a single zipcode
class ZipcodeViewSet(viewsets.ModelViewSet):

    serializer_class = ZipcodeSerializer
    queryset = Zipcode.objects.all()
    def get_queryset(self):
        queryset = Zipcode.objects.all()
        zipcode = self.request.query_params.get('zipcode', None)
        if zipcode is not None:
            queryset = queryset.filter(zipcode=zipcode)
        return queryset
    
    
