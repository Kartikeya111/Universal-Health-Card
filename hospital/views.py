from django.shortcuts import render,redirect,reverse
from . import forms,models
from django.db.models import Sum
from django.contrib.auth.models import Group
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.contrib.auth.decorators import login_required,user_passes_test
from datetime import datetime,timedelta,date
from django.conf import settings
from django.db.models import Q
import pandas as pd
from django.contrib.auth.models import User, auth
from .forms import DoctorSignupForm
from .models import Doctor,filesupload
from django.contrib.auth import authenticate, login, logout


# Create your views here.
def home_view(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('afterlogin')
    return render(request,'hospital/index.html')


#for showing signup/login button for admin(by sumit)
def adminclick_view(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('afterlogin')
    return render(request,'hospital/adminclick.html')


#for showing signup/login button for doctor(by sumit)
def doctorclick_view(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('afterlogin')
    return render(request,'hospital/doctorclick.html')


#for showing signup/login button for patient(by sumit)
def patientclick_view(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('afterlogin')
    return render(request,'hospital/patientclick.html')

def patient_signup_view(request):
    return render(request,'hospital/patientsignup.html')

def patient_login(request):
    if request.method=="POST":
        return profile_page(request)
    return render(request,'hospital/patientlogin.html')
"""
def admin_signup_view(request):
    form=forms.AdminSigupForm()
    if request.method=='POST':
        form=forms.AdminSigupForm(request.POST)
        if form.is_valid():
            user=form.save()
            user.set_password(user.password)
            user.save()
            my_admin_group = Group.objects.get_or_create(name='ADMIN')
            my_admin_group[0].user_set.add(user)
            return HttpResponseRedirect('adminlogin')
    return render(request,'hospital/adminsignup.html',{'form':form})"""




def doctor_signup_view(request):
    if request.method == 'POST':
        form = DoctorSignupForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
            )
            doctor_profile = Doctor.objects.create(
                user=user,
                doctorID=form.cleaned_data['doctorID'],
                mobile=form.cleaned_data['mobile'],
                department=form.cleaned_data['department']
            )
            return redirect('doctorlogin')
    else:
        form = DoctorSignupForm()
    return render(request, 'hospital/doctorsignup.html', {'docsignform': form})


def doctor_login(request):
    if request.method == 'POST':
        return doctor_dashboard_view(request)
    return render(request, 'hospital/doctorlogin.html')

def doctor_dashboard_view(request):
    return render(request,'hospital/doctor_dashboard.html')

"""
def patient_signup_view(request):
    userForm=forms.PatientUserForm()
    patientForm=forms.PatientForm()
    mydict={'userForm':userForm,'patientForm':patientForm}
    if request.method=='POST':
        userForm=forms.PatientUserForm(request.POST)
        patientForm=forms.PatientForm(request.POST,request.FILES)
        if userForm.is_valid() and patientForm.is_valid():
            user=userForm.save()
            user.set_password(user.password)
            user.save()
            patient=patientForm.save(commit=False)
            patient.user=user
            patient.assignedDoctorId=request.POST.get('assignedDoctorId')
            patient=patient.save()
            my_patient_group = Group.objects.get_or_create(name='PATIENT')
            my_patient_group[0].user_set.add(user)
        return HttpResponseRedirect('patientlogin')
    return render(request,'hospital/patientsignup.html',context=mydict)"""




#-----------for checking user is doctor , patient or admin(by sumit)
def is_admin(user):
    return user.groups.filter(name='ADMIN').exists()
def is_doctor(user):
    return user.groups.filter(name='DOCTOR').exists()
def is_patient(user):
    return user.groups.filter(name='PATIENT').exists()


#---------AFTER ENTERING CREDENTIALS WE CHECK WHETHER USERNAME AND PASSWORD IS OF ADMIN,DOCTOR OR PATIENT

#####
#####
#  ADDED FUNCTIONS #

def patientloginbydoctor(request):
    if request.method=="POST":
        return doc_view_profile(request)
    return render(request,'hospital/patientloginbydoctor.html')

def data_upload(request):
    if request.method=="POST":
        file2 = request.FILES["file"]
        print(file2)
        document = filesupload.objects.create(file=file2)
        document.save()
        redirect('doc_view_profile')
    return render(request,'hospital/dataupload.html')


#Doctor View Patient Profile
def doc_view_profile(request):
    df= pd.read_excel("csv Files/Patient Data.xlsx")
    user_id="abc123"
    df2 = df[(df["Username"]==user_id) & (df["hide"]==0)]
    df2 = df2.sort_values(by="date",ascending=False)
    con = {"data":[]}
    for row in df2.iloc[:,:].values:
        context = {}
        context["patient_name"]=row[1]
        context["doctor_name"]=row[2]
        context["doctor_id"]=row[3]
        context["title"]=row[4]
        context["category"]=row[5]
        if(row[6].lower()=="yes"):
            context["isdoctor"]="Doctor"
        else:
            context["isdoctor"]="Hospital"
        context["link"]=[]
        for link in row[7].split(','):
            temp={}
            temp["sublink"]=link
            temp["file_name"]=link.split("\\")[-1]
            context["link"].append(temp)
        full_date=str(row[8])
        full_date=full_date.split(" ")
        context["date"]=full_date[0]
        context["time"]=full_date[1]
        context["who"]="doctor"
        con["data"].append(context)
    con
    return render(request,"hospital/profile.html",con)

# For Showing patient's Profile page
def profile_page(request):
    df= pd.read_excel("csv Files/Patient Data.xlsx")
    user_id="abc123"
    df2 = df[df["Username"]==user_id]
    df2 = df2.sort_values(by="date",ascending=False)
    con = {"data":[]}
    for row in df2.iloc[:,:].values:
        context = {}
        context["patient_name"]=row[1]
        context["doctor_name"]=row[2]
        context["doctor_id"]=row[3]
        context["title"]=row[4]
        context["category"]=row[5]
        if(row[6].lower()=="yes"):
            context["isdoctor"]="Doctor"
        else:
            context["isdoctor"]="Hospital"
        context["link"]=[]
        for link in row[7].split(','):
            temp={}
            temp["sublink"]=link
            temp["file_name"]=link.split("\\")[-1]
            context["link"].append(temp)
        full_date=str(row[8])
        full_date=full_date.split(" ")
        context["date"]=full_date[0]
        context["time"]=full_date[1]
        context["hide"]=int(row[9])
        context["who"]="patient"
        con["data"].append(context)
    con
    return render(request,"hospital/profile.html",con)








#---------------------------------------------------------------------------------
#------------------------ ABOUT US AND CONTACT US VIEWS START ------------------------------
#---------------------------------------------------------------------------------
def aboutus_view(request):
    return render(request,'hospital/aboutus.html')


#---------------------------------------------------------------------------------
#------------------------ ADMIN RELATED VIEWS END ------------------------------
#---------------------------------------------------------------------------------
