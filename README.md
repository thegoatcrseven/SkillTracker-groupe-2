                                  INTRODUCTION

**SkillTracker** est une plateforme de suivi de compétences destinée aux étudiants en développement web, leur permettant de documenter et suivre leur progression dans l'apprentissage des compétences front-end et back-end. Ce projet vise à offrir une expérience interactive où les utilisateurs peuvent fixer des objectifs d'apprentissage, évaluer leurs compétences à l'aide de quiz, et visualiser leur progrès grâce à un tableau de bord.

## Objectifs du projet

Le but de SkillTracker est d'aider les étudiants à :

-   Documenter et suivre leurs compétences en développement web.
-   Planifier des objectifs d'apprentissage hebdomadaires ou mensuels.
-   Visualiser leurs progrès sous forme de graphiques interactifs.
-   Évaluer leurs compétences via des quiz dynamiques.

## Fonctionnalités principales

### Suivi des compétences :

-   Ajout de compétences spécifiques (par exemple, "Maîtriser Express.js", "Hooks en React").
-   Mise à jour du niveau d'avancement pour chaque compétence : débutant, intermédiaire, avancé.

### Planification des objectifs d'apprentissage :

-   Définition d'objectifs hebdomadaires ou mensuels pour chaque compétence.
-   Envoi de rappels simulés pour encourager les étudiants à suivre leur plan.

### Visualisation des progrès :

-   Tableau de bord front-end permettant de visualiser les progrès sous forme de barres de progression.
-   Classement des compétences par niveau d’avancement ou par objectifs atteints.

### Quiz pour évaluer les compétences :

-   Quiz dynamiques générés sur des compétences spécifiques (ex. JavaScript, React).
-   Les résultats des quiz influencent la progression des compétences dans l’application.

## Architecture du projet

### Back-End

Le back-end utilise Node.js, Express et une base de données SQLite pour stocker et gérer les données des compétences et des objectifs.

#### Routes API :

-   **POST /skills** : Ajouter une nouvelle compétence à suivre.
    
-   **GET /skills** : Récupérer la liste des compétences ajoutées par l’utilisateur.
    
-   **PUT /skills/**
    
    : Mettre à jour le niveau de progression d'une compétence.
    
-   **DELETE /skills/**
    
    : Supprimer une compétence.
    
-   **POST /goals** : Ajouter un objectif pour une compétence.
    
-   **GET /goals** : Récupérer les objectifs planifiés.
    
-   **PUT /goals/**
    
    : Marquer un objectif comme atteint.
    

#### Base de données :

La base de données SQLite stocke les informations suivantes :

-   **Compétences** : nom, niveau de progression.
-   **Objectifs** : compétence liée, date d’échéance, statut (atteint/non atteint).

### Front-End

Le front-end est construit avec React et offre une interface réactive pour que les étudiants puissent :

-   Suivre leurs compétences.
-   Fixer des objectifs.
-   Visualiser leurs progrès à travers des graphiques.
-   Répondre à des quiz pour évaluer leurs compétences.
## Installation et déploiement

### Prérequis :

-   Node.js
-   SQLite

### Étapes d'installation :

1.  Cloner le dépôt GitHub :

`https://github.com/thegoatcrseven/SkillTracker-groupe-2.git`

    
2.  Installer les dépendances :
    
    `npm install` 
    
3.  Lancer le serveur :
    
    `npm start` 
    

### Base de données :

Créer la base de données SQLite :

`npm run migrate` 

----------![image](https://github.com/user-attachments/assets/17840732-87f6-467b-bbb4-387aecd3b8f9)



