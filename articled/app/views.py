from django.shortcuts import render,redirect

from django.urls import reverse_lazy

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

from django.views.generic import DetailView,ListView,CreateView,UpdateView,DeleteView


from .form import SignupForm,UserProfileForm,EditPost,PostForm
from django.contrib.auth.models import User
from .utils import verifyEmail

from .models import UserProfile,Posts,Category
from django.views.generic import DetailView,ListView

# Create your views here.
'''
def home_view(request):
	return render(request,'app/home.html')'''

def category_view(request, cats):
	category_posts=Posts.objects.filter(category=cats.replace('-',' '))
	return render(request,'app/categories.html',{'cats':cats.title().replace('-',' '),'category_posts':category_posts})

class HomeView(ListView):
	model=Posts
	template_name='app/home_post.html'
	ordering=['-post_date']
	#ordering=['-id']

class ArticleDetailView(DetailView):
	model=Posts
	template_name='app/article_detail.html'
	

@method_decorator(login_required, name='dispatch')
class AddPostView(CreateView):
	model=Posts
	form_class=PostForm
	template_name='app/add_post.html'
	#fields='__all__'
	#fields=('title','body')

@method_decorator(login_required, name='dispatch')
class AddCategoryView(CreateView):
	model=Category
	#form_class=PostForm
	template_name='app/add_category.html'
	fields='__all__'
	#fields=('title','body')

@method_decorator(login_required, name='dispatch')
class EditPostView(UpdateView):
	model=Posts
	form_class=EditPost
	template_name='app/edit_post.html'
	
	#fields='__all__'
	#fields=('title','body')

@method_decorator(login_required, name='dispatch')
class DeletePostView(DeleteView):
	model=Posts
	template_name='app/delete_post.html'
	success_url=reverse_lazy('home')

def register_view(request):
	if request.method == 'POST':
		form = SignupForm(request.POST)
		print('----------1-----')
		if form.is_valid():
			print('----------2-----')
			user=form.save()
			user.set_password(user.password)
			user.is_active=0
			user.save()
			print('-----------4-------')
	
			verifyEmail(request,user)
			return render(request,'app/after_register.html')
	else:
		print('----------3-----')
		form = SignupForm()
	return render(request, 'app/register.html', {'form': form})


def acount_activation_view(request):
	uid=request.GET.get('id')
	request.session['uid']=uid

	
	uname=request.GET.get('uname')
	request.session['uname']=uname
	actcode=request.GET.get('act_code')
	activation_code=str(request.session.get('activation_code'))
	try:
		user=User.objects.get(id=uid)
		
		if actcode==activation_code:
			user.is_active=1
			user.save()
			return redirect('/app/profile')
	except:
		return render(request, 'app/error.html')
'''
def profile_view(request):
	return render(request,'app/profile.html')'''


def profile_view(request):

	if request.method=='POST':
		pic=request.FILES.get('profpic')
		#mobile=request.POST.get('mobile')
		ctid=request.POST.get('city')
		
		#print('----------'+request.POST.get('city')+'-------------')
		#print('----------'+request.session['uid']+'-------------')
		uid=request.session['uid']
		#uf=UserProfile(user_id=uid,city_id=ctid,profpic=pic,mobile=mobile)
		uf=UserProfile(user_id=uid,city_id=ctid,profpic=pic)
		uf.save()
		form=UserProfileForm(request.POST)
		return render(request,'app/profile.html')
	else:	
		form=UserProfileForm()
		return render(request,'app/profile.html',{'form':form})


@login_required
def dashboard_view(request):
	request.session['login']=True
	return render(request, 'app/dashboard.html')