from rest_framework import viewsets, views
from rest_framework.response import Response
from backend.apps.core.models import Hero, AboutSection, Achievement, ContactInfo
from backend.apps.core.serializers import (
    HeroSerializer, 
    AboutSectionSerializer,
    AchievementSerializer,
    ContactInfoSerializer
)

class HeroViewSet(viewsets.ReadOnlyModelViewSet):
    """Endpoint for hero section content"""
    queryset = Hero.objects.filter(is_active=True)
    serializer_class = HeroSerializer

class AboutSectionViewSet(viewsets.ReadOnlyModelViewSet):
    """Endpoint for about section"""
    queryset = AboutSection.objects.filter(is_active=True)
    serializer_class = AboutSectionSerializer

class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    """Endpoint for achievements/stats"""
    queryset = Achievement.objects.all().order_by('order')
    serializer_class = AchievementSerializer

class HomePageView(views.APIView):
    """Combined endpoint for homepage data"""
    def get(self, request):
        hero = Hero.objects.filter(is_active=True).first()
        about = AboutSection.objects.filter(is_active=True).first()
        achievements = Achievement.objects.all().order_by('order')
        contact = ContactInfo.objects.first()

        data = {
            'hero': HeroSerializer(hero).data if hero else None,
            'about': AboutSectionSerializer(about).data if about else None,
            'achievements': AchievementSerializer(achievements, many=True).data,
            'contact': ContactInfoSerializer(contact).data if contact else None
        }
        return Response(data)