from rest_framework import serializers
from backend.apps.careers.models import JobCategory, JobPosition, JobApplication

class JobCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobCategory
        fields = ['id', 'name', 'description', 'is_active']

class JobPositionSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = JobPosition
        fields = [
            'id', 'title', 'category', 'category_name', 'location',
            'description', 'requirements', 'responsibilities',
            'experience_years', 'status', 'posted_date', 'closing_date'
        ]

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = [
            'id', 'position', 'full_name', 'email', 'phone',
            'cover_letter', 'resume', 'applied_date'
        ]