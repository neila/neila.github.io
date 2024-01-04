---
created: 2024-01-03 05:00:29
last_edited: 2024-01-04 08:23:27
tags:
  - git
  - gpg
---
# Updating GPG keys for git commits
Recently, I had to update my [GPG](GPG) key due to the change in email address. I had been signing all of my git commits with a key associated with an outdated identity, but since I have then lost the associated email address, I needed a way to update my commits to a new key associated with a different email.

## Updating the associated GPG key to a new UID
First, I updated the UID associated with my key. In my situation, it was only the name and email associated with the key that I needed to change; [not the key itself](#Actually, turns out I didn't have to go through all of that). But you can also just prepare a new/separate key just as easily and skip to the next section.

```
# open key editor
gpg --edit-key keyID

####### inside editor ########
# add new UID
gpg > adduid
Real name: YourName
Email address: You@Email.com

# update UID trust level
gpg > trust

# select old UID (N = index)
gpg > uid N

# remove old UID
gpg > deluid

# save key
gpg > save
```

## Updating git config to use the new signing key
Then, I updated my git config to bind to my new GPG key (or rather in my situation, the same key but with an updated UID).

```
git config --global user.name YourName
git config --global user.email You@Email.com

# if you also need to change the key itself
git config --global user.signingkey FingerprintOfYourNewKey
```
alternatively, you can also directly edit `~/.gitconfig`.

## Rewriting the metadata for past commits
Finally, I rewrote the metadata for the past range of commits using a rebase.
```
git rebase -r --root --exec 'git commit --amend --no-edit --reset-author'
```

`--exec` will run the `git commit` step after each commit is rewritten. This is the equivalent of running `git commit && git rebase --continue` repeatedly from the first commit.

## Actually, turns out I didn't have to go through all of that
If you're like me and only had to update the UID but not the key itself, a simpler alternative is to create a file called `.mailmap` at the base of the repository. This coalesces together commits by the same person in the git shortlog.

`New Name <You@Email.com> Old Name <Your@OldAddress.com>`

This simpler method saves you from worrying about any conflicts with upstream and accidentally losing data, since you aren't rewriting the git history unlike the rebase method.

## References
- [https://stackoverflow.com/questions/750172/how-do-i-change-the-author-and-committer-name-email-for-multiple-commits](https://stackoverflow.com/questions/750172/how-do-i-change-the-author-and-committer-name-email-for-multiple-commits)
- [https://schacon.github.io/git/git-shortlog.html](https://schacon.github.io/git/git-shortlog.html)
