from django.db import models

class ServiceCategory(models.Model):
    """Categories for different types of consulting services"""
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    slug = models.SlugField(unique=True)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Service Categories"
        ordering = ['order']

    def __str__(self):
        return self.name

class Service(models.Model):
    """Individual consulting services"""
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE, related_name='services')
    title = models.CharField(max_length=200)
    description = models.TextField()
    detailed_description = models.TextField(blank=True)
    key_points = models.TextField(blank=True)
    image = models.ImageField(upload_to='services/', blank=True)
    slug = models.SlugField(unique=True)
    order = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title