from rest_framework import viewsets
from backend.apps.services.models import ServiceCategory, Service
from backend.apps.services.serializers import ServiceCategorySerializer, ServiceSerializer

class ServiceCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ServiceCategory.objects.filter(is_active=True)
    serializer_class = ServiceCategorySerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        category_slug = self.request.query_params.get('category', None)
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        return queryset