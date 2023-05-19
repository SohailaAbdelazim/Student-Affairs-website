from django.shortcuts import render
from .models import Student
from django.views.decorators.csrf import csrf_protect
from django import forms
from django.http import HttpResponse


class MyForm(forms.Form):
    id = forms.CharField()

# Create your views here.
def Web_site(request):
    return render(request, 'web_application/websitepage.html')


def login(request):
    return render(request, 'web_application/login.html')


def Home_page(request):
    return render(request, 'web_application/homepage.html')


@csrf_protect
def addNewStudent(request):
    if request.method=="POST":
        id = request.POST.get('id')
        name = request.POST.get('name')
        birth_day = request.POST.get('birth_day')
        GPA = request.POST.get('GPA')
        gender = request.POST.get('gender')
        level = request.POST.get('level')
        status = request.POST.get('status')
        # department = request.POST.get('departement')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        data = Student(id=id,name = name,birth_day = birth_day,gender = gender,email = email,phone = phone, status = status, GPA = GPA,level = level)
        data.save()
    return render(request,'web_application/add-new-student.html')


def Editpage(request):
    return render(request,'web_application/Editpage.html')


def assignDepartment(request):
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            my_variable = form.cleaned_data['id']
            # Do something with my_variable
            query = Student.objects.get(id=my_variable)
            return render(request, 'web_application/assign-department.html', {"query": query, 'form': form})
    else:
        form = MyForm()
    return render(request,'web_application/assign-department.html', {'form': form})



def save_option(request):
    if request.method == 'POST':
        selected_option = request.POST.get('dropDep')
        sid = request.POST.get('id')
        # Save the selected option to the database
        obj = Student.objects.get(id=sid)

        # Update the object with new data
        obj.departement = selected_option
        # Add other fields as needed

        # Save the object
        obj.save()
        # Your saving logic here    
        return HttpResponse("Option saved successfully.")
    else:
        return HttpResponse("Invalid request method.")


def active_inactive_students(request):
    return render(request,'web_application/active-inactive-students.html')


def Student_data(request):
    students = Student.objects.all()
    return render(request, 'web_application/students_data.html', {'students': students})