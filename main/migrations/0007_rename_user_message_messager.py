# Generated by Django 4.0.2 on 2022-03-14 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_rename_messager_message_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='user',
            new_name='messager',
        ),
    ]