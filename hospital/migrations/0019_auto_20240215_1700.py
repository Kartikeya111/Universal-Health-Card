# Generated by Django 3.0.5 on 2024-02-15 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0018_auto_20201015_2036'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='aadhar',
            field=models.CharField(max_length=12, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
