from django.db import models

# Create your models here.
class Form(models.Model):
    Names = models.CharField(max_length=200)
    Age = models.IntegerField()
    sexoptions = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    Sex = models.CharField(
        max_length=2,
        choices=sexoptions,
        default='M',
    )
    School = models.CharField(max_length=200)
    Level = models.CharField(max_length=100)
    Contact = models.IntegerField()
    Email = models.CharField(max_length=100)
    options=[
        ('1', 'Strongly Agree'),
        ('2', 'Agree'),
        ('3', 'Desagree'),
        ('4', 'Strongly Desagree'),
    ]
    The_content_was_as_described_in_shared_materials = models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    The_training_was_applicable_to_my_field_of_Education = models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    I_will_recommend_this_learning_method_to_other_students = models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    The_program_was_well_paced_within_the_allotted_time = models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    The_instructor_was_a_good_communicator	= models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    The_material_was_presented_in_an_organized_manner	= models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    The_instructor_was_knowledgeable_on_the_topic = models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject= models.CharField(
        max_length=2,
        choices=options,
        default='1',
    )
    topic=[
        ('A', 'Too Short'),
        ('B', 'Right Length'),
        ('C', 'Too Long'),
    ]
    Given_the_topic_was_this_program = models.CharField(
        max_length=2,
        choices=topic,
        default='A',
    )
    opinion=[
        ('A', 'Introductory'),
        ('B', 'Intermediate'),
        ('C', 'Advanced'),
    ]	
    In_your_opinion_was_this_program = models.CharField(
        max_length=2,
        choices=opinion,
        default='A',
    )
    def __str__(self) :
        return self.Names