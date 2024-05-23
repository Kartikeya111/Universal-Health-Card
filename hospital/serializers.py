# serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Doctor, Patient, Records

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class DoctorSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['first_name', 'last_name', 'doctorID', 'username', 'password', 'confirmpassword', 'mobile', 'department']

    def validate(self, data):
        if data['password'] != data['confirmpassword']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        
        doctor = Doctor.objects.create(
            user=user,
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            doctorID=validated_data['doctorID'],
            username=validated_data['username'],
            password=validated_data['password'],
            confirmpassword=validated_data['confirmpassword'],
            #confirmpassword=make_password(validated_data['confirmpassword']),
            mobile=validated_data['mobile'],
            department=validated_data['department']
        )
        return doctor

class (serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Patient
        fields = ['user', 'first_name', 'last_name', 'dob', 'gender', 'mobile', 'aadhar']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        patient, created = Patient.objects.update_or_create(
            user=user,
            first_name=validated_data.pop('first_name'),
            last_name=validated_data.pop('last_name'),
            dob=validated_data.pop('dob'),
            gender=validated_data.pop('gender'),
            mobile=validated_data.pop('mobile'),
            aadhar=validated_data.pop('aadhar'))
        return patient

class RecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Records
        fields = ['aadhar', 'patient_name', 'doctor_name', 'doctorID', 'title', 'category', 'isdoctor', 'link','dateupload','hide']


class DoctorLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
