from django.db import models

from django.contrib.auth.models import User

from django.urls import reverse

from datetime import datetime,date 



# Create your models here.
class City(models.Model):
	city_name=models.CharField(max_length=20)

	def __str__(self):
		return self.city_name


class Category(models.Model):
	name=models.CharField(max_length=255)

	def __str__(self):
		return self.name

	def get_absolute_url(self):
		return reverse('home')


class Posts(models.Model):
	title=models.CharField(max_length=100)
	author=models.ForeignKey(User,on_delete=models.CASCADE)
	body=models.TextField()
	category=models.CharField(max_length=255,default='Coding Post')
	post_date=models.DateField(auto_now_add=True)

	def __str__(self):
		return self.title+' | '+str(self.author)

	def get_absolute_url(self):
		#return reverse('detail',args=(str(self.id)))
		return reverse('home')
	


class UserProfile(models.Model):
	user=models.OneToOneField(User,on_delete=models.CASCADE)
	#mobile=models.CharField(max_length=10)
	city=models.ForeignKey(City,on_delete=models.SET_NULL,null=True)
	profpic=models.ImageField(upload_to='profpics')