/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a system that allows you to start a repository of your code. This repository allows you to keep itterations of your code which can be usefull for bug fixes or file corruption by allowing you to access previous versions of your code.";
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a online cloud repository management website. It can be extreemly usefull to work in collaberation with other coders, It is also free which is very nice.";
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "git init - This is a command that you use in your terminal which allows you to initialize (Create) your respository.";
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let  gitCloneDefinition = "git clone (githubURL) - This command will allow you to clone a repository based on the url from GitHub and will bring it to your local machine";
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "git status - This coommand allows you to check your code against what is saved in your repository and will show you if you have made any changes and where those changes are.";
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "git add (specific files, .) - This command is used to add specific or all files in your folder/repository to the next git commit command.";
let gitAddCode = "git add . - will add all files in the folder/reposity.";
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "git commit -m message - This command commits all that was defined in the previous git add command to the local repositroy on your local machine.";
let gitCommitCode = `git commit -m "initial commit"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "git push (repo_URL)- This command will push all of the items in your current repository to the GitHub version of said repository.";