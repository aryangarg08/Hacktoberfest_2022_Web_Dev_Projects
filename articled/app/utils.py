import random

from django.core.mail import send_mail

from django.contrib.auth.models import User


def verifyEmail(request,user):
	activation_code=random.randrange(11111,99999)
	request.session['activation_code']=activation_code
	#send_mail(<subject>,<message>,[<email1>,<email2>],fail_silently=False)
	subject='Welcome to Articled'
	message='''we are happy to see you in our portal<br />
				please click on <a href='http://localhost:8000/app/actact/?id={}&act_code={}&uname={}'>link</a> to activate your account.
			'''.format(user.id,activation_code,user.first_name+' '+user.last_name)
	send_mail(subject,'','Articled Welcomes you',[request.POST.get('email')],fail_silently=False,html_message=message)
	