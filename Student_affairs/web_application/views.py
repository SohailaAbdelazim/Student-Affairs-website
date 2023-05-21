from django.shortcuts import get_object_or_404, render, redirect
from .models import Student
from django.views.decorators.csrf import csrf_protect
from django import forms
from django.http import HttpResponse
from django.http import JsonResponse


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
        # department = request.POST.get('department')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        data = Student(id=id,name = name,birth_day = birth_day,gender = gender,email = email,phone = phone, status = status, GPA = GPA,level = level)
        data.save()
        return redirect('student_data')
    return render(request,'web_application/add-new-student.html')


def Editpage(request):
    return render(request,'web_application/Editpage.html')



def assignDepartment(request):
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            sid = form.cleaned_data['id']
            # Do something with my_variable
            try:
                query = Student.objects.get(id=sid)
                return render(request, 'web_application/assign-department.html', {"query": query, 'form': form})
            
            except:
                return render(request,'web_application/assign-department.html', {'form': form})
    else:
        form = MyForm()
    return render(request,'web_application/assign-department.html', {'form': form})


@csrf_protect
def update_department(request):
    selected_department = request.POST.get('drop-dep')
    sid = request.POST.get('student-id')

    try:
        your_instance = Student.objects.get(id=sid)
        your_instance.department = selected_department
        your_instance.save()

        return JsonResponse({'message': 'Department updated successfully!'})
    except Student.DoesNotExist:
        return JsonResponse({'message': 'Department not found.'})


def active_inactive_students(request):
    students = Student.objects.all()
    if request.method == "POST":
        status = request.POST.get('status')
        sid = request.POST.get('id')
        student = Student.objects.get(id=sid)
        
        if status == None:
            student.status = 'Inactive'
        else:
            student.status = "Active"

        student.save()
        redirect('active-inactive-students')
        
    return render(request,'web_application/active-inactive-students.html', {'students': students})


def Student_data(request):
    students = Student.objects.all()
    return render(request, 'web_application/students_data.html', {'students': students})


def editStudent(request, pk):
    student = Student.objects.get(id=pk)
    student = get_object_or_404(Student, id=pk)
    content = {'student': student}
    if request.method == 'POST':
        student.name = request.POST.get('name')
        student.birth_day = request.POST.get('dob')
        student.GPA = request.POST.get('GPA')
        student.level = request.POST.get('studentLevel')
        student.status = request.POST.get('status')
        student.email = request.POST.get('email')
        student.phone = request.POST.get('phone')
        student.save()

        return redirect('student_data')
    return render(request, 'web_application/Editpage.html', content)


def deleteStudent(request, pk):
    student = Student.objects.get(id=pk)
    student.delete()
    return redirect('student_data')

