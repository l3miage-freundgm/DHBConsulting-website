from rest_framework import serializers
from backend.apps.core.models import Hero, AboutSection, Achievement, ContactInfo

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['id', 'title', 'subtitle', 'background_image', 'is_active']

class AboutSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSection
        fields = ['id', 'title', 'content', 'image', 'is_active']

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['id', 'title', 'number', 'description', 'icon', 'order']

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = ['id', 'email', 'phone_uae', 'phone_france', 'address', 'linkedin']