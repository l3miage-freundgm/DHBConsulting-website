from django.db import models

class JobCategory(models.Model):
    """Categories for different types of job positions"""
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Job Categories"
        ordering = ['order']

    def __str__(self):
        return self.name

class JobPosition(models.Model):
    """Individual job listings"""
    LOCATION_CHOICES = (
        ('UAE', 'United Arab Emirates'),
        ('FR', 'France'),
        ('REMOTE', 'Remote'),
    )

    STATUS_CHOICES = (
        ('DRAFT', 'Draft'),
        ('PUBLISHED', 'Published'),
        ('CLOSED', 'Closed'),
    )

    title = models.CharField(max_length=200)
    category = models.ForeignKey(JobCategory, on_delete=models.CASCADE, related_name='positions')
    location = models.CharField(max_length=10, choices=LOCATION_CHOICES)
    description = models.TextField()
    requirements = models.TextField()
    responsibilities = models.TextField()
    experience_years = models.PositiveIntegerField(help_text="Required years of experience")
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='DRAFT')
    posted_date = models.DateField(auto_now_add=True)
    closing_date = models.DateField(null=True, blank=True)
    
    class Meta:
        ordering = ['-posted_date']

    def __str__(self):
        return f"{self.title} - {self.location}"

class JobApplication(models.Model):
    """Job applications submitted by candidates"""
    STATUS_CHOICES = (
        ('NEW', 'New'),
        ('REVIEW', 'Under Review'),
        ('SHORTLISTED', 'Shortlisted'),
        ('REJECTED', 'Rejected'),
        ('ACCEPTED', 'Accepted'),
    )

    position = models.ForeignKey(JobPosition, on_delete=models.CASCADE, related_name='applications')
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    cover_letter = models.TextField()
    resume = models.FileField(upload_to='resumes/')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='NEW')
    applied_date = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ['-applied_date']

    def __str__(self):
        return f"{self.full_name} - {self.position.title}"