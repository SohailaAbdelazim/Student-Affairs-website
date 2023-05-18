from django.db import models

# Create your models here.

class Student(models.Model):
    id = models.CharField(max_length=8, primary_key=True)
    name = models.CharField(max_length=50)
    GPA = models.CharField(max_length=4)
    level = models.CharField(max_length=1)
    gender = models.CharField(max_length=8)
    phone = models.CharField(max_length=11)
    status = models.CharField(max_length=10)
    birth_day = models.DateField()
    email = models.CharField(max_length=50)
    departement = models.CharField(max_length=20)
