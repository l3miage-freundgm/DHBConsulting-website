from django.contrib import admin
from backend.apps.careers.models import JobCategory, JobPosition, JobApplication

@admin.register(JobCategory)
class JobCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    search_fields = ('name',)

@admin.register(JobPosition)
class JobPositionAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'location', 'status', 'posted_date', 'closing_date')
    list_filter = ('status', 'location', 'category')
    search_fields = ('title', 'description')
    date_hierarchy = 'posted_date'

@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'position', 'email', 'status', 'applied_date')
    list_filter = ('status', 'position__category', 'applied_date')
    search_fields = ('full_name', 'email', 'position__title')
    date_hierarchy = 'applied_date'