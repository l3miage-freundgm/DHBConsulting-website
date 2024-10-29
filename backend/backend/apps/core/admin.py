from django.contrib import admin
from backend.apps.core.models import Hero, AboutSection, Achievement, ContactInfo

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_editable = ('is_active',)

@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_editable = ('is_active',)

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('title', 'number', 'order')
    list_editable = ('order',)

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('email', 'phone_uae', 'phone_france')