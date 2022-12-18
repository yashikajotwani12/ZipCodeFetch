from django.db import models

# Create your models here.
class Zipcode(models.Model):
    zipcode = models.CharField(max_length=100, primary_key=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    
    def __str__(self):
        return self.zipcode
