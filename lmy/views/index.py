from django.shortcuts import render

# Create your views here.

# from django.http import HttpResponse

# def index(request):
#     line1 = '<h1 style="text-align: center"> 第er个网页 </h1>'
#     return HttpResponse(line1)

def index(request):
    return render(request, "lmy.html")