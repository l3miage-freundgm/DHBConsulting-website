from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from backend.apps.services.views import ServiceCategoryViewSet, ServiceViewSet
from backend.apps.core.views import (
    HeroViewSet, 
    AboutSectionViewSet, 
    AchievementViewSet,
    HomePageView
)
from backend.apps.careers.views import (
    JobCategoryViewSet,
    JobPositionViewSet,
    JobApplicationViewSet
)
from django.conf.urls import handler404, handler500
from rest_framework.views import exception_handler
from rest_framework.response import Response

router = DefaultRouter()

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    
    if response is not None:
        response.data['status_code'] = response.status_code

    return response

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'backend.views.custom_404'
handler500 = 'backend.views.custom_500'

# Services URLs
router.register(r'service-categories', ServiceCategoryViewSet)
router.register(r'services', ServiceViewSet)

# Core URLs
router.register(r'hero', HeroViewSet)
router.register(r'about', AboutSectionViewSet)
router.register(r'achievements', AchievementViewSet)

# Careers URLs
router.register(r'job-categories', JobCategoryViewSet)
router.register(r'jobs', JobPositionViewSet)
router.register(r'job-applications', JobApplicationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/homepage/', HomePageView.as_view(), name='homepage'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)