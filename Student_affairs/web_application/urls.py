from django.urls import path
from . import views

urlpatterns = [
    path('students-data.html', views.Student_data, name="student_data"),
    path('homepage.html', views.Home_page, name="home_page"),
    path('websitepage.html', views.Web_site, name="website_page"),
    path('login.html', views.login, name="login"),
    path('add-new-student.html', views.addNewStudent, name="add_new_student"),
    path('Editpage.html', views.Editpage, name="Editpage"),
    path('assign-department.html', views.assignDepartment, name="assignDepartment"),
    path('active-inactive-students.html', views.active_inactive_students, name="active-inactive-students"),
    path('update-department/', views.update_department, name='update_department'),
    path('delete-student/<str:pk>/', views.deleteStudent, name="delete-student"),
    # path('delete-student/<int:pk>/', views.deleteStudent, name="delete-student"),
    path('edit-student/<str:pk>/', views.editStudent, name="edit-student"),

]
