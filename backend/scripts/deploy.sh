# scripts/deploy.sh
#!/bin/bash

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Applying database migrations..."
python manage.py migrate --noinput

echo "Starting Gunicorn..."
gunicorn backend.wsgi:application --bind 0.0.0.0:8000