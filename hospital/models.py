from django.db import models
from django.contrib.auth.models import User



departments=[('Cardiologist','Cardiologist'),
('Dermatologists','Dermatologists'),
('Orthopedic','Orthopedic'),
('Gynecologist','Gynecologist'),
]
class Doctor(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20,null=False)
    last_name = models.CharField(max_length=20,null=False)
    doctorID = models.CharField(max_length=10, unique=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)
    confirmpassword = models.CharField(max_length=128)
    mobile = models.CharField(max_length=20,null=False)
    department= models.CharField(max_length=50,choices=departments)
    #profile_pic= models.ImageField(upload_to='profile_pic/DoctorProfilePic/',null=True,blank=True)

    @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
    @property
    def get_id(self):
        return self.user.id
    def __str__(self):
        return "{} ({})".format(self.user.first_name,self.department)


gender = [('Male','Male'),('Female','Female'),('other','other')]
class Patient(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20,null=False)
    last_name = models.CharField(max_length=20,null=False)
    dob = models.DateField(null=False)
    gender = models.CharField(max_length=10,choices=gender,null=False)
    mobile = models.CharField(max_length=20,null=False)
    aadhar = models.CharField(max_length=12, null=False)
    @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
    @property
    def get_id(self):
        return self.user.id
    def __str__(self):
        return self.first_name+" "+self.last_name


class Records(models.Model):
    aadhar = models.CharField(max_length=12, null=False)
    patient_name = models.CharField(max_length=40,null=False)
    doctor_name = models.CharField(max_length=40,null=False)
    doctorID = models.CharField(max_length=10)
    title = models.CharField(max_length=100,null=False)
    category = models.CharField(max_length=20,null=False)
    isdoctor = models.BooleanField(default=True)
    link = models.CharField(max_length=200,null=False)
    dateupload = models.DateField(auto_now=True)
    hide = models.BooleanField(default=False)

    def __str__(self):
        return self.user.title


class Appointment(models.Model):
    patientId=models.PositiveIntegerField(null=True)
    doctorId=models.PositiveIntegerField(null=True)
    patientName=models.CharField(max_length=40,null=True)
    doctorName=models.CharField(max_length=40,null=True)
    appointmentDate=models.DateField(auto_now=True)
    description=models.TextField(max_length=500)
    status=models.BooleanField(default=False)



class PatientDischargeDetails(models.Model):
    patientId=models.PositiveIntegerField(null=True)
    patientName=models.CharField(max_length=40)
    assignedDoctorName=models.CharField(max_length=40)
    address = models.CharField(max_length=40)
    mobile = models.CharField(max_length=20,null=True)
    symptoms = models.CharField(max_length=100,null=True)

    admitDate=models.DateField(null=False)
    releaseDate=models.DateField(null=False)
    daySpent=models.PositiveIntegerField(null=False)

    roomCharge=models.PositiveIntegerField(null=False)
    medicineCost=models.PositiveIntegerField(null=False)
    doctorFee=models.PositiveIntegerField(null=False)
    OtherCharge=models.PositiveIntegerField(null=False)
    total=models.PositiveIntegerField(null=False)

