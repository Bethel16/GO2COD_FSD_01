# Generated by Django 5.1.2 on 2024-11-05 04:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_post_updated_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
        migrations.RemoveField(
            model_name='post',
            name='categories',
        ),
        migrations.RemoveField(
            model_name='post',
            name='featured_image',
        ),
        migrations.RemoveField(
            model_name='post',
            name='tags',
        ),
        migrations.RemoveField(
            model_name='post',
            name='updated_at',
        ),
    ]
