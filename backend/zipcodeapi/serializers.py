from rest_framework import serializers

from .models import Zipcode

class ZipcodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zipcode
        # use zipcode as the primary key
        lookup_field = 'zipcode'
        fields = ('zipcode', 'city', 'state')