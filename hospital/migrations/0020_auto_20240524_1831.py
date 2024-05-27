# Generated by Django 3.0.5 on 2024-05-24 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0019_auto_20240215_1700'),
    ]

    operations = [
        migrations.CreateModel(
            name='filesupload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='')),
            ],
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='address',
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='profile_pic',
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='status',
        ),
        migrations.AddField(
            model_name='doctor',
            name='doctorID',
            field=models.CharField(default=0, max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='doctor',
            name='department',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='mobile',
            field=models.CharField(max_length=15),
        ),
    ]