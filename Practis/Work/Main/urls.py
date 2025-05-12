from django.urls import path
from . import views

urlpatterns = [
    path('',views.home),
    path('home/',views.home,name='home'),
    path('departmants/',views.departmants,name='departmants'),
    path('contact/',views.contact, name='contact'),
    path('works/',views.works, name='works'),
    path('AddWork/',views.AddWork, name='AddWork'),
    path('WorkPhysics/',views.WorkPhysics, name='WorkPhysics'),
    path('physics/',views.physics, name='physics'),
    path('math/',views.math, name='math'),
    path('informatics/',views.informatics, name='informatics'),
    path('WorkMath/',views.WorkMath, name='WorkMath'),
    path('WorkInformatics/', views.WorkInformatics, name='WorkInformatics'),
]
