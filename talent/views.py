from django.shortcuts import render


# Create your views here.

def talent_home(request):
    return render(request, 'landing_talent.html')


def talent_profile(request):
    return render(request, 'profile.html')
