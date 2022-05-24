## FR ##

# GPM Discord Rich Presence #
Ce projet a été réalisé par Ravriel avec electronjs et le package discord-rpc.
Cette application vous permet de setup semi-automatiquement une Discord RP pour vos services sur
l'Addon Grand Paris-Moulon (GPM).

# Fonctionnalités #
Vous pourrez activer une Discord RP pour chaque ligne des réseaux proposés par GPM. Cette RP montrera en
permanence votre temps de jeu écoulé, votre provenance et votre destination de ligne (semi-auto).
En alternance, il montrera le repaint de votre bus ainsi que le modèle de votre bus (manuel) ainsi que le temps
restant à votre trajet.

# Comment ça marche #
Étant donné qu'il n'y a pas d'API en direct disponible pour le jeu OMSI 2, tout a été créé à la main et calculé
à la main, à l'aide notamment des documents fournis et détenus par Créations AgroaS-144, développeur de l'Addon GPM.
C'est à cause du manque de cette API que l'application n'est que semi-automatique.
Le temps restant à votre trajet n'est, de fait, pas calculé en temps réel, mais est le temps que vous devriez
mettre en respectant votre fiche horaire, et peut donc différer avec le temps restant indiqué dans le jeu,
notamment en cas d'accident impliquant un retard conséquent.

# Crédits #
Cette application a été réalisée en accord avec Créations AgoraS-114 qui m'a prêté l'entièreté du contenu
nécessaire. Je les remercie pour cette confiance.
Tout contenu de l'application appartient donc à Créations AgroaS-144, je ne peux assurer le maintient de cette
application s'il m'est interdit d'utiliser leur contenu dans le futur.


## EN ##

# GPM Discord Rich Presence #
This project was realized by Ravriel with electronjs and the discord-rpc package.
This application allows you to semi-automatically set up a Discord RP for your services on the
Grand Paris-Moulon Addon (GPM).

# Features #
You will be able to activate a Discord RP for each line of the networks offered by GPM.
This RP will permanently show your elapsed play time, your origin and destination of the line (semi-auto).
Alternatively, it will show the repaint of your bus as well as the model of your bus (manual) and the remaining
time of your trip (auto).

# How it works #
As there is no live API available for the OMSI 2 game, everything has been created by hand and calculated by hand,
using documents provided and held by AgroaS-144 Creations, developer of the GPM Addon.
It is because of the lack of this API that the application is only semi-automatic.
The remaining time of your journey is not calculated in real time, but is the time you should take by respecting
your timetable, and can therefore differ from the remaining time indicated in the game, especially in case of an
accident involving a significant delay.

# Credits #
This application has been realized in agreement with Créations AgoraS-114 who lent me all the necessary content.
I thank them for this trust.
All the content of the application belongs to Créations AgroaS-144, I cannot ensure the maintenance of this
application if I am forbidden to use their content in the future.