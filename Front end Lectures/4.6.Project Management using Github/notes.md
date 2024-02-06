Project managment :-
-manage the project :- diff Domains - IT related project - In IT domain related project the majority involves is Coding - manging the Source code

#Project Managment in It Domain means managing the source code.

Source code managment - It is a tool or a software that can be used to manage the source code.

1 Notebook => 27 students are present --> can you write your name in this notebook at the same time ??

1 code base(code available at single location) => 27 people engineers -->

-sharing the code among the team member was very difficult.
-unable to maintain a standard format
-issues was raised while mering the diff code.
-time was wasted/Resources was wasted :-

-SCM is also called as VCS - version control system.

One of the SCM(source code managment)/VCS(version control system) tool is called as GIT
-maintain a standard format
-time saving

2 Categories of VCS:-
1.:- Centralize VCS / non Distributed
-->the storage of the code is centralized.
-->back up is mandatory.
Eg:-SVN :-sub version
google using SVN.

2.:- DeCentralize VCS / Distributed VCS:-
-->the storage is distributed.multiple copy's is created.
-->backup is not mandatory.
Eg:-Git

GIT :- Global information Tracker.
-it is a Distributed VCS sofftware.
it is a 3rd generation VCS tool.

in git there are 2 diff type :-
1.Local Git
-when you install the git software in your personal machine
Eg:- your own system
2.Remote machine :-
-when you install the git software on some remote
-machine/server/vitual machine/ cloud/ etc..
Eg :- Github, Gitlab, Bitbucket, Codecommit,Azure Git, etc...

AGENDA:-
DEMO:-
1.Setting up a github account
2.Installing and configuring Git
3.Local and Remote Repos
4.Deploying React App on Heroku.

MATERIAL :-
what is GIT :-
it is a free, high-quality distributed version control system suitable for tracking modifications in source code in software development.

-speed and efficiency
-Data integrity
-support for distributed and non-linear workflows

what is GitHub :- it is a web-base git repository. this hoisting service has cloud-based storage.Github offers all distributed verion control and source code managment functionality of Git while adding it's own features.

Setting up the Git:-
git config --global user.name "your_user_name"
git config --global user.email "your_email"

To verify it you can type

git config --global --list

Local and Remote Repository :-

- The local Repository is a git reposity that is stored on your computer.
- The remoter repository is a Git repository that is stored on some remote computer.
  -The remote repository is usually used by teams as a central repo into which everyone pushed the changes from hi local repo and from which everyone pulls changes to his local repo.

-THe .git folder contains all info that is neccsary for the project and all info relating commits.
-The .git folder will contains details of every single change made to the code base.
-The .git folder is hidden to prevent accidental deletion or modificaion of the folder.

Interview Questions :-

1.what does git status command do ?
-git status command is used for showing the differnce between the working directory and the index which is helpful for understanding git in-depth and also keep track of the tracked and non-tracked changes.

2.What does git add command do?
-This command adds files and changes to the index of existing directory
-you can add all changes at once using git add . command
-you can add files one by one specifically using git add <File name> command.
-you can add content of a particualr folder by using git add <folder name> command.

Why do we not call git “pull request” as “push request”?
-1."push request" is termed so bcoz it is done when the target repo req up to push our changes to it.
-2."pull req" it named as such due to the fact that the repo req the target repo to grab (or pull) the changes from it.

what is conflict ?
-->git usually handle features merge automatically but something while working in a team environment, there might be cases of conficts such as -
-when two separete brances have changes to the same line in a file
-A file is deleted in one branch but has been modified in the other.
--> these conflicts have to be solved manually after discussion with the team as git will not be able to predict what and whose changes have to be given precedence.

How will you resolve conflict in Git?
1.conflict occur whenever there are multiple people working on the same file across multiple branches, in such cases, git won't be able to resolve it automatically as it is not capable of deciding what changes has to get the precedence. \
2.identify the files that have conflicts,
-discuss with members who have worked on the file and ensure with members who have worked on the file and ensure that the require changes are done in the file

- add these files to the staged section by using the git add command
- commit these changes using the git commit command
- finally, push the changes to the branch using the git.
