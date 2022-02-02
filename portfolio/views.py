from django.shortcuts import render


def portfolio(request):
    return render(request, 'portfolio/portfolio.html')


def about(request):
    return render(request, 'about/about.html')
