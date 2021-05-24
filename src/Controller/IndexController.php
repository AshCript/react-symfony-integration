<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }

    /**
    * @Route("/messages", name="messages")
    */
    public function messages(){
        return $this->render('index/messages.html.twig', [

        ]);
    }
    /**
    * @Route("/amis", name="amis")
    */
    public function amis(){
        return $this->render('index/amis.html.twig', [

        ]);
    }
}
