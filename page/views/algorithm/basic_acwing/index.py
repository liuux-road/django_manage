from django.shortcuts import render

# Create your views here.

# from django.http import HttpResponse

def index(request):
    return render(request, "./algorithm/basic_acwing/basic_acwing.html")


