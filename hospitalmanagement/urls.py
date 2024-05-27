from django.contrib import admin
from django.urls import path
from hospital import views
from django.contrib.auth.views import LoginView,LogoutView
from django.conf.urls.static import static
from django.conf import settings
#-------------FOR ADMIN RELATED URLS
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home_view,name=''),
    #path('', views.doctor_dashboard_view,name='doctor-dashboard'),
    path('profile_page',views.profile_page,name=''),
    path('aboutus', views.aboutus_view),

    path('dataupload', views.data_upload),

    path('adminclick', views.adminclick_view),
    path('doctorclick', views.doctorclick_view),
    path('patientclick', views.patientclick_view),
    path('doc_view_profile',views.doc_view_profile),
    path('doctorsignup', views.doctor_signup_view,name='doctorsignup'),
    path('patientsignup', views.patient_signup_view),

    path('doctorlogin', views.doctor_login),
    path('patientlogin', views.patient_login),
    path('logout', LogoutView.as_view(template_name='hospital/index.html'),name='logout'),
    path('patientloginbydoctor', views.patientloginbydoctor),
    path('doctor-dashboard', views.doctor_dashboard_view,name='doctor-dashboard')
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
