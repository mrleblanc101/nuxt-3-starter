# Déploiement

## GitLab CI

Les déploiements vers les environnements sont démarrés manuellement (ou automatiquement selon la configuration du projet) lorsqu'un commit est poussé vers certaines branches.

**Environnement de développement**: branche develop ou staging (étape de build démarrée automatiquement) ou n'importe quelle branche (étape de build démarrée manuellement)

**Environnement de préproduction**: lorsqu'un nouveau tag est poussé

**Environnement de production**: manuellement lorsqu'un nouveau tag est poussé

La page indiquant le statut du pipeline de votre commit vous permettra de démarrer les étapes manuelles.
