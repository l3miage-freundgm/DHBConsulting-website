from django.contrib import admin
from backend.apps.services.models import ServiceCategory, Service  # Note the full import path

@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_featured', 'is_active')
    list_editable = ('is_featured', 'is_active')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('category', 'is_featured', 'is_active')