from django import forms
from django.contrib.auth.models import User
from .models import Posts,Category

from .models import UserProfile

choices=Category.objects.all().values_list('name','name')

choice_list=[]

for item in choices:
	choice_list.append(item)

class SignupForm(forms.ModelForm):
	password=forms.CharField(widget=forms.PasswordInput)
	class Meta:
		model=User
		fields=['username','first_name','last_name','email','password']

class UserProfileForm(forms.ModelForm):
	class Meta:
		model=UserProfile
		#fields=['profpic','city','mobile']
		fields=['profpic','city']

class PostForm(forms.ModelForm):
	class Meta:
		model=Posts
		fields=['title','author','category','body']

		widgets={
			
			'title':forms.TextInput(attrs={'class':'form-control'}),
			'category':forms.Select(choices=choice_list,attrs={'class':'form-control'})
		}

class EditPost(forms.ModelForm):
	class Meta:
		model=Posts
		fields=['title','body','category']

		