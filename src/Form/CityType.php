<?php

namespace App\Form;

use App\Entity\Ville;
use App\Entity\Pays;
use App\Entity\Habitat;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType; 
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CityType extends AbstractType
{
        
public function __construct(private FormListenerFactory $Listenerfactory) {
    
}

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'empty_data' => ''
            ])
            ->add ('slug', TextType::class, [
                'required' => false,
                'empty_data' => ''
            ])

            
            ->add('pays', EntityType::class, [
                'class' => Pays::class,
                'choice_label' => function ($country) {
                    return $country->getName() . ' (' . $country->getSlug() . ')';
                },
                // 'expanded' => true
            ])
            // ->add('habitats', EntityType::class, [
            //     'class' => Habitat::class,
            //     'choice_label' => 'title',
            //     'multiple' => true,
            //  // 'expanded' => true,
            //     'by_reference' => false
            // ])
            ->add('save', SubmitType::class, [
                'label' => 'Enregistrer'
            ])
            // ->add('createdAt', null, [
            //     'widget' => 'single_text',
            // ])
            // ->add('updatedAt', null, [
            //     'widget' => 'single_text',
            // ])
            ->addEventListener(FormEvents::PRE_SUBMIT, $this->Listenerfactory->autoSlug('name'))
            ->addEventListener(FormEvents::POST_SUBMIT, $this->Listenerfactory->timestamps())
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Ville::class,
        ]);
    }
}
