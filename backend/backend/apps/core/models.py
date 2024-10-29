from django.db import models

class Hero(models.Model):
    """Main banner/hero section of the homepage"""
    title = models.CharField(max_length=200)
    subtitle = models.TextField()
    background_image = models.ImageField(upload_to='hero/')
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Hero Section"

    def __str__(self):
        return self.title

class AboutSection(models.Model):
    """About section content"""
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='about/', blank=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = "About Section"
        verbose_name_plural = "About Section"

    def __str__(self):
        return self.title

class Achievement(models.Model):
    """Key achievements/stats to display"""
    title = models.CharField(max_length=100)
    number = models.CharField(max_length=50)  # Using CharField for flexibility (e.g., "30+" or "1M+")
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, blank=True, help_text="Font Awesome class or similar")
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class ContactInfo(models.Model):
    """Company contact information"""
    email = models.EmailField()
    phone_uae = models.CharField(max_length=100, verbose_name="UAE Phone")
    phone_france = models.CharField(max_length=100, verbose_name="France Phone")
    address = models.TextField()
    linkedin = models.URLField(blank=True)
    
    class Meta:
        verbose_name = "Contact Information"
        verbose_name_plural = "Contact Information"

    def __str__(self):
        return self.email