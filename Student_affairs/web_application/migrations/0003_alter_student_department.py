# Generated by Django 4.2.1 on 2023-05-20 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_application', '0002_rename_departement_student_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='department',
            field=models.CharField(default='General', max_length=20),
        ),
    ]
