# Generated by Django 5.2.4 on 2025-07-17 02:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GameState',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.IntegerField(default=0)),
                ('clicks', models.IntegerField(default=0)),
                ('upgrade_level', models.IntegerField(default=1)),
            ],
        ),
    ]
