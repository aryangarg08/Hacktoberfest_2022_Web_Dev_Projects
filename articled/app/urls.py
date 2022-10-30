from django.urls import path
from app import views

from .views import HomeView,ArticleDetailView,AddPostView,EditPostView,DeletePostView,AddCategoryView,category_view


urlpatterns=[
	#path('home1/',views.home_view),
	path('home/',HomeView.as_view(), name='home'),
	path('article/<int:pk>',ArticleDetailView.as_view(),name="detail"),
	path('add_post/',AddPostView.as_view(),name="add_post"),
	path('add_category/',AddCategoryView.as_view(),name="add_category"),
	path('article/edit/<int:pk>',EditPostView.as_view(),name="edit_post"),
	path('article/<int:pk>/delete',DeletePostView.as_view(),name="delete_post"),
	path('register/',views.register_view),
	path('actact/',views.acount_activation_view),
	path('profile/',views.profile_view),
	path('dashboard/',views.dashboard_view),
	path('category/<str:cats>/',category_view,name='category')
	
]