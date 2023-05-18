from django.urls import path
from . import views

urlpatterns = [
    path('students-data', views.Student_data, name="student_data"),
]
