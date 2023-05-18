from django.shortcuts import render
from .models import Student

# Create your views here.
def Student_data(request):
    students = Student.objects.all()
    return render(request, 'web_application/students_data.html', {'students': students})