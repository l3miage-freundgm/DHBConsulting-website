from rest_framework import serializers
from backend.apps.services.models import ServiceCategory, Service

class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = ['id', 'name', 'description', 'slug', 'is_active']

class ServiceSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Service
        fields = ['id', 'category', 'category_name', 'title', 'description', 
                 'detailed_description', 'key_points', 'image', 'slug', 
                 'is_featured', 'is_active']