from django.shortcuts import render
from django.views.decorators.cache import never_cache


# Create your views here.
@never_cache
def home(request):
    return render(request, 'landing.html')


def registration(request):
    return render(request, 'Auth/registration.html')


def logIn(request):
    return render(request, 'Auth/logIn.html')


def signUp(request):
    return render(request, 'Auth/signUp.html')


def resetPass(request):
    return render(request, 'Auth/resetPass.html')


def newPass(request):
    return render(request, 'Auth/newPass.html')


def aboutme(request):
    return render(request, 'modals/aboutme.html')



def contact(request):
    return render(request, 'modals/contact.html')



def education(request):
    return render(request, 'modals/education.html')
