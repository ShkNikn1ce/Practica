from django.shortcuts import render
#from django.http import HttpResponse
# Create your views here.
def home(request):
    return render(request,'Main/home.html')

def departmants(request):
    return render(request,'Main/departmants.html')

def contact(request):
    return render(request,'Main/contact.html')

def works(request):
    return render(request, 'Main/works.html')

def AddWork(request):
    return render(request, 'Main/works_add.html')

def WorkPhysics(request):
    return render(request,'Main/WorkPhysics.html')

def physics(request):
    return render(request, 'Main/physics.html')

def math(request):
    return render(request, 'Main/math.html')

def informatics(request):
    return render(request, 'Main/informatics.html')

def WorkMath(request):
    return render(request, 'Main/WorkMath.html')

def WorkInformatics(request):
    return render(request, 'Main/WorkInformatics.html')