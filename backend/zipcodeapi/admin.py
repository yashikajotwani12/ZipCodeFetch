from django.contrib import admin
from .models import Zipcode

# Register your models here

class ZipcodeAdmin(admin.ModelAdmin):
    list_display = ('zipcode', 'city', 'state')

admin.site.register(Zipcode, ZipcodeAdmin)
