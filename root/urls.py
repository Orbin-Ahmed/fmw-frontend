from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('registration/', views.registration),
    path('log-in/', views.logIn),
    path('sign-up/', views.signUp),
    path('reset-pass/', views.resetPass),
    path('new-pass/', views.newPass),
    path('about-me/', views.aboutme),
    path('contact/', views.contact),
    path('education/', views.education)

]
