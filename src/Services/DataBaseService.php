<?php

namespace App\Services;

use App\Entity\Caisse;
use App\Entity\Compte;
use App\Entity\Cotisation;
use App\Entity\Inscription;
use App\Entity\Membre;
use App\Repository\CaisseRepository;
use App\Repository\CompteRepository;
use App\Repository\CotisationRepository;
use App\Repository\InscriptionRepository;
use App\Repository\MembreRepository;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DataBaseService extends AbstractController
{

    public $membreRepository;
    public $inscriptionRepository;
    public $caisseRepository;
    public $cotisationRepository;
    public $compteRepository;

    public $membreTable;
    public $inscriptionTable;
    public $caisseTable;
    public $cotisationTable;
    public $compteTable;
    public $db;

    function __construct(MembreRepository $membreRepository, InscriptionRepository $inscriptionRepository,
    CaisseRepository $caisseRepository, CotisationRepository $cotisationRepository, ManagerRegistry $managerRegistry
    , CompteRepository $compteRepository) {

        $this->membreRepository = $membreRepository;
        $this->inscriptionRepository = $inscriptionRepository;
        $this->caisseRepository = $caisseRepository;
        $this->cotisationRepository = $cotisationRepository;
        $this->compteRepository = $compteRepository;

        $this->membreTable = new Membre();
        $this->compteTable= new Compte();
        $this->inscriptionTable = new Inscription();
        $this->caisseTable = new Caisse();
        $this->cotisationTable = new Cotisation();

        $this->db=$managerRegistry->getManager();
    }

    function con_with_pdo_to_mysql(){

        try {
            $pdo=new \PDO('mysql:host=localhost;dbname=cotisation','root','');
        } catch (Exception $th) {
            die( $th->getMessage());
        }

        return $pdo;
    }

    /**
     * Cette méthode insert les données dans la base de données
     * @return void
     */
    public function write()
    {
        $this->db->flush();
    }

    /**
     * Cette méthode prépare et insert les données de la table courante
     * @return void
     */
    public function save($object)
    {
        $this->db->persist($object);
        $this->write();
    }

    /**
     * Cette méthode affiche un enregistrement par son ID de la table courante
     * @return void
     */
    public function find($repo,$id)
    {
        $fetchId = $repo->find($id);
        return $fetchId;
    }

    /**
     * Cette méthode supprime tous les enregistrements de la table courante
     * @return void
     */
    public function deleteAll($repo)
    {
        $alldata = $repo->findAll();
        foreach ($alldata as $key => $value) {
            $this->db->remove($value);
        }
    }

    /**
     * Cette méthode supprime un seul enregistrement de la table courante
     * @return void
     */
    public function deleteOne($repo,$id): void
    {
        $id_table = $this->find($repo,$id);
        $this->db->remove($id_table);
    }
}
