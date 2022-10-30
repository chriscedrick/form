from rest_framework import serializers
from backend_api.models import Form

class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        # fields = '--all--'
        fields = ('id','Names','Sex','Age','School','Level','Contact','Email','The_content_was_as_described_in_shared_materials','The_training_was_applicable_to_my_field_of_Education','I_will_recommend_this_learning_method_to_other_students','The_program_was_well_paced_within_the_allotted_time','The_instructor_was_a_good_communicator','The_material_was_presented_in_an_organized_manner','The_instructor_was_knowledgeable_on_the_topic','I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject','Given_the_topic_was_this_program','In_your_opinion_was_this_program')