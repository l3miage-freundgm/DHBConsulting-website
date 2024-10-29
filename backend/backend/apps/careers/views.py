from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from backend.apps.careers.models import JobCategory, JobPosition, JobApplication
from backend.apps.careers.serializers import (
    JobCategorySerializer,
    JobPositionSerializer,
    JobApplicationSerializer
)
from backend.apps.careers.permissions import IsAdminOrReadOnly

class JobCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """Endpoint for job categories"""
    queryset = JobCategory.objects.filter(is_active=True)
    serializer_class = JobCategorySerializer

class JobPositionViewSet(viewsets.ReadOnlyModelViewSet):
    """Endpoint for job positions"""
    permission_classes = [IsAdminOrReadOnly]
    queryset = JobPosition.objects.filter(status='PUBLISHED')
    serializer_class = JobPositionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category', None)
        location = self.request.query_params.get('location', None)

        if category:
            queryset = queryset.filter(category__id=category)
        if location:
            queryset = queryset.filter(location=location)
        
        return queryset

class JobApplicationViewSet(viewsets.ModelViewSet):
    """Endpoint for job applications"""
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    http_method_names = ['post']  # Only allow POST requests

    def create(self, request, *args, **kwargs):
        """Handle job application submission"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(
                {'message': 'Application submitted successfully'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)