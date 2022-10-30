from django.shortcuts import render
from .models import Form
from .serializers import FormSerializer
from rest_framework import viewsets

# Create your views here.
class FormViewSet(viewsets.ModelViewSet):
    serializer_class = FormSerializer
    queryset = Form.objects.all()