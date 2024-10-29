from django.http import JsonResponse

def custom_404(request, exception):
    return JsonResponse({
        'status_code': 404,
        'error': 'The requested resource was not found'
    }, status=404)

def custom_500(request):
    return JsonResponse({
        'status_code': 500,
        'error': 'Internal server error'
    }, status=500)