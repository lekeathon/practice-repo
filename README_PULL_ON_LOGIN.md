Automatic git pull on macOS login

Overview
- This workspace includes a script that can run at login and pull updates for one or more local git repositories.

Files added
- scripts/pull-on-login.sh : the script that reads `.pull_repos` and runs `git pull`.
- launch-agent/com.example.pullrepos.plist : example LaunchAgent plist (edit path before installing).
- .pull_repos.example : example list of repository absolute paths.

Quick install (manual steps you run on your Mac)
1. Copy the example repo list to the script folder and edit it:

```bash
cp .pull_repos.example scripts/.pull_repos
# edit scripts/.pull_repos and put absolute paths to your repos
```

2. Make the script executable:

```bash
chmod +x scripts/pull-on-login.sh
```

3. Copy the plist to your `~/Library/LaunchAgents` and edit the path inside the plist if needed:

```bash
mkdir -p ~/Library/LaunchAgents
cp launch-agent/com.example.pullrepos.plist ~/Library/LaunchAgents/
# Edit the plist to ensure the ProgramArguments path points to the script, for example:
# /Users/<you>/Documents/practice-repo/scripts/pull-on-login.sh
```

4. Load the LaunchAgent (runs at login and now):

```bash
launchctl load ~/Library/LaunchAgents/com.example.pullrepos.plist
```

5. To test/run immediately without logging out/in:

```bash
launchctl start com.example.pullrepos
```

Notes & security
- The script runs `git pull` in your repos; ensure any required SSH keys or credential helpers are configured so pulls don't prompt for passwords.
- The LaunchAgent runs as your user at login; it cannot run if the machine is locked at boot before your session.
- If you want the script to run only when network is available, you can add checks to the script (e.g., ping or `scutil --nc list`) or use `StartOnMount` behaviors.

Would you like me to install and load the LaunchAgent for you now? I can prepare the plist with the correct absolute path and show the exact commands to run (you'll need to run them locally).